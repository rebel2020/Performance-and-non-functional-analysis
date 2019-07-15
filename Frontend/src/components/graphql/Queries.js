import gql from 'graphql-tag';
import {
  performanceAuditFrag,
  accessibilityAuditFrag,
  bestPracticeAuditFrag,
  pwaAuditFrag,
  seoAuditFrag
} from './fragments';

const mapper = {
  performance: performanceAuditFrag,
  accessibility: accessibilityAuditFrag,
  best_practices: bestPracticeAuditFrag,
  seo: seoAuditFrag,
  pwa: pwaAuditFrag
};

const AVG_SCORES = gql`
  query average(
    $finalUrl: String
    $fetchTimeStart: String
    $fetchTimeEnd: String
    $brand: String
    $project: String
    $phase: String
  ) {
    average(
      finalUrl: $finalUrl
      fetchTimeStart: $fetchTimeStart
      fetchTimeEnd: $fetchTimeEnd
      brand: $brand
      project: $project
      phase: $phase
    ) {
      fetchDate {
        day
        month
        year
      }
      performanceAverage
      accessibilityAverage
      seoAverage
      pwaAverage
      bestPracticesAverage
    }
  }
`;

const RECOMMENDATION_URL = gql`
  {
    recommendation {
      fetchURL
      recommend {
        audit
        recommendations {
          name
          weight
          average_score
        }
      }
    }
  }
`;

const AVG_LIGHTHOUSE_SCORES = gql`
  query avgLightHouseScores(
    $finalUrl: String
    $fetchTimeStart: String
    $fetchTimeEnd: String
    $brand: String
    $project: String
    $phase: String
  ) {
    lighthousedata(
      finalUrl: $finalUrl
      fetchTimeStart: $fetchTimeStart
      fetchTimeEnd: $fetchTimeEnd
      brand: $brand
      project: $project
      phase: $phase
    ) {
      _id
      audits {
        performance_audits {
          score
        }
        accessibility_audits {
          score
        }
        best_practices_audits {
          score
        }
        pwa_audits {
          score
        }
        seo_audits {
          score
        }
      }
    }
  }
`;
const getRecommendations = (audit, metric) => {
  return gql`
    {
      recommendationDescription {
        ${audit} {
          ${metric}
        }
      }  
    }
  `;
};
const LIGHTHOUSE_RECOMMENDATIONS = gql`
  {
    recommendationDescription {
      PerformanceAuditRecommendations {
        first_contentful_paint
        first_meaningful_paint
        speed_index
        interactive
        first_cpu_idle
      }
      SEOAuditRecommendations {
        viewport
        document_title
        meta_description
        http_status_code
        link_text
        is_crawlable
        robots_txt
        image_alt
        hreflang
        canonical
        font_size
        plugins
        tap_targets
      }
      PWAAuditRecommendations {
        load_fast_enough_for_pwa
        works_offline
        offline_start_url
        is_on_https
        service_worker
        installable_manifest
        redirects_http
        splash_screen
        themed_omnibox
        content_width
        viewport
        without_javascript
        pwa_cross_browser
        pwa_page_transitions
        pwa_each_page_has_url
      }

      BPAAuditRecommendations {
        appcache_manifest
        is_on_https
        uses_http2
        uses_passive_event_listeners
        no_document_write
        external_anchors_use_rel_noopener
        geolocation_on_start
        doctype
        no_vulnerable_libraries
        notification_on_start
        password_inputs_can_be_pasted_into
        image_aspect_ratio
      }
      AccessibilityAuditRecommendations {
        aria_allowed_attr
        aria_required_attr
        aria_required_children
        aria_required_parent
        aria_roles
        aria_valid_attr_value
        aria_valid_attr
        button_name
        color_contrast
        document_title
        html_has_lang
        html_lang_valid
        image_alt
        label
        meta_viewport
        tabindex
        custom_controls_labels
        visual_order_follows_dom
        offscreen_content_hidden
        use_landmarks
      }
    }
  }
`;
const getAudits = value => {
  const val = mapper[value];
  console.log(val, value);
  return gql`
  query Audits($finalUrl:String,$fetchTimeStart:String,$fetchTimeEnd:String,
    $brand:String,$project:String,$phase:String){
    lighthousedata(
      finalUrl:$finalUrl
      fetchTimeStart:$fetchTimeStart
      fetchTimeEnd:$fetchTimeEnd
      brand:$brand
      project:$project
      phase:$phase
    ){
      audits {
        ${value}_audits {
          ...${value}Audits
        }
      }
    }
  }
  ${val.audits}
`;
};

const getPages = value => {
  return gql`
  query Pages($finalUrl:String,$fetchTimeStart:String,$fetchTimeEnd:String,
    $brand:String,$project:String,$phase:String){
    lighthousedata(
      finalUrl:$finalUrl
      fetchTimeStart:$fetchTimeStart
      fetchTimeEnd:$fetchTimeEnd
      brand:$brand
      project:$project
      phase:$phase
    ){
      fetchTime
      finalUrl
      audits {
        ${value}_audits {
          score
        }
      }
    }
  }
`;
};

const getQuery = value => {
  return gql`
  query getdetails($finalUrl:String,$fetchTimeStart:String,$fetchTimeEnd:String,
    $brand:String,$project:String,$phase:String){
    lighthousedata(
      finalUrl:$finalUrl
      fetchTimeStart:$fetchTimeStart
      fetchTimeEnd:$fetchTimeEnd    
      brand:$brand
      project:$project
      phase:$phase

    ){ 
      _id
      fetchTime
      audits {
        ${value}
      }
    }
  }
  `;
};
const lighthouse_Audit_Score = value => {
  return gql`
    {
      lighthousedata{
        audits{
          performance_audits{
            ${value}{
              score
              weight
            }
          }
        }
      }
     
    }
    `;
};

const LIST = gql`
  query {
    lighthousedata {
      phase
      brand
      project
      finalUrl
    }
  }
`;

export {
  AVG_LIGHTHOUSE_SCORES,
  getQuery,
  getAudits,
  LIST,
  AVG_SCORES,
  LIGHTHOUSE_RECOMMENDATIONS,
  lighthouse_Audit_Score,
  RECOMMENDATION_URL,
  getPages,
  getRecommendations
};
