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

    if (nextSection) {
        nextSection.classList.add('active');
    }

    if (step === 4 && typeof ajustarCanvas === 'function') {
        ajustarCanvas();
    }
}

/// Lógica para Captura de Foto
const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('file-input');
const captureBtn = document.querySelector('.btn-capture');

if (uploadBox && fileInput && captureBtn) {
    captureBtn.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                uploadBox.innerHTML = `
                    <img 
                        src="${event.target.result}" 
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;"
                    >
                `;
            };

            reader.readAsDataURL(file);
        }
    });
}


// Lógica para Assinatura Digital
const canvas = document.getElementById('signature-pad');

if (canvas) {
    const ctx = canvas.getContext('2d');

    window.ajustarCanvas = function () {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
    };

    ajustarCanvas();

    let drawing = false;

    function getPosition(e) {
        const rect = canvas.getBoundingClientRect();

        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        }

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function startDrawing(e) {
        e.preventDefault();
        drawing = true;

        const pos = getPosition(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    }

    function draw(e) {
        if (!drawing) return;

        e.preventDefault();
        const pos = getPosition(e);

        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath();
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);

    window.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
}

function finalizarAtendimento() {
    alert("Atendimento salvo com sucesso!");
    window.location.href = 'NPJ-WEB\\Html\\portal-aluno.html';
}
