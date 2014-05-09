var books = 
	[
		{
			title: "Triple Threat",  
			pages: 952,
			fivestar: 101,
			fourstar: 72,
			threestar: 23,
			twostar: 6,
			onestar: 3,
			totalReviews: 208,
			author: "Joel Goldman",
			price: .99,
			genre: "fiction"
		},
		{
		    title: "An Invisible Thread",
			pages: 272,
			fivestar: 814,
			onestar: 16,
			totalReviews: 1173,
			author: "Laura Schroff",
			price: 9.06,
			genre: "biography"
		},
		{
		    title: "Time And Again",
			pages: 399,
			fivestar: 224,
			onestar: 14,
			totalReviews: 356,
			author: "Jack Finney",
			price: 9.27,
			genre: "fiction"
		},
		{
		    title: "Angels Fallen",
			pages: 302,
			fivestar: 46,
			onestar: 24,
			totalReviews: 128,
			author: "Francis Joseph Smith",
			price: 10.70,
			genre: "fiction"
		}
	]

// make an array of objects. those objects are the books you've created
// [{},{}]
// Get the pages numbers and make an array of pages. ie [100, 200, 300] 
// then reduce the pages array and divide by length of pages array
var pageNumbers = books.map(function(value){
	return value.pages;
});
// This "maps" through my array of objects called books and returns an array
// of page numbers.

var pageSum = pageNumbers.reduce(function(value1, value2) {
	return value1 + value2;
});
// This takes my array of page numbers and reduces (in this case adds them together)
// into one number.

function average (sum,elements) {
	return sum / elements;
};
// This is a general function that will average whatever I use in it.

console.log(average(pageSum,pageNumbers.length));
// Here, I call my average function and pass my sum variable and page numbers variable
// into it, and log it to the console.

var priceList = books.map(function(value){
	return value.price;
});

var priceSum = priceList.reduce(function(value1,value2) {
	return value1 + value2;
});

console.log(average(priceSum,priceList.length));
// This was just practicing doing the same thing with prices.

var authorNames = books.map(function(name){
	return name.author;
});

console.log(authorNames);

var array = [1,2,3,4,5];


array.reduce(function(value1,value2){
return value1 + value2});

array.reduce(function(value1,value2){
return value1 * value2});

array.reduce(function(value1,value2){
return value1 - value2});

// Just practicing using the .reduce function

[500, 200, 100].forEach(function(value){
console.log(value / 2);
});

var divideArray = [500, 200, 100]

var empty = [];

divideArray.forEach(function(value){
return empty.push(value / 2);
});

console.log(empty);
// Playing with forEach

































