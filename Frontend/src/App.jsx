import './App.css';
import { Route, Routes} from 'react-router-dom';
import Payment from './components/payment/Payment';
import Login from './components/agent_login/Login';
import Operations from './components/operations/Operations ';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
