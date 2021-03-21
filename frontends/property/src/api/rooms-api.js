export const fetchRooms = () => fetch(`${process.env.REACT_APP_API_URL}/api/rooms`).then(data => data.json())
