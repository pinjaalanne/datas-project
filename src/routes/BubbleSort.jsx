import { useState } from "react";

function BubbleSort() {
    // State for the input value
    const [input, setInput] = useState('');
    // State for the sorted result
    const [sortedResult, setSortedResult] = useState([]);

    // Function to perform Bubble Sort
    function bubbleSorting(data) {
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

    return (
        <main>
            <div>
                <h2>Bubble Sort</h2>
                <h3>Sort numbers with Bubble Sort!</h3>
                {/* Input for entering comma-separated numbers */}
                <input
                    className="bubbleSortInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter numbers"
                />
                {/* Button to trigger the sorting */}
                <button className="bubbleSortBtn" onClick={handleBubbleSort}>Sort</button>
                {/* Display the sorted result */}
                <p>Sorted Result: </p>
                <p className='bubbleResult'>{sortedResult.join(' ')}</p>
            </div>
        </main>
    );
}

export default BubbleSort;