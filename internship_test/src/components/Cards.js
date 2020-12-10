import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import fetchData from './fetchData'



function Cards() { 
    const data = fetchData()

    if(data?.length > 0)
    {
    return (
        <div className='cards'>
            <div className="cards__container"> 
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={data[0].thumbnail.large}
                        text={data[0].title}
                        content={data[0].content}
                        name={data[0].author.name}
                        role={data[0].author.role}
                        date={new Date(data[0].date*1000).toLocaleDateString("en-US",{year:'numeric', month:'short', day:'numeric' })}

                        />
                        <CardItem 
                        src={data[1].thumbnail.large}
                        text={data[1].title}
                        content={data[1].content}
                        name={data[1].author.name}
                        role={data[1].author.role}
                        date={new Date(data[0].date*1000).toLocaleDateString("en-US",{year:'numeric', month:'short', day:'numeric' })}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={data[2].thumbnail.large}
                        text={data[2].title}
                        content={data[2].content}
                        name={data[2].author.name}
                        role={data[2].author.role}
                        date={new Date(data[0].date*1000).toLocaleDateString("en-US",{year:'numeric', month:'short', day:'numeric' })}
                        />
                        <CardItem 
                        src={data[3].thumbnail.large}
                        text={data[3].title}
                        content={data[3].content}
                        name={data[3].author.name}
                        role={data[3].author.role}
                        date={new Date(data[0].date*1000).toLocaleDateString("en-US",{year:'numeric', month:'short', day:'numeric' })}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )}

    return (<div></div>)
}

export default Cards
