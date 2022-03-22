import { Conta } from "./Conta.js";

/*Essa classe está sendo estendidado da classe conta
  ContaCorrente está sendo Herdada de Conta, conceito de herança
  Ela usa as características da classe herdada como se fossem dela*/
export class ContaCorrente extends Conta {
  //Essa é uma propriedade estática
  static numeroDeContas = 0;


  constructor(cliente, agencia) {
    //O super faz referência ao método da classe extendida
    super(0, cliente, agencia);
    //Acessando uma propriedade estática
    ContaCorrente.numeroDeContas += 1;
  }

  //Esse método está especializando/sobrescrevendo o comportamento do método herdado da class Conta
  sacar(valor) {

    let taxa = 1.1
    
    //Como o método privado _sacar não está sendo sobrescrito, podemos usar o 'this' como equivalente ao 'super'
    //Retorna o valor do método herdado '_sacar' para o método sobrescrito 'sacar'
    return this._sacar(valor, taxa);
  }
}




































