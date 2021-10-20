import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const NewsDetails = () => {
  let { newsId } = useParams();

  return (
    <Container className="serviceDetails">
      <h1>this is news no {newsId}</h1>
    </Container>
  );
};

export default NewsDetails;
