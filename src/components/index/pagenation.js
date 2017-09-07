import React, { Component } from 'react';
import { render } from 'react-dom';
import { Pagination } from 'antd';
import './pagenation.less';
class Pagenation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="pagenation">
            <Pagination defaultCurrent={1} total={500} />
        </div>
    }
}

export default Pagenation;