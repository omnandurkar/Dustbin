import { Link } from "react-router-dom"

export default () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8" >
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block" data-aos="fade-up" >
                        <img src="https://tse4.mm.bing.net/th/id/OIG1.FNfSMfCKvPJxG7QIXiHb?pid=ImgGn" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl" data-aos="fade-down">
                        <h3 className="text-green-600 font-semibold">
                            Professional services
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            BarCode Scanning
                        </p>
                        <p className="mt-3 text-gray-600">
                            
Barcode scanning is a technology that uses optical scanning devices, such as barcode scanners or mobile devices with built-in cameras, to read and interpret barcode information.
                        </p>
                        <Link to="/" className="inline-flex gap-x-1 items-center text-green-600 hover:text-green-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}