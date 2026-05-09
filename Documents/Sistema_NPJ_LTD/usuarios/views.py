from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def login_view(request):

    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')
        tipo_usuario = request.POST.get('tipo_usuario')

        user = authenticate(request, username=username, password=password)

        if user is not None:

            login(request, user)

            if tipo_usuario == 'coordenador' and user.groups.filter(name='Coordenador').exists():

                return redirect('dashboard')

            elif tipo_usuario == 'aluno' and user.groups.filter(name='Aluno').exists():

                return redirect('cadastro_cliente')

            else:

                return render(request, 'usuarios/login.html', {
                    'erro': 'Você não tem permissão para acessar esse perfil.'
                })

        else:

            return render(request, 'usuarios/login.html', {
                'erro': 'Usuário ou senha inválidos'
            })

    return render(request, 'usuarios/login.html')

@login_required
def dashboard_view(request):

    return render(request, 'usuarios/dashboard.html')

def logout_view(request):

    logout(request)

    return redirect('login')
