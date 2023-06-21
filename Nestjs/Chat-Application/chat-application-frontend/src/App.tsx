import React from 'react';
import './App.css';
import { WebsocketProvider, socket } from './contexts/WebsocketContext';
import Container from './components/Container';

function App() {
  return (
    <WebsocketProvider value= {socket}>
      <Container />
    </WebsocketProvider>
  );
}

export default App;
