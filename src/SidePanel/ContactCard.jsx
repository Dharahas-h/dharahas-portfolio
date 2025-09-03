const ContactCard = ({ imageSrc, text, link }) => {
  return (
    <div className="contact-card-container">
      <IconContainer src={imageSrc} />
      <DetailContainer text={text} link={link} />
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

const DetailContainer = ({ text, link }) => {
  return link ? (
    <a className="detail-container h4" href={link} target="_blank">
      {text}
    </a>
  ) : (
    <div className="detail-container h4">{text}</div>
  );
};

export default ContactCard;
