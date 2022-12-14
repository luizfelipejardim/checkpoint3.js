
const { Aluno } = require("./alunos");
const { Curso } = require("./curso")



///////////matéria
const matematica = new Curso('Matemática', 6, 3);



//////////lista de alunos
const felipe = new Aluno('Felipe', 2, [10, 7, 4, 8]);
const marcos = new Aluno('Marcos', 7, [9, 5, 5, 7]);
const rafael = new Aluno('Rafael', 5, [3, 5, 8, 4]);
const lucas = new Aluno('Lucas', 1, [9, 10, 10, 7]);


///////////calculo faltas + 1
felipe.metodoFaltas();
marcos.metodoFaltas();
rafael.metodoFaltas();
lucas.metodoFaltas();



///////////adiciona aluno a materia
matematica.adicionarAluno(felipe);
matematica.adicionarAluno(marcos);
matematica.adicionarAluno(rafael);
matematica.adicionarAluno(lucas);



///////////comandos

console.log(felipe.calcularMedia()); // mostra a media do aluno

console.log(felipe.faltas); // mostra as daltas + 1

console.log(matematica) // mostra o curso + lista de alunos

console.log(matematica.alunoAprovado(felipe)); // mostra se o aluno foi aprovado

 console.log(matematica.notaDosAlunos()); // mostra a aprovação de todos os alunos