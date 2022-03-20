import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MoreText from "../assets/MoreText";
import { OffCanvasNavSideBar } from "../navigation/OffcanvasNavSideBar";
import { Hamburger } from "./Hamburger";


export const MainLayout = () => {
	const show = useSelector((state) => state.menuStates.show);
	return (
		<Row>
			<Col className={show ? "col-12 col-lg-9 slowMotion " : "col-12 slowMotion "}>
				<Hamburger />
				<MoreText />
			</Col>
				<OffCanvasNavSideBar />
		</Row>
	);
};
