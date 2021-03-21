import React, { useState, useEffect } from 'react';

const RoomsList = () => {
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
	}, [roomId]);

	function renderRoomImage(){
		return (
			<ul>
				{images.map(image => (<li key={image.id}><img src={image.url} alt="roomImage"/></li>))}
			</ul>
		)
	}

	function renderRoomItem(){
		return (
			<>
			{rooms.map(roomItem => (
				<ul>
					{renderRoomImage()}
					<li key={roomItem.type}>{roomItem.type}</li>
					<li key={roomItem.price}>{roomItem.price}</li>
					<button key='button'>book now!</button>
				</ul>
			))}
			</>
		)
	}

	return (
		<section className='roomsList'>
			{renderRoomItem()}
		</section>
	)
}

export default RoomsList;