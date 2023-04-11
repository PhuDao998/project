import {
    Container,
    Button,
    Form,
    Row,
    Col,
    ThemeProvider,
    Image,
} from 'react-bootstrap';
import '../../styles/login.css';
export default function Login() {
    const appDomain = process.env.REACT_APP_APP_DOMAIN;
    console.log("appDomain", appDomain);
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div id="login-page">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={4} className="d-flex align-items-center form_container">
                            <Form className='w-100 my-auto p-2'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter user's name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='d-block m-auto px-3'>
                                    Login
                                </Button>
                            </Form>
                        </Col>
                        <Col sm={4} className='my-auto login-banner'>
                            <Image src={`${appDomain}/logo512.png`} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </ThemeProvider>

    );
}