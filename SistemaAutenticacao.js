/*
Ser autenticável significar ter o método autenticar

Polimorfismo: estudar direito!!!!
*/

export class SistemaAutenticacao {

  //Esse é um método estático
  static login(autenticavel, senha) {

    if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha)
      
    }
    return false;
  }
  
  //Verifica se existe o método autenticar em um objeto
  static ehAutenticavel(autenticavel) {

    /*("autenticar" in autenticavel) está verificando se está chaveado na memória
    && se (autenticavel.autenticar) é instancia de uma função
    Todo método é instancia de uma função
    Isso se chama Duck Type
    */
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
  }
}





























