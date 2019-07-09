import React,{Fragment} from 'react';
import HighChartBar from '../highchart_bar/index';
import StatsComponent from '../Stats_Component/index';
import HighChartPie from '../highchart_pie'
import HighStock from '../highchartStocks'
import 'src/main.scss';

const Stats = props => {
    return (
    <Fragment>
        <div className="row">    
            <div className="col m6">
                <HighChartPie/>
            </div>
            <div className="col m6">
                <HighChartBar
                    id = {`bar`}
                    group1 = {[[0, 100]]}
                    group2 = {[[1, 75]]}
                    group3 = {[[2, 50]]}
                    group4 = {[[3, 25]]}
                />            
            </div>
        </div>
        <div className="row">
            <div className="col m6 ">
                    <HighStock id={`publisher${props.id}`} title={"Publisher stats"}
                    cpu={[10,60,100]} ram={[43,100,73]} jvm={[67,22,139]}/>
            </div>
            <div className="col m6">
                <HighStock id={`dispatcher${props.id}`} title={"Dispatcher stats"}
                cpu={[10,60,100]} ram={[43,100,73]} jvm={[67,22,139]}/>
            </div>
        </div>
        <hr/>
    </Fragment>
  );
};

export {Stats};
