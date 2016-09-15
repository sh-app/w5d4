
function myUniq(arr) {
  let uniq_arr = [];
  arr.forEach(function (el) {
    if (uniq_arr.includes(el) === false) {
      uniq_arr.push(el);
    }
  });

  return uniq_arr;
}

function myTwoSum(array) {
  let positions = [];
  for (let i = 0; i < array.length - 1; i++){
    for(let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        positions.push([i, j]);
      }
    }
  }
  return positions;
}


function myTranspose(array) {
  let transposed = [];
  for (let i = 0; i < array.length; i++) {
    let subarray = [];
    for (let j = 0; j < array.length; j++) {
      subarray.push(array[j][i]);
    }
    transposed.push(subarray);
  }
  return transposed;
}

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(callback) {
  newArray = [];
  this.myEach(function(el) {
    newArray.push(callback(el));
  });

  return newArray;
};

Array.prototype.myInject = function(callback){
  let accum = this[0];
  this.slice(1).myEach(function(el){
    accum += callback(el);
  });
  return accum;
};

function bubbleSort(array) {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    for (let i = 0; i < array.length - 1; i++){
      for(let j = i+1; j < array.length; j++) {
        if (array[i] > array[j]){
          let bigger = array[i];
          array[i] = array[j];
          array[j] = bigger;
          notSorted = true;
        }
      }
    }
  }
  return array;
}

function substrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length - 1; i++){
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.slice(i,j));
    }
  }
  return substrings;
}

function range(start, end){
  if (end < start) {
    return [];
  }
  else {
    result = [start].concat(range(start + 1,end));
  }
  return result;
}

function exponent1(base, exp) {
  if (exp === 0){
    return 1;
  }
  return (base * exponent1(base, exp - 1));
}

function exponent2(base, exp){
  if (exp === 0){
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else if ( (exp%2) !== 0) {
    return base * Math.pow(exponent2(base,((exp - 1)/2)),2);
  }
  else {
    return Math.pow(exponent2(base,(exp/2)),2);
  }
}

function fibonacci(n){
  if (n === 1) {
    return [0];
  }
  else if (n === 2){
    return [0,1];
  }
  results = fibonacci(n-1);
  results.push(results[results.length - 1] + results[results.length - 2]);
  return results;

}

function binarySearch(arr, target) {

  let midpoint = Math.floor(arr.length/2);

  if (arr[midpoint] === target) {
    return midpoint;
  }

  if (arr.length === 1) {
    return null;
  }

  let left_half = arr.slice(0, midpoint);
  let right_half = arr.slice(midpoint);

  if (arr[midpoint] > target) {
    return binarySearch(left_half, target);
  }

  else if (arr[midpoint] < target) {
    if (binarySearch(right_half, target) === null){
      return null;
    }
    result = midpoint + binarySearch(right_half, target);
    return result;
    }
  }

function mergeSort(arr) {

  if (arr.length === 1) {
    return arr;
  }
  let midpoint = Math.floor(arr.length/2);


  let left_half = arr.slice(0, midpoint);
  let right_half = arr.slice(midpoint);

  mergeHelper(mergeSort(left_half), mergeSort(right_half));
}

function mergeHelper(left, right) {
  result = [];

    if (left[0] > right[0]) {
      result.push(right[0]);
    }
    else {
      result.push(left[0]);
    }

  return result;
}
