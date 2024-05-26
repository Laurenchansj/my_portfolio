import { motion } from 'framer-motion';

export default function Projects() {
    const myProjects = [{
        name: 'Personal Portfolio Website',
        work: 'Personal',
        desc: 'A personal portfolio website that showcases my projects and skills.',
        tech: 'React.js, Vercel',
        hasLink: false,
        link: '(Current Viewing)',
        github: 'https://github.com/Laurenchansj/my_portfolio'
    },{
        name: 'Travel Blog',
        work: 'Group Project',
        desc: 'A travel blog website that allows users to share their travel experiences.',
        tech: 'React.js, Next.js, Node.js, Google Map API, Firebase, Vercel',
        hasLink: true,
        link: 'https://web-dancers.vercel.app/',
        github: 'https://github.com/Laurenchansj/WebDancers'
    }, {
        name: 'Library Management System',
        work: 'Group Project',
        desc:  'A library management system that allows users to borrow and return books.',
        tech: 'C#, Razor, MySQL',
        hasLink: false,
        link: 'No Website',
        github: 'https://github.com/Laurenchansj/Library_Management'
    }, {
        name: 'Money Tracker',
        work: 'Group Project',
        desc: 'A money tracker that allows users to track their expenses and incomes.',
        tech: 'React Native',
        hasLink: false,
        link: 'No Website',
        github: 'https://github.com/Laurenchansj/MoneyDancers'
    }];

    return (
        <div>
            <p className="section-title">Projects</p>
            <motion.div initial={{opacity: 0,}} whileInView={{opacity:1,}} viewport={{margin: "-100px"}}>
                <div className="projects-list">
                    {myProjects.map((project, index) => (
                        <div key={index} className="project-div">
                            <div className="project-header">
                                <div className="project-name bold-text">{project.name}</div>
                                <div className="project-work">{project.work}</div>
                            </div>
                            <div className="project-desc">{project.desc}</div>
                            <div className="project-tech">tech: {project.tech}</div>
                            <div className="project-links">
                                {project.hasLink ? (
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <div className="project-link">Website</div>
                                    </a>
                                ) : (
                                    <div className="project-link">{project.link}</div>
                                )}
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <div className="project-link">GitHub</div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}