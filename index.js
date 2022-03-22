import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Eduardo", 20000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Joao", 10000, 32165498700);
gerente.cadastrarSenha("321654987");

const cliente = new Cliente("Edu", 12345678900, "142536");

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");
const estaLogadoGe = SistemaAutenticacao.login(gerente, "321654987");
const estaLogadoCliente = SistemaAutenticacao.login(cliente, "142536");

console.log(estaLogado, estaLogadoGe, estaLogadoCliente);