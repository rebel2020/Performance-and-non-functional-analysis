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
        try:
            newData = LighthouseData(environment=data['environment'])
            auditData = Audit(performance_audits=data['audits']['performance_audits'],best_practices_audits=data['audits']['best_practices_audits'],seo_audits=data['audits']['seo_audits'],pwa_audits=data['audits']['pwa_audits'])
            newData['audits']=auditData
            newData['fetchTime']=data['fetchTime']
        except:
            raise ValidationError
        try:
            newData['finalUrl']=data['finalUrl']
            newData['lighthouseVersion']=data['lighthouseVersion']
            newData['requestedUrl']=data['requestedUrl']
        except:
            pass
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
            try:
                data.remove('scala')
            except:
                pass
            newData['stats'] = str(data)
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