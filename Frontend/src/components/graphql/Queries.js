import gql from 'graphql-tag';
import {
  performanceAuditFrag,
  bestPracticeAuditFrag,
  pwaAuditFrag,
  seoAuditFrag
} from './fragments';

const AVG_LIGHTHOUSE_SCORES = gql`
  {
    lighthousedata {
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

const PERFORMANCE_AUDITS = gql`
  {
    lighthousedata {
      audits {
        performance_audits {
          ...performanceAudits
        }
      }
    }
  }
  ${performanceAuditFrag.audits}
`;

const BESTPRACTICE_AUDITS = gql`
  {
    lighthousedata {
      audits {
        best_practices_audits {
          ...bestPracticeAudits
        }
      }
    }
  }
  ${bestPracticeAuditFrag.audits}
`;

const PWA_AUDITS = gql`
  {
    lighthousedata {
      _id
      audits {
        pwa_audits {
          ...pwaAudits
        }
      }
    }
  }
  ${pwaAuditFrag.audits}
`;

const SEO_AUDITS = gql`
  {
    lighthousedata {
      _id
      audits {
        seo_audits {
          ...seoAudits
        }
      }
    }
  }
  ${seoAuditFrag.audits}
`;

const getQuery = value => {
  return gql`
  query getdetails($finalUrl:String,$fetchTimeStart:String,$fetchTimeEnd:String){
    lighthousedata(
      finalUrl:$finalUrl
      fetchTimeStart:$fetchTimeStart
      fetchTimeEnd:$fetchTimeEnd    
    ){ 
      _id
      audits {
        ${value}
      }
    }
  }
  `;
};

export {
  AVG_LIGHTHOUSE_SCORES,
  PERFORMANCE_AUDITS,
  BESTPRACTICE_AUDITS,
  PWA_AUDITS,
  SEO_AUDITS,
  getQuery
};
