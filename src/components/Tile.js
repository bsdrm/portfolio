import React from 'react';
import { Flex } from 'rebass'
import styled from 'styled-components';
import Card from './Card';
import bmgIcon from '../images/bemygym_icon.png';
import portfolioIcon from '../images/portfolio_icon.png';
import truckIcon from '../images/truck_icon.png';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            isCardOpen: false,
        }

    }

    imageUrl = (param) => {
        switch(param) {
            case 'BeMyGym':
              return bmgIcon;
            case 'GarbageTruck':
              return truckIcon;
            case 'Portfolio':
              return portfolioIcon;
          }
    }

    renderIcon = () => {
        return <img src={this.imageUrl(this.state.type)} />;
    }
    
    toggleCard = e => {
        this.setState({
            isCardOpen: !this.state.isCardOpen
        })
      };

    render() { 
        return <div>
            <TileWrapper onClick={e => {this.toggleCard(e)}}>
                {this.state.type === 'SPA' ? <p>spa</p> : this.renderIcon()}
            </TileWrapper>
            {this.state.isCardOpen && <Card isOpen={this.state.isCardOpen} type={this.state.type} onClose={this.toggleCard}/>}
        </div>;
    }
}
 
export default Tile;

const TileWrapper = styled(Flex)`
    width: 100px;
    height: 100px;
    background-color: #F6D2D4;
    border-radius: 10px;
    cursor: pointer;

    img, p {
        width: 50px;
        height: 50px;
        margin: auto;
        opacity: 0.6;
        text-align: center;
        filter: blur(0.6px);
    }

    img:hover, p:hover {
        opacity: 1.0;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: #B13342;
    }

`