import { Link } from "react-router-dom";
import styles from "./Hero.module.css"
const Hero = () => {
    return (
      <> 

          <div className= "container my-6">
            <div className={styles.heading}>
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className={`${styles.heading1} `}>Book Appointment
                    With Trusted Doctors</h1>
                   <div className={styles.heading1}>
                       <img  src="https://prescripto.vercel.app/assets/group_profiles-BCL6AVF5.png" alt=""/>
                      <p className="lead">Simply browse through our extensive list of trusted <br/> doctors, <br/>
                       schedule your appointment hassle-free.</p>
                   </div>
                  <div >
                    <Link to="./allDoctor"><button type="button" className={styles.button}>
                      <span className={styles.inner}>Book appointment</span>
                     </button></Link> 
                  </div>
              </div>
                 <div >
                 <img className={styles.image} src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png" alt=""/>
                </div>
             </div>
         </div>
      
      </>
    )
}

export default Hero;