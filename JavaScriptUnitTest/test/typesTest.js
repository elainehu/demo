module("String Test");

test("literal notations", function () {
    var string1 = "The quick brown fox's jump";
    var string2 = '"The quick brown fox"';
    ok(string1 === "The quick brown fox's jump", "to show singal quotation mark in the sentence, using double quotation mark wrap the sentence: The quick brown fox's jump ");
    ok(string2 === '"The quick brown fox"', "to show double quotation mark in the sentece, using the singal qutation mark to wrap the sentence: \"The quick brown fox\" ");
});

test("string escape sequences", function () {
    ok("The quick brown fox\'s jump", "escape single quotation mark");
    ok("\"There was a ship,\"quoth he.", "escape double quotation mark");
    ok("copyright symbol \u00A9", "escape conpyright symbol");
});

test("string methods charAt(), indexOf(),search()", function () {
    var character = "abcd".charAt(2);
    var index = "abcd".indexOf("c");
    var index1 = "abcd".search(/c/);

    ok(character === "c", "charAt() method:third character in 'abcd' is c");
    ok(index === 2, "indexOf() method:index of 'c' in 'abcd' is 2");
    ok(index1 === 2, "search(/c/) method: simliar to indexOf but inside of method is regular expression, indexOf() method:index of 'c' in 'abcd' is (using 'search'): 2");

});

test("string method replace()", function () {
    var lyric = "3 oh 3 it's a magic number";
    var replace1 = lyric.replace("3", "4");//find 3 then replace to 4
    var replace2 = lyric.replace(/3/, "4");//instead of string search in regular expression
    var replace3 = lyric.replace(/3/g, "4");//regular expression format with flag g, g for golbal

    ok(replace1 === "4 oh 3 it's a magic number", "replace(\"3\",\"4\") mothod: it will replace the first match element, ignore the rest of them, so the result is '4 oh 3 it's a magic number'");
    ok(lyric === "3 oh 3 it's a magic number", "after replace mehod, the orignal string is remain unchanged:'3 oh 3 it's a magic number'");
    ok(replace2 === "4 oh 3 it's a magic number", "replace(/3/,\"4\") mothod: it will replace the first match element, ignore the rest of them, so the result is still'4 oh 3 it's a magic number'");
    ok(replace3 === "4 oh 4 it's a magic number", "replace(/3/g,\"4\")mothod: it will replace all match element, so the result will be '4 oh 4 it's a magic number'");
});

test("string method slice()", function () {
    var letters = "abcd".slice(1, 3);//take substring, 1 is strat index character you want to take, 3 is one greater  of the last character you want to take
    ok(letters === "bc", "'abcd'.splice(1,3) is 'bc'");
});

test("string method split()", function () {
    var letters = "abc".split("");
    for (var i = 0; i < letters.length; i++) {
        letters[i];
    }
    ok(letters[0] === "a", "split function used to split string to the array:letters=\"abc\".split(\"\"), the letters[0] is 'a'");
    ok(letters[1] === "b", "letters=\"abc\".split(\"\"), the letters[1] is 'b'");
    ok(letters[2] === "c", "letters=\"abc\".split(\"\"), the letters[2] is 'c'");

    var words = "The western wave was all a-flame".split(" ");//split by empty space
    for (var i = 0; i < words.length; i++) {
        words[i];
    }
    ok(words[0] === "The", "words=\"The western wave was all a-flame\".split(\"\"), the words[0] is 'The'");
    ok(words[5] === "a-flame", "words=\"The western wave was all a-flame\".split(\"\"), the words[5] is 'a-flame'");
});

test("string method toUpperCase(), toLowCase()", function () {
    var name = "Elaine";
    var uppercase = name.toUpperCase();
    var lowcase = name.toLowerCase();
    ok(uppercase === "ELAINE", "The toUpperCase()method will change all characters to uppercase so the result will be 'ELAINE'");
    ok(lowcase === "elaine", "The toLowCase()method will change all characters to lowcase so the result will be 'elaine'");
});

