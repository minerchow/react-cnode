import React, { Component } from 'react';
import { render } from 'react-dom';
import './content.less';
class Content extends Component {
    constructor(props){
        super(props);
        var that = this;
        
       
    }
    render() {
        console.log(this.props)
        return <div className="content">
            <div className="header">
                {
                this.props.data.map(function(item,index){
                   return <a href="/?tab=all" className="topic-tab current-tab" key={index}>{item.tab}</a>
                })
                }
            </div>
        </div>;
    }
}

export default Content;