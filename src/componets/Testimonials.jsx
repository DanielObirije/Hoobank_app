import styled from 'styled-components'
import { Container } from "./Styledcomponet/Container"
import { Styledsection } from './Styledcomponet/Section.styled'
import { people01,people02,people03 } from '../image'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
export default function Testimonials() {
  return (
    <Styledsection>
        <Container>
        <Testimonialstyles>
            <div className="testimonials_box">
                <h2>What people are saying about us</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            
            <div className="testimonial">
                <div className="testimonial_cards">
                    < FormatQuoteIcon/>
                    <p> Money is only a tool. It will take you wherever 
                    you wish, but it will not replace you as the driver.
                    </p>
                    <div className="testimonial_info">
                        <img src={people01}/>
                        <div className="testimonials_text">
                            <h3>Hermen joson</h3>
                            <span>Founder and leader</span>
                        </div>
                    </div>
                </div>        
                
                <div className="testimonial_cards">
                    < FormatQuoteIcon/>
                    <p> 
                    Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    <div className="testimonial_info">
                        <img src={people02}/>
                        <div className="testimonials_text">
                            <h3>Steve Mark</h3>
                            <span> Co-founder</span>
                        </div>
                    </div>
                </div>     
                <div className="testimonial_cards">
                    < FormatQuoteIcon/>
                    <p> 
                    It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                    <div className="testimonial_info">
                        <img src={people03}/>
                        <div className="testimonials_text">
                            <h3>Kenn Gallagher</h3>
                            <span>Manager</span>
                        </div>
                    </div>
                </div>     
           </div>
          
        </Testimonialstyles>
        </Container>

    </Styledsection>
    
  )
}

const Testimonialstyles = styled.div`
.testimonials_box{
    display: grid;
    grid-template-columns: 1fr ;
    margin-bottom: 2rem;
}
.testimonial{
    display: grid;
    grid-template-columns: 1fr ;
    justify-items: center;
    align-items: center;
    gap: 1rem;
}
 .testimonials_box > h2{
    margin-bottom: 1rem;
    font-size: var( --h2-font-size)
    
 }
 .testimonials_box > p{
    font-size: var(  --smaller-font-size);
  color: darkgray;
  line-height:1.5rem ;
 }
 .testimonial_cards{
    background: linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);
    padding: 1rem;
    border-radius: 1rem

 }
 .testimonial_cards > .MuiSvgIcon-root{
   color: #00F6FF;

 }
.testimonial_cards > p{
    color: darkgray;
    font-size: var(  --smaller-font-size);
 }
.testimonial_info > img{
    width:2.2rem;
}
.testimonials_text  > h3{
    font-weight: var(--font-medium)
    
}
.testimonials_text > span{
    font-size:var( --smallest-font-size);
    color: gray;
}
.testimonial_info{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: .80rem;
}
@media screen and (min-width: 680px){

    .testimonial{
  grid-template-columns: 1fr 1fr 1fr;
}
}
`
