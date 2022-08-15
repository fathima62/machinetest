from django.shortcuts import render

# Create your views here.
def notes(request):
    return render(request,'no_of_notes/no_of_notes.html')