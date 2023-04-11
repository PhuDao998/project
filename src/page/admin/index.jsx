import {
    Container,
    Button,
    Form,
    Row,
    Col,
    ThemeProvider,
    Image,
} from 'react-bootstrap';
import {Link} from "react-router-dom";
export default function Admin() {
    const appDomain = process.env.REACT_APP_APP_DOMAIN;
    console.log("appDomain", appDomain);
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div id="admin-page">
                <Container>
                    <h1>admin page</h1>
                    <Link to="/">back to home</Link>
                </Container>
            </div>
        </ThemeProvider>

    );
}