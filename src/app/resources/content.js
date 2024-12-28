import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Preethi',
    lastName:  'M',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'CSE Undergrad',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

/*const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}*/

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/QubitMatrix',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'www.linkedin.com/in/preethim2403',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:preethi13m@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <><a href="https://github.com/QubitMatrix" target="_blank">Preethi M</a></>,
    subline: <> <p>Final year student pursuing B.Tech(CSE) at PES University.</p> <br/>
    <p>Passionate problem-solver and night-owl coder, deeply fascinated by cybersecurity and solving CTF challenges</p> <br/>
    <p>My favourite editor is VIM ❤️ and I strongly prefer working with editors that support vim bindings</p><br/>
    <u>My interests:</u><br/>
    <span>Computer Networks | Cybersecurity | Web Development</span></>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a final year CSE student and a highly motivated and results-oriented software engineer passionate about cybersecurity. I am interested in safeguarding digital assets and upholding data privacy. I thrive in collaborative environments and am adept at learning and adapting to new challenges<br/><br/>In my spare time I like to play the keyboard and solve puzzles. I occasionally do some artworks and read books.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'UPL',
                timeframe: 'June 2024 - July 2024',
                role: 'Data Engineering Intern',
                achievements: [
                    <>Development of a dynamic and interactive dashboard utilizing Qlik Sense to visualize data quality metrics.</>,
                    <>Creation of custom expectation from scratch for checking date completeness</>,
                    <>Support for comprehensive investigation of the records failing quality checks</>,
                    <>Construction of a fully automated workflow capable of extracting metadata, processing data, and generating visualizations for the dashboard.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                ]
            },
            {
                company: 'PES University',
                timeframe: 'Jan 2024 - May 2024',
                role: 'Teaching Assistant for Design and Analysis of Algorithms',
                achievements: [
                    <>Developed an <a href="https://github.com/QubitMatrix/Automated_MOSS_Plagiarism_Checker" target="_blank">automation tool</a> that significantly streamlined the evaluation process by eliminating time-consuming manual tasks like invoking APIs, session mark calculation and updation</>,
                    <>Framed problem statements for individual topics and worksheets for each unit</>
                ],
                images: [ ]
            },
            {
                company: 'PESUniversity',
                timeframe: 'Sep 2024 - Dec 2024',
                role: 'Teaching Assistant for Computer and Network Security',
                achievements: [
                    <>Assisted students in labs and a CTF hackathon</>,
                    <>Framed questions, prepared notes and was incharge of lab evaluations</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'PES University',
                description: <>Studied computer science engineering.</>,
            }
        ]
    },
    competitions: {
        display: true,
        title: 'Competitions',
        participations: [
            {
                name: 'Kalpana 2024',
                description: <><a href="https://github.com/QubitMatrix/GenSkill_nexus" target = "_blank"><strong>GenSkill Nexus</strong></a><br/>Built a platform for retirees to create profiles, post tasks for knowledge seekers, and connect across generations, promoting engagement, income opportunities, and skill-sharing.<br/>Received the <em>Best-All-Girls Team</em> Award</>
            },
            {
                name: 'Kodikon 2.0',
                description: <><strong>Ingredibly</strong><br/>Developed a web app which can scan a food item and give the ingredients used in it along with similar products with or without a specified ingredient, as per the user's needs. A short description of the ingredients and its uses and sources can also be checked if wanted.<br/>Ranked among Top 10 teams</>
            },
            {
                name: 'Kodikon',
                description: <><strong>RDHub</strong><br/>Created a website that simplifies research by connecting users with mentors, teammates, and topics. It gathers and organizes information from various sources into one central hub for easy access, and was recognized among the the Top 40 teams</>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>Python, C, C++, Java, JavaScript, Arduino</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            },
            {
                title: 'Web Development',
                description: <>HTML, CSS, Javascript, NodeJS, ReactJS</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            },
            {
                title: 'Database',
                description: <>MongoDB, MySQL</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            },
            {
                title: 'Web and Network Security',
                description: <>Metasploit, NMAP, Postman, Burpsuite, Wireshark</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            },
            {
                title: 'Data Engineering',
                description: <>Apache Airflow, Azure Databricks, Databricks SQL, PySpark, Python, Qlik Sense</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            },
            {
                title: 'Frequently Used Tools',
                description: <>Github, Vim, VSCode, Bash, WSL, Obsidian</>,
                // optional: leave the array empty if you don't want to display images
                images: [ ]
            }
        ]
    },
    awards: {
        display: true,
        title: 'Awards',
        awards: [
            {
                name: 'Prof. MR Doreswamy Scholarship',
                timeframe: 'PES University, Jun 2024',
                description: 'Awarded for academic performance amongst top 5% in 6th sem'
            },
            {
                name: 'Prof. MR Doreswamy Scholarship',
                timeframe: 'PES University, Jan 2024',
                description: 'Awarded for academic performance amongst top 5% in 5th sem'
            },
            {
                name: 'Prof. CNR Rao Scholarship',
                timeframe: 'PES University, Jun 2023',
                description: 'Awarded for academic performance amongst top 5% in 4th sem'
            },
            {
                name: 'Prof. CNR Rao Scholarship',
                timeframe: 'PES University, Jan 2023',
                description: 'Awarded for academic performance amongst top 5% in 3rd sem'
            },
            {
                name: 'Prof. CNR Rao Scholarship',
                timeframe: 'PES University, Aug 2022',
                description: 'Awarded for academic performance amongst top 2% in 2nd sem'
            },
            {
                name: 'Prof. CNR Rao Scholarship',
                timeframe: 'PES University, Apr 2022',
                description: 'Awarded for academic performance amongst top 2% in 1st sem'
            },
            {
                name: 'Principal\'s Award',
                timeframe: 'SJBHS, Feb 2022',
                description: 'Awarded for 3rd rank in ISC Science'
            },
            {
                name: 'Rev. Fr. Claude D\'Souza Award',
                timeframe: 'SJBHS, Feb 2022',
                description: 'Awarded for securing the highest marks in Physics in ISC'
            },
            {
                name: 'Rev. Fr. Hilario Fernandes Award',
                timeframe: 'SJBHS, Feb 2022',
                description: 'Awarded for securing the highest marks in Computer Science in ISC'
            },
            {
                name: 'Amina Mathias Award',
                timeframe: 'SHGHS, Jun 2019',
                description: 'Awarded for the Best Student in Mathematics'
            },
            {
                name: 'Certificate of Academic Distinction',
                timeframe: 'SHGHS, Jun 2019',
                description: 'Awarded for securing first in Computer Applications, Science and Mathematics'
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about interested topics...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `Artwork by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-18.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-02.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-04.png',
            alt: 'image',
            orientation: 'square'
        },
        {
            src: '/images/gallery/img-05.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-06.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.png',
            alt: 'image',
            orientation: 'square'
        },
        {
            src: '/images/gallery/img-08.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-11.png',
            alt: 'image',
            orientation: 'square'
        },
        {
            src: '/images/gallery/img-12.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-15.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-17.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-19.png',
            alt: 'image',
            orientation: 'square'
        },
        // {
        //     src: '/images/gallery/img-16.png',
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
    ]
}

export { person, social, home, about, blog, work, gallery };
