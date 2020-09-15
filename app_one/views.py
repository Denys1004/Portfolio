from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    context = {
      'projects_page': 'active_page'  
    }
    return render(request, 'index.html', context)


def certificates(request):
    context = {
      'certificates_page': 'active_page'
    }
    return render(request, 'certificates.html', context)

def about(request):
    context = {
      'about_page': 'active_page'
    }
    return render(request, 'about.html', context)