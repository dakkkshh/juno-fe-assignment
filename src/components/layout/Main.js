import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

export default function Main({
    children
}){
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <main className='grid grid-cols-7 md:grid-cols-5'>
            <div
                className={`${menuOpen ? 'col-span-7 md:col-span-1' : 'col-span-1'}`}
            >
                <Sidebar
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </div>
            <div
                className={`${menuOpen ? 'hidden' : 'col-span-6 md:col-span-4'} p-6 lg:p-12`}
            >
                {children}
            </div>
        </main>
    )
}