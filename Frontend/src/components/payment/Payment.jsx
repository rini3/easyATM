import { useState } from 'react';
import './payment.css';

function Payment() {
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [OTPEnter, setOTP] = useState("");
    const [passEnter, setPassEnter] = useState("");
    const [transactionStatus, setTransactionStatus] = useState("");

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [card, setCard] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const handleTransfer = (e) => {
        e.preventDefault();
        setOtpSent(true);
        setTransactionStatus(""); // reset status
    };

    const handleOtpChange = (e) => {
        const value = e.target.value;
        setOTP(value);
        if (value === "123") {
            setOtpVerified(true);
        } else {
            setOtpVerified(false);
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (otpVerified && passEnter === "pass123") {
            setTransactionStatus("Transaction Successful");
        } else {
            setTransactionStatus("Transaction Failed");
        }
    };

    return (
        <div className='paymentPage'>
            <h2>Transaction Details</h2>

            {!otpSent ? (
                <form onSubmit={handleTransfer}>
                    <label className="login-labels">Name</label>
                    <input className="login-feilds" value={name} onChange={(e) => setName(e.target.value)} />

                    <label className="login-labels">Mobile Number</label>
                    <input className="login-feilds" value={mobile} onChange={(e) => setMobile(e.target.value)} />

                    <label className="login-labels">Card</label>
                    <input className="login-feilds" value={card} onChange={(e) => setCard(e.target.value)} />

                    <label className="login-labels">Card Number</label>
                    <input className="login-feilds" value={cardNo} onChange={(e) => setCardNo(e.target.value)} />

                    <label className="login-labels">Expiry Date</label>
                    <input className="login-feilds" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

                    <label className="login-labels">CVV</label>
                    <input className="login-feilds" value={cvv} onChange={(e) => setCvv(e.target.value)} />

                    <button type="submit">Send OTP</button>
                </form>
            ) : (
                <form onSubmit={handlePasswordSubmit}>
                    <label className="login-labels">Enter OTP</label>
                    <input
                        className="login-feilds"
                        value={OTPEnter}
                        onChange={handleOtpChange}
                    />
                    <p className={otpVerified ? "success" : "failure"}>
                        {OTPEnter && (otpVerified ? "OTP Verified ✅" : "Invalid OTP ❌")}
                    </p>

                    {otpVerified && (
                        <>
                            <label className="login-labels">Enter Agent Password</label>
                            <input
                                className="login-feilds"
                                type="password"
                                value={passEnter}
                                onChange={(e) => setPassEnter(e.target.value)}
                            />
                            <button type="submit">Submit</button>
                        </>
                    )}

                    {transactionStatus && (
                        <h3 className={transactionStatus === "Transaction Successful" ? "success" : "failure"}>
                            {transactionStatus}
                        </h3>
                    )}
                </form>
            )}
        </div>
    );
}

export default Payment;
