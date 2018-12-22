const aocLoader = require('aoc-loader');
require('dotenv').config()
var startFrequency = 0
aocLoader(2018, 1).then(data => {
  console.log(part1(data))
  console.log(part2(data))
});


function part1(data) {
  var frequencies = data.split("\n").map(Number)
  for(var i=0; i<frequencies.length; i++) {
    startFrequency += frequencies[i]
  }
  return startFrequency
}

function part2(data) {
  var frequencies = data.split("\n").map(Number)
  var seenFrequencies = [0]
  while(1) {
  for(var i=0; i<frequencies.length; i++) {
    startFrequency += frequencies[i]
    if(seenFrequencies.includes(startFrequency)) {
      return startFrequency
    }
    seenFrequencies.push(startFrequency)
  }
}
}


