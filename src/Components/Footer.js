import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
} from 'react-icons/fi';

const socialLinks = [
    {
        id: 1,
        icon: <FiGithub />,
        url: 'https://github.com/Manu839',
    },
    {
        id: 2,
        icon: <FiTwitter />,
        url: '/',
    },
    {
        id: 3,
        icon: <FiLinkedin />,
        url: 'https://www.linkedin.com/in/manu-sai-5a3b8b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },

];

const Footer = () => {
    return (
        <div className="container pt-12 mx-auto bg-slate-900">
            <div className="pt-16 sm:pt-10 pb-8 border-dotted border-t-2 border-purple-600">
                <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-16">
                    <p className="text-3xl sm:text-4xl text-white mb-5">
                        Follow me
                    </p>
                    <ul className="flex gap-4 sm:gap-8">
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className="text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                            >
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    {link.icon}
                                </i>
                            </a>
                        ))}
                    </ul>
                </div>
                <div className="font-general-regular flex justify-center items-center text-center">
                    <div className="text-lg text-white">
                        &copy; {new Date().getFullYear()}
                        <p
                            className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                        >
                            React & Tailwind CSS Portfolio
                        </p>

                        <p
                            className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                        >
                            Manu
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;