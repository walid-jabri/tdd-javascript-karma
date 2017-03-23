/**
 * Created by wjabri on 23/03/2017.
 */
describe('fizzbuzz', function() {

        it('should return fizzBuzz for multiples of 3', function() {
            var result = fizzBuzz.process(3);
            expect(result).toEqual("Fizz");
        });

        it('should return fizzBuzz for multiples of 5', function() {
            var result = fizzBuzz.process(5);
            expect(result).toEqual("Buzz");
        });

        it('should return fizzBuzz for multiples of 3 and 5', function() {
            var result = fizzBuzz.process(15);
            expect(result).toEqual("FizzBuzz");
        });

        it('should return fizzBuzz for not multiples of 5 and 3', function() {
            var result = fizzBuzz.process(1);
            expect(result).toEqual("1");
        });


    describe('.isMultipleOf3()', function() {
        it('should exist', function() {
            expect(fizzBuzz.isMultipleOf3).toBeDefined();
        });

        it('should return string if it exists', function() {
            expect(fizzBuzz.isMultipleOf3('3')).toBe(true)
        });


    });
    describe('.isMultipleOf5()', function() {
        it('should exist', function() {
            expect(fizzBuzz.isMultipleOf5).toBeDefined();
        });

        it('should return string if it exists', function() {
            expect(fizzBuzz.isMultipleOf5('5')).toBe(true)
        });


    });
});
