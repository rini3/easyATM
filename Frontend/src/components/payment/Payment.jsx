import { useState } from 'react';
import './payment.css';

function Payment() {
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState();
    const [OTPEnter, setOTP] = useState("");
    const [passEnter, setPassEnter] = useState("");
    const [transactionStatus, setTransactionStatus] = useState("");
    const [method, setMethod] = useState("");

    const [otpAttempted, setOtpAttempted] = useState(false);
    const [submitted, setSubmitted] = useState(false);

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
        setOTP(e.target.value);
    };

    const handleOtpVerify = (e) => {
        e.preventDefault();
        setOtpAttempted(true);
        if (OTPEnter === "123") {
            setOtpVerified(true);
        } else {
            setOtpVerified(false);
        }
    };

    const handleOtpKeyPress = (e) => {
        if (e.key === "Enter") {
            handleOtpVerify(e);
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (otpVerified && passEnter === "pass123") {
            setTransactionStatus("Transaction Successful");
        } else {
            setTransactionStatus("Transaction Failed");
        }
    };

    const passKeyPress = (e) => {
        if (e.key === "Enter") {
            handlePasswordSubmit(e);
        }
    };

    return (
        <div className='paymentPage'>
            <h2>Withdraw Cash</h2>

            {!otpSent ? (
                <form onSubmit={handleTransfer}>
                    <h3>Select Method of Transfer</h3>
                    <div className="method-options">
                        <label>
                            <input
                                type="radio"
                                name="method"
                                value="card"
                                checked={method === "card"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="method"
                                value="biometric"
                                checked={method === "biometric"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            Biometric
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="method"
                                value="online"
                                checked={method === "online"}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            Online Banking
                        </label>
                    </div>

                    {/* Show card fields only if "card" is selected */}
                    {method === "card" && (
                        <div className="card-details">
                            <label className="login-labels">Name</label>
                            <input className="login-feilds" value={name} onChange={(e) => setName(e.target.value)} />

                            <label className="login-labels">Mobile Number</label>
                            <input className="login-feilds" value={mobile} onChange={(e) => setMobile(e.target.value)} />



                            <h3>Enter Card Details:</h3>
                            <label className="login-labels">Amount</label>
                            <input className="login-feilds" />

                            <label className="login-labels">Card Number</label>
                            <input className="login-feilds" value={cardNo} onChange={(e) => setCardNo(e.target.value)} />

                            <label className="login-labels">Expiry Date</label>
                            <input className="login-feilds" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

                            <label className="login-labels">CVV</label>
                            <input className="login-feilds" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                        <button type="submit">Send OTP</button>

                        </div>
                    )}

                </form>
            ) : (<>
                {submitted ? (
                    <div className="transaction-result">
                        <h3 className={transactionStatus === "Transaction Successful" ? "success" : "failure"}>
                            {transactionStatus}
                        </h3>
                    </div>
                ) : (
                    <form onSubmit={handlePasswordSubmit}>
                        <label className="login-labels">Enter OTP</label>
                        <input
                            className="login-feilds"
                            value={OTPEnter}
                            onChange={handleOtpChange}
                            onKeyDown={handleOtpKeyPress}
                        />
                        <button onClick={handleOtpVerify}>Verify OTP</button>
                
                        {otpAttempted && (
                            <p className={otpVerified ? "success" : "failure"}>
                                {otpVerified ? "OTP Verified ✅" : "Invalid OTP ❌"}
                            </p>
                        )}
                
                        {otpVerified && (
                            <>
                                <label className="login-labels">Enter Agent Password</label>
                                <input
                                    className="login-feilds"
                                    type="password"
                                    value={passEnter}
                                    onChange={(e) => setPassEnter(e.target.value)}
                                    onKeyDown={passKeyPress}
                                />
                                <button type="submit">Submit</button>
                            </>
                        )}
                    </form>
                )}
                </>
            )}
        </div>
    );
}

export default Payment;
