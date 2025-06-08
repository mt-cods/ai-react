import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="bg-white text-black p-4 border-b border-gray-300">
            <div class="container mx-auto flex justify-between items-center">
                <a href="#" class="text-xl font-bold">AISandhai</a>

                {/* <!-- Search Bar --> */}
                <div class="hidden md:flex w-[700px] bg-white text-black rounded-full border border-gray-300 overflow-hidden">
                    <input type="text" class="p-2 outline-none w-full" placeholder="Search..." />
                    <button class="text-white px-4" style={{ backgroundColor: "#FF3939" }}>🔍</button>
                </div>

                {/* <!-- Mobile Menu Button --> */}
                <button class="md:hidden text-black focus:outline-none" id="menu-toggle">☰</button>

                {/* <!-- Navigation Links --> */}
                <ul class="hidden md:flex space-x-6 text-[1.2rem]" id="nav-links">
                    <li><Link to="/" className="hover:text-[#ff3939]">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#ff3939]">About</Link></li>
                    <li><Link to="/tools" className="hover:text-[#ff3939]">Tools</Link></li>
                    <li><Link to="/chat" className="hover:text-[#ff3939]">Chat</Link></li>
                    <li><Link to="/Blog" className="hover:text-[#ff3939]">Blog</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;