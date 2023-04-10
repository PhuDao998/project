import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login(){
    return(
        <div className="h-100 d-flex align-items-center form_container">
            <Form className='w-50 m-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter user's name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}