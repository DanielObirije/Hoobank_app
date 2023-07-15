import styled from 'styled-components'

export default function Button() {
  return (
    <Buttonstyled>
       <span>Get started</span>
    </Buttonstyled>
  )
}

const Buttonstyled = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;
  padding: .60rem 1rem ;
  background: linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%);
 color: black; 
border-radius: 5px;


`
