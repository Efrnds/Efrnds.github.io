from re import S
from django.contrib import admin
from .models import  StudentForm

# Register your models here.
 
@admin.register(StudentForm)
class RequestDemoAdmin(admin.ModelAdmin):
  list_display = [field.name for field in
StudentForm._meta.get_fields()]