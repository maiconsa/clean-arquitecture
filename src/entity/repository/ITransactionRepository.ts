import { TransactionStatusType } from "../TransactionStatusType";

export interface ITransactionRepository{
    insert(id: string, accountId : string, amount: number, status: TransactionStatusType , errorMessage ?: string) : any
}