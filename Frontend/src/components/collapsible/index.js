import React from 'react';

const Collapsible = props => {
  const { metric, history, k, title, desc, score, weight, nv, link } = props;
  console.log(title);
  return (
    <>
      <div className="row">
        <div className="collapsible col m11">
          <input type="checkbox" id={`collapsible-${k}`} />
          <label htmlFor={`collapsible-${k}`}>{title}</label>
          <div className={`collapsible-${k}-area`}>
            <div className="row">
              <p className=" col m6">{desc}</p>
              <p className="text-right col m6">
                Score:
                {score}
              </p>
            </div>
            <br />
            <div className="row">
              <p className=" col m6">
                Weightage:
                {weight}
              </p>
              <p className="text-right col m6">
                NumericValue:
                {nv}
              </p>
            </div>
            <br />
            <div className="row">
              <button
                type="button"
                className="btn--raised left col m2"
                onClick={() =>
                  history.push({
                    pathname: `/lighthouse/${metric}`,
                    search: `audit=${title}`,
                    audit: title
                  })
                }
              >
                Graph
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// import Button from '../button/index';

// import './collapse_styles.scss';

// class Collapsible extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//     this.togglePanel = this.togglePanel.bind(this);
//   }
//   togglePanel(e) {
//     this.setState({ open: !this.state.open });
//   }
//   render() {
//     const { history } = this.props;
//     console.log(history);
//     return (
//       <>
//         <div className="row">
//           <div className="collapse_container col m6">
//             <div onClick={e => this.togglePanel(e)} className="header">
//               {' '}
//               Audit_Name <div className="score">Score: NN</div>
//             </div>
//             {this.state.open ? (
//               <div className="content">
//                 {' '}
//                 Content of audit displayed here <br />
//                 <br />{' '}
//                 <Button
//                   className="collapse_link"
//                   onClick={() => history.push('/lighthouse/performance')}
//                 >
//                   Link_to_graph
//                 </Button>{' '}
//               </div>
//             ) : null}{' '}
//           </div>

//           <div className="collapse_container col m6">
//             <div  className="header">
//               {' '}
//               Audit_Name <div className="score">Score: NN</div>
//             </div>
//             {/* {this.state.open ? (
//               <div className="content">
//                 {' '}
//                 Content of audit displayed here <br />
//                 <br />{' '}
//                 <Button
//                   className="collapse_link"
//                   onClick={() => history.push('/lighthouse/performance')}
//                 >
//                   Link_to_graph
//                 </Button>{' '}
//               </div>
//             ) : null}{' '} */}
//           </div>
//         </div>
//         <div className="row">
//           <div className="collapse_container col m6">
//             <div className="header">
//               {' '}
//               Audit_Name <div className="score">Score: NN</div>
//             </div>
//           </div>

//           <div className="collapse_container col m6">
//             <div className="header">
//               {' '}
//               Audit_Name <div className="score">Score: NN</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

export default Collapsible;
