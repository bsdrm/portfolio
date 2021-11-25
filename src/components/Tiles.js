import React from 'react';
import Tile from './Tile';
import styled from 'styled-components';

class Tiles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            types: ['BeMyGym', 'GarbageTruck', 'SPA', 'Portfolio']
        }
    }

    render() { 
        return <>
        <TilesWrapper>
            {this.state.types.map((type, index) => (
                <Tile type={type} key={index}/>
            ))}
        </TilesWrapper>
        </>;
    }
}
 
export default Tiles;


const TilesWrapper = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 0.5fr 0.5fr; 
    gap: 20px 20px; 

`

