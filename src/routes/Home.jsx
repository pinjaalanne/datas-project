import { NavLink } from "react-router-dom";

function Home() {
    return (
        <main>
            <div className="welcome-wrap">
                <h2>Welcome to my Data Structure App</h2>
                <h3>Please try all of my applications:</h3>
                <ul className="homeList">
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
            </div>
        </main >
    );
}

export default Home