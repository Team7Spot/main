import styled from 'styled-components'

export const CallToAction = styled.div`
  width: calc(100% - 64px);
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`

export const Content = styled.div`
  width: 400px;
  height: 240px;
  padding: 32px;
  background: #37D7FC;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 20px;
  color: white;
  font-weight: 600;
`

export const Logo = styled.img`
  height: 120px;
  margin-right: 16px;
`

export const Text = styled.h2`
  font-size: 26px;
  color: white;
`

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`