import React from "react";
import '../../CssFiles/BrokerProfile.css'

const BrokerProfile = () => {
  const broker = {
    name: "John Smith",
    experience: "10 years",
    salesVolume: "$100 million",
    commissionRate: "5%",
    photo: "https://via.placeholder.com/150",
    phone: "(123) 456-7890",
    email: "john.smith@example.com",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/"
  };

  const { name, experience, salesVolume, commissionRate, photo, phone, email, twitter, facebook, linkedin, instagram } = broker;

  return (
    <div className="broker-profile-container">
      <div className="broker-profile-top-left">
        <img src={photo} alt={name} className="broker-profile-photo" />
      </div>
      <div className="broker-profile-top-right">
        <h2 className="broker-profile-name">{name}</h2>
        <div className="broker-profile-contact-info">
          <p className="broker-profile-phone">{phone}</p>
          <p className="broker-profile-email">{email}</p>
          <ul className="broker-profile-social-links">
            <li><a href={twitter}><i className="fab fa-twitter"></i></a></li>
            <li><a href={facebook}><i className="fab fa-facebook"></i></a></li>
            <li><a href={linkedin}><i className="fab fa-linkedin"></i></a></li>
            <li><a href={instagram}><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="broker-profile-bottom">
        <h3 className="broker-profile-experience-heading">Experience</h3>
        <p className="broker-profile-experience">{experience}</p>
        <h3 className="broker-profile-details-heading">Details</h3>
        <p className="broker-profile-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sodales lorem non efficitur. Sed commodo, nulla vitae hendrerit tristique, nisl turpis gravida velit, id bibendum ipsum sapien in sapien. Morbi porttitor facilisis enim quis bibendum. Ut dictum libero vel mi posuere fringilla. Vivamus blandit, mauris ac elementum elementum, tellus massa pellentesque nulla, vel bibendum ex sapien ut velit. Integer eget erat vitae enim bibendum suscipit. Duis ac lacinia nisi, at sagittis quam. Duis auctor lectus quis mauris ultrices dignissim. Etiam maximus ac turpis a gravida. Etiam suscipit semper elit, quis pellentesque velit efficitur in. Vestibulum interdum dui ac ipsum vestibulum, at bibendum metus eleifend.</p>
      </div>
    </div>
  );
};

export default BrokerProfile;
