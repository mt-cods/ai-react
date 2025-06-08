import { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const CatalogPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [search, setSearch] = useState("");

    // Example AI tools (replace with API data)
    const aiTools = [
        { id: 1, name: "ChatGPT 4o", category: "Chat AI", price: "Free", image: "https://cdn.brandfetch.io/id2UDPob7G/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
        { id: 2, name: "Gemini", category: "Multimodal AI", price: "Free", image: "https://cdn.brandfetch.io/idycLpOUCH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
        { id: 3, name: "Claude AI", category: "Language Model", price: "Free", image: "https://cdn.brandfetch.io/idW5s392j1/w/338/h/338/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
        { id: 4, name: "DALL·E", category: "Image Generation", price: "$10/month", image: "https://cdn.brandfetch.io/id2UDPob7G/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
        { id: 5, name: "Midjourney", category: "AI Art", price: "$8/month", image: "https://cdn.brandfetch.io/id2zQLfAF7/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    ];    

    // Filter AI tools based on search query
    const filteredTools = aiTools.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <NavBar />

            <div className="flex bg-[#F3F4F6]">
                {/* Sidebar */}
                {isSidebarOpen && (
                    <div className="w-1/4 bg-[#2D2D2D] text-white p-4 overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Filters</h2>
                            <button onClick={() => setSidebarOpen(false)} className="text-white p-2 hover:text-[#FF3939]">
                              <FaTimes />
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Search AI tools..."
                            className="w-full p-2 mb-4 rounded bg-[#3A3A3A] text-white outline-none focus:ring-2 focus:ring-[#FF3939]"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <h3 className="text-lg font-semibold mb-2">Categories</h3>
                        <ul>
                            {["Chat", "Art", "Development", "Productivity"].map((category) => (
                                <li key={category} className="p-2 bg-[#3A3A3A] rounded my-2 cursor-pointer hover:bg-[#FF3939] transition-all">
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-[#D32F2F]">AI Marketplace</h1>
                        <div className="flex space-x-4">
                            <button onClick={() => setSidebarOpen(true)} className="bg-[#FF3939] text-white p-2 rounded-lg hover:bg-[#D32F2F]">
                                <FaFilter />
                            </button>
                            <button className="bg-[#FF3939] text-white p-2 rounded-lg hover:bg-[#D32F2F]">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    {/* AI Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTools.length > 0 ? (
                            filteredTools.map((tool) => (
                                <Link to={`/chat?model=${tool.name.toLowerCase().replace(" ", "-")}`} key={tool.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                                    <img src={tool.image} alt={tool.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                                    <h2 className="text-xl font-bold">{tool.name}</h2>
                                    <p className="text-gray-600">{tool.category}</p>
                                    <p className="text-[#D32F2F] font-semibold">{tool.price}</p>
                                    <button className="mt-3 w-full bg-[#FF3939] text-white p-2 rounded-lg hover:bg-[#D32F2F] transition-all">
                                        Learn More
                                    </button>
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No tools found.</p>
                        )}
                        <Link to="/addAi" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-400">
                            <h2 className="text-xl font-bold text-gray-700">Want to add your AI tool here?</h2>
                            <p className="text-gray-600 mt-2">List your AI tool and get discovered by users!</p>
                            <button className="mt-3 bg-[#FF3939] text-white px-4 py-2 rounded-lg hover:bg-[#D32F2F] transition-all">
                                Add AI Tool
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogPage;
