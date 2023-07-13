import React from "react";
import { UserList } from "#components";
import "#styles/App.scss";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span>User Editor</span>
      </header>
      <main className="app__content">
        <UserList />
      </main>
    </div>
  );
}

export default App;
