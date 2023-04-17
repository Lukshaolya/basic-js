const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currentChain : [],

  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    this.currentChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.currentChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.currentChain.join('~~');
    this.currentChain = [];
    return result
  }
};

module.exports = {
  chainMaker
};
