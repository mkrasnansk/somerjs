import { Button } from "bootstrap";
import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

export const LoteryNums = () => {
	const [num1, setNum1] = useState();
	const [num2, setNum2] = useState();
	const [num3, setNum3] = useState();
	const [num4, setNum4] = useState();
	const [num5, setNum5] = useState();
	const [num21, setNum21] = useState();
	const [num22, setNum22] = useState();

	const dajCisla = () => {
		let pole1 = [];
		let pole2 = [];
		let nSet;
		let nSet2;
		let selectedArr = [];
		let selectedArr2 = [];
		for (let i = 1; i <= 50; i++) {
			let item = Math.ceil(Math.random() * 50);
			pole1.push(item);
		}
		for (let i = 1; i <= 12; i++) {
			let item = Math.ceil(Math.random() * 12);
			pole2.push(item);
		}
		nSet = new Set(pole1);
		nSet2 = new Set(pole2);

		function ratajCisloPole2(num) {
			let arr2 = [];
			let toto;
			for (let t of nSet2) {
				toto = Math.floor(Math.random() * nSet2.size);
				arr2.push(t);
			}
			if (selectedArr2.includes(arr2[toto])) {
				console.log("bolo to to iste cislo");
				ratajCisloPole2(num);
			} else {
				selectedArr2.push(arr2[toto]);
				num(arr2[toto]);
			}
		}
		function ratajCislo(num) {
			let arr = [];
			let toto;
			for (let t of nSet) {
				toto = Math.floor(Math.random() * nSet.size);
				arr.push(t);
			}
			if (selectedArr.includes(arr[toto])) {
				console.log("bolo to to iste cislo");
				ratajCislo(num);
			} else {
				selectedArr.push(arr[toto]);
				num(arr[toto]);
			}
		}
		ratajCislo(setNum1);
		ratajCislo(setNum2);
		ratajCislo(setNum3);
		ratajCislo(setNum4);
		ratajCislo(setNum5);
		ratajCisloPole2(setNum21);
		ratajCisloPole2(setNum22);
	};

	return (
		<Form.Group className="py-3">
			<Card>
				<Card.Header>EURO JACKPOT</Card.Header>
				<Card.Body>
					<Row className="align-items-center">
						<Col className="col-7">
							<div className="d-flex ">
								<Form.Control
									type="text"
									className="mx-2 py-3"
									required
									name="cislo1"
									id="cislo1"
									defaultValue={num1}
								></Form.Control>
								<Form.Control
									type="text"
									className="mx-2 py-3"
									required
									id="cislo2"
									defaultValue={num2}
									name="cislo2"
								></Form.Control>
								<Form.Control
									type="text"
									className="mx-2 py-3"
									required
									id="cislo3"
									defaultValue={num3}
									name="cislo3"
								></Form.Control>
								<Form.Control
									type="text"
									className="mx-2 py-3"
									required
									id="cislo4"
									defaultValue={num4}
									name="cislo4"
								></Form.Control>
								<Form.Control
									type="text"
									className="mx-2 py-3"
									required
									id="cislo5"
									defaultValue={num5}
									name="cislo5"
								></Form.Control>
							</div>
						</Col>
						<Col className="col">
							<div className="d-flex">
								<Form.Control
									type="text"
									className="mx-1 py-3"
									required
									name="cislo21"
									defaultValue={num21}
									id="cislo21"
								></Form.Control>
								<Form.Control
									type="text"
									className="mx-1 py-3"
									required
									id="cislo22"
									defaultValue={num22}
									name="cislo22"
								></Form.Control>
							</div>
						</Col>
						<Col className="col-auto ">
							<button className="btn btn-primary btn-lg" onClick={dajCisla}>
								Navrh Cisel
							</button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Form.Group>
	);
};
