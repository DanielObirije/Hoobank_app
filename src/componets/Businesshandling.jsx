import styled from 'styled-components'
import { Container } from "./Styledcomponet/Container"
import { Styledsection } from './Styledcomponet/Section.styled'
import StarIcon from '@mui/icons-material/Star';
import GppGoodIcon from '@mui/icons-material/GppGood';
import NearMeIcon from '@mui/icons-material/NearMe';
import Button from './Styledcomponet/Button';
export default  function Businesshandling() {
  return (
    <Container>
       <Styledsection>
          <StyledBuiness id='About-us'>
         
            <div className='transaction'>
                <h2>You do the business,will handle the money.</h2>
                <span className='yes'>With the right credit card,your can improve your finacial life by 
                building credits,earning rewards and saving money.but with
                 the hundreds od credit cards on the market
                </span>
                 <Button/>
            </ div>
            < div className='FlexConainer'>
              <div className="transation_box">
                  <div>
                  <div  className='Flex'>
                      <span> <StarIcon/> </span> 
                      <div className='transtion-text'>
                          <h3>Rewards</h3>
                          <span>The best credit cards offer some tantalizing combinations of promotions and prizes</span>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="transation_box">
                  <div className="transation_smallbox">
                  <div className='Flex'>
                      <span><GppGoodIcon/> </span> 
                      <div className="transtion-text">
                          <h3>100% Secured</h3>
                          <span>We take proactive steps make sure your information and transactions are secure.</span>
                      </div>
                  </div >
                  </div>
              </div>
              <div className="transation_box">
                  <div className="transation_smallbox">
                  <div className='Flex'>
                      <span> <NearMeIcon/> </span> 
                      <div className="transtion-text">
                          <h3>Balance transfar</h3>
                          <span>A balance transfer credit card can save you a lot of money in interest charges.</span>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
     
          </StyledBuiness> 
       </Styledsection>
    </Container>
  )
}

const StyledBuiness = styled.div`

display : grid;
grid-template-columns: 1fr;
align-items: center;
justify-items: start;
column-gap: 2rem;
& > h2{
    font-size: var(--h2-font-size);
    line-height: 2.2rem; 
}
& > span{
        font-size: var(  --smaller-font-size);   
        line-height: 1.2rem; 
        color: gray;
    }
.Flex{
  display: flex;
   justify-content: center;
   align-items: start;
   column-gap: .50rem;
   padding: .80rem ;
   border-radius:1rem;
 

   &:hover{
      
    background: linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%);
    box-shadow: 0px 20px 100px -10px #42475B1A;
      }
}
.Flex > span{
  display: flex;
   justify-content: center;
   align-items: start;
   column-gap: .50rem;
   background: #09977C1A;
   color: #00F6FF;

   padding: .80rem ;
   border-radius:1rem;

}
.Flex .MuiSvgIcon-root{
  font-size: 1.3rem;
}

.FlexConainer{
  display: flex;
   flex-direction: column;  
   justify-content: center;
   align-items: start;
   row-gap: 1rem;
}

.transaction > h2{
  font-size: var( --h2-font-size)
}
.transaction> span{
  font-size: var(  --smaller-font-size);
  color: gray;
  line-height:1.5rem ;

}
.transtion-text > span{
  font-size: var(--smallest-font-size);
  color: gray;
}

@media screen and (min-width: 850px){

&{
  grid-template-columns: 1fr 1fr ;
}
}
`
