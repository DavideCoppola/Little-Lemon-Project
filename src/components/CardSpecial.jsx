const CardSpecials = (props) => {
	const { image, title, price, desc } = props;

	return (
		<section
			style={{
				backgroundColor: "#E7E7E7",
				borderRadius: "1rem",
				flex: "1 1 calc(33.333% - 1rem)",
				maxWidth: "300px",
				minWidth: "250px",
				padding: "1rem",
				margin: "0.5rem",
			}}
		>
			<img src={image} alt="Restaurant Food Image" style={{ width: "80%" }} />
			<article style={{ display: "flex", justifyContent: "space-between" }}>
				<h4>{title}</h4>
				<p>{price}</p>
			</article>
			<article>{desc}</article>
			<p style={{ fontWeight: "bold" }}>Order a delivery</p>
		</section>
	);
};

export default CardSpecials;
