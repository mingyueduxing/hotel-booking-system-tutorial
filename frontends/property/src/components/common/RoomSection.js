import React, { useState, useEffect } from 'react';

const RoomSection = () => {
	const [rooms, setRooms] = useState([]);
	const [roomId, setRoomId] = useState('');
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/rooms')
		.then(response => response.json())
		.then(data => setRooms(data))
	}, []);

	useEffect(() => {
		const roomIds = rooms.map(room => room.roomId);
		roomIds.map((roomId) => {
			setRoomId(roomId);
			fetch(`http://localhost:3000/api/images/${roomId}`)
			.then(response => response.json())
			.then(data => setImages(data)); 
		})
	}, [roomId])

	return (
		<section className='roomsInfo'>
			{rooms.map(room => (
				<ul>
					<ul>
						{images.map(image => (<li key={image.id}><img src={image.url}/></li>))}
					</ul>
					<li key={room.type}>{room.type}</li>
					<li key={room.price}>{room.price}</li>
					<li key='button'><button>book now!</button></li>
				</ul>
			))}
		</section>
	)
}

export default RoomSection;