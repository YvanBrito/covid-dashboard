from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from back.covid import views

router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('hello/', views.hello, name='hello'),
    path('hello2/', views.hellodois, name='hello2'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]