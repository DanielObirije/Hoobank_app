import styled from "styled-components"
import { Container } from "./Styledcomponet/Container"
import  { Styledsection } from './Styledcomponet/Section.styled'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
export default  function Figures() {
  return (
    <Styledsection>
        <Container>
         <Figuresstyled>
              <div className="figures">
                 <div><h2>3800+</h2></div>
                  <div><p> USER-ACTIVE </p></div>
              </div>
              <div className="figures">
                 <div><h2>230+</h2></div>
                  <div><p> TRUSTED </p></div>
              </div>
              <div className="figures">
                 <div><h2>$230M+</h2></div>
                  <div><p>TRANSACTION </p></div>
              </div>
                 {/* <p> <h2>3800+</h2> User Active <HorizontalRuleIcon/></p> */}
         </Figuresstyled>
        </Container>
    </Styledsection>
     
  )
}

const Figuresstyled = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
   gap: 1rem;
 
 .figures{
    display: flex;
    align-items: center;
    column-gap: .50rem;
    
  }
 p{
     font-size: 1rem;
     color:#00F6FF;

  }
  
/* @media screen and (min-width: 850px){

&{
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
} */

`
