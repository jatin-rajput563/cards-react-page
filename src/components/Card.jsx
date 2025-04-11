import React from 'react'
import { IMAGE_DATA } from '../utilities/helper'
import { FacebookIcon, InstagramIcon, SkypeIcon, TwiterIcon } from '../utilities/icon'
const Card = () => {
    return (
        <>
            <div className='min-vh-100 justify-content-center align-items-center d-flex flex-column'>
                <div className='container'>
                    <div className='row flex-wrap'>
                        {IMAGE_DATA.map((item, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-20 mx-auto" key={index}>
                                <div key={index} className="card ">
                                    <div className='icon-container'>
                                        <div className='icon'>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <FacebookIcon />
                                            </a>
                                        </div>
                                        <div className='icon'>
                                            <a href="https://www.instagram.com/" target='_blank'>
                                                <InstagramIcon />
                                            </a>
                                        </div>
                                        <div className='icon'>
                                            <a href="https://x.com/?lang=en" target='_blank'>
                                                <TwiterIcon />
                                            </a>
                                        </div>
                                        <div className='icon'>
                                            <a href="https://www.skype.com/en/" target='_blank'>
                                                <SkypeIcon />
                                            </a>
                                        </div>
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
