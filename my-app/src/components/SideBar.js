import { Link } from "react-router-dom";
import "./sideBar.css";
const SideBar = () => {
	return (
		<ul className="list-unstyled sideBar">
			<div className="container">
				<li className="list-item p-2">
					<Link to={"/products"}>Get All Products</Link>
				</li>
				<li className="list-item p-2">
					<Link to={"/categories"}>Get All Category</Link>
				</li>
			</div>
		</ul>
	);
};

export default SideBar;
