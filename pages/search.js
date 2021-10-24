import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
    const router = useRouter();
    return (
        <div>
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
            <Header queryText={router.query.term} />
            <SearchResults results={results} />
        </div>
    );
}

export default Search;

export async function getServerSideProps(context) {
    // API from https://developers.google.com/custom-search/v1/using_rest
    // Context from https://cse.google.com/cse/create/new

    const startIndex = context.query.start || '0';

    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());
    return {
        props: {
            results: data,
        },
    };
}
