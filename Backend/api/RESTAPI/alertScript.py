import json
from .script import fun1,Initialize
def get_alerts(data_list,url,alerts):
    PADict = Initialize1(data_list)
#   print(data_list[0]['audits']['best_practices_audits']['is_on_https']['score'],data_list[1]['audits']['best_practices_audits']['is_on_https']['score'])
    PArray = []
    Audit_list = Initialize()
    globalAvg = getAvg(data_list,PADict,Audit_list)
    threeDaysAvg = getAvg(data_list[:3],PADict,Audit_list)
    alerts = getAvgAlerts(globalAvg,threeDaysAvg,alerts,Audit_list,url)
    return alerts
    print(data_list[0]['fetchTime'],data_list[1]['fetchTime'])
    for data in data_list[:2]:
        ptr=0
        tArray = []
        for audit in Audit_list:
            PAList = data['audits'][PADict[audit]]
            for metric in Audit_list[audit]:
                metric=fun1(metric)
                if PAList[metric]['score'] is not None:
                    tArray.append([float(PAList[metric]['score']), PAList[metric]['weight']])
                else:
                    tArray.append([0, PAList[metric]['weight']])
                PADict[ptr] = metric
                ptr += 1
            PArray.append(tArray)
  #      print(PADict)
    t_alert = dict()
    t_alert['alert']=[]
    for i in range(len(PArray[0])):
        temp1 = []
        if 0.9*PArray[len(PArray)-1][i][0] >= PArray[0][i][0] and PArray[len(PArray)-1][i][0] !=0 :#and PArray[0][i][0] > 0:
            temp=dict()
            temp['fetchUrl']=url
            temp['name'] = PADict[i]
#            print(PArray[len(PArray) - 1][i][0],PArray[0][i][0],url,PADict[i],i)
            temp['scoreDif'] = ((PArray[len(PArray) - 1][i][0] - PArray[0][i][0]) / PArray[len(PArray) - 1][i][0])*100
            t_alert['alert'].append(temp)
    if len(t_alert['alert']) > 0:
        alerts.append(t_alert)

def getAvg(data_list,PADict,Audit_list):
    avgVal = dict()
    for audit in Audit_list:
        for metric in Audit_list[audit]:
            avgVal[fun1(metric)]=0
    gArray=[]
    for data in data_list:
        ptr=0
        tArray = []
        for audit in Audit_list:
            PAList = data['audits'][PADict[audit]]
            for metric in Audit_list[audit]:
                metric=fun1(metric)
                if PAList[metric]['score'] is not None:
                    avgVal[metric] = avgVal[metric]+PAList[metric]['score']
                PADict[ptr] = metric
                ptr += 1
    for audit in Audit_list:
        for metric in Audit_list[audit]:
            avgVal[fun1(metric)]/=len(data_list)
    return avgVal


def Initialize1(data_list):
    PADict = dict()
#    print(data_list[0]['fetchTime'], data_list[1]['fetchTime'])
    PADict['PAudit_list'] = "performance_audits"
    PADict['BPAudit_list'] = "best_practices_audits"
    PADict['SEAudit_list'] = "seo_audits"
    PADict['AAudit_list'] = "accessibility_audits"
    PADict['PWAAudit_list'] = "pwa_audits"
    return PADict

def getAvgAlerts(globalAvg,threeDayAvg,alerts,Audit_list,url):
    t_alert = dict()
    t_alert['alert'] = []
    for audit in Audit_list:
        for metric in Audit_list[audit]:
            metric=fun1(metric)
            if threeDayAvg[metric] < 0.9*globalAvg[metric]:
                temp = dict()
                temp['name'] = url
                temp['scoreDiff'] = ((globalAvg[metric]-threeDayAvg[metric])/globalAvg[metric])*100
                t_alert['alert'].append(temp)
    if len(t_alert['alert']) > 0:
        alerts.append(t_alert)

def getTrend(data_list,Audit_list,PADict):
    pass