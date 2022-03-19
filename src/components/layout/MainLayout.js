import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../features/state/menuStatesSlice";

import MoreText from "../assets/MoreText";
import "../assets/scss/circle.scss";
import { OffCanvasNavSideBar } from "../navigation/OffcanvasNavSideBar";
import { Hamburger } from "./Hamburger";

export const MainLayout = () => {
	const show = useSelector((state) => state.menuStates.show);
	const dispatch = useDispatch();
	const toggleShow = () => {
		dispatch(changeState());
	};
	return (
		<Row>
			<Col className={show ? "col-12 col-lg-9 slowMotion " : "col-12 slowMotion "}>
				<div className="circle"></div>
				<Hamburger />
				<MoreText />
			</Col>
			<Col className={show ? "d-block col-12 col-lg-3" : "d-none"}>
				<OffCanvasNavSideBar backdrop={true} onHide={toggleShow} showCanvas={show} />
			</Col>
		</Row>
	);
};
