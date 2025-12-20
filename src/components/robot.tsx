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

    // Projects
    if (text.includes("project") || text.includes("work")) {
      return {
        type: "projects",
        content: (
          <>
            <b>Projects 🚀</b>
            <ul style={{margin: '8px 0'}}>
              <li><b>E-Commerce Full Stack Website:</b> React, Node.js, MongoDB. <a href="https://github.com/rithikvs/e-commerse-fullstack" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><b>Study Hub:</b> Collaborative study platform. <a href="https://github.com/rithikvs/study" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><b>Air Writing System:</b> Write in air using hand gestures. <a href="https://github.com/rithikvs/finger-writing-notebook" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><b>Attendance Management:</b> React, Node.js, MongoDB. <a href="https://github.com/rithikvs/student_attendence" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><b>VoiceBridge:</b> AI-powered sign recognition. <a href="https://github.com/rithikvs/VoiceBridge" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
            <button className="robot-skill-btn" onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>See Projects</button>
          </>
        )
      };
    }

    // Skills
    if (text.includes("skill") || text.includes("stack") || text.includes("tech")) {
      return {
        type: "skills",
        content: (
          <>
            <b>Skills 💡</b>
            <ul style={{margin: '8px 0'}}>
              <li><b>Programming:</b> C, Java, Python</li>
              <li><b>Libraries:</b> React.js</li>
              <li><b>Frameworks:</b> Node.js, Express.js</li>
              <li><b>Databases:</b> MySQL, MongoDB</li>
              <li><b>Soft Skills:</b> Teamwork, Communication, Problem Solving, Adaptability, Time Management, Leadership</li>
            </ul>
            <button className="robot-skill-btn" onClick={() => {
              const el = document.getElementById('skills');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>See Skills</button>
          </>
        )
      };
    }

    // Games
    if (text.includes("game")) {
      return {
        type: "games",
        content: (
          <>
            <b>Games 🎮</b>
            <ul style={{margin: '8px 0'}}>
              <li><b>Math Game:</b> Test your math skills interactively.</li>
              <li><b>Memory Game:</b> Challenge your memory with a fun card game.</li>
            </ul>
            <span>Click the Play Games button on the top right to try them!</span>
          </>
        )
      };
    }

    // Education
    if (
      text.includes("education") ||
      text.includes("college") ||
      text.includes("study") ||
      text.includes("degree")
    ) {
      return {
        type: "education",
        content: (
          <>
            <b>Education 🎓</b>
            <ul style={{margin: '8px 0'}}>
              <li><b>KONGU ENGINEERING COLLEGE:</b> B.Tech in IT (2023-2027), CGPA: 7.81 (till 4th sem)</li>
              <li><b>BHARANI VIDHYALAYA SR SEC SCHOOL (CBSE):</b> 12th (2022-2023), 70.4%</li>
              <li><b>BHARANI VIDHYALAYA SR SEC SCHOOL (CBSE):</b> 10th (2021-2022), 80.1%</li>
            </ul>
            <button className="robot-skill-btn" onClick={() => {
              const el = document.getElementById('education');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>See Education</button>
          </>
        )
      };
    }

    // Contact & Actions
    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("reach") ||
      text.includes("hire") ||
      text.includes("download") ||
      text.includes("call")
    ) {
      return {
        type: "contact",
        content: (
          <>
            <b>Contact & Actions 📬</b>
            <ul style={{margin: '8px 0'}}>
              <li>Use the Contact section form on this site</li>
              <li>Email: <a href="mailto:rithikvs2005@gmail.com">rithikvs2005@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/rithikvs" target="_blank" rel="noreferrer">github.com/rithikvs</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/rithikvs" target="_blank" rel="noreferrer">linkedin.com/in/rithikvs</a></li>
            </ul>
            <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:8}}>
              <a
                href="/rithik.jpg"
                download="rithik-profile.jpg"
                className="robot-skill-btn"
                style={{minWidth:120, textAlign:'center'}}>
                Download Image
              </a>
              <a
                href="/RITHIK V S - RESUME.pdf"
                download
                className="robot-skill-btn"
                style={{minWidth:120, textAlign:'center'}}>
                Download Resume
              </a>
              <a
                href="tel:+919080123456"
                className="robot-skill-btn"
                style={{minWidth:120, textAlign:'center'}}>
                Call Rithik
              </a>
              <a
                href="mailto:rithikvs2005@gmail.com"
                className="robot-skill-btn"
                style={{minWidth:120, textAlign:'center'}}>
                Mail Rithik
              </a>
            </div>
          </>
        )
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
        type: "greeting",
        content: (
          <>
            Hello there! 👋<br />
            I’m Rithik’s AI assistant 🤖.<br />
            You can ask me about:<br />
            - Projects<br />- Skills<br />- Games<br />- Education<br />- Contact details
          </>
        )
      };
    }

    // Fallback generic answer
    return {
      type: "fallback",
      content: (
        <>
          That’s an interesting question! 🤔<br />
          I’m currently best at answering things about:<br />
          - Rithik’s projects<br />- Skills & technologies<br />- Games<br />- Education<br />- Contact details<br /><br />
          Try asking: “What skills does Rithik have?” or “How can I contact Rithik?”
        </>
      )
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
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot" as const,
        text: botReply
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
        <div className="robot-fullbody">
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
                  {typeof msg.text === 'string' ? (
                    msg.text.split("\n").map((line, idx) => <p key={idx}>{line}</p>)
                  ) : (
                    msg.text.content
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