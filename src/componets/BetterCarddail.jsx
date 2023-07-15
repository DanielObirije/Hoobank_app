import styled from 'styled-components';
import {Styledsection} from './Styledcomponet/Section.styled'
import { Container } from "./Styledcomponet/Container"
import { card} from '../image';
import Button from './Styledcomponet/Button';
export default  function BetterCarddail() {
  return (
    <Styledsection>
    <Container>
        <Carddail id='Solutions'>
              <div className="card_method_box">
                  <h2>Find a better card deal in few easy steps.</h2>
                  <p>Arcu tortor, purus in mattis at sed integer faucibus. 
                    Aliquet quis aliquet eget mauris tortor.ç 
                    Aliquet ultrices ac, ametau.
                  </p>
                  <Button/>
              </div>
              <img src={card} alt='card'/>
         </Carddail>
    </Container>
 </Styledsection>
  )
}


const Carddail = styled.div`
 

    display: grid;
grid-template-columns: 1fr;
align-items: center;
justify-items: center;

.card_method_box > p{
    font-size: var(  --smaller-font-size);
  color: gray;
  line-height:1.5rem ;
}
.card_method_box > h2{
    font-size: var( --h2-font-size)
}
img{
  width: 80vmin;
}

@media screen and (min-width: 850px){

&{
  grid-template-columns: 1fr 1fr;
}
}

`