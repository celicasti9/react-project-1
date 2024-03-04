
const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/about.gif";

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      {/* <img src={imgURL} alt="the office gif" className="page-img" /> */}

      <p>

        Welcome to Student Commerce Online - Your Destination for Diverse Products!
        <br></br>
        <br></br>

        At Student Commerce Online, we celebrate diversity in all its forms.
        We are more than an online store; we are a destination where innovation,
        fashion, and technology converge to offer you a unique shopping experience.
        <br></br>


        <h1 >MISION</h1>
        <br></br>


        In Student Commerce Online, our mission is "to make the diversity of products accessible to all".
        We are guided by values such as quality, variety, and customer satisfaction, which form the backbone of every decision we make.
        <br></br>
        

        <h1>WHO ARE WE?</h1>
        <br></br>


        This company began Founded by Celiel Castillo and Naiomy Figueroa Torres, Student Commerce Online was born out of a vision
        to create more than just an e-commerce platform. Student Commerce Online envisioned a space where innovation, quality, and diversity converge.
        Offering customers a curated selection that aligns with their unique preferences.

      </p>
    </div>
  );
}

export default AboutPage;