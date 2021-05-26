const login = prompt('Informe seu login');
console.log(login);

const senha = prompt('Informe sua senha');
console.log(parseInt(senha));

const aluno = "aluno";
const senhaAluno = 123;
const professor = "professor";
const senhaProfessor = 456;

if (login === aluno && parseInt(senha) === parseInt(senhaAluno) || 
    login === professor && parseInt(senha) === parseInt(senhaProfessor)) {
    alert(`Bem vindo ${login}`);
}else{
    alert("Acesso Negado!");
}
