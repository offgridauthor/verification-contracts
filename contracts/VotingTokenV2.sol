// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import './VotingToken.sol';

contract VotingTokenV2 is VotingToken {

  function getVersion() public pure returns(uint256) {
    return 2;
  }
}
