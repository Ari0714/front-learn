import React, { Component } from "react";
import hello from './index.module.css'

export default class Welcome extends Component{
    render(){
        return(
            <h1 className={hello.title}>i am a create-react-app demo</h1>
        )
    }
}