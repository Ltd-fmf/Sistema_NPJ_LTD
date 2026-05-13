from django.shortcuts import render

def cadastro_cliente_view(request):
    return render(request, 'clientes/cadastro.html')

def portal_aluno_view(request):

    return render(request, 'clientes/portal_aluno.html')

def novo_assistido_view(request):

    return render(request, 'clientes/novo_assistido.html')

def verificar_assistido_view(request):

    return render(request, 'clientes/verificar_assistido.html')