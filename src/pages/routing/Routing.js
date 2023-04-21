import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "../error/PageNotFound";
import Navbar from "../navbar/Navbar";
import Login from "../login/Login";

export default function Routing() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/home" element={<Navbar />} />
					<Route exact path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</div>
	);
}
