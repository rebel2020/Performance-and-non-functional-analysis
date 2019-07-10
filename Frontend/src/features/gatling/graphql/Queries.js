import gql from 'graphql-tag';

const LIST = gql`
query parseList(
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
  )
  {    
    url
    brand
    phase
  }
}
`;

const STATS = gql`
query parseList(
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
  )
  {    
    stats
  }
}

`

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
    url
    server_stats{
      dispatcher_stats{
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
  STATS
};
