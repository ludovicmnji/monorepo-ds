import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import { Title } from '@ludovicmnji/components';

const Wrapper = styled.div`
  background-color: purple;
  width: 720px;
  margin: auto;
  padding: 20px 0;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title align="center">Hello world</Title>
        </Wrapper>
      </div>
    );
  }
}

export default App;
