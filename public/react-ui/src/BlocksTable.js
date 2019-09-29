import React from 'react';

// Import antd components
import { Table } from 'antd';

// Import other components
import BlockInfo from './BlockInfo';

// Table Data
const columns = [
  {
    title: 'Block Hash',
    dataIndex: 'hash',
    key: 'hash',
  },
  {
    title: 'Block Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Bock Height',
    dataIndex: 'height',
    key: 'height',
  },
];

class BlocksTable extends React.Component {

  state = {
    tableLoading: true,
    tableData: [],
    blockDetailsVisible: false,
    blockDetails: {},
    blockDetailsLoading: false,
  }

  // Request data from the API and populate the table
  componentWillMount(){
    fetch('/blocks',{method: 'get',})
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({
        tableData: json.blocks,
        tableLoading: false,
      });
    })
  }

  // Request data of a specific block and populates props for BlockInfo component
  hanleRowClick = (hash) => {
    this.setState({
      blockDetailsVisible: true,
      blockDetailsLoading: true,
    });

    fetch('/blockDetails/'+hash,{method: 'get',})
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({
        blockDetailsVisible: true,
        blockDetails: json,
        blockDetailsLoading: false
      });
    })
  }

  // Hide the modal and clean the data of an specific block
  handleOk = () => {
    this.setState({
      blockDetailsVisible: false,
      blockDetails: {},
    })
  }

  render(){
    return(
      <div>

      <BlockInfo
        spinning={this.state.blockDetailsLoading}
        visible={this.state.blockDetailsVisible}
        size={this.state.blockDetails.size}
        blockIndex={this.state.blockDetails.block_index}
        previousHash={this.state.blockDetails.previous_hash}
        handleOk={this.handleOk}
      />

      <Table
        onRow = {(record, rowIndex) => {
          return {
            onClick: event => {
              this.hanleRowClick(record.hash)
            }
          }
        }}
        loading = {this.state.tableLoading}
        dataSource={this.state.tableData} columns={columns}
      />

      </div>
    )
  }
}

export default BlocksTable;
