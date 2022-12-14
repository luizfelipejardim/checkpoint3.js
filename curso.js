class Curso {
  constructor(nome, notaDeAprovacao, faltasMaximas) {
    this.nome = nome;
    this.notaDeAprovacao = notaDeAprovacao,
      this.faltasMaximas = faltasMaximas,
      this.listaEstudantes = []
  };


//////////metodo adicionar aluno
  adicionarAluno(alunos) {
    this.listaEstudantes.push(alunos)
  };


//////////metodo para ver se o aluno esta aprovado
 alunoAprovado(aluno) {
    if (aluno.faltas < this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao) {
      return true;
    } else if (aluno.faltas === this.faltasMaximas && aluno.calcularMedia() > (this.notaDeAprovacao * 1.10)) {
      return true;
    } else {
      return false;
    }
  };


////////// lista de alunos aprovados ou não
  notaDosAlunos() {
    return this.listaEstudantes.map((aluno) => this.alunoAprovado(aluno));
  };
};


module.exports = {Curso};