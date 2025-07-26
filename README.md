# 🤖 Chat Assistant - Beautiful AI Chat Interface

A modern, beautiful AI-powered chat application built with Next.js 15, featuring stunning glass morphism design, smooth animations, and real-time streaming responses.

## ✨ Features

- 🎨 **Beautiful Glass Morphism UI** - Modern design with backdrop blur effects
- 🔄 **Real-time Streaming** - Live AI responses with typing indicators
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - Full keyboard navigation and screen reader support
- 🎭 **Smooth Animations** - Elegant micro-interactions and transitions
- 🌙 **Dark Mode Ready** - Automatic dark/light theme support
- ⚡ **Performance Optimized** - Fast loading and smooth scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd compose-llm
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your AI configuration:
   ```env
   AI_MODEL_URL=your_ai_model_url_here
   AI_API_KEY=your_api_key_here
   AI_MODEL_NAME=your_model_name_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/chat/          # API route for AI chat
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main chat page
├── components/
│   ├── ChatHeader.tsx     # Chat header with status
│   ├── ChatInput.tsx      # Message input component
│   └── ChatMessages.tsx   # Messages display area
└── types/
    └── chat.ts            # TypeScript type definitions
```

## 🎨 Design System

The application uses a carefully crafted design system featuring:

- **Glass Morphism Effects** - Translucent backgrounds with backdrop blur
- **Gradient Themes** - Beautiful color gradients throughout the UI
- **Smooth Animations** - Custom CSS animations for enhanced UX
- **Responsive Typography** - Adaptive text sizing across devices
- **Accessible Colors** - WCAG compliant color contrast ratios

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AI_MODEL_URL` | Base URL for your AI model API | ✅ |
| `AI_API_KEY` | API key for authentication | ✅ |
| `AI_MODEL_NAME` | Name of the AI model to use | ✅ |

### Customization

You can customize the design by modifying:
- `src/app/globals.css` - CSS variables and animations
- `tailwind.config.js` - Tailwind theme configuration
- Component styles - Individual component styling

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Geist Font](https://vercel.com/font) - Modern typography
- [OpenAI](https://openai.com/) - AI API integration
