from django.shortcuts import render

# Create your views here.

def signup(request):
    return render(request,'sign_up/sign_up.html')

def login(request):
    return render(request,'sign_up/login.html')

def home(request):
    return render(request,'sign_up/home.html')

