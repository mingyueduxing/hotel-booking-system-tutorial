import { useState } from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../state/login/actions'
import actionTypes from '../state/login/action-types'

const Login = ({ loading, loginAction, history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await loginAction({
            username,
            password
        })

        if(result.type === actionTypes.LOGIN_SUCCEEDED) history.replace('/dashboard')
    }


    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="cancel">Cancel</button>
        <button type="submit" disabled={loading}>Login</button>
    </form>
}

const mapStateToProps = (state) => {
    const { login: {loading}} = state
    return {
        loading,
    }
}

const mapActionsToProps = {
    loginAction
}

export default connect(mapStateToProps, mapActionsToProps)(Login)