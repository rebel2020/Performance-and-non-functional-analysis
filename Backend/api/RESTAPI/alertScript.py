import json
import numpy as np
from statistics import mean
Audit_list = dict()
PAudit_list = ['first_contentful_paint', 'first_meaningful_paint', 'speed_index', 'interactive', 'first_cpu_idle']
BPAudit_list = ['appcache_manifest', 'is_on_https', 'uses_http2', 'uses_passive_event_listeners','no_document_write',
                    'external_anchors_use_rel_noopener', 'geolocation_on_start', 'doctype', 'no_vulnerable_libraries',
                    'notification_on_start','deprecations', 'password_inputs_can_be_pasted_into', 'errors_in_console',
                    'image_aspect_ratio']
SEAudit_list = ['viewport', 'document_title', 'meta_description', 'http_status_code', 'link_text', 'is_crawlable',
                    'robots_txt', 'image_alt', 'hreflang', 'canonical', 'font_size', 'plugins', 'tap_targets']
PWAAudit_list = ['load_fast_enough_for_pwa', 'works_offline', 'offline_start_url',
                     'service_worker', 'installable_manifest', 'redirects_http', 'splash_screen', 'themed_omnibox',
                     'content_width', 'without_javascript', 'apple_touch_icon', 'pwa_cross_browser',
                     'pwa_page_transitions', 'pwa_each_page_has_url']
AAudit_list = ['accesskeys', 'aria_allowed_attr', 'aria_required_attr', 'aria_required_children',
                   'aria_required_parent', 'aria_roles', 'aria_valid_attr_value', 'aria_valid_attr', 'audio_caption',
                   'button_name', 'bypass', 'color_contrast', 'definition_list', 'dlitem',
                   'duplicate_id', 'frame_title', 'html_has_lang', 'html_lang_valid', 'input_image_alt',
                   'label', 'layout_table', 'link_name', 'list_', 'listitem', 'meta_refresh', 'meta_viewport',
                   'object_alt', 'tabindex', 'td_headers_attr', 'th_has_data_cells', 'valid_lang', 'video_caption',
                   'video_description', 'logical_tab_order', 'focusable_controls', 'interactive_element_affordance',
                   'managed_focus', 'focus_traps', 'custom_controls_labels', 'custom_controls_roles',
                   'visual_order_follows_dom', 'offscreen_content_hidden', 'heading_levels', 'use_landmarks']
Audit_list["PAudit_list"] = PAudit_list
Audit_list["BPAudit_list"]=BPAudit_list
Audit_list["SEAudit_list"] = SEAudit_list
Audit_list["AAudit_list"] = AAudit_list
Audit_list["PWAAudit_list"] = PWAAudit_list
def get_alerts(data_list,t_url,alerts):
    global PADict
    global catDict
    global Audit_list
    global catDict
    global url
    global metricToAudit
    metricToAudit = getMetricToAudit()
    url = t_url
    catDict= dict()
    PADict = Initialize1().copy()
    catDict['PAudit_list']="Performance"
    catDict['BPAudit_list'] = "Best practices"
    catDict['SEAudit_list'] = "Seo "
    catDict['AAudit_list'] = "Accessibility"
    catDict['PWAAudit_list'] = "Pwa"
    Audit_list = getAudit_list(Audit_list,data_list[0])
    globalAvg = getAvg(data_list)
    lastWeekAvg = getAvg(data_list[:7])
    lastToLastWeekAvg = getAvg(data_list[7:14])
#    four_ten_datAvg = getAvg(data_list[3:10])
    getTrend(data_list[:7],alerts)
    getAvgAlerts(globalAvg,lastWeekAvg,alerts)
    getAvgAlerts(lastToLastWeekAvg,lastWeekAvg,alerts)
    return alerts
def getAvg(data_list):
    avgVal = dict()
    for audit in Audit_list:
        for metric in Audit_list[audit]:
            avgVal[metric]=0
    if len(data_list) == 0:
        return avgVal
