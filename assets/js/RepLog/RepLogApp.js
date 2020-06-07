import React, { Component } from 'react';
import RepLogs from './RepLogs';

export default class RepLogApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hightlightedRowId: null,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(repLogId) {
        this.setState({hightlightedRowId: repLogId});
    }

    render() {
        const { hightlightedRowId } = this.state;
        const { withHeart } = this.props;

        return (
            <RepLogs 
                withHeart={withHeart} 
                hightlightedRowId={hightlightedRowId} 
                onRowClick={this.handleRowClick}
            />
        );
    }
}