import './App.css';
import { Route, Routes} from 'react-router-dom';
import Payment from './components/payment/Payment';
import Login from './components/agent_login/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
