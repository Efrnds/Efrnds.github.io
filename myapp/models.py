from django.db import models

# Create your models here.


class StudentForm(models.Model):
    fullname = models.CharField(max_length=200, default="")
    email = models.EmailField(default="")
    text = models.CharField(default="", max_length=200000)
    file = models.FileField()  # for creating file input

