import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";

const MainRouter = () => {
	return (
		<Routes>
			<Route index path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/users" element={<Users />}></Route>
		</Routes>
	);
};
export default MainRouter;
