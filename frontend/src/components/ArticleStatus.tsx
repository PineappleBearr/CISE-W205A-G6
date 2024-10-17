import React, {useState, useEffect } from "react";
import { Article } from "./Article";
import Navbar from "./navbar";

interface IProp {
    article?: Article;
    index: number;
}

function SeeArticles() {
    const [articles, setArticles] = useState<[Article?]>([]);
    useEffect(()=>{
        fetch("https://speed-backend-9ri3j3nuc-jacobs-projects-51113990.vercel.app/api/articles")
            .then((res) => {
                return res.json();
            })
            .then((articles) => {
                setArticles(articles);
            })
            .catch((error)=> {
                console.log("SeeArticles error: " + error)
            });
        }, []);
    
        const ArticleItem = ({ article, index }: IProp) => {
            // If the article doesn't exist
            if (!article) {
                return null;
            }
        
            // Else, return table headings
            return (
                <tr>
                    <th>{index + ""}</th>
                    <th>{article.title}</th>
                    <th>{article.authors}</th>
                    <th>{article.source}</th>
                    <th>{article.doi}</th>
                    <th>{article.yearPub + ''}</th>
                    <th>{article.claim}</th>
                    <th>{article.status?.toUpperCase()}</th>
                </tr>
            );
        };
        

    //create list of articles and map their attributes
    const ArticleItemList = articles.map((article, key)=> (
        <ArticleItem article={article} index={key} key={key}></ArticleItem>
    ));
    //return page layout
    return (
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            <Navbar/>
            <div className="container d-flex justify-content-start m-5">
                <div className="col md-12">
                    <h2>Submitted Article Suggestions</h2>
                    <div>
                        <p>See all article suggestions you have made</p>
                        <br/>
                        Possible statuses are:
                        <li>Submitted - Article suggestion is currently being checked by moderators</li>
                        <li>Accepted - Article suggestion has been added to SPEED for others to view</li>
                        <li>Rejected - Article suggestion has been rejected by moderators. Please ensure it meets the requirements</li>
                    </div>
                    <div className="container d-flex justify-content-start">
                        <table className="table table-striped table-light mt-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Authors</th>
                                    <th>Source</th>
                                    <th>DOI</th>
                                    <th>Year Published</th>
                                    <th>Claim</th>
                                    <th>Submission Status <abbr title="Submitted/Accepted/Rejected">(?)</abbr></th>
                                </tr>
                            </thead>
                            <tbody>{ArticleItemList}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeeArticles;