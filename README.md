# demo-contracts

Example repo to demonstrate bytecode verification review feature for contract upgrades in OpenZeppelin Defender.

## Scripts

- `npm deploy` - Deploy token contract, add to Defender Admin and verify bytecode
- `npm upgrade` - Deploy token contract V2, verify bytecode and create Admin proposal for signers to review
- `npm upgrade-admin` - Same as `npm upgrade`, using `admin-client` instead

## Reference

- [Bytecode Verification - Docs](https://docs.openzeppelin.com/defender/admin#bytecode-verification)
- [Hardhat Defender - NPM](https://www.npmjs.com/package/@openzeppelin/hardhat-defender)
- [Upgrades Repo](https://github.com/OpenZeppelin/openzeppelin-upgrades)
- [Hardhat Upgrades Plugin Documentation](https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#defender-propose-upgrade)
- [Defender Admin Client - NPM](https://www.npmjs.com/package/defender-admin-client)
