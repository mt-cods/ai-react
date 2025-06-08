import { useState } from "react";
import aiMarketPlaceImage from "../assets/template-1.webp"
import NavBar from "./NavBar";

const AboutPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (<div>
        <NavBar />

        {/* <!-- Hero Section --> */}
        <section class="text-white py-20 text-center" style={{ backgroundColor: "#FF3939" }}>
            <h1 class="text-4xl font-bold mb-4">Welcome to AISandhai!</h1>
            <p class="text-xl mb-6">Anything. Everything. All in one place.</p>
            <a href="#features" class="py-2 px-6 rounded-full font-semibold text-white" style={{ backgroundColor: "#D32F2F" }}>Explore Features</a>
        </section>

        {/* <!-- About Section --> */}
        <section class="container mx-auto p-8" id="about">
            <div class="flex flex-col md:flex-row items-center mb-8">
                <div class="md:w-[500px] ml-[100px] mb-6 md:mb-0">
                    <img src={ aiMarketPlaceImage } alt="AI Tools" class="rounded-lg shadow-lg w-[400px]" />
                </div>
                <div class="md:w-1/2 text-lg text-gray-700">
                    <h2 class="text-3xl font-bold mb-4" style={{ color: "#FF3939" }}>What is AISandhai?</h2>
                    <p class="mb-4">
                        AISandhai is a platform designed to bring together all the AI tools you need in one place.
                    </p>
                    <p>
                        We make AI easy to access, so you can chat, explore, and use AI tools without the hassle of managing multiple services.
                    </p>
                </div>
            </div>
        </section>

        {/* <!-- Features Section --> */}
        <section class="py-16" style={{ backgroundColor: "#FFE5E5" }}>
            <div class="container mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold mb-6" style={{ color: "#FF3939" }}>Everything We promise</h2>
                <br />
            </div>
            <div class="container w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Hassle free</h3>
                    <p class="text-gray-600">Access a variety of AI models for different tasks with out needing different subscription.</p>
                </div>
                <div class="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Seamless Integration</h3>
                    <p class="text-gray-600">Everything is integrated into one easy-to-use interface.</p>
                </div>
                <div class="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Real-Time Interaction</h3>
                    <p class="text-gray-600">Engage with AI tools in real-time.</p>
                </div>
                <div class="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Pay as you use</h3>
                    <p class="text-gray-600">Pay for tokens which you can spend on any tool.</p>
                    <p class="text-gray-600">100% transferable</p>
                </div>
                <div class="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Change on the Go</h3>
                    <p class="text-gray-600">Change the model on mid chats for greater experience.</p>
                </div>
                <div class="text-center bg-white p-8 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Even more bots</h3>
                    <p class="text-gray-600">Access Custom bots which are created for specific purposes for even more efficiency and Accuracy.</p>
                </div>
            </div>
        </section>

        {/* <!-- Footer --> */}
        <footer class="text-white text-center py-4" style={{ backgroundColor: "#D32F2F" }}>
            <p>&copy; 2025 AISandhai. All Rights Reserved.</p>
        </footer>

        {
            // document.getElementById("menu-toggle").addEventListener("click", () => {
            //     document.getElementById("nav-links").classList.toggle("hidden");
            // })
        }
    </div>
    );
};

export default AboutPage;