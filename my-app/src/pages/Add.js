import { useState } from "react";

const Add = () => {
	const [proName, setProName] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	return (
		<div className="container">
			<h1 className="text-center">Add New Product</h1>
			<form action="" className="row">
				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						N
					</span>
					<input
						type="text"
						className="form-control"
						placeholder="Product Name"
						aria-label="ProductName"
						aria-describedby="basic-addon1"
						onChange={(e) => {
							setProName(e.target.value.trim());
						}}
					/>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						C
					</span>
					<input
						type="text"
						className="form-control"
						placeholder="Category"
						aria-label="Category"
						aria-describedby="basic-addon1"
						onChange={(e) => {
							setCategory(e.target.value.trim());
						}}
					/>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text">$</span>
					<input
						type="text"
						className="form-control"
						aria-label="Amount (to the nearest dollar)"
						onChange={(e) => {
							setPrice(e.target.value.trim());
						}}
					/>
					<span className="input-group-text">.00</span>
				</div>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};
export default Add;
