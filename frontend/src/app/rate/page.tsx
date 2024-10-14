'use client'

import Navbar from "@/components/navbar";
import axios from "axios";
import { FormEvent, useState } from "react";
// import {findByTitle} from;

export default function Rate() {
    //step 1: create the new article model with default values
    const [article] = useState({
        title: '',
        authors: '',
        yearPub: 2024,
        claim: '',
        doi: '',
        source: '',
        submitDate: '',
        processDate: '',
        summary: '',
        numRating: 0,
        sumRating: 0
    })

    //validate the rating, checking if it is in range and it is an int
    //if yes, submit rating
    function validateRating(articleTitle: HTMLInputElement, rating: HTMLInputElement) {
        //does it contain a decimal point? if so, show error
        console.log("Decimal? " + rating.value.includes("."))
        if (rating.value.includes(".")) {
            alert("Error: Please submit a whole number (no decimals allowed)")
        } //check if rating is in range 1-5
        else if(parseInt(rating.value) > 0 && parseInt(rating.value) < 6) {
            //check if article title has been entered
            if (articleTitle.value.length < 1) {
                alert("Error: Please provide an article title")
            } else {
                //if YES to all, submit new rating
                submitRating(articleTitle.value.toString(), parseInt(rating.value))
            }
        }
        else {
            //if rating is outside range, show error
            alert("Error: Please choose a valid rating from 1-5")
        }
    }

    //submit rating to the DB
    async function submitRating(articleTitle: string, rating: number) {
        // alert(`Submitting rating for article ${articleId}: ${rating}`)
        try {
            console.log(articleTitle)
            const response = await axios.get(`http://localhost:8082/api/articles/query/3/${articleTitle}`)
            console.log(response.data)
            console.log(response.data.length)
            //TODO: also check if article is submitted first
            if (response.data.length > 0) {
                for(let i = 0; i < response.data.length; i++) {
                    // alert(response.data[i]['title'])
                    let foundArticleID = response.data[i]['_id']
                    console.log("Article ID: " + foundArticleID)
                    let foundArticleName = response.data[i]['title']
                    let foundArticleAuthors = response.data[i]['authors']
                    let foundArticleNumRating = response.data[i]["numRating"]
                    let foundArticleSumRating = response.data[i]["sumRating"]
                    let foundArticleAverageRating = parseFloat((foundArticleSumRating / foundArticleNumRating).toFixed(2))
                    //confirmation message that handles zero devision (numRating = 0)
                    let confirmRating = confirm(`Article found (${i + 1} of ${response.data.length}): "${foundArticleName}" by "${foundArticleAuthors}".
Average rating: ${isNaN(foundArticleAverageRating) ? 0.0 : foundArticleAverageRating} (${foundArticleNumRating > 0 ? foundArticleNumRating : 0} ratings)\n
Is this the article you want to rate ${rating}/5?
If not, click "Cancel" to move to the next found article.`)
                    //if user says YES to confirmation message
                    if (confirmRating) {
                        let numRating = response.data[i]["numRating"]
                        let sumRating = response.data[i]["sumRating"]
                        console.log("Ratings: " + numRating)
                        console.log("Sum of Ratings: " + sumRating)
                        console.log("Average rating: " + sumRating / numRating)
    
                        //update rating using new rating
                        foundArticleNumRating++;
                        foundArticleSumRating += rating;
    
                        //step 1: create the new article model
                        //See "article" definition at top of function
    
                        //step 2: set that article model's new values with GET values and updated rating
                        article.title = foundArticleName
                        article.authors = foundArticleAuthors
                        article.yearPub = response.data[i]["yearPub"]
                        article.claim = response.data[i]["claim"]
                        article.doi = response.data[i]["doi"]
                        article.source = response.data[i]["source"]
                        article.submitDate = response.data[i]["submitDate"]
                        article.processDate = response.data[i]["processDate"]
                        article.summary = response.data[i]["summary"]
                        article.numRating = foundArticleNumRating;
                        article.sumRating = foundArticleSumRating;
    
                        //DEBUG: log all new article attributes
                        console.log(article)
                        console.log(article["title"])
                        console.log(article["authors"])
                        console.log(article["yearPub"])
                        console.log(article["claim"])
                        console.log(article["doi"])
                        console.log(article["source"])
                        console.log(article["submitDate"])
                        console.log(article["processDate"])
                        console.log(article["summary"])
                        console.log(article["numRating"])
                        console.log(article["sumRating"])
    
                        try{ 
                            //step 3: update article in database
                            const ratingResponse = await axios.put(`http://localhost:8082/api/articles/${foundArticleID}`, article);
                            console.log("Success: " + ratingResponse.data)
    
                            //step 4: show confirmation message with new avg. rating
                            alert(`Rating successfully submitted!\nNew average rating: ${foundArticleSumRating/foundArticleNumRating}\nRatings: ${foundArticleNumRating}`)
    
                            //redirect to search page
                            window.location.href = '/search'
                        } catch(error) {
                            //error message
                            alert("Error occured submitting rating. Please try again")
                        }
                        //break loop, finish execution (this shouldn't be reached because of the redirection to the search page)
                        break;
                    }
                }
            } else {
                //error message - title doesn't match any of the articles'
                alert(`Error: cannot find specified article "${articleTitle}". Please enter another article title.`)
            }
        } catch(error) {
            //any other error
            alert("Unexpected error occured. Please ensure fields are filled and try again")
            console.log(error)
        }
    }

    async function viewRating(articleTitle: HTMLInputElement) {
        let title = articleTitle.value
        console.log(title)
        if (title.length > 0) {
            alert(`Finding article(s) with the title: "${title}"`)

            //step 1: find matching articles
            const response = await axios.get(`http://localhost:8082/api/articles/query/3/${title}`)
            console.log(response.data)
            console.log(response.data.length)
            //TODO: also check if article is submitted first
            if (response.data.length > 0) {
                //step 2: loop through articles and display their details
                for(let i = 0; i < response.data.length; i++) {
                    //display the article's details
                    let foundArticleID = response.data[i]['_id']
                    console.log("Article ID: " + foundArticleID)
                    let foundArticleName = response.data[i]['title']
                    let foundArticleAuthors = response.data[i]['authors']
                    let foundArticleNumRating = response.data[i]["numRating"]
                    let foundArticleSumRating = response.data[i]["sumRating"]
                    let foundArticleAverageRating = parseFloat((foundArticleSumRating / foundArticleNumRating).toFixed(2))
                    let confirmRating = confirm(`Article found (${i + 1} of ${response.data.length}): "${foundArticleName}" by "${foundArticleAuthors}".
Average rating: ${isNaN(foundArticleAverageRating) ? 0.0 : foundArticleAverageRating} (${foundArticleNumRating > 0 ? foundArticleNumRating : 0} ratings)\n
Is this the article you were looking for?
If not, click "Cancel" to move to the next found article.`)
                    //if this is the article the user was looking for and they click "OK", close the dialog
                    if(confirmRating) {
                        break;
                    }
                }
            }
        } else {
            //if user did not enter a title, display error
            alert("Error: Please enter an article title first.")
        }
    }

    //create page
    return (
        // main container
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            {/* navigation bar */}
            <Navbar />
            <div className="container d-flex justify-content-start m-5">
                <div className="col-md-11">
                    {/* heading and subtitle */}
                    <h1>Rate articles</h1>
                    <p className='mt-1'>Enter the title of an article and give it a rating from 1-5 in terms of its quality and validity.</p>
                    {/* rating form */}
                    <form onSubmit={e => {e.preventDefault()}}>
                        <div className="form-group">
                            <br/>
                            <label htmlFor="titleInput" className="form-label mt-4">Find article*</label>
                            <input required id="titleInput" name="titleInput" className="form-control" type="text" placeholder="Article title"></input>
                            <div className="col-md-2">
                                <label htmlFor="ratingInput" className="form-label mt-4">Rating*</label>
                                <input min={1} id="ratingInput" name="ratingInput" defaultValue={0} max={5} className="form-control" type="number"/>
                                <p className="mt-4 fs-6">* Required</p>
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <div className="btn-group me-2">
                                <button className="btn btn-primary" 
                                    onClick={e => {e.preventDefault(); validateRating(document.getElementById("titleInput") as HTMLInputElement, document.getElementById("ratingInput") as HTMLInputElement)}}>
                                    Submit Rating</button>
                                <button className="btn btn-secondary" onClick={e => {e.preventDefault(); viewRating(document.getElementById("titleInput") as HTMLInputElement)}}>
                                    View Rating
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
