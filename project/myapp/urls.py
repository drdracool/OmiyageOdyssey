from django.urls import path
from . import views

app_name = 'myapp'
urlpatterns = [
    path('hello/', views.hello, name='hello'),
    path('home/', views.Home.as_view(), name='home'),
    path('index/', views.IndexView.as_view(), name='index'),
    # path('test/', views.test, name='test'),
    # path('csrf-token/', views.get_csrf_token, name='get_csrf_token'),
    path('cors-test/', views.cors_test, name='cors-test'),
]