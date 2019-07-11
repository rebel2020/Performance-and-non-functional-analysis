import React, { Fragment } from 'react';
import HighChartBar from '../highchart_bar/index';
import StatsComponent from '../Stats_Component/index';
import HighStock from '../highchartStocks';
import './styles.scss';
import searchParams from '../../../utilities/searchParams';

const Stats = props => {
    const {phase,brand} = props;
    const {history} = props;
    let check = <></>
    if(props.meanResponseTime){
        check = <Fragment> <div className="row meannumreqrow">
        <div className="col m3 meannumreqtext">Mean Response Time</div>
        <div className="col m3">{props.meanResponseTime.ok}</div>
        <div className="col m3">{props.meanResponseTime.ko}</div>
        <div className="col m3">{props.meanResponseTime.total}</div>
      </div>
      <div className="row meanrest">
        <div className="col m3 meannumreqtext">Mean Number of Requests Per Second</div>
        <div className="col m3">{parseInt(props.meanNumberOfRequestsPerSecond.ok)}</div>
        <div className="col m3">{parseInt(props.meanNumberOfRequestsPerSecond.ko)}</div>
        <div className="col m3">{parseInt(props.meanNumberOfRequestsPerSecond.total)}</div>
      </div> </Fragment>  
    }
    return (
    <Fragment>
      <div className="row">
        <div className="col m6 statscard text-center">
          <div className="row urlrow">
            <div className="col m6">
              <span className="urltext">Env :</span> {phase?phase:"All"}
            </div>
            <div className="col m6">
              <span className="urltext">Track :</span> SDP
            </div>
          </div>
          <div className="row urlrow">
            <div className="col m6">
              <span className="urltext">Brand :</span> {brand?brand:"All"}
            </div>
            <div className="col m6">
              <span className="urltext">Type :</span> Prod
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col m3" />
            <div className="col m3 successtext">Success</div>
            <div className="col m3 failedtext">Failed</div>
            <div className="col m3 totaltext">Total</div>
          </div>
          <br />
          <div className="row numreqrow">
            <div className="col m3 numreqtext">Number of Requests</div>
            <div className="col m3">{props.numberOfRequests.ok}</div>
            <div className="col m3">{props.numberOfRequests.ko}</div>
            <div className="col m3">{props.numberOfRequests.total}</div>
          </div>
          <br />
          {check}
        </div>
        <div className="col m6">
          <HighChartBar
            id={`bar`}
            group1={[[0, props.group1.count]]}
            group2={[[1, props.group2.count]]}
            group3={[[2, props.group3.count]]}
            group4={[[3, props.group4.count]]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col m6 ">
          <HighStock
            id={`publisher`}
            title={'Publisher stats'}
            cpu={[
              props.dispatcher_stats[0].cpu,
              props.dispatcher_stats[1].cpu,
              props.dispatcher_stats[2].cpu
            ]}
            ram={[
              props.dispatcher_stats[0].ram,
              props.dispatcher_stats[1].ram,
              props.dispatcher_stats[2].ram
            ]}
            // jvm={[
            //     props.dispatcher_stats[0].jvm_heap,
            //     props.dispatcher_stats[1].jvm_heap,
            //     props.dispatcher_stats[2].jvm_heap,]}
          />
        </div>
        <div className="col m6">
          <HighStock
            id={`dispatcher`}
            title={'Dispatcher stats'}
            cpu={[
              props.publisher_stats[0].cpu,
              props.publisher_stats[1].cpu,
              props.publisher_stats[2].cpu
            ]}
            ram={[
              props.publisher_stats[0].ram,
              props.publisher_stats[1].ram,
              props.publisher_stats[2].ram
            ]}
            // jvm={[props.publisher_stats[0].jvm_heap,
            //       props.publisher_stats[1].jvm_heap,
            //       props.publisher_stats[2].jvm_heap,]}
          />
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export { Stats };