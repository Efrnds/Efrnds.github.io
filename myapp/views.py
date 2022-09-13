from cProfile import label
from django.shortcuts import render
from .models import StudentForm
from .forms import MyForm

def index(request):
  if request.method == "POST":
    form = MyForm(request.POST)
    if form.is_valid():
      form.save()
  else:
      form = MyForm()
  return render(request, 'index.html', {'form': form})