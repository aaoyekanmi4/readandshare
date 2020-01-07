import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return ReactDOM.createPortal(
      <div 
      onClick={this.props.onClose}
        className="ui dimmer modals visible active"
        > 
        <div  
          onClick ={(e) => e.stopPropagation()} 
          className="ui standard modal visible active"

          style={{width:'30%', padding:50}}>
          {this.props.children}
         
        
        
        </div>
      </div>, document.getElementById('modal')
    );
  }
}



export default Modal;