const { ethers , upgrades, defender} = require('hardhat');
const {AdminClient} = require('defender-admin-client');
const {appendFileSync, readFileSync} = require('fs');

const NETWORK = 'goerli';
const NAME = "VotingTokenX";
const REPO_URL = ``;
const contractABI = JSON.stringify(JSON.parse(readFileSync(`artifacts/contracts/${NAME}.sol/${NAME}.json`, 'utf8')).abi);

async function main() {
  const adminClient = new AdminClient({apiKey: process.env.API_KEY, apiSecret: process.env.API_SECRET});

  // deploy contract
  const Contract = await ethers.getContractFactory(NAME);
  const contract = await upgrades.deployProxy(Contract).then(f => f.deployed());

  console.log(`Deployed to: ${contract.address}\n`);

  // add deployed contract to admin
  const contractDetails = {
    network: NETWORK,
    address: contract.address,
    name: NAME,
    abi: contractABI,
  };
  const newAdminContract = await adminClient.addContract(contractDetails);
  appendFileSync('.env', `\n${NAME}=${contract.address}`);

  // verify compilation of deployed contract
  // const verification = await defender.verifyDeployment(contract.address, NAME, REPO_URL);
  // console.log(`Verified artifact with hash`, verification.providedSha256);
}

main().catch(console.error);
