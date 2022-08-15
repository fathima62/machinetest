from django.urls import path

from . import views

app_name='total_notes'
urlpatterns=[

    path('notes',views.notes,name="notes"),
]