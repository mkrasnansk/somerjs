import { useEffect } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeInnerWidth, changeState } from "../../features/state/menuStatesSlice";

const debounce = (func, wait, immediate) => {
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
};

export function OffCanvasNavSideBar() {
	const show = useSelector((state) => state.menuStates.show);
	const iWidth = useSelector((state) => state.menuStates.iWidth);
	const dispatch = useDispatch();
	const toggleShow = () => {
		dispatch(changeState());
	};
	const handleResize = debounce(() => {
		if (window.innerWidth < 992) {
			dispatch(changeInnerWidth(true));
		} else {
			dispatch(changeInnerWidth(false));
		}
	}, 250);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener(`resize`, handleResize);
	}, [handleResize]);

	return (
		<Offcanvas
			placement="end"
			className={iWidth ? "w-100 " : "w-25 bg-light"}
			id="OFFc"
			backdrop={true}
			scroll
			onHide={toggleShow}
			show={show}
			backdropClassName="backdropHidden"
		>
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
