import React,{Fragment} from 'react';
import HighChartBar from '../highchart_bar/index';
import StatsComponent from '../Stats_Component/index';
import HighStock from '../highchartStocks'
import 'src/main.scss';

const Stats = props => {
    return (
    <Fragment>
        <div className="row">    
            <div className="col m6">
                <div className="row">    
                    <div className="col m4">
                        URL : 
                    </div>
                    <div className="col m8">
                        {props.url}
                    </div>
                </div>
                <div className="row">    
                    <div className="col m3">
                    </div>
                    <div className="col m3">
                        Success
                    </div>
                    <div className="col m3">
                        Failed
                    </div>
                    <div className="col m3">
                        Total
                    </div>
                </div>
                <div className="row">    
                    <div className="col m3">
                        Number of Requests 
                    </div>
                    <div className="col m3">
                        {props.numberOfRequests.ok}
                    </div>
                    <div className="col m3">
                        {props.numberOfRequests.ko}
                    </div>
                    <div className="col m3">
                        {props.numberOfRequests.total}
                    </div>            
                </div>
                <div className="row">    
                    <div className="col m3">
                        Mean Number of Requests Per Second 
                    </div>
                    <div className="col m3">
                        {props.meanResponseTime.ok}
                    </div>
                    <div className="col m3">
                        {props.meanResponseTime.ko}
                    </div>
                    <div className="col m3">
                        {props.meanResponseTime.total}
                    </div>
                </div>
            </div>
            <div className="col m6">
                <HighChartBar
                    id = {`bar${props.id}`}
                    group1 = {[[0, props.group1.count]]}
                    group2 = {[[1, props.group2.count]]}
                    group3 = {[[2, props.group3.count]]}
                    group4 = {[[3, props.group4.count]]}
                />            
            </div>
        </div>
        <div className="row">
            <div className="col m6 ">
                    <HighStock id={`publisher${props.id}`} title={"Publisher stats"} 
                        cpu={[props.dispatcher_stats[0].cpu,
                            props.dispatcher_stats[1].cpu,
                            props.dispatcher_stats[2].cpu]} 
                        ram={[
                            props.dispatcher_stats[0].ram,
                            props.dispatcher_stats[1].ram,
                            props.dispatcher_stats[2].ram,]} 
                        // jvm={[
                        //     props.dispatcher_stats[0].jvm_heap,
                        //     props.dispatcher_stats[1].jvm_heap,
                        //     props.dispatcher_stats[2].jvm_heap,]}
                        jvm={[92,97,43]}

                        />
            </div>
            <div className="col m6">
                <HighStock id={`dispatcher${props.id}`} title={"Dispatcher stats"}
                        cpu={[props.publisher_stats[0].cpu,
                              props.publisher_stats[1].cpu,
                              props.publisher_stats[2].cpu]} 
                        ram={[props.publisher_stats[0].ram,
                              props.publisher_stats[1].ram,
                              props.publisher_stats[2].ram,]} 
                        // jvm={[props.publisher_stats[0].jvm_heap,
                        //       props.publisher_stats[1].jvm_heap,
                        //       props.publisher_stats[2].jvm_heap,]}
                        jvm={[10,97,43]}
                        />
            </div>
        </div>
        <hr/>
    </Fragment>
  );
};

export {Stats};
