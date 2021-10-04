import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';
/* data load */
const Home = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch("./coaching.JSON")
        .then(res => res.json())
        .then(data => setClasses(data));
    },[]);
    return (    
        <div>
                 <h1>Learner`s Point</h1>
                    <p>A Qualitiful coaching center</p>
        <Container>
                <Row>
                    <Col>
                    <h1>Welcome to Learner`s Point</h1>
                    <h3>Instant Learning</h3>
                    <p>we are providing knowledge to student.our teachers are dedicated to supply educaion to studentsThe Covid-19 pandemic has forced schools, colleges, and parents to adopt digital education. While online classes are still not AI-based, we’ve seen a rise in demand for platforms like Byju’s where the modules are developed based on each student’s needs.

Students don’t have to wait for a class to start or worry about missing a session. They can ask questions, get help from the virtual teacher as well as the real teacher (human). Step-by-step explanations are provided for each topic so that students easily understand the concepts.</p>
<h3>Digital Curriculum </h3>
<p>
The aim of using artificial intelligence in EdTech is to make students’ experience the center of focus. Teach students what they are likely to enjoy; this is something Coursera has adopted in its own way. The AI-based online platform has a feature called CourseMatch.

This tool helps students match their campus curriculum with the courses offered by the platform. CourseMatch is a machine learning algorithm that uses NLP (Natural Language Processing) to align the online courses with the ones the student has in their on-campus curriculum.
</p>
<h3>Chatbots </h3>
<p>Chatbots are used to encourage students, give immediate feedback, and answer basic questions related to the subject. Cognii is a San Francisco-based EdTech tool that interacts with students. It shares feedback after the assessments, encourages them when they give the right answer, and offers personalized tutoring.

These chatbots can take the pressure of the teachers by monitoring each student’s learning with the same level of focus. Teachers can oversee the process and intervene when necessary, and students feel happy for the immediate feedback they get from the chatbot.</p>
                    </Col>
                    <Col> 
                    {/*
                     data maping and sent another component  */
                     }                 
                    <Row xs={1} md={2} className="g-4">
                    {
                        classes.map(classs => <Services 
                            key = {classs.key}
                            classs={classs}
                            ></Services>)
                    }
                    </Row>
                    </Col>
                </Row>
       </Container>    
       </div>
            
        
    );
};

export default Home;