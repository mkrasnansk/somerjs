import { Col, Container, Row } from "react-bootstrap";
import { MapComponent } from "../other/MapComponent";

export const Home = () => {
	return (
		<Container>
			<Row>
				<Col>
					Mapa Oblasti
					<MapComponent />
				</Col>
				<Col>Zariadenia a Web </Col>
			</Row>
		</Container>
	);
};
