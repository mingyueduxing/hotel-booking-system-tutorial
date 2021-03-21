export const fetchImages = () => fetch(`${process.env.REACT_APP_API_URL}/api/images`).then(data => data.json())
