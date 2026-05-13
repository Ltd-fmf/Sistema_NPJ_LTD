from django.shortcuts import render, redirect
from .models import Assistido

def cadastro_cliente_view(request):
    return render(request, 'clientes/cadastro.html')

def portal_aluno_view(request):

    return render(request, 'clientes/portal_aluno.html')

def novo_assistido_view(request):
    if request.method == 'POST':
        Assistido.objects.create(
            nome_completo=request.POST.get('nome_completo'),
            cpf=request.POST.get('cpf'),
            rg=request.POST.get('rg'),
            nacionalidade=request.POST.get('nacionalidade'),
            profissao=request.POST.get('profissao'),
            endereco=request.POST.get('endereco'),
            telefone=request.POST.get('telefone'),
            whatsapp=request.POST.get('whatsapp'),
            email=request.POST.get('email'),
        )

        return redirect('portal_aluno')

    return render(request, 'clientes/novo_assistido.html')

def verificar_assistido_view(request):

    return render(request, 'clientes/verificar_assistido.html')