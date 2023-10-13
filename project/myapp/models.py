from django.db import models

# Create your models here.
class Search(models.Model):
    title=models.CharField('title', max_length=100)

    def __str__(self):
        return self.title