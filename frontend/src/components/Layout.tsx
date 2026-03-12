import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [hash]);

    return (
        <div className="min-h-screen w-full bg-bg flex flex-col">
            <div className="sticky top-0 z-10 bg-bg">
                <Navbar />
            </div>
            <main className="flex-1 w-full page-padding py-6 sm:py-8 md:py-12">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;