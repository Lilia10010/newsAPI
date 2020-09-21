import React from "react";

import notImage from '../../assets/img/not-image.jpg'

import { 
  Container, 
  Image,
  Title,
  Time
  } from "./styles";

function formatDate(date) {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate() < 10 ? `0${dateInstance.getDate()}` : dateInstance.getDate();
  const month = dateInstance.getMonth()+1 < 10 ? `0${dateInstance.getMonth()+1}` : dateInstance.getMonth()+1;
  const year = dateInstance.getFullYear();

  return `${day}/${month}/${year}`;
}

function News( data ) {
  return (
    <Container >  
        <Image> 
        { data.urlToImage ? ( <img  src={data.urlToImage} alt="" />
        ) : ( 
              <img  src={notImage} alt="Imagem não carregada" />
         )}
        </Image>  

        <Title>
          <a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}
            <br />
            <span className="source">{data.description}</span>      
          </a>
        </Title>

        <Time>
          <p className="footer-date">{formatDate(data.publishedAt)}</p>
      </Time>  

    </Container>
  );
}

export default News;