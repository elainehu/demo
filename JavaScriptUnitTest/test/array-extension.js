module("array extension");


test("add member removeAt to array", function () {

    var items = [1];
    items.removeAt(0);
    strictEqual(items.length, 0, "array now has a new member removeAt, which javascript does not provide natively.")

    items = [1,2,3];
    items.removeAt(1);
    strictEqual(items.toString(), "1,3","reniveAt works");

});

test("add member clear to array", function () {
    var items=[1,2,3,4,5];
    items.clear();
    strictEqual(items.length,0,"array now has a new member clear, which javascript does not provide natviely.");
});

test("array prototype", function () {
    var p = Array.prototype;
    ok(p, "Array has prototype");
    ok(p.push, "Array prototype has push member");
    //var item = new Array(); //
    var item = [];

    ok(item.push, "an array also has push member");
    ok(item.push === p.push, "an array's push comes from prototype's push");

    p.x = function () {
        ok(this === item, "when invoke using item.x, the 'this' inside the function" +
            "refer to the item itself");
        return 1;
    };
    ok(item.x === p.x, "after we add a new member to Array's prototype, the instance of array" +
        "also can access the new member");

    ok(item.x() === 1, "instance of Array can call the new memeber");

    delete p.x;

    ok(item.x === undefined, "after member of prototype is deleted, instance can not access the " +
        "member any more");

});

test("constructor test", function () {

    var Person = function (firstName) {
        if (firstName) {
            this.firstName = firstName;
        }
    };

    //x.fn()
    //fn();
    //fn.call(x)
    //fn.apply(x, xx);
    //new fn();

    Person.prototype.firstName = "default first name";

    var p = new Person();
    ok(p.firstName === Person.prototype.firstName, "instance can inherite constructor's prototype's member" );

    var p2 = new Person("fred");
    ok(p2.firstName === "fred", "");

    var newvalue = "xxx";
    Person.prototype.firstName = newvalue;

    ok(p.firstName === newvalue, "after prototype is changed, its instane also changed");

    ok(p2.firstName !== newvalue,"since instance p2 overide the consturtor, so it wil not change after the prototype changed");

});
