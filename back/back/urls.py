from django.urls import include, path, re_path
from django.contrib import admin
from rest_framework import routers
from back.covid import views
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
# path('', include(router.urls)),

urlpatterns = [
    path('global/', views.globalCases, name='cases'),
    path('brasil/', views.brasilCases, name='brasilCases'),
    path('para/', views.globalCases, name='cases'),
    path('hello2/', views.hellodois, name='hello2'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', TemplateView.as_view(template_name='resume/index.html')),
    path('coviddashboard', TemplateView.as_view(template_name='covid/index.html')),
    path('blog', TemplateView.as_view(template_name='blog/index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)