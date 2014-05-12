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

// Below I'm going to map the titles of books, find the title length,
// and average the title length. Not sure why you would need to do that.

var titles = books.map(function(string){
	return string.title;
});

console.log(titles);

var titleLength = [];

titles.forEach(function(string){
	return titleLength.push(titles.length);
})
// Line 128-132 didn't get me the info I wanted. Figured out all I needed to do
// was add .length as I did below. This does include the spaces as a value, but I
// figured you're never going to write the title without a space anyway.

var titles = books.map(function(string){
	return string.title.length;
});

var sum = titles.reduce(function(value1, value2){
return value1 + value2;
});

console.log(average(sum,titles.length));

// Now I'll do it and take out the spaces

var titles = books.map(function(string){
	return string.title;
});
// Gets me an array of titles in strings

var space = titles.join("");
// Joins individual title strings into one string and removes comma's

space = space.replace(/\s/g,'');
// Removes all spaces in my string

console.log(average(space.length,titles.length));
// Divides the # of characters in my string by the number of titles of books.
// Logs the average length of book title to the console



// A little extra homework with .map(), .reduce(), and .forEach()
 
// Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.62"
 
 
// Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"
 
 
// BONUS: Show me how to find which items are made of wood. Please console.log the ones you find.
// The output should be:
// 
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
 
 
// Here's the data!
var items = [{
  "listing_id": 161489961,
  "state": "active",
  "user_id": 7492310,
  "category_id": 68905630,
  "title": "SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3",
  "description": "Super cute vintage set of 3 Siesta Ware white mugs featuring a blue anchor surrounded by stars on each side of glass. Each glass mug has the Siesta signature wood handle secured with brass braces around the glass. \r\n\r\nMeasures 5&quot; high by about 3&quot; diameter at bottom tapered to 2.25&quot; diameter opening at mouth. \r\n\r\nIn good vintage condition with some visible signs of use and age on brass. (see photos).\r\n\r\n\r\n..........\r\nMy shipping fees are an estimate. If you are located west of the Mississippi, your costs will generally be lower than the shipping fee listed. After package has been mailed, any shipping overages of $1.00 or more will be refunded.",
  "creation_tsz": 1399763583,
  "ending_tsz": 1410390783,
  "original_creation_tsz": 1378160642,
  "last_modified_tsz": 1399763583,
  "price": 12.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["mug", "siesta ware", "beer mug", "white glass mug", "siestaware white", "navy", "sailor", "blue", "wood handle", "vintage glassware", "collectible", "blue anchor", "anchor and stars"],
  "category_path": ["Vintage", "Housewares", "Cup"],
  "category_path_ids": [69150437, 69154753, 68905630],
  "materials": ["glass", "wood", "metal"],
  "shop_section_id": 15467146,
  "featured_rank": null,
  "state_tsz": 1399311031,
  "url": "https:\/\/www.etsy.com\/listing\/161489961\/sale-mid-century-siesta-ware-white-mug?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 62,
  "num_favorers": 4,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "someone_else",
  "is_supply": "false",
  "when_made": "1970s",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": ["Military", "Kitsch"],
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 129335930,
  "state": "active",
  "user_id": 11356846,
  "category_id": 68926584,
  "title": "Hops- Craft Beer T-shirt",
  "description": "The hops plant, or humulus lupulus, gives beer its bitterness and distinct flavor profile.  This simple design of a single hops cone is a great way for the craft beer enthusiast to stand out at beer festivals and show their love of beer without becoming someone else&#39;s corporate billboard.\r\n\r\nThe design  is printed in a slightly off-white ink on a 100% cotton t-shirt.\r\n\r\nFor more great beer t-shirts, visit our shop! http:\/\/www.etsy.com\/shop\/brewershirts\r\n\r\nPICK YOUR SIZE AND SHIRT COLOR WHEN YOU &quot;ADD TO CART&quot;.\r\n____________________________________\r\n\r\nCOLORS\r\n\r\nBlack, Brown, Charcoal Grey, Indigo Blue, Irish Green, Navy Blue, Prairie Dust Green, Purple, Red, and Royal Blue.\r\n\r\n____________________________________\r\n\r\nSIZE - Gildan 2000 Ultra Cotton Unisex\r\n\r\nGildan Ultra Cotton tees are preshrunk but allow for a slight shrinkage if you tumble dry.\r\nBody length is measured from highest point on the shoulder to hem.\r\nChest is measured 1&quot; down from the arm pit to the other arm pit.\r\n\r\nS = 28&quot; body length x 18&quot; chest (arm pit to arm pit)\r\nM = 29&quot; body length x 20&quot; chest (arm pit to arm pit)\r\nL = 30&quot; body length x 22&quot; chest (arm pit to arm pit)\r\nXL = 31&quot; body length x 24&quot; chest (arm pit to arm pit)\r\n2XL = 32&quot; body length x 26&quot; chest (arm pit to arm pit)\r\n3XL = 33&quot; body length x 28&quot; chest (arm pit to arm pit)\r\n\r\nPlease use the drop down menu to select size and color or add a comment regarding size and color in the notes to seller.\r\n\r\n____________________________________\r\n\r\n\r\nRETURNS\r\n\r\nBuy with confidence. Read about our No Hassle Return Policy.\r\nhttp:\/\/www.etsy.com\/shop\/brewershirts\/policy\r\n____________________________________\r\n\r\nMORE SHIRTS!\r\n\r\nFor more great beer t-shirts, visit our shop! http:\/\/www.etsy.com\/shop\/brewershirts\r\n\r\nMen&#39;s\/Unisex Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=12610012\r\nWomen&#39;s Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=12605293\r\nBeer Geek Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=10968512\r\nHome Brewing Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=10963551\r\nGraphic Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=10968510\r\nGeeky Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=10963549\r\nHoliday Tees: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=10963547\r\nSales\/Specials: http:\/\/www.etsy.com\/shop\/brewershirts?section_id=10968502",
  "creation_tsz": 1399763578.99,
  "ending_tsz": 1410390778,
  "original_creation_tsz": 1365939193,
  "last_modified_tsz": 1399763578,
  "price": 20.00,
  "currency_code": "USD",
  "quantity": 3,
  "tags": ["beer geek", "beer", "craft beer shirt", "craft beer tee", "craft beer tshirt", "graphic tee", "hops", "humulus lupulus", "hophead", "add more hops", "beer gift", "homebrew", "beer t-shirt"],
  "category_path": ["Geekery", "Clothing", "Tshirt"],
  "category_path_ids": [69150359, 69151581, 68926584],
  "materials": ["tee shirt", "screen printing", "100 percent cotton", "tshirt", "environmentally friendly", "screenprint", "water based ink"],
  "shop_section_id": 10968512,
  "featured_rank": null,
  "state_tsz": 1391478425,
  "url": "https:\/\/www.etsy.com\/listing\/129335930\/hops-craft-beer-t-shirt?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 2952,
  "num_favorers": 403,
  "shipping_template_id": 17177509,
  "processing_min": 3,
  "processing_max": 5,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "2010_2014",
  "is_private": false,
  "recipient": "unisex_adults",
  "occasion": null,
  "style": ["Hipster", "Rocker"],
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 187449201,
  "state": "active",
  "user_id": 8145825,
  "category_id": 69182787,
  "title": "NEW Dragon Beer Mug Greek Rhyton Drinking Horn Style Original Design Handcrafted Stoneware Sci-Fi\/Fantasy Art  for Renaissance, Unique Gift",
  "description": "My newest original dragon design is a sculptural drinking vessel made of stoneware clay, food safe glazes -- craftsmanship and quality guaranteed!  Inspired by classic Greek rhytons that were used for drinking as well as ritual use and were often made in the form of animals&#39; heads.  It is a great mug to add to your Renaissance Festival Costume, Celebrations, Feasts, Role Play Games or just for enjoying your favorite beverage in style.  It makes a unique gift for your favorite unique people who are into sci-fi or fantasy.\r\n\r\nThis mug is made to be used!  It is cast from my own molds in durable stoneware clay  and finished with food safe glazes that are fine for ANY beverage, hot or cold.  This dense clay offers the advantage of being able to hold the temperature of your drink longer than other natural materials.  You can chill your mug in the freezer for frosty drinks on hot summer afternoons!  It can also be pre-heated with hot water from the tap or kettle for coffee, tea, hot toddies, wassail or other cozy drinks.\r\n\r\nAll my work is my own original art work and design.  Each piece is handcrafted start to finish in my own studio. I cast my own molds of the work so it can be reproduced by means of slip casting.  I use the highest quality materials and fire to 2180 degrees Fahrenheit for a tough, durable finished product.",
  "creation_tsz": 1399763410.01,
  "ending_tsz": 1410390610,
  "original_creation_tsz": 1398393004,
  "last_modified_tsz": 1399763410,
  "price": 50.00,
  "currency_code": "USD",
  "quantity": "1",
  "tags": ["dragon mug", "dragon beer mug", "drinking horn", "greek rhyton", "stoneware pottery", "sculpted carved cup", "sci-fi fantasy art", "Renaissance mug", "unique art", "unusual gift", "cosplay prop", "handcrafted pottery", "original design art"],
  "category_path": ["Ceramics and Pottery", "Cup", "Stoneware"],
  "category_path_ids": [69150451, 68890320, 69182787],
  "materials": ["stoneware clay", "food safe glazes", "emerald green glaze", "black gloss glaze"],
  "shop_section_id": 13531550,
  "featured_rank": null,
  "state_tsz": 1399677773,
  "url": "https:\/\/www.etsy.com\/listing\/187449201\/new-dragon-beer-mug-greek-rhyton?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 19,
  "num_favorers": 7,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 2,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "2010_2014",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 184189258,
  "state": "active",
  "user_id": 22149893,
  "category_id": 69169797,
  "title": "Paulaner Das Rathaus .5L Stoneware Beer Stein",
  "description": "This Paulaner Das Rathaus .5L Stoneware Beer Stein is in good condition. There is an overspray on the front side that happened at the factory.  There is slight staining on the bottom and a small spot on the rim near the handle.\r\nWhen the image of Das Rathaus was stamped, the lower left side of the stamp must have not had enough ink as there is a small blank spot at the border.",
  "creation_tsz": 1399763378,
  "ending_tsz": 1410390578,
  "original_creation_tsz": 1395949417,
  "last_modified_tsz": 1399763378,
  "price": 25.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["paulaner", "das rathaus", "beer mug", "beer stein", "stein", "mug", "munchen", "paulaner Salvatore", "thomasbrau", "Germun beer mug", "german beer stein", "stoneware mug", "bar accessory"],
  "category_path": ["Vintage", "Serving", "Mug"],
  "category_path_ids": [69150437, 69154629, 69169797],
  "materials": ["stoneware", "ceramic"],
  "shop_section_id": 15419034,
  "featured_rank": null,
  "state_tsz": 1399763335,
  "url": "https:\/\/www.etsy.com\/listing\/184189258\/paulaner-das-rathaus-5l-stoneware-beer?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 1,
  "num_favorers": 0,
  "shipping_template_id": null,
  "processing_min": null,
  "processing_max": null,
  "who_made": "someone_else",
  "is_supply": "false",
  "when_made": "before_1995",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 181257720,
  "state": "active",
  "user_id": 15359177,
  "category_id": 68903982,
  "title": "Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift",
  "description": "This bottle opener with cap catcher is as useful as it is eye catching. A nice addition to your man cave or bar. Can be mounted on the wall or used free standing on a table or shelf. These make great gifts for any occasion.  \r\n\r\nIt&#39;s made from solid Missouri pine it is sturdy enough to last for many years. The letters are deeply carved into the wood for a rich custom look that just can&#39;t be matched by paint, vinyl, or even laser engraving. Contact me for a discount when purchasing 5 or more items. \r\n\r\nSize is approx. 14&quot;H x 6&quot;W x 3&quot;D \r\nComes with rustic opener installed and ready to hang with a keyhole hanger routed on the back.  \r\n\r\n\r\n****PERSONALIZING****  \r\nWhen ordering please tell us in the order notes the following info.\r\n\r\n1. The name to appear in the center above the mug.\r\n2. Any other info such as an established date below the large letter.  \r\n\r\n\r\nI can also do custom logos, fonts or sayings but extra charges may apply depending on what your wanting. Contact me with your request and a quote. I can carve almost anything you want on these.",
  "creation_tsz": 1399763305.4,
  "ending_tsz": 1410390505,
  "original_creation_tsz": 1393803751,
  "last_modified_tsz": 1399763305,
  "price": 41.95,
  "currency_code": "USD",
  "quantity": 9,
  "tags": ["Gift for Dad", "Beer Caddy", "personalized  gift", "Gift for him", "Man Cave decor", "bar accessory", "Bottle Opener", "Barware", "Bar Sign", "Home brew", "Groomsmen Gift", "Bottle cap catcher", "Valentine gift"],
  "category_path": ["Woodworking", "Home Decor", "Wall Hanging"],
  "category_path_ids": [68887388, 69154647, 68903982],
  "materials": ["Pine", "wood", "stain", "paint"],
  "shop_section_id": 12960864,
  "featured_rank": null,
  "state_tsz": 1395674279,
  "url": "https:\/\/www.etsy.com\/listing\/181257720\/bottle-cap-catcher-personalized-man-cave?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 470,
  "num_favorers": 66,
  "shipping_template_id": null,
  "processing_min": 5,
  "processing_max": 10,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "2010_2014",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": ["Rustic", "Primitive"],
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 175093824,
  "state": "active",
  "user_id": 7000828,
  "category_id": 69181645,
  "title": "GUN PiSTOL HAnD GUN SoAPS - Police  Officer - Military - SWAT - Hunting - Target Practice - Beer Scented - Set Of 3 - Gold - Party Favor",
  "description": "These guns soaps are scented in BEER SCENT.  Great gift for the man for birthday, Father&#39;s Day, Promotion In The Military Or Police Profession.   Hunters will love these soaps.   \r\n\r\nThese soaps are poured with gold color mica.  Very impressive to give someone!\r\n\r\nEach Soap weighs approx.  1.3 ounces.  They will come individually packaged in a clear bag all ready for gift giving.  \r\n\r\nINGREDIENTS: Propylene Glycol, Water, Sorbitol, Sodium Stearate, Sodium Laureth Sulfate, Glycerin, Sodium Myristate, Sodium Cocoyl Isethionate, Triethanolamine, Calendula Officinalis Flower Extract (and) Helianthus Annuus (Sunflower) Extract (and) Aloe Barbadensis Leaf Extract (and) Chondrus Crispus (Carrageenan) Extract (and) Althaea Officinalis Root Extract, Sodium Benzonate, Potassium Sorbate, Citric Acid\r\n\r\nEach order through my store will receive a FREE THANK YOU GIFT!  My way of saying thanks so much for your order!",
  "creation_tsz": 1399763241,
  "ending_tsz": 1410390441,
  "original_creation_tsz": 1389216935,
  "last_modified_tsz": 1399763241,
  "price": 5.75,
  "currency_code": "USD",
  "quantity": 10,
  "tags": ["glycerin", "hand made", "home decor", "guest", "decoration", "unique", "party favor", "gun", "pistol", "man soap", "hunting", "target practice", "police"],
  "category_path": ["Bath and Beauty", "Soap", "Glycerin"],
  "category_path_ids": [68887336, 69152455, 69181645],
  "materials": ["glycerin", "fragrance", "color", "gold mica"],
  "shop_section_id": 13544815,
  "featured_rank": null,
  "state_tsz": 1399668028,
  "url": "https:\/\/www.etsy.com\/listing\/175093824\/gun-pistol-hand-gun-soaps-police-officer?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 48,
  "num_favorers": 3,
  "shipping_template_id": null,
  "processing_min": 3,
  "processing_max": 5,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": "fathers_day",
  "style": ["Country Western", "Military"],
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 165402468,
  "state": "active",
  "user_id": 22866488,
  "category_id": 68887494,
  "title": "RUSH ORDER : Add This Listing for 1-2 Day Processing & Expedited Shipping",
  "description": "Add This Listing for 1-2 Day Processing with Expedited Shipping Service. \r\n\r\n-- For Ordering --\r\n\r\nPlease Add This Listing to Your Account with the Items You Would to Order and Proceed to Checkout. Please Reference the Date Your Order is Needed By in the &#39;Notes to Seller&#39; Section at Checkout.",
  "creation_tsz": 1399763143,
  "ending_tsz": 1410390343,
  "original_creation_tsz": 1381448683,
  "last_modified_tsz": 1399763143,
  "price": 32.99,
  "currency_code": "USD",
  "quantity": 97,
  "tags": ["Rush", "Mason Jars", "Wine Glasses", "Beer Glasses", "Groomsmen Gift", "Flask", "Flasks", "Flask Sets", "Knife", "Knives", "Engraved", "Custom", "Bridesmaid Gift"],
  "category_path": ["Weddings"],
  "category_path_ids": [68887494],
  "materials": [],
  "shop_section_id": null,
  "featured_rank": null,
  "state_tsz": 1392166238,
  "url": "https:\/\/www.etsy.com\/listing\/165402468\/rush-order-add-this-listing-for-1-2-day?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 13,
  "num_favorers": 0,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 2,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": true,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 189187392,
  "state": "active",
  "user_id": 11250425,
  "category_id": 69169841,
  "title": "1970s Coors Banquet Glass Beer Pitcher",
  "description": "This is a large glass pitcher that was used in a Wisconsin bar for years made by Coors. We believe it is from the late 1970s. It is in very good shape with no chips or cracks (please see pictures) and still displays well.  It measures 9 inches tall & about 6 inches wide. It is made of cardboard and will be shipped in a protective sleeve. It would look great on your bar and it is the perfect gift for a Coors fan. \n\nSHIPPING INFORMATION: We usually ship in 2-3 days of getting a cleared payment. Tracking is included in our shipping price. If the shipping turns out to be cheaper than what we quoted you... we will refund the difference. We also offer free local pick-up... in most situations. Please ask about this if you are interested. We ship almost exclusively through the USPS, since they seem to have the best rates. If you need another shipping company, please let us know.\r\n\r\nInternational Shipping:\r\nDue to the new (higher) shipping prices, please ask us about all international shipping first.\r\n\r\nIn the case of Import Duties, Taxes and Surcharges... these are NOT included in the item price or shipping charges. These charges are the buyer&#39;s responsibility.\r\n\r\nWe will not mark &quot;gift&quot; on the customs form, so please do not ask us to.\r\n\r\nWe will try to find you the cheapest shipping that still has tracking information, but sometimes these estimates are high. It is not unusual for us to have to refund some shipping due to these high estimates.",
  "creation_tsz": 1399763117,
  "ending_tsz": 1410390317,
  "original_creation_tsz": 1399763117,
  "last_modified_tsz": 1399763117,
  "price": 15.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["Banquet", "Collectible", "Vintage", "Americana", "Advertisement", "home decor", "man cave", "Kitchen", "display", "Decorative", "Gift", "Coors", "souvenir"],
  "category_path": ["Vintage", "Serving", "Pitcher"],
  "category_path_ids": [69150437, 69154629, 69169841],
  "materials": ["glass"],
  "shop_section_id": null,
  "featured_rank": null,
  "state_tsz": 1399763117,
  "url": "https:\/\/www.etsy.com\/listing\/189187392\/1970s-coors-banquet-glass-beer-pitcher?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 0,
  "num_favorers": 0,
  "shipping_template_id": 13066068,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "someone_else",
  "is_supply": "false",
  "when_made": "1970s",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 187538351,
  "state": "active",
  "user_id": 10423317,
  "category_id": 69154969,
  "title": "Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors",
  "description": "This is a solid wood sign that measures 9 1\/2&quot; X 18&quot; X 3\/4&quot;.\r\n\r\nThe sign reads, &quot;Welcome to our FIREPIT--where friends and marshmallows get toasted at the same time.\r\n\r\nI also have this in a larger 12&quot; X 18&quot; version:\r\n\r\nhttps:\/\/www.etsy.com\/listing\/184513480\/welcome-to-our-firepit-where-friends-and?ref=shop_home_active_4\r\n\r\nI also carry a square version with a different &quot;Firepit&quot; saying:\r\n\r\nhttps:\/\/www.etsy.com\/listing\/185299786\/welcome-to-our-firepit-where-the-fires?ref=shop_home_active_3\r\n\r\n\r\nThe sign shown has been painted BLACK. The letters have been stenciled with WARM WHITE and KHAKI TAN. The fire is a combination of different shades of YELLOW and ORANGE. I have sanded the sides and edges for a distressed look.\r\n\r\nIt has been sealed with 2 coats of satin poly sealer for added durability. We have added a sawtooth hanger on the back for hanging.\r\n\r\nIf you would like a different color combination please choose from the color chart above and leave your choice in the &quot;Note to Seller&quot; at checkout. Please be specific about the details of what you would like and you are also welcome to contact me with the &quot;Contact Seller&quot; button if you need any help. \r\n\r\n***I can also change the title to &quot;Welcome to our Campfire&quot;. Just let me know when you order that you would rather have &quot;Campfire&quot;.\r\n\r\n\r\nAll of our signs are handmade by my husband and myself. We use only premium quality 3\/4&quot; furniture grade plywood for our signs. We have found this to work better than using pine. It will not warp as pine sometimes will do. Also, there are NO KNOTS in our wood. You will still have natural wood grain and imperfections because it is natural wood, but there will not be any knots in the middle of your sign. I find it makes a much nicer sign for this reason!!!\r\n\r\n***All signs are hand painted. No vinyl lettering is used. Everything is completely hand painted.\r\n\r\nPlease allow 7-10 days for production of your sign. Because they are all individually painted, sanded and sealed....no 2 will ever be alike!\r\n\r\n\r\nI am adding new signs daily so please continue to check back!\r\n\r\nThank you for shopping with Southern Xpressions!!!!",
  "creation_tsz": 1399763114,
  "ending_tsz": 1410390314,
  "original_creation_tsz": 1398464562,
  "last_modified_tsz": 1399763114,
  "price": 28.95,
  "currency_code": "USD",
  "quantity": 9,
  "tags": ["firepit sign", "campfire sign", "patio sign", "beer sign", "backyard sign", "fire pit sign", "fire pit", "deck sign", "friend sign", "camping", "campfire", "marshmallow sign", "campsite sign"],
  "category_path": ["Woodworking", "Sign"],
  "category_path_ids": [68887388, 69154969],
  "materials": ["wood", "paint", "stencil", "sealer"],
  "shop_section_id": 15267836,
  "featured_rank": null,
  "state_tsz": 1399240894,
  "url": "https:\/\/www.etsy.com\/listing\/187538351\/medium-size-welcome-to-our-firepit-where?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 187,
  "num_favorers": 9,
  "shipping_template_id": null,
  "processing_min": 5,
  "processing_max": 10,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 167162318,
  "state": "active",
  "user_id": 24402677,
  "category_id": 69195371,
  "title": "Follow Me Bring Beer Sand Imprint Sandals :)",
  "description": "Sometimes getting a good party going just requires a little encouragement. Don&#39;t worry: FlipSidez has you covered with our unique &quot;Follow Me -- Bring Beer&quot; sand imprint sandals!\r\n\r\nGREAT FOR: Friends, Family, Parties, Vacations, and More!\r\n\r\n BUY your pair of sandals by following the Ordering Instructions below and clicking on the green &quot;Add to Cart&quot; button on the right side of this page.\r\n\r\nSAVE this listing to find it later by clicking the little Heart to the right that says &quot;Add item to favorites.&quot;\r\n\r\nWHOLESALE pricing is available for those who wish to buy in larger quantities or carry out a fundraiser. Please inquire for pricing.\r\n\r\nBEWARE of cheap quality imitators and Infringers\r\n\r\n\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n~O R D E R I N G ~ I N S T R U C T I O N S~\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n1. SIZE and COLOR\r\nSelect your desired Sandal Color and Size from the drop down menu on the right and then click the &quot;Add to Cart&quot; button.\r\n\r\nAvailable Colors: \r\nhttps:\/\/img0.etsystatic.com\/032\/0\/7239027\/il_fullxfull.518067902_dp1o.jpg?ref=l2\r\n\r\nAvailable Sizes: \r\nhttps:\/\/img0.etsystatic.com\/038\/0\/7239027\/il_fullxfull.518073682_eo7p.jpg?ref=l2\r\n\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\nSHIPPING:\r\nShipping time for domestic\/USA orders is 2-5 business days.\r\n\r\nWe can also ship to any country. Shipping to time can vary depending on the country being shipped to, with 1-4 weeks being typical, barring any delays when clearing customs.\r\n\r\nSandImprintSandals is not responsible for delays in international shipping due to Customs or the receiving postal service.\r\n\r\nTracking and insurance for international orders is available for an additional cost, please send me a message if you would like to obtain either for your order of flip flops.\r\n\r\n\r\n\r\nVisit our shop page to see what else we have to offer, including personalized sand imprint sandals: SandImprintSandals.etsy.com",
  "creation_tsz": 1399763073,
  "ending_tsz": 1410390273,
  "original_creation_tsz": 1382910831,
  "last_modified_tsz": 1399763073,
  "price": 24.95,
  "currency_code": "USD",
  "quantity": 209,
  "tags": ["Sandal", "Beach", "Sand Imprint", "FlipSidez", "Flip Flops", "flipflops", "sandals", "beer sandals", "Follow me", "Bring beer", "follow me bring beer", "beer", "bring wine"],
  "category_path": ["Clothing", "Shoes", "Flip Flops"],
  "category_path_ids": [69150353, 68889926, 69195371],
  "materials": ["Rubber", "EVA", "Foam", "Love", "Sandals", "Flip Flops", "Plastic"],
  "shop_section_id": null,
  "featured_rank": 1,
  "state_tsz": 1399141334,
  "url": "https:\/\/www.etsy.com\/listing\/167162318\/follow-me-bring-beer-sand-imprint?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 4050,
  "num_favorers": 487,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "collective",
  "is_supply": "false",
  "when_made": "2010_2014",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": ["Beach"],
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 189187176,
  "state": "active",
  "user_id": 11250425,
  "category_id": 69169841,
  "title": "1970s Schlitz Malt Liquor Glass Beer Pitcher",
  "description": "This is a large glass pitcher that was used in a Wisconsin bar for years made by Schlitz. We believe it is from the mid to late 1970s. It is in very good shape with no chips or cracks (please see pictures) and still displays well.  It measures 9 inches tall & about 6 inches wide. It is made of cardboard and will be shipped in a protective sleeve. It would look great on your bar and it is the perfect gift for a Schlitz fan. \n\nSHIPPING INFORMATION: We usually ship in 2-3 days of getting a cleared payment. Tracking is included in our shipping price. If the shipping turns out to be cheaper than what we quoted you... we will refund the difference. We also offer free local pick-up... in most situations. Please ask about this if you are interested. We ship almost exclusively through the USPS, since they seem to have the best rates. If you need another shipping company, please let us know.\r\n\r\nInternational Shipping:\r\nDue to the new (higher) shipping prices, please ask us about all international shipping first.\r\n\r\nIn the case of Import Duties, Taxes and Surcharges... these are NOT included in the item price or shipping charges. These charges are the buyer&#39;s responsibility.\r\n\r\nWe will not mark &quot;gift&quot; on the customs form, so please do not ask us to.\r\n\r\nWe will try to find you the cheapest shipping that still has tracking information, but sometimes these estimates are high. It is not unusual for us to have to refund some shipping due to these high estimates.",
  "creation_tsz": 1399762949,
  "ending_tsz": 1410390149,
  "original_creation_tsz": 1399762949,
  "last_modified_tsz": 1399762949,
  "price": 18.00,
  "currency_code": "GBP",
  "quantity": 1,
  "tags": ["Collectible", "Vintage", "Americana", "Malt Liquor", "Advertisement", "home decor", "Kitchen", "man cave", "Decorative", "Gift", "Schlitz", "display", "souvenir"],
  "category_path": ["Vintage", "Serving", "Pitcher"],
  "category_path_ids": [69150437, 69154629, 69169841],
  "materials": ["glass"],
  "shop_section_id": null,
  "featured_rank": null,
  "state_tsz": 1399762949,
  "url": "https:\/\/www.etsy.com\/listing\/189187176\/1970s-schlitz-malt-liquor-glass-beer?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 0,
  "num_favorers": 0,
  "shipping_template_id": 13066068,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "someone_else",
  "is_supply": "false",
  "when_made": "1970s",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 189187060,
  "state": "active",
  "user_id": 46133579,
  "category_id": 69194689,
  "title": "Libbey 2.5 oz. Shot Glass Multiple Etch Available Military Fire Harley HD IAFF Dept AXXHole",
  "description": "Libbey 1650SR sheer rim 2.5 oz. cordial shot glass.  \r\n\r\nDepartment A$$Hole Etch\r\n\r\nDetails\r\n\r\nThis Libbey 1650SR sheer rim 2.5 oz. cordial shot glass provides a versatile way to serve creatively crafted cordials and playful shooters. Its thin, sheer rim design offers an interesting twist on the traditional cordial glass design that&#39;s sure to intrigue all of your customer.\r\n\r\nDimensions:\r\nTop Diameter: 1 1\/2&quot;\r\nBottom Diameter: 1 3\/8&quot;\r\nHeight: 4 1\/8&quot;\r\n\r\n\r\nCertifications\r\n\r\nMade in America",
  "creation_tsz": 1399762863,
  "ending_tsz": 1410390063,
  "original_creation_tsz": 1399762863,
  "last_modified_tsz": 1399762862,
  "price": 2.99,
  "currency_code": "USD",
  "quantity": 8,
  "tags": ["pilsner", "glass", "etched", "iaff", "beer", "fire", "firefighter", "mug", "Pawtucket", "shot"],
  "category_path": ["Glass", "Glassware", "Etched"],
  "category_path_ids": [69150361, 68891932, 69194689],
  "materials": ["glass", "etched", "iaff"],
  "shop_section_id": 15251126,
  "featured_rank": null,
  "state_tsz": 1399762862,
  "url": "https:\/\/www.etsy.com\/listing\/189187060\/libbey-25-oz-shot-glass-multiple-etch?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 0,
  "num_favorers": 0,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 168143227,
  "state": "active",
  "user_id": 11832009,
  "category_id": 68891054,
  "title": "Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher",
  "description": "Wall Mount Bottle Opener, Personalized Bottle Opener, Engraved Bottle Opener, Beer Bottle Opener, Beer Opener, Magnetic Bottle Opener, Groomsmen Gift, Groomsman Gift, Best Man Gift\r\n\r\n\r\n\r\nThis listing is for TWO STAINLESS STEEL bottle openers engraved WITHOUT a capcatcher.\r\nEach opener may have their own personalized engraving.\r\n\r\n\r\n\r\nWhy not add a gift bag and eliminate the gift wrapping on your end?!!!!!\r\n\r\n\r\n\r\nIf you would like the capcatcher too, we have listings for opener\/capcatcher combos in our BOTTLE OPENER section at www.etsy.com\/shop\/killorglincreations\r\nhttps:\/\/www.etsy.com\/shop\/KillorglinCreations?section_id=7591653&ref=shopsection_leftnav_1\r\n\r\n\r\nClassic &quot;Old School&quot; Bottle Opener engraved with your monogram. NO DECALS HERE!\r\n\r\n\r\n\r\nPlease supply us with:\r\n\r\n1.  The design you want (choose from the ones shown here or select one from our website: www.memco.net\/opener.htm  We can customize for wedding dates, new house purchases, etc at no extra cost.\r\nHere is the link to all our designs: \r\nhttp:\/\/www.memco.net\/bottle%20openers%20all%20designs.pdf\r\n\r\n\r\n2.  The name or initial to be engraved.\r\n\r\n\r\n\r\n*****************\r\n\r\nSee other ideas at www.memco.net\/opener.htm\r\nhttp:\/\/www.memco.net\/bottle%20openers%20all%20designs.pdf\r\n\r\n*****************\r\n\r\n\r\n\r\nIf you need a listing for a different quantity, just convo me for a special listing.\r\n\r\n\r\nWe also included a photo of our MAGNETIC BOTTLE OPENERS - Really Cool! and available here:\r\nhttps:\/\/www.etsy.com\/listing\/167061302\/magnetic-bottle-opener-stainless-steel?ref=shop_home_active_17\r\n\r\n\r\n\r\nCraftsmanship is MADE IN THE U.S.A.",
  "creation_tsz": 1399762861,
  "ending_tsz": 1410390061,
  "original_creation_tsz": 1383682010,
  "last_modified_tsz": 1399762861,
  "price": 38.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["wedding", "groomsmen", "beer", "personalized", "monogram", "men", "opener", "bar", "wall mount opener", "bottle opener", "Groomsmen gift", "best man gifts", "wedding party"],
  "category_path": ["Weddings", "Men"],
  "category_path_ids": [68887494, 68891054],
  "materials": ["wall mount bottle opener", "wedding", "man cave", "christmas gift", "guy gift", "fathers day", "home bar", "beer", "bar"],
  "shop_section_id": 7591653,
  "featured_rank": null,
  "state_tsz": 1397044823,
  "url": "https:\/\/www.etsy.com\/listing\/168143227\/qty-of-2-groomsmen-gift-stainless-steel?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 147,
  "num_favorers": 19,
  "shipping_template_id": null,
  "processing_min": 5,
  "processing_max": 10,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": "wedding",
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 188844105,
  "state": "active",
  "user_id": 11832009,
  "category_id": 68890882,
  "title": "Wine Corkscrew Slate Drink Coaster Set - Set of 4 Engraved",
  "description": "These 4 vintage corkscrew designs are engraved into genuine American slate - these are NOT printed onto the stone.\r\n\r\nAll our slates are engraved into the stone and seal coated for superior durability.  So good in fact that they may be used outdoors! \r\n\r\nThese coasters are made from the same material as our interior\/exterior wall art and flooring slates.\r\n\r\nEach coaster has felt pads tp protect your furniture.\r\n\r\nWe have over 100 designs to choose from at:   WWW.MEMCO.NET\/STONE.HTM  \r\nYou may mix and match any of our 100+ designs to make up a set of 4.\r\n\r\nAlso shown is our MUSTACHE, PEACE NOW  and TIKIS collection and a sampling of personalized coasters.  We do not charge extra for personalized coasters!\r\n\r\nThe personalized aspect of these coasters make them a great gift idea for Weddings, Anniversaries and New Home presents.",
  "creation_tsz": 1399762826,
  "ending_tsz": 1410390026,
  "original_creation_tsz": 1399488440,
  "last_modified_tsz": 1399762826,
  "price": 20.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["beer", "whiskey", "bar", "slate", "wine", "wedding", "man cave", "personalized", "monogram", "groomsmen", "scotch", "tiki", "coaster"],
  "category_path": ["Housewares", "Coaster"],
  "category_path_ids": [69150425, 68890882],
  "materials": ["slate", "stone", "tile", "engraved", "etched"],
  "shop_section_id": 7591448,
  "featured_rank": null,
  "state_tsz": 1399488440,
  "url": "https:\/\/www.etsy.com\/listing\/188844105\/wine-corkscrew-slate-drink-coaster-set?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 4,
  "num_favorers": 1,
  "shipping_template_id": null,
  "processing_min": null,
  "processing_max": null,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": "unisex_adults",
  "occasion": "birthday",
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 167112986,
  "state": "active",
  "user_id": 11832009,
  "category_id": 68891054,
  "title": "Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like!",
  "description": "Wall Mount Bottle Opener, Personalized Bottle Opener, Engraved Bottle Opener, Beer Bottle Opener, Beer Opener, Magnetic Bottle Opener, Groomsmen Gift, Groomsman Gift, Best Man Gift\r\n\r\n\r\n\r\nMagnetic Wall Mount Bottle Opener set with your choice of opener color AND optional personalization !!!!!\r\n\r\nStylish Wave Design fits any d\u00e9cor. Our heavy duty magnet is mounted behind the wooden &quot;Wave&quot; for a clean look.\r\n\r\n\r\nThese sets are available with or without engraving.  \r\n\r\nIf you do choose to have it personalized, rest assured that our Classic &quot;Old School&quot; Bottle Opener is ENGRAVED - NO DECALS HERE!\r\n\r\n\r\nEngraving designs may be seen at www.memco.net\/opener.htm\r\n\r\n\r\nSize: 3 3\/4&quot; x 8&quot;\r\nCapacity: approximately 18 caps (under our scientifically controlled house party tests :)\r\n\r\nCraftsmanship is MADE IN THE U.S.A.",
  "creation_tsz": 1399762824,
  "ending_tsz": 1410390024,
  "original_creation_tsz": 1382880551,
  "last_modified_tsz": 1399762824,
  "price": 28.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["groomsmen", "beer", "personalized", "monogram", "craft beer", "best man", "magnetic", "barware", "bottle opener", "wall mount bottle", "engraved", "beer opener", "groomsmen gift"],
  "category_path": ["Weddings", "Men"],
  "category_path_ids": [68887494, 68891054],
  "materials": ["wall mount bottle opener", "wedding", "christmas gift", "guy gift", "home bar", "wood", "stainless steel"],
  "shop_section_id": 7591653,
  "featured_rank": null,
  "state_tsz": 1396035952,
  "url": "https:\/\/www.etsy.com\/listing\/167112986\/magnetic-wall-mount-bottle-opener?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 541,
  "num_favorers": 81,
  "shipping_template_id": null,
  "processing_min": 5,
  "processing_max": 10,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": "wedding",
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 173774044,
  "state": "active",
  "user_id": 19115459,
  "category_id": 68892294,
  "title": "20 % OFF SALE Personalized Bottle Opener Key Chain -Laser Engraved Groomsmen Gift, Wedding, Beer Lover, Custom Key Chain",
  "description": "If you are looking for Multiples please click on this link for discounts: \r\n\r\nhttps:\/\/www.etsy.com\/shop\/HangerDesignCenter?section_id=12179319\r\n\r\nThis listing is for ONE (1) Laser engraved bottle opener.\r\n\r\nThis  stainless steel bottle opener measures 2 1\/4&quot; x 1 1\/4&quot; and comes with a 3\/4&quot; split ring It  can be personalized with names,a special saying, monogrammed letters , or anything else you could think of that will fit .\r\n\r\nYou can have up to three lines with maximum 10 characters each line .\r\n\r\nAll personalization must be left at checkout exactly as you would like it to appear laser engraved.\r\n\r\nIf you would likes sets please convo us for discounted deals for multiples",
  "creation_tsz": 1399762776,
  "ending_tsz": 1410389976,
  "original_creation_tsz": 1388029601,
  "last_modified_tsz": 1399762776,
  "price": 13.59,
  "currency_code": "USD",
  "quantity": 56,
  "tags": ["Keychain", "metal", "groomsmen gifts", "custom bottle opener", "guys gift", "wedding party", "laser engraved", "groomsmen", "wedding party gifts", "Bridal party gifts", "Bridal party", "groomsman gifts"],
  "category_path": ["Weddings", "Favor"],
  "category_path_ids": [68887494, 68892294],
  "materials": [],
  "shop_section_id": 12179319,
  "featured_rank": null,
  "state_tsz": 1388029601,
  "url": "https:\/\/www.etsy.com\/listing\/173774044\/20-off-sale-personalized-bottle-opener?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 5885,
  "num_favorers": 2505,
  "shipping_template_id": null,
  "processing_min": null,
  "processing_max": null,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": "wedding",
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 187612531,
  "state": "active",
  "user_id": 37370641,
  "category_id": 69194689,
  "title": "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
  "description": "This is a fantastic gift for Harry Potter fans who want something that is just for them. Fantastic beer stein with a heavy base and perfect for holding any kind of beverage!\r\n\r\nThis The Three Broomsticks glass can either be a PERSONALIZED glass with a name or words in the banner... like &#39;Nilamani&#39;s Special Brew&#39; or &#39;Ashley Vail Ale&#39; OR you can keep it as seen in the pic with Hogsmeade Village\r\n\r\nPlease make sure you choose which option you would like from the options.\r\n______________________________________\r\n\r\nWe now offer gift wrapping!\r\n\r\nhttps:\/\/www.etsy.com\/listing\/168258183\/gift-wrapping\r\n\r\n______________________________________\r\n\u2714 Dishwasher-Safe & Microwave-Safe\r\n\u2714 Sandblasted art is crisp, and will not wear off like screen printed or cream etched art\r\n\u2714 Made in the USA down in sunny Florida\r\n\r\n------------------------------------------------------------------\r\n\u2714 CUSTOM pint glasses available by clicking on our CUSTOM button on the front page of \r\nour shop. We LOVE custom orders so don&#39;t be scared to let us know what your idea is!\r\n\u2714 SHIPPED FAST & packed carefully to ensure safe arrival\r\n\r\n------------------------------------------------------------------\r\nAPPROXIMATE SIZING for  pint glass:\r\n\u2714 Capacity: 20 oz \r\n\r\n------------------------------------------------------------------\r\n\r\nContact us at info@glassblasted.com or 772-245-7566\r\n\r\n-------------------------------------------------------------------\r\n\r\n***Common Q & A&#39;s ***\r\n\r\nHow do you engrave the glassware?\r\n--------------------------------------------------\r\n\u200b\r\nWe use sandblasting, which is the premier method for engraving glass. Sandblasting produces a deep, even mark, and it allows for complete design flexibility. It produces the finest result of all the available engraving methods. \r\n\r\n\u200b\r\nHow does sandblasting work?\r\n-------------------------------------------\r\n\u200b\r\nIn sandblasting, an individual vinyl cut image or film mask is made and hand applied to each glass. The negative space is then blasted in a cabinet by a high pressure stream of air and abrasive. The positive space of the vinyl or mask protects the glass areas that will remain clear, while the abrasive carves away the glass in the areas to be engraved. The result is an artistic expression on the glass.\r\n\u200b\r\nWill the engraving be permanent?\r\n----------------------------------------------\r\n\u200b\r\nAbsolutely. It is carved into the glass. Unlike screen printed glasses, the engraving will never wash, chip, or wear off. Yes you can even put your glasses in the dishwasher.",
  "creation_tsz": 1399762673,
  "ending_tsz": 1410389873,
  "original_creation_tsz": 1398537286,
  "last_modified_tsz": 1399762673,
  "price": 17.00,
  "currency_code": "USD",
  "quantity": 48,
  "tags": ["glassware", "pint", "etched", "sandblasted", "glass", "beer", "glass blasted", "glassblastedart", "harry potter", "harry potter glass", "three broomsticks", "beer stein", "beer mug"],
  "category_path": ["Glass", "Glassware", "Etched"],
  "category_path_ids": [69150361, 68891932, 69194689],
  "materials": ["glass", "sandblast cabinet", "vinyl", "beer glass", "pint glass", "etched pint glass", "etched glass", "etched beer glass", "16 oz pint", "beer gift", "etched harry potter glass", "the three broomsticks glass", "personalized harry potter glass"],
  "shop_section_id": 14400332,
  "featured_rank": null,
  "state_tsz": 1398537286,
  "url": "https:\/\/www.etsy.com\/listing\/187612531\/the-three-broomsticks-customizable-beer?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 44,
  "num_favorers": 10,
  "shipping_template_id": 3116240773,
  "processing_min": 3,
  "processing_max": 5,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 118426185,
  "state": "active",
  "user_id": 20513122,
  "category_id": 68891054,
  "title": "Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives",
  "description": "Perfect for a groomsmen gift, a ring bearer or Birthday gift! This listing is for four personalized engraved multi-tool pocket knife. The knife  features a rosewood handle, and 7 tools, including, a knife, a file, a can opener, a bottle opener, a corkscrew, Philips head screw driver and scissors. The knife comes with a faux velvet pouch. \r\n\r\nSize: the pocket knife measures 3-1\/2&quot; x 1&quot; x 5\/8&quot; folded. \r\n\r\nProvide us with your customizable choice of laser-engraving on one or two sides of the knife -see font options or (contact us via &#39;Etsy conversations&#39; to specify details of the text or image you&#39;d like). \r\n\r\nMost orders are ready and shipped within 5 business days after receiving payment.\r\n\r\nPlease note the wood of this knife will have a slightly different wood grain and color than what is depicted in the above photographs. \r\n\r\nThank you for visiting our shop!\r\n\r\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\r\nReview my shop policies here:\r\nhttp:\/\/www.etsy.com\/shop\/EngravingPro\/policy?ref=shopinfo_policies_leftnav",
  "creation_tsz": 1399762621,
  "ending_tsz": 1410389821,
  "original_creation_tsz": 1355852116,
  "last_modified_tsz": 1399762621,
  "price": 48.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["groomsmen gift", "engraved knife", "custom engraved", "personalized", "personalized knife", "engraved wood knife", "personalized gift", "pocket knives", "pocket knife", "wedding party", "favor", "holiday gift idea", "beer"],
  "category_path": ["Weddings", "Men"],
  "category_path_ids": [68887494, 68891054],
  "materials": ["wood", "steel", "rosewood"],
  "shop_section_id": 11725005,
  "featured_rank": null,
  "state_tsz": 1395855503,
  "url": "https:\/\/www.etsy.com\/listing\/118426185\/engraved-pocket-knife-personalized?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 135,
  "num_favorers": 8,
  "shipping_template_id": 1619939230,
  "processing_min": 3,
  "processing_max": 5,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": "unisex_adults",
  "occasion": "wedding",
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 189186674,
  "state": "active",
  "user_id": 24195467,
  "category_id": 68891932,
  "title": "Hand Painted Colorful Feather Glass",
  "description": "This design is available in pint glasses and wine glasses. \r\n\r\nThis is a hand painted glass . This design was painted using different sized dots which gives it a unique twist on the regular painted glass.",
  "creation_tsz": 1399762601,
  "ending_tsz": 1410389801,
  "original_creation_tsz": 1399762601,
  "last_modified_tsz": 1399762852,
  "price": 15.00,
  "currency_code": "USD",
  "quantity": 2,
  "tags": ["feather", "wine", "glass", "glassware", "hand painted", "spotted", "colorful", "pint", "beer", "unique"],
  "category_path": ["Glass", "Glassware"],
  "category_path_ids": [69150361, 68891932],
  "materials": ["enamel", "acrylic", "glass", "paint"],
  "shop_section_id": 15121558,
  "featured_rank": null,
  "state_tsz": 1399762601,
  "url": "https:\/\/www.etsy.com\/listing\/189186674\/hand-painted-colorful-feather-glass?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 0,
  "num_favorers": 0,
  "shipping_template_id": 2388008343,
  "processing_min": 3,
  "processing_max": 5,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "2010_2014",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 184857757,
  "state": "active",
  "user_id": 31920628,
  "category_id": 69150467,
  "title": "Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING",
  "description": "- FREE SHIPPING in the U.S. - Give your Groomsmen a unique gift! Personalized credit card bottle openers will be huge hits with the men in your wedding party.  These would be great way to ask them to be your in your wedding party! We would be happy to add images and we also have a wide variety of fonts. \r\n\r\nThis perfect little stainless steel bottle opener fits right into a credit card slot in your wallet. It&#39;s light, but super heavy duty and will not bend. Never be caught without a bottle opener again.\r\n\r\nTo Order:\r\n1. Add item to cart. In message to seller, please indicate cusomization request\r\n2. Checkout with your preferred payment method\r\n3. Item will be shipped 1st class USPS mail in 3-6 business days\r\n\r\nBy purchasing this listing, you are agreeing to Light Knife&#39;s policies.\r\n\r\n\u00a9 March 2014 - Light Knife Studio, LLC",
  "creation_tsz": 1399762585,
  "ending_tsz": 1410389785,
  "original_creation_tsz": 1396457156,
  "last_modified_tsz": 1399762585,
  "price": 14.00,
  "currency_code": "USD",
  "quantity": 12,
  "tags": ["Groomsman Gift", "Bottle Opener", "Credit Card Sized", "Personalized", "Free Shipping", "Wedding Party", "Favor", "Gift", "21 Gift", "Bridal Party", "beer", "groomsman", "beer bottle"],
  "category_path": ["Accessories"],
  "category_path_ids": [69150467],
  "materials": ["Stainless Steel Bottle Opener"],
  "shop_section_id": 14452948,
  "featured_rank": null,
  "state_tsz": 1398444820,
  "url": "https:\/\/www.etsy.com\/listing\/184857757\/groomsman-gifts-bottle-opener-credit?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 95,
  "num_favorers": 17,
  "shipping_template_id": 1074454527,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": "unisex_adults",
  "occasion": null,
  "style": ["Fantasy"],
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 107352718,
  "state": "active",
  "user_id": 22822975,
  "category_id": 69150467,
  "title": "Bike Beer Growler Holder Cover Carrier - Bicycle Mounted",
  "description": "Leather beer growler carrier  for your bicycle.\r\n\r\nSo you need to make a trip to your local brewery to fill your beer growler with your favorite craft brew to go enjoy at home, the park, a party, wherever. What better way to make that trip than on your bike and what better way to carry that beer growler than with a hand crafted, classy, stylish leather beer growler holder fixed securely to your bike. This growler holder looks so good that I often attract attention and get compliments from people who don&#39;t even know what a beer growler is, and when I tell them what it is they like it even more.\r\n\r\nThis holder is sturdy and durable,  I just &quot;tested&quot; it on a recent trip from Seattle to San Francisco. It came with me and my bike riding down the coast in the sun, rain and fog. (The first image is actually from half way through the trip and as you can see still looks beautiful after 500 long miles on the road.) Stopping at nearly every brewery along the west coast that we passed it held up remarkably. My riding friend and I were a hit when we showed up at each hiker biker site with a full growler of the local micro brew of the day.\r\n\r\nHand crafted with as much care as the wonderful craft beer that fills your beer growler. Great for transporting your home brew in style or standing out and looking classy when you take that growler to be filled at your local brewery. This growler cover will attract attention and protect your growler at the same time.\r\n\r\nHand crafted out of thick veg-tanned genuine leather to help protect your glass growler. Makes transporting your beer and growler safer, easier and much more attractive. Top simply slides over and snaps shut securing your growler leaving the handle exposed for easy carrying. With the Pedal Happy Leather Growler Cover you now have a stylish classy growler.\r\n\r\nLeather color options - Black, light brown, dark brown or mahogany.\r\n\r\n*growler sold separately.\r\n\r\n\r\nSELECT TESTIMONIALS:\r\n&quot;I like EVERYTHING about this item. If you like beer and like bicycles you&#39;ll be drooling over it. Leather work is top notch!!! I couldn&#39;t be happier!&quot;\r\n- Jeremey\r\n\r\n&quot;Fantastic! I am beyond thrilled w\/ the workmanship. Thank you.&quot;\r\n- Claire\r\n\r\n&quot;The craftsmanship is impeccable. So gorgeous!&quot;\r\n- Mandy\r\n\r\n&quot;Beautiful and well made. Exceeded my expectations!&quot;\r\n- Jane\r\n\r\n\r\nPROTECT YOUR LEATHER:\r\n\r\nProtect your beautiful Pedal Happy leather item. \r\nAll Pedal Happy products have leather protective applied however to keep your leather item looking and functioning like new keep it protected throughout the years with a 1oz container of Obenauf&#39;s leather preservative. \r\n\r\nWe are proud to offer Obenauf&#39;s Leather Preservative  to keep your leather product looking and feeling like new!\r\n\r\nYou can find\/purchase Obenauf&#39;s Leather Preservative here:\r\nhttps:\/\/www.etsy.com\/listing\/161724810\/leather-preservative-by-obenauf?ref=pr_shop",
  "creation_tsz": 1399762511,
  "ending_tsz": 1410389711,
  "original_creation_tsz": 1345496686,
  "last_modified_tsz": 1399762511,
  "price": 80.00,
  "currency_code": "USD",
  "quantity": 4,
  "tags": ["beer", "growler", "craft beer", "micro brew", "leather", "home brew", "holder", "carrier", "brewery", "bicycle", "bike", "rack", "motorcycle"],
  "category_path": ["Accessories"],
  "category_path_ids": [69150467],
  "materials": ["leather"],
  "shop_section_id": 12038613,
  "featured_rank": 1,
  "state_tsz": 1391721076,
  "url": "https:\/\/www.etsy.com\/listing\/107352718\/bike-beer-growler-holder-cover-carrier?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 22520,
  "num_favorers": 898,
  "shipping_template_id": null,
  "processing_min": 5,
  "processing_max": 10,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "2010_2014",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": true,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": true,
  "used_manufacturer": false
}, {
  "listing_id": 189191047,
  "state": "active",
  "user_id": 11250425,
  "category_id": 68891910,
  "title": "1970s PBR Glass Beer Pitcher Pabst",
  "description": "This is a large glass pitcher that was used in a Wisconsin bar for years made by Pabst. We believe it is from the late 1960s or early 1970s. It is in very good shape with no chips or cracks (please see pictures) and still displays well.  It measures 9 inches tall & about 6 inches wide. It is made of cardboard and will be shipped in a protective sleeve. It would look great on your bar and it is the perfect gift for a PBR fan. \n\nSHIPPING INFORMATION: We usually ship in 2-3 days of getting a cleared payment. Tracking is included in our shipping price. If the shipping turns out to be cheaper than what we quoted you... we will refund the difference. We also offer free local pick-up... in most situations. Please ask about this if you are interested. We ship almost exclusively through the USPS, since they seem to have the best rates. If you need another shipping company, please let us know.\r\n\r\nInternational Shipping:\r\nDue to the new (higher) shipping prices, please ask us about all international shipping first.\r\n\r\nIn the case of Import Duties, Taxes and Surcharges... these are NOT included in the item price or shipping charges. These charges are the buyer&#39;s responsibility.\r\n\r\nWe will not mark &quot;gift&quot; on the customs form, so please do not ask us to.\r\n\r\nWe will try to find you the cheapest shipping that still has tracking information, but sometimes these estimates are high. It is not unusual for us to have to refund some shipping due to these high estimates.",
  "creation_tsz": 1399762470,
  "ending_tsz": 1410389670,
  "original_creation_tsz": 1399762470,
  "last_modified_tsz": 1399762470,
  "price": 22.00,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["Collectible", "Vintage", "Americana", "PBR", "Advertisement", "home decor", "Kitchen", "man cave", "Decorative", "display", "wall hanging", "Gift", "Pabst"],
  "category_path": ["Housewares", "Serving"],
  "category_path_ids": [69150425, 68891910],
  "materials": ["glass"],
  "shop_section_id": null,
  "featured_rank": null,
  "state_tsz": 1399762470,
  "url": "https:\/\/www.etsy.com\/listing\/189191047\/1970s-pbr-glass-beer-pitcher-pabst?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 0,
  "num_favorers": 0,
  "shipping_template_id": 13066068,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "someone_else",
  "is_supply": "false",
  "when_made": "1970s",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 189186476,
  "state": "active",
  "user_id": 46133579,
  "category_id": 69194689,
  "title": "Libbey 14oz Glass Beer Mug with 2.5&quot; Pawtucket RI Patch etch",
  "description": "Libbey 2.5 oz. Shot Glass Etch with Pawtucket RI Patch Etch\r\n\r\nDetails\r\n\r\nLibbey 5018 14 oz. paneled beer mugs are certain to please with their distinctive classic shape and paneled design. These mugs are perfect for anyone who likes beer. \r\n\r\nDimensions:\r\nHeight: 6 1\/8&quot; \r\nTop Diameter: 3 1\/2&quot; \r\nBottom Diameter: 3 1\/2&quot; \r\nMaximum Diameter: 5&quot;\r\n\r\n\r\n\r\nCertifications\r\n\r\nMade in America",
  "creation_tsz": 1399762437,
  "ending_tsz": 1410389637,
  "original_creation_tsz": 1399762437,
  "last_modified_tsz": 1399763057,
  "price": 6.99,
  "currency_code": "USD",
  "quantity": 8,
  "tags": ["pilsner", "glass", "etched", "iaff", "beer", "fire", "firefighter", "mug", "Pawtucket"],
  "category_path": ["Glass", "Glassware", "Etched"],
  "category_path_ids": [69150361, 68891932, 69194689],
  "materials": ["glass", "etched", "iaff"],
  "shop_section_id": 15251126,
  "featured_rank": null,
  "state_tsz": 1399762437,
  "url": "https:\/\/www.etsy.com\/listing\/189186476\/libbey-14oz-glass-beer-mug-with-25?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 2,
  "num_favorers": 0,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 189190869,
  "state": "active",
  "user_id": 46133579,
  "category_id": 69194689,
  "title": "Libbey 14oz Glass Beer Mug with 2.5&quot; Pawtucket RI Maltise etch",
  "description": "Libbey 2.5 oz. Shot Glass Etch with Pawtucket RI Maltese \r\n\r\nDetails\r\n\r\nLibbey 5018 14 oz. paneled beer mugs are certain to please with their distinctive classic shape and paneled design. These mugs are perfect for anyone who likes beer. \r\n\r\nDimensions:\r\nHeight: 6 1\/8&quot; \r\nTop Diameter: 3 1\/2&quot; \r\nBottom Diameter: 3 1\/2&quot; \r\nMaximum Diameter: 5&quot;\r\n\r\n\r\n\r\nCertifications\r\n\r\nMade in America",
  "creation_tsz": 1399762304,
  "ending_tsz": 1410389504,
  "original_creation_tsz": 1399762304,
  "last_modified_tsz": 1399762304,
  "price": 6.99,
  "currency_code": "USD",
  "quantity": 8,
  "tags": ["pilsner", "glass", "etched", "iaff", "beer", "fire", "firefighter", "mug", "Pawtucket"],
  "category_path": ["Glass", "Glassware", "Etched"],
  "category_path_ids": [69150361, 68891932, 69194689],
  "materials": ["glass", "etched", "iaff"],
  "shop_section_id": 15251126,
  "featured_rank": null,
  "state_tsz": 1399762304,
  "url": "https:\/\/www.etsy.com\/listing\/189190869\/libbey-14oz-glass-beer-mug-with-25?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 2,
  "num_favorers": 0,
  "shipping_template_id": null,
  "processing_min": 1,
  "processing_max": 3,
  "who_made": "i_did",
  "is_supply": "false",
  "when_made": "made_to_order",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}, {
  "listing_id": 91947693,
  "state": "active",
  "user_id": 5217261,
  "category_id": 69169239,
  "title": "Beautiful Vintage Pendant - Root Beer and Amber Rhinestones",
  "description": "Wonderful Pendant for your chain or to use in a vintage assemblage.\r\n\r\nGold metal setting with prong set rhinestones in a root beer brown color accented by 4 amber rhinestones. \r\n\r\nMeasures just under 2.&quot; tall and across.\r\n\r\n\r\n\r\n\r\nThese are all pre-owned vintage pieces and therefore not always &quot;perfect&quot;.\r\n\r\n\r\n** Entangled Supplies and Vintage are not purchases for resale. They are overflow from my numerous bins, boxes, drawers, shelves and storage containers. They often come from the larges boxes of broken and old jewelry that I buy in bulk, sight unseen, for my projects at juliajae.etsy.com. They may be new or recycled\/re-purposed items. Many pieces are original and one of a kind (in my supply stash anyway). They may contain; nickel, sterling, gold or silver plate, glass, steel, stainless, tin, plastics, lead, leather, crystal, stone, gemstone, shell, pewter, paint and more.",
  "creation_tsz": 1399762271,
  "ending_tsz": 1410389471,
  "original_creation_tsz": 1328075370,
  "last_modified_tsz": 1399762724,
  "price": 3.50,
  "currency_code": "USD",
  "quantity": 1,
  "tags": ["jewelry", "team etsyrain", "gold", "pendant", "rhinestone", "necklace", "brown", "amber"],
  "category_path": ["Vintage", "Jewelry", "Pendant"],
  "category_path_ids": [69150437, 69154693, 69169239],
  "materials": ["metal", "rhinestone"],
  "shop_section_id": 5444508,
  "featured_rank": 3,
  "state_tsz": 1399762261,
  "url": "https:\/\/www.etsy.com\/listing\/91947693\/beautiful-vintage-pendant-root-beer-and?utm_source=etsybrowser&utm_medium=api&utm_campaign=api",
  "views": 49,
  "num_favorers": 5,
  "shipping_template_id": null,
  "processing_min": null,
  "processing_max": null,
  "who_made": "someone_else",
  "is_supply": "false",
  "when_made": "before_1995",
  "is_private": false,
  "recipient": null,
  "occasion": null,
  "style": null,
  "non_taxable": false,
  "is_customizable": false,
  "is_digital": false,
  "file_data": "",
  "language": "en-US",
  "has_variations": false,
  "used_manufacturer": false
}]


items.forEach(function(string){
	if (string.currency_code == "GBP"){
		console.log(string.title + " costs £" + string.price);
	}});

var price = items.map(function(value){
	return value.price;
});


var listSum = price.reduce(function(value1, value2){
	return value1 + value2;
});

console.log("The average price is $" + average(listSum,price.length));
// I could not figure out how to do this without variables

items.forEach(function(object){
	object.materials.forEach(function(material){
		if (material == "wood") {
			console.log(object.title + " is made of wood.");
		}; 
	});
});

// Figured out how to get the average without variables.
console.log("The average price is $" + items.map(function(object){
	return object.price;
	}).reduce(function(a,b){
		return a+b;
			}) / items.length
	);

// I want to find which item is the cheapest.
function sortDescending (a,b){
	return b - a;
};

console.log(items.map(function(array){
	return array.price;
}).sort(sortDescending).pop());
// It worked, which I"m pretty excited about, but not useful because I don't know
// which item it is.

// This gives me object title and price together in an array. Now I'd like to find
// the cheapest one.
console.log(items.map(function(object){
	return object.title + " $" + object.price;
	
}));




	


















