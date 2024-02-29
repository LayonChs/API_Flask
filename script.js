const api = "http://localhost:5000/turma_aluno";

const titulo = document.getElementById("titulo");
const btnStart = document.getElementById("btnStart");
const resultado = document.getElementById("resultado");
const instrucao = document.getElementById("instrucao");
const divisao = document.createElement("p");
const btnLimpar = document.getElementById("btnLimpar");



btnStart.addEventListener("click", () => {
    console.log("Teste")
    btnStart.style.display = "none";
    btnLimpar.style.display = "inline"
    fetch(api)
    .then(response => response.json())
    .then(data => {
        let i = 0;
        divisao.innerText = "---------------------------------"
        data.forEach(r => {
            const exib_resultado = document.createElement("p");
            exib_resultado.innerText = `Turma: ${data[i].Turma} - Alunos: ${data[i].Alunos}`;
            resultado.appendChild(exib_resultado);
            resultado.appendChild(divisao)
            i++;
        });
        btnLimpar.style.display = "inline"
        titulo.innerText = "Resultado";
        instrucao.style.display = "none";
    })
    .catch(error => {console.log("Erro:",error.message)})
});

btnLimpar.addEventListener("click", () => {
    titulo.innerText = "Seja bem-vindo(a)";
    instrucao.style.display = "block";
    btnStart.style.display = "inline";
    resultado.innerHTML = "";
    btnLimpar.style.display = "none";
})
