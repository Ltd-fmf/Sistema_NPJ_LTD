from django.db import models
from atendimentos.models import Atendimento

class Relatorio(models.Model):

    STATUS_CHOICES = [
        ('pendente', 'Pendente'),
        ('validado', 'Validado'),
        ('rejeitado', 'Rejeitado'),
    ]

    atendimento = models.OneToOneField(Atendimento, on_delete=models.CASCADE)
    conteudo = models.TextField()
    status_coordenador = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendente')
    criado_em = models.DateTimeField(auto_now_add=True)
    validado_em = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f'Relatório - {self.atendimento}'
    