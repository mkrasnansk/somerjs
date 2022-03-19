import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../features/state/menuStatesSlice";
import "../assets/scss/burgerCSS.scss";

export const Hamburger = () => {
	const show = useSelector((state) => state.menuStates.show);
	const hideBtnClose = useSelector((state) => state.menuStates.iWidth);
	const dispatch = useDispatch();
	const toggleShow = () => {
		dispatch(changeState());
	};

	return (
		<Container className="w-100 text-end">
			<div className={hideBtnClose && show ? "d-none" : ""}>
				<Button variant="btn btn-link shadow-none" onClick={toggleShow} className="me-2">
					<div id="close-icon" className={show ? "open" : ""}>
						<span className="bg-primary"></span>
						<span className="bg-primary"></span>
						<span className="bg-primary"></span>
					</div>
				</Button>
			</div>
		</Container>
	);
};
