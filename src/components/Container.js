import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components';
import Tiles from './Tiles'
import linkedinLogo from '../images/linkedin_icon.png'
import githubLogo from '../images/github_icon.png'


class Container extends React.Component {
    render() { 
        return <ContainerWrapper>
            <div className="modal">
                <div className="left">
                    <Tiles />
                </div>
                <div className="right">
                    <h1>hi! i'm angelika</h1>
                    <p>i'm trying to write code and the code is trying me 🙄</p>
                    <div className="logos">
                        <a href="https://github.com/bsdrm" target="_blank">
                            <img
                                src={githubLogo}
                                alt="github_logo"
                                className="github_logo"
                            />
                        </a>
                        <a href="https://linkedin.com/in/angelika-lach" target="_blank">
                            <img
                                src={linkedinLogo}
                                alt="linkedin_logo"
                                className="linkedin_logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </ContainerWrapper>;
    }
}
 
export default Container;

const ContainerWrapper = styled(Flex)`

    justify-content: center;
    align-items: center;
    height: 100vh;

    .modal {
        display: inline-grid; 
        grid-template-columns: 0.4fr 1.6fr 1.5fr 0.5fr; 
        grid-template-rows: 0.5fr 2.6fr 0.5fr; 
        grid-template-areas:     
            ". . . ."
            ". left right ."
            ". . . ."; 
        min-width: 25rem;
        width: 40%;
        background-color: white;
        height: auto;
        border-radius: 30px;

        @media screen and (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }


    .left {
        grid-area: left;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
        align-self: center;
        @media screen and (max-width: 1200px) {
            margin-top: 20px;
        }
    }

    .right {
        grid-area: right;
        display: flex;
        flex-direction: column;
        align-items: end;
        text-align: right;
        margin-left: 10px;
        @media screen and (max-width: 1200px) {
            margin-right: 20px;
            margin-bottom: 5px;
        }
    }

    .right > p {
        max-width: 200px;
    }

    .logos {
        display: flex;
        width: 70px;
        justify-content: space-between;
    }

    .linkedin_logo, .github_logo {
        height: 30px;
        color: black;
        filter: grayscale(100%) contrast(300%);
    }

`

