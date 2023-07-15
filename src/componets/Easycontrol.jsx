import styled from 'styled-components';
import {Styledsection} from './Styledcomponet/Section.styled'
import { Container } from "./Styledcomponet/Container"
import { google,bill,apple } from '../image';

export default  function Easycontrol() {
  return (
    <div>
       <Styledsection>
          <Container>
             <Easypament id='Features'>
                   <img src={bill} alt='bill'/>
                    <div className="payment_method_box">
                        <h2>Easily control your <span>billing & invoicing.</span></h2>
                        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                         aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                        <div className="payment_application">
                           <img src={apple} alt='apple'/>
                           <img src={google} alt='google'/>
                        </div>
                    </div>
             </Easypament>
          </Container>
       </Styledsection>
    </div>
  )
}


const Easypament = styled.div`

display: grid;
grid-template-columns: 1fr  ;
align-items: center;
justify-items: center;
.payment_method_box > h2{
   font-size: var( --h2-font-size)
}
.payment_method_box > p{
   font-size: var(  --smaller-font-size);
  color: gray;
  line-height:1.5rem ;

}
.payment_application {
   margin-top: 2rem;
   display :flex;
   flex-direction: columns;
   column-gap: 1rem
}
.payment_application img{
   width: 7rem;
}
 
 & >img {

  width: 80vmin;

 }
 
@media screen and (min-width: 850px){

&{
  grid-template-columns: 1fr 1fr;
}
}
`


