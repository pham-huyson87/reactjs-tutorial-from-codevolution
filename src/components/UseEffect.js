import React, { useState, useEffect } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);

    let  isMounted = true;
    useEffect(() => {
        document.title = `You clicked ${count} time(s)`;
    });

    return (
        <React.Fragment>
            <button
                onClick={() => setCount(count + 1)}>
                
                Clicked {count} times
            </button>
        </React.Fragment>
    )
}

export default UseEffect
