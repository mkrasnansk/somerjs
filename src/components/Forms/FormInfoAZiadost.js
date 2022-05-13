import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const FormInfoAZiadost = () => {
	const [validated, setValidated] = useState(false);
	const [inePredmet, setInePredmet] = useState(false);
	const handleIne = (e) => {
		console.log(inePredmet);
		console.log(e.currentTarget.value);
		if (e.currentTarget.value === "4") {
			setInePredmet(true);
		} else {
			setInePredmet(false);
		}
	};
	const handleSend = (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		e.stopPropagation();
		if (form.checkValidity() === false) {
			console.log(form);
		}
		console.log(e.target[0].value);
		console.log(e.target[1].value);
		setValidated(true);
	};
	const ineAkoSluzba = () => {
		return (
			<Col className="col-12 col-md mb-2">
				<Form.Group controlId="">
					<Form.Label>Iné pedmet</Form.Label>
					<Form.Control type="text" required name="predmet"></Form.Control>
				</Form.Group>
			</Col>
		);
	};
	return (
		<Form className="needs-validation" noValidate validated={validated} onSubmit={handleSend}>
			<Row>
				<div className="col-12 col-md mb-2">
					<Form.Group>
						<Form.Label>Sluzba</Form.Label>
						<Form.Select required type="select" name="Sluzba" onChange={handleIne}>
							<option value="">Vyber</option>
							<option value="1">Spolupráca</option>
							<option value="2">Občasná výpomoc</option>
							<option value="3">Projekt</option>
							<option value="4">Iná</option>
						</Form.Select>
					</Form.Group>
				</div>
				{inePredmet && ineAkoSluzba()}
				<div className="col-12 col-md mb-2">
					<Form.Group>
						<Form.Label>meno</Form.Label>
						<Form.Control type="text" required name="meno"></Form.Control>
					</Form.Group>
				</div>
				<div className="col-12 col-md mb-2">
					<Form.Group controlId="formGridEmail">
						<Form.Label>email</Form.Label>
						<Form.Control type="email" required name="email"></Form.Control>
					</Form.Group>
				</div>
				<div className="col-12  mb-2">
					<Form.Group>
						<Form.Label>Poznamka</Form.Label>
						<Form.Control
							rows="3"
							as="textarea"
							type="text"
							required
							name="meno"
						></Form.Control>
					</Form.Group>
				</div>
				<div className="col-12 text-end">
					<Button type="submit" name="getInfo" id="getInfo" className="me-2">
						Získať info
					</Button>
					<Button type="submit" name="Send" id="Send">
						Odoslať žiadosť
					</Button>
				</div>
			</Row>
		</Form>
	);
};
