const Calendar = () => {
	return (
		<>
			<div className='calendar__header'>
				<ul>
					{weekdays.map((item, index) => (
						<li keys={index}> {item}</li>
					))}
				</ul>
			</div>
		</>
	);
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export default Calendar;
