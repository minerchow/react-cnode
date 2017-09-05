import React, { Component } from 'react';
import { render } from 'react-dom';
import Util from "../../common/util";
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
                       <a href="/?tab=all" className="topic-tab current-tab">全部</a>
                       <a href="/?tab=all" className="topic-tab current-tab">精华</a>
                       <a href="/?tab=all" className="topic-tab current-tab">分享</a>
                       <a href="/?tab=all" className="topic-tab current-tab">问答</a>
                       <a href="/?tab=all" className="topic-tab current-tab">招聘</a>
                       <a href="/?tab=all" className="topic-tab current-tab">客户端测试</a> 
            </div>
            <div className="topic-list">
                {
                    this.props.data.map(function(value,key){
                        return <div className="cell" key={key}>
                                <a className="user_avatar pull-left" href="/user/xinyu198736">
                                    <img src={value.author.avatar_url} title="xinyu198736" />
                                </a>
                                <span className="reply_count pull-left">
                                    <span className="count_of_replies" title="回复数">{value.reply_count}</span>
                                    <span className="count_seperator">/</span>
                                    <span className="count_of_visits" title="点击数">{value.visit_count}</span>
                                </span>
                                <a className="last_time pull-right" href="/topic/599e90e1bae6f2ed6f7e4cd4#59ad102c9cd61679045b94e1">
                                    <span className="last_active_time">{Util.getDeltaTimeDisplay(parseInt(new Date(value.create_at)/1000))}</span>
                                </a>
                                <div className="topic_title_wrapper">
                                        <span className="put_top">{value.tab}</span>
                                        <a className="topic_title" href="/topic/599e90e1bae6f2ed6f7e4cd4" title="杭州 NodeParty 第四期总结（slide、现场照片）">
                                            {value.title}
                                        </a>
                                </div>
                            </div>
                    })
                    
                }
            </div>
        </div>;
    }
}

export default Content;