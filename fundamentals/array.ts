// Array and String

const arr = new Array<string>();

arr.push("hel", "hello");
arr.push("hel");
arr.push("hel");
arr.push("hel");
arr.push("hel");
arr.push("hel");
arr.push("hel");
arr.push("hel");

arr.pop();

arr.unshift();
arr.reverse();
arr.length;

for (const element of arr) {
  console.log(element);
}

const twodimensionalArray = new Array<Array<string>>();

twodimensionalArray.push(
  ["hello", "world"],
  ["hello", "world"],
  ["hello", "world"]
);

console.log(twodimensionalArray);

console.log(twodimensionalArray.length);

for (const row of twodimensionalArray) {
  for (const col of row) {
    console.log(col);
  }
}

const fruits = new Array<string>();
fruits.push("apple", "banana", "mango", "orange");

console.log(fruits.toString());

function findKthLargest(nums: Array<number>, k: number): number {
  const sorted = nums.sort((a, b) => a - b);
  const length = nums.length;

  return sorted[length - k];
}

console.log(findKthLargest([2, 10, 8, 7, 5, 4, 3, 9, 6, 0, 1], 9));