#    print(avgVal)
    for data in data_list:
        for audit in Audit_list:
            PAList = data['audits'][PADict[audit]]
            for metric in Audit_list[audit]:
                if PAList[metric]['score'] is not None:
                    avgVal[metric] = avgVal[metric]+PAList[metric]['score']
    for audit in Audit_list:
        for metric in Audit_list[audit]:
            avgVal[metric]/=len(data_list)
    return avgVal


def Initialize1() :
    PADict = dict()
    PADict['PAudit_list'] = "performance_audits"
    PADict['BPAudit_list'] = "best_practices_audits"
    PADict['SEAudit_list'] = "seo_audits"
    PADict['AAudit_list'] = "accessibility_audits"
    PADict['PWAAudit_list'] = "pwa_audits"
    return PADict

def getAvgAlerts(referenceAvg,threeDayAvg,alerts):
    t_alert = dict()
    t_alert['alert'] = []
    for audit in Audit_list:
        for metric in Audit_list[audit]:
            metric=metric
            if threeDayAvg[metric] < 0.9*referenceAvg[metric]:
                temp = dict()
                temp['fetchUrl'] = url
                temp['name'] = metric
                temp['category'] = catDict[audit]
                temp['scoreDiff'] = ((referenceAvg[metric]-threeDayAvg[metric])/referenceAvg[metric])*100
                if len(referenceAvg) > 7:
                    temp['class'] = 'globalAverage'
                else:
                    temp['class'] = 'LastWeekAverage'
                t_alert['alert'].append(temp)
    if len(t_alert['alert']) > 0:
        alerts.append(t_alert)

def getTrend(data_list,alerts):
    t_slope_list = dict()
    slope_list = dict()
    for audit in Audit_list:
        audit = Audit_list[audit]
        for metric in audit:
            t_slope_list[metric] = []
    for data in data_list:
        for audit in Audit_list:
            PAList = data['audits'][PADict[audit]]
            for metric in Audit_list[audit]:
                if PAList[metric]['score'] is not None:
                    t_slope_list[metric].append(PAList[metric]['score'])
    t_alert = dict()
    t_alert['alert'] = []
    for metric in t_slope_list:
        score_list = np.array(t_slope_list[metric],dtype=np.float64)
        try:
            interval_list = np.arange(1, len(score_list) + 1,dtype=np.float64)
            y_mean = mean(score_list)
            x_mean = mean(interval_list)
            divider = mean(interval_list) ** 2 - mean(interval_list ** 2)
            if divider != 0 and y_mean > 0:
                slope = ((x_mean*y_mean-mean(score_list*interval_list))/divider)/y_mean
                if slope < -0.05:
                    slope_list[metric]=slope
                    temp = dict()
                    temp['fetchUrl'] = url
                    temp['name'] = metric
                    temp['category'] = catDict[metricToAudit[metric]]
                    temp['scoreDiff'] = -slope * 100
                    temp['class'] = 'trend'
                    t_alert['alert'].append(temp)
        except:
            pass
    if len(t_alert['alert'])>0:
        alerts.append(t_alert)
#    print(slope_list)
    return slope_list

def getAudit_list(Audit_list,data_list):
    tAudit_list = dict()
    for audit in Audit_list:
        t_list = []
        PAList = data_list['audits'][PADict[audit]]
        for metric in Audit_list[audit]:
            if PAList[metric]['weight'] is not None and PAList[metric]['weight'] > 0:# and PAList[metric]['scoreDisplayMode'] == 'numeric':
                t_list.append(metric)
        tAudit_list[audit] = t_list
    return tAudit_list

def getMetricToAudit():
    metricToAudit = dict()
    for audit in Audit_list:
        PAList = Audit_list[audit]
        for metric in PAList:
            metricToAudit[metric]=audit
    return  metricToAudit