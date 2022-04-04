//using if to find positive or negatib=ve number
const number = 10;

if (number % 2 === 0) {
    console.log("number is positive");

} else {
    console.log('number is negative');
}

//using if statement to determine greatest of all 3 numbers

const num1 = 30;
const num2 = 20;
const num3 = 10;

if ((num1 >= num2) && (num2 >= num3)) {
    console.log("num1 is greatest among all numbers");
}



//using switch for days

const days = 'Tuesday';

switch (days) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Only 3 more days until weekend');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;

    default:
        console.log('Sorry we did not recognised the day');
}

// using switch vegetable price
const vegetable = "carrot";
switch (vegetable) {
    case "potato":
    case "carrot":
        console.log("50rs per kg");
        break;
    case "brocolie":
        console.log("80rs per kg");
        break;
    case "cabbage":
        console.log("30rs per kg");
}