"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankAccount2 = exports.bankAccount1 = exports.bankAccount = void 0;
// can you make me a simple express server?
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (req, res) {
});
var bankAccount = /** @class */ (function () {
    function bankAccount(id, pin) {
        this.id = (id);
        this.balance = Math.floor(Math.random() * 1000000);
        this.pin = (pin);
    }
    bankAccount.prototype.transferRNGMoney = function (toAccount, pin) {
        if (this.pin !== pin)
            return console.log('Wrong pin');
        if (this.balance <= 0)
            return console.log('Not enough money');
        var amount = Math.floor(Math.random() * 100);
        this.balance -= amount;
        toAccount.balance += amount;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
exports.bankAccount1 = new bankAccount(1, 1234);
exports.bankAccount2 = new bankAccount(2, 1234);
exports.bankAccount1.transferRNGMoney(exports.bankAccount2, 1234);
