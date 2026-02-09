"use client";
import { chatbotFAQs } from "../utils/chatbotData";
import React, { useState, useRef, useEffect } from "react";
import {
  MdChatBubbleOutline,
  MdClose,
  MdRestartAlt,
  MdAutoAwesome,
  MdSend,
} from "react-icons/md";

// Simple MD-like renderer for basic bold and newline
const MarkdownText = ({ text }: { text: string }) => {
  const parts = text.split("\n\n").map((line, i) => (
    <p key={i} className="mb-2 last:mb-0">
      {line.split("\n").map((subline, j) => (
        <span key={j} className="block">
          {subline.split("**").map((chunk, k) =>
            k % 2 === 1 ? (
              <strong key={k} className="font-bold text-gray-900">
                {chunk}
              </strong>
            ) : (
              // handle links [text](url) - rudimentary parsing
              chunk.split(/\[(.*?)\]\((.*?)\)/g).map((subChunk, l) => {
                if (l === 1) return null; // skip captured group 1 (text)
                if (l === 2) {
                  // captured group 2 is URL, previous was text
                  const url = subChunk;
                  const title = chunk.match(/\[(.*?)\]/)?.[1] || "Link";
                  return (
                    <a
                      key={l}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-conference-primary hover:text-conference-secondary hover:underline font-semibold transition-colors"
                    >
                      {title}
                    </a>
                  );
                }
                return subChunk;
              })
            ),
          )}
        </span>
      ))}
    </p>
  ));
  return <div className="text-sm text-gray-700 leading-relaxed">{parts}</div>;
};

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex gap-1 items-center">
    <div
      className="w-2 h-2 bg-conference-primary rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    ></div>
    <div
      className="w-2 h-2 bg-conference-primary rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    ></div>
    <div
      className="w-2 h-2 bg-conference-primary rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    ></div>
  </div>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<
    { type: "bot" | "user"; text: string }[]
  >([
    {
      type: "bot",
      text: "👋 Hi there! Welcome to ICIPETC-26 Assistant.\n\nHow can I help you today?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: (typeof chatbotFAQs)[0]) => {
    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: option.question }]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate thinking delay (randomized for realism)
    setTimeout(
      () => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { type: "bot", text: option.answer }]);
      },
      800 + Math.random() * 400,
    );
  };

  const resetChat = () => {
    setMessages([
      {
        type: "bot",
        text: "👋 Hi there! Welcome to ICIPETC-26 Assistant.\n\nHow can I help you today?",
      },
    ]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  return (
    <>
      {/* Floating Button with Pulse Effect */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        {/* Attraction Pulse - Only visible when closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-conference-primary opacity-20 animate-ping duration-[2000ms]"></span>
            <span className="absolute inset-0 rounded-full bg-conference-highlight opacity-30 animate-pulse duration-[3000ms]"></span>
          </>
        )}

        <button
          onClick={toggleChat}
          className={`relative p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 flex items-center justify-center group overflow-hidden ${
            isOpen
              ? "bg-gradient-to-br from-red-500 to-rose-600 text-white rotate-90"
              : "bg-gradient-to-br from-conference-primary via-conference-highlight to-conference-secondary text-white"
          }`}
          style={{
            boxShadow: isOpen
              ? "0 10px 40px rgba(239, 68, 68, 0.4), 0 0 20px rgba(239, 68, 68, 0.3)"
              : "0 10px 40px rgba(5, 181, 112, 0.4), 0 0 20px rgba(5, 181, 112, 0.3)",
          }}
          aria-label="Toggle Chat"
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          {isOpen ? (
            <MdClose className="text-2xl relative z-10" />
          ) : (
            <MdChatBubbleOutline className="text-2xl relative z-10 animate-[wiggle_3s_ease-in-out_infinite]" />
          )}
        </button>
      </div>

      {/* Chat Window with Glassmorphism */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] sm:w-[380px] h-[600px] max-h-[75vh] rounded-3xl z-[9999] flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right transform backdrop-blur-xl ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        }}
      >
        {/* Header with Gradient */}
        <div className="relative px-5 py-5 flex items-center justify-between shrink-0 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-conference-primary via-conference-highlight to-conference-secondary"></div>

          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-conference-highlight rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-conference-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-conference-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-md shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
              <MdAutoAwesome className="text-xl animate-[spin_10s_linear_infinite]" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight drop-shadow-md">
                ICIPETC Assistant
              </h3>
              <p className="text-white/90 text-xs flex items-center gap-1.5 font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400 border border-white/50"></span>
                </span>
                Online Now
              </p>
            </div>
          </div>
          <button
            onClick={resetChat}
            className="relative z-10 text-white/80 hover:text-white transition-all p-2.5 rounded-xl hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 active:scale-95 transform duration-200"
            title="Reset Chat"
          >
            <MdRestartAlt className="text-xl" />
          </button>
        </div>

        {/* Messages Area */}
        <div
          className="flex-1 overflow-y-auto p-5 space-y-4 relative"
          style={{
            background:
              "linear-gradient(to bottom, rgba(249, 250, 251, 0.8), rgba(243, 244, 246, 0.9))",
          }}
        >
          {/* Decorative background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full ${
                msg.type === "user" ? "justify-end" : "justify-start"
              } animate-in fade-in slide-in-from-bottom-3 duration-500`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  msg.type === "user"
                    ? "bg-gradient-to-br from-conference-primary to-conference-secondary text-white rounded-br-md shadow-lg shadow-conference-primary/20"
                    : "bg-white/90 backdrop-blur-sm border border-gray-200/50 text-gray-800 rounded-bl-md shadow-sm"
                }`}
              >
                {msg.type === "bot" ? (
                  <MarkdownText text={msg.text} />
                ) : (
                  <p className="text-sm font-medium">{msg.text}</p>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex w-full justify-start animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl rounded-bl-md px-5 py-3.5 shadow-lg">
                <TypingIndicator />
              </div>
            </div>
          )}

          {/* Quick Action Buttons */}
          {messages.length > 0 &&
            messages[messages.length - 1].type === "bot" &&
            !isTyping && (
              <div className="flex flex-wrap gap-2.5 mt-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {chatbotFAQs.map(
                  (faq: { id: string; question: string; answer: string }) => (
                    <button
                      key={faq.id}
                      onClick={() => handleOptionClick(faq)}
                      className="group relative px-4 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-conference-primary/20 text-conference-primary text-sm font-semibold rounded-xl hover:bg-gradient-to-br hover:from-conference-primary hover:to-conference-secondary hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-conference-primary/20 active:scale-95 transform overflow-hidden text-left"
                    >
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                      <span className="relative z-10 flex items-center gap-2">
                        <span className="text-lg">
                          {faq.question.includes("Important Dates") && "📅"}
                          {faq.question.includes("Registration") && "�"}
                          {faq.question.includes("Submission") && "📤"}
                          {faq.question.includes("Contact") && "�"}
                          {!faq.question.match(
                            /Dates|Registration|Submission|Contact/,
                          ) && "�"}
                        </span>
                        {faq.question}
                      </span>
                    </button>
                  ),
                )}
              </div>
            )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="relative p-3 bg-white/80 backdrop-blur-sm text-center border-t border-gray-100">
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
            Powered by ICIPETC-26
          </p>
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          10%,
          14% {
            transform: rotate(-10deg);
          }
          12%,
          16% {
            transform: rotate(10deg);
          }
          18% {
            transform: rotate(0deg);
          }
        }

        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 5px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(5, 181, 112, 0.3);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(5, 181, 112, 0.6);
        }
      `}</style>
    </>
  );
}
