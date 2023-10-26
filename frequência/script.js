// Declaração das variáveis
let alunos = [];
let nome = document.getElementById("nome");
let adicionar = document.getElementById("adicionar");

// Função para adicionar um aluno
adicionar.addEventListener("click", function() {
  // Verifica se o nome do aluno está preenchido
  if (nome.value === "") {
    alert("O nome do aluno deve ser preenchido.");
    return;
  }

  // Adiciona o aluno à lista
  alunos.push({
    nome: nome.value
  });

  // Atualiza a lista de alunos
  updateListaAlunos();
});

// Função para atualizar a lista de alunos
function updateListaAlunos() {
  // Limpa a lista
  const listaAlunos = document.querySelector(".alunos");
  listaAlunos.innerHTML = "";

  // Adiciona os alunos à lista
  alunos.forEach(aluno => {
    const li = document.createElement("li");
    li.textContent = aluno.nome;
    listaAlunos.appendChild(li);
  });
}

// Inicializa a lista de alunos
updateListaAlunos();


// Declaração das variáveis
let alunos = [];
let nome = document.getElementById("nome");
let adicionar = document.getElementById("adicionar");

// Função para adicionar um aluno
adicionar.addEventListener("click", function() {
  // Verifica se o nome do aluno está preenchido
  if (nome.value === "") {
    alert("O nome do aluno deve ser preenchido.");
    return;
  }

  // Adiciona o aluno à lista
  alunos.push({
    nome: nome.value
  });

  // Atualiza a lista de alunos
  updateListaAlunos();
});

// Função para remover um aluno
function remover(aluno) {
  // Remove o aluno da lista
  alunos.splice(alunos.indexOf(aluno), 1);

  // Atualiza a lista de alunos
  updateListaAlunos();
}

// Função para atualizar a lista de alunos
function updateListaAlunos() {
  // Limpa a lista
  const listaAlunos = document.querySelector(".alunos");
  listaAlunos.innerHTML = "";

  // Adiciona os alunos à lista
  alunos.forEach(aluno => {
    const li = document.createElement("li");
    li.textContent = aluno.nome;
    li.addEventListener("click", function() {
      remover(aluno);
    });
    listaAlunos.appendChild(li);
  });
}

// Inicializa a lista de alunos
updateListaAlunos();
