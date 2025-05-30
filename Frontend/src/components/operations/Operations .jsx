import { useNavigate } from 'react-router-dom';
import './operations.css';

function Operations() {
    const navigate = useNavigate();

    const balance = () => {
        navigate('/payment');
    };

    const withdraw = () => {
        navigate('/payment');
    };

    const deposit = () => {
        navigate('/payment');
    };

    return (
        <div className='operations-page'>
            <h2 className='operations-title'>Select an Operation</h2>
            <div className='operations-buttons'>
                <button onClick={balance}>Check Balance</button>
                <button onClick={withdraw}>Withdraw Cash</button>
                <button onClick={deposit}>Deposit Cash</button>
            </div>
        </div>
    );
}

export default Operations;
