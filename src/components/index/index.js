import React, { Component } from 'react';
import { render } from 'react-dom';
import Content from './content';
import axios from 'axios';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataObj :[]
        }
    }
    
    componentWillMount(){
        var that = this;
        axios.get('/topics').then(function(data){
              console.log(data.data)
              if(data.data.success){
                
                that.setState({dataObj:that.state.dataObj.concat(data.data.data)})
                console.log(that.state.dataObj)
              }
        })
        
    }
    render() {
        return <div>
            <Content data={this.state.dataObj}/>
        </div>;
    }
}

export default Index;