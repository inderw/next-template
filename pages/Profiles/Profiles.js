import styles from '../Profiles/Profiles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Profiles = () => {
    return (
       <>
       <Container className="mt-5">
  <Row>
    <Col sm={12} md={4} lg={4}>
    <Card>
  <Card.Img variant="top" src="https://heather-kehoe.c21.ca/files/2021/04/Add-a-heading-2.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col sm={12} md={4} lg={4}>
    <Card>
  <Card.Img variant="top" src="https://heather-kehoe.c21.ca/files/2021/04/Add-a-heading.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col sm={12} md={4} lg={4}>
    <Card>
  <Card.Img variant="top" src="https://heather-kehoe.c21.ca/files/2021/04/Add-a-heading-1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    
  </Row>

</Container>
       </>
    )
}

export default Profiles
