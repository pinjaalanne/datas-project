import { useState, useMemo } from "react";

function Palindrome() {

    const [input, setInput] = useState("");

    const isThisPalindrome = useMemo(() => {
        return input === input.split("").reverse().join("");
    }, [input]);

    return (
        <main>
            <div className="palindromeCheck">
                <h2>The Palindrome Checker</h2>
                <h3>Please enter a word to see if it is a palindrome or not!</h3>
                <form>
                    <div>
                        <input className="palindromeInput" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a word" />
                    </div>
                </form>
                <p>Is it a Palindrome:</p>
                <p className="palindromeResult">{isThisPalindrome ? " Yes it is!" : " No it's not!"}</p>
            </div>
        </main>
    );
}

export default Palindrome;