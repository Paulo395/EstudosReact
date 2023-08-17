import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link to='/pages/home.js' >Home</Link>
            </li>
            <li>
                <Link to='/pages/preview.js' >Preview</Link>
            </li>
        </ul>
    )
}