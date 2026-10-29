function consecutiveSubstrings(string) {
  // Walk every possible starting index, then take every possible
  // ending index at or after it. Every such slice is consecutive
  // because it never skips a character.
  const substrings = [];
  const length = string.length;

  for (let start = 0; start < length; start++) {
    for (let end = start + 1; end <= length; end++) {
      substrings.push(string.slice(start, end));
    }
  }

  return substrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));

  console.log("");

  console.log("Expecting: ['x', 'xy', 'xyz', 'y', 'yz', 'z']");
  console.log("=>", consecutiveSubstrings('xyz'));

  console.log("");

  console.log("Expecting: ['a', 'aa', 'aaa', 'a', 'aa', 'a']");
  console.log("=>", consecutiveSubstrings('aaa'));
}

module.exports = consecutiveSubstrings;
