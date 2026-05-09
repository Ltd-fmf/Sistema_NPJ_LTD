from django.urls import path
from . import views

urlpatterns = [
    path('cadastro/', views.cadastro_cliente_view, name='cadastro_cliente'),
]