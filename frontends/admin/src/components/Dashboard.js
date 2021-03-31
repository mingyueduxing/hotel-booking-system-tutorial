import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../state/users/actions'

const Dashboard = ({users, loadUsers, loading}) => {
    useEffect(loadUsers, [])
    if(loading) return <h1>...Loading</h1>
    return <>
        <h1>Dashboard</h1>
        {users.length > 0 && <ul>
            {users.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>}
    </>
}

const mapStateToProps = state => {
    const { users: { users, loading }} = state
    return {
        users,
        loading
    }
}

const mapActionsToProps = {
    loadUsers
}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard)