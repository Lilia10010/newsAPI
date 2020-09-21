import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    height: 147px;

    background: var(--primary);
  
`;
export const Topside = styled.div`

    display: flex;
    align-items: center;
    justify-content: start;
    color: var(--white);


    > a {
        margin-right: .3rem;
        margin-top: -1.5rem;
        img{
            width: 40px;        
        }
    }

    
  
`;
 