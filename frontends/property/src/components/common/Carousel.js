import { useEffect, useState } from "react";
import "../../styles/carousel.scss";

const Carousel = () => {
	const [images, setImages] = useState([]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [maxImageIndex, setMaxImageIndex] = useState(0);

	useEffect(() => {
		fetch("http://localhost:3000/api/images/type/hotel")
			.then((data) => data.json())
			.then((data) => {
				setImages(data);
				setMaxImageIndex(data.length - 1);
			});
		const imagesScroller = setInterval(() => {
			setCurrentImageIndex((prev) => (prev < maxImageIndex ? prev + 1 : 0));
		}, 15000);
		return () => clearInterval(imagesScroller);
	}, []);

	const handleRadioClick = (e) => {
		setCurrentImageIndex(e.target.value);
	};

	if (!images) return <h1>...Loading</h1>;

	return (
		<section className='carousel'>
			<ul>
				{images.map(
					(image, index) =>
						index === currentImageIndex && (
							<li key={image.id}>
								<img src={image.url} alt={image.name} />
							</li>
						)
				)}
			</ul>
			<ul>
				{images.map((image, index) => (
					<li
						key={image.id}
						value={index}
						onClick={(e) => handleRadioClick(e)}
						className={currentImageIndex === index ? "carousel-active" : null}
					></li>
				))}
			</ul>
		</section>
	);
};

export default Carousel;
