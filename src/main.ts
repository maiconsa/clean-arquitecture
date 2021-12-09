import { InMemoryTransactionRepository } from "./adapter/InMemoryTransactionRepository";
import { TransactionInput } from "./usecase/dto/TransactionInput";
import { ProcessTransactionUsecase } from "./usecase/ProcessTransactionUsecase";


const transactionRepository = new InMemoryTransactionRepository();
const processTransaction = new ProcessTransactionUsecase(transactionRepository);

const input = new TransactionInput('001',2.00,'00011122233');
const output =  processTransaction.execute(input);

console.table(output)