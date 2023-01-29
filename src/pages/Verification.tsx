import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Pages.css";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/menu/menuSlice";

const Verification = () => {
  const [verificationCode1, setVerificationCode1] = useState("");
  const [verificationCode2, setVerificationCode2] = useState("");
  const [verificationCode3, setVerificationCode3] = useState("");
  const [verificationCode4, setVerificationCode4] = useState("");
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef1.current?.focus();
  }, []);

  useEffect(() => {
    if (verificationCode3) {
      inputRef4.current?.focus();
    } else if (verificationCode2) {
      inputRef3.current?.focus();
    } else if (verificationCode1) {
      inputRef2.current?.focus();
    }
  }, [verificationCode1, verificationCode2, verificationCode3]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/");
    dispatch(changePage("home"));
  };

  const handleClear = () => {
    setVerificationCode1("");
    setVerificationCode2("");
    setVerificationCode3("");
    setVerificationCode4("");
    inputRef1.current?.focus();
  };

  return (
    <div className="verification">
      <form onSubmit={(event) => handleSubmit(event)} className="verification">
        <label htmlFor="code">Enter Your 4 digits verification code</label>
        <div className="code">
          <br />
          <input
            ref={inputRef1}
            maxLength={1}
            id="code"
            type="tel"
            className="digit"
            value={verificationCode1}
            onChange={(e) => setVerificationCode1(e.target.value)}
          />
          <input
            ref={inputRef2}
            maxLength={1}
            type="tel"
            className="digit"
            value={verificationCode2}
            onChange={(e) => setVerificationCode2(e.target.value)}
          />
          <input
            ref={inputRef3}
            maxLength={1}
            type="tel"
            className="digit"
            value={verificationCode3}
            onChange={(e) => setVerificationCode3(e.target.value)}
          />
          <input
            ref={inputRef4}
            maxLength={1}
            type="tel"
            className="digit"
            value={verificationCode4}
            onChange={(e) => setVerificationCode4(e.target.value)}
          />
        </div>
        <div className="verificationbutton">
          <button
            type="submit"
            className="verify"
            disabled={
              !verificationCode1 ||
              !verificationCode2 ||
              !verificationCode3 ||
              !verificationCode4
                ? true
                : false
            }
          >
            Verify Code
          </button>
        </div>
      </form>
      <button className="clear" onClick={handleClear}>
        Clear
      </button>
      <br />
      <Link to="/users" className="verificationLink">
        Correct phone number
      </Link>
    </div>
  );
};

export default Verification;
