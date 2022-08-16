from django.shortcuts import render

# Create your views here.
def num(request):
    return render(request,'peak_elements/peak_number.html')

def leaders(request):
    return render(request,'peak_elements/leaders.html')


def common_num(request):
    return render(request,'peak_elements/common_number.html')