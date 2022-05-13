import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export const FormVerifiedEmail = () => {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState("miso.krasnansky@gmail.com");
	const [password, setPassword] = useState("aaa");
	const handleSend = (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		e.stopPropagation();
		if (form.checkValidity() === false) {
			console.log("nevalidne");
		} else {
			console.log(e.target[0].value);
			console.log(e.target[1].value);
			setValidated(true);
			handleFetch(e.target[0].value, e.target[1].value);
		}
	};
	const handleFetch = async (email, pass) => {
		const rawResponse = await fetch("http://localhost:8000/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email, pass }),
		});
		const content = await rawResponse.json();

		console.log(content);
	};
	const handleEmail = (e) => {
		setEmail(e.currentTarget.value);
	};
	const handlePassword = (e) => {
		setEmail(e.currentTarget.value);
	};
	return (
		<Form className="needs-validation" noValidate validated={validated} onSubmit={handleSend}>
			<Row className="align-items-center">
				<Form.Group as={Col}>
					<Form.Label>email</Form.Label>
					<Form.Control
						type="email"
						onChange={handleEmail}
						value={email}
						name="email"
						required
					></Form.Control>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>pass</Form.Label>
					<Form.Control
						type="password"
						onChange={handlePassword}
						value={password}
						name="email"
						required
					></Form.Control>
				</Form.Group>
				<div className="col-auto">
					<Button className="btn-xl" type="submit">
						Odoslať
					</Button>
				</div>
			</Row>
		</Form>
	);
};
