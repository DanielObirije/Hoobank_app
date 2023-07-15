import styled from "styled-components"

import {Styledsection} from './Styledcomponet/Section.styled'
import { Container } from "./Styledcomponet/Container"
import { robot } from "../image"
export default function Paymentmethod() {
  return (
    <>
       <Styledsection>
           <Container>
           <Payment id="Home">
                <div>
                    <div className='payment-titile'>
                         20% <span>Discount</span> for<span> 1 mount</span>  account
                       
                    </div>
                        <h1>
                           The next <span>Generation</span> Payment method.
                        </h1>
                    <div className='payment-text'>
                        <p>Our team of experts uses a methodology identify
                        the credit card most likely to fit your needs.
                    we examine annual percentage rates,annual fees.
                       </p>
                    </div>
                    
                </div>
                <div className="image">
                    <img src={robot} alt='robot'/>
                </div>
                </Payment>
                </Container>
            </Styledsection>
    
    </>
  )
}

const Payment = styled.div`

margin-top: 5rem;
 display: grid;
 grid-template-columns: 1fr ;
 justify-items: center;
 align-items: center;

.payment-titile{
  position: relative;
 background: linear-gradient(125.17deg, #272727 0%, #11101D 100%);
  padding: .20rem .50rem ;
  border-radius: 1rem;
  font-size: var(--mb-0-75);
  width: fit-content;
  font-size: var(--smaller-font-size) ;
}
.payment-titile > span{
  color: gray;
  
}
a{
    font-size:  1px;
}
h1{font-size: var(--big-font-size)}

h1 > span{
  display: block ;
  background: radial-gradient(
   64.18% 64.18% at 71.16% 35.69%,
   #def9fa 0.89%,
   #bef3f5 17.23%,
   #9dedf0 42.04%,
   #7de7eb 55.12%,
   #5ce1e6 71.54%,
   #33bbcf 100%
 );
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 background-clip: text;
 text-fill-color: transparent;
}



.payment-text > p{
  font-size: var( --normal-font-size);
 color: gray;
 margin-top: 1rem ;
 line-height: 1.2rem;
 margin-bottom: 1rem ;
}

/* .image{
  width: 80vmin;
  justify-self: end;
} */

@media screen and (max-width: 850px){
.image{
  width: 80vmin;
  justify-self: end;
} 

}
@media screen and (min-width: 850px){

&{
  grid-template-columns: 1fr 1fr;
}

}

`
