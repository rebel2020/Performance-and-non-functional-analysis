from django.shortcuts import render,redirect
from django.http import HttpResponse,response,HttpResponseRedirect
from django.contrib.sites import requests
from rest_framework.exceptions import ValidationError,ParseError
from rest_framework_mongoengine import viewsets as viewsets
from api.RESTAPI.serializers import LighthouseDataSerializer,GetlingDataSerializer,MetricDetailedSerializer
from api.RESTAPI.models import *
import json
from .script import fun
class LighthouseDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = LighthouseData.objects.all()
    serializer_class = LighthouseDataSerializer
    def post(self,request):
        newData=LighthouseData()
        try:
            data=fun(request.data['value'])
        except:
            try:
                data=fun(request.data)
            except:
                raise ValidationError
#        newData=LighthouseDataSerializer(data=data)
#        md = MetricDetailed(score=data['audits']['performance_audits']['first_contentful_paint']['score'])
#        PAData = PerformanceAudit(score=data['audits']['performance_audits']['score'])
        auditData = Audit(performance_audits=data['audits']['performance_audits'])
        newData['audits']=auditData
        newData['finalUrl']=data['finalUrl']
        newData['lighthouseVersion']=data['lighthouseVersion']
        newData['environment']=data['environment']
        newData['requestedUrl']=data['requestedUrl']

        newData.save()
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = LighthouseData.objects.all()
        data = LighthouseDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)
class GetlingDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = GetlingData.objects.all()
    serializer_class = GetlingDataSerializer
    def post(self,request):
        newData=GetlingData()
        data=request.data
#        print(data)
        newData = GetlingDataSerializer(data=data)
        if newData.is_valid():
            newData.save()
        else:
            raise ValidationError
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = GetlingData.objects.all()
        data = GetlingDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)