module("Number Test");
test("typeof number", function () {
    ok(typeof 1 === "number", "the typeof 1 is number");
    ok(typeof 1.25 === "number", "the typeof 1.25 still is number");
});

test("operator of number", function () {
    ok(1 + 1 === 2, "1+1=2");
    ok(10 - 1 === 9, "10-1=9");
    ok(3 * 4 === 12, "3*4=12");
    ok(21 / 7 === 3, "21/7=3");
    ok(22 % 10 === 2, "22%10=2");
});

test("inexact decimal fractions", function () {
    ok(0.1 + 0.2 != 0.3, "0.1+0.2=0.3000000000000004");
    ok((0.1 + 0.2).toFixed(1), "(0.1+0.2).toFixed(1)=0.3");
    ok((0.1 * 10 + 0.2 * 10) / 10, "(0.1*10+1.2*10)/10=0.3");//conver to integers
});

module("Array Test");
test("empty array", function () {
    var empty = [];
    equal(empty.length, 0, "The length of an empty array [] is 0");
});

var letters = ['a', 'b', 'c', 'd'];
test("enumeration array", function () {
    for (var i = 0; i < letters.length; i++) {
        letters[i];
    }
    ok(letters.toString() === "a,b,c,d", "The array of letters is 'a,b,c,d'");
    ok(letters[0] === "a", "The value of first index of array letters is 'a'");
    ok(letters[3] === "d", "The value of last index of array letters is 'd'");
});

test("stack array", function () {
    deepEqual(letters, ['a', 'b', 'c', 'd'], "The original array letters is ['a','b','c','d']");
    var push = letters.push('e');
    ok(letters[4] === "e", "Push 'e' to array letters");
    ok(letters.toString() === "a,b,c,d,e", "After push 'e' to array letters, the letters=['a','b','c','d','e']");
    var pop = letters.pop();
    ok(pop === "e", "Pop() the array letters, it removes the last character 'e' of the array letters");
    ok(letters.toString() === "a,b,c,d", "After pop(), the array letters will go back to its origianl state ['a','b','c','d']");
});

test("array reverse", function () {
    var reverseletters = letters.reverse().toString();
    strictEqual(reverseletters, "d,c,b,a", "The letters.reverse() will reverse character of that array ['d','c','b','a']");
});

test("array slice", function () {
    var collection = ['a', 'b', 'c', 'd'];
    var slicecoll = collection.slice(1, 3).toString();//slice(start,end)-copies part of an array
    ok(slicecoll === "b,c", "The slice(start,end)-copies part of an array, ['a','b','c','d'].slice(1,3) = 'b,c'");
    ok(collection.toString() === "a,b,c,d", "After use slice the array ['a','b','c','d'] remain the same ");
});

test("array splice", function () {
    var collection = ['a', 'b', 'c', 'd'];
    var splicecoll = collection.splice(1, 2).toString();//splice(start,count)-takes part of an array
    ok(splicecoll === "b,c", "The splice(start,count)-take part of an array,['a','b','c','d'].splice(1,2)='b,c'");
    ok(collection.toString() === "a,d", "After use splice the array ['a','b','c','d'] changed to ['a','d']");
});


test("array sort", function () {
    var letters = ['c', 'o', 'j', 'a'];
    var sortletter = letters.sort().toString();
    var number = [99, 2, 78, 0];
    var sortnumber = number.sort().toString();
    ok(sortletter === "a,c,j,o", "['c','o','j','a'].sort()='a,c,j,o'");
    ok(sortnumber === "0,2,78,99", "[99,2,78,0].sort()='0,2,78.99'");
});

