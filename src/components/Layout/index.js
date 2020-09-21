import React from 'react';

import Feed from '../Feed';
import Header from '../Header';



import { Container, Wrapper } from './styles';

function Layout() {
  return(
      <Container>
          <Wrapper>
            <Header />
            <Feed /> 
          </Wrapper>
      </Container>
  )
}

export default Layout;