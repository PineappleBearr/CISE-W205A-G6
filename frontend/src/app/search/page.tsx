import Navbar from "@/components/navbar";

export default function Search() {
    return (
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            <Navbar />
            <nav className="navbar">
                <div className="container d-flex justify-content-start m-5">
                    <h2 className="text-center mx-2">Search:</h2>
                    <input placeholder="enter..." />
                    <button className="btn btn-primary mx-2">Search</button>
                    <table className="table table-bordered table-striped m-5">
                        <thead className="thead-light">
                            <tr>
                                <th>ID:</th>
                                <th>Title:</th>
                                <th>Source</th>
                                <th>Authors:</th>
                                <th>Publish Date:</th>
                                <th>DOI</th>
                                <th>Claim</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </nav>
        </div>
    );
}