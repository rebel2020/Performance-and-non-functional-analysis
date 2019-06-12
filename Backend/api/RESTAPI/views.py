from django.shortcuts import render

from rest_framework_mongoengine import viewsets as viewsets
from api.RESTAPI.serializers import PerformanceDataSerializer
from api.RESTAPI.models import PerformanceData


class PerformanceDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = PerformanceData.objects.all()
    serializer_class = PerformanceDataSerializer
    