// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MYT") {
        // We want the total suply is 1 milion. We need to add 18 zero on the right (because decimal is 18).
        // 1000000 00000 00000 00000 000
        _mint(msg.sender, 1000000000000000000000000);
    }
}
