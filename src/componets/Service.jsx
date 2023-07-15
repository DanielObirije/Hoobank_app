import styled from 'styled-components'
import { Container } from "./Styledcomponet/Container"
import { Styledsection } from './Styledcomponet/Section.styled'
import Button from './Styledcomponet/Button'

export default function Service() {
  return (
    <Container>
        <Styledsection>
            <Servicestyles>
          
                <div className="services_box">
                    <h2>Lets try our service now!</h2>
                    <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    <Button/>
                </div>
               
      
            </Servicestyles>

        </Styledsection>
    </Container>
  )
}

const Servicestyles = styled.div`
  display: grid;
  justify-items: center;
 .services_box{
background: linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
border-radius: 1rem;
padding: 1rem;
width: fit-content;
 }
.services_box h2{
    margin-bottom: 1rem;
    font-size: var( --h2-font-size)
  
}
.services_box p{
    font-size: var(  --smaller-font-size);
  color: darkgray;
  line-height:1.5rem ;
}

`