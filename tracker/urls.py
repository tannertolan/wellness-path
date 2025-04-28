from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('track/', views.track_view, name='track'),
    path('about/', views.about_view, name='about'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]
