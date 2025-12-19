import React, { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import gemini from "./assets/images/ai.png";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

const maxCharacters = 200;

function App() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("chat_messages");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const input = useRef(null);

  useEffect(() => {
    isLoading ? "" : input.current.focus();
  }, [isLoading]);

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    input.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleClear() {
    setMessages([]);
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    setError(null);
  }

  const handleSend = async () => {
    if (!inputText.trim()) return;
    if (inputText.length > maxCharacters) return;
    if (isLoading) return;

    setError(null);
    setIsLoading(true);

    const userMessage = {
      sender: "user",
      text: inputText.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInputText("");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userMessage.text,
        config: {
          systemInstruction: `
You are Astra, a demo AI chatbot.

Project context:
- This project was created by Haseeb ur Rehman during his React frontend internship.
- It is a frontend-only demo application built using React and the Gemini 2.5 Flash API.
- The purpose of this project is learning, showcasing frontend skills, and API integration.

About the creator:
- Haseeb is a frontend developer skilled in HTML, CSS, JavaScript, Git, and GitHub.
- He has experience building responsive web projects and working in team-based environments.
- GitHub: https://github.com/Haseeb-cod3r
- LinkedIn: https://www.linkedin.com/in/haseeb--ur--rehman/

Behavior rules:
- Keep responses short and clear (maximum 4 lines).
- Use simple, friendly language.
- Do not use markdown or special formatting.
- Do not claim to be an official Google or Gemini product.
- If asked about limitations, explain this is a demo project using a free API.
- If asked who created you, say you were built by Haseeb as a React internship project.
    `.trim(),
        },
      });

      const aiText = response.text;

      const aiMessage = {
        sender: "ai",
        text: aiText,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setError(
        "“The API usage limit may have been reached. Please try again later.”"
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "I'm having trouble connecting right now. Please try again later.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-slate-900 rounded-2xl shadow-xl flex flex-col overflow-hidden min-h-[700px] h-full">
        <header className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img src={gemini} alt="" className="h-[25px]" />
            <h1 className="text-xl font-semibold text-white">Astra AI</h1>
          </div>

          <span className="text-sm text-slate-400">
            powerd by "gemini 2.5 Flash"
          </span>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length ? (
            <div>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] max-sm:max-w-[60%] px-4 py-2 rounded-xl text-sm leading-relaxed mb-5
              ${
                msg.sender === "user"
                  ? "ml-auto bg-indigo-600 text-white rounded-br-none"
                  : "mr-auto bg-slate-700 text-slate-100 rounded-bl-none"
              }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-white text-center text-[20px] mt-50">
                No messages yet. Say hello 👋
              </h1>
            </div>
          )}

          {isLoading && (
            <div className="text-slate-400 text-sm italic">AI is typing...</div>
          )}

          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 px-10 max-sm:flex-col">
          <input
            ref={input}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            disabled={isLoading}
            maxLength={maxCharacters}
            className="flex-1 bg-slate-800 text-white placeholder-slate-400 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 max-sm:w-full"
          />
          <div className="flex gap-2 max-sm:items-center max-sm:justify-end max-sm:w-full">
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isLoading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition cursor-pointer"
            >
              Send
            </button>
            <button
              onClick={handleClear}
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-2 text-right text-xs text-slate-400 px-10 pb-5">
          {inputText.length} / {maxCharacters}
        </div>
      </div>
    </div>
  );
}

export default App;
