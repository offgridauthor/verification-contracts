const { defender } = require('hardhat');
require('dotenv').config();

// deploy v2 implementation and propose upgrade, submitting bytecode for verification

const PROXY_ADDRESS='0x65d6ed59533e5D89D15d4663cA6b209Bf2E8436a';
const BUILD_ARTIFACT_URL='https://raw.githubusercontent.com/offgridauthor/verification-contracts/main/artifacts/build-info/b42f250d48743104c16e746045c66dea.json';

async function main() {
  const proposal = await defender.proposeUpgrade(PROXY_ADDRESS, 'VotingTokenV2',{ 
    bytecodeVerificationReferenceUrl: BUILD_ARTIFACT_URL,
    kind: 'uups',
    description: `Upgrading to new version deployed at ${BUILD_ARTIFACT_URL}`,
    multisig: '0x88BECCF8F957649c7701b670BFAA7318967f7412',
    multisigType: 'Gnosis Safe', 
  });
// multisig options: 'Gnosis Safe' | 'Gnosis Multisig' | 'EOA';
// Gnosis Safe is the latest offering. it is what's created if you use Defender to create your multisig. 
// Gnosis multisig - a legacy offering of gnosis prior to the Safe
// EOA - eg metamask, a single signer account

  const verification = proposal.verificationResponse;
  console.log(`Created new upgrade proposal at ${proposal.url} for artifact with digest ${verification?.providedSha256 ?? 'unknown'} (match ${verification.matchType})`);
}

main().catch(console.error);
