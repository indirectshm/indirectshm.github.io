import Link from 'next/link';
import type { NavLink } from './variables';
import { Routes } from './variables';


export default function Navbar() {
    
    const generate_tab = ({name, ref, sublinks}: NavLink) => {
        return (
            <Link href={ref} className='flex-auto text-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>{name}</Link>
        )
    };

    return (
        <nav className='flex'>
            {
                Routes.titles().map(x => generate_tab(x))
            }
        </nav>
    )
}

;
