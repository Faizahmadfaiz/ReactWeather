/*var returnMe = (name) => `${name}!`;

console.log(returnMe('Faiz'));*/

/*var names = ['Andrew', 'Julie', 'Jen'];



var person = {
    name: 'Andrew',
    greet: function() {
        names.forEach(function(name) {
            console.log(this.name + ' says hi to ' + name);
        }.bind(this));
    }
}

person.greet();*/

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addStatement(2, 5));
console.log(addExpression(20, 22));