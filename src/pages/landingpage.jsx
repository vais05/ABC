import React, { useState } from 'react';
import 'css/style.css';
import 'js/script.js';

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';
const CategoryCard = ({ id, onClick }) => (
  <li>
    <div className="category-card" id={id} onClick={() => onClick(id)}>
      <div className="card-icon">
        <ion-icon name="apps-outline"></ion-icon>
      </div>
      <div>
        <h3 className="h3 card-title">
          <a href="#">{id}</a>
        </h3>
      </div>
    </div>
  </li>
);

const PopupContainer = ({ content }) => (
  <div id="popupContainer" className="popup-container">
    <div className="popup-content" id="popupContent">
      {content}
    </div>
  </div>
);

const LandingPage = () => {
  const [popupContent, setPopupContent] = useState('');

  const showPopup = (category) => {
    let content = '';
    switch (category) {
        case 'abacus':
            content2 = '<h2>Abacus</h2><p>The Abacus is an ancient mathematical instrument used for calculation. The Abacus is one of the world’s first real calculating tools – and early forms of an Abacus are nearly 2500 years old. Abacus is a scientifically developed & proven program that improves the child’s life time skills; this program will be of 10 levels comprising Addition, Subtraction, Multiplication, Division, Decimals, LCM & GCD, Percentages, Square Roots, Cube Roots and –ve Numbers. Abacus can also be used for solving most of the scientific calculations.</p><p>Benefits of Abacus & Mental Arithmetic Program: Concentration, Memory Power, Observation, Judgment, Analyzing Skills, Self-Confidence, Imaginative & Creative Thinking, Logical & Reasoning Ability, Visualization & Perseverance.</p>';
      
              break;
            case 'vedic-math':
           content2 = '<h2>Vedic Math</h2><p>The origin of Vedic Maths is from Atharva Veda of Vedas. (The four Vedas are namely Rig Veda, Yajur Veda, Sama Veda, and Atharva Veda.) Vedic Mathematics forms part of Jyotish Shastra, which is one of the six parts of Vedangas.</p><p>Vedic Mathematics is the name given to the ancient system of Indian Mathematics, which was rediscovere/d from the Vedas between 1911 and 1918 by Sri Bharati Krsna Tirthaji (1884-1960). According to his research, all of mathematics is based on sixteen Sutras, or word-formulae. For example, ‘Vertically and crosswise’ is one of these Sutras. These formulae describe the way the mind naturally works and are therefore a great help in directing the student to the appropriate method of solution.</p><p>The simplicity of Vedic Mathematics means that calculations can be carried out mentally (though the methods can also be written down). There are many advantages in using a flexible, mental system.</p><p>Vedic Maths program is aimed at developing the mental arithmetic ability of children. This program helps children lose the fear of mathematics and gain confidence in the subject. It helps the children in their academics and score better marks in all the subjects due to improved self-confidence.</p>';
      
              break;
            case 'handwriting':
            content2 = '<h2>Handwriting</h2><p>This is some information about Handwriting.</p><p>Cursive writing is a style of handwriting in which letters are joined in a flowing manner. It is an attempt to write more quickly with style. Cursive handwriting acts as a connector between letters that form a word, aiding the child in seeing the letters as part of a whole word. Through cursive writing, a child can distinguish between each word more effectively. In cursive courses, all letters are beautifully defined and practiced to develop muscle memory. By the time a child holds a pencil, they can write smoothly and with much better fluency compared to print.</p><p>"An impressive handwriting reflects a strong personality."</p>';
      
              break;
            case 'ekids':
           content2 = '<h2>E-Kids</h2><p>This is some information about E-Kids.</p><p>Introducing electronics to school children can be an exciting and educational experience. Electronics can help children understand fundamental principles of science, technology, engineering, and mathematics (STEM), foster creativity, and prepare them for future technological advancements. Some ideas and resources for introducing electronics to school children are:</p><ul><li><strong>Basic Electronics Concepts:</strong> Start with fundamental concepts like electricity, circuits, components (e.g., resistors, capacitors, LEDs), and safety precautions. Use simple analogies and hands-on experiments to explain these concepts.</li><li><strong>Hands-On Projects:</strong> Encourage children to build simple electronic circuits using breadboards or electronic kits designed for beginners. Projects could include creating a basic LED circuit, a simple buzzer circuit, or a light-sensitive circuit. Explain how to read circuit diagrams and schematics, gradually introducing more complex ones as children become comfortable.</li><li><strong>Arduino and Microcontrollers:</strong> Arduino is a popular platform for teaching electronics and programming. It provides an easy-to-use interface for creating interactive electronic projects. Start with basic Arduino projects like blinking LEDs or making simple robots. You can find many online tutorials and resources for beginners.</li></ul>';
      
              break;
            case 'memory-techniques':
         content2 = '<h2>Memorization Techniques</h2><p>Memorization techniques are strategies that ease the retention of information process over time for the purpose of influencing future action. However, memorizing is not entirely an innate skill but rather an ongoing process one endures over time; it is possible for anyone to train and develop their memorizing abilities. For a concept to move from temporary working memory to long-term memory, there are a number of techniques that can be used. Firstly, understanding the material is essential to memorizing it. A second helpful technique is to connect the information you are trying to commit to memory to something that you already know and understand well. Material in isolation is more difficult to remember than material that is connected to other concepts.</p><p>Memorization techniques often involve repetition. These techniques involve visual aids like flashcards and diagrams to self-test material comprehension. Memorization takes time, and it is suggested to implement these techniques over several days and increase the time in between each study session to test progress and understanding.</p>';
      
              break;
            case 'rubic-cube':
           content2 = '<h2>Rubik\'s Cube</h2><p>This is some information about Rubik\'s Cube.</p><p>The Rubik\'s Cube is a 3D mechanical puzzle consisting of a cube with six faces, each made up of nine smaller squares of the same color. The six faces are typically colored with six different colors: white, yellow, blue, green, red, and orange. The objective of the puzzle is to solve it by arranging the smaller squares so that each face of the cube is a single color again.</p>';
      
            break;
            default:
            content2 = '<h2>Category Not Found</h2><p>Sorry, content for this category is not available.</p>';
          
    }
    setPopupContent(content);
  };
  

      
  function LandingPage() {
    return (
        <div id="top">
  <div class="search-container" data-search-box>
    <div class="container">

      <button class="search-close-btn" aria-label="Close search" data-search-toggler>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div class="search-wrapper">
        <input type="search" name="search" placeholder="Search Here..." aria-label="Search" class="search-field"/>

        <button class="search-submit" aria-label="Submit" data-search-toggler>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>

    </div>
  </div>





  <section className="hero" id="home" aria-label="hero" style={{backgroundImage: "url('./assets/images/hero-bg.jpg')"}}>
      <div className="container">

        <div className="hero-content">

          <p className="section-subtitle">Better Learning Future With Us</p>

          <h2 className="h1 hero-title">Raja Educational Academy (REA)</h2>

          <p className="hero-text">
            Complete Brain Development
          </p>

          <a href="#" className="btn btn-primary">
            <span className="span">Get Started Today</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>

        <figure className="hero-banner">
          <img src="./public/images/hero-abs-1 (2).png" width="900" height="900" loading="lazy" aria-hidden="true" className="abs-img abs-img-1" />
          <img src="./public/images/hero-abs-2 (2).png" width="200" height="200" loading="lazy" aria-hidden="true" className="abs-img abs-img-2" />
        </figure>

      </div>
    </section>




     

      <section class="section category" aria-label="category">
        <div class="container1">
      
      
          <h2 class="h2 section-title2">Course Categories</h2>
          <p class="section-subtitle2">Brainstorm Your Interest</p>
      
          <ul class="grid-list">
      
            <li>
              <div class="category-card" id="abacus">
                <div class="card-icon">
                  <ion-icon name="apps-outline"></ion-icon>
                </div>
                <div>
                  <h3 class="h3 card-title">
                    <a href="">Abacus</a>
                  </h3>
                </div>
              </div>
            </li>
      
            <li>
              <div class="category-card" id="vedic-math">
                <div class="card-icon">
                  <ion-icon name="file-tray-full-outline"></ion-icon>
                </div>
                <div>
                  <h3 class="h3 card-title">
                    <a href="">Vedic Math</a>
                  </h3>
                </div>
              </div>
            </li>
      
            <li>
              <div class="category-card" id="handwriting">
                <div class="card-icon">
                  <ion-icon name="pencil-outline"></ion-icon>
                </div>
                <div>
                  <h3 class="h3 card-title">
                    <a href="">Handwriting</a>
                  </h3>
                </div>
              </div>
            </li>
      
            <li>
              <div class="category-card" id="ekids">
                <div class="card-icon">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>
                <div>
                  <h3 class="h3 card-title">
                    <a href="">E-Kids</a>
                  </h3>
                </div>
              </div>
            </li>
      
            <li>
              <div class="category-card" id="memory-techniques">
                <div class="card-icon">
                  <ion-icon name="laptop-outline"></ion-icon>
                </div>
                <div>
                  <h3 class="h3 card-title">
                    <a href="">Memory Techniques</a>
                  </h3>
                </div>
              </div>
            </li>
      
            <li>
              <div class="category-card" id="rubic-cube">
                <div class="card-icon">
                  <ion-icon name="cube-outline"></ion-icon>
                </div>
                <div>
                  <h3 class="h3 card-title">
                    <a href="">Rubic Cube</a>
                  </h3>
                </div>
              </div>
            </li>
      
          </ul>
        </div>
      </section>
      
      <div id="popupContainer" class="popup-container">
        <div class="popup-content" id="popupContent">
        </div>
      </div>
      





    
      <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img src="./public/images/222.webp" width="450" height="600" loading="lazy" alt="about banner" className="w-100 about-img" />
          <img src="./public/images/about-abs-1.jpg" width="300" height="242" loading="lazy" aria-hidden="true" className="abs-img abs-img-1" />
        </figure>
        <div className="about-content">
          <p style={{fontSize: "20px"}}>
            Welcome to Raja Educational Academy (REA), where we specialize in empowering children through innovative educational programs. As a women-led organization, we offer tailored courses in Abacus, E-Kids, Vedic Math, Memory Techniques, Rubik's Cube, and Handwriting.
            <br /><br />
            At REA, our dedicated team of experts is committed to nurturing your child's potential. With years of experience in education, we focus on improving memory, concentration, and confidence levels. Our holistic approach fosters multi-dimensional thinking and spiritual development, ensuring outstanding performance and independent, confident individuals.
            <br /><br />
            Our programs, designed for children aged 4 to 14, equip them with essential skills for success in a competitive world. From mastering mental calculation abilities to promoting intuitive thinking, we prepare the next generation for the challenges ahead.
            <br /><br />
            Join us at REA and embark on a transformative journey for your child's bright future.
          </p>
        </div>
      </div>
    </section>
      
      <h2 class="h2 section-title3">Events</h2>
      <p class="section-subtitle3">Past Events and Upcoming Events</p>

      <section class="container5">
        
        <div class="box">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <h3>Event A</h3>
              <p>Date: January 1, 2025</p>
              <p>Time: 10:00 AM</p>
              <p>Venue: Event Venue A</p>
            </li>
            <li>
              <h3>Event B</h3>
              <p>Date: February 15, 2025</p>
              <p>Time: 2:00 PM</p>
              <p>Venue: Event Venue B</p>
            </li>
            <li>
              <h3>Event C</h3>
              <p>Date: March 30, 2025</p>
              <p>Time: 5:30 PM</p>
              <p>Venue: Event Venue C</p>
            </li>
          </ul>
        </div>
        <div class="box previous-events" onclick="window.location.href='prevevent.jsx';" style="cursor:pointer;"/>
          <h2>Past Events</h2>
          
        
      </section>
      
      







      <section class="section cta" aria-label="workshop" style="background-image: url('./assets/images/cta-bg.png')">
        <div class="container">

          <figure class="cta-banner">
            <img src="./public/images/2.JPG" width="580" height="380" loading="lazy" alt="cta banner"
              class="img-cover"/>
          </figure>

          <div class="cta-content">

            <p class="section-subtitle">Free Demo</p>

            <h2 class="h2 section-title">Join Our Free Demo class</h2>

            <p class="section-text">
              
"Get ready to explore our upcoming features firsthand with our free demo. Sign up now to be the first to try it out. Don't miss this exclusive opportunity!"
            </p>

            <a href="#" class="btn btn-secondary">
              <span class="span">Upcoming Class</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>

          </div>

        </div>
      </section>
      <section class="section event" id="event" aria-label="event">
        <div class="container1">


          <h2 class="h2 section-title2">Gallery</h2>

          <ul class="grid-list">

            <li>
              <div class="event-card">

                <figure class="card-banner">
                  <img src="./public/images/1.JPG" width="250" height="250" loading="lazy"
                    alt="Innovation & Technological Entrepreneurship Team" class="img-cover"/>
                </figure>

              </div>
            </li>

            <li>
              <div class="event-card">

                <figure class="card-banner">
                  <img src="./public/images/2.JPG" width="250" height="250" loading="lazy"
                    alt="Virtual Spring Part-time Jobs Fair for Student" class="img-cover"/>
                </figure>
              </div>
            </li>

            <li>
              <div class="event-card">
                <figure class="card-banner">
                  <img src="./public/images/3.JPG" width="250" height="250" loading="lazy"
                    alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li>

          </ul>
          <div class="view-more-container">
            <a href="./Gallery.jsx" class="btn-view-more">View More</a>
          </div>
        </div>
        
      </section>


      <main>
        <article>
          <section class="section newsletter" aria-label="newsletter" style="background-image: url('./assets/images/newsletter-bg.jpg')">
            <div class="container3">
              <div class="form-wrapper">
                <h1 class="section-subtitle1">Contact Us</h1>
                <form action="#" class="contact-form">
                  <div class="input-wrapper">
                    <input type="text" name="name" aria-label="name" placeholder="Your Name" required class="name-field"/>
                  </div>
                  <div class="input-wrapper">
                    <input type="email" name="email_address" aria-label="email" placeholder="Your Email Address" required class="email-field"/>
                  </div>
                  <div class="input-wrapper">
                    <select name="role" aria-label="role" required class="role-field">
                      <option value="">Select Your Role</option>
                      <option value="student">Student</option>
                      <option value="school">School</option>
                      <option value="Teacher">Teacher</option>
                      <option value="general">General</option>
                    </select>
                  </div>
                  <div class="input-wrapper">
                    <textarea name="query" aria-label="query" placeholder="Write your query here" required class="query-field" style="height: 200px; width: calc(100% - 30px);"></textarea>
                  </div>
                  <button type="submit" class="submit-btn1">
                    <span class="span">Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
           

 








  <a href="#top" class="back-top-btn" aria-label="Back to top" data-back-top-btn>
    <ion-icon name="arrow-up"></ion-icon>
  </a>




</div>
    
    );
    }

export default LandingPage;