/*
Design your own class / function / etc. IE., Class called NumberSystem()
It should be able to take in a integer or string IE., 134, “F8A5”, “1011", etc.
It should convert numbers from binary to decimal, and hex to decimal.
Look up how to convert decimal into hex and decimal to binary, add that to your class / program.

Decimal = 10
Hexadecimal = 16
Binary = 2
*/

(function numberSwap() {
    //Create a function for the conversion
    let convert = function (num) {
        return {
            //The function starts  with the base system
            from: function (convertFrom) {
                return {
                    // return the system the code is converting to
                    to: function (convertTo) {
                        //Convert the num value to a string
                        return parseInt(num, convertFrom).toString(convertTo);
                    }
                };
            }
        };
    };

    //binary to decimal
    convert.binaryToDecimal = function (num) {
        return convert(num).from(2).to(10);
    };

    // Decimal to binary
    convert.decimalToBinary = function (num) {
        return convert(num).from(10).to(2);
    };

    // Hex to decimal
    convert.hexadecimalToDecimal = function (num) {
        return convert(num).from(16).to(10);
    };

    // Decimal to hex
    convert.decimalToHexadecimal = function (num) {
        return convert(num).from(10).to(16);
    };

    this.convert = convert;

})(this);

console.log(convert.binaryToDecimal('1101000011111001'));
console.log(convert.decimalToBinary('12081976'));
console.log(convert.hexadecimalToDecimal('002C5F'));
console.log(convert.decimalToHexadecimal('11101775'));