import ContactCard from "./SidePanel/ContactCard";
import InfoCard from "./SidePanel/InfoCard";
import ProfileInfoCard from "./SidePanel/ProfileInfoCard";
import "./styles/side-panel.css";
import { basePath } from "./constants";

const SidePanel = () => {
  return (
    <div className="side-panel-container">
      <ProfileInfoCard />
      <hr className="line-break" />
      <div className="contact-cards-container">
        <ContactCard
          imageSrc={`${basePath}/icons/phone-solid-full.svg`}
          text={"9398455869"}
        />
        <ContactCard
          imageSrc={`${basePath}/icons/envelope-solid-full.svg`}
          text={"hdharahas@gmail.com"}
        />
        <ContactCard
          imageSrc={`${basePath}/icons/linkedin-brands-solid-full.svg`}
          text={"linkdin"}
        />
      </div>
      <hr className="line-break" />
      <div className="contact-cards-container">
        <InfoCard />
      </div>
    </div>
  );
};

export default SidePanel;
