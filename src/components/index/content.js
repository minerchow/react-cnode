import React, { Component } from 'react';
import { render } from 'react-dom';
import './content.less';
class Content extends Component {
    constructor(props){
        super(props);
        var that = this;
        console.log(props)
       
    }
    render() {
        return <div className="content">
            <div className="header">
                {
                this.props.data.map(function(item){
                   return <a href="/?tab=all" className="topic-tab current-tab">{item.tab}</a>
                })
                }
            </div>
        </div>;
    }
}

export default Content;