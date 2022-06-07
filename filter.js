function oddNumbers(nums) {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      odds.push(nums[i]);
    }
  }
  return odds
}

const odd = nums.filter((el) => el % 2 === 1)


function longStrings(strings, minimumLength = 0){
  let longs = []
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minimumLength)
    longs.push(strings[i])
  }
  return longs
}

const long = strings.filter((el, minimumLength = 0) => el.length >= minimumLength)
