import React from "react";
import PropTypes from "prop-types";
import { Flex } from 'rebass'
import styled, {css} from 'styled-components';
import bmg from '../images/bmg.PNG'
import truck from '../images/truck.gif'
import port from '../images/p.jpg'
import spa from '../images/spa.PNG'

class Card extends React.Component {
    
  onClose = e => {
    e.preventDefault();
    this.props.onClose && this.props.onClose(e);
    console.log(this.props.type)
  };

  renderSwitch(param) {
    switch(param) {
    case 'BeMyGym':
        return (
            <div className="bemygym">
                <div className="links">
                    <a href="https://github.com/bsdrm/ByMyGym" target="_blank">CODE</a>
                    <a href="https://www.figma.com/file/7166OS6rAuWPOySJXLvErk/Early-draft?node-id=65%3A3604" target="_blank">FIGMA</a>
                    <a href="https://bemygym.projektstudencki.pl/" target="_blank">LIVE</a>
                </div>
                <h2>BeMyGym</h2>
                <p className="info">A Web App for booking gyms in Poznań<br/>
                React | Firebase</p>
            </div>
        );
    case 'GarbageTruck':
        return (
        <div className="garbage">
            <div className="links">
                <a href="https://github.com/bsdrm/autw" target="_blank">CODE</a>
                <a href="https://gfycat.com/bestlonebullfrog" target="_blank">GIF</a>
            </div>
            <h2>Intelligent Garbage Truck</h2>
            <p className="info">A*Star implementation | Python | Pygame | Pyke</p>
        </div>
    );
    case 'Portfolio':
        return (
            <div className="portfolio">
                <div className="links">
                    <a href="https://github.com/bsdrm/portfolio" target="_blank">CODE</a>
                    <a href="https://www.figma.com/file/osEvOD8OvyHZ6NVv9mjG8t/Portfolio-draft?node-id=0%3A1" target="_blank">FIGMA</a>
                    <a href="https://vladthesoviet-bsdrm.herokuapp.com/" target="_blank">LIVE</a>
                </div>
                <h2>Portfolio</h2>
                <p className="info">What you're seeing rn ^^ | React</p>
            </div>
        );
    case 'SPA':
        return (
            <div className="spa">
                <div className="links">
                    <a href="https://github.com/bsdrm/SPA-back" target="_blank">CODE</a>
                    <a href="https://imgur.com/a/mIu2lI5" target="_blank">PIC</a>
                </div>
                <h2>SPA</h2>
                <p className="info">Simple ManyToMany SPA<br />Employees can be assigned to multiple projects<br />Java | React | Spring | REST | MySQL</p>
            </div>
        );
    }
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <div>
        <CardWrapper type={this.props.type}>
          <p className="close" onClick={this.onClose}>
            x
          </p>
          <div>{this.renderSwitch(this.props.type)}</div>
        </CardWrapper>
      </div>
    );
  }
}

Card.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

export default Card;

const CardWrapper = styled(Flex)`
    width: 220px;
    height: 220px;
    background-color: #F6D2D4;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    padding: 10px;

    ${props => {
        switch (props.type) {
            case 'BeMyGym':
                return css`transform: translateY(-100px)`;
            case 'SPA':
                return css`transform: translateY(-220px)`;
            case 'GarbageTruck':
                return css`transform: translate(-120px, -100px)`;
            case 'Portfolio':
                return css`transform: translate(-120px, -220px)`;
        }
    }};

    .close {
        top: -10px;
        right: 10px;
        position: absolute;
        cursor: pointer;
        color: #B13342;
    }

    .links {
        display: flex;
        width: 100px;
        margin-bottom: 10px;
        justify-items: space-between;
    }

    .links a {
        text-decoration: none;
        color: #B13342;
        opacity: 0.6;
    }

    .links a:hover {
        opacity: 1;
    }

    .links a:nth-last-child(-n+2) {
        margin-left: 5px;
    }

    h2, .info {
        margin: 0;
        color: #B13342;
        opacity: 0.6;
    }
    
    .info {
        margin-top: 15px;
        font-size: 10px;
        font-family: sans-serif;
    }

    .bemygym {
        display: flex;
        flex-direction: column;
    }


    .garbage .links a:nth-last-child(2) {
        margin-left: 0px;
    }

    .spa .links a:nth-last-child(2) {
        margin-left: 0px;
    }
`
