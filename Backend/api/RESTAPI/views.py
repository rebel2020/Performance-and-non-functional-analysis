from django.shortcuts import render,redirect
from django.http import HttpResponse,response,HttpResponseRedirect
from django.contrib.sites import requests
from rest_framework.exceptions import ValidationError,ParseError
from rest_framework_mongoengine import viewsets as viewsets
from api.RESTAPI.serializers import LighthouseDataSerializer,GatlingDataSerializer,MetricDetailedSerializer
from api.RESTAPI.models import *
import json
from .script import fun
class LighthouseDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = LighthouseData.objects.all()
    serializer_class = LighthouseDataSerializer
    def post(self,request):
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
        newData = LighthouseData(environment=data['environment'])
        auditData = Audit(performance_audits=data['audits']['performance_audits'])
        newData['audits']=auditData
        newData['finalUrl']=data['finalUrl']
        newData['lighthouseVersion']=data['lighthouseVersion']
        newData['requestedUrl']=data['requestedUrl']

        newData.save()
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = LighthouseData.objects.all()
        data = LighthouseDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)
class GatlingDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = GatlingData.objects.all()
    serializer_class = GatlingDataSerializer
    def post(self,request):
        newData=GatlingData()
        data=request.data
#        print(data)
#        newData = GetlingDataSerializer(data=data)
        try:
            newData['fetchTime'] = data['fetchTime']
        except:
            pass
        try:
            newData['scala']= data['scala']
        except:
            pass
        try:
            newData['stats'] = data
            newData.save()
        except:
            ValidationError
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = GatlingData.objects.all()
        data = GatlingDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)