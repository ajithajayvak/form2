import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "./images/11.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./App.css";
import { useFormik } from "formik";
// import { basicSchema } from "./schema";
import { useState } from "react";
import axios from "axios";
import Job from "./job";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function checkEmptyString(string) {
  return string === "" || string === null || string.length === 0;
}
function checkValidEmail(email) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !emailRegex.test(email);
}
const Infos = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState();
  const [errorText, setErrorText] = useState();
  const [isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState();
  const [page, setPage] = useState(1);
  const phoneRegex = /^\d{10}$/;
  const user = {
    name: "",
    phone: "",
    gender: "",
    email: "",
  };
  const [error, setError] = useState(user);

  async function addUser(data) {
    const formData = JSON.stringify(data);
    axios({
      method: "post",
      url: "https://dev.octilus.in/api/create.php",
      data: formData,
    })
      .then(function (response) {
        console.log(response);
      })
      // .then(function (response) {
      //   if (response.Success) {
      //     setUserId(response.Id);
      //   }
      // })
      .catch(function (error) {
        console.log(error);
        setErrorText(error.message);
      });
  }
  function postData(e) {
    e.preventDefault();
    let error = JSON.parse(JSON.stringify(user));
    setIsError(false);
    setErrorType(null);
    if (checkEmptyString(name)) {
      error.name = "Name required";
      setIsError(true);
    } else if (name.length < 2) {
      error.name = "Name should be 2 letter";
      setIsError(true);
      setErrorType("name");
    } else if (checkEmptyString(email)) {
      error.email = "Email required";
      setIsError(true);
    } else if (checkValidEmail(email)) {
      setIsError(true);
      setErrorType("email");
      error.email = "Email shouble be valid";
    } else if (checkEmptyString(phone)) {
      error.phone = "Phonenumber required";
      setIsError(true);
    } else if (!phoneRegex.test(phone)) {
      error.phone = "Phonenumber should be valid";
      setIsError(true);
      setErrorType("phone");
    } else if (checkEmptyString(gender)) {
      error.gender = "Gender required";
      setIsError(true);
      setErrorType("gender");
    } else {
      let data = {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
      };
      setIsError(false);

      console.log(data, "data");

      // addUser(data);
    }
    setError(error);
    if (!isError) {
      setPage(2);
    }
    // return response.json(); // parses JSON response into native JavaScript objects
  }
  const userData = {
    userId,
    page,
    setPage,
  };
  return (
    <div className="over">
      {page === 1 && (
        <Row>
          <Col>
            <div className="containers">
              <img className="imgs" src={img} />
              <h3 className="first">Let's Join with us !</h3>
              <h3 className="second">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </h3>
              <h5 className="third">Copyright C 2022 Octilus Technologies</h5>
              <FaFacebookF className="fb" />
              <FaTwitter className="twi" />
              <FaLinkedinIn className="in" />
              <FaInstagram className="ins" />
            </div>
          </Col>
          <Col>
            <Form className="forms">
              <h2 className="hea">Personal Information</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(event) => {
                    // console.log(event.target.value, "text");
                    setName(event.target.value);
                  }}
                  placeholder="Name"
                />
                {isError && error.name}
                {/* {isError && errorType == "name" ? (
                <p>Name should be atleast 2 letters</p>
              ) : (
                ""
              )} */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(event) => {
                    // console.log(event.target.value, "text");
                    setEmail(event.target.value);
                  }}
                  placeholder="Email Address"
                />
                {/* {isError && errorType == "email" ? <p>Enter valid email</p> : ""} */}
                {isError && error.email}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control
                  type="phone"
                  value={phone}
                  onChange={(event) => {
                    // console.log(event.target.value, "text");
                    setPhone(event.target.value);
                  }}
                  placeholder="Phone"
                />
                {/* {isError && errorType == "phone" ? (
                <p>Enter valid Phone number</p>
              ) : (
                ""
              )} */}
                {isError && error.phone}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Select Gender</Form.Label>
                <Row>
                  <Col className="rad">
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      onChange={(e) => {
                        // console.log(e.target.value, "event value");
                        setGender(e.target.value);
                      }}
                    />
                  </Col>

                  <Col className="rad fe">
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      onChange={(e) => {
                        // console.log(e.target.value, "event value");
                        setGender(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* {isError && errorType == "gender" ? (
                <p>Please select Gender</p>
              ) : (
                ""
              )} */}
                {isError && error.gender}
              </Form.Group>
              {errorText}
              <Button
                className="btt"
                variant="success"
                type="submit"
                onClick={(e) => {
                  console.log("hello");
                  postData(e);
                  setErrorText(true);
                }}
              >
                Next
              </Button>
            </Form>
          </Col>
        </Row>
      )}
      {page === 2 && <Job userData={userData} />}
    </div>
  );
};

export default Infos;
