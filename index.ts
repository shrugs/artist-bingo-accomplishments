const file = await Deno.readTextFile('./accomplishments.txt');

const accomplishments = file.split('\n').map((value) => parseInt(value)).map((value) => !!value).flatMap((accomplished, i) => {
  if (!accomplished) return [];
  return [i]
}).reduce((memo, actId) => memo | (BigInt(1) << BigInt(actId)), BigInt(0));

console.log('binary representation', accomplishments.toString(2))
console.log('decimal representation', accomplishments.toString(10))
