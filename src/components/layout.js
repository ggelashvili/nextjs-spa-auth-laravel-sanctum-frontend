import React, {useState} from 'react'
import AuthIndicator from '@components/AuthIndicator'
import withAuth from '@components/withAuth'

const Layout = ({user, children}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggle = prevState => ! prevState

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(toggle)
    }

    return (
        <div>
            <nav className="bg-indigo-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8"
                                     src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                                     alt="Workflow logo" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#"
                                       className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-900 focus:outline-none focus:text-white focus:bg-indigo-700">Dashboard</a>

                                    <a href="#"
                                       className="px-3 py-2 rounded-md text-sm font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">Tickets</a>

                                    <a href="#"
                                       className="px-3 py-2 rounded-md text-sm font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">Calendar</a>

                                    <a href="#"
                                       className="px-3 py-2 rounded-md text-sm font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">Reports</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <AuthIndicator isLoggedIn={user?.isLoggedIn} />
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white">
                                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                     stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                     stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-b border-gray-700 md:hidden`}>
                    <div className="px-2 py-3 space-y-1 sm:px-3">
                        <a href="#"
                           className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-900 focus:outline-none focus:text-white focus:bg-indigo-700">Dashboard</a>

                        <a href="#"
                           className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">Tickets</a>

                        <a href="#"
                           className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">Calendar</a>

                        <a href="#"
                           className="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700">Reports</a>
                    </div>
                </div>
            </nav>

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-indigo-900">
                        Dashboard
                    </h1>
                </div>
            </header>

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default withAuth(Layout)
