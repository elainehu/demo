module("Equality Test");
test("equality test", function() {

    ok({name:"Joeseph"} !== {name:"Joeseph"}, "object are not equal to other objects with the same values");
    ok("apple"==="apple" && 1 === 1 , "primitive type are equal if their values match");
    ok(1 == "1", "when two values of different types are compared using '==', they are coerced(converted) into the same type before that");
    ok(1!=="1", "when two values of different types are compared using '!==', it will become false");
    ok(""==0, "empty string==0 is true when you using '=='");
    ok(""!==0,"empaty string===0 is flase when you using '==='");
    ok(!null,"null evaluates to false");//null==false, so !null==true

});

test("falsy value test", function() {
    //there are 6 falsy value
    ok(!false, "false is a falsy value");
    ok(!null, "null is a falsy value");
    ok(!"", "emtpy string is a falsy value");
    ok(!0, "0 is a falsy value");
    ok(!false, "false is a falsy value");
    ok(!NaN, "NaN  is a falsy value");

});

test("truthy value test", function () {
    ok(true, "true is truthy value");
    ok({}, "{} is truthy value");
    ok("false", "'false' is truthy value");
    ok(function () {}, "function is truthy value");
    //everything else is truthy value
});

test("Two String Test", function() {
    var s1="a";
    var s2="a";
    ok(s1===s2,"Two varible have same string equal with each other");
});

test("Two Number Test", function() {
    var n1=2;
    var n2=2;
    ok(n1===n2,"Two variable have same number equal with each other");
});

test("Two Empty Object Test", function() {
    var object1={};
    var object2={};
    ok(object1!==object2,"Two empty objects even have the same contents, they are not equal with each others ");
    deepEqual(object1,object2,"By using deepEqaul to compare the contents of two object whether they are same or not, so it compare content of objects");
});

