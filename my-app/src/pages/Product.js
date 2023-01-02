import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:3000/products/${productId}`)
			.then((res) => res.json())
			.then((product) => setProduct(product));
	}, [productId]);
	return (
		<>
			<h1 className="text-center">{product.title}</h1>
			<div className="card product-card mb-3">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-bs-ride="true"
				>
					<div className="carousel-indicators card-img-top m-0">
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div className="carousel-inner mr-0 ml-0">
						<div className="carousel-item active">
							<img src={product.images} className="d-block w-100" alt="..." />
						</div>
						<div className="carousel-item">
							<img src={product.images} className="d-block w-100" alt="..." />
						</div>
						<div className="carousel-item">
							<img src={product.images} className="d-block w-100" alt="..." />
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="card-body">
					<h5 className="card-title">{product.title}</h5>
					<h1 className="card-text text-primary">{product.price}$</h1>
					<p className="card-text">{product.description}</p>
					<p className="card-text">
						<small className="text-muted">updated at {product.updatedAt}</small>
					</p>
					<Link to={"/products"} className="btn btn-primary">
						Back to all products
					</Link>
				</div>
			</div>
		</>
	);
};
export default Product;
