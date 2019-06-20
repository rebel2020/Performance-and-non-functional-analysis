from django.shortcuts import render,redirect
from django.http import HttpResponse,response,HttpResponseRedirect
from django.contrib.sites import requests
from rest_framework_mongoengine import viewsets as viewsets
from api.RESTAPI.serializers import PerformanceDataSerializer
from api.RESTAPI.models import PerformanceData
import json
from .script import fun
class PerformanceDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = PerformanceData.objects.all()
    serializer_class = PerformanceDataSerializer
    def post(self,request):
        newData=PerformanceData()
        newData['value']=str(fun(request.data))
#        newData['value'] = request.data['value']
        newData.save()
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = PerformanceData.objects.all()
        data = PerformanceDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)
