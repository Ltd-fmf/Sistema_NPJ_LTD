from django.db import models
class Usuario(models.Model):
    
    PERFIL_CHOICES = [
        ('aluno', 'Aluno'),
        ('coordenador', 'Coordenador'),
    ]
    
    nome = models.CharField(max_length=200)
    email = models.EmailField(unique=True) 
    senha = models.CharField(max_length=255)
    matricula = models.CharField(max_length=20, blank=True) 
    perfil = models.CharField(max_length=20, choices=PERFIL_CHOICES, default='aluno')
    periodo = models.CharField(max_length=10, blank=True)
    criado_em = models.DateTimeField(auto_now_add=True) 
    def __str__(self):
        
        return self.nome
   