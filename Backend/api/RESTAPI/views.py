from django.shortcuts import render

from rest_framework_mongoengine import viewsets as myviewsets
from api.RESTAPI.serializers import PerformanceSerializer
from api.RESTAPI.models import PerformanceData


class PerformanceViewSet(myviewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = PerformanceData.objects.all()
    serializer_class = PerformanceSerializer