import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";

const SingleBlogPage = () => {
    const { id } = useParams(); // Get blog ID from URL

    // Sample blog posts (Replace this with API call)
    const [blogs] = useState([
        {
            id: 1,
            title: "The Future of AI in 2025",
            content: "Artificial intelligence is advancing at a rapid pace. In this blog, we explore how AI is shaping the future...",
            image: "https://source.unsplash.com/800x450/?technology,ai",
            author: "John Doe",
            date: "March 30, 2025",
        },
        {
            id: 2,
            title: "AI Tools for Productivity",
            content: "AI-powered tools are helping individuals and businesses improve efficiency. Let's explore some of the best AI tools...",
            image: "https://source.unsplash.com/600x400/?robot,workspace",
            author: "Alice Smith",
            date: "March 28, 2025",
        },
        {
            id: 3,
            title: "How AI is Changing Software Development",
            content: "From AI-assisted coding to automated bug fixing, AI is transforming software development like never before...",
            image: "https://source.unsplash.com/600x400/?coding,ai",
            author: "David Lee",
            date: "March 25, 2025",
        },
    ]);

    // Find the blog post by ID
    // const blog = blogs.find((b) => b.id === parseInt(id));
    const blog = {
        id: 3,
        title: "How AI is Changing Software Development",
        content: "From AI-assisted coding to automated bug fixing, AI is transforming software development like never before...",
        image: "https://source.unsplash.com/600x400/?coding,ai",
        author: "David Lee",
        date: "March 25, 2025",
    };

    // If blog not found, show an error message
    if (!blog) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-3xl font-semibold text-red-600">Blog Not Found</h2>
                <Link to="/" className="text-blue-500 mt-4 inline-block">Go Back</Link>
            </div>
        );
    }

    return (
        <>
            <NavBar />

            <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
                <h1 className="text-4xl font-semibold mt-6 text-gray-900">{blog.title}</h1>
                <div className="text-sm text-gray-500 mt-2">
                    <span>By {blog.author} • {blog.date}</span>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">{blog.content}</p>

                <Link to="/blogs" className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    ← Back to Blogs
                </Link>
            </div>
        </>
    );
};

export default SingleBlogPage;
