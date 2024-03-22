// Q1. Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
let  arr2 = [true,"green","where",12,56];
console.log(arr1[4]);
console.log(arr2[4]);

// Q2. Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];


stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = stringmyPets.join(' ');
console.log(pets);

// Q3. Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

arr3 =[-5,9,5,3,2,-3,6,8,4,1];
let arr = arr3.sort();
console.log(arr);

// Q4. Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arra = [["boy", "man", "girl","school", "girl", "woman"]];



// Q5. Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the","way","x",4];
let k = arr5.includes("food");
if(k==true){
    console.log("food");
}

else{
    console.log("the search word was not found");
}

//Q6. Write a JS script to sort the following string:let word = "renniw"

let reverseWord = "renniw";
let z = reverseWord.split("").reverse().join("");
console.log({z});
