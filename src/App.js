import './App.css';
import Button from  'react-bootstrap/Button' ; 
import Card from  'react-bootstrap/Card' ; 
import Offcanvas from  'react-bootstrap/Offcanvas' ; 
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div className="App">
      <Card>
        <Card.Header>Hovadsky Headers</Card.Header>
        <Card.Body>
      <Button variant="primary" onClick={handleToggle}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleToggle}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         Pojebany text si pojeb smradlavy kokot
        </Offcanvas.Body>
      </Offcanvas>
        </Card.Body>
        <Card.Footer>Hovado Footerove</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
