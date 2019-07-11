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
Audit_list["Performance_Audit"] = PAudit_list
Audit_list["Best_Practices_Audit"]= BPAudit_list
Audit_list["Search_Engine_Optimization_Audit"] = SEAudit_list
Audit_list["Accessibility_Audit"] = AAudit_list
Audit_list["Performance_Web_App_Audit"] = PWAAudit_list

#def get_recommendations(data_list,t_url,alerts):
def get_recommendations(data_list,t_url):
    global PADict
    global Audit_list
    global url
    url = t_url
    PADict = Initialize1().copy()
    Audit_list = getAudit_list(Audit_list, data_list[0])
    recommendations = check_weight(data_list)
    url_dict = dict()
    url_dict['fetchURL'] = url
    Merge(url_dict, recommendations)
    print(recommendations)
    return recommendations

def Merge(dict1, dict2):
    return(dict2.update(dict1))

def Initialize1() :
    PADict = dict()
    PADict['Performance_Audit'] = "performance_audits"
    PADict['Best_Practices_Audit'] = "best_practices_audits"
    PADict['Search_Engine_Optimization_Audit'] = "seo_audits"
    PADict['Accessibility_Audit'] = "accessibility_audits"
    PADict['Performance_Web_App_Audit'] = "pwa_audits"
    return PADict

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

def check_weight(data_list):
    recommendations= dict()
    recommendations['recommended_data']=[]
    avgVal =getAvg(data_list)
    for data in data_list:
        for audit in Audit_list:
            PAList = data['audits'][PADict[audit]]
            thresh_weight = 0
            count = 0
            for metric in Audit_list[audit]:
                if PAList[metric]['weight'] != 0:
                    thresh_weight = thresh_weight + PAList[metric]['weight']
                    count = count + 1
            thresh_weight = thresh_weight/count
            params = []
            audit_dict = dict()
            audit_dict['audit'] = audit
            for metric in Audit_list[audit]:
               # params
                params_list = dict()
                if(PAList[metric]['weight'] >= thresh_weight):
                    if(PAList[metric]['score'] < 0.15):
                        params_list["average_score"] = avgVal[metric]
                        params_list["weight"] = PAList[metric]['weight']
                        params_list['name'] = metric
                        params.append(params_list)
            audit_dict['recommendations']=params
            recommendations['recommended_data'].append(audit_dict)
    return recommendations
