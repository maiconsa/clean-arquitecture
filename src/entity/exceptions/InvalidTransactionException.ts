import { Transaction } from "../Transaction";

export class InvalidTransactionException extends Error{
    constructor(erroMessage  : string){
       super(erroMessage);
    }

}