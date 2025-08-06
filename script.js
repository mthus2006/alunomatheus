function inserirNome(){
    let nomeUsuario = prompt ("qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 ={
    nome:'Matheus'
    idade: 18,
    anoLetivo: 'Ensino Médio',
    materiasFavoritas:['matematica', 'Programação','biologia']
}

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);

const objeto = document.querySelector('aluno');
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.materiasFavoritas[1];