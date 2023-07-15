import styled from 'styled-components'
import { Container } from "./Styledcomponet/Container"
import { Styledsection } from './Styledcomponet/Section.styled'
import { binance,airbnb,coinbase,dropbox } from '../image'

export default function Sponsors() {
  return (
    <Container>
        <Styledsection>
            <Styledsponsor>
           
                <img src={binance} alt='binaace'/>
                <img src={airbnb} alt='airbnb'/>
                <img src={coinbase} alt='coinbase}'/>
                <img src={dropbox} alt='dropbox'/>

            </Styledsponsor>
        </Styledsection>
    </Container>
  )
}

const Styledsponsor = styled.div`
  display:  grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  
  & > img{
     width: 7rem
  }
  
@media screen and (min-width: 700px){

&{
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
}

`