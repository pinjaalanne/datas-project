import { useRef } from "react";
import { useStackState } from "rooks";

function Stack({ tryAgain }) {
    const numberToPushRef = useRef(3);
    const [
        list,
        { push, pop, peek, length },
        listInReverse,
    ] = useStackState([1, 2, 3]);

    function addToStack() {
        numberToPushRef.current =
            numberToPushRef.current + 1;
        push(numberToPushRef.current);
    }

    return (
        <main>
            <div>
                <h2>Stack</h2>
                <div>
                    {listInReverse.map((item) => {
                        return (
                            <div className="stackItem" key={item}>
                                {item}
                            </div>
                        );
                    })}
                </div>
                <button className="btn" onClick={addToStack}>Push</button>
                <button className="btn" onClick={pop}>
                    Pop
                </button>
                <p>Top Element : Number {peek()}</p>
                <p>Stack Length : {length} items</p>
                <button className="btn" onClick={tryAgain}>Try again</button>
            </div>
        </main>
    );
}

export default Stack