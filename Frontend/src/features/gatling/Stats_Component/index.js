import React,{useState,useEffect} from 'react';
import './styles.scss';

const StatsComponent = props => {
  const [nor, setNOR] = useState({ok:"",ko:"",total:""});
  const [ds,setDs] = useState({
    0:{cpu: "", ram: "", jvm_heap: 0,},
    1:{cpu: "", ram: "", jvm_heap: 0,},
    2:{cpu: "", ram: "", jvm_heap: 0,},
  });
  const [ps,setPs] = useState({
    0:{cpu: "", ram: "", jvm_heap: 0,},
    1:{cpu: "", ram: "", jvm_heap: 0,},
    2:{cpu: "", ram: "", jvm_heap: 0,},
  });

  // console.log(props);

  if(props.numberOfRequests !== nor){
    setNOR(props.numberOfRequests);
  }
  if(props.dispatcherStats !== ds){
    setDs(props.dispatcherStats);
  }

  if(props.publisherStats !== ps){
    setPs(props.publisherStats);
  }
  return (
    <>
      <div className="container statcomp text-center">
        <h4>Number of requests</h4>
        <br />
        <div className="row">
          <div className="col m4">Passed: {nor.ok}</div>
          <div className="col m4">Failed: {nor.ko}</div>
          <div className="col m4">Total: {nor.total}</div>
        </div>
      </div>
      <br />
      <br />
      <div className="container statcomp text-center">
        <h4>Publisher Stats</h4>
        <br />
        <div className="row">
          <div className="col m3"> </div>
          <div className="col m3">CPU</div>
          <div className="col m3">RAM</div>
          <div className="col m3">JVM</div>
        </div>
        <div className="row">          
          <div className="col m3"> <h5> Start </h5></div>
          <div className="col m3"> {ps[0].cpu}</div>
          <div className="col m3"> {ps[0].ram}</div>
          <div className="col m3"> {ps[0].jvm_heap}</div>
        </div>
        <div className="row">
          <div className="col m3"><h5> RamPup </h5> </div>
          <div className="col m3"> {ps[1].cpu}</div>
          <div className="col m3"> {ps[1].ram}</div>
          <div className="col m3"> {ps[1].jvm_heap}</div>
        </div>
        <div className="row">
          <div className="col m3"><h5>Peak</h5></div>
          <div className="col m3"> {ps[2].cpu}</div>
          <div className="col m3"> {ps[2].ram}</div>
          <div className="col m3"> {ps[2].jvm_heap}</div>
        </div>
      </div>
      <br />
      <br />
      <div className="container statcomp text-center">
        <h4>Dispatcher Stats</h4>
        <br />
        <div className="row">
          <div className="col m3"> </div>
          <div className="col m3">CPU</div>
          <div className="col m3">RAM</div>
          <div className="col m3">JVM</div>
        </div>
        <div className="row">          
          <div className="col m3"> <h5> Start </h5></div>
          <div className="col m3"> {ds[0].cpu}</div>
          <div className="col m3"> {ds[0].ram}</div>
          <div className="col m3"> {ds[0].jvm_heap}</div>
        </div>
        <div className="row">
          <div className="col m3"><h5> RamPup </h5> </div>
          <div className="col m3"> {ds[1].cpu}</div>
          <div className="col m3"> {ds[1].ram}</div>
          <div className="col m3"> {ds[1].jvm_heap}</div>
        </div>
        <div className="row">
          <div className="col m3"><h5>Peak</h5></div>
          <div className="col m3"> {ds[2].cpu}</div>
          <div className="col m3"> {ds[2].ram}</div>
          <div className="col m3"> {ds[2].jvm_heap}</div>
        </div>
      </div>
    </>
  );
};

export default StatsComponent;
