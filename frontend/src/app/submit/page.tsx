import Navbar from "@/components/navbar";

export default function Submit() {
    return (
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            <Navbar />
            <nav className="navbar">
                <div className="container d-flex justify-content-start m-5">
                    <div className="col-md-12">
                        <h2>Submit an article suggestion</h2>
                        <p className='mt-1'>Submit bibliographic details of a published study to be included in SPEED. Please ensure articles are unique, peer-reviewed, and relevant</p>
                        <form>
                            <div className="form-group mt-4">
                                {/* Title */}
                                <label htmlFor="titleInput" className="form-label">Title</label>
                                <input id="titleInput" type="text" className="form-control" placeholder="Article title"/>
                                {/* Authors */}
                                <label htmlFor="authorInput" className="form-label mt-4">Authors</label>
                                <input id="authorInput" type="text" className="form-control" placeholder="Author one, author two, ..."/>
                                {/* Claim */}
                                <label htmlFor="claimInput" className="form-label mt-4">Claim</label>
                                <input id="claimInput" type="text" className="form-control" placeholder="Claim about software engineering"/>
                                {/* Publication Date */}
                                <label htmlFor="pubDateInput" className="form-label mt-4">Publication Date</label>
                                <input id="pubDateInput" type="date" className="form-control"/>
                                {/* DOI */}
                                <label htmlFor="doiInput" className="form-label mt-4">DOI (Source)</label>
                                <input id="doiInput" type="text" className="form-control" placeholder="e.g. doi.org/10.0000/0000"/>
                                {/* Source */}
                                {/* <label htmlFor="sourceInput" className="form-label mt-4">Source</label>
                                <input id="sourceInput" type="text" className="form-control" placeholder="Website URL"/> */}
                                {/* Summary */}
                                <label htmlFor="summaryInput" className="form-label mt-4">Summary</label>
                                {/* <input id="summaryInput" type="text" className="form-control"/> */}
                                <textarea className="form-control" rows={5} id="summaryInput" placeholder="Details about the article and its claims"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="col-md mt-3">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
                                    <button className="btn btn-secondary px-2 py-2 mx-2">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}