export class Conta {

  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta) {
      //Interrompendo um instanciamento para manter a classe abstrata
      throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata.");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get agencia() {
    return this._agencia;
  }

  get cliente() {
    return this._cliente;
  }


  get saldo() {
    return this._saldo;
  }
  
  //Método abstrato: é um método que não foi feito para ser chamado diretamente, ele deve sempre ser sobrescrito
  sacar() {
    throw new Error("O método sacar da class Conta é abstrato, ele deve ser sobrescrito.")    
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;    
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    if(valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }


}




























