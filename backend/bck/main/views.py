from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/ind.html')


def about(request):
    return HttpResponse('<h5>among USSS<h5>')
