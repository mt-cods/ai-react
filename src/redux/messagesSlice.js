import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "AI helping with homework", messages: [{ sender: "You", text: "Can you help with math?!" }, { sender: "AI", text: "Sure!" }] },
    { id: 2, title: "Chat about coding", messages: [{ sender: "You", text: "How to use React?" }, { sender: "AI", text: "React is a JavaScript library..." }] },
    { id: 3, title: "Fun chat with AI", messages: [{ sender: "You", text: "Tell me a joke!" }, { sender: "AI", text: `Sure! Here's a joke for you:
        Why do programmers prefer dark mode?
        Because light attracts bugs! 😆💻` }]
    },
];

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { id, text, sender } = action.payload;

      // Find the chat by ID
      const chat = state.find((chat) => chat.id === id);
      if (chat) {
        chat.messages.push({ text, sender });
      } else {
        state.push({ id, title: "", messages: [{ text, sender }] }); // If chat doesn't exist, create one
      }
    },

    clearMessages: (state, action) => {
      const { id } = action.payload;

      // Remove the chat with matching ID
      return state.filter((chat) => chat.id !== id);
    },
  },
});

export const { addMessage, clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
