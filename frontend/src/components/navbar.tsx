import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-start" >
            <Link href="/search" >
                <button className="btn btn-primary mx-2" > Search for Articles </button>
            </Link>
            <Link href="/manage" >
            <button className="btn btn-primary mx-2" > Manage Article/s </button>
            </Link>
            <Link href="/search" >
                <button className="btn btn-primary mx-2" > Submit Article/s </button>
            </Link>
        </nav>
    )
}