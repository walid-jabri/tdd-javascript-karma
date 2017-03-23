/**
 * Created by wjabri on 23/03/2017.
 */
var fizzBuzz = { };
fizzBuzz.process= function(input) {

    if (fizzBuzz.isMultipleOf3(input) && fizzBuzz.isMultipleOf5(input)) {
        return "FizzBuzz";
    }
    if (fizzBuzz.isMultipleOf3(input)) {
        return "Fizz";
    }
    if (fizzBuzz.isMultipleOf5(input)) {
        return "Buzz";
    }

    return input.toString();

};

fizzBuzz.isMultipleOf3 =  function( input) {
    return input % 3 == 0;
}

fizzBuzz.isMultipleOf5 = function( input) {
    return input % 5 == 0;
}

