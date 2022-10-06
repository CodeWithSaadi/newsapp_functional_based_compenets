import React, { useEffect, useState } from 'react'                                 //  "rce"
import NewsItem from './NewsItem'
import Spinner from './Spinner'
// import PropTypes from 'prop-types'                                    // "impt" import proptype
import logo from './logo.png'

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    // const [totalResults, setTotalResults] = useState(0)




    const capitalizeFirstLetter = (string) => {                                                               //function to "capitalizeFirstLetter" and call in "useEffect" hook
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {                                                                              // "fetch api"  use to fetch api here instead of writing articles in array,     async - await function use  -- and then call bellow functions -- ?pageSize is removed b/c content repeat, mine mistake
        props.setProgress(10);
        const url = `https://newsapi.org/v2/everything?q=${props.catagories}&pagesizee=${props.pageSize}&page=${page}&apiKey=80abc41a3b8b4598ab46dc8a49a45981`;
        setLoading(true)                                                           //set state for loading
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        // totalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);                                              //progress for top loading bar
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
        document.title = `${capitalizeFirstLetter(props.catagories)} -Shinkiari News`        // "Tittle" with catagories & capitalizeFirstLetter
    }, [])



    // const handlePrevClick = async () => {                                                // function of  button go to "next page "  but not use at the end because we use infinite scroll

    //     setPage(page - 1)
    //     updateNews();
    // }


    // const handleNexClick = async () => {                                                // function of  button go to "next page "

    //     setPage(page + 1)
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/everything?q=${props.catagories}&pagesizee=${props.pageSize}&page=${page + 1}&apiKey=80abc41a3b8b4598ab46dc8a49a45981`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        // totalResults(parsedData.totalResults)

    };





    return (
        <div className='container my- text-center '>
            {/* <h1 className='bg-dark text-light py-3'>  Shinkiari News :: Top Headlines</h1> */}
            <img style={{ marginTop: '65px' }} src={logo} alt="" />
            <div className="bg-danger p-2 rounded " >
                <h1 >'{props.catagoriesName}'</h1>

            </div>


            {loading && <Spinner />}

            {/* Infinite scrolling, you can add it from goggle than you have to spinner component, hasMore, and "fetch more function" 🆙  */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                // hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container">
                    <div className="row my-3">
                        {/* // iteration of element in one div, take elements from json file  */}
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4  col-sm-6 my-2" key={element.url} >
                                    <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} totalResults={element.source.name} />       {/* title={element.title.slice(0, 10)} can  be use for limited words -- here we use data from json */}
                                </div>)
                        })}
                    </div>
                </div>
            </InfiniteScroll>



        </div >
    )

}

export default News




//CodeWithSaadi ApiNews   80abc41a3b8b4598ab46dc8a49a45981
//SaadJamil NewsApi        80abc41a3b8b4598ab46dc8a49a45981
//Softech1 ApiNews         753dc42dae0d42aa9904ef1e4aa61629