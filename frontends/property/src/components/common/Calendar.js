const Calendar = () => <div className="calendar">
    <div className="calender__header">
        <ul>
            {weekdays.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
    <div className="calender__content">
        <ul>
            <li>1</li>
            ...
            <li onClick="2020-03-31">31</li>
        </ul>
    </div>
</div>

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const getCalendarDates = () => {
    return [{
        label: '1',
        value: '2020-03-01'
    },{
        
    }]
}

export default Calendar