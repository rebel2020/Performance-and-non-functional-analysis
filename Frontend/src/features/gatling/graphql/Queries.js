import gql from 'graphql-tag';

const LIST = gql`
query {
  gatlingdata{
    url
  }
}
`;

const GATLING = gql`
query GatlingData(
  $finalUrl: String
  $fetchTimeStart: String
  $fetchTimeEnd: String
  $brand: String
  $phase: String
){
  gatlingdata(
    url: $finalUrl
    fetchTimeStart: $fetchTimeStart
    fetchTimeEnd: $fetchTimeEnd
    brand: $brand
    phase: $phase
  ){
    stats
    fetchTime
    server_stats{
      author_stats{
        cpu
        ram
        jvm_heap
      }
      publisher_stats{
        cpu
        ram
        jvm_heap
      }
    }
  }
}
`;

export {
  GATLING,
  LIST,
};
