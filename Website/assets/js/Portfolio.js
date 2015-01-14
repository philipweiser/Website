//var statesdemo = {
//    state0: {
//        title: 'Name',
//        html: '<label>First <input type="text" name="fname" value=""></label><br />' +
//			'<label>Last <input type="text" name="lname" value=""></label><br />',
//        buttons: { Next: 1 },
//        //focus: "input[name='fname']",
//        submit: function (e, v, m, f) {
//            console.log(f);

//            e.preventDefault();
//            $.prompt.goToState('state1');
//        }
//    },
//    state1: {
//        title: 'Gender',
//        html: '<label><input type="radio" name="gender" value="Male"> Male</label><br />' +
//			'<label><input type="radio" name="gender" value="Female"> Female</label>',
//        buttons: { Back: -1, Next: 1 },
//        //focus: ":input:first",
//        submit: function (e, v, m, f) {
//            console.log(f);

//            if (v == 1) $.prompt.goToState('state2')
//            if (v == -1) $.prompt.goToState('state0');
//            e.preventDefault();
//        }
//    },
//    state2: {
//        title: 'Transportation',
//        html: '<label>Travels By <select name="travel" multiple>' +
//				'<option value="Car" selected>Car</option>' +
//				'<option value="Bus">Bus</option>' +
//				'<option value="Plane" selected>Plane</option>' +
//				'<option value="Train">Train</option>' +
//			'</select></label>',
//        buttons: { Back: -1, Done: 1 },
//        focus: 1,
//        submit: function (e, v, m, f) {
//            console.log(f);

//            e.preventDefault();
//            if (v == 1) $.prompt.close();
//            if (v == -1) $.prompt.goToState('state1');
//        }
//    },
//};

//$.prompt(statesdemo);

