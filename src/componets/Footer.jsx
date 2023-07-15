import styled from 'styled-components'
import { Container } from "./Styledcomponet/Container"
import { Styledsection } from './Styledcomponet/Section.styled'
import { logo } from '../image'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { facebook,twitter,instagram,linkedin } from '../image';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <Container>
       <Styledsection>
           <Footerstyles>
             <div className="footer-container">
                    <div className="footer-info">
                        <img src={logo} alt='logo'/>
                        <p>A new way to make the payments easy, reliable and secure.</p>
                    </div>
                <ul>
                    <h3>Usefull Links</h3>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
                </ul>
                <ul>
                    <h3>Community</h3>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
                </ul>
                <ul>
                <h3>Partner</h3>
                    <li>Our Partner</li>
                    <li>Become a Partner</li>
                    <li>Suggestions</li>
                </ul>
           </div>
             <div className="copyriht">
                <p>Copyright 2023 HooBank. All Rights Reserved.</p>
                <ul>
                    <li><FacebookIcon/></li>
                    <li><TwitterIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><LinkedInIcon/></li>
                    
                </ul>
             </div>
           </Footerstyles>
       </Styledsection>
    </Container>
  )
}

const Footerstyles = styled.div`
  .footer-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: start;
    justify-content: center;
   
    gap: 2rem;
  }
  .footer-info> img{
    width: var(--logo)
  }
  .footer-info > p{
    color: darkgray;
    font-size: var(  --smaller-font-size);
  }
  li{
    font-size:var( --smallest-font-size);
    color: gray;
  }
  li > .MuiSvgIcon-root{
    color: white;
  }
  .copyriht {
    text-align: center;
    margin-top: 2rem;
  }
.copyriht > p{
    color: lightgray;
    font-size: var(  --smaller-font-size);
}
.copyriht > ul{
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

}
.copyriht ul > li> .MuiSvgIcon-root{
  font-size: 1.3rem;
}


`