import React from 'react'

import * as S from './styles'

import TeamspotLogo from './teamspot.png'

const CallToAction = () => {
  return (
    <S.CallToAction>
      
      <S.Content>
        <S.Logo src={TeamspotLogo} />
        <S.Text>
          Engage Your Team. Track your Milestones. Reward hard work.
        </S.Text>
        
      </S.Content>
    </S.CallToAction>
  )
}

export default CallToAction
