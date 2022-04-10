import { MDBBtn } from "mdb-react-ui-kit";
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
	const addAnimation = (map, animProps, id, id2 = null) => {
		removeAnimation();
		let elementId = document.getElementById(id);
		map.append(elementId);
		if (id2 !== null) {
			let elementId2 = document.getElementById(id2);
			map.append(elementId2);
			if (id2 !== "BA") {
				elementId2.style.WebkitAnimation = animProps;
			}
		}
		elementId.style.WebkitAnimation = animProps;
	};
	const handleClickPosition = (e) => {
		const map = document.getElementById("svkMap");
		let id;
		let id2;
		const animPropsCircle = "newAnimCircle 2s infinite";
		const animPropsPath = "newAnimPath 2s infinite";
		e.target.addEventListener("blur",(e)=>{
			removeAnimation()
			e.target.removeEventListener("blur",()=>{})
			
		})
		switch (e.target.id) {
			case "BL":
				id = "BA";
				addAnimation(map, animPropsCircle, id);
				break;
			case "BAKraj":
				id = "SK-BL";
				id2 = "BA";
				addAnimation(map, animPropsPath, id, id2);
				break;
			case "TT":
				id = "SK-TA";
				addAnimation(map, animPropsPath, id);
				break;
			case "NRaTN":
				id = "SK-NI";
				id2 = "SK-TC";
				addAnimation(map, animPropsPath, id, id2);
				break;
			case "ZAaBB":
				id = "SK-BC";
				id2 = "SK-ZI";
				addAnimation(map, animPropsPath, id, id2);
				break;
			case "KE":
				id = "SK-KI";
				addAnimation(map, animPropsPath, id);
				break;
			case "PO":
				id = "SK-PV";
				addAnimation(map, animPropsPath, id);
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
