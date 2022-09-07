const { defender } = require('hardhat');
require('dotenv').config();

const V2ADDRESS='0x71913A3F3ABFa38630b8623a097ebfCbacCFFb60';
const BUILD_ARTIFACT_URL='https://raw.githubusercontent.com/offgridauthor/verification-contracts/main/artifacts/build-info/b42f250d48743104c16e746045c66dea.json';

async function main() {
  const verification = await defender.verifyDeployment(V2ADDRESS, "VotingTokenV2", BUILD_ARTIFACT_URL);
  console.log(`Verified artifact with hash`, verification.providedSha256);
}

if (require.main === module) {
  main().then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
