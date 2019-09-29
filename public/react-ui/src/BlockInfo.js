import React from 'react';

// Import antd components
import { Modal, Button, Spin } from 'antd';

// stateless component
// Uses a Modal objet to display the information of a single block
const BlockInfo = (props) => {

  return(
    <Modal
      title="Details"
      visible = {props.visible}
      onCancel = {props.handleOk}
      footer = {[
        <Button key="ok" onClick={props.handleOk}> ok </Button>,
      ]}
    >
      <Spin spinning={props.spinning}></Spin>
      <p><b>size:</b> <br/>{props.size}</p>
      <p><b>Block Index:</b> <br/>{props.blockIndex}</p>
      <p><b>Previous Hash:</b> <br/>{props.previousHash}</p>
    </Modal>
  )
}

export default BlockInfo;
