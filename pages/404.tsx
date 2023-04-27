import Link from 'next/link'

import Button from '@/components/Button'

const PageNotFound = () => {
    return (
        <section className="flex items-center h-full p-16 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-blue-500">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link href="/">
                        <Button className='ease-in duration-300 bg-blue-500 text-white px-6' onClick={() => { }}>Back to homepage</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PageNotFound