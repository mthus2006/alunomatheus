function inserirNome(){
    let nomeUsuario = prompt ("qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}
