import React from 'react';
import ElementBar from './components/elements'
import './styles.css'

function App() {
  return (
    <div>
                <ElementBar element='fire' />
                <ElementBar element='water' />
                <ElementBar element='earth' />
                <ElementBar element='air' />
    </div>
  );
}

export default App;
