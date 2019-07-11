from django.conf.urls import url
from rest_framework_mongoengine import routers as routers
from api.RESTAPI.views import LighthouseDataViewSet,GatlingDataViewSet
from django.urls import path

router = routers.DefaultRouter()
router.register(r'lighthouse', LighthouseDataViewSet)
router.register(r'gatling', GatlingDataViewSet)
router.register(r'lighthouse/alert',LighthouseDataViewSet)
router.register(r'lighthouse/recommendations', LighthouseDataViewSet)

urlpatterns = []
urlpatterns+=[
    url(r'^lighthouse$',LighthouseDataViewSet.as_view({'post':'post','get':'get'})),
    url(r'gatling',GatlingDataViewSet.as_view({'post':'post','get':'get'})),
    url(r'lighthouse/alert',LighthouseDataViewSet.as_view({'get':'alert'})),
    url(r'lighthouse/recommendations', LighthouseDataViewSet.as_view({'get':'recommendations'})),
              ]
urlpatterns += router.urls