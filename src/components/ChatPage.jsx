import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, clearMessages } from "../redux/messagesSlice";
import { FaPaperPlane, FaPlus, FaSearch, FaTimes, FaBars } from "react-icons/fa";

function convertMarkdownToHTML(markdown) {
  const codeBlocks = [];
  let html = markdown;

  // Step 1: Extract code blocks and replace them with placeholders
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang = '', code) => {
    const placeholder = `{{CODE_BLOCK_${codeBlocks.length}}}`;
    codeBlocks.push({ lang, code });
    return placeholder;
  });

  // Step 2: Convert markdown (outside code blocks)

  // Headers
  html = html.replace(/^### (.*)$/gim, '<h3 class="text-xl font-semibold mb-2">$1</h3>');
  html = html.replace(/^## (.*)$/gim, '<h2 class="text-2xl font-bold mb-3">$1</h2>');
  html = html.replace(/^# (.*)$/gim, '<h1 class="text-3xl font-extrabold mb-4">$1</h1>');

  // Bold and Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

  // Inline code
  html = html.replace(/`([^`\n]+)`/g, '<code class="bg-gray-200 p-1 rounded-sm font-mono">$1</code>');

  // Line breaks
  html = html.replace(/\n/g, '<br />');

  // Step 3: Restore code blocks with language headers
  codeBlocks.forEach(({ lang, code }, i) => {
    const header = lang
      ? `<div class="bg-gray-700 text-yellow-400 px-4 py-2 text-sm font-semibold rounded-t">${lang}</div>`
      : '';
    const codeHtml = `
      <div class="my-4 border border-gray-700 rounded-lg overflow-hidden bg-gray-900">
        ${header}
        <pre class="overflow-x-auto p-4 text-sm text-white"><code class="font-mono">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      </div>
    `;
    html = html.replace(`{{CODE_BLOCK_${i}}}`, codeHtml);
  });

  return html.trim();
}

const ChatPage = () => {
  const dispatch = useDispatch();

  // Get the list of previous chats
  const previousChats = useSelector((state) =>
    state.messages.map(({ id, title }) => ({ id, title }))
  );

  // Get the last chat ID (if available)
  const lastChatId = previousChats.length > 0 ? previousChats[previousChats.length - 1].id : null;

  // Set current chat ID (defaults to last chat)
  const [chatId, setChatId] = useState(lastChatId);

  // Get messages for the selected chat
  const messages = useSelector((state) => {
    return state.messages.find(chat => chat.id === chatId)?.messages || [];
  });

  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const models = [
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-1.5-flash",
    "gemini-1.5-flash-8b",
    "gemini-1.5-pro",
    "gemini-embedding-exp",
    "imagen-3.0-generate-002",
    "veo-2.0-generate-001",
    "gemini-2.0-flash-live-001" 
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modelFromURL = models.includes(queryParams.get("model")) ? queryParams.get("model") : models[0];
  const [selectedModel, setSelectedModel] = useState(modelFromURL);

  useEffect(() => {
    setSelectedModel(modelFromURL); // Update model when URL changes
  }, [modelFromURL]);

  // Load previous conversation
  const loadConversation = (chat) => {
    setChatId(chat.id);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message
    dispatch(addMessage({ id: chatId, text: input, sender: "You" }));
    setInput("");

    try {
      const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&format=json', {
  method: 'GET',
});

let data = await response.json();
data = data.join('\n\n') || "Some error has occurred. Try again later.";

console.log(data);

      
      // Add AI response
      dispatch(addMessage({ id: chatId, text: data, sender: "AI" }));
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="flex h-screen bg-[#ffffff]">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="w-1/5 bg-[#f9f9f9] p-4 overflow-auto flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <button className="p-2 rounded-lg hover:bg-[#F0F0F0]" onClick={() => setSidebarOpen(false)}>
              <FaTimes size={20} color="#939393" />
            </button>
            <div>
              <button className="p-2 rounded-lg hover:bg-[#F0F0F0]">
                <FaSearch size={20} color="#939393" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#F0F0F0]">
                <FaPlus size={20} color="#939393" />
              </button>
            </div>
          </div>

          {/* Previous Chats */}
          <ul className="flex-1 overflow-auto">
            {previousChats.map((chat) => (
              <li
                key={chat.id}
                className="p-2 mb-2 bg-[#f0f0f0] rounded cursor-pointer hover:bg-[#E0E0E0] transition-all text-[#0D0D0D]"
                onClick={() => loadConversation(chat)}
              >
                {chat.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Chat Section */}
      <div className="flex flex-col flex-1">
        {/* Chat Header */}

        <div className="bg-white text-black p-4 text-center text-xl font-bold flex justify-between items-center border">
          { !sidebarOpen && (
              <div className="flex gap-4">
              <button className="p-2 rounded-lg hover:bg-[#F0F0F0]" onClick={() => setSidebarOpen(true)}>
                <FaBars size={20} color="#939393" />
              </button>
              <button className="p-2 rounded-lg hover:bg-[#F0F0F0]">
                <FaPlus size={20} color="#939393" />
              </button>
              </div>
            )
          }
          <span>Chat with AI</span>
          <Link to="/" className="bg-white text-[#FF3939] text-base px-2 py-1 rounded-lg hover:bg-gray-200 transition">
            Home
          </Link>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 w-fit max-w-[70%] rounded-lg ${msg.sender === "You" ? "bg-[#D32F2F] text-white ml-auto" : "bg-[#E0E0E0] text-black"
                }`}
            
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(msg.text) }}
            />
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t flex items-center">
          {/* Model Selector */}
          <select
            className="border p-2 rounded-lg outline-none focus:border-[#FF3939] mr-2"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {models.map((model, index) => (
              <option key={index} value={model.toLowerCase().replace(" ", "-")}>
                {model}
              </option>
            ))}
          </select>

          {/* Chat Input */}
          <input
            type="text"
            className="flex-1 border p-2 rounded-lg outline-none focus:border-[#FF3939]"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          {/* Send Button */}
          <button className="ml-2 bg-[#FF3939] text-white p-3 rounded-lg hover:bg-[#D32F2F] transition-all" onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;