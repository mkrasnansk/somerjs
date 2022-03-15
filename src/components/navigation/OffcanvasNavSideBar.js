import { useEffect, useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";

export function OffCanvasNavSideBar(props) {
	const { backdrop, onHide, showCanvas } = props;
	const [iWidth, setIWidth] = useState(false);
	const handleResize = debounce(() => {
		if (window.innerWidth < 992) {
			setIWidth(true);
		} else {
			setIWidth(false);
		}
	}, 250);
	function debounce(func, wait, immediate) {
		let timeout;
		return function () {
			let context = this,
				args = arguments;
			let later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			let callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener(`resize`, handleResize);
	}, [handleResize]);

	return (
		<Offcanvas placement="end" className={iWidth ? "w-100 " : "w-25 bg-light"} id="OFFc" backdrop={backdrop} scroll onHide={onHide} show={showCanvas} backdropClassName="backdropHidden">
			<Offcanvas.Header closeButton={iWidth}>
				<Offcanvas.Title className="text-primary">Menu</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Row className={iWidth ? "text-center" : ""}>
					<Col className="col-12 mb-2">
						<Button className="col-12">O nas</Button>
					</Col>
					<Col className="col-12 mb-2">
						<Button className="col-12">Vyzivove hodnoty</Button>
					</Col>
					<Col className="col-12 mb-2">
						<Button className="col-12">Blog</Button>
					</Col>
					<Col className="col-12 mb-2">
						<Button className="col-12">Shop</Button>
					</Col>
					<Col className="col-12 mb-2">
						<Button className="col-12">Kontakt</Button>
					</Col>
				</Row>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
