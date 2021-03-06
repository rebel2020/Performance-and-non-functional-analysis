import json
import random
def fun(file):
    data = file
    try:
        data = json.loads(data)
    except:
        pass
    audits = dict()
    Audits=dict()
    weight_dict=dict()
    weight_dict["PAudit_list"]="performance"
    weight_dict["BPAudit_list"] = "best-practices"
    weight_dict["SEAudit_list"] = "seo"
    weight_dict["PWAAudit_list"] = "pwa"
    weight_dict["AAudit_list"] = "accessibility"
    Audit_list = Initialize()
    for Audit in Audit_list:
        Audits[Audit] = dict()
    for Audit in Audit_list:
        for temp in Audit_list[Audit]:
            temp1 = fun1(temp)
            Audits[Audit][temp1] = dict()
            try:
                Audits[Audit][temp1]['score'] = data['audits'][temp]['score']
            except:
                pass
            try:
                Audits[Audit][temp1]['scoreDisplayMode'] = data['audits'][temp]['scoreDisplayMode']
            except:
                pass
            try:
                Audits[Audit][temp1]['numericValue'] = data['audits'][temp]['numericValue']
            except:
                pass
            try:
                Audits[Audit][temp1]['details'] = json.dumps(data['audits'][temp]['details'])
            except:
                pass
            try:
                Audits[Audit][temp1]['description'] = data['audits'][temp]['description'].split('.')[0]
            except:
                pass

        t_list = []
        try:
            t_list = data["categories"][weight_dict[Audit]]["auditRefs"]
        except:
            pass
        for t in t_list:
            try:
                Audits[Audit][fun1(t['id'])]['weight'] = t['weight']
            except:
                pass
            try:
                score = data['categories'][weight_dict[Audit]]['score']
                Audits[Audit]['score'] = score
            except:
                pass
    audits['seo_audits']=Audits["SEAudit_list"]
    audits["best_practices_audits"]=Audits["BPAudit_list"]
    audits["performance_audits"]=Audits["PAudit_list"]
    audits["pwa_audits"]=Audits["PWAAudit_list"]
    audits["accessibility_audits"] = Audits["AAudit_list"]
    CData = dict()
    LighthouseData = dict()
    LighthouseData['audits'] = audits
    try:
        LighthouseData['requestedUrl'] = data['requestedUrl']
    except:
        pass
    try:
        LighthouseData['finalUrl'] = data['finalUrl']
    except:
        pass
    try:
        LighthouseData['runWarnings'] = data['runWarnings']
    except:
        pass
    try:
        LighthouseData['lighthouseVersion'] = data['lighthouseVersion']
    except:
        pass
    try:
        LighthouseData['environment'] = data['environment']
    except:
        pass
    LighthouseData['fetchTime']=data['fetchTime']
    LighthouseData['brand'] = data['brand']
    LighthouseData['phase'] = data['phase']
    LighthouseData['project'] = data['project']
    return LighthouseData
def fun1(s):
    temp = ""
    for i in range(len(s)):
        if s[i] == '-':
            temp += '_'
        else:
            temp += s[i]
    return temp
def Initialize():
    Audit_list = dict()
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
                    'password-inputs-can-be-pasted-into', 'errors-in-console', 'image-aspect-ratio']
    SEAudit_list = ['viewport', 'document-title', 'meta-description', 'http-status-code', 'link-text', 'is-crawlable',
                    'robots-txt', 'image-alt', 'hreflang', 'canonical', 'font-size', 'plugins', 'tap-targets']
    PWAAudit_list = ['load-fast-enough-for-pwa', 'works-offline', 'offline-start-url', 'is-on-https',
                     'service-worker', 'installable-manifest', 'redirects-http', 'splash-screen', 'themed-omnibox',
                     'content-width', 'viewport', 'without-javascript', 'apple-touch-icon', 'pwa-cross-browser',
                     'pwa-page-transitions', 'pwa-each-page-has-url']
    AAudit_list = ['accesskeys', 'aria-allowed-attr', 'aria-required-attr', 'aria-required-children',
                   'aria-required-parent', 'aria-roles', 'aria-valid-attr-value', 'aria-valid-attr', 'audio-caption',
                   'button-name', 'bypass', 'color-contrast', 'definition-list', 'dlitem', 'document-title',
                   'duplicate-id', 'frame-title', 'html-has-lang', 'html-lang-valid', 'image-alt', 'input-image-alt',
                   'label', 'layout-table', 'link-name', 'list-', 'listitem', 'meta-refresh', 'meta-viewport',
                   'object-alt', 'tabindex', 'td-headers-attr', 'th-has-data-cells', 'valid-lang', 'video-caption',
                   'video-description', 'logical-tab-order', 'focusable-controls', 'interactive-element-affordance',
                   'managed-focus', 'focus-traps', 'custom-controls-labels', 'custom-controls-roles',
                   'visual-order-follows-dom', 'offscreen-content-hidden', 'heading-levels', 'use-landmarks']
    Audit_list["PAudit_list"] = PAudit_list
    Audit_list["BPAudit_list"]=BPAudit_list
    Audit_list["SEAudit_list"] = SEAudit_list
    Audit_list["AAudit_list"] = AAudit_list
    Audit_list["PWAAudit_list"] = PWAAudit_list
    return Audit_list.copy()