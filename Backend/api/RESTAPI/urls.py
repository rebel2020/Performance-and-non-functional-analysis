from django.conf.urls import url
from rest_framework_mongoengine import routers as routers
from api.RESTAPI.views import LighthouseDataViewSet,GetlingDataViewSet
from django.urls import path

router = routers.DefaultRouter()
router.register(r'lighthouse', LighthouseDataViewSet)
router.register(r'gatling', GetlingDataViewSet)

urlpatterns = []
urlpatterns+=[
    url('lighthouse',LighthouseDataViewSet.as_view({'post':'post','get':'get'})),
    url(r'gatling',GetlingDataViewSet.as_view({'post':'post','get':'get'})),
              ]
urlpatterns += router.urls