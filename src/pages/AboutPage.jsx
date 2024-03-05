
// const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/about.gif";

function AboutPage() {
  return (
    <div>
      <h1 className="about-header">About Us</h1>
      {/* <img src={imgURL} alt="the office gif" className="page-img" /> */}

      <p className="about-body">
      
        Welcome to Student Commerce Online - The platform to scale your products!
        <br></br>
        <br></br>

        At Student Commerce Online, we celebrate diversity in all its forms.
        We are more than an online platform; we are a destination where innovation,
        fashion, and technology converge to offer you a unique shopping experience.
        <br></br>


        <h1 className="about-header">WHO WE ARE</h1>
        <br></br>


        This project was developed by Celiel Castillo and Naiomy Figueroa Torres, Student Commerce Online was born out of a vision
        to create more than just an e-commerce platform. Student Commerce Online envisioned a space where innovation, quality, and diversity converge.
        Offering customers a curated selection that aligns with their unique preferences.

      </p>
    </div>
  );
}

export default AboutPage;