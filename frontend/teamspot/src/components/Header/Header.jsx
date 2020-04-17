import React from 'react'

import { GoogleLogin } from 'react-google-login'

import * as S from './styles'

import TeamspotLogo from './teamspot.png'

const responseGoogle = (response) => {
  console.log(response);
  // alert('Welcome to Teamspot, ' + response.profileObj.name + '!')
}

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={TeamspotLogo} />
      <S.Title>Teamspot</S.Title>

      <S.Spacer />

      <GoogleLogin
        clientId="688997966189-j8kp34hm6ng6kmm5m416lf4235igg6e4.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </S.Header>
  )
}

export default Header
