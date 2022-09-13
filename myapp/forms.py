from pyexpat import model
from tkinter.ttk import LabeledScale
from django import forms
from myapp.models import StudentForm

class MyForm(forms.ModelForm):
    class Meta:
        model = StudentForm
        fields = ["fullname", "email", "text"]
        labels = {'fullname' : "Enter your name", "email" : "Enter your email", "text" : "Say something",}
