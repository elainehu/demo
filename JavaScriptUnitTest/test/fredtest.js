module("'This' Test")
test("how 'this' works", function () {

    var context, message;

    var fn = function () {
        //assert
        ok(this === context, message) ;

    };

   //arrange
    context = window;
    message = "when execute function directly like fn(), 'this' during the execution refer to the global object, " +
        "if fn is supposed to be used with new operator, but you forget to use new, bad thing can happen, " +
        "your global name space is poluted.";
    //act
    fn();

    //arrange
    var x = {};
    x.member1 = fn;
    context = x;
    message = "when execute function as a method, like x.member1(), 'this' during the execution refer the x";
    //act
    x.member1();

    //tear down previous test, to start over
    delete x.member1;
    strictEqual(x.member1, undefined, "after delete x.member1, x.member1 does not exist anymore");


    //arrange
    context = x;
    message = "when execute function like fn.call(x), 'this' during execution refer to the x";
    //act
    fn.call(x);

    //arrange
    context = x;
    message = "when execute function like fn.apply(x), 'this' during execution refer to x";
    //act
    fn.apply(x);

    //arrange
    fn = function () {
        ok(this !== window && this !== context, "when execute fn as with new, like new fn(), " +
            "the 'this' during the execution refer to the instance being created but not anything else");
    };
    //act
    new fn();


    //we expect the number of the assertion which have passed
    expect(6);

});

test("the deference between call and apply", function () {
    var temp;

    var fn = function (hi, bye) {
        temp = this.name + hi + bye;
    };

    var person = { name: "fred" };

    var expectTemp = "fredhibye";
    fn.call(person, "hi", "bye");

    ok(temp === expectTemp, "fn.call(x, p1, p2) will feed the value in fn(p1, p2)");

    fn.apply(person, ["hi", "bye"]);
    ok(temp === expectTemp, "fn.apply(x, [p1, p2]) will feed the value in fn(p1, p2)");

    expect(2);
});


test("function expression vs declaration", function () {

    last();


    function last() {
        ok(true, "function declaration can be place anyware in the scope," +
            " but it is always lifted up to the top by the javascript engine, so " +
            "it can be executed by the code in front of the declaration");

    } //you don't need to put a ";" after a function declaration

    var notok = false;

    if (notok) {

        function x() {
            ok(true, "Even function delcaration is placed inside of a block which can not be executed, " +
                "the function declaration still can be delcared properly, because javascript egnine lift it up to the top, " +
                "this is call 'hosited', so we shouldn't do this, because it is confusing, " +
                "we should use a function expression or move it out of the block ");

        }
    }
    x();

    last = function () { return 1; };
    equal(last(), 1, "a declared function used just like a function expression or variable, and can be reassigned");

    ok(functionExpression === undefined, "function expression is more predicatible, as it will not be hoisted by egine");

    var functionExpression = function () {}; //you need to put a ";" after function expression in a function assignment

    ok(functionExpression, "function expression become effective after it has been assigned");

    if (notok) {
        var functionExpression2 = function () {};

    }
    ok(functionExpression2 === undefined, "function expression will never be hoisted");


    expect(6);
});



test("hoisting in javascript", function () {

    raises(function() {
        var y = undeclaredVariable;
    }, "reading undeclared variable will throw exception");


    var y = x;
    ok(true, "x is declared to the top, even the assignement is after, to avoid confusion, we should alawys declared it first");

    if (false) {
        var x = 1;

    }

    expect(2);


});

test("undeclared vs undefined", function () {

    try {
        jdkjfdskjf;
    }
    catch(e) {
        ok(true, "jdkjfdskjf is undeclared");
    }


    x;
    ok(true, "x is decluared");

    var x =1;

    expect(2);
});

test("undefined vs null", function () {
    var x = {};
    //arrange
    ok(x.unexistMember === undefined, "because object is dictionary, undefined means a member does not exist");
    x.existedMember = null;
    //assert
    ok(x.existedMember !== undefined, "although, x.existedMember does is null, but it exists");

});

test("other function feature", function () {

    function x () {
        return x;
    }

    ok(x.name == "x", "a function defined in function declaration always has a name");

    ok(x() === x, "inside of a function defined in a function declaration, it can refer the function by name");


    var y = function () {
        return y;
    };


    ok(y.name === "", "a anounymous function expression has no name");
    ok(y() === y, "inside of a anounymous function defined in a function expression, it can refer the function by external variable");

    var z = y;
    y = null;
    ok(z() !== z && z() === null, "however after extenal changed, the function is affected by this change");



    var v = function foo() {
        return foo;
    };
    ok(v.name === "foo", "a function defined with function expression can also have a name");

    ok(v() === v, "inside of the function, it can refer the the function by the function name");

    ok(typeof foo === "undefined", "however the function name can not be accessed externally");

    var w = v;
    v = null;

    ok(w() === w, "the reference in side of the function will not be affected by extenal variable change");




});

