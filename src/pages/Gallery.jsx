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
  

  function Gallery() {


    return (
        <div id="top">

        <section class="section event" id="event" aria-label="event">
    <div class="container">
      <div class="all-events-text">
        <h2>Gallery</h2>
      </div>
      <ul class="grid-list">
        <li>
            <div class="image-container">
              <figure class="card-banner1">
                <img src="./public/images/1.jpg" loading="lazy" alt="Innovation & Technological Entrepreneurship Team" class="img-cover"/>
              </figure>
            </div>
          </li>
          <li>
            <div class="image-container">
              <figure class="card-banner1">
                <img src="./public/images/2.jpg" loading="lazy" alt="Virtual Spring Part-time Jobs Fair for Student" class="img-cover"/>
              </figure>
            </div>
          </li>
          <li>
            <div class="image-container">
              <figure class="card-banner1">
                <img src="./public/images/3.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
              </figure>
            </div>
          </li>
          <li>
            <div class="image-container">
              <figure class="card-banner1">
                <img src="./public/images/4.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
              </figure>
            </div>
          </li>
          <li>
            <div class="image-container">
              <figure class="card-banner1">
                <img src="./public/images/5.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
              </figure>
            </div>
          </li>
          <li>
            <div class="image-container">
              <figure class="card-banner1">
                <img src="./public/images/6.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
              </figure>
            </div>
          </li>
          <li>
              <div class="image-container">
                <figure class="card-banner1">
                  <img src="./public/images/7.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li>
            <li>
              <div class="image-container">
                <figure class="card-banner1">
                  <img src="./public/images/8.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li>
            <li>
              <div class="image-container">
                <figure class="card-banner1">
                  <img src="./public/images/9.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li>
            <li>
              <div class="image-container">
                <figure class="card-banner1">
                  <img src="./public/images/10.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li>
            <li>
              <div class="image-container">
                <figure class="card-banner1">
                  <img src="./public/images/11.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li>
            <li>
              <div class="image-container">
                <figure class="card-banner1">
                  <img src="./public/images/12.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                </figure>
              </div>
            </li> 
            <li>
                <div class="image-container">
                  <figure class="card-banner1">
                    <img src="./public/images/13.jpg" loading="lazy" alt="Innovation & Technological Entrepreneurship Team" class="img-cover"/>
                  </figure>
                </div>
              </li>
              <li>
                <div class="image-container">
                  <figure class="card-banner1">
                    <img src="./public/images/14.jpg" loading="lazy" alt="Virtual Spring Part-time Jobs Fair for Student" class="img-cover"/>
                  </figure>
                </div>
              </li>
              <li>
                <div class="image-container">
                  <figure class="card-banner1">
                    <img src="./public/images/15.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                  </figure>
                </div>
              </li>
              <li>
                <div class="image-container">
                  <figure class="card-banner1">
                    <img src="./public/images/16.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                  </figure>
                </div>
              </li>
              <li>
                <div class="image-container">
                  <figure class="card-banner1">
                    <img src="./public/images/17.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                  </figure>
                </div>
              </li>
              <li>
                <div class="image-container">
                  <figure class="card-banner1">
                    <img src="./public/images/18.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                  </figure>
                </div>
              </li>
              <li>
                  <div class="image-container">
                    <figure class="card-banner1">
                      <img src="./public/images/19.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                    </figure>
                  </div>
                </li>
                <li>
                  <div class="image-container">
                    <figure class="card-banner1">
                      <img src="./public/images/20.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                    </figure>
                  </div>
                </li>
                <li>
                  <div class="image-container">
                    <figure class="card-banner1">
                      <img src="./public/images/21.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                    </figure>
                  </div>
                </li>
                <li>
                  <div class="image-container">
                    <figure class="card-banner1">
                      <img src="./public/images/22.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                    </figure>
                  </div>
                </li>
                <li>
                  <div class="image-container">
                    <figure class="card-banner1">
                      <img src="./public/images/23.jpg" loading="lazy" alt="Explorations of Regional Chief Executive Network" class="img-cover"/>
                    </figure>
                  </div>
                </li>
                
                  
      </ul>
    </div>
  </section>






  <a href="#top" class="back-top-btn" aria-label="Back to top" data-back-top-btn>
    <ion-icon name="arrow-up"></ion-icon>
  </a>



</div>
    
    );
    }

export default Gallery;