import React, { Component } from 'react';

// Import antd components
import { Layout } from 'antd';

// Import styles
import './App.css';

// Import other components
import BlocksTable from './BlocksTable';


// Layout constants
const { Header, Footer, Content } = Layout;


// Main component
class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <Header className="Header">Bitwala Challenge</Header>
        <Content>
          <BlocksTable />
        </Content>
        <Footer className="Footer">Camilo Daza. 2019</Footer>
      </Layout>
      </div>
    );
  }
}

export default App;
