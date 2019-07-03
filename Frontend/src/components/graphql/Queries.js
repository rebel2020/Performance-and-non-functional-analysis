import gql from 'graphql-tag';
import {
  performanceAuditFrag,
  bestPracticeAuditFrag,
  pwaAuditFrag,
  seoAuditFrag
} from './fragments';

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
const mapper = {
  performance: performanceAuditFrag,
  best_practices: bestPracticeAuditFrag,
  seo: seoAuditFrag,
  pwa: pwaAuditFrag
};
const getAudits = value => {
  const val = mapper[value];
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

const LIST = gql`
  query {  
    lighthousedata{
      phase
      brand
      project
      finalUrl
    }
}
`
const GATLING = gql`
  query {
    gatlingdata {
      stats
    }
  }
`;

export {
  AVG_LIGHTHOUSE_SCORES,
  getQuery,
  getAudits,
  GATLING,
  LIST
};