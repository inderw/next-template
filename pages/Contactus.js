
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Mynav from './Navbar';
import Head from 'next/head';

export default function ContactUs() {
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }
    return (
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="widht=device-width,initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>
        <Mynav />
            <Container>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>
                        <br />
                        <h2 className="text-center">Contact Us</h2>
                        <br />
                        <Form method="post" onSubmit={handleOnSubmit} >
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control name="message" as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col>&nbsp;</Col>
                </Row>
            </Container>

        </>
    )
}
