import React from 'react';
import Logo from '../../assets/img/logo-nwes.svg'

import { Container, Topside } from './styles'; 

function Header() {
  return(
      <Container>
          <Topside>
              <a href=""><img src={Logo} /> </a>
               <span><strong>evox</strong> News</span>
          </Topside>
      </Container>
  );
}

export default Header;