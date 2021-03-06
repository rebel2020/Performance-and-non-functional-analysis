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
from .alertScript import get_alerts
from .recommend_script import get_recommendations
from apscheduler.schedulers.background import BackgroundScheduler
scheduler = BackgroundScheduler()

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
        try:
            newData = LighthouseData(environment=data['environment'])
            auditData = Audit(performance_audits=data['audits']['performance_audits'],
                              best_practices_audits=data['audits']['best_practices_audits'],
                              seo_audits=data['audits']['seo_audits'], pwa_audits=data['audits']['pwa_audits'],
                              accessibility_audits=data['audits']["accessibility_audits"])
            newData['audits']=auditData
            newData['fetchTime'] = datetime.strptime(str(data['fetchTime']), "%Y-%m-%dT%H:%M:%S.%fZ")
#            temp = datetime.strptime(str(data['fetchTime']), "%Y-%m-%dT%H:%M:%S.%fZ")
 #           count=14
  #          newData['fetchTime']=temp.replace(day=int(count),month=6)
        except:
            raise ValidationError
        try:
            newData['finalUrl']=data['finalUrl']
            newData['lighthouseVersion']=data['lighthouseVersion']
            newData['requestedUrl']=data['requestedUrl']
            newData['phase'] = data['phase']
            newData['brand'] = data['brand']
            newData['project'] = data['project']
        except:
            pass
        newData.save()
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = LighthouseData.objects.all().order_by('-fetchTime')[:5]
        data = LighthouseDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)
    def alert(self,request):
        url_list = URLData.objects.all()
        alerts = []
        try:
            Alerts.objects.all().delete()
        except:
            pass
        for url in url_list[0]['urls']:
            temp=LighthouseData.objects.filter(requestedUrl =url).order_by('-fetchTime')[:14]
            if len(temp) > 1:
                newAlertData=get_alerts(temp,url)
                if len(newAlertData) > 0:
                    try:
                        newAlert = Alerts(alert=newAlertData,fetchUrl=url)
                        newAlert.save()
                        alerts.append(newAlertData)
                    except:
                        pass
        return HttpResponse(json.dumps(alerts))
    def alert_by_schedule():
        url_list = URLData.objects.all()
        try:
            Alerts.objects.all().delete()
        except:
            pass
        for url in url_list[0]['urls']:
            temp=LighthouseData.objects.filter(requestedUrl =url).order_by('-fetchTime')[:28]
            if len(temp) > 1:
                newAlertData=get_alerts(temp,url)
                if len(newAlertData) > 0:
                    try:
                        newAlert = Alerts(alert=newAlertData,fetchUrl=url)
                        newAlert.save()
                    except:
                        pass
        print("Scheduled alert triggered at",datetime.utcnow())
        return "Alerts updated!!!"
    def recommendations(self, request):
        url_list = URLData.objects.all()
        recommendations = []
        url_map=[]
        for url in url_list[0]['urls']:
            temp = LighthouseData.objects.filter(requestedUrl=url).order_by('-id')[:]
            if len(temp) >= 1:
                newRecommendation=get_recommendations(temp, url)
                recommendations.append(newRecommendation)
                try:
                    newRecommendation = RecommendedData(recommend=newRecommendation['recommended_data'], fetchURL=url)
                    newRecommendation.save()
                except:
                    pass
        return HttpResponse(json.dumps(recommendations))
class GatlingDataViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = GatlingData.objects.all()
    serializer_class = GatlingDataSerializer
    def post(self,request):
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
            pass
        try:
            newData['scala'] = data['scala']
            newData['fetchTime'] = datetime.fromtimestamp(int(data['fetchTime'])/1000).strftime('%Y-%m-%d %H:%M:%S.%f%Z')#[:-7]+str(data['fetchTime']%1000)+"Z"
            newData['url'] = data['url']
        except:
            pass
        try:
            newData['stats'] = json.dumps(data['stats'])
            newData['phase'] = data['phase']
            newData['brand'] = data['brand']
            newData.save()
        except:
            raise ValidationError
        return HttpResponse(request.data)
    def get(self, request):
        lookup_field = 'id'
        queryset = GatlingData.objects.all()
        data = GatlingDataSerializer(queryset,many=True)
        data=json.dumps(data.data)
        return HttpResponse(data)
def start_job():
    scheduler.add_job(LighthouseDataViewSet.alert_by_schedule, 'interval', hours = 1)
    try:
        scheduler.start()
    except:
        pass
start_job()
