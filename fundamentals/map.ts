const map = new Map<string, string>();
const map1 = new Map<string, string>();

// console.log(map == map1);

map.set("key", "value");

console.log(map);
console.log(map.get("nabhag"));
console.log(map.size);
console.log(map.delete("nabhag"));
console.log(map);
console.log(map.has("nabhag"));

for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}

for (const [key, value] of map.entries()) {
  console.log({ key, value });
}

map1.forEach((value, key, map) => {
  console.log({ value, key, map });
});
