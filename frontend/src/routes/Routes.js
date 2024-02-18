import HomePage from "../views/homepage/homepage";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
