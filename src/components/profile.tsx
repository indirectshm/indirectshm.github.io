import Image from '@/components/image';
import type { ImageType } from '@/components/image';
import NextImage from 'next/image';


export type ProfileType = {
    name: string,
    title: string,
    image: ImageType,
    description?: string,
    links?: String
}

export default function Profile({name, title, image, description} : profile) {
    let {src, alt, width, height, className} = image;

    return (
        <div className='text-center py-14 px-8'>
            <h2>{name}</h2>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
                />
            <h3>{title}</h3>
            <div>
                {description}
            </div>
        </div>
    )
}
;

