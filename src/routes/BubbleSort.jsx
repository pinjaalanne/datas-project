import { useState } from "react";

function BubbleSort() {
    const [input, setInput] = useState('');
    const [sortedResult, setSortedResult] = useState([]);

    const bubbleSorting = (data) => {
        // Convert the string to an array of numbers
        const dataArray = data.split('');
        // Create a new array to avoid mutating the state directly
        const sortedArray = [...dataArray];

        // Bubble Sort algorithm
        for (let i = 0; i < sortedArray.length; i++) {
            for (let j = 0; j < sortedArray.length - i; j++) {
                const nextItem = sortedArray[j + 1];
                const item = sortedArray[j];

                if (item > nextItem) {
                    sortedArray[j] = nextItem;
                    sortedArray[j + 1] = item;
                }
            }
        }// Update the state with the sorted result
        setSortedResult(sortedArray);
    }

    // Event handler for the "Sort" button click
    const handleBubbleSort = () => {
        bubbleSorting(input);
    };

    const clearInput = () => {
        setInput('');
    }

    return (
        <main>
            <div>
                <h2>Bubble Sort</h2>
                <h3>Sort numbers with Bubble Sort!</h3>
                <input
                    className="bubbleSortInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter numbers"
                />
                <button className="btn" onClick={handleBubbleSort}>Sort</button>
                <p>Sorted Result: </p>
                <p className='bubbleResult'>{sortedResult.join(' ')}</p>
                <button className="btn" onClick={clearInput}>Try again</button>
            </div>
        </main>
    );
}

export default BubbleSort;