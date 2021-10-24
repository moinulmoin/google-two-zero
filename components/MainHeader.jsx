import { ViewGridIcon } from '@heroicons/react/solid';
import React from 'react';
import Avatar from './Avatar';

function MainHeader() {
    return (
        <header className="w-full flex p-5 justify-between text-sm text-gray-700">
            {/* left */}
            <div className="flex space-x-4 items-center">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <ViewGridIcon className="w-10 h-10 rounded-full p-2 hover:bg-gray-100 cursor-pointer" />
                <Avatar url="/moinulmoin.png" />
            </div>
        </header>
    );
}

export default MainHeader;
