function oddNumbers(nums) {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      odds.push(nums[i]);
    }
  }
  return odds
}


function longStrings(strings, minimumLength = 0){
  let longs = []
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minimumLength)
    longs.push(strings[i])
  }
  return longs
}
