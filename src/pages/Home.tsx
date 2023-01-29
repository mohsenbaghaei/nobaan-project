import { useCallback, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTextField, TextField } from "../redux/textField/textFieldSlice";
import "./Pages.css";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [textField, setTextField] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const text = useSelector(TextField);

  const handleKeyPress = useCallback((event: any) => {
    if (event.ctrlKey && event.shiftKey && event.keyCode === 113) {
      setShowDialog(true);
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 114) {
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleTextField = () => {
    dispatch(getTextField(textField));
    setTextField("");
  };

  const handleClear = () => {
    setTextField("");
    dispatch(getTextField(""));
  };

  return (
    <div className="verification">
      <p>To show the Dialog please press ctrl+shift+f2</p>
      {showDialog ? (
        <>
          <p className="dialog">Do What You Love , Love What You Do</p>
          <p>To focus on the text field please press ctrl+shift+f3</p>
          <input
            type="text"
            ref={inputRef}
            className="input"
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            placeholder="write your Message"
          />
          <button className="showMessage" onClick={handleTextField}>
            Show my Message
          </button>
          <button className="clearMessage" onClick={handleClear}>
            Clear my Message
          </button>
          {text}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
