"use strict";

const crypto = require("crypto");

// The Power of a Smile
// by Tupac Shakur
const poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

const Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain
poem.forEach((line, index) => {
	Blockchain.blocks.push(createBlock(line, index + 1));
});

function createBlock(_data, index) {
	const block = {
		index: index,
		prevHash: Blockchain.blocks[index - 1]["hash"],
		data: _data,
		timestamp: Date.now(),
	};
	block.hash = blockHash(block);
	return block;
}

console.info(`Blockchain is valid: ${JSON.stringify(Blockchain)}`);

// **********************************

function blockHash(bl) {
	return crypto
		.createHash("sha256")
		.update(`${bl.index} ${bl.data} ${bl.timestamp} ${bl.prevHash}`)
		.digest("hex");
}
