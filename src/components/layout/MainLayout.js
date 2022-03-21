import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../navigation/MainRouter";
import { OffCanvasNavSideBar } from "../navigation/OffcanvasNavSideBar";
import { Hamburger } from "./Hamburger";

export const MainLayout = () => {
	const show = useSelector((state) => state.menuStates.show);
	return (
		<BrowserRouter>
			<Row>
				<Col className={show ? "col-12 col-lg-9 slowMotion " : "col-12 slowMotion "}>
					<Hamburger />
					<MainRouter />
				</Col>
				<OffCanvasNavSideBar />
			</Row>
		</BrowserRouter>
	);
};
