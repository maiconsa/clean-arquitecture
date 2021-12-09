import { ITransactionRepository } from "../entity/repository/ITransactionRepository";


interface TransactionObject{
    id : string;
    accountId : string;
    amount : number;
    status: string;
    errorMessage ?: string;
}

export class InMemoryTransactionRepository implements ITransactionRepository {

    private list : TransactionObject[]


    constructor(){
        this.list = []
    }

    insert(id: string, accountId: string, amount: number, status: string, errorMessage?: string)  {
        this.list.push({ id,accountId ,amount,status,errorMessage})
    }

}