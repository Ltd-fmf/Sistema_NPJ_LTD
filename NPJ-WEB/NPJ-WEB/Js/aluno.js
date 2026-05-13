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

// Lógica para Captura de Foto
const uploadBox = document.getElementById('upload-box');
const uploadText = document.getElementById('upload-text');
const fileInput = document.getElementById('file-input');

document.querySelector('.btn-capture').addEventListener('click', capturePhoto);

function capturePhoto() {
    fileInput.click();
}

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            uploadBox.innerHTML = '';
            uploadBox.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Lógica para Assinatura Digital
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;
ctx.lineCap = 'round';
let drawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Para dispositivos touch
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); });
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });
canvas.addEventListener('touchend', (e) => { e.preventDefault(); stopDrawing(); });

function startDrawing(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(getX(e), getY(e));
}

function draw(e) {
    if (!drawing) return;
    ctx.lineTo(getX(e), getY(e));
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
}

function getX(e) {
    return e.clientX - canvas.offsetLeft || e.touches[0].clientX - canvas.offsetLeft;
}

function getY(e) {
    return e.clientY - canvas.offsetTop || e.touches[0].clientY - canvas.offsetTop;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

