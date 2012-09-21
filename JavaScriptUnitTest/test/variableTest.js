module("Variale Scope");

test("simpe variable type", function () {
    var streetNumber = 152;
    ok(typeof streetNumber === "number", "the typeof varaible streetNumber is Number.");
    var streetName = "Old Sheppard Ave.";
    ok(typeof streetName === "string", "the typeof variable streetNumber is String.");
    ok(typeof nonExistVariable === "undefined", "when a variable is not defined, it is undefined");
});


test("global variable test", function () {


    ok(!window.a, "global variable a is not defined yet");

    // Arrange: Set up data for the test.
    function add(first, second) {
        //var a
        a = first;
        return a + second;
    }

    // Act: Perform the action of the test.
    add(22, 8);

    // Assert: Verify the result of the test.
    ok(window.a === 22, "If a varible is used before declaured with 'var', it will be treated as global variable, which is danggerous. window.a===22");
});


test("local variable test", function () {
    function add(first, second) {
        var b = first;
        return b + second;
    }
    add(22, 8);
    ok(!window.b, "The golabl vraible b is not defined.");
    ok(window.b!== 22, "The local vriable b 22 can not be accessed as global variable, so the window.b!==22");
});





