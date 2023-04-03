import Head from 'next/head';
import Header from './header';
import { ReactNode } from "react";

export default function Skeleton({children}: {children: ReactNode}) {

    return (
        <>
            <Head>
                <title>Indirect Structural Health Monitoring</title>
                <meta name="description" content="Indirect structural health monitoring" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Structural monitoring, bridge detection" /> 
                {/* TODO: Icon for tab */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Header/>
            <main className='flex flex-col items-center mx-auto pt-12 px-10 sm:px-36'>
                {children}
            </main>
        </>
    )
}

