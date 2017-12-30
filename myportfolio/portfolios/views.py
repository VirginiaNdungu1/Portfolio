from django.shortcuts import render
from django.http import HttpResponse, Http404
from . models import Project

# Create your views here.


def welcome(request):
    projects = Project.objects.all()
    return render(request, 'welcome.html', {"projects": projects})
