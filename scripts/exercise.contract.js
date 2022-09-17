const MetaCoin = artifacts.require("MetaCoin");

async function exerciseContract() {
  const mc = await MetaCoin.deployed();

  const tx = await mc.increment(5);
  console.log(`\nIncrement by 5 ${tx.tx}.`);
  const t = tx.logs[0].args;
  console.log(`An Increment(${t[0]}) was emitted.`);

  const number = await mc.number();
  console.log(`The number is: ${number.toNumber()}.`);
}

module.exports = async function (callback) {
  try {
    await exerciseContract();
  } catch (e) {
    console.error(e);
  }
  callback();
};
