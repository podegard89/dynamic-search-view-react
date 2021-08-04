import React, { useEffect, useState } from 'react';


const CountButton = (props) => {

    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <button onClick={handleClick}>+{props.incrementBy}</button>
            <div>9 times {currentCount / 9} = {currentCount}</div>
        </div>
    );
}

export default CountButton;