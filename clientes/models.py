from django.db import models

class Assistido(models.Model):
    
    nome_completo = models.CharField(max_length=200)
    cpf = models.CharField(max_length=14, unique=True)
    rg = models.CharField(max_length=20, blank=True)
    nacionalidade = models.CharField(max_length=50, blank=True)
    profissao = models.CharField(max_length=100, blank=True)
    endereco = models.CharField(max_length=300, blank=True)
    telefone = models.CharField(max_length=20, blank=True)
    whatsapp = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome_completo
