import json
from .script import fun1,Initialize
def get_alerts(data_list,url,alerts):
 #   print(data_list[0]['audits']['best_practices_audits']['is_on_https']['score'],data_list[1]['audits']['best_practices_audits']['is_on_https']['score'])
    PADict = dict()
    print(data_list[0]['fetchTime'],data_list[1]['fetchTime'])
    PADict['PAudit_list'] = "performance_audits"
    PADict['BPAudit_list'] = "best_practices_audits"
    PADict['SEAudit_list'] = "seo_audits"
    PADict['AAudit_list'] = "accessibility_audits"
    PADict['PWAAudit_list'] = "pwa_audits"
    PArray = []
    Audit_list = Initialize()
    for data in data_list:
        ptr=0
        tArray = []
        for audit in Audit_list:
            PAList = data['audits'][PADict[audit]]
            for metric in Audit_list[audit]:
                metric=fun1(metric)
                if PAList[metric]['score'] != None:
                    tArray.append([float(PAList[metric]['score']), PAList[metric]['weight']])
                else:
                    tArray.append([0, PAList[metric]['weight']])
                PADict[ptr] = metric
                ptr += 1
            PArray.append(tArray)
  #      print(PADict)
    t_alert = dict()
    t_alert['alert']=[]
#    print(PArray[0])
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
