import styled from 'styled-components'

export const Header = styled.div`
  width: calc(100% - 64px);
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  background: linear-gradient(90deg, rgba(97,218,251,1) 36%, rgba(0,212,255,1) 100%);
`

export const Logo = styled.img`
  height: 56px;
  margin-right: 16px;
`

export const Title = styled.h1`
  font-size: 30px;
  color: white;
`

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`