from django.urls import path

from . import views

app_name='peak_numbers'
urlpatterns=[

    path('num',views.num,name="peaknum"),
]