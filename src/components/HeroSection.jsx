import restaurantFood from "../images/restauranfood.jpg";

const HeroSection = () => {
	return (
		<section
			style={{
				backgroundColor: "#495E57",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<article style={{ margin: "0 11rem 0 11rem" }}>
				<h2 style={{ color: "#F4CE14", fontWeight: "bold" }}>Little Lemon</h2>
				<h4 style={{ color: "#FFFFFF" }}>Chicago</h4>
				<p style={{ color: "#FFFFFF" }}>
					Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean
					restaurant, focused on traditional recipes served with a modern twist. The
					chefs draw inspiration from Italian, Greek, and Turkish culture and have a
					menu of 12–15 items that they rotate seasonally. The restaurant has a
					rustic and relaxed atmosphere with moderate prices, making it a popular
					place for a meal any time of the day.
				</p>
				<button
					style={{
						backgroundColor: "#F4CE14",
						color: "#000000",
						borderRadius: "0.5rem",
						marginTop: "3rem",
					}}
				>
					Reserve a table
				</button>
			</article>
			<article>
				<img
					src={restaurantFood}
					alt="Restaurant Food Image"
					style={{ width: "40%", marginTop: "4rem" }}
				/>
			</article>
		</section>
	);
};

export default HeroSection;
