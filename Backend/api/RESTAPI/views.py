from django.shortcuts import render,redirect
from django.http import HttpResponse,response,HttpResponseRedirect
from django.contrib.sites import requests
from rest_framework.exceptions import ValidationError,ParseError
from rest_framework_mongoengine import viewsets as viewsets
from api.RESTAPI.serializers import LighthouseDataSerializer,GatlingDataSerializer,MetricDetailedSerializer
from api.RESTAPI.models import *
import json
from .script import fun
from datetime import datetime

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
            auditData = Audit(performance_audits=data['audits']['performance_audits'],
                              best_practices_audits=data['audits']['best_practices_audits'],
                              seo_audits=data['audits']['seo_audits'], pwa_audits=data['audits']['pwa_audits'],
                              accessibility_audits=data['audits']["accessibility_audits"])
            newData['audits']=auditData
            newData['fetchTime'] = datetime.strptime(str(data['fetchTime']), "%Y-%m-%dT%H:%M:%S.%fZ")
        except:
            raise ValidationError
        try:
            newData['finalUrl']=data['finalUrl']
            newData['lighthouseVersion']=data['lighthouseVersion']
            newData['requestedUrl']=data['requestedUrl']
#            newData['phase'] = data['phase']
 #           newData['brand'] = data['brand']
  #          newData['project'] = data['project']
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
#        newData=URLData()
 #       temp=request.data['value']
  #      list1=temp.split(",")
   #     print(temp)
    #    newData['urls']=list1
     #   newData.save()
      #  return HttpResponse("AAAA")
        newData=GatlingData()
        data=request.data
        try:
            author_stats = []
            publisher_stats=[]
            dispatcher_stats=[]
            for i in range(3):
                author_stats.append(Bench(cpu=data['server_stats']['author_stats'][i]['cpu'],
                      ram=data['server_stats']['author_stats'][i]['ram'],
                      jvm_heap=data['server_stats']['author_stats'][i]['jvm_heap']))
                publisher_stats.append(Bench(cpu=data['server_stats']['publisher_stats'][i]['cpu'],
                                     ram=data['server_stats']['publisher_stats'][i]['ram'],
                                     jvm_heap=data['server_stats']['publisher_stats'][i]['jvm_heap']))
                dispatcher_stats.append(Bench(cpu=data['server_stats']['dispatcher_stats'][i]['cpu'],
                                     ram=data['server_stats']['dispatcher_stats'][i]['ram'],
                                     jvm_heap=data['server_stats']['dispatcher_stats'][i]['jvm_heap']))
            serverData = ServerStats(author_stats=author_stats,publisher_stats=publisher_stats,dispatcher_stats=dispatcher_stats)
            newData['server_stats']=serverData
        except:
            print("AAAAAAA")
            pass
        try:
            newData['url'] = data['url']
            newData['fetchTime'] = datetime.strptime(str(data['fetchTime']),"%Y-%m-%dT%H:%M:%S.%fZ")
        except:
            pass
        try:
            newData['scala']= data['scala']
        except:
            pass
        try:
            newData['stats'] = str(data['stats'])
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