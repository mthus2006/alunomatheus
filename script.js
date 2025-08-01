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