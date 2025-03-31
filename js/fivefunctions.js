
//Convert Temperature
function ConvertTemp () {
    let celsius = parseFloat(prompt("Enter the celsius"));
    if (isNaN(celsius)) {
        alert("Invalid");
        return;
    }
    let fahrenheit = ((9/5) * celsius) + 32;
    alert(`The ${celsius}°C is converted to ${fahrenheit}°F`);
}

//Longer word
function getLongerWord() {
    let w1 = prompt("Enter the 1st word:")?.trim();
    let w2 = prompt("Enter the 2nd word:")?.trim();

    if (!w1 || !w2) {
        alert("Invalid input. Please enter both words.");
    } else if (w1.length > w2.length) {
        alert(`The longer word is: ${w1}`);
    } else if (w1.length < w2.length) {
        alert(`The longer word is: ${w2}`);
    } else {
        alert("Both words are equal in length.");
    }
}

//Birthstone
function getBirthstone() {
    let month = prompt("Enter Birthmonth").toLowerCase();
    switch (month) {
        case "january":
        case "jan":
        case "1":
            alert("Your Birthstone is Garnet");
            break;
            
        case "february":
        case "feb":
        case "2":
            alert("Your Birthstone is Amethyst");
            break;

        case "march":
        case "3":
            alert("Your Birthstone is Aquamarine");
            break;

        case "april":
        case "4":
            alert("Your Birthstone is Diamond");
            break;
            
        case "may":
        case "5":
            alert("Your Birthstone is Emerald");
            break;

        case "june":
        case "6":
            alert("Your Birthstone is Pearl & Alexandrite");
            break;

        case "july":
        case "7":
            alert("Your Birthstone is Ruby");
            break;
            
        case "august":
        case "aug":
        case "8":
            alert("Your Birthstone is Peridot");
            break;

        case "september":
        case "sept":
        case "9":
            alert("Your Birthstone is Sapphire");
            break;

        case "october":
        case "oct":
        case "10":
            alert("Your Birthstone is Tourmaline");
            break;
            
        case "november":
        case "nov":
        case "11":
            alert("Your Birthstone is Topaz");
            break;

        case "december":
        case "dec":
        case "12":
            alert("Your Birthstone is Tanzanite");
            break;

        default:
            alert("Invalid");
    }
}

//basic operators
function BasicOpt() {
    let num1 = parseFloat(prompt("Enter num1"));
    let num2 = parseFloat(prompt("Enter num2"));
    let opt = prompt("Enter the operator").toLowerCase();

    switch(opt) {
        case "addition":
        case "add":
        case "+":
            alert(`The sum is ${num1 + num2}`);
            break;

        case "subtraction":
        case "sub":
        case "-":
            alert(`The difference is ${num1 - num2}`);
            break;

        case "multiplication":
        case "multiply":
        case "*":
            alert(`The product is ${num1 * num2}`);
            break;

        case "division":
        case "divide":
        case "/":
            alert(`The quotient is ${(num1 / num2).toFixed(2)}`);
            break;

        default:
            alert("Invalid");
    }
}

//Compute acceleration
function ComputeAcceleration() {
    let initialVelocity = parseFloat(prompt("Enter initial velocity (m/s):"));
    let finalVelocity = parseFloat(prompt("Enter final velocity (m/s):"));
    let time = parseFloat(prompt("Enter time (seconds):"));
    
    if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(time) || time === 0) {
        alert("Invalid input. Please enter valid numbers and ensure time is not zero.");
        return;
    }
    
    let acceleration = (finalVelocity - initialVelocity) / time;
    alert(`The acceleration is ${acceleration.toFixed(2)} m/s²`);
}