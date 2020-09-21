import styled from 'styled-components';
//import { Zap } from 'styled-icons/octicons'
import { SearchAlt } from 'styled-icons/boxicons-regular'
//import { Zap } from '@styled-icons/octicons'

export const Container = styled.div`
    width: 100%;
    min-height :calc(100vh - 157px);
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
  
`


export const Input = styled.div`
    display: flex;
    
`; 

export const IconSearch = styled(SearchAlt)`
    position: absolute;
    width: 20px;
    margin-top: -.2rem;
    margin-left: 10px;
    color: var(--primary);
    opacity: .5;
`;

export const InputSearch = styled.input`
    background: var(--white);
    height: 3.5rem;
    border-radius: .3rem;
    font-size: 12pt;
    width: 100%;
    padding-left: 37px;
    border: 1px solid #f2f2f2;
    margin-top: -1.3rem;
    
`; 

export const Body = styled.div`
    padding-top: 3.5rem;
    padding-bottom: 5rem;    
`; 
 