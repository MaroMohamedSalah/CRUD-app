import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Add from "./pages/Add";
import Product from "./pages/Product";
const App = () => {
	return (
		<>
			<Nav />
			<div className="row">
				<div className="col-2">
					<SideBar />
				</div>
				<div className="col-10 p-0">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="products" element={<Products />} />
						<Route path="products/:productId" element={<Product />} />
						<Route path="products/add" element={<Add />} />
						<Route path="categories" element={<Categories />} />
					</Routes>
				</div>
			</div>
		</>
	);
};
export default App;
