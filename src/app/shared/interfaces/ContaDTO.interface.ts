import { Lancamento } from './lancamento/Lancamento.interface';

export interface ContaDTO{
  id:number;
  saldo:number;
  lancamentos:Array<Lancamento>;
}
