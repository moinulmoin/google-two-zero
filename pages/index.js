import Head from 'next/head';
import Footer from '../components/Footer';
import MainBody from '../components/MainBody';
import MainHeader from '../components/MainHeader';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google 2.0</title>
                <meta
                    name="description"
                    content="Google 2.0 -  Made by Moinul Moin - Best JavaScript Developer in Bangladesh"
                />
                <meta
                    name="keywords"
                    content="Best JavaScript Developer in Bangladesh, Best Web Developer in Bangladesh"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#FFFFFF" />
            </Head>
            {/* Header */}
            <MainHeader />
            {/* Body */}
            <MainBody />
            {/* Footer */}
            <Footer />
        </div>
    );
}
