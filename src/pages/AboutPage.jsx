

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/about.gif";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>About Us</h2>
      <p>
        Welcome to our online student commerce platform! We are dedicated to providing a seamless shopping experience for students.
      </p>
  
      <img src={imgURL} alt="the office gif" className="page-img" />
    </div>
    
  );
}

export default AboutPage;
