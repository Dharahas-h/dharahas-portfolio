import "./../styles/MainPanel/about-panel.css";

const About = () => {
  return (
    <div className="about-container border-padding">
      <div className="nav-panel-header h1">About me</div>
      <div className="text-content">
        <p>
          Hi, I'm Dharahas — a Software Engineer who enjoys squashing bugs
          almost as much as squashing deadlines. I'm passionate about solving
          real-world problems with clean code, clever architecture, and just
          enough caffeine.
        </p>
        <p>
          I love solving real-world problems with clean, scalable code. Whether
          it’s building full-stack features, improving developer tooling, or
          automating tests that catch bugs before QA does — I’m all in.
        </p>
        <p>
          I’ve worked across diverse teams, tech stacks, and problem domains —
          from logistics platforms to internal frameworks and data ingestion
          pipelines. I enjoy working on systems that quietly power big impact,
          and I’m always up for learning something new (especially if it
          involves breaking things first).
        </p>
        <p>
          When I’m not coding, I’m probably reading docs I didn’t need or
          convincing myself not to deploy on a Friday.
        </p>
      </div>
      <div className="about-testimonials">
        <div className="h3">
          <span>Testimonials</span>
        </div>
        <div className="about-testimonial-container">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="add-testimonial text-content">Add Testimonial</div>
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <li className="testimonial-card-item">
      <div className="testimonial-card-container">
        <img src={"/avatars/1.svg"} className="testimonial-card-image" />
        <h4 className="no-margin h3 testimonial-header">Dharahas</h4>
        <p className="no-margin text-content testimonial-content">
          Supported the evaluation of a health-focused chatbot, analyzing
          conversational flows, system performance, and user experience to guide
          technical enhance
        </p>
      </div>
    </li>
  );
};

export default About;
