from django.conf.urls import url
from rest_framework_mongoengine import routers as routers
from api.RESTAPI.views import PerformanceDataViewSet
from django.urls import path

router = routers.DefaultRouter()
router.register(r'', PerformanceDataViewSet)
router.register(r'rangequery', PerformanceDataViewSet)
 
urlpatterns = [] 
urlpatterns += router.urls