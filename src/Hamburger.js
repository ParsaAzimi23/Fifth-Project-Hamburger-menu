import React, { Component } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const MyDiv = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 40px;
    right: 30px;
    z-index: 20;
    display: none;
    cursor: pointer;
    flex-direction:column;
    @media (max-width: 768px){
        display:flex;
        justify-content: space-around;
    }
    div{
        width: 2rem;
        height: 0.25rem;
        background:${props=>props.open ? '#fff': '#1565D6'};
        border-radius: 10px;
        transform-origin : 1px;
        transition: 0.3s all linear;
        &:nth-child(1){
            transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"};
        }
        &:nth-child(2){
            transform: ${props => props.open ? "translateX(-100%)" : "translate(0)"};
            opacity: ${props => props.open ? 0 : 1}; 
        }
        &:nth-child(3){
            transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`

export default class Hamburger extends Component {
    constructor(){
        super();
        this.state = {
            open:false
        }
    }
    clickHandler = () =>{
        this.setState({open : !this.state.open})
    }
  render() {
    return (
        <>
            <MyDiv open={this.state.open} onClick={this.clickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </MyDiv>
            <Navbar open={this.state.open}/>
        </>
    )
  }
}
