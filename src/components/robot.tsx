import React, { useState, useEffect, useRef } from "react";

const RobotChatbot: React.FC = () => {
  // Animation state for robot appearance
  const [showRobot, setShowRobot] = useState(false);
  // Only run the animation once on first mount
  useEffect(() => {
    // Show robot after short delay
    const timer = setTimeout(() => setShowRobot(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Whether the chatbot panel is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // All messages in the chat
  type ExtraAction = { type: 'link'; href: string; label: string; download?: boolean };
  type Message = {
    id: number;
    sender: "bot" | "user";
    text: string;
    sectionId?: string;
    buttonText?: string;
    extraActions?: ExtraAction[];
  };
  const [messages, setMessages] = useState<Message[]>([
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

    // Helper to return content and button
    const withButton = (content: string, sectionId: string, buttonText: string) => {
      return { content, sectionId, buttonText };
    };

    // Projects
    if (text.includes("project") || text.includes("work")) {
      return withButton(
        [
          'Projects:',
          '',
          '• E-Commerce Full Stack Website: React, Node.js, MongoDB.',
          '• Study Hub: Collaborative study platform.',
          '• Air Writing System: Write in air using hand gestures.',
          '• Attendance Management: React, Node.js, MongoDB.',
          '• VoiceBridge: AI-powered sign recognition.',
        ].join('\n'),
        "projects",
        "See Projects"
      );
    }

    // Skills
    if (text.includes("skill") || text.includes("stack") || text.includes("tech")) {
      return withButton(
        [
          'Skills:',
          '',
          '• Programming: C, Java, Python',
          '• Libraries: React.js',
          '• Frameworks: Node.js, Express.js',
          '• Databases: MySQL, MongoDB',
          '• Soft Skills: Teamwork, Communication, Problem Solving, Adaptability, Time Management, Leadership',
        ].join('\n'),
        "skills",
        "See Skills"
      );
    }

    // Games
    if (text.includes("game")) {
      return {
        content: [
          'Games:',
          '',
          '• Math Game: Test your math skills interactively.',
          '• Memory Game: Challenge your memory with a fun card game.',
          ' ',
          'Click the Play Games button on the top right to try them!'
        ].join('\n'),
        sectionId: undefined,
        buttonText: undefined
      };
    }

    // Education
    if (
      text.includes("education") ||
      text.includes("college") ||
      text.includes("study") ||
      text.includes("degree")
    ) {
      return withButton(
        [
          'Education:',
          '',
          '• KONGU ENGINEERING COLLEGE:',
          '  B.Tech in IT (2023-2027), CGPA: 7.81 (till 4th sem)',
          '• BHARANI VIDHYALAYA SR SEC SCHOOL (CBSE):',
          '  12th (2022-2023), 70.4%',
          '  10th (2021-2022), 80.1%',
        ].join('\n'),
        "education",
        "See Education"
      );
    }

    // Contact & Actions
    if (
      text.includes("email") && !text.includes("contact") && !text.includes("reach") && !text.includes("hire") && !text.includes("download") && !text.includes("call")
    ) {
      return {
        content: [
          'Email',
          '',
          'Drop me an email anytime',
          '',
          'rithikvs08@gmail.com',
        ].join('\n'),
        extraActions: [
          { type: 'link' as const, href: 'mailto:rithikvs08@gmail.com', label: 'Send Email' },
        ]
      };
    }
    if (
      text.includes("contact") ||
      text.includes("reach") ||
      text.includes("hire") ||
      text.includes("download") ||
      text.includes("call")
    ) {
      return {
        content: [
          'Contact & Actions:',
          '',
          '• Use the Contact section form on this site',
          '• Email: rithikvs08@gmail.com',
          '• GitHub: github.com/rithikvs',
          '• LinkedIn: linkedin.com/in/rithikvs',
          '',
          'You can also:',
        ].join('\n'),
        sectionId: "contact",
        buttonText: "See Contact",
        extraActions: [
          { type: 'link' as const, href: '/RITHIK V S - RESUME.pdf', label: 'Download Resume', download: true },
          { type: 'link' as const, href: '/rithik.jpg', label: 'Download Photo', download: true },
          { type: 'link' as const, href: 'tel:+919080123456', label: 'Call Rithik' },
          { type: 'link' as const, href: 'mailto:rithikvs08@gmail.com', label: 'Mail Rithik' },
        ]
      };
    }

    // Greeting
    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey") ||
      text.includes("yo")
    ) {
      return {
        content: [
          'Hello there! I’m Rithik’s AI assistant.',
          '',
          'You can ask me about:',
          '• Projects',
          '• Skills',
          '• Games',
          '• Education',
          '• Contact details',
        ].join('\n'),
        sectionId: undefined,
        buttonText: undefined
      };
    }

    // Fallback generic answer
    return {
      content: "That’s an interesting question! I’m best at answering things about Rithik’s projects, skills, games, education, or contact details. Try asking: 'What skills does Rithik have?' or 'How can I contact Rithik?'",
      sectionId: undefined,
      buttonText: undefined
    };
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
      const botReply = getBotReply(trimmed);
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: typeof botReply === 'string' ? botReply : botReply.content,
        sectionId: typeof botReply === 'object' ? botReply.sectionId : undefined,
        buttonText: typeof botReply === 'object' ? botReply.buttonText : undefined,
        extraActions: typeof botReply === 'object' && 'extraActions' in botReply ? botReply.extraActions : undefined
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
        <div className={`robot-fullbody${showRobot ? ' robot-appear-effect' : ''}`}> 
          <div className="robot-antenna" />
          <div className="robot-head">
            <div className="robot-eyes">
              <span className="eye left-eye" />
              <span className="eye right-eye" />
            </div>
          </div>
          <div className="robot-neck" />
          <div className="robot-body">
            <div className="robot-arm left-arm" />
            <div className="robot-torso" />
            <div className="robot-arm right-arm" />
          </div>
          <div className="robot-legs">
            <div className="robot-leg left-leg" />
            <div className="robot-leg right-leg" />
          </div>
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
                  {msg.text.split("\n").map((line, idx) => <p key={idx}>{line}</p>)}
                  {msg.sender === 'bot' && msg.sectionId && msg.buttonText && (
                    <button
                      className="robot-skill-btn"
                      style={{ marginTop: 8, minWidth: 120, textAlign: 'center' }}
                      onClick={() => {
                        if (msg.sectionId) {
                          const el = document.getElementById(msg.sectionId);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {msg.buttonText}
                    </button>
                  )}
                  {/* Extra actions for contact */}
                  {msg.sender === 'bot' && Array.isArray(msg.extraActions) && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                      {msg.extraActions.map((action, i) =>
                        action.type === 'link' ? (
                          action.href.startsWith('mailto:') ? (
                            <button
                              key={i}
                              className="robot-skill-btn"
                              style={{ minWidth: 120, textAlign: 'center' }}
                              onClick={() => {
                                window.location.href = action.href;
                              }}
                            >
                              {action.label}
                            </button>
                          ) : (
                            <a
                              key={i}
                              href={action.href}
                              className="robot-skill-btn"
                              style={{ minWidth: 120, textAlign: 'center' }}
                              {...(action.download ? { download: true } : {})}
                              target={
                                action.href.startsWith('http')
                                  ? '_blank'
                                  : undefined
                              }
                              rel={
                                action.href.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                            >
                              {action.label}
                            </a>
                          )
                        ) : null
                      )}
                    </div>
                  )}
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