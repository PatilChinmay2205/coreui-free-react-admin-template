const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1.Declare an empty array
// const arr = [];

// 2.Declare an array with more than 5 number of elements
// console.log((arra = [1, 2, 3, 4, 5]));

// 3.Find the length of your array
// console.log(webTechs.length);

// 4.Get the first item, the middle item and the last item of the array
// console.log(webTechs[0]);
// console.log(webTechs[(webTechs.length / 2) | 0]);
// console.log(webTechs[webTechs.length - 1]);

// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const mixedDataTypes = [
//   [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
//   ],
//   ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"],
//   4,
//   5,
//   6,
//   "Character",
//   "Number",
// ];
// console.log(mixedDataTypes);
// console.log(mixedDataTypes.length);

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7.Print the array using console.log()
// console.log(itCompanies);

// 8.Print the number of companies in the array
// console.log(itCompanies[itCompanies.length]);

// 9.Print the first company, middle and last company
// console.log(itCompanies[0]);
// console.log(itCompanies[(itCompanies.length / 2) | 0]);
// console.log(itCompanies[itCompanies.length - 1]);

// 10.Print out each company
// console.log(itCompanies);

// 11.Change each company name to uppercase one by one and print them out
// const upper = [
// itCompanies[0].toUpperCase(),
// itCompanies[1].toUpperCase(),
// itCompanies[2].toUpperCase(),
// itCompanies[3].toUpperCase(),
// itCompanies[4].toUpperCase(),
// itCompanies[5].toUpperCase(),
// itCompanies[6].toUpperCase(),
// ];
// console.log(upper.toString());

// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toString());

// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let exist = itCompanies.indexOf("IBM");
// if (exist != -1) {
// console.log("IBM");
// } else {
// console.log("Company Not found");
// }

// 14.Filter out companies which have more than one 'o' without the filter method

// 15.Sort the array using sort() method
// console.log(itCompanies.sort());

// 16.Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// 17.Slice out the first 3 companies from the array
// console.log(itCompanies.slice(3));

// 18.Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3));

// 19.Slice out the middle IT company or companies from the array
// console.log(itCompanies.splice(2, 2));

// 20.Remove the first IT company from the array
// console.log(itCompanies.shift());

// 21.Remove the middle IT company or companies from the array

// 22.Remove the last IT company from the array
// console.log(itCompanies.pop());

// 23.Remove all IT companies
// while (itCompanies.length > 0) {
//   itCompanies.pop();
// }
// console.log(itCompanies);
// OR
// console.log(0, itCompanies.length);
// OR
// console.log((itCompanies.length = 0));
