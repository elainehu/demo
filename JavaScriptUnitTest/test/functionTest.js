module("Declaring Function Test");
test("standard function declaration", function () {
    //standard function declaration
    function square(x) {
        return x * x;
    }

    ok(square(3) === 9, "The result of standard function square is 9. ");
});

test("named and assigned function", function () {
    var squareFunc = function square(x) {
        return x * x;
    }
    //equal(squareFunc(3),9,"The result of named and assignmed function square is 9.");
    ok(squareFunc(3) === 9, "The result of named and assignmed function square is 9.");
});

test("anonymous and assigned function", function () {
    var square = function (x) {
        return x * x;
    }
    ok(square(3), "The result of anonymous and assigned function square is 9. ");
});

test("anonyous and immediately invoked function", function () {
    var numberToSquare = 3;
    strictEqual((function (x) {
        return x * x;
    })(numberToSquare), 9, "The result of anonyous and immediately invode function is 9. ");
    ok((function (x) {
        return x * x;
    })(5) === 25, "The result of anonyous and immediately invode function is 25.");
});

module("function invocation");

test("simple functions with two parameters and three parameters", function () {

    function add(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    var result1 = add(1, 2);
    var result2 = add(1, 2, 3);
    var result3 = add(1);
    //function with same name add in the same scop, the add with two parameter oveload the add with three parameters depends on the order place in the same scop,so
    //the  function add(num1,num2,num3) not be used anyway
    equal(result1, 3, "The result of taking two parameters are 3. ");
    equal(result2, 3, "Taking three parameter instead of two parameter, the last parameter of that function will ignored, so the result is still 3. ");
    ok(result3 !== NaN, "The reslut of just taking one parameter instead of taking two parameters is NaN (Not a number).");
});

test("primitive are passed by value", function () {
    var name = "Elaine";

    function reverse(letters) {
        letters = letters.split("").reverse().join("");
        return letters;
    }

    var reverseName = reverse(name);
    ok(reverseName === "enialE", "The name of 'Elaine' after using function reverse is 'enialE'.");
    ok(name === "Elaine", "The original value of name is still 'Elaine', primitive (String,Number,Boolean) are passed by value.");
});

test("object are passed by reference", function () {
    var person = {name:"Elaine"};

    function reversePesonName(p) {
        p.name = p.name.split("").reverse().join("");
        return p.name;
    }

    ok(reversePesonName(person) === "enialE", "The name of 'Elaine' after using function reverse is 'enialE'.");
    ok(person.name === "enialE", "The original value of name is also change to 'enialE'because objects are passed by reference.");
});

module("Argument Object");
test("Arguments is a object, not an aray", function () {
    function argumentsType() {
        var count = 0;
        count += arguments.length;
        return  count;
    }

    var result = argumentsType("a");
    ok(typeof arguments, "The type of the arguments is an object. ");
    ok(arguments.length === 0, "The length of arguments is 0 right now. ");
    ok(result === 1, "After taking one parameter of function argumentType ,the length of arguments become 1. ");
});
test("function can be called with any number of parameters by using 'arguments'", function () {
    function add() {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
    }

    var result1 = add();
    var result2 = add(2);
    var result3 = add(1, 2, 3);
    ok(result1 === 0, "The function add(), taking no parameter, the result is 0 as defult. The original of function add() is declare with no parameter but can be called with any number of parameters.");
    ok(result2 === 2, "The function add(2), taking one parameter, the result is 2. ");
    ok(result3 === 6, "The function add(1,2,3),taking three paramter, the result is 6. ");
});

test("function to show all user input with any number of parameters by using 'arguments'", function(){
    function showUserinput()
    {
        var content="User Input:";
        for(var i=0; i<arguments.length; i++)
        {
            content +=arguments[i].toString()+" ";
        }
        return content;
    }
    var result =showUserinput();
    ok(result==="User Input:","The function showUserinput(), taking no parameter, the reslut is 'User Input:' as defult vaule.");
    result = showUserinput("Elaine");
    ok(result==="User Input:Elaine ","The function showUserinput(\"Elaine\"), taking one string, the result is 'User Input: Elaine'.");
    result =showUserinput("Elaine",2);
    ok(result==="User Input:Elaine 2 ","The function showUserinput(\"Elaine\",2),taking one string and one integer as parameter, " +
        "the result is 'User Input:Elaine 2'.");
    result=showUserinput("Elaine",2,"Alyssa");
    ok(result==="User Input:Elaine 2 Alyssa ","The function showUserinput(\"Elaine\",2,\"Alyssa\")," +
        "taking three parameters the result is 'User Input:Elaine 2 Alyssa '");

});
module("function recursion");
test("function factorial", function () {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    var result = factorial(5);
    strictEqual(result, 120, "The revursion function factorial is used to call itself, the result of factorial(n) is 120.");
});

module("function closure");
test("closure test", function () {
    var a = "a";
    var outer = function () {
        var b = "b";
        var middle = function () {
            var c = "c";
            //the function 'inner' can access all variable in the outer scopes
            var inner = function () {
                return result = a + b + c;
            }
            inner();
        };
        middle();
    };
    outer();
    ok(result === "abc", "the function 'inner' can access all variable in the outer scopes, the reslut of this closure function is 'abc'. ");
});

