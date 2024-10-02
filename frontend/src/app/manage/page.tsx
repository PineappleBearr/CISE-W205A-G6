import Link from 'next/link';
import '../globals.css'

export default function manage() {
    return (
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            <div className="d-flex justify-content-between align-items-center"> 
                <h2>Articles to Review</h2>
                <Link href="/history">
                <button className="btn btn-primary mx-2">View History</button>
                </Link>
              
            </div>
            <hr ></hr>
            <nav className="navbar">
                <div className="container d-flex justify-content-start m-5">
                    <table className="table table-bordered table-striped m-5">
                        <thead className="thead-light">
                            <tr>
                                <th>ID:</th>
                                <th>Title:</th>
                                <th>Author:</th>
                                <th>Publish Date:</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <th>1</th>
                                <th>Title1 </th>
                                <th>Author1</th>
                                <th>2024-01</th>
                                <th> 
                                    <button className="btn btn-success mx-2" > Accept </button>
                                    <button className="btn btn-danger mx-2" > Reject </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </nav>
        </div>
    );
}