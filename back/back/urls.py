from django.urls import include, path, re_path
from django.contrib import admin
from rest_framework import routers
from back.covid import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
# path('', include(router.urls)),

urlpatterns = [
    path('global/', views.globalCases, name='cases'),
    path('brasil/', views.brasilCases, name='brasilCases'),
    path('para/', views.globalCases, name='cases'),
    path('hello2/', views.hellodois, name='hello2'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]