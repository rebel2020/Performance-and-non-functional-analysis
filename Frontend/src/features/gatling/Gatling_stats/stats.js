import React,{Fragment} from 'react';
import HighChartBar from '../highchart_bar/index';
import StatsComponent from '../Stats_Component/index';
import 'src/main.scss';

const Stats = props => {
    console.log(props.group4.count);
    return (
    <Fragment>
      <div className="row">
        <div className="col m7">
          <HighChartBar
           group1 = {[[0, props.group1.count]]}
           group2 = {[[1, props.group2.count]]}
           group3 = {[[2, props.group3.count]]}
           group4 = {[[3, props.group4.count]]}
          />
        </div>
        <div className="col m5">
          <StatsComponent 
            numberOfRequests={(props)?props.numberOfRequests:{ok:"",ko:"",total:""}}
            dispatcherStats={(props)?props.dispatcher_stats:{
              0:{cpu: "", ram: "", jvm_heap: 0,},
              1:{cpu: "", ram: "", jvm_heap: 0,},
              2:{cpu: "", ram: "", jvm_heap: 0,},
            }}
            publisherStats={(props)?props.publisher_stats:{
              0:{cpu: "", ram: "", jvm_heap: 0,},
              1:{cpu: "", ram: "", jvm_heap: 0,},
              2:{cpu: "", ram: "", jvm_heap: 0,},
            }}
          />
        </div>
      </div>
      <hr/>
    </Fragment>
  );
};

export {Stats};
