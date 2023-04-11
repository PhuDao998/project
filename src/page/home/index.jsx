import {
    ThemeProvider,
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";


export default function HomePage() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container fluid id="home">
                <Row>
                    <Col md={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col md={10} id="page-content-wrapper">
                        <h1>Welcome to the Home Page</h1>
                        <Routes>
                            <Route path='about' element={<About />} />
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
}

function About() {
    return <h2>About Us</h2>;
}

function Contact() {
    return <h2>Contact Us</h2>;
}