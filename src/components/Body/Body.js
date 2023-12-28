// Body.js
import React from "react";
import './styles/Body.css'; // Assurez-vous d'ajuster le chemin du fichier CSS
import topImage from '../../assets/top-image.jpg'; // Assurez-vous d'ajuster le chemin vers votre image

const courses = [
  {
    title: "Spring Boot/Angular",
    price: "350 DT/Month",
    category: "Web development",
    image: require("../../assets/springboot-angular.jpg")
  },
  {
    title: "Flutter",
    price: "350 DT/Month",
    category: "Mobile development",
    image: require("../../assets/flutter.jpg")
  },
  {
    title: "Node JS/React",
    price: "350 DT/Month",
    category: "Backend development",
    image: require("../../assets/nodejs-react.jpg")
  },
  {
    title: "Business Intelligence",
    price: "350 DT/Month",
    category: "Data science",
    image: require("../../assets/business.jpg")
  },
  {
    title: "Artificial Intelligence",
    price: "450 DT/Month",
    category: "Artificial intelligence",
    image: require("../../assets/artificial.jpg")
  },
  {
    title: "DevOps",
    price: "550 DT/Month",
    category: "Security",
    image: require("../../assets/devops.jpg")
  },
];

const Body = () => {
  return (
    <main className="main-container">
      <div className="top-section">
        <img src={topImage} alt="Top Section" className="top-image" />
        <div className="overlay">
          <div className="overlay-background"></div>
          <textarea placeholder="Improve your skills on your own to prepare for better future " className="text-area"></textarea>
          <button className="register-button">Register Now</button>
        </div>
      </div>
      <div className="bottom-section">
        <h2>Discover our courses</h2>
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.title} className="course-item">
              <img src={course.image} alt={course.title} />
              <div>
                {course.title}
                <span>({course.price})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;
