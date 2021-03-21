import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadRooms } from '../../state/rooms/actions'
import RoomSuiteItem from './RoomSuiteItem'

const RoomSuites = ({loadRooms, rooms, loading}) => {
    useEffect(loadRooms, [])

    if(loading) return <h1>...Loading</h1>

    return <section className="section--rooms-suites">
        <h2>plenty of room</h2>
        <h1>Rooms & Suites</h1>
        <p>Woods Hotel has 35 elegantly furnished and air conditioned classic rooms, which will be a perfect pick both for business and leisure travelers…</p>

        <ul>
            {rooms.map((room, index) => <li key={index}><RoomSuiteItem {...room} /></li>)}
        </ul>
    </section>
}

const mapStateToProps = (state) => {
    const { rooms : { rooms, loading, error }, images: { images}} = state
    const roomsImages = images.filter(image => image.type === 'room')
    const roomsWithImages = rooms.map(room => ({
        ...room,
        url: (roomsImages.find(image => image.roomId === room.roomId) || { url: ''}).url
    }))
    return {
        rooms: roomsWithImages,
        loading
    }
}

const mapActionsToProps = {
    loadRooms
}

export default connect(mapStateToProps, mapActionsToProps)(RoomSuites)