'use client'

import Navbar from "@/components/navbar";
import axios from "axios";
import { FormEvent, useState } from "react";

export default function Submit() {

    const currentDate = new Date();
    console.log(currentDate);
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`)
    const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;
    console.log(dateString);

    //setting default values
    const [article, setarticle] = useState({
        title: '',
        authors: '',
        yearPub: 2024,
        claim: '',
        doi: '',
        source: '',
        submitDate: dateString,
        processDate: dateString,
        summary: '',
        numRating: 0,
        sumRating: 0
    })
    
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setarticle({
            ...article,
            [e.target.name]: e.target.value,
        });
        console.log(article)
    };

    const submitNewArticle = async(event: FormEvent<HTMLFormElement>) => {
        //prevent page from refreshing after "Submit" is clicked
        event.preventDefault();

        //grab the user's article suggestion details from the form and display in the console
        console.log(article);

        //log each field's data
        console.log(article.title)
        console.log(article.authors)
        console.log(article.claim)
        console.log(article.yearPub)
        console.log(article.doi)
        console.log(article.source)
        console.log(article.summary)

        //error message variable
        let errorMessage = "";
        //validate fields
        if (article.title.length < 1 || article.title.length > 100) errorMessage += "Submission error: Article title must be 1 - 100 characters long\n"
        if (article.authors.length < 1) errorMessage += "Submission error: Authors must be entered\n"
        if (article.claim.length < 1) errorMessage += "Submission error: Claim must be entered\n"
        if (article.yearPub > 2024) errorMessage += "Submission error: Year published must be before 2025\n"
        if (article.doi.length < 1) errorMessage += "Submission error: DOI must be entered\n"
        if (!article.doi.includes(".")) errorMessage += "Submission error: DOI should be a link (e.g. doi.org)\n"
        if (article.source.length < 1) errorMessage += "Submission error: Source must be entered\n"
        if (article.summary.length < 1) errorMessage += "Submission error: Summary must be entered\n"
        //display error message if any fields are not properly entered
        if (errorMessage.length > 0) {alert(errorMessage)}
        else{
            //if article suggestion has passed all validation checks
            //attempt to add article details to the database
            try {
                //attempt to post
                const response = await axios.post('http://localhost:8082/api/articles/submit-form', article);
                //log successful response data
                console.log('Submission successful: ' + response.data);
                //display confirmation message
                alert("Article suggestion has been submitted. The moderation team will examine its details before it is added to SPEED.");
            } catch (error) {
                //catch any other types of errors
                console.log("Submission Error: " + error);
                //display error message
                alert("An error occured while submitting. Please ensure that all fields have been filled with appropriate values.");
            }
        }
    };

    //page form
    return (
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            <Navbar />
            {/* <nav className="navbar"> */}
                <div className="container d-flex justify-content-start m-5">
                    <div className="col-md-12">
                        <h2>Submit an article suggestion</h2>
                        <p className='mt-1'>Submit bibliographic details of a published study to be included in SPEED. Please ensure articles are unique, peer-reviewed, and relevant</p>
                        {/* Form fields */}
                        <form onSubmit={submitNewArticle}>
                            <div className="form-group mt-4">
                                {/* Title */}
                                <label htmlFor="title" className="form-label">Title*</label>
                                <input name="title" id="titleInput" type="text" value={article.title} className="form-control" onChange={handleChange} placeholder="Article title"/>
                                {/* Authors */}
                                <label htmlFor="authorInput" className="form-label mt-4">Authors*</label>
                                <input name="authors" id="authorInput" type="text" value={article.authors} className="form-control"  onChange={handleChange} placeholder="Author one, author two, ..."/>
                                {/* Claim */}
                                <label htmlFor="claimInput" className="form-label mt-4">Claim*</label>
                                <input name="claim" id="claimInput" type="text" value={article.claim} className="form-control"  onChange={handleChange} placeholder="Claim about software engineering"/>
                                {/* Publication Date */}
                                {/* <label htmlFor="pubDateInput" className="form-label mt-4">Publication Date</label> */}
                                {/* <input name="pubDate" value={article.yearPub} id="pubDateInput" type="date"  onChange={handleChange} className="form-control"/> */}
                                {/* Publication Year */}
                                <label htmlFor="yearPubInput" className="form-label mt-4">Publication Year*</label>
                                <input name="yearPub" value={article.yearPub} id="yearPubInput" type="number" className="form-control" min={1900} max={2024}  onChange={handleChange}/>
                                {/* DOI */}
                                <label htmlFor="doiInput" className="form-label mt-4">DOI*</label>
                                <input name="doi" value={article.doi} id="doiInput" type="text" className="form-control"  onChange={handleChange} placeholder="e.g. doi.org/10.0000/0000"/>
                                {/* Source */}
                                <label htmlFor="sourceInput" className="form-label mt-4">Source*</label>
                                <input name="source" value={article.source} id="sourceInput" type="text" className="form-control"  onChange={handleChange} placeholder="Article source"/>
                                {/* Summary */}
                                <label htmlFor="summaryInput" className="form-label mt-4">Summary*</label>
                                <textarea name="summary" value={article.summary} className="form-control" rows={5} id="summaryInput"  onChange={handleChange} placeholder="Details about the article and its claims"></textarea>
                            </div>
                            {/* Form actions (submit and cancel) */}
                            <div className="form-group">
                                <div className="col-md mt-3">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
                                    <button onClick={e => {e.preventDefault(); window.location.href = '/search'}} className="btn btn-secondary px-3 py-2 mx-2.5">Cancel</button>
                                </div>
                            </div>
                            <p className="mt-2">* Required field</p>
                            {/* <button id="testButton" type="button" onClick={e => {e.preventDefault(); testAlert()}}>Test button</button> */}
                        </form>
                    </div>
                </div>
            {/* </nav> */}
        </div>
    );
}