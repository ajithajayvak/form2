import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "./images/11.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./jobs.css";
import { useNavigate } from "react-router-dom";

const Job = ({ userData }) => {
  const { userId, page, setPage } = userData;
  const navigate = useNavigate();
  const successsPage = () => {
    navigate("/submit");
  };
  return (
    <div className="over">
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
            <Row>
              <Col className="arrp">
                <FaArrowLeft className="arrow arrp" />
                <h5 onClick={() => setPage(1)} className="pre">
                  PREVIOUS STEP
                </h5>
              </Col>
            </Row>
            <h2 className="hea">Select Job Position</h2>
            <hr />

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Row>
                <Col className="rads">
                  <Form.Check
                    type="checkbox"
                    label="Frontend Developer"
                    name="gender"
                    className="che"
                  />

                  <Form.Check
                    type="checkbox"
                    label="Wordpress Developer"
                    name="gender"
                    className="che"
                  />
                  <Form.Check
                    type="checkbox"
                    label="UI / UX Designer"
                    name="gender"
                    className="che"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Support Engineer"
                    name="gender"
                    className="che"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Graphic Designer"
                    name="gender"
                    className="che"
                  />
                  <h6 className="accep">
                    I Accept The Terms Of Conditions And Privacy Policy
                  </h6>
                </Col>
              </Row>
            </Form.Group>
            <Button
              className="btt"
              variant="success"
              type="submit"
              onClick={() => successsPage()}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Job;
