import Webring from './Webring.tsx'

function Footer() {
    return (
        <footer id="footer" className="flex justify-center items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 min-h-16 bg-nav">
            <div className="text-main text-base sm:text-lg md:text-xl text-center">
                <Webring/>
            </div>
        </footer>
    );
}

export default Footer;