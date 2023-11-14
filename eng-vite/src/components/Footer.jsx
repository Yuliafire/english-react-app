import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-white shadow py-4 px-3 mt-24 text-center text-white fixed bottom-0 left-0">
            <div className="flex w-screen justify-center space-x-4">
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-800">
                    <FaInstagram size={32} />
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-gray-800">
                    <FaLinkedin size={32} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-800">
                    <FaTwitter size={32} />
                </a>
                <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noreferrer" className="text-gray-800">
                    <FaYoutube size={32} />
                </a>
            </div>
            <p className="mt-4 text-gray-800 font-bold">Copyright © {new Date().getFullYear()} Yulia Podgurskaia</p>
        </footer>
    );
}

export default Footer;
