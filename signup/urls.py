from django.urls import path

from . import views

app_name='profile'
urlpatterns=[
    path('sign_up',views.signup,name="sign" ),
    path('login',views.login,name="login" ),
    path('home',views.home,name="home" ),
   
]