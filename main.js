var books = 
	[
		{
			title: "Triple Threat",  
			pages: 952,
			fivestar: 101,
			onestar: 3,
			author: "Joel Goldman",
			price: .99,
			genre: "fiction"
		},
		{
		    title: "An Invisible Thread",
			pages: 272,
			fivestar: 814,
			onestar: 16,
			author: "Laura Schroff",
			price: 9.06,
			genre: "biography"
		},
		{
		    title: "Time And Again",
			pages: 399,
			fivestar: 224,
			onestar: 14,
			author: "Jack Finney",
			price: 9.27,
			genre: "fiction"
		},
		{
		    title: "Angels Fallen",
			pages: 302,
			fivestar: 46,
			onestar: 24,
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

var sum = pageNumbers.reduce(function(value1, value2) {
return value1 + value2;
});

function average (sum,elements) {
return sum / elements;
};

console.log(average(sum,pageNumbers.length));



