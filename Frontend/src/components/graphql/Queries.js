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
          weight
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
  getPages
};
