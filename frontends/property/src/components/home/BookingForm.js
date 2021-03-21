import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "../common/Calendar";
import React from "react";

const BookingForm = () => {
	const [showCheckinCalendar, setShowCheckinCalendar] = useState(false);
	return (
		<section className='section--booking-form'>
			<ul>
				<li>
					<h1>checkin</h1>
					<p>
						Checkin Date
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</p>
				</li>
				<li>
					<h1>checkout</h1>
					<p>
						checkout Date
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</p>
				</li>
				<li>
					<h1>Adult</h1>
					<p>
						Adult <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</p>
				</li>
				<li>
					<h1>Children</h1>
					<p>
						Children <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</p>
				</li>
				<li>
					<button>check availability</button>
				</li>
			</ul>
			<Calendar />
		</section>
	);
};

export default BookingForm;
