import "../Form/Form.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let news = JSON.parse(localStorage.getItem("NEWS")) || [];
  const saveData = () => {
    news.push(data);
    localStorage.setItem("NEWS", JSON.stringify(news));
  };
  const initialState = {
    headline: "",
    byline: "",
    location: "",
    body: "",
  };


  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const clearState = () => {
    setData(initialState);
  };
  const handleInputChange = (event) => {
    if (data.body.length < 30 || data.headline.length < 4 || data.byline.length < 4) {
      setMessage("You need to fill the fields");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
    console.log("se lanza el formulario", data);
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/list");
    }, 3000);
  };

  return (
    <>
      <div className="GeneralContainer">
        <form className="FormContainer" onSubmit={handleSubmit}>
          <div className="PaddingContainer">
            <div className="InputContainer">
              <div>
                <h3>TITLE</h3>
                <div className="InputText">
                  <input
                    type="text"
                    placeholder="headline"
                    onChange={handleInputChange}
                    value={data.headline}
                    name="headline"
                  />
                </div>
              </div>
              <div>
                <h3>AUTHOR</h3>
                <div className="InputByline">
                  <input
                    type="text"
                    placeholder="byline"
                    onChange={handleInputChange}
                    value={data.byline}
                    name="byline"
                  />
                </div>
              </div>
              <div>
                <h3>LOCATION</h3>
                <div className="InputLocation">
                  <input
                    type="text"
                    placeholder="location"
                    onChange={handleInputChange}
                    value={data.location}
                    name="location"
                  />
                </div>
              </div>
              <div>
                <h3>TEXT</h3>
                <div className="InputText">
                  <textarea
                    rows="15"
                    cols="55"
                    type="text"
                    placeholder="body"
                    onChange={handleInputChange}
                    value={data.body}
                    name="body"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ButtonContainer">
            <button type="submit" disabled={btnDisabled}>
              <h2>Post</h2>
            </button>
          </div>
          <span className="Message">{message}</span>
        </form>
      </div>
    </>
  );
};

export default Form;
