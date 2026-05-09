from django.shortcuts import render

def cadastro_cliente_view(request):
    return render(request, 'clientes/cadastro.html')