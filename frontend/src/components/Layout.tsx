import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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