from django.db import models
from atendimentos.models import Atendimento

class Documento(models.Model):

    TIPO_CHOICES = [
        ('rg', 'RG'),
        ('cpf', 'CPF'),
        ('comprovante', 'Comprovante de Residência'),
        ('outro', 'Outro'),
    ]

    atendimento = models.ForeignKey(Atendimento, on_delete=models.CASCADE)
    arquivo = models.ImageField(upload_to='documentos/')
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES, default='outro')
    enviado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.tipo} - {self.atendimento}'

