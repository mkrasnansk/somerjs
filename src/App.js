import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MainLayout } from "./components/layout/MainLayout";
import { changeAnim } from "./features/state/menuStatesSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const timeOutAnim = setTimeout(() => {
			dispatch(changeAnim(true));
		}, 500);
		return () => {
			clearTimeout(timeOutAnim);
		};
	}, [dispatch]);


	return (
		<Container>
			<MainLayout />
		</Container>
	);
}

export default App;
