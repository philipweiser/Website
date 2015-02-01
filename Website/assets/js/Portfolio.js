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
                    '<div id="unmadeCode">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">'+
                '</div>',
        buttons: { Back: -1, Submit: 0,  Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {
            
            if (v == 1) $.prompt.close();
            else if (v == 0) {
                fillAnswer(maxOfThree($('#number1').val()), $('#answer-1-row'), 'The largest number submitted is: ');
            }
            else if (v == -1) $.prompt.goToState('state0');
            else if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#unmadeCode').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">' +
'function maxOfThree() {\n' +
'    var temp = 0;\n' +
'    var strArr = arguments[0].split(" ");\n' +
'    for (var i = 0; i < strArr.length; i++) {\n' +
'        if (Number(strArr[i]) > temp) {\n' +
'            temp = strArr[i];\n' +
'        }\n' +
'    }\n' +
'    return temp;\n' +
'}\n</pre></div>');
            SyntaxHighlighter.highlight($('#toColor'));
            }
            e.preventDefault();
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
        html: '<div type="row">\n'+
                    '<div type="col-xs-1">' +
                        '<input type="text" id="number1" size="15">' +
                            ' <p>Please input as many numbers as you would like, separated by spaces.</p>' +
                    ' </div>' +
                    '<div type="col-xs-1">' +
                    '</div>' +
                    '<div id="code">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>' ,
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1},
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(sum($('#number1').val()), $('#answer-1-row'), 'The sum is: ');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">' +
'function sum() {\n' +
'    var temp = 0;\n' +
'    var strArr = arguments[0].split(" ");\n' +
'    for (i = 0; i < strArr.length; i++) {\n' +
'        temp += Number(strArr[i]);\n' +
'    }\n' +
'    return temp;\n' +
'}</pre></div>');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
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
                    '<div id="code">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(multiply($('#number1').val()), $('#answer-1-row'), 'The product is: ');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">\n'+
'function multiply() {\n' +
'    var temp = 1;\n'+
'    var strArr = arguments[0].split(" ");\n'+
'    for (i = 0; i < strArr.length; i++) {\n'+
'        temp *= Number(strArr[i]);\n'+
'    }\n'+
'    return temp;\n'+
'}\n</pre></div>');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
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
                    '<div id="code">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(factorial($('#number1').val()), $('#answer-1-row'), 'The factorial of ' + $('#number1').val() + ' is: ');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">\n' +
'function factorial() {\n' +
'    var temp = 1;\n'+
'    var strArr = arguments[0].split(" ");\n'+
'    var n = Number(strArr[0]);\n'+
'    for (i = n; i > 0; i--) {\n'+
'        temp *= i;\n'+
'    }\n'+
'    return temp;\n'+
'}\n</pre></div>');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
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
                    '<div id="code">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, close: 1, Code: 2 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(palindrome($('#number1').val()), $('#answer-1-row'), 'Is it a palindrome?: ');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">\n' +
'function palindrome() {\n' +
'    var temp = String(arguments[0]).toLowerCase();\n'+
'    for (i = 0; i < temp.length / 2 - 1; i++) {\n'+
'        if (temp.charAt(i) !== temp.charAt(temp.length - 1 - i)) {\n'+
'            return false;\n'+
'        }\n'+
'    }\n'+
'    return true;\n'+
'}\n</pre></div>');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
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
        title: 'Run FizzBuzz',
        html: '<div type="row" id="answer-1-row">' +
                    '<div id="code">'+
                    '</div>'+
                '</div>',
        buttons: { Back: -1, Submit: 0, close: 1, Code: 2 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(fizzBuzz(), $('#answer-1-row'), 'The results of running FizzBuzz: <br>');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                    $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">'+
                    'function fizzBuzz() {\n' +
                    '    var answer = "";'+
                    '    for (i = 1; i <= 100; i++) {\n' +
                    '        if (i % 5 === 0 && i % 3 === 0) {\n' +
                    '            answer += "FizzBuzz ";\n' +
                    '        } else if (i % 5 === 0) {\n' +
                    '            answer += "Buzz "\n;\n' +
                    '        } else if (i % 3 === 0) {\n' +
                    '            answer += "Fizz ";\n' +
                    '        } else {\n' +
                    '            answer += i + " ";\n' +
                    '        }\n' +
                    '        answer += "<br>";\n' +
                    '    }\n' +
                    '    return answer;\n' +
                    '}\n</pre></div>');
                    SyntaxHighlighter.highlight($('#toColor'));


            }
            e.preventDefault();
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
                '</div>'+
        '<div id="code">'+
    '</div>',
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(disp(), $('#answer-1-row'), '');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">' +
'function isPerfect(num) {\n' +
'    if (num <= 5) {\n' +
'        return false;\n' +
'    }'+
'    var div_sum = 0;\n' +
'    for (i = 0; i < num; i++) {\n' +
'        if (num % i === 0) {\n' +
'            div_sum += i;\n' +
'        }\n' +
'    }\n' +
'    if (div_sum === num) {\n' +
'        return true;\n' +
'    } else {\n' +
'        return false;\n' +
'    }'+
'}\n' +
'function disp() {\n' +
'    var answer = "";\n' +
'    for (var i = 6; i <= 10000; i++) {\n' +
'        if (isPerfect(i)) {\n' +
'            answer += i + "\\n";\n' +
'        }\n' +
'    }\n' +
'    return answer;\n' +
'}\n</pre></div>\n');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
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
                            ' <p>Click Run please.</p>' +
                    ' </div>' +
                    '<div id="code">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Run: 0, Code: 2, Close:1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(happy(), $('#answer-1-row'), 'The first five happy numbers are: ');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">' +
