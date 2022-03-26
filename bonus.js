const array_one = [
  "apple",
  "dog",
  "cat",
  "food",
  "kite",
  "elephant",
  "lunch",
  "book",
  "laptop",
];

const array_two = ["dog", "goose", "kite", "meal", "laptop"];

const matchValues = [];
array_one.map((x) => {
  for (let i = 0; i < array_two.length; i++) {
    if (x === array_two[i]) {
      return matchValues.push(x);
    }
  }
});
console.log(matchValues);
