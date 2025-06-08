import { useState } from "react";
import { FaPlus, FaArrowUp, FaArrowDown, FaRegFileAlt, FaUsers, FaChartLine, FaCog } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Dashboard = () => {
    const [credits, setCredits] = useState(100); // Example balance
    const trendingTools = [
        { name: "ChatGPT 4o", image: "https://cdn.brandfetch.io/id2UDPob7G/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B", category: "Chat AI" },
        { name: "Gemini", image: "https://cdn.brandfetch.io/idycLpOUCH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", category: "Multimodal AI" },
        { name: "Claude AI", image: "https://cdn.brandfetch.io/idW5s392j1/w/338/h/338/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B", category: "Language Model" },
        { name: "DALL·E", image: "https://cdn.brandfetch.io/id2UDPob7G/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B", category: "Image Generation" },
        { name: "Midjourney", image: "https://cdn.brandfetch.io/id2zQLfAF7/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", category: "AI Art" },
    ];
    const blogs = [
        { title: "Future of AI", date: "April 2025" },
        { title: "Top 10 AI Tools", date: "March 2025" },
    ];
    // const transactions = [
    //     { type: "Deposit", amount: 50, date: "2025-04-01" },
    //     { type: "Withdraw", amount: -20, date: "2025-03-29" },
    // ];
    const announcements = [
        "New AI tools added!",
        "AI Marketplace v2 is launching soon!",
    ];

    return (<>
        <NavBar />
        <div className="flex">
            <aside className="w-64 bg-black text-white p-5 flex flex-col">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div>
                        <h2 className="text-lg font-bold">Julie Bell</h2>
                        <p className="text-gray-400 text-sm">Welcome back</p>
                    </div>
                </div>

                <nav className="mt-10 space-y-1">
                    <NavItem icon={MdMessage} label="Assingment on maths" />
                    <NavItem icon={MdMessage} label="Manage Credits" />
                    <NavItem icon={MdMessage} label="Making a poster" />
                    <NavItem icon={MdMessage} label="Manage time schedule" />
                </nav>
            </aside>

            <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-6">
                {/* User Credits */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-lg font-semibold">Your Credits</h2>
                    <p className="text-2xl font-bold">{credits} Credits</p>
                    <div className="mt-2 flex gap-4">
                        <button onClick={() => setCredits(credits + 10)} className="bg-green-500 text-white p-2 rounded-md flex items-center">
                            <FaPlus className="mr-2" /> Add Credits
                        </button>
                        <button onClick={() => setCredits(credits - 10)} className="bg-red-500 text-white p-2 rounded-md flex items-center">
                            <FaArrowDown className="mr-2" /> Withdraw
                        </button>
                    </div>
                </div>

                {/* Trending AI Tools */}
                <div className="bg-transparent p-4 w-full max-w-4xl mt-6">
                    <h2 className="text-lg font-semibold">Trending AI Tools</h2>
                    <div className="flex gap-4 mt-2">
                        {
                            trendingTools.map((tool, index) => (
                                <Link to={`/chat?model=${tool.name.toLowerCase().replace(" ", "-")}`} key={index} className="p-3 bg-white rounded-lg shadow-lg w-48 text-center">
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className="w-24 h-24 rounded-md object-contain mx-auto"
                                    />
                                    <p className="mt-1 font-semibold">{tool.name}</p>
                                    <p className="text-sm text-gray-500">{tool.category}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>


                {/* Latest Blogs */}
                <Link to="/blog" className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl mt-6">
                    <h2 className="text-lg font-semibold">Latest Blogs</h2>
                    <ul className="mt-2">
                        {blogs.map((blog, index) => (
                            <li key={index} className="p-2 border-b"><Link to="/blog">{blog.title} - <span className="text-gray-500">{blog.date}</span></Link></li>
                        ))}
                    </ul>
                </Link>

                {/* Recent Transactions
                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl mt-6">
                    <h2 className="text-lg font-semibold">Recent Transactions</h2>
                    <ul className="mt-2">
                        {transactions.map((txn, index) => (
                            <li key={index} className={`p-2 border-b flex justify-between ${txn.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                                {txn.type} {txn.amount > 0 ? "+" : ""}{txn.amount} Credits
                                <span className="text-gray-500">{txn.date}</span>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Announcements */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl mt-6">
                    <h2 className="text-lg font-semibold">Announcements</h2>
                    <ul className="mt-2">
                        {announcements.map((announcement, index) => (
                            <li key={index} className="p-2 border-b">{announcement}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
};

export default Dashboard;

const NavItem = ({ icon: Icon, label }) => (
    <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-3 rounded">
        <Icon className="text-xl" />
        <span>{label}</span>
    </div>
);