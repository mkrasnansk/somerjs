import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MoreText from "../assets/MoreText";
import { OffCanvasNavSideBar } from "../navigation/OffcanvasNavSideBar";
import { Hamburger } from "./Hamburger";

export const MainLayout = () => {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow((s) => !s);
	const handleClose = () => setShow(false);
	return (
		<Row>
			<Col className={show ? "col-12 col-lg-9 slowMotion " : "col-12 slowMotion "}>
				<Hamburger toggleShow={toggleShow} show={show}/>
				<MoreText />
			</Col>
			<Col className={show ? "d-block col-12 col-lg-3" : "d-none"}>
				<OffCanvasNavSideBar backdrop={true} onHide={handleClose} showCanvas={show} />
			</Col>
		</Row>
	);
};
