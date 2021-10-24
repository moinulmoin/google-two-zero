import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

function MainBody() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (term) {
            router.push(`/search?term=${term}`);
        }
    };
    return (
        <>
            <form className="flex flex-col items-center mt-24 flex-grow w-4/5">
                <Image
                    src="/google.png"
                    width={300}
                    height={100}
                    alt="Google 2.0 -  Made by Moinul Moin - Best JavaScript Developer in Bangladesh"
                />
                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border  border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow focus:outline-none"
                        onKeyPress={(e) => e.key === 'Enter' && search(e)}
                    />
                    <MicrophoneIcon className="h-5" />
                </div>

                <div className="flex flex-col w-2/6 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button type="button" onClick={search} className="btn">
                        Google Search
                    </button>
                    <button type="button" onClick={search} className="btn">
                        I&#39;m Feeling Lucky
                    </button>
                </div>
            </form>
        </>
    );
}

export default MainBody;
