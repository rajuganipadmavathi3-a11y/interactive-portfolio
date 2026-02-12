require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const lowerMsg = message.toLowerCase();
    let reply = "";

    console.log("Received:", message);

    // 1️⃣ THIS PROJECT (Interactive Portfolio)
    if (
      lowerMsg.includes("this project") ||
      lowerMsg.includes("about this project")
    ) {
      reply =
        "This project is my Interactive AI Portfolio Website. It is built using React for the frontend and Node.js with Express for the backend. The chatbot system is designed to simulate an AI assistant that introduces my skills, projects, and experience in an interactive way.";
    }

    // 2️⃣ CURRENT PROJECT (Risk Dashboard)
    else if (
      lowerMsg.includes("current project") ||
      lowerMsg.includes("ongoing project")
    ) {
      reply =
        "Currently, I am working on a Quantitative Risk Dashboard project where I analyze Sharpe ratio, portfolio diversification, drawdowns, and regime-based risk attribution. The goal is to build an interactive financial analytics dashboard.";
    }

    // 3️⃣ GENERAL PROJECTS
    else if (
      lowerMsg.includes("projects") ||
      lowerMsg.includes("project")
    ) {
      reply =
        "I have worked on AI-based anomaly detection systems, financial risk dashboards, and interactive full-stack web applications. I focus on building practical and scalable AI solutions.";
    }

    // 4️⃣ SKILLS
    else if (
      lowerMsg.includes("skills") ||
      lowerMsg.includes("technologies")
    ) {
      reply =
        "My technical skills include Python, Machine Learning, Data Analysis, SQL, and MERN Stack development. I also enjoy building AI-powered web applications.";
    }

    // 5️⃣ EXPERIENCE
    else if (
      lowerMsg.includes("experience") ||
      lowerMsg.includes("intern")
    ) {
      reply =
        "I have worked as an AI Intern where I developed machine learning models and contributed to real-world AI-driven solutions.";
    }

    // 6️⃣ INTRODUCTION
    else if (
      lowerMsg.includes("who are you") ||
      lowerMsg.includes("about yourself") ||
      lowerMsg.includes("introduce yourself")
    ) {
      reply =
        "Hi 👋 I'm Rajugani Padmavathi, a final year B.Tech student in Artificial Intelligence & Data Science. I am passionate about AI, Machine Learning, and Full Stack Development, and I enjoy building intelligent and interactive applications.";
    }

    // 7️⃣ DEFAULT RESPONSE
    else {
      reply =
        "Thank you for your question! You can ask me about my skills, projects, experience, or this portfolio website.";
    }

    res.json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});