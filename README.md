# Smart Contract Bytecode Verification

Example repo to demonstrate bytecode verification review feature for contract upgrade proposals in OpenZeppelin Defender.

## Scripts

- `npm deploy` - Deploy token contract, add to Defender Admin and verify bytecode
- `npm upgrade` - Deploy token contract V2, verify bytecode and create Admin proposal for signers to review
- `npm upgrade-admin` - Same as `npm upgrade`, using `admin-client` instead

## Walkthrough

1. Write an upgradeable smart contract (or use wizard.openzeppelin.com to generate one) and save in /contracts
2. Compile with `npx hardhat compile` to generate build artifacts and ABI
3. Add the build artifact file(s) version control, commit and push to remote repository (`git add . && git commit -m "add build artifacts" && git push origin main`)
4. Add ABI and URL to remote build artifact to `deploy-and-verify.js` script
5. Run `npm deploy`
6. 

## Reference

- [Bytecode Verification - Docs](https://docs.openzeppelin.com/defender/admin#bytecode-verification)
- [Hardhat Defender - NPM](https://www.npmjs.com/package/@openzeppelin/hardhat-defender)
- [Upgrades Repo](https://github.com/OpenZeppelin/openzeppelin-upgrades)
- [Hardhat Upgrades Plugin Documentation](https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#defender-propose-upgrade)
- [Defender Admin Client - NPM](https://www.npmjs.com/package/defender-admin-client)
