import { Col, Container, Row } from "react-bootstrap";
import { FormHomePage } from "../Forms/FormHomePage";
import { DeviceComponent } from "../other/DeviceComponent";
import { LoteryNums } from "../other/LoteryNums";
import { MapComponent } from "../other/MapComponent";

export const Home = () => {

	return (
		<Container>
			<Row className="align-items-center my-2">
				<Col className="col-12 col-lg">
					<MapComponent />
				</Col>
				<Col className="col-12 col-lg">
					<DeviceComponent />
				</Col>
			</Row>
			<FormHomePage/>
			<LoteryNums />
		</Container>
	);
};
