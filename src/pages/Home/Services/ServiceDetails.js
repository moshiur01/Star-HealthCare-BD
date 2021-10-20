import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import "./serviceDetails.css";
// import useServices from "../../../hooks/useServices";

const ServiceDetails = () => {
  // get dynamic route id
  let { serviceId } = useParams();
  console.log(serviceId);
  // get services data
  const [ser, setSer] = useState();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setSer(data));
  }, []);

  // // // load side effects
  // useEffect(() => {
  //   const foundService = ser.find(
  //     (singleService) => singleService.index === serviceId
  //   );
  //   console.log(foundService);
  // }, []);

  return (
    <Container className="serviceDetails">
      <div>
        <h1>Can't Get the Idea {serviceId}</h1>
      </div>
    </Container>
  );
};

export default ServiceDetails;
