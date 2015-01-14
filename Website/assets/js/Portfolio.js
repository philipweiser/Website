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
            
            if (v == 1) $.prompt.goToState('state2')
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
//demo of multiply function
var multiplyDemo = {
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
var facDemo = {
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
var palDemo = {
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
var fbDemo = {
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
var fbDemo = {
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
var perfDemo = {
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
var dispDemo = {
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
var happyDemo = {
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
var armDemo = {
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

function fillAnswer(theAnswer, theDiv, theText) {
    theDiv.replaceWith('<div type = row id="answer-1-row"><p>' + theText + theAnswer + '</p></div>');
}
function maxOfThree() {
    var temp = 0;
    var tempStr = arguments[0].split(' ');
    for (var i = 0; i < tempStr.length; i++) {
        if (Number(tempStr[i]) > temp) {
            temp = tempStr[i];
        }
    }
    return temp;
}