import Webring from './Webring.tsx'

interface FooterProps {
    content?: string;
}

function Footer({ content = "© 2026 Jonathan. All rights reserved." }: FooterProps) {
    return (
        <footer id="footer" className="flex justify-center items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-bg border-t border-main/20">
            <p className="text-main text-sm sm:text-base md:text-lg text-center">
                <Webring/>
            </p>
        </footer>
    );
}

export default Footer;