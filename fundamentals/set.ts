const set = new Set<number>([1, 2, 4, 55, 6, 5, 4, 4, 3, 3, 3, 3, 3, 3]);
console.log(set.add(23423));
console.log(set.delete(1));
console.log(set.size);
console.log(set.has(1));
console.log(set);

for (const [key, value] of set.entries()) {
  console.log([key, value]);
}

// for(const value of set.keys())
// for(const value of set.values()) //both works same
