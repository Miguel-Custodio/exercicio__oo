class Pessoa {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    apresentar() {
    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }

    profissao() {
    console.log("Sou professor");
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
    }

    profissao() {
    console.log("Sou professor");
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
    }

    profissao() {
    console.log("Sou aluno");
    }
}

const professor1 = new Professor("João", 35, 2500);
const aluno1 = new Aluno("Pedro", 20, 1200);
const professor2 = new Professor("Maria", 55, 2500);


professor1.apresentar();  
professor1.profissao(); 

aluno1.apresentar();     
aluno1.profissao();   

professor2.apresentar(); 
professor2.profissao(); 
