import { useEffect, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";

export function OffCanvasNavSideBar(props) {
	const { backdrop, onHide, showCanvas } = props;
	const [iWidth, setIWidth] = useState(false);
	useEffect(() => {
		const handleResize = debounce(() => {
			console.log("RESIZE");
			if (window.innerWidth < 992) {
				console.log("menej je");
				setIWidth(true);
			} else {
				console.log("viac je");
				setIWidth(false);
			}
			return () => window.removeEventListener(`resize`, handleResize.cancel());
		}, 250);
		window.addEventListener("resize", handleResize);
	}, []);
	function debounce(func, wait, immediate) {
		var timeout;
		return function () {
			var context = this,
				args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}
	return (
		<Offcanvas placement="end" className={iWidth ? "w-100 " : "w-25"} id="OFFc" backdrop={backdrop} scroll onHide={onHide} show={showCanvas} backdropClassName="backdropHidden">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Menu</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Row className={iWidth ? "text-center" : ""}>
					<Col className="col-12 mb-2">Menu</Col>
					<Col className="col-12 mb-2">Menu</Col>
					<Col className="col-12 mb-2">Menu</Col>
					<Col className="col-12 mb-2">Menu</Col>
					<Col className="col-12 mb-2">Menu</Col>
				</Row>
				</Offcanvas.Body>
		</Offcanvas>
	);
}
