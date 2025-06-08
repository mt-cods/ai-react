import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const BlogPage = () => {
    // Sample blog posts
    const [blogs] = useState([
        {
            id: 1,
            title: "The Future of AI in 2025",
            excerpt: "Discover the latest trends in artificial intelligence and how it will shape industries...",
            image: "https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/Where-Will-Artificial-Intelligence-Take-Us-In-The-Future-/960x0.jpg?format=jpg&width=1440",
            author: "John Doe",
            date: "March 30, 2025",
            link: "https://builtin.com/artificial-intelligence/artificial-intelligence-future",
        },
        {
            id: 2,
            title: "AI Tools for Productivity",
            excerpt: "Boost your workflow with these top AI-powered tools...",
            image: "https://images.ctfassets.net/lzny33ho1g45/6VcDGWbQfWElVwAiMWLk9c/54a88cca295511333240c2919fc3f084/best-ai-productivity.jpg?w=1520&fm=avif&q=31&fit=thumb&h=760",
            author: "Alice Smith",
            date: "March 28, 2025",
            link: "https://zapier.com/blog/best-ai-productivity-tools/",
        },
        {
            id: 3,
            title: "How AI is Changing Software Development",
            excerpt: "From code generation to debugging, AI is revolutionizing development...",
            image: "https://wefttechnologies.com/wp-content/uploads/2023/06/Blog2-1.jpg",
            author: "David Lee",
            date: "March 25, 2025",
            link: "https://brainhub.eu/library/software-developer-age-of-ai",
        },
        {
            id: 4,
            title: "Ethical AI: Challenges and Solutions",
            excerpt: "AI is powerful, but what about the ethical implications?",
            image: "https://www.xenonstack.com/hs-fs/hubfs/xenonstack-ethical-ai-challenges-and-solutions.png?width=1280&height=720&name=xenonstack-ethical-ai-challenges-and-solutions.png",
            author: "Sarah Green",
            date: "March 20, 2025",
            link: "https://www.xenonstack.com/blog/ethical-ai-challenges-and-architecture",
        },
        {
            id: 5,
            title: "The Rise of AI-Powered Chatbots",
            excerpt: "Businesses are adopting AI chatbots at a rapid pace...",
            image: "https://cdn-imabd.nitrocdn.com/wEDuzaWnyIQUUBnNZcWJGIjGHdBtYIEM/assets/images/optimized/rev-fe8fd11/nordstone.co.uk/wp-content/uploads/2023/11/The-Rise-of-AI-Powered-Chatbots-80.jpg",
            author: "Mark White",
            date: "March 18, 2025",
            link: "https://themtmagency.com/blog/the-rise-of-chatbots",
        },
    ]);

    // Sample trending AI tools
    const trendingAITools = [
        { id: 1, name: "ChatGPT", category: "Chat AI" },
        { id: 2, name: "DALL·E", category: "Image Generation" },
        { id: 3, name: "Codex", category: "Coding Assistant" },
    ];

    return (
        <>
            <NavBar />

            <div className="bg-[#F3F4F6] min-h-screen p-6">
                {/* First Blog Post with Trending AI Tools */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* First Blog (Big Card) */}
                    <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
                        <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <h2 className="text-3xl font-semibold text-[#FF3939]">{blogs[0].title}</h2>
                        <p className="text-gray-600 mt-2">{blogs[0].excerpt}</p>
                        <div className="mt-4 text-sm text-gray-500">
                            <span>By {blogs[0].author} • {blogs[0].date}</span>
                        </div>
                        <a
                            href="https://builtin.com/artificial-intelligence/artificial-intelligence-future"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-[#D32F2F] font-semibold hover:underline"
                        >
                            Read More →
                        </a>
                    </div>

                    {/* Trending AI Tools */}
                    <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#D32F2F] mb-4">Trending AI Tools</h3>
                        <ul className="space-y-2">
                            {trendingAITools.map((tool) => (
                                <li key={tool.id} className="text-gray-700">
                                    <Link to={`/ai/${tool.id}`} className="hover:text-[#FF3939] font-medium">{tool.name}</Link>
                                    <span className="block text-sm text-gray-500">{tool.category}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Remaining Blog Posts in Grid (3 per row) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {blogs.slice(1).map((blog) => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
                            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-2" />
                            <h3 className="text-lg font-semibold text-[#FF3939]">{blog.title}</h3>
                            <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                            <div className="text-sm text-gray-500 mt-2">
                                <span>By {blog.author} • {blog.date}</span>
                            </div>
                            <a href={blog.link} className="inline-block mt-2 text-[#D32F2F] font-semibold hover:underline">
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogPage;