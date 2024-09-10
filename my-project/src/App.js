import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import CustomButton from './components/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="p-4">
        <Card 
          title="Sample Card Title" 
          content="This is a sample card description that describes the content of the card."
        />
        <div className="mt-4">
          <CustomButton label="Click Me" />
        </div>
      </div>
    </div>
  );
}

export default App;
