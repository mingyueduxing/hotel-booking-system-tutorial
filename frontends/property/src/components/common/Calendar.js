import { useState, useEffect } from "react"

const Calendar = ({ onChange }) => {
    const [currentMonth, setCurrentMonth] = useState(currentCalendarMonth)
    const [currentYear, setCurrentYear] = useState(currentCalendarYear)
    const [currentDate, setCurrentDate] = useState(currentCalendarDate)

    const handleChangeDate = (date) => {
        if (!date.label) return

        setCurrentDate(date.label)
    }

    useEffect(() => onChange(`${currentDate}-${months[currentMonth]}-${currentYear}`), [currentDate, currentMonth, currentYear]);

    const handePrev = () => {
        const date = new Date(currentYear, currentMonth - 1, 1)
        const prevYear = date.getFullYear()
        const prevMonth = date.getMonth()
        setCurrentMonth(prevMonth)
        setCurrentYear(prevYear)
    }

    const handeToday = () => {
        setCurrentYear(currentCalendarYear)
        setCurrentMonth(currentCalendarMonth)
        setCurrentDate(currentCalendarDate)
    }

    const handeNext = () => {
        const date = new Date(currentYear, currentMonth + 1, 1)
        const nextYear = date.getFullYear()
        const nextMonth = date.getMonth()
        setCurrentMonth(nextMonth)
        setCurrentYear(nextYear)
    }

    return <div className="calendar">
        <div className="calendar__header">
            <ul>
                <li onClick={handePrev}>prev</li>
                <li onClick={handeToday}>today</li>
                <li onClick={handeNext}>next</li>
            </ul>
        </div>
        <div className="calendar__content">
            <h1>{months[currentMonth]} - {currentYear}</h1>
            <ul>
                {weekdays.map(item => <li key={item}>{item}</li>)}
            </ul>
            <ul>
                {getDates(currentYear, currentMonth).map((item, index) => (
                    <li key={index}
                        onClick={() => handleChangeDate(item)}
                        className={currentDate === item.label ? 'current' : ''}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const currentCalendarYear = new Date().getFullYear()
const currentCalendarMonth = new Date().getMonth()
const currentCalendarDate = new Date().getDate()

const getDates = (
    year = currentCalendarYear, 
    month = currentCalendarMonth, 
) => {
    const datesInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayWeekday = new Date(year, month, 1).getDay()

    const dates = []
    const startEmptySlots = firstDayWeekday === 1 ? 8 : firstDayWeekday

    for (let i = 1; i < startEmptySlots; i++) {
        dates.push({ label: '', value: '' })
    }

    for (let i = 1; i <= datesInMonth; i++) {
        dates.push({
            label: i,
            value: new Date(year, month, i)
        })
    }

    const endEmptySlots = 42 - dates.length
    for (let i = 0; i < endEmptySlots; i++) {
        dates.push({ label: '', value: '' })
    }

    return dates
}

export default Calendar