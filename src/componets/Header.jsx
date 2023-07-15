import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components'
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import { logo } from '../image';
import { Container } from './Styledcomponet/Container';


export default function Header() {
    const [close,setclose] = useState(true)

    const ReverseState =()=>{
        setclose((initial)=> !initial)
    }
  return (
    <Headerstyled close={close}>
        <Container>
         <nav>
            <a className='logo'> <img src={logo}/></a>
            <div className='nav-main'>
               <ul className='nav-list'>
                  <li className='nav-item'> <Link activeClass="active" onClick={ReverseState} spy={true} smooth={true} offset={-150} duration={500} to='Home' > Home </Link></li>
                  <li className='nav-item'> <Link activeClass="active"  onClick={ReverseState}spy={true} smooth={true} offset={-50} duration={500} to='About-us' >About us</Link></li>
                  <li className='nav-item'> <Link activeClass="active"  onClick={ReverseState}spy={true} smooth={true} offset={-50} duration={500} to='Features' >Features </Link></li>
                  <li className='nav-item'> <Link activeClass="active"  onClick={ReverseState} spy={true} smooth={true} offset={-50} duration={500} to='Solutions' >Solutions </Link></li>
                  </ul>
                  <div onClick={()=> setclose((initial)=> !initial)}  className='close-btn toggle'>
                     <CloseIcon/>
                  </div>
            </div>

            <div className='toggle'  onClick={ReverseState}>
                < SortIcon/>
             </div>
         </nav>
        </Container>
    </Headerstyled>
  )
}


const Headerstyled = styled.div`

    width: 100%;
    position: fixed;  
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background : transparent;


nav{
    height: var(--header-height);
    display: flex;
   justify-content:space-between;
    align-items: center;
}
.logo{
    width:var( --logo);
}

.nav-list{
    display:flex;
    flex-direction: column;
    align-items : center;
    row-gap: var(--mb-1) ;
    position: relative;
}
.close-btn{
    position: absolute;
    top:1rem;
    right: 1rem;
    color:whitesmoke
}
.nav-item{
    font-weight: var(--font-medium);
    font-size: var(   --h3-font-size) ;
    cursor: pointer;

}
.toggle > .MuiSvgIcon-root{
  font-size: var( --h2-font-size);
}
    @media screen and (max-width: 700px){
       .nav-main{
        position: fixed;
        top: ${props => props.close ? '-100%': '0'};
        left: 0;
        width: 100%;
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(5px);
        padding: 4rem 0 4rem;
        transition : .5s;
       }
      
    }

    @media screen and (min-width: 700px){
        nav{
        height: calc(var(--header-height) + 1.5rem);
        }
        .nav-list{
        flex-direction: row;
        display: flex;
        column-gap: 3rem;
       }
       .toggle{
          display: none;
       }
  }


`


