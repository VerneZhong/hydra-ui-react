import React from 'react';
import Login from './components/Login'

function App() {
  return (
      <div className="App">
          <header className="App-header">
              {/* 可以在这里放置一些全局的头部内容 */}
          </header>
          {/* 主要内容区域，引入Login组件 */}
          <main>
              <Login />
          </main>
          <footer>
              {/* 如有需要，这里可以放置全局底部内容 */}
          </footer>
      </div>
  );
}

export default App;
