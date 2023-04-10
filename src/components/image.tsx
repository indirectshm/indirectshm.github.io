import NextImage from 'next/image';

type ImageType = {
    src: string,
    width: number,
    height: number,
    alt: string,
    className?: string
}

export default function Image({src, width, height, alt, className} : ImageType) {
    /**
     * Image component that wraps the next/image component for correct image reference on Github pages.
     */
    
    // Determines image url reference by whether it's the development or github page environment
    const is_prod = process.env.NODE_ENV === "production";

    let computed_src = is_prod ? '/ishm' + src : src;

    return <NextImage src={computed_src} width={width} height={height} alt={alt} className={className}/>
}