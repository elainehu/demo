module("Object Test");

test("Empty Object", function () {
    var empty = {};
    deepEqual(empty, {}, "This is empty object.");
});

test("Two Empty Object Test", function() {
    var object1={};
    var object2={};
    ok(object1!==object2,"Two empty objects even have the same contents, they are not equal with each others ");
    deepEqual(object1,object2,"By using deepEqaul to compare the contens of two object whether they are same or not, so it is different from ===, which compare the object");
});

test("object with a variable", function () {
    var tim = {name:"Elaine"};
    strictEqual(tim.name, "Elaine", "object tim has a variable 'name'wihch assigned a value of 'Elaine', tim.name=='Elaine'");
});

var person = {name:"Alyssa", age:3};
test("object literal", function () {
    strictEqual(person.name, "Alyssa", "object person has a variable 'name' which assigned a value of 'Alyssa',person.name==Alyssa");
    strictEqual(person.age, 3, "object person has a variable 'age' which assigned a value of 3,person.age==3");
});

test("toString() function", function () {
    deepEqual([1, 2, 3].toString(), "1,2,3", "the [1,2,3].toString() convert this array to string '1, 2, 3'");

    strictEqual(/\d/.toString(), "/\\d/", "regular expression /\\d/.toString() convert to string'/\\d/'");

    strictEqual(false.toString(), "false", "Boolean false.toString() convert to string 'false'");



    function write(message) {
        document.writeln(message);
    }
    ok(write.toString(),"The content of the whole function");

    person.toString = function () {
        return "Name: " + this.name + ", Age: " + this.age;
    };//redifine the defual toString() function to that object
    equal(person.toString(), "Name: Alyssa, Age: 3", "redefine the defult toString() of person object Name: Alyssa, Age: 3");

});

test("nested object",function(){

    var customer={
        address: {
            number:152,
            street: "Old Sheppard Ave."
        },
        age:30,
        name:"Elaine Hu"
    };
    customer.toString = function(){
        return "Address: "+this.address.number+" "+this.address.street+"<br/>"+"Name: "+this.name+"<br/>"+"Age:"+this.age;
    };
    equal(customer.address.number,152,"The nested variable 'number' of address, customer.address.number=152");
    equal(customer.address.street,"Old Sheppard Ave.","The nested variable 'street' of address, customer.address.street='Old Sheppard Ave.'");
    ok(customer.toString(),"the result of customer.toString() Address: 152 Old Shepprd Ave. Name: Elaine Hu Age:30.");
});

