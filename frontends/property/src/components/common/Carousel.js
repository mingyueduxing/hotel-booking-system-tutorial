import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../../styles/carousel.scss";

const Carousel = () => {
	const [images, setImages] = useState([]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		fetch("http://localhost:3000/api/images/type/hotel")
			.then((data) => data.json())
			.then((data) => setImages(data));
	}, []);

	if (!images) return <h1>...Loading</h1>;
	const handleRadioClick = (e) => {
		const deactive = document.getElementsByClassName("carousel-active");
		if (deactive.length > 0) {
			deactive[0].classList.remove("carousel-active");
		}
		setCurrentImageIndex(e.target.value);
		e.target.classList.add("carousel-active");
	};

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
					></li>
				))}
			</ul>
			<FontAwesomeIcon icon={faChevronLeft} />
			<FontAwesomeIcon icon={faChevronRight} />
		</section>
	);
};

export default Carousel;
