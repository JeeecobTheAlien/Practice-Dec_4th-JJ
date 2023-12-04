// HappyHolidays.jsx
import React, { useState, useEffect } from 'react';

const HappyHolidays = () => {
    const [isDecember, setIsDecember] = useState(fasle);

    useEffect(() => {
        setTimeout(() => {
            setIsDecember(true);
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Its December!!!</h1>
            {isDecember && <h1>Happy Holidays Hurrah!</h1>}
        </div>
    );
};

export default HappyHolidays;