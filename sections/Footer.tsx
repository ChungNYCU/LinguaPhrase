const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className='py-6 text-center text-gray-500 text-sm'>
            <span className='dark:text-gray-100 text-gray-900 font-bold text-lg mr-2'>ChungNYCU</span>
            &copy;{year} All Rights Reversed
        </footer>
    )
}
export default Footer