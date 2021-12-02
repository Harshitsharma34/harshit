import React, { Component } from "react";
import "../Css/dumpyarddiv.css";
import "../Css/design-process.css";
import { Modal } from "react-responsive-modal";
import divider from "../Assets/divider.svg";
import CloseButton from "../Assets/Close button2.svg";
import { Link } from "react-router-dom";
import dumpyardImage from "../Assets/Dumpyard Image.png";

class DumpardDiv extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    const closeIcon = (
      <svg
        width="50"
        height="50"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35.5"
          cy="35.5"
          r="35.5"
          fill="#4A4B6A"
          fill-opacity="0.43"
        />
        <path d="M21.0645 21.0645L50 50" stroke="#E1E2FF" stroke-width="5" />
        <path d="M21.0645 50L50 21.0644" stroke="#E1E2FF" stroke-width="5" />
      </svg>
    );

    return (
      <div>
        <section className="dumpyard-sec">
          <div className="dump-div">
            <h1 className="dump-text">DUMPYARD</h1>
            <p style={{ lineHeight: "25px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              malesuada hendrerit nibh, non vehicula enim hendrerit eget.
              Suspendisse eget ultrices elit. Mauris odio nunc
            </p>
            <Link to="/dumpyard" className="button1">
              Take a look
            </Link>
            <a className="button2" onClick={this.onOpenModal}>
              Design Process
            </a>
            <img className="header-img"  src={dumpyardImage}></img>
          </div>
          <Modal
            classNames="design-process-modal"
            open={open}
            onClose={this.onCloseModal}
            showCloseIcon={true}
            closeIcon={closeIcon}
          >
            <h2 className="design-process-heading">DESIGN PROCESS</h2>
            <div className="process-div1"></div>
            <div className="process-div1"></div>
            <div className="process-div1"></div>
            <div className="process-close">
              <img className="divider" src={divider} alt="divider" />
              <a className="closeButton" onClick={this.onCloseModal}>
                Close{" "}
                <img
                  className="closeButton2"
                  src={CloseButton}
                  alt="close"
                  style={{ color: "white" }}
                />
              </a>
            </div>
          </Modal>
        </section>
      </div>
    );
  }
}

export default DumpardDiv;