module("Function for Array ");
test("remove one items from array ", function () {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function removeAt(items, index) {
        items.splice(index, 1);
    }

    removeAt(input, 0);
    deepEqual(input, [2, 3, 4, 5, 6, 7, 8, 9, 10], "function removeAt works it remove first item of array, so result is [2,3,4,5,6,7,8,9,10]");
});
test("remove even numbers from array", function () {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function removeAt(items, index) {
        items.splice(index, 1);
    }

    function removeEvenNumber(items) {
        for (var i = items.length - 1; i >= 0; i--) {
            if (items[i] % 2 === 0) {
                removeAt(items, i);
            }
        }
    }

    removeEvenNumber(input);
    deepEqual(input, [1, 3, 5, 7, 9], "function removeEvenNumber() works,so result is [1,3,5,7,9]");
});

test("Empty all elemet in a array emptyArray()", function () {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function removeAt(items, index) {
        items.splice(index, 1);
    }

    function emptyArray(items) {
        for (var i = items.length - 1; i >= 0; i--) {
            removeAt(items, i);
        }
    }

    emptyArray(input);
    deepEqual(input.length, 0, "function emptyArray() works, so the length of array is 0 right now.");
});

test("Empty all elemet in a array removeAll()", function () {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function removeAll(items) {
        if (items.length === 0) {
            items;
        }
        else {
            items.splice(0, items.length);
        }
    }

    removeAll(input);
    deepEqual(input.length, 0, "function removeAll() works, so the length of array is 0 right now.");
});


/*
 module("Underscore Test");
 var number=[1,2,3];
 test("function style", function() {

 }); */
module("Regular Expression");
test("'search' method test for match character, return the index of first match character", function () {
    var result = "abcd".search(/c/);
    ok(result === 2, "Index of c in 'abcd' is 2.");
});
test("exec() method tests for a match in a string. Returns the first match, otherwise it returns null", function () {
    var input = "Text with some <strong>highlighted</strong> parts."
    var expression = /<strong>(.*)<\/strong>/;
    var results = expression.exec(input);
    ok(results[0] === "<strong>highlighted</strong>", "mathced substring: <strong>highlighted</strong>");
    ok(results[1] === "highlighted", "first capture group: 'highlighted'");

    var str = "Hello World";
    var patt = /Hello/g;
    var result = patt.exec(str);
    ok(result[0] === "Hello", "machted substring: Hello");
    ok(result[1] == null, "first capture group:there is no capture group ( )");
});

test("test() method tests for a match in a string. Returns true or false", function () {
    var containsANumber = /\d/.test("abc5de");//find any digital number is this string return ture if it has number, otherwise return false
    ok(containsANumber === true, "abc5de contains a number: ture");
});

test("replace() method-replacement can be a string or a function", function () {
    var updated = "Fred Brooks".replace(/(\w+) (\w+)/g, function (match, capture1, capture2) {
        return capture2.toUpperCase() + "," + capture1;
    })
    //replace(searchvalue, newvalue)
    //for this instance the searchvalue is regular expression, /(\w+) (\w+)/g which match with "Fred Brooks"
    //newvalue is a function, the result is return of this function
    ok(updated === "BROOKS,Fred", "The result of this replace method is BROOK,Fred");
});

module("Date Test");
test("Simple Date", function () {
    var birthday = new Date(2009, 10, 27).toString();
    ok(birthday === "Fri Nov 27 2009 00:00:00 GMT-0500 (Eastern Standard Time)", "to create a date by using new Date(year,month,day) the month is 0 begin,so month is from 0-11");
});


module("Eval and JSON Test");
var input = '{"books":[{"title":"Frankenstein","author":"Mary Shelley"}]}';
test("eval test", function () {
    eval("var data = " + input);
    ok(data.books[0].title === "Frankenstein", "parsed with eval: data.books[0].title==='Frankenstein'");
    ok(data.books[0].author === "Mary Shelley", "parsed with eval: data.books[0].author==='Mary Shelley'");
});

test("JSON test", function () {
    var withJoson = JSON.parse(input);
    ok(withJoson.books[0].title === "Frankenstein", "parsed with json: withJoson.books[0].title==='Frankenstein'");
    ok(withJoson.books[0].author === "Mary Shelley", "parsed with json: withJoson.books[0].author==='Mary Shelley'");

});

