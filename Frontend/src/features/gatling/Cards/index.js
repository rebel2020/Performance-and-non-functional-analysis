import React,{Fragment} from 'react';
import { search } from '../utils/search';

const Cards = props => {
    const {val,history,values} = props;
    return <Fragment>
        <div className="col s10 m5 l3 pageCard" key={val.url}
              onClick = {
                ()=>{
                  history.push({
                    search:search({ ...values, finalUrl: val.url })
                  })
                }
              }> 
           <div className="row"> 
              <div className="col m1"></div>
              {val.url} 
           </div>
           <div className="row"> 
              <div className="col m1"></div>
              <div className="col m8"> Mean Response Time: </div>
              <div className="col m3"> {val.meanResponseTime.total} </div>
           </div>
           <div className="row"> 
              <div className="col m1"></div>
              <div className="col m8"> Number of Requests: </div>
              <div className="col m3"> {val.numberOfRequests.total} </div>
           </div>
           <div className="row"> 
              <div className="col m1"></div>
              <div className="col m8"> Mean No Requests/Second: </div>
              <div className="col m3"> {parseInt(val.meanNumberOfRequestsPerSecond.total)} </div>
           </div>
          <br /> 
       </div>
    </Fragment>
}

export {Cards}