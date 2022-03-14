const FeatureMessage = ({ title, description }) => {
  return ( 
    <div className="feature-message">
      <h2>{title}</h2>
      <p className="feature-description">{description}</p>
    </div>
  );
}
 
export default FeatureMessage;