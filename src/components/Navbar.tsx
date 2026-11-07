import es from "@/i18n/es.json"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="h-16 flex justify-around items-center">
            <Link href="/">{es.navbar.home}</Link>
            <Link href="/gallery">{es.navbar.gallery}</Link>
            <Link href="/history">{es.navbar.story}</Link>
        </div>
    )
}