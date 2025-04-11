import React from 'react'
import { IMAGE_DATA } from '../utilities/helper'
import { FacebookIcon, InstagramIcon, SkypeIcon, TwiterIcon } from '../utilities/icon'
const Card = () => {
    return (
        <>
            <div className='min-vh-100 justify-content-center align-items-center d-flex flex-column'>
                <div className='container'>
                    <div className='row'>
                        {IMAGE_DATA.map((item, index) => (
                            <div className="col-3">
                                <div key={index} className="card">
                                    <div className='icon'>
                                        <FacebookIcon />
                                    </div>
                                    <div  className='icon'>
                                        <InstagramIcon />
                                    </div>
                                    <div  className='icon'>
                                        <TwiterIcon />
                                    </div>
                                    <div  className='icon'>
                                        <SkypeIcon />
                                    </div>
                                    <img src={item.Image} alt={item.title} className="card-image max-w-270 w-100" />
                                    <div className="card-content">
                                        <h2 className="card-title text-center font-family">{item.title}</h2>
                                        <p className="card-description text-center font-family">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
