import './index.css';
import { motion, useTransform, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';

export default function About() {
    // my intro is about actively finding a web development job or internship.
    const myIntro = (
        <>
        Hello, my name is Tzechi.
        I am currently studying at the Southern Alberta Institute of Technology (SAIT) for a software development diploma. <br />
        I am planning to graduate this August and actively looking for a web development job or internship.<br />
        Please feel free to contact me if you have any questions or there is any opportunity to discuss my further qualifications.
        </>
    )

    const myEdu = [{
        school: 'Southern Alberta Institute of Technology',
        program: 'Software Development Diploma',
        duration: '01/2023 - Now',
        location: 'Calgary, Alberta, Canada'
    }, {
        school: 'Soochow University',
        program: 'Bachelor of Arts in Economics',
        duration: '09/2016 - 06/2020',
        location: 'Taipei, Taiwan'
    }];

    const myExp = [{
        company: 'ChainSea Information Integration Co., Ltd.',
        position: 'Accounting Assistant',
        duration: '09/2021 - 12/2021',
        location: 'Taipei, Taiwan',
        desc: '- Checked account reconciliation; completed the transaction with balance.'
    }, {
        company: 'Taiwan Fire & Marine Insurance Company, Ltd.',
        position: 'Data Entry Assistant of Short-Term Project',
        duration: '03/2021 - 06/2021',
        location: 'Taipei, Taiwan',
        desc: '- Inputted client information to company’s system; proofread transition details.'
    }]; 

    const mySkills = [{
        category: 'Web Development',
        skills: 'HTML, CSS, JavaScript, React.js, Next.js, Node.js'
    }, {
        category: 'Mobile Development',
        skills: 'React Native'
    }, {
        category: 'Database Management',
        skills: 'Oracle SQL, MySQL, Firebase'
    }, {
        category: 'Object-Oriented Programming',
        skills: 'Python, Java, C#'
    }, {
        category: 'Tools',
        skills: 'Git, GitHub, VS Code, Postman'
    }, {
        category: 'Hackathon',
        skills: 'Participated in YYC Hacks 2024'
    }, {
        category: 'Language',
        skills: 'Chinese (Native), English (Advanced)'
    }]

    // const bgColor = useSpring(
    //     "#fce053", {stiffness: 100}
    // );
    const { scrollYProgress } = useScroll(); 
    // useMotionValueEvent(scrollYProgress, "Change", (latest) => {
    //     console.log(latest);
    // }
    // );
    const scaleX = useSpring(scrollYProgress, {stiffness: 80, damping: 30})


    return (
        <div>
            <p className='section-title'>About Me</p>
            {/* <motion.div initial={{opacity: 0,}} whileInView={{opacity:1,}} viewport={{margin: "-200px"}} style={{backgroundColor: bgColor}}> */}
            <p className='about-my-intro'> {myIntro} </p>
            <div className="my-bg-div">
                <div className="my-bg-two-side-div">
                    {/* <motion.div style={{scaleX}} whileInView={{opacity:1,}} viewport={{margin: "-200px"}}> */}
                        <h3>Education</h3>
                    {/* </motion.div> */}
                    {myEdu.map((edu, index) => (
                        <div key={index} className='bg-content-div'>
                            <div className='bg-content-line'>
                                <p className='bold-text big-text'>{edu.program}</p>
                                <p className='bold-text small-text'>{edu.duration}</p>
                            </div>
                            <div className='bg-content-line'>
                                <p>{edu.school}</p>
                                <p className='small-text'>{edu.location}</p>
                            </div>
                        </div>
                    ))}
                    {/* <motion.div style={{scaleX}} whileInView={{opacity:1,}} viewport={{margin: "-200px"}}> */}
                    <h3>Experience</h3>
                    {/* </motion.div> */}
                    {myExp.map((exp, index) => (
                        <div key={index} className='bg-content-div'>
                        <div className='bg-content-line'>
                            <p className='bold-text big-text'>{exp.position}</p>
                            <p className='bold-text small-text'>{exp.duration}</p>
                        </div>
                        <div className='bg-content-line'>
                            <p>{exp.company}</p>
                            <p className='small-text'>{exp.location}</p>
                        </div>
                        <div>
                            <p className='small-text'>{exp.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="my-bg-two-side-div">
                {/* <motion.div style={{scaleX}} whileInView={{opacity:1,}} viewport={{margin: "-200px"}}> */}
                    <h3>Skills & Others</h3>
                {/* </motion.div> */}
                {mySkills.map((skill, index) => (
                    <div key={index} className='bg-content-div'>
                        <div className='bg-content-line'>
                            <p className='bold-text big-text'>{skill.category}</p>
                        </div>
                        <div className='bg-content-line'>
                            <p>{skill.skills}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};