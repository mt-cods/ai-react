import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage"
import HomePage from "./components/HomePage"
import ChatPage from "./components/ChatPage"
import CatalogPage from "./components/CatalogPage"
import AddAIPage from "./components/AddAIPage"
import BlogPage from "./components/BlogPage"
import BlogContentPage from "./components/BlogContentPage"
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/tools" element={<CatalogPage />} />
        <Route path="/addAi" element={<AddAIPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogcontent" element={<BlogContentPage />} />
      </Routes>
    </Router>
  )
}

export default App
