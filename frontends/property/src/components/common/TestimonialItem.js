const TestimonialItem = ({ avatar, description, name}) => <>
    <img src={avatar} alt="user avatar" />
    <p>{description}</p>
    <p>{name}</p>
</>

export default TestimonialItem