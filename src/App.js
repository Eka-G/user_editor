import React from "react";
import { ProfilePanel, UserList } from "#components";
import "#styles/App.scss";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span>User Editor</span>
      </header>
      <main className="app__content">
        <UserList />
        <ProfilePanel />
      </main>
    </div>
  );
}

export default App;
