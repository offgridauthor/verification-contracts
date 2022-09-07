const { defender, upgrades } = require('hardhat');
require('dotenv').config();

//voting token proxy address
const ADDRESS=process.env.VotingToken
const V2_CONTRACT_BUILD=`https://raw.githubusercontent.com/offgridauthor/verification-contracts/main/artifacts/build-info/b42f250d48743104c16e746045c66dea.json`

async function main() {
  const VotingTokenV2 = await ethers.getContractFactory("VotingTokenV2");

  console.log('Deploying v2 upgrade...')
  const upgrade = await upgrades.prepareUpgrade(ADDRESS, VotingTokenV2);
  console.log("Upgrade deployed to:", upgrade);

  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(ADDRESS, VotingTokenV2);
  console.log("Upgrade proposal created at:", proposal.url);
  
  // verify upgrade
  const verification = await defender.verifyDeployment(upgrade, "VotingTokenV2", V2_CONTRACT_BUILD);
  console.log(`Verified artifact with hash`, verification.providedSha256);

}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
