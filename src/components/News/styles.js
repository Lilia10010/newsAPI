import styled from 'styled-components';

export const Container = styled.div`
    display: flex;   
    align-items: center;

    background: #fff;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
    padding: 1rem;
    border-radius: .7rem;
    margin-bottom: 15px;

    transition: .2s;

    @media(max-width: 745px){
        flex-direction: column;
        align-items: start;
    }   

    &:hover{
        transform: translateY(-.2rem);
    }
`;

export const Image = styled.div`
       

    img{
        width: 247px;        
        height: 8rem;
        border-radius: .3rem;

        object-fit: cover;
        object-position: top;
    }

    @media(max-width: 745px){
         width: 100%;
        img{
            height: 35vh;
            width: 100%;

           
        } 
    }


`;

  export const Title = styled.div`
    font-size: 18px;
    text-align: left;
    width: 65%;
    max-width: 743px;
    margin-left: 2rem;
    margin-right: 1rem;

    
    > a{
        color: var(--titles); 
        text-decoration: none; 

        &:hover{
            color: var(--primary);
        }
        
        > span{
            color: var(--secondary);
            font-size: 16px;
        }
    }



    @media(max-width: 745px){
        margin-left: auto;
        margin-right: auto;
        padding: 13px 0;
        width: 100%;
    }

    
  `;

  export const Time = styled.div`
    display: flex;
    /* justify-content: center; */

    flex-grow: 2;
    justify-content: flex-end;
    padding-right: 2rem;

    font-size: 16px;
    color: var(--secondary);
  
  `;
