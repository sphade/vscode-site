import React from 'react'
import Image from 'next/image'
function BannerAd({img,link}) {
    return (
        <div className='w-full h-32 block relative'>
            <a href={link} target='_blank'>
            <Image
                    src={img}
                    layout='fill'
                    alt={img}/>
            </a>
        </div>
    )
}

export default BannerAd
