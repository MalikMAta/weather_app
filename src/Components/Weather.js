import React from 'react'

function Weather(props) {

    const {weather} = props
    return (

    // This will print out all the weather details
        <div>
            <p>Feels Like {weather} </p>
        </div>
    )
}

export default Weather
