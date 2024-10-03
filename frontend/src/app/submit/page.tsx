'use client'

import Navbar from "@/components/navbar";
import axios from "axios";
import { FormEvent, useState } from "react";

export default function Submit() {

    const [article, setarticle] = useState({
        title: '',
        authors: '',
        claim: 'claim',
        pubDate: '2024-10-10',
        doi: 'doi',
        summary: 'summary',
    })
    
    const handleChange = (e) => {
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

        try {
            const response = await axios.post('http://localhost:8082/api/submit-form', article);
            console.log('Submission successful: ' + response.data);
            //confirmation message
            alert("Article suggestion has been submitted. The moderation team will examine its details before it is added to SPEED.");
        } catch(error) {
            console.log("Submission Error: " + error);
            alert("An error occured when submitting. Please ensure that all fields have been filled with appropriate values.");
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
                        {/* TODO: Look at worksheet's form and add any missing fields */}
                        <form onSubmit={submitNewArticle}>
                            <div className="form-group mt-4">
                                {/* Title */}
                                <label htmlFor="title" className="form-label">Title</label>
                                <input name="title" id="titleInput" type="text" value={article.title} className="form-control" onChange={handleChange} placeholder="Article title"/>
                                {/* Authors */}
                                <label htmlFor="authorInput" className="form-label mt-4">Authors</label>
                                <input name="authors" id="authorInput" type="text" value={article.authors} className="form-control"  onChange={handleChange} placeholder="Author one, author two, ..."/>
                                {/* Claim */}
                                <label htmlFor="claimInput" className="form-label mt-4">Claim</label>
                                <input name="claim" id="claimInput" type="text" value={article.claim} className="form-control"  onChange={handleChange} placeholder="Claim about software engineering"/>
                                {/* Publication Date */}
                                <label htmlFor="pubDateInput" className="form-label mt-4">Publication Date</label>
                                <input name="pubDate" value={article.pubDate} id="pubDateInput" type="date"  onChange={handleChange} className="form-control"/>
                                {/* DOI */}
                                <label htmlFor="doiInput" className="form-label mt-4">DOI (Source)</label>
                                <input name="doi" value={article.doi} id="doiInput" type="text" className="form-control"  onChange={handleChange}placeholder="e.g. doi.org/10.0000/0000"/>
                                {/* Summary */}
                                <label htmlFor="summaryInput" className="form-label mt-4">Summary</label>
                                <textarea name="summary" value={article.summary} className="form-control" rows={5} id="summaryInput"  onChange={handleChange}placeholder="Details about the article and its claims"></textarea>
                            </div>
                            {/* Form actions (submit and cancel) */}
                            <div className="form-group">
                                <div className="col-md mt-3">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
                                    <button className="btn btn-secondary px-3 py-2 mx-2.5">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            {/* </nav> */}
        </div>
    );
}