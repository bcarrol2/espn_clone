import React from "react"
import PropTypes from "prop-types"


class Users extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (email, password) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => console.log(res))

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    const { email, password } = this.state

    return (
      <div className='loginPage'>
        <form className='loginContainer' onSubmit={() => this.handleSubmit(email, password)}>
          <h1>Please Login</h1>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name="email" onChange={this.handleChange} value={email} />
          <br />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name="password" onChange={this.handleChange} value={password} />
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
