// write some simple tests

const bankAccount1 = require("./index.js");
const bankAccount2 = require("./index.js");


describe("Bank Account 1", () => {
    test("2 plus 2 is 4", () => {
        expect(2 + 2).toBe(4);
    });
    
    test("minus 1 is 3", () => {
        expect(4 - 1).toBe(3);
        
    });
    
    test("bankaccount has random amount of money", () => {
        bankAccount1.transferRNGMoney(bankAccount2, 1234);
        expect(bankAccount1.balance).not.toBe(0);
    });
});