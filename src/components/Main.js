import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from '../MaterialComps/AppBar';
class MainComponent extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

export default MainComponent;