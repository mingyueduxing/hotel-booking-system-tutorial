import {
	faChevronCircleLeft,
	faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CalendarList = () => (
	<div className='calendar-list'>
		<div className='calendar-list__header'>
			<ul>
				<li>
					prev <FontAwesomeIcon icon={faChevronCircleLeft} />
				</li>
				<li>today</li>
				<li>
					next
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</li>
			</ul>
		</div>
		<div className='calendar-list__content'>content</div>
	</div>
);

export default CalendarList;
