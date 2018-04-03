import React from 'react'

const OauthLoginForm = (props) => {
  return (
    <div>
      <form method='get' action='/auth/google'>
        <button type='submit' className='btn bg-red white p1 rounded'>Login with Google</button>
      </form>

      <form method='get' action='/auth/twitter'>
        <button type='submit' className='btn bg-red white p1 rounded'>Login with Twitter</button>
      </form>
    </div>
  )
}

export default OauthLoginForm
