import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Data Structure App</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/palindrome">Palindrome Checker</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bubblesort">Bubble Sort</NavLink>
                    </li>
                    <li>
                        <NavLink to="/stack">Stack</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;