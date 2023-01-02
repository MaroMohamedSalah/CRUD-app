import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
	const [products, setProducts] = useState([]);
	const getAllProduct = () => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	};
	useEffect(() => {
		getAllProduct();
	}, []);
	const deleteProduct = (product) => {
		Swal.fire({
			title: `Do you want to delete product with id: ${product.id} ?`,
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Yes",
			denyButtonText: `No`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/products/${product.id}`, {
					method: "DELETE",
				}).then((res) => {
					res.json();
					if (res.status === 200) {
						Swal.fire("Saved!", "", "success");
						getAllProduct();
					} else {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Something went wrong!",
							footer: '<a href="">Why do I have this issue?</a>',
						});
					}
				});
			} else if (result.isDenied) {
				Swal.fire("Changes are not saved", "", "info");
			}
		});
	};
	const product = products.map((pro) => {
		return (
			<tr key={pro.id}>
				<th scope="row">{pro.id}</th>
				<td>{pro.title}</td>
				<td>{pro.price}$</td>
				<td>{pro.category.name}</td>
				<td className="d-flex justify-content-around m-0">
					<button
						className="btn btn-danger btn-sm"
						onClick={() => deleteProduct(pro)}
					>
						Delete
					</button>
					<Link to={`/products/${pro.id}`} className="btn btn-info btn-sm">
						View
					</Link>
					<button className="btn btn-primary btn-sm">Edit</button>
				</td>
			</tr>
		);
	});
	return (
		<>
			<div className="container">
				<h1 className="text-center">Products page</h1>
				<Link to={"/products/add"} className="btn btn-success">
					Add New Product
				</Link>
				<table className="table table-dark table-striped mt-5">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Price</th>
							<th scope="col">Category</th>
							<th scope="col" className="text-center">
								Operations
							</th>
						</tr>
					</thead>
					<tbody>{product}</tbody>
				</table>
			</div>
		</>
	);
};
export default Products;
