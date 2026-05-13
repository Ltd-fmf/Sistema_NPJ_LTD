from django.db import models
from usuarios.models import Usuario
from clientes.models import Assistido
class Atendimento(models.Model):

    AREA_CHOICES = [
        ('familia', 'Família'),
        ('penal', 'Penal'),
        ('civil', 'Civil'),
        ('trabalhista', 'Trabalhista'),
        ('consumidor', 'Consumidor'),
        ('previdenciario', 'Previdenciário'),
        ('outros', 'Outros'),
    ]

    STATUS_CHOICES = [
        ('aberto', 'Aberto'),
        ('em_andamento', 'Em Andamento'),
        ('encerrado', 'Encerrado'),
    ]

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    assistido = models.ForeignKey(Assistido, on_delete=models.CASCADE)
    area_juridica = models.CharField(max_length=20, choices=AREA_CHOICES)
    descricao_caso = models.TextField()
    assinatura_digital = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='aberto')
    data_atendimento = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.assistido} - {self.area_juridica}'
 