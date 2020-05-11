from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from back.covid import views

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('global/', views.globalCases, name='cases'),
    path('brasil/', views.brasilCases, name='brasilCases'),
    path('para/', views.globalCases, name='cases'),
    path('hello2/', views.hellodois, name='hello2'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]