import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import imgs from "./images/12.jpg";
const Submitt = () => {
  return (
    <div className="containerrs">
      <Row>
        <Col>
          <img className="imgss" src={imgs} />
          <h3 className="texts">Application Submitted</h3>
          <p className="texts"> Thanks for your Interst!</p>
          <p className="texts">
            Our review team will review your application and call you for
            interview
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Submitt;
