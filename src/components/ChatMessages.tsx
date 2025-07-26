'use client';

import { useEffect, useRef } from 'react';
import { ChatMessagesProps } from '@/types/chat';

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <main className="flex-1 overflow-y-auto px-8 py-8 space-y-8 bg-gradient-to-b from-white/20 via-white/10 to-transparent min-h-0" role="log" aria-live="polite" aria-label="Chat conversation">
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-center animate-fadeIn min-h-[400px]" role="img" aria-label="Welcome screen">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl animate-float">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold gradient-text mb-3">Welcome to Chat Assistant</h3>
          <p className="text-gray-600/80 max-w-md text-lg leading-relaxed">Start a conversation by typing your message below. I'm here to help with anything you need!</p>
        </div>
      )}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
        >
          <div className={`flex items-start gap-4 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg hover-scale ${
              message.sender === 'user' 
                ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white' 
                : 'glass-card text-gray-600'
            }`}>
              {message.sender === 'user' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.66 13.66 12 12 12S9 10.66 9 9V7L3 7V9C3 11.76 5.24 14 8 14V16H16V14C18.76 14 21 11.76 21 9Z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
            </div>
            <div
              className={`message-bubble px-6 py-5 rounded-2xl shadow-lg transition-all duration-200 relative ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-tr-md user'
                  : 'glass-card text-gray-800 rounded-tl-md bot'
              } ${message.sender === 'user' ? 'message-bubble user' : 'message-bubble bot'}`}
            >
              <p className="text-base leading-relaxed whitespace-pre-wrap font-medium">{message.text || (
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}</p>
              <span
                className={`block text-sm mt-4 ${
                  message.sender === 'user' ? 'text-blue-100/80' : 'text-gray-500/80'
                }`}
              >
                {formatTime(new Date(message.timestamp))}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </main>
  );
} 