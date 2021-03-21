const RoomSuiteItem = ({url, type, price}) => <>
    <img src={url} alt="room image"/>
    <h3>{type}</h3>
    <p>{price}</p>
    <button>book now</button>
</>

export default RoomSuiteItem