import React from "react"
import PropTypes from "prop-types"


class Users extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = () => {
    fetch('localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  }

  handleChange = (e, { value }) => {
    console.log(e)
  }

  render() {

    const { email, password } = this.state

    return (
      <div className='loginPage'>
        <form className='loginContainer' onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input type='text' placeholder='Email' onChange={(e) => this.handleChange} value={email.email} />
          <br />
          <input type='password' placeholder='Password' onChange={(e) => this.handleChange} value={password.password} />
          <br />
          <button type='submit'>Login</button>
          <br />
          <a href='register'>SignUp</a>
        </form>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users