//functions that call the modal windows
function callMax() {
    $.prompt(maxDemo);
}
function callSum() {
    $.prompt(sumDemo);
}
function callMultiply() {
    $.prompt(multiplyDemo);
}
function callFactorial() {
    $.prompt(facDemo);
}
function callPalindrome() {
    $.prompt(palDemo);
}
function callFizzBuzz() {
    $.prompt(fbDemo);
}
function callIsPerfect() {
    $.prompt(perfDemo);
}
function callDisp() {
    $.prompt(dispDemo);
}
function callIsHappy() {
    $.prompt(happyDemo);
}
function callArmstrong() {
    $.prompt(armDemo);
}
//demo of max of three function
var maxDemo = {
    state0: {
        title: 'Max Method',
        html: '<h3>Objective: </h3><p>Create a function that accepts three numbers as arguments and returns the largest one.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {
            
            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Max Method input',
        html:   '<div type="row">' +
                    '<div type="col-xs-1">' +
                        '<input type="text" id="number1" size="15">' +
                            ' <p>I expanded this method to accept more than three numbers.  Please input as many numbers as you would like, separated by spaces.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>'+
                '<div type="row" id="answer-1-row">'+
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {
            
            if (v == 1) $.prompt.goToState('state2');
            if (v == 0) fillAnswer(maxOfThree($('#number1').val()), $('#answer-1-row'), 'The largest number submitted is: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Max Method Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
            submit: function (e, v, m, f) {
            }
    }
};
//demo of sum function
var sumDemo = {
    state0: {
        title: 'Sum Method',
        html: '<h3>Objective: </h3><p>Create a function that accepts an array of numbers and returns the sum.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Sum Method input',
        html: '<div type="row">' +
                    '<div type="col-xs-1">' +
                        '<input type="text" id="number1" size="15">' +
                            ' <p>Please input as many numbers as you would like, separated by spaces.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(sum($('#number1').val()), $('#answer-1-row'), 'The sum is: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Sum Method Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of multiply function
var multiplyDemo = {
    state0: {
        title: 'Multiply Method',
        html: '<h3>Objective: </h3><p>Create a function that accepts three numbers as arguments and returns their product.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Multiply Method input',
        html: '<div type="row">' +
                    '<div type="col-xs-1">' +
                        '<input type="text" id="number1" size="15">' +
                            ' <p>I expanded this method to accept more than three numbers.  Please input as many numbers as you would like, separated by spaces.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(multiply($('#number1').val()), $('#answer-1-row'), 'The product is: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Multiply Method Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of factorial function
var facDemo = {
    state0: {
        title: 'Factorial Method',
        html: '<h3>Objective: </h3><p>Create a function that accepts a number and returns its factorial.  The factorial of a number is the product of all positive integers less than or equal to the number.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Factorial Method input',
        html: '<div type="row">' +
                    '<div type="col-xs-1">' +
                        '<input type="text" id="number1" size="15">' +
                            ' <p>Please input a positive integer.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(factorial($('#number1').val()), $('#answer-1-row'), 'The factorial of ' + $('#number1').val() + ' is: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Factorial Method Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of palindrome function
var palDemo = {
    state0: {
        title: 'Palindrome Method',
        html: '<h3>Objective: </h3><p>Create a function that checks whether or not a word is a palindrome.  A palindrome is a word that is the same when read forwards and backwards.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Palindrome Method input',
        html: '<div type="row">' +
                    '<div type="col-xs-1">' +
                        '<input type="text" id="number1" size="15">' +
                            ' <p>Please input a word or phrase.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(palindrome($('#number1').val()), $('#answer-1-row'), 'Is it a palindrome?: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Palindrome Method Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of fizzbuzz function
var fbDemo = {
    state0: {
        title: 'FizzBuzz Method',
        html: '<h3>Objective: </h3><p>Create a function that iterates from 1 to 100, printing each number, while replacing numbers divisible by 3 with "Fizz", replacing numbers divisible by 5 with "Buzz", and replacing numbers divisible both by 3 and 5 with "FizzBuzz".</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Max Method input',
        html:   '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(fizzBuzz(), $('#answer-1-row'), 'The results of running FizzBuzz: <br>');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'FizzBuzz Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of finding perfects function
var dispDemo = {
    state0: {
        title: 'Perfect Number Finder',
        html: '<h3>Objective: </h3><p>Create a function that finds the perfect numbers less than 10,000.  A perfect number is a positive integer that is equal to the sum of its proper divisors.  For example, 6 is perfect, its divisors being 1, 2 and 3, with 1 + 2 + 3 = 6.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Perfect Number Finder',
        html: '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(disp(), $('#answer-1-row'), '');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Perfect Number Finder',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of finding happy numbers
var happyDemo = {
    state0: {
        title: 'Happy Numbers Finder',
        html: '<h3>Objective: </h3><p>Create a function that finds the first five happy numbers.  A happy number is one that can be reduced to 1 using the following process: Start with any positive integer, replace the number with the sum of the squares of its digits, and repeat until the result is 1.  An unhappy number continues this process indefinitely.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Happy Numbers Finder',
        html: '<div type="row">' +
                    '<div type="col-xs-1">' +
                            ' <p>I expanded this method to accept more than three numbers.  Please input as many numbers as you would like, separated by spaces.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(happy(), $('#answer-1-row'), 'The first five happy numbers are: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Happy Numbers Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};
//demo of finding armstrong numbers
var armDemo = {
    state0: {
        title: 'Max Method',
        html: '<h3>Objective: </h3><p>Create a function that finds all the three-digit Armstrong numbers.  An Armstrong number is an integer such that the sum of the cubes of its digits is equal to the number itself.  For example, 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Max Method input',
        html: '<div type="row">' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Next: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.goToState('state2')
            if (v == 0) fillAnswer(armstrong(), $('#answer-1-row'), 'The three digit Armstrong Numbers are: ');
            if (v == -1) $.prompt.goToState('state0');
            e.preventDefault();
        }
    },
    state2: {
        title: 'Max Method Result',
        html: '',
        buttons: { Back: -1, Next: 1 },
        submit: function (e, v, m, f) {
        }
    }
};

//helper method to fill answer tags
function fillAnswer(theAnswer, theDiv, theText) {
    theDiv.replaceWith('<div type = row id="answer-1-row"><p>' + theText + theAnswer + '</p></div>');
}
function maxOfThree() {
    var temp = 0;
    var strArr = arguments[0].split(" ");
    for (var i = 0; i < strArr.length; i++) {
        if (Number(strArr[i]) > temp) {
            temp = strArr[i];
        }
    }
    return temp;
}

function sum() {
    var temp = 0;
    var strArr = arguments[0].split(" ");
    for (i = 0; i < strArr.length; i++) {
        temp += Number(strArr[i]);
    }
    return temp;
}

function multiply() {
    var temp = 1;
    var strArr = arguments[0].split(" ");
    for (i = 0; i < strArr.length; i++) {
        temp *= Number(strArr[i]);
    }
    return temp;
}

function factorial() {
    var temp = 1;
    var strArr = arguments[0].split(" ");
    var n = Number(strArr[0]);
    for (i = n; i > 0; i--) {
        temp *= i;
    }
    return temp;
}

function palindrome() {
    var temp = String(arguments[0]).toLowerCase();
    for (i = 0; i < temp.length / 2 - 1; i++) {
        if (temp.charAt(i) !== temp.charAt(temp.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

function fizzBuzz() {
    var answer = "";
    for (i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            answer += "FizzBuzz ";
        } else if (i % 5 === 0) {
            answer += "Buzz ";
        } else if (i % 3 === 0) {
            answer += "Fizz ";
        } else {
            answer += i + " ";
        }
        answer += "<br>";
    }
    return answer;
}

function isPerfect() {
    var num = Number(arguments[0]);
    if (num <= 5) {
        return false;
    }
    var div_sum = 0;
    for (i = 0; i < num / 2 + 1; i++) {
        if (num % i === 0) {
            div_sum += i;
        }
    }

    if (div_sum === num) {
        return true;
    } else {
        return false;
    }
}
function isPerfect(rawr) {
    if (rawr <= 5) {
        return false;
    }
    var div_sum = 0;
    for (i = 0; i < rawr; i++) {
        if (rawr % i === 0) {
            div_sum += i;
        }
    }

    if (div_sum === rawr) {
        return true;
    } else {
        return false;
    }
}
function disp() {
    var answer = "Perfect numbers less than 10,000:\n";
    for (var i = 6; i <= 10000; i++) {
        if (isPerfect(i)) {
            answer += i + "\n";
        }
    }
    return answer;
}

function happy() {
    var count = 0;
    var attempts = 10;
    var currentNum = 1;
    var answer = [];
    while (count < 5) {
        var startNum = currentNum;
        for (i = 0; i < attempts; i++) {
            var foo = [];
            while (currentNum > 0) {
                foo[foo.length] = currentNum % 10;
                currentNum = Math.floor(currentNum / 10);
            }
            var theSum = 0;
            for (j in foo) {
                foo[j] *= foo[j];
                theSum += foo[j];
            }
            currentNum = theSum;
            if (currentNum == 1) {
                count++;
                answer[answer.length] = startNum;
                break;
            }
        }
        currentNum = startNum + 1;
    }
    var strAnswer = "";
    for(var i=0; i<answer.length; i++) {
        strAnswer += answer[i] + "\n";
    }
    return strAnswer;
}

function armstrong() {
    var answer = "Three Digit Armstrong Numbers:\n";
    for (var i = 100; i < 1000; i++) {
        var temp = i;
        var sum = 0;
        while (temp > 0) {
            sum += Math.pow((temp % 10), 3);
            temp = Math.floor(temp / 10);
        }
        if (sum == i) {
            answer += i + "\n";
        }
    }
    return answer;
}