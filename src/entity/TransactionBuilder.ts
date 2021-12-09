import { Transaction } from "./Transaction";

export class TransactionBuilder{

    private id ?: string;
    private accountId : string;
    private amount ?: number;


    constructor( accountId : string ){
        if(!accountId){
            throw new Error('Account Id must not be null')
        }
        this.accountId = accountId;
    }

    setId(id : string) : TransactionBuilder{
        this.id = id;
        return this;
    }

    setAmount(amount : number): TransactionBuilder{
        this,amount = amount;
        return this;
    }

    build(){
        return new Transaction(this.id || '',this.accountId,this.amount || -1);
    }
}