module("Control Flow Test");
function introduce(beatle) {
    switch (beatle) {
        case("Ringo"):
            return("I am Ringo and I play the drums");
            break;
        case("Paul"):
            return("I am Paul and I paly the piano");
            break;
        case("George"):
            return("I am George and I play a guitar");
            break;
        case("John"):
            return("I am John and I play guitar, somtimes I play the fool...");
            break;
        default:
            return(beatle + " is not a beatle!");
    }
}
test("switch test", function() {

    var result = introduce("Ringo");
    var result1= introduce("Elaine");
    ok(result==="I am Ringo and I play the drums","'Ringo' can be found in the case of switch statment, so result is 'I am Ringo and I play the drums'");
    ok(result1==="Elaine is not a beatle!","'Elaine' can not be found in the case of switch statmet, so the default statement will be executed 'Elaine is not a beatle!'");
});

test("For loop test", function() {

    function looptest(number) {
        for(var i=1;i<=number;i++) {
            return i;
        }
    }
    var result = looptest(10);
    ok(result,"The loop displays the number from 1 to 10.");
});

test("For in loop test", function() {
    function ForinLoop()
    {
        var tom= {
            name:"Thomas",
            age:22
        };
        for(var propertyKey in tom) {
            return(propertyKey);
            return tom[propertyKey];
        }
    };
    ok(ForinLoop(),"The For in loop will display 'name:Thomas','age:22'");
});