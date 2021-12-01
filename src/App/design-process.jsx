import React,{Component} from 'react'
import "../Css/design-process.css";
import { Modal } from "react-responsive-modal";



class DesignProcess extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div >
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2 className="design-process-heading">DESIGN PROCESS</h2>
          <p>
            Content
            asasd
            asdaSD
          </p>
        </Modal>
      </div>
    );
  }
}

export default DesignProcess