import gql from 'graphql-tag';
import {
  performanceAuditFrag,
  bestPracticeAuditFrag,
  pwaAuditFrag,
  seoAuditFrag
} from './fragments';

const AVG_LIGHTHOUSE_SCORES = gql`
  query avgLightHouseScores($finalUrl: String, $fetchTimeStart: String, $fetchTimeEnd: String) {
    lighthousedata(
      finalUrl: $finalUrl
      fetchTimeStart: $fetchTimeStart
      fetchTimeEnd: $fetchTimeEnd
    ) {
      _id
      audits {
        performance_audits {
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

const LIGHTHOUSE_RECOMMENDATIONS = gql`
  {
    recommendation {
      PerformanceAuditRecommendations {
        first_cpu_idle
        first_contentful_paint
        first_meaningful_paint
        speed_index
        interactive
      }
    }
  }
`;

const mapper = {
  performance: performanceAuditFrag,
  best_practices: bestPracticeAuditFrag,
  seo: seoAuditFrag,
  pwa: pwaAuditFrag
};
const getAudits = value => {
  const val = mapper[value];
  console.log('yo', val);
  return gql`
  query performanceAudits($finalUrl:String,$fetchTimeStart:String,$fetchTimeEnd:String){
    lighthousedata(
      finalUrl:$finalUrl
      fetchTimeStart:$fetchTimeStart
      fetchTimeEnd:$fetchTimeEnd
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

const getQuery = value => {
  return gql`
  query getdetails($finalUrl:String,$fetchTimeStart:String,$fetchTimeEnd:String){
    lighthousedata(
      finalUrl:$finalUrl
      fetchTimeStart:$fetchTimeStart
      fetchTimeEnd:$fetchTimeEnd    
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

export { AVG_LIGHTHOUSE_SCORES, getQuery, getAudits, LIGHTHOUSE_RECOMMENDATIONS };