module("isNaN Test");
test("isNaN() used to determine whether input is number or not", function () {
    var inputisNaN = isNaN(NaN);
    var inputstring = isNaN("Hello World");
    var inputnumber = isNaN(5.8);
    var input = isNaN(2 / 'a');
    ok(inputisNaN === true, "isNaN(NaN): true");
    ok(inputstring === true, "isNaN(\"Hello World\"): true");
    ok(inputnumber === false, "isNaN(5.8): false");
    ok(input === true, "isNaN(2/'a'): true");
});

module("parseFloat Test");
test("parseFloat() used to convert string to a number", function () {
    var height = parseFloat("18.59");
    var PIApprox = parseFloat("0.0314E+2");
    ok(height === 18.59, "parseFloat(\"18.59\") convert string '18.59' to number 18.59");
    ok(PIApprox === 3.14, "parseFloat(\"0.0314E+2\"):3.14");
});

module("parseInt Test");
test("parseInt() used to convert string to a integer", function () {
    var age = parseInt("28");
    ok(age === 28, "parseInt(\"28\") convert string '28' to integer 28");
});

module("Math Test");
test("Math.abs() method returns the absolute value of a number", function () {
    var a = Math.abs(5.2);
    var b = Math.abs(-5.2);
    var c = Math.abs(2 + (-22));
    var d = Math.abs(null);
    ok(a === 5.2, "Math.abs(5.2): 5.2");
    ok(b === 5.2, "Math.abs(-5.2): 5.2");
    ok(c === 20, "Math.abs(2+(-22)): 20");
    ok(d === 0, "Math.abs(null): 0");
});

test("Math.floor() method rounds a number DOWNWARDS to the nearest integer", function () {
    var a = Math.floor(1.8);//get the downwards to the nearest integer,igore the rest decimal number
    var b = Math.floor(0.9);//the nearest downwards ingeger for 0.9 is 0
    var c = Math.floor(-1.1);//go the smallest side so it will  be -2;
    var d = Math.floor(-1.9);//-2
    var e = Math.floor(8);//8

    ok(a === 1, "Math.floor(1.8): 1");
    ok(b === 0, "Math.floor(0.9): 0");
    ok(c === -2, "Math.floor(-1.1): -2");
    ok(d === -2, "Math.floor(-1.9): -2");
    ok(e === 8, "Math.floor(8): 8");
});

test("Math.ceil() round a number upward to it's nearest integer", function () {
    var a = Math.ceil(1.8);//2
    var b = Math.ceil(1.01);//2
    var c = Math.ceil(-1.1);//-1
    var d = Math.ceil(-1.99);//-1
    var e = Math.ceil(8);//8

    ok(a === 2, "Math.ceil(1.8): 2");
    ok(b === 2, "Math.ceil(1.01): 2");
    ok(c === -1, "Math.ceil(-1.1): -1");
    ok(d === -1, "Math.ceil(-1.99): -1");
    ok(e === 8, "Math.ceil(8): 8");
});

test("Math.pow() method returns the value of x to the power of y(xy)", function () {
    var a = Math.pow(2, 3);
    ok(a === 8, "Math.pow(2,3): 8");
});

test("Math.rodom() method return a random number between 0 and 1", function () {
    var a = Math.random();
    var b = Math.floor((Math.random() * 11) + 0);
    var c = Math.floor((Math.random() * 100) + 1);
    ok(a, "Math.rodom() return a radom number between 0 and 1");
    ok(b, "Math.floor((Math.random()*11)+0) return a random number between 0 and 10");
    ok(c, "Math.floor((Math.random()*100)+1) return a radom number beween 1 and 100");
});

test("Math.round() method rounds a number to the nearest integer", function () {
    var a = Math.round(2.49);//4 igore, 5 take one more
    var b = Math.round(2.5);
    var c = Math.round(-2.1);
    ok(a === 2, "Math.round(2.49): 2");
    ok(b === 3, "Math.round(2.5): 3");
    ok(c === -2, "Math.round(-2.1): -2");
});


