import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/terapia1.jpg";
import projImg2 from "../assets/img/terapiagrupo2.jpg";
import projImg3 from "../assets/img/psicologia-cronologia.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Terapia de grupo",
      description: "Celebrar cada momento",
      imgUrl: projImg1,
    },
    {
      title: "Terapia de la risa",
      description: "Comparte y diviertete",
      imgUrl: projImg2,
    },
    {
      title: "Gestiona tus emociones",
      description: "¡Esta bien sentir!",
      imgUrl: projImg3,
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Encuentros, sesiones y mucho más</h2>
                <p>En términos generales, es recomendable acudir a terapia psicológica cuando existe un problema que supera las fuerzas que tienes en determinado momento para solucionarlo, que te impide vivir y experimentar bienestar y que por lo tanto te ocasiona malestar y sufrimiento.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Galeria</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Rupturas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>




                    <Tab.Pane eventKey="second">
                      <p>
Mi intención NO es hacer sentir juzgado a quién en estos momentos siente odio por su ex. Con esto te invito a que revises:
<br></br>
<br></br>
1-La manera en la que aún sigues enganchadx a esa ex pareja (mediante el odio).
<br></br>
2- ¿Qué significado tiene la presencia de esa persona en tu vida? O ¿Qué ganancia obtienes al tener esa persona en tu vida?
<br></br>
3- Tus creencias/concepto sobre tí mismx, el amor y la pareja.
<br></br>
4- y Por supuesto, asistir a psicoterapia, detrás del odio reiterado hacia una pareja, puede haber una historia de negligencia o abusos en la infancia, y otras cosas más.
<br></br>
<br></br>
Cuéntame, ¿Qué te pareció este post?🔥
                      </p>
                    </Tab.Pane>



                    <Tab.Pane eventKey="third">
                      <h3>   ¿Qué es una crisis? </h3>
                      <br></br>
              
                      <p>
                      Es un estado temporal de agitación, trastorno o
                      desorganización, en el que nos vemos desbordados a
                      la hora de afrontar una situación o problema.

                      <br></br>
                      <br></br>
                      Se produce cuando percibimos que los
                      métodos que utilizamos usualmente para
                      afrontar problemas no son suficientes, por
                      lo que experimentamos inadaptación e
                      insatisfacción.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
