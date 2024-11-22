import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize : 5,
    category:"general"
  }
  static propTypes = {
      country: PropTypes.string,
  }
    //articles = [{"source":{"id":"bbc-sport","name":"BBC Sport"},"author":null,"title":"West Indies vs England LIVE: third men’s T20 – cricket score and text updates","description":"West Indies host England in the third men’s T20 at Beausejour Stadium, Gros Islet – follow text updates.","url":"http://www.bbc.co.uk/sport/cricket/live/c6p217d6d5gt","urlToImage":"https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png","publishedAt":"2024-11-14T21:07:27.7800033Z","content":"West Indies: Shai Hope, Evin Lewis, Nicholas Pooran, Rovman Powell (c), Shimron Hetmyer, Romario Shepherd, Roston Chase, Gudakesh Motie, Alzarri Joseph, Akeal Hosein, Terrance Hinds.\r\nEngland: Phil S… [+147 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}];
    articles = [];
    
    constructor(){

        super();
        console.log('This is News.js constructor');
        this.state = {
            articles: this.articles,
            loading : false,
            page : 1,
            totalArticles : 0
            
            
        } 
    }
    async updateNew(){
      console.log("cdm"); // runs after render 
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9fd62b680b884b079c749f26c9eb8b9d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      
      let totalResults = parsedData.totalResults; // Get the original total results before filtering
    
      // Filter the articles to ensure all required fields are present
      let filteredArticles = parsedData.articles.filter(
        (article) => article.url !== "https://removed.com"
      );
    
      console.log(filteredArticles);
      
      // Update the state with articles and total results
      this.setState({ articles: filteredArticles, totalArticles: totalResults , loading:false});
    
    }

  

    async componentDidMount() {
    
      this.updateNew();
    }
    
  handlePrevClick =   async ()=>{
                //   })
        this.setState({page: this.state.page - 1})
        this.updateNew();
    }
    handleNextClick = async () => {
      

      this.setState({page: this.state.page + 1});
      this.updateNew();
        //});  
      }
    
  render() {
    console.log("render");
    
    return (
      
        <div className="container my-3">
          <h2 className='text-center' style={{marginBottom: '15px', marginTop:'20px'}}>News Daily - Top Headlines</h2>
          {/* {this.state.loading && <Spinner/>} */}
        <div className="row" >
        {!this.state.loading && this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.title}>
                 <NewsItem
  title={element.title ? element.title.slice(0,45) : "No Title"}
  description={element.description ? element.description.slice(0,88) : "No Description"}
  imgurl={element.urlToImage || 'https://via.placeholder.com/300x200.png?text=No+Image'}
  newsUrl={element.url} author={element.author?element.author:"Anonymous"} date={element.publishedAt}
/>
               </div> 
        })} 
        </div>
        <div className="container d-flex justify-content-center gap-3 my-4 mt-4">
        <button disabled = {this.state.page<=1} type="button"  className="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalArticles / 6)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      )
  }
}

export default News
