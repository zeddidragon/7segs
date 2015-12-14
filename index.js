/*
    0
  ___
6|   | 1
 |_2_|
3|   |
 |_4_| 5

.d1   .d2

/*








0
01
012
0123
 1234
  234
   34
    4
    45
  2 45 
  2 456
0 2 456
0 2  56
0 2   6
0     6
*/

function snakeSegment (segment, number) {
  number = number % 15
  if (segment === 0) {
    return (number + 4) % 15 < 9
  } else if (segment === 2) {
    return number > 1 && number < 6 || number > 8 && number < 14
  } else if (segment < 4) {
    return number >= segment && number < segment + 4
  } else if (segment === 4) {
    return number > 3 && number < 12
  } else if (segment === 5){
    return number > 7 && number < 13
  } else {
    return number > 9
  }
}

function sandSegment (segment, number) {
  number = number % 15
  if (segment < 3) {
    return segment === number % 3
  } else {
    return (segment - 2) <= number / 3
  }
}

function isDotLit (dot, number) {
  return dot & (Math.floor(number / 15) % 4)
}

var counter = 0;

function checkSegments(className, func) {
  var segments = document.querySelectorAll(className)
  for (var i = segments.length - 1; i >= 0; i--) {
    var segment = segments[i]
    var id = segment.dataset.id
    segment.classList.toggle('active', func(+id, counter))
  }
}

function increment() {
  document.getElementById('number').textContent = counter
  checkSegments('#snake .segment', snakeSegment)
  checkSegments('#sand .segment', sandSegment)
  checkSegments('.dot', isDotLit)
  counter++
  setTimeout(increment, 1000)
}

setTimeout(increment, 100)

