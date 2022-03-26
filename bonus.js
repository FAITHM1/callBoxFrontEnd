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
// I created an empty array, that's going to be populated with matching values.
const matchValues = [];
//takes each value of array_one and compares it to array_two
array_one.map((x) => {

  for (let i = 0; i < array_two.length; i++) {
    if (x === array_two[i]) {
      //pushes the matching value on to matchValues
      return matchValues.push(x);
    }
  }
});
console.log(matchValues);
