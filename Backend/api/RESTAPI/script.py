import json
import datetime as time
def fun(file):
    data = file
#    data = json.dumps(data)
    newData = dict()
    audits = dict()
    PAudit = dict()
    details = {}
    PAudit_list = ['first-contentful-paint', 'first-meaningful-paint', 'speed-index', 'interactive', 'first-cpu-idle',
                   'max-potential-fid', 'estimated-input-latency', 'render-blocking-resources',
                   'uses-responsive-images', 'offscreen-images', 'unminified-css', 'unminified-javascript',
                   'unused-css-rules', 'uses-optimized-images', 'uses-webp-images', 'uses-text-compression',
                   'uses-rel-preconnect', 'time-to-first-byte', 'redirects', 'uses-rel-preload',
                   'efficient-animated-content', 'total-byte-weight', 'uses-long-cache-ttl', 'dom-size', 'user-timings',
                   'bootup-time', 'mainthread-work-breakdown', 'font-display', 'resource-summary', 'network-requests',
                   'network-rtt', 'network-server-latency', 'main-thread-tasks', 'diagnostics', 'metrics']
    BPAudit_list = ['appcache-manifest', 'is-on-https', 'uses-http2', 'uses-passive-event-listeners',
                    'no-document-write', 'external-anchors-use-rel-noopener', 'geolocation-on-start', 'doctype',
                    'no-vulnerable-libraries', 'js-libraries', 'notification-on-start', 'deprecations',
                    'password-inputs-can-be-pasted-into', 'errors-in-console', 'image-aspect-ratio', 'score']
    SEAudit_list = ['viewport', 'document-title', 'meta-description', 'http-status-code', 'link-text', 'is-crawlable',
                    'robots-txt', 'image-alt', 'hreflang', 'canonical', 'font-size', 'plugins', 'tap-targets', 'score']
    for temp in PAudit_list:
        temp1 = ""
        for i in range(len(temp)):
            if temp[i] == '-':
                temp1 += '_'
            else:
                temp1 += temp[i]
        PAudit[temp1] = dict()
        PAudit[temp1]['score'] = data['audits'][temp]['score']
        PAudit[temp1]['scoreDisplayMode'] = data['audits'][temp]['scoreDisplayMode']
        if 'numericValue' in data['audits'][temp]:
            PAudit[temp1]['numericValue'] = data['audits'][temp]['numericValue']
        if 'details' in data['audits'][temp]:
            PAudit[temp1]['details'] = data['audits'][temp]['details']
        #    PAudit[temp]['numeric_score']=data['audits'][temp]['numericValue']
        PAudit[temp1]['description'] = data['audits'][temp]['description'].split('.')[0]
    #    PAudit[temp]['details']=data['audits'][temp]['details']
    t_list = data["categories"]["performance"]["auditRefs"]
    for t in t_list:
        if t['id'] in PAudit:
            PAudit[t['id']]['weight'] = t['weight']
    PAudit['score'] = data['categories']['performance']['score']
    audits["performance_audits"] = PAudit
    CData = dict()
    LighthouseData = dict()
    LighthouseData['audits'] = audits
    LighthouseData['fetchTime'] = str(time.date.today())
    LighthouseData['requestedUrl'] = data['requestedUrl']
    LighthouseData['finalUrl'] = data['finalUrl']
    LighthouseData['runWarnings'] = data['runWarnings']
    LighthouseData['lighthouseVersion'] = data['lighthouseVersion']
    LighthouseData['environment'] = data['environment']
    CData['LighthouseData'] = LighthouseData
    return CData