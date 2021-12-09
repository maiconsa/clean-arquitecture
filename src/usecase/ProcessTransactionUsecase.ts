import { InvalidTransactionException } from "../entity/exceptions/InvalidTransactionException";
import { ITransactionRepository } from "../entity/repository/ITransactionRepository";
import { Transaction } from "../entity/Transaction";
import { TransactionBuilder } from "../entity/TransactionBuilder";
import { TransactionInput } from "./dto/TransactionInput";
import { TransactionOutput } from "./dto/TransactionOutput";

export class ProcessTransactionUsecase{

    constructor(private transactionRepository : ITransactionRepository){}


    public  execute(transactionInput : TransactionInput):TransactionOutput {
        try{
            const transaction = new TransactionBuilder(transactionInput.accountId)
                    .setId(transactionInput.id)
                    .setAmount(transactionInput.amount)
                    .build();


           return this.aprove(transaction);

        }catch(error : any) {
            if(error instanceof InvalidTransactionException){
                return  this.reprove(transactionInput, error.message);
            }
            throw error;
        }
    }
    private reprove(transactionInput : TransactionInput, errorMessage: string) : TransactionOutput {
        this.transactionRepository.insert(transactionInput.id,transactionInput.accountId,transactionInput.amount,'REPROVED',errorMessage)
        return new TransactionOutput(transactionInput.id,'REPROVED',errorMessage)
    }
    private aprove(transaction: Transaction) : TransactionOutput {
        this.transactionRepository.insert(transaction.id,transaction.accountId,transaction.amount,'APROVED')

        return new TransactionOutput(transaction.id,'APROVED')
    }


}