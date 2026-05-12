// Lógica da Tela de Login
function mudarTab(tipo) {
    const btnA = document.getElementById('btn-aluno');
    const btnAdmin = document.getElementById('btn-admin');
    const submit = document.getElementById('main-submit');

    if (tipo === 'aluno') {
        btnA.classList.add('active');
        btnAdmin.classList.remove('active');
        submit.innerText = "Entrar como Aluno";
        submit.style.background = '#8B1A4F';
    } else {
        btnAdmin.classList.add('active');
        btnA.classList.remove('active');
        submit.innerText = "Entrar como Administrativo";
        submit.style.background = '#1E293B';
    }
}

function fazerLogin() {
    const btnAluno = document.getElementById('btn-aluno');
    const isAluno = btnAluno && btnAluno.classList.contains('active');
    // Redireciona conforme o tipo de usuário
    window.location.href = isAluno ? 'NPJ-WEB\\Html\\portal-aluno.html' : 'NPJ-WEB\\Html\\portal-coordenador.html';
}

// Lógica de Etapas do Cadastro (Novo Assistido)
function nextStep(step) {
    document.querySelectorAll('.form-step').forEach(section => {
        section.classList.remove('active');
    });
    const nextSection = document.getElementById('step-' + step);
    if(nextSection) nextSection.classList.add('active');
}

function finalizarAtendimento() {
    alert("Atendimento salvo com sucesso!");
    window.location.href = 'NPJ-WEB\\Html\\portal-aluno.html';
}
