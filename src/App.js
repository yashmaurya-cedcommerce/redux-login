import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>

      </div>
    </Provider>
  );
}

export default App;
