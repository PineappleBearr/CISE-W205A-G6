import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-start">
            <Link href="/search" >
                <button className="btn btn-primary mx-2" > Search for Articles </button>
            </Link>
            <Link href="/manage" >
            <button className="btn btn-primary mx-2" > Manage Articles </button>
            </Link>
            <Link href="/submit" >
                <button className="btn btn-primary mx-2" > Submit Articles </button>
            </Link>
            <Link href="/login" >
                <button className="btn btn-primary mx-2" > Login </button>
            </Link>
            <Link href="/rate" >
                <button className="btn btn-primary mx-2" > Rate Articles </button>
            </Link>
        </nav>
    )
}