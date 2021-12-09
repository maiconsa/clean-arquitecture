import { InvalidTransactionException } from "./exceptions/InvalidTransactionException"

export class Transaction {

    constructor(public id: string , public accountId: string , public amount : number, public errorMessage ? :string){ }

    isValid(){

        if(this.amount > 100){
            throw new InvalidTransactionException('You dont have limit for this transaction')
        }

        if(this.amount < 1 ){
            throw new InvalidTransactionException('The amount must be greater than 1')
        }
    }



}