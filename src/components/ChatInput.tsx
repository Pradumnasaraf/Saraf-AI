'use client';

import { useState, KeyboardEvent } from 'react';
import { ChatInputProps } from '@/types/chat';

export default function ChatInput({ onSendMessage, isLoading = false }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <footer className="glass-card border-none border-t border-white/10 px-8 py-6" role="contentinfo">
      <form className="flex items-end gap-4" onSubmit={e => { e.preventDefault(); handleSend(); }} role="form" aria-label="Send message form">
        <div className="flex-1 relative">
          <label htmlFor="message-input" className="sr-only">Type your message</label>
          <div className="relative">
            <input
              id="message-input"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isLoading ? "AI is thinking..." : "Type your message..."}
              disabled={isLoading}
              aria-describedby={isLoading ? "loading-indicator" : undefined}
              className="w-full px-6 py-5 pr-14 border-0 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent glass-card text-gray-900 placeholder-gray-500/70 text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
            />
            {isLoading && (
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2" id="loading-indicator" aria-label="AI is thinking">
                <div className="typing-indicator">
                  <div className="typing-dot bg-blue-500"></div>
                  <div className="typing-dot bg-blue-500"></div>
                  <div className="typing-dot bg-blue-500"></div>
                </div>
              </div>
            )}
            {!isLoading && message.trim() && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2" aria-hidden="true">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
          <div className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 transition-opacity duration-200 focus-within:opacity-100" aria-hidden="true"></div>
        </div>
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          aria-label={isLoading ? "Sending message..." : "Send message"}
          className="p-5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 hover-lift"
        >
          {isLoading ? (
            <div className="animate-spin w-6 h-6 border-2 border-white/30 border-t-white rounded-full"></div>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
        </button>
      </form>
    </footer>
  );
} 