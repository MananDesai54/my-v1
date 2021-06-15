const SocialIcon = ({ url, Icon }) => {
  return (
    <a href={url}>
      <Icon size={24} className="my-4" />
    </a>
  );
};

export default SocialIcon;
