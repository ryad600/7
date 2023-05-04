// can you make me a simple express server?
import express, { Express, Request, Response } from 'express'


const app = express();

app.get('/', (req: Request, res: Response) => {
    
});

export class bankAccount {
private id : number;
private balance : number;
private pin : number;

    constructor( id: number, pin : number) {
        this.id = (id);
        this.balance = Math.floor(Math.random() * 1000000);
        this.pin = (pin);
    }

    transferRNGMoney(toAccount: bankAccount, pin: number) {
        if (this.pin !== pin) return console.log('Wrong pin');
        if (this.balance <= 0) return console.log('Not enough money');

        const amount = Math.floor(Math.random() * 100);

        this.balance -= amount;
        toAccount.balance += amount;
        
    }
}

export const bankAccount1 = new bankAccount(1, 1234);
export const bankAccount2 = new bankAccount(2, 1234);

bankAccount1.transferRNGMoney(bankAccount2, 1234);