//functions that call the modal windows
function callMax() {
    $.prompt(maxDemo);
}
function callSum() {
    $.prompt(sumMultDemo);
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
function callLongestWord() {
    $.prompt(longestWord);
}
function filterLong() {
    $.prompt(filterLongWords);
}
function callWordFreq() {
    $.prompt(wordFreq);
}
function countAlice() {
    $.prompt(aliceDemo);
}
//demo of max of three function7
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
        html: $('#maxOfThree1Template').html(),
        buttons: { Back: -1, Submit: 0,  Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {
            
            if (v == 1) $.prompt.close();
            else if (v == 0) {
                var text = String($('#number1').val()).split(' ');
                var options = {
                    url: '/Exercises/MaxOfThree',
                    type: 'POST',
                    data: { numberList: text }
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            else if (v == -1) $.prompt.goToState('state0');
            else if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'maxOfThree', Type: 'int?' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
            }
            e.preventDefault();
        }
    }
};
//demo of sum & multiply function
var sumMultDemo = {
    state0: {
        title: 'Sum & Multiply Method',
        html: '<h3>Objective: </h3><p>Create a function that accepts three numbers and returns the sum and product.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Sum Method input',
        html: $('#sumMultTemplate').html(),
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1},
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {
                var text = String($('#number1').val()).split(' ');
                var numArray = [];
                for (var i = 0; i < text.length; i++){
                    numArray[numArray.length] = text[i];
                }
                var options = {
                    url: '/Exercises/SumMult',
                    type: 'POST',
                    data: { numberList: numArray }
                }
                $.ajax(options).then(function (response) {
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'sumMult', Type: 'int[]' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
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
        html: $('#facTemplate').html(),
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {
                var text = Number($('#number1').val());

                var options = {
                    url: '/Exercises/Factorial',
                    type: 'POST',
                    data: { number: text }
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'factorial', Type: 'int' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
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
        html: $('#palTemplate').html(),
        buttons: { Back: -1, Submit: 0, Code: 2, Close:1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {
                var text = $('#number1').val();


                var options = {
                    url: '/Exercises/Palindrome',
                    type: 'POST',
                    data: { fact: text }
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'palindrome', Type: 'bool' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
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
        html: $('#fbTemplate').html(),
        buttons: { Back: -1, Run: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {

                var options = {
                    url: '/Exercises/FizzBuzz',
                    type: 'POST'
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'fizzBuzz', Type: 'string[]' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
            }
            e.preventDefault();
        }
    }
};
//demo of finding longestWord function
var longestWord = {
    state0: {
        title: 'Longest Word Finder',
        html: '<h3>Objective: </h3><p>Create a function that finds the longest word from the first chapter of Alice in Wonderland</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Longest Word Finder',
        html: $('#lwTemplate').html(),
        buttons: { Back: -1, Run: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {

                var options = {
                    url: '/Exercises/LongestWord',
                    type: 'POST',
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'longestWord', Type: 'string' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
            }
            e.preventDefault();
        }
    }
};
//demo of showing only long words
var filterLongWords = {
    state0: {
        title: 'Filter Long Words',
        html: '<h3>Objective: </h3><p>Create a function that asks a user for a string length.  Find all words of that length or longer from the first chapter of Alice in Wonderland and print them.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Filter Long Words',
        html: $('#flTemplate').html(),
        buttons: { Back: -1, Run: 0, Code: 2, Close:1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {
                var text = Number($('#number1').val());


                var options = {
                    url: '/Exercises/FilterLong',
                    type: 'POST',
                    data: { length: text }
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'filterLongWords', Type: 'List<string>' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
            }
            e.preventDefault();
        }
    }
};
//demo of finding word frequency
var wordFreq = {
    state0: {
        title: 'Word Frequency Finder',
        html: '<h3>Objective: </h3><p>Create a function that counts how many times each word is used from the first chapter of Alice in Wonderland and print them.</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Word Frequency Finder',
        html: $('#wfTemplate').html(),
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {

                var options = {
                    url: '/Exercises/WordFreq',
                    type: 'POST'
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'wordFreq', Type: 'List<KeyValuePair<string, int>>' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
            }
            e.preventDefault();
        }
    }
};
//demo of count alice
var aliceDemo = {
    state0: {
        title: 'Count Alice',
        html: '<h3>Objective: </h3><p>Create a function that counts the number of times the word Alice is used in the first chapter of Alice in Wonderland</p>',
        buttons: { Next: 1 },
        //focus: "input[name='fname']",
        submit: function (e, v, m, f) {

            e.preventDefault();
            $.prompt.goToState('state1');
        }
    },
    state1: {
        title: 'Count Alice',
        html: $('#caTemplate').html(),
        buttons: { Back: -1, Submit: 0, Code: 2, Close: 1 },
        //focus: ":input:first",
        submit: function (e, v, m, f) {

            if (v == 1) $.prompt.close();
            if (v == 0) {

                var options = {
                    url: '/Exercises/CountAlice',
                    type: 'POST'
                }
                $.ajax(options).then(function (response) {
                    console.log(response);
                    $('#answer-1-row').replaceWith(response);
                },
                function (error) {
                    console.log(error);
                    //output error in some way
                });
            }
            if (v == -1) $.prompt.goToState('state0');
            if (v == 2) {
                if ($('#madeCode').is(':visible')) {
                    $('#madeCode').hide();
                } else {
                    $('#madeCode').show();
                }

                var options = {
                    url: '/Exercises/GetCode',
                    type: 'POST',
                    data: { Name: 'countAlice', Type: 'int' }
                }
                $.ajax(options).then(function (response) {
                    $('#unmadeCode').replaceWith(response);
                    SyntaxHighlighter.highlight($('#madeCode'));
                });
            }
            e.preventDefault();
        }
    }
};
//helper method to fill answer tags
function fillAnswer(theAnswer, theDiv, theText) {
    theDiv.replaceWith('<div type = row id="answer-1-row"><p>' + theText + theAnswer + '</p></div>');
}

function javaProbs() {
    if (showJavaScript) {
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