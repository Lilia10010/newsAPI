import React, { useState, useEffect, useRef } from 'react';
import News from '../News'
import axios from 'axios';                     
import ReactPaginate from 'react-paginate';

import '../../styles/PaginationStyles.css'; 

import { Container, Input, IconSearch, InputSearch, Body } from './styles'; 

function Feed() {

    const [data, setData] = useState();    
    const [pageSize, setPageSize] = useState(7);
    //total de
    const [pageCount, setPageCount] = useState();

    const [search, setSearch] = useState('');
    
    const [page, setPage] = useState(1);
    
    //infinite scroll
   // const ref = useRef();    

    //para rodar na vercel process.env.REACT_APP_API_KEY
    const apiKey = "8e99a71bdcec4f5e9362f0d8743bd24e"; 
    
    
   

    async function loadPage(pageNumber) { 
         
      const res = await 
        axios
           .get(`https://newsapi.org/v2/top-headlines?country=br&page=${pageNumber}&q=${search}&category=technology&pageSize=${pageSize}&apiKey=${apiKey}` ) 
      
            setData(res.data)

            // console.log('=>', data)

            let totalItems = Math.floor(res.data.totalResults / pageSize) 
            
            setPageCount(totalItems)          
             
    }

        

    //aviso de busca não encontrada 
    if(search.length > 0 && data.totalResults === 0) {
        console.log("ops, busca não encontrada");
    }
    
    useEffect(() => {
      loadPage();
    }, [search]);
      
    //infinite scroll 
      // useEffect((NumberPage = page) => {
        
      //   const observer = new IntersectionObserver( ([entry]) => {
      //       console.log('aaa', entry.isIntersecting);            
    
      //       if (entry.isIntersecting === true) { 
                           
      //         NumberPage = (NumberPage + 1)

      //         setPage(NumberPage)              
              
      //         console.log('page', page)
      //         console.log('nextpage', NumberPage)
              
      //       }
      //     }
      //   );
      //   if (ref.current) {
                   
      //   }
      // }, [ data ]);


  const handlePageClick = ( data ) => {    
    const pageNumbers = data.selected + 1 
    return loadPage(pageNumbers)
    //console.log("click", pageNumbers)
}
   

        return (
            
            <Container> 
                        
                <Input>
                  <IconSearch />  
                  <InputSearch
                    type="text"
                    placeholder="Buscar"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Input>

                <Body>
                    {data ? data.articles.map((news) => (
                      <News key={news.url} {...news} />
                    )): "Carregando ..." }
                </Body>
              
                {data ?

                /**<divref={ ref } ></div> infite scroll*/

                <ReactPaginate 
                
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />

                : "" } 
              
              </Container>
          );      
    }

export default Feed;