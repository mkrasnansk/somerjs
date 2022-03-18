import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "../assets/scss/burgerCSS.scss";

export const Hamburger = (props) => {
  return (
    <Container className="w-100 text-end">
    <Button
        variant="btn btn-link shadow-none"
        onClick={props.toggleShow}
        className="me-2"
    >
        <div id="close-icon" className={props.show ? "open" : ""}>
            <span className="bg-primary"></span>
            <span className="bg-primary"></span>
            <span className="bg-primary"></span>
        </div>
    </Button>
</Container>
  )
}
