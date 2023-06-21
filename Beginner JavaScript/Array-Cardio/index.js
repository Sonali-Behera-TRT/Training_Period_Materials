const toppings = [
    "Mushrooms ",
    "Tomatoes",
    "Eggs",
    "Chili",
    "Lettuce",
    "Avocado",
    "Chiles",
    "Bacon",
    "Pickles",
    "Onions",
    "Cheese",
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: "Love the burgs", rating: 4 },
    { comment: "Horrible Service", rating: 2 },
    {
        comment: "Smoothies are great, liked the burger too",
        rating: 5,
    },
    { comment: "Ambiance needs work", rating: 3 },
    { comment: "I DONT LIKE BURGERS", rating: 1 },
];

/*
Static Methods
*/

// Array.of();

const arr1 = Array.of('Sonali', 'Monali', 'Hardik');
console.log('Arr1: ', arr1);

// Make a function that creates a range from x to y with Array.from();

function createRange(x, y){
    const arr2 = Array.from({length: y - x + 1}, (ele, index) => {
        return x + index;
    });
    return arr2;
}
const arr2 = createRange(3, 7);
console.log('Arr2: ', arr2);


// Check if the last array you created is really an array with Array.isArray();

console.log(`Arr2 is ${Array.isArray(arr2) ? 'an array' : 'not an array'}`);

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

const arr3 = Object.entries(meats);
const arr4 = Object.keys(meats);
const arr5 = Object.values(meats);
console.log('Arr3: ', arr3);
console.log('Arr4: ', arr4);
console.log('Arr5: ', arr5);

arr3.forEach(([key, value]) => {
    console.log(key, value);
});

/*
Instance Methods
*/

// Display all bun types with " or " - use join()

console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into an array

const arr6 = "hot dogs,hamburgers,sausages,corn".split(',');
console.log('Arr6: ', arr6);

// take the last item off toppings with pop()
const lastItem = toppings.pop();
console.log(lastItem);
console.log('toppings array after pop: ', toppings);

// add it back with push()
toppings.push(lastItem);
console.log('toppings array after push: ', toppings);

// take the first item off toppings with shift()
const firstItem = toppings.shift();
console.log(firstItem);
console.log("Toppings array after shift: ", toppings);

// add it back in with unshift()
toppings.unshift(firstItem);
console.log('Toppings array after unshift: ', toppings);

// Do the last four,but immutable (with spreads and new variables)

// Make a copy of the toppings array with slice()
const topping1 = toppings.slice(0);
console.log('Original toppings array: ', toppings);
console.log('Copy 1 of toppings array: ', topping1);

// Make a copy of the toppings array with a spread
const topping2 = [...toppings];
console.log('Original toppings array: ', toppings);
console.log('Copy 2 of toppings array: ', topping2);

// take out items 3 to 5 of your new toppings array with splice()
topping2.splice(2, 3);
console.log('Spliced array of copy 2 of toppings array: ', topping2);

// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = toppings.lastIndexOf('Avocado');
console.log('Avocado index in original array is ', avoIndex);

// Check if hot sauce is in the toppings with includes()

console.log(toppings.includes('Hot sauce') ? 'Hot sauce is there in the toppings array' : 'Hot sauce is not there in the toppings array');

// add it if it's not
toppings.push('Hot sauce');
console.log(toppings.includes('Hot sauce') ? 'Hot sauce is there in the toppings array' : 'Hot sauce is not there in the toppings array');

// flip those toppings around with reverse()
toppings.reverse();
console.log(toppings);

/*
Callback Methods
*/

// find the first rating that talks about a burger with find()
function findFeedBack(word){
    return function(singleFeedBack){
        return singleFeedBack.comment.includes(word);
    };
}

const findBurgFeedBack = feedback.find(findFeedBack('burg'));
console.log(findBurgFeedBack);

const smoothieFeedBack = feedback.find(findFeedBack('Smoothie'));
console.log(smoothieFeedBack);

// find all ratings that are above 2 with filter()
function findRatings(num){
    return function(singleFeedBack){
        return singleFeedBack.rating > num;
    }
}

const rating = feedback.filter(findRatings(2));
console.table(rating);

// find all ratings that talk about a burger with filter()
const burgRatings = feedback.filter(findFeedBack('burg'));
console.table(burgRatings);

// Remove the one star rating however you like!
const lowestRating = feedback.filter(singleFeedBack => {
    return singleFeedBack.rating === 1;
});

console.table(lowestRating);

// check if there is at least 5 of one type of meat with some()
const isEnoughMeat = Object.values(meats).some(qty => {
    return qty >= 5;
});

console.log(isEnoughMeat ? "There is enough meat" : "Not enough meat");

// make sure we have at least 3 of every meat with every()
const isSufficientMeat = Object.values(meats).every(qty => {
    return qty >= 3;
});

console.log(isSufficientMeat ? "Sufficient meat" : "Not sufficient meat");

// sort the toppings alphabetically with sort()
toppings.sort();
console.table(toppings);

// sort the order totals from most expensive to least with .sort()
function sortNumbers(num1, num2){
    return num2 - num1;
}

orderTotals.sort(sortNumbers);
console.log(orderTotals);

// Sort the prices with sort()
const sortedPrice = Object.entries(prices).sort((a, b) => {
    return a[1] - b[1];
});

console.table(sortedPrice);
/*
Looping Methods (next)
*/