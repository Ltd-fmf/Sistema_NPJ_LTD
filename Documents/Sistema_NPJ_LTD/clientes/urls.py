from django.urls import path
from . import views

urlpatterns = [
    path('cadastro/', views.cadastro_cliente_view, name='cadastro_cliente'),
    path('portal/', views.portal_aluno_view, name='portal_aluno'),
    path('novo/', views.novo_assistido_view, name='novo_assistido'),
    path('verificar/', views.verificar_assistido_view, name='verificar_assistido'),
]