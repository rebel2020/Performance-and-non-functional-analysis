import json
import datetime as time
def fun(file):
    data = file
    try:
        data = json.loads(data)
    except:
        pass
    newData = dict()
    audits = dict()
    PAudit = dict()
    details = {}
    PAudit_list1=[]
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
        PAudit_list1+=temp1
        PAudit[temp1] = dict()
        try:
            PAudit[temp1]['score'] = data['audits'][temp]['score']
        except:
            pass
        try:
            PAudit[temp1]['scoreDisplayMode'] = data['audits'][temp]['scoreDisplayMode']
        except:
            pass
        try:
            PAudit[temp1]['numericValue'] = data['audits'][temp]['numericValue']
        except:
            pass
        try:
            PAudit[temp1]['details'] = data['audits'][temp]['details']
        except:
            pass
        try:
            PAudit[temp1]['description'] = data['audits'][temp]['description'].split('.')[0]
        except:
            pass
    t_list = []
    try:
        t_list = data["categories"]["performance"]["auditRefs"]
    except:
        pass
    for t in t_list:
        try:
            PAudit[t['id']]['weight'] = t['weight']
        except:
            pass
    try:
        PAudit['score'] = data['categories']['performance']['score']
    except:
        pass
    audits["performance_audits"] = json.dumps(PAudit)
    CData = dict()
    LighthouseData = dict()
    LighthouseData['audits'] = json.dumps(audits)
    LighthouseData['requestedUrl'] = json.dumps(data['requestedUrl'])
    LighthouseData['finalUrl'] = json.dumps(data['finalUrl'])
    LighthouseData['runWarnings'] = json.dumps(data['runWarnings'])
    LighthouseData['lighthouseVersion'] = json.dumps(data['lighthouseVersion'])
    LighthouseData['environment'] = json.dumps(data['environment'])
    return LighthouseData