import Link from "next/link"

export default function Headers(){
    return (
        <header>
            <nav>
                <li>
                    <Link href='/'>
                    Home
                    </Link>
                </li>
                <li>
                    <Link href={'/blogs'}>
                    Blogs
                    </Link>
                </li>
                <li>
                    <Link href={'/portfolio'}>
                    Portfolio
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                    Contact
                    </Link>
                </li>
            </nav>
        </header>
    )
}