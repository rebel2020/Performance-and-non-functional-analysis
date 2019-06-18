from django.shortcuts import render

from rest_framework_mongoengine import viewsets as viewsets
from api.RESTAPI.serializers import PerformanceDataSerializer
from api.RESTAPI.models import PerformanceData


class PerformanceDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = PerformanceData.objects.all()
    queryset = queryset.filter(createdAt__lt="2019-06-14",createdAt__gte="2019-06-13")
    serializer_class = PerformanceDataSerializer
    