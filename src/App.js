import { Button, Col, Container, Row } from "react-bootstrap";
import { OffCanvasNavSideBar } from "./components/navigation/OffcanvasNavSideBar";
import MoreText from "./components/assets/MoreText";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

function App() {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow((s) => !s);
	const handleClose = () => setShow(false);
	return (
		<Container>
			<Row>
				<Col className={show ? "col-12 col-lg-9 slowMotion " : "col-12 slowMotion "}>
					<Container className="w-100 text-end">
						<Button variant="btn btn-link btn-lg shadow-none" onClick={toggleShow} className="me-2">
							<BiMenuAltLeft  className="fs-1"/>
						</Button>
					</Container>
					<MoreText />
				</Col>
				<Col className={show ? "d-block col-12 col-lg-3" : "d-none"}>
					<OffCanvasNavSideBar backdrop={true} onHide={handleClose} showCanvas={show} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
