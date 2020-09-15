from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('certificates/', views.certificates),
    path('about/', views.about),
]
