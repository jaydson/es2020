const max = Number.MAX_SAFE_INTEGER;

// We lost precision, look at the values, same when we add 1 and when we add 2
console.log(max +1); // 9007199254740992
console.log(max +2);// 9007199254740992

// With BigInt we have precision (note to use "n")
console.log(BigInt(max) + 1n); // 9007199254740992n
console.log(BigInt(max) + 2n); // 9007199254740993n