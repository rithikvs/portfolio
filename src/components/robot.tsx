import React, { useState, useEffect, useRef } from "react";

const RobotChatbot: React.FC = () => {
  // Whether the chatbot panel is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // All messages in the chat
  const [messages, setMessages] = useState<
    { id: number; sender: "bot" | "user"; text: string }[]
  >([
    {
      id: 1,
      sender: "bot",
      text: "Hi 👋 I’m Rithik’s AI assistant 🤖. Ask me about my projects, skills, or how to contact me."
    }
  ]);

  // Current user input text
  const [userInput, setUserInput] = useState("");

  // Typing indicator for bot
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Toggle chat window open/close
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  // Helper: generate bot reply based on user message
  const getBotReply = (input: string) => {
    const text = input.toLowerCase().trim();

    // Simple keyword-based responses
    if (text.includes("project") || text.includes("work")) {
      return (
        "I’m glad you asked about projects! 🚀\n\n" +
        "- Rithik has built multiple web apps and games using React, JavaScript, and modern tools.\n" +
        "- You can explore them in the Projects section of this portfolio.\n\n" +
        "Ask me about a specific project or tech stack if you’d like!"
      );
    }

    if (text.includes("skill") || text.includes("stack") || text.includes("tech")) {
      return (
        "Rithik’s core skills include 💡\n\n" +
        "- Frontend: React, JavaScript, HTML, CSS\n" +
        "- Styling: Tailwind CSS / modern UI libraries\n" +
        "- Other: Git, responsive design, basic backend concepts\n\n" +
        "You can scroll to the Skills section for a full overview."
      );
    }

    if (text.includes("game")) {
      return (
        "Games? 🎮 Nice choice!\n\n" +
        "Rithik enjoys building small interactive games using JavaScript/React.\n" +
        "Check the Projects/Games section to try some live demos."
      );
    }

    if (
      text.includes("education") ||
      text.includes("college") ||
      text.includes("study") ||
      text.includes("degree")
    ) {
      return (
        "Here’s a quick look at Rithik’s education 🎓\n\n" +
        "- Pursuing a degree in a tech-related field (likely Computer Science / IT).\n" +
        "- Actively building projects to strengthen practical skills.\n\n" +
        "For more details, check the Education section of the portfolio."
      );
    }

    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("reach") ||
      text.includes("hire")
    ) {
      return (
        "You can contact Rithik 📬\n\n" +
        "- Via the Contact section form on this site\n" +
        "- Or by email / social links provided there (GitHub, LinkedIn, etc.)\n\n" +
        "Feel free to reach out for collaborations, internships, or freelance work!"
      );
    }

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey") ||
      text.includes("yo")
    ) {
      return (
        "Hello there! 👋\n\n" +
        "I’m Rithik’s AI assistant 🤖.\n" +
        "You can ask me about:\n" +
        "- Projects\n- Skills\n- Games\n- Education\n- Contact details"
      );
    }

    // Fallback generic answer
    return (
      "That’s an interesting question! 🤔\n\n" +
      "I’m currently best at answering things about:\n" +
      "- Rithik’s projects\n- Skills & technologies\n- Games\n- Education\n- Contact details\n\n" +
      "Try asking: “What skills does Rithik have?” or “How can I contact Rithik?”"
    );
  };

  // Handle sending a message
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = userInput.trim();
    if (!trimmed) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      sender: "user" as const,
      text: trimmed
    };

    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");

    // Simulate bot thinking / typing
    setIsTyping(true);

    // Create bot reply with small delay to mimic typing
    setTimeout(() => {
      const botReplyText = getBotReply(trimmed);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot" as const,
        text: botReplyText
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800); // 0.8s delay for nicer UX
  };

  return (
    <>
      {/* Floating Robot Button */}
      <button
        className="robot-chatbot-toggle"
        onClick={toggleChat}
        aria-label="Open Rithik's AI assistant"
      >
        <div className="robot-head">
          <div className="robot-eyes">
            <span className="eye left-eye" />
            <span className="eye right-eye" />
          </div>
          <div className="robot-antenna" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="robot-chatbot-window">
          {/* Header */}
          <div className="robot-chatbot-header">
            <div className="robot-header-info">
              <span className="robot-header-title">Rithik’s AI Assistant</span>
              <span className="robot-header-status">Online • Friendly Robot 🤖</span>
            </div>
            <button
              className="robot-close-button"
              onClick={toggleChat}
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="robot-chatbot-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`robot-message-row ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.sender === "bot" && (
                  <div className="robot-avatar">
                    <div className="robot-avatar-face" />
                  </div>
                )}

                <div className={`robot-message-bubble ${msg.sender}`}>
                  {msg.text.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="robot-message-row bot">
                <div className="robot-avatar">
                  <div className="robot-avatar-face" />
                </div>
                <div className="robot-message-bubble bot typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form className="robot-chatbot-input-area" onSubmit={handleSend}>
            <input
              type="text"
              className="robot-chatbot-input"
              placeholder="Ask about projects, skills, games, education, or contact..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit" className="robot-send-button">
              ▶
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default RobotChatbot;