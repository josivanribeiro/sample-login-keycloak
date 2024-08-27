import React from 'react';
import keycloak from './keycloak';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>Welcome, {keycloak.tokenParsed.preferred_username}</p>
        <p>Token: {keycloak.token}</p>
      </header>
    </div>
  );
}

export default App;
