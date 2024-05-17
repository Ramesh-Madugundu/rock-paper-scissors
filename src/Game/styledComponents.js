import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`
export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`
export const ScoreCardContainer = styled.div`
  margin: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`
export const ParagraphScore = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin: 0;
`
export const ScoreSpan = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin: 0;
`
export const ItemsImagesContainer = styled.ul`
  height: 50%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`
export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
