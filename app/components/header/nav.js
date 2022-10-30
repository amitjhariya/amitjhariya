import Link from "next/link"

export default function Nav() {
    const Navigations = [
        { title: "Home", url: "/" },
        { title: "Blogs", url: "/blogs" },
        { title: "Portfolio", url: "/portfolio" },
        { title: "Contact", url: "/contact" },
        { title: "Resume", url: "/resume" }
    ];

    const Links = Navigations.map((item, index) => <li key={index}>
        <Link href={item.url}>
            {item.title}
        </Link>
    </li>);

    return <nav>
        {Links}
    </nav>
}