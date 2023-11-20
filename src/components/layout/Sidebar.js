import { IoMenu, IoClose } from "react-icons/io5";
import logo from '../../assets/images/logo.png'

export default function Sidebar({
    menuOpen = false,
    setMenuOpen = () => {}
}){
    const navOptions = [
        {
            title: 'Overview',
            link: '#',
            active: false
        },
        {
            title: 'Onboarding',
            link: '#',
            active: false
        },
        {
            title: 'Monitoring',
            link: '#',
            active: true
        },
        {
            title: 'Flagging',
            link: '#',
            active: false
        },
        {
            title: 'Source Of Income',
            link: '#',
            active: false
        },
        {
            title: 'UAR',
            link: '#',
            active: false
        }
    ];

    const MenuScreen = () => (
        <>
            <img
                className="w-full"
                src={logo}
                alt="Workflow"
            />
            <nav
                className="mt-8"
                aria-label="Sidebar"
            >
                {
                    navOptions.map((navOptipon, index) => (
                        <div
                            key={`navOption-${index}`}
                            href={navOptipon.link}
                            className={`px-4 py-2.5 my-1 ${navOptipon.active ? 'bg-primaryLightBG rounded-lg' : ''}`}
                        >
                            <a
                                href={navOptipon.link}
                            >
                                <h4
                                    className={`${navOptipon.active ? 'text-primary' : 'text-secondary'}`}
                                >
                                    {navOptipon.title}
                                </h4>  
                            </a>
                        </div>
                    ))
                }
            </nav>
            <div
                className='flex gap-x-2 mt-auto'
            >
                <img
                    src='https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg'
                    alt='profile'
                    className='rounded-full w-10 h-10 object-cover'
                />
                <div>
                    <h5>
                        Elon Musk
                    </h5>
                    <a
                        href='mailto:elon@twitter.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <h5
                            className='text-secondary'
                        >
                            elon@twitter.com
                        </h5>
                    </a>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div
                className="hidden min-h-screen h-full py-6 px-4 lg:py-12 lg:px-8 md:flex flex-col border-solid border-r-2 border-BGBorder"
            >
                <MenuScreen />
            </div>
            <div
                className="min-h-screen py-6 px-4 lg:py-12 lg:px-8 md:hidden flex-col border-solid border-r-2 border-BGBorder"
            >
                {
                    menuOpen ? (
                        <>
                            <div
                                className="bg-white z-2 h-full transition-all"
                            >
                            <div
                                className='flex justify-end'
                            >
                                <IoClose
                                    className='text-3xl text-primary'
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>
                            <MenuScreen />
                            </div>
                        </>
                    ) : (
                        <IoMenu
                            className='text-3xl text-primary'
                            onClick={() => setMenuOpen(true)}
                        />
                    )
                }
                
            </div>
        </>
    )
}