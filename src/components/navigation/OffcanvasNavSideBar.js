import { useEffect, useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAnim, changeInnerWidth, changeState } from "../../features/state/menuStatesSlice";
import "../assets/scss/circle.scss";
import { BiMenu } from "react-icons/bi";
import { Bubble } from "../other/Bubble";
import { Link } from "react-router-dom";
import { debounce } from "../assets/helpers/debounce";

export function OffCanvasNavSideBar() {
	const [circlePosition, setCirclePosition] = useState(
		Math.floor(window.pageYOffset + window.innerHeight / 1.2),
	);
	const [bubble, setBubble] = useState(false);
	const show = useSelector((state) => state.menuStates.show);
	const iWidth = useSelector((state) => state.menuStates.iWidth);
	const dispatch = useDispatch();
	const toggleShow = () => {
		setBubble(false);
		dispatch(changeState());
	};
	const handleResize = debounce(() => {
		if (window.innerWidth < 992) {
			dispatch(changeInnerWidth(true));
		} else {
			dispatch(changeInnerWidth(false));
		}
	}, 250);
	const handlePosition = debounce(() => {
		let halfHeight = Math.floor(window.innerHeight / 1.2);
		setCirclePosition(Math.floor(window.pageYOffset + halfHeight));
	}, 100);
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		if (!show) {
			window.addEventListener("scroll", handlePosition);
		}
		return () => {
			window.removeEventListener("resize", handleResize);
			if (!show) {
				window.removeEventListener("scroll", handlePosition);
			}
		};
	}, [handleResize, handlePosition, show]);

	const backTOLayout = () => {
		dispatch(changeAnim(false));
		dispatch(changeState());
	};

	const circleElement = () => {
		return (
			<Col>
				{bubble ? <Bubble start={bubble} positionStart={circlePosition} /> : ""}
				<div
					onMouseEnter={() => setBubble(true)}
					onMouseLeave={() => setBubble(false)}
					className="circle bg-primary"
					onClick={toggleShow}
					style={{ top: circlePosition }}
				>
					<div className="d-flex h-100 justify-content-center align-items-center">
						<BiMenu className="size text-white" />
					</div>
				</div>
			</Col>
		);
	};
	return (
		<>
			<Col className={show ? "d-block col-12 col-lg-3" : "d-none"}>
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
								<Link to="/">
									<Button onClick={backTOLayout} className="col-12">
										Home
									</Button>
								</Link>
							</Col>
							<Col className="col-12 mb-2">
								<Link to="/about">
									<Button className="col-12">About</Button>
								</Link>
							</Col>
							<Col className="col-12 mb-2">
								<Link to="/users">
									<Button className="col-12">Users</Button>
								</Link>
							</Col>
						</Row>
					</Offcanvas.Body>
				</Offcanvas>
			</Col>
			{!show && circleElement()}
		</>
	);
}
