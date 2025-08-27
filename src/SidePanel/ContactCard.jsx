const ContactCard = ({ imageSrc, text }) => {
  return (
    <div className="contact-card-container">
      <IconContainer src={imageSrc} />
      <DetailContainer text={text} />
    </div>
  );
};

const IconContainer = ({ src }) => {
  return (
    <div className="icon-container">
      <img src={src} />
    </div>
  );
};

const DetailContainer = ({ text }) => {
  return <div className="detail-container h4">{text}</div>;
};

export default ContactCard;
