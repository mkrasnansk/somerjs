import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Slovakia } from "../assets/images/svg/slovakia";
import "../assets/scss/mapsStyle.scss";
export const MapComponent = () => {
	const removeAnimation = () => {
		for (let i of document.getElementById("svkMap").children) {
			i.style.WebkitAnimation = null;
			i.style.zIndex = "-1";
		}
	};
	const handleClickPosition = (e) => {
		let map = document.getElementById("svkMap");
		switch (e.target.id) {
			case "BL":
				removeAnimation();
				map.append(document.getElementById("BA"));
				document.getElementById("BA").style.WebkitAnimation = "newAnimCircle 2s infinite";
				break;
			case "BAKraj":
				removeAnimation();
				map.append(document.getElementById("SK-BL"));
				map.append(document.getElementById("BA"));
				document.getElementById("SK-BL").style.WebkitAnimation = "newAnimPath 2s infinite";
				break;
			case "TT":
				removeAnimation();
				map.append(document.getElementById("SK-TA"));
				document.getElementById("SK-TA").style.WebkitAnimation = "newAnimPath 2s infinite";
				break;
			case "NRaTN":
				removeAnimation();

				map.append(document.getElementById("SK-TC"));
				map.append(document.getElementById("SK-NI"));
				document.getElementById("SK-TC").style.WebkitAnimation = "newAnimPath 2s infinite";
				document.getElementById("SK-NI").style.WebkitAnimation = "newAnimPath 2s infinite";
				break;
			case "ZAaBB":
				removeAnimation();

				map.append(document.getElementById("SK-ZI"));
				map.append(document.getElementById("SK-BC"));
				document.getElementById("SK-ZI").style.WebkitAnimation = "newAnimPath 2s infinite";
				document.getElementById("SK-BC").style.WebkitAnimation = "newAnimPath 2s infinite";
				break;
			case "KE":
				removeAnimation();
				map.append(document.getElementById("SK-KI"));
				document.getElementById("SK-KI").style.WebkitAnimation = "newAnimPath 2s infinite";
				break;
			case "PO":
				removeAnimation();
				map.append(document.getElementById("SK-PV"));
				document.getElementById("SK-PV").style.WebkitAnimation = "newAnimPath 2s infinite";
				break;
			default:
				removeAnimation();
				break;
		}
	};
	return (
		<div>
			<Row>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						style={{ background: "#990a2e" }}
						id="BL"
					></MDBBtn>
				</Col>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						id="BAKraj"
						style={{ background: "#533788" }}
					></MDBBtn>
				</Col>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						id="TT"
						style={{ background: "#846ab6" }}
					></MDBBtn>
				</Col>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						id="NRaTN"
						style={{ background: "#9b8db6" }}
					></MDBBtn>
				</Col>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						id="ZAaBB"
						style={{ background: "#bbaed3" }}
					></MDBBtn>
				</Col>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						id="KE"
						style={{ background: "#d4c9e9" }}
					></MDBBtn>
				</Col>
				<Col className="col-auto">
					<MDBBtn
						floating
						size="sm"
						onClick={handleClickPosition}
						id="PO"
						style={{ background: "#e0d8ec" }}
					></MDBBtn>
				</Col>
			</Row>
			<Row>
				<Col className="col-auto">
					<div className="text-danger">My position</div>
				</Col>
				<Col style={{ color: "#533788" }} className="col-auto">
					{" > > > "}
				</Col>
				<Col>
					<div style={{ color: "#e0d8ec" }}>willing to work</div>
				</Col>
			</Row>
			<Slovakia />
		</div>
	);
};
