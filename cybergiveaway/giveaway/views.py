from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})

def history(request):
    return render(request, 'index.html', {})


# Create your views here.