'function happy() {\n' +
'    var count = 0;\n'+
'    var attempts = 10;\n'+
'    var currentNum = 1;\n'+
'    var answer = [];\n'+
'    while (count < 5) {\n'+
'        var startNum = currentNum;\n'+
'        for (i = 0; i < attempts; i++) {\n'+
'            var foo = [];\n'+
'            while (currentNum > 0) {\n'+
'                foo[foo.length] = currentNum % 10;\n'+
'                currentNum = Math.floor(currentNum / 10);\n'+
'            }\n'+
'            var theSum = 0;\n'+
'            for (j in foo) {\n'+
'                foo[j] *= foo[j];\n'+
'                theSum += foo[j];\n'+
'            }\n'+
'            currentNum = theSum;\n'+
'            if (currentNum == 1) {\n'+
'                count++;\n'+
'                answer[answer.length] = startNum;\n'+
'                break;\n'+
'            }\n'+
'        }\n'+
'        currentNum = startNum + 1;\n'+
'    }\n'+
'    var strAnswer = "";\n'+
'    for(var i=0; i\<answer.length\; i++) { \n'+
'        strAnswer += answer[i] \+ "\\n";\n'+
'    }\n'+
'    return strAnswer;\n'+
'}\n</pre></div>');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
        }
    }
};
//demo of finding armstrong numbers
var armDemo = {
    state0: {
        title: 'Armstrong Number Method',
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
                    '<div id="code">' +
                    '</div>' +
                '</div>' +
                '<div type="row" id="answer-1-row">' +
                '</div>',
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) fillAnswer(armstrong(), $('#answer-1-row'), 'The three digit Armstrong Numbers are: ');
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }
                $('#code').replaceWith('<div id="madeCode"><pre class="brush: js" id="toColor">' +
'function armstrong() {\n' +
'    var answer = "";\n'+
'    for (var i = 100; i < 1000; i++) {\n'+
'        var temp = i;\n'+
'        var sum = 0;\n'+
'        while (temp > 0) {\n'+
'            sum += Math.pow((temp % 10), 3);\n'+
'            temp = Math.floor(temp / 10);\n'+
'        }\n'+
'        if (sum == i) {\n'+
'            answer += i + "\\n";\n'+
'    }\n'+
'    return answer;\n'+
'}\n</pre></div>');
                SyntaxHighlighter.highlight($('#toColor'));

            }
            e.preventDefault();
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
function isPerfect(num) {
    if (num <= 5) {
        return false;
    }
    var div_sum = 0;
    for (i = 0; i < num; i++) {
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
function disp() {
    var answer = "";
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
    var answer = "";
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
var showJavaScript = true;
var showcs = true;
function javaProbs() {
    if(showJavaScript){
        $('.JSExercises').slideDown(1000);
    } else {
        $('.JSExercises').slideUp(1000);
    }
    showJavaScript = !showJavaScript;
}
$('.JSExercises').hide();
function csProbs() {
    if (showcs) {
        $('.CSExercises').slideDown(1000);
    } else {
        $('.CSExercises').slideUp(1000);
    }
    showcs = !showcs;
}
$('.CSExercises').hide();