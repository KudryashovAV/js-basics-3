function range(start, end, step) {
  if (!step) {step = 1};

  if ((end-start)*step < 0) { return []; }

  var arr = [start];
  var i = start + step;
  while (start < end ? i <= end : i >= end) {
    arr.push(i);
    i = i + step;
  }
  return arr;
}

function sum(numbers) {
  var arr = numbers.slice();
  var s = 0;
  while (arr > []) {
    s = s + arr.pop();
  }
  return s;
}

function reverseArray(arr) {
  var a = [];
  var i = arr.length - 1;
  while (0 <= i) {
    a.push(arr[i--]);
  }
  return a;
}

function reverseArrayInPlace(arr) {
  var rev = reverseArray(arr);
  for (i = 0; i < arr.length; i++) {
    arr[i] = rev[i];
  }
  return rev;
}

function arrayToList(arr) {
  var list = null;
  var i = arr.length - 1;
  while (i >= 0) {
    list = prepend(arr[i--], list);
  }
  return list;
}

function listToArray(list) {
  // Write a function that produces an array from a list
}

function prepend(item, list) {
  var new_list = {value: item, rest: list};
  return new_list;
}
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
