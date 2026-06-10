import "../Pagescss/project.css";
export default function Projects() {
  return (
<section className="projects">

  <h2 className="projects-title">Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>🏠 Wanderlust</h3>

      <p>
  Developed a full-stack rental marketplace inspired by modern booking platforms, enabling users to discover, list, and manage properties through a seamless and responsive user experience.
</p>

      <div className="tech-stack">
        <span>MongoDB</span>
        <span>Express</span>
        <span>React</span>
        <span>Node</span>
      </div>
    </div>

    <div className="project-card">
      <h3>🤖 AI Chatbot</h3>

      <p>
  Built an AI-powered Medical chatbot leveraging Retrieval-Augmented Generation (RAG) to deliver context-aware and accurate responses by combining large language models with custom knowledge retrieval.
</p>

      <div className="tech-stack">
        <span>Python</span>
        <span>OpenAI GPT</span>
        <span>Langchain</span>
        <span>Pinecone</span>
        <span>Flask</span>
      </div>
    </div>

    <div className="project-card">
      <h3>💳 PayRemind</h3>

     <p>
  Designed a smart payment management platform that helps users track recurring expenses, monitor upcoming due dates, and stay organized through timely reminders and intuitive dashboards.
</p>

      <div className="tech-stack">
        <span>MongoDB</span>
        <span>Express</span>
        <span>React</span>
        <span>Node</span>
      </div>
    </div>

  </div>

</section>
  )}