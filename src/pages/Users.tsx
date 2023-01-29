import { useState, useRef, useEffect } from "react";
import "./Pages.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/menu/menuSlice";

const Users = () => {
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [errMsg, setErrmsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    phoneNumberRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrmsg("");
    if (phoneNumber.length === 11) {
      setValidPhoneNumber(true);
    } else {
      setValidPhoneNumber(false);
    }
  }, [phoneNumber]);

  const handlePhoneNumber = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validPhoneNumber) {
      setPhoneNumber("");
      setValidPhoneNumber(false);
      navigate("/verification");
      dispatch(changePage("verification"));
    } else {
      setErrmsg("Phone number length must be 11");
    }
  };
  return (
    <div className="verification">
      {errMsg ? <div className="err">{errMsg}</div> : ""}
      <form onSubmit={(event) => handlePhoneNumber(event)}>
        <label htmlFor="phoneNumber">
          Enter your Phone Number :
          {validPhoneNumber ? (
            <span style={{ marginLeft: "5px", color: "green" }}>
              <AiFillCheckCircle />
            </span>
          ) : null}
        </label>
        <br />
        <input
          ref={phoneNumberRef}
          type="tel"
          id="phoneNumber"
          maxLength={11}
          value={phoneNumber}
          className="input"
          placeholder="09030737899"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="verify">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Users;
