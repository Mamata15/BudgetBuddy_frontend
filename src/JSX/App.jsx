import '../CSS/App.css';
import '../CSS/Sidebar.css';
import '../CSS/Header.css';
import '../CSS/Income.css';

import Sidebar from './Sidebar';
import Header from './Header';
import Income from './Income';
  // ✅ import component

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <Income />
      </div>
    </div>
  );
}

export default App;
