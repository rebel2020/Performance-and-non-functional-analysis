import React from 'react';
import Button from '../button/index';

import './collapse_styles.scss';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }
  render() {
     const {history} = this.props
    console.log(history);
    return (
      <div className="collapse_container" >
        <div onClick={e => this.togglePanel(e)} className="header">
          {' '}
          Audit_Name <div className="score" >Score: NN</div>
        </div>
        {this.state.open ? <div className="content"> Content of audit displayed here <br/><br/> <Button className="collapse_link" onClick={()=>history.push('/lighthouse/performance')}>Link_to_graph</Button>  </div> : null}{' '}
      </div>
    );
  }
} 

export default Collapsible;
