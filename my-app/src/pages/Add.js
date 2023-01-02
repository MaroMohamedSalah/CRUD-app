import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Add = () => {
	const [proName, setProName] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState(10);
	const [description, setDescription] = useState("");
	const date = new Date();
	let navigate = useNavigate();
	const formSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/products", {
				title: proName,
				price: price,
				description: description,
				images: [],
				creationAt: date,
				category: {
					id: 1,
					name: "Clothes",
					image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6146",
					creationAt: "2022-12-30T20:12:17.000Z",
					updatedAt: "2022-12-30T20:12:17.000Z",
				},
			})
			.then((res) => {
				if (res.status === 201) {
					Swal.fire("Good job!", "You add the product!", "success");
					setTimeout(() => {
						navigate("/products");
					}, 2000);
				}
			})
			.then((error) => console.log(error));
	};
	return (
		<div className="container">
			<h1 className="text-center">Add New Product</h1>
			<form className="row g-3 needs-validation mt-5" onSubmit={formSubmit}>
				<div className="col-md-4">
					<label htmlFor="validationCustom01" className="form-label">
						Product title
					</label>
					<input
						type="text"
						defaultValue={"Any product"}
						className="form-control"
						aria-label="ProductTitle"
						aria-describedby="basic-addon1"
						onChange={(e) => {
							setProName(e.target.value.trim());
						}}
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
				<div className="col-md-4">
					<label htmlFor="validationCustomUsername" className="form-label">
						Product price
					</label>
					<div className="input-group mb-3">
						<span className="input-group-text">$</span>
						<input
							type="number"
							defaultValue={10}
							className="form-control"
							aria-label="Amount (to the nearest dollar)"
							onChange={(e) => {
								setPrice(e.target.value.trim());
							}}
						/>
						<span className="input-group-text">.00</span>
						<div className="invalid-feedback">
							Please write a product price.
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<label htmlFor="validationCustom04" className="form-label">
						Category
					</label>
					<select
						className="form-select"
						id="validationCustom04"
						required
						onChange={(e) => {
							setCategory(e.target.value.trim());
						}}
					>
						<option defaultValue={"Choose"} disabled value="">
							Choose...
						</option>
						<option>Choose</option>
						<option>Choose2</option>
					</select>
					<div className="invalid-feedback">
						Please select a valid category.
					</div>
				</div>
				<div className="form-floating col-md-12">
					<textarea
						className="form-control"
						placeholder="Leave a comment here"
						id="floatingTextarea2"
						style={{ height: "100px" }}
						onChange={(e) => {
							setDescription(e.target.value.trim());
						}}
					></textarea>
					<label htmlFor="floatingTextarea2">Description</label>
				</div>
				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value=""
							id="invalidCheck"
							required
						/>
						<label className="form-check-label" htmlFor="invalidCheck">
							Agree to terms and conditions
						</label>
						<div className="invalid-feedback">
							You must agree before submitting.
						</div>
					</div>
				</div>
				<div className="col-12">
					<button className="btn btn-primary" type="submit">
						Add to database
					</button>
				</div>
			</form>
		</div>
	);
};
export default Add;
