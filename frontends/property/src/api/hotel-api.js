export const fetchHotel = () => fetch(`${process.env.REACT_APP_API_URL}/api/hotel`).then(data => data.json())
