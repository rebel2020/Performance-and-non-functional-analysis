from django.conf.urls import url
from rest_framework_mongoengine import routers as myrouters
from api.RESTAPI.views import PerformanceViewSet
 
myrouter = myrouters.DefaultRouter()
myrouter.register(r'', PerformanceViewSet)
 
urlpatterns = [
 
]
 
urlpatterns += myrouter.urls