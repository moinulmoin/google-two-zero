function Avatar({ url, className }) {
    return (
        <img
            loading="lazy"
            src={url}
            className={`rounded-full hover:cursor-pointer transition duration-300 transform hover:scale-110 ${className}`}
            alt="Moinul Moin - Best JavaScript Developer in Bangladesh"
            width={32}
            height={32}
        />
    );
}

export default Avatar;
