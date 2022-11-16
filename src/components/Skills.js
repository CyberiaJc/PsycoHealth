import meter1 from "../assets/img/depresion.webp";
import meter2 from "../assets/img/estres.webp";
import meter3 from "../assets/img/ansiedad2.webp";
import meter4 from "../assets/img/saludfisica.webp";
import meter5 from "../assets/img/terapiafamiliar2.webp";
import meter6 from "../assets/img/terapiagrupo.webp";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>¿En que podemos ayudarte?</h2>
                        <p>Como psicólogos tenemos el deber de ayudar a una gran variedad de pacientes y darles tratamiento a numerosos tipos de problemas. Algunas personas consultan a un psicólogo porque se han sentido deprimidas, enojadas o  ansiosas por largo tiempo. Otras, porque quieren ayuda con un trastorno crónico que interfiere con sus vidas o su salud física. Por su parte, otras recurren al psicólogo porque experimentan problemas a corto plazo que desean resolver como sentirse abrumados por un nuevo empleo, o están afectadas por la muerte de un familiar. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Depresión</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Estrés</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Ansiedad</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Salud física</h5>
                            </div>

                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Terapia familiar</h5>
                            </div>



                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Terapia de grupo</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
