import React from 'react'

const ClientLogin = () => {
  return (
    <div className="text-center m-5-auto">
    
    <form action="/home">

        <p>
            <label>Username or email address</label><br/>
            <input type="text" name="first_name" required />
        </p>

        <p>
            <label>Password</label><br/>
            <input type="text" name="first_name" required />
        </p>

        <p>
            <button id="sub_btn" type="submit">Login</button>
        </p>
    </form>
    <footer>
    
    </footer>
</div>
  )
}

export default ClientLogin
