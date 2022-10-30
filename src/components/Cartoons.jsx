// importing pre-existing function from react library 

import {useState} from 'react'

export default function Cartoons() { //logic goes in this function. Idea should be to write logic in JS and return portion in HTML (confirm this)
    const [cartoonList, setCartoonList] = useState()
    const getCartoons = () => {
        fetch(`https://api.sampleapis.com/cartoons/cartoons2D`)
            .then(response => response.json())
            .then(setCartoonList) //figure this step out exactly
            .catch(console.error)
        }

    // console.log(cartoonList) - to check if we connect to the api. Optional step just to confirm connection.

    return (
        <>
            <button onClick={() => getCartoons()}>Display Cartoons</button>
            <div className='button-list'>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Creator</th>
                        <th>Image</th>
                    </tr>
                        {cartoonList && cartoonList.map((item) => {
                            return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{item.creator}</td>
                                <td>{item.image}</td>
                            </tr>
                            )
                        }
                    )}

                </table>
        </div>
        </>
    )
}
