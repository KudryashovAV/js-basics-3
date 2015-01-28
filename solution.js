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
  var arr = [];
  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(item, list) {
  return {value: item, rest: list};
}

function nth(n, list) {
  if (n == 0) {
    return list.value;
  } else if (list.rest == null) {
    return undefined;
  } else {
    return nth(n - 1, list.rest);
  }
}

function deepEqual(a, b) {
  if (a != null && b != null && typeof(a) == 'object' && typeof(b) == 'object') {
    var new_a = Object.getOwnPropertyNames(a);
    var new_b = Object.getOwnPropertyNames(b);

    if (new_a.length !== new_b.length) {
      return false;
    }

    for (i = 0; i < new_a.length; i++) {
      if (!b.hasOwnProperty(new_a[i])) {
        return false
      } else if (!deepEqual(a[new_a[i]], b[new_a[i]])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
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
