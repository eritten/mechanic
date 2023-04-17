from django.shortcuts import render
from .models import Car

# Create your views here.

def home(request):
    project = Car.objects.all()
    return render(request, "home.html", {"posts": project})

def about(request):
    return render(request, "about.html")
