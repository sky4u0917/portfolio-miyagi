import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { techIcons } from "../util components/project_skill_icons";

const {
    html,
    css,
    bootstrap,
    tailwindcss,
    js,
    jquery,
    ts,
    react,
    next,
    angular,
    vue,
    nuxt,
    python,
    ruby,
    php,
    node,
    nest,
    postgreSQL,
    mySQL,
    mongodb,
    laravel,
    redux,
    graphQL,
    apollo,
    amazon,
    nginx,
    netlify,
    webpack,
    ethereum,
    ubuntu,
    line,
    stripe,
    antd,
    polygon
} = techIcons;

export class AboutHaruka extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "skills": <Skills />,
            "projects": <Projects />,
        }

        let lastVisiharukaScreen = localStorage.getItem("about-section");
        if (lastVisiharukaScreen === null || lastVisiharukaScreen === undefined) {
            lastVisiharukaScreen = "about";
        }

        // focus last visiharuka screen
        this.changeScreen(document.getElementById(lastVisiharukaScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? "bg-orange-800 bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " hover:cursor-pointer w-28 h-12 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-5 md:w-5" alt="about haruka" src="https://img.icons8.com/office/344/user.png" />
                    <span className="ml-1 md:ml-2 text-gray-50 text-lg">Overview</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? "bg-orange-800 bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " hover:cursor-pointer w-28 h-12 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-5 md:w-5" alt="haruka's skills" src="https://img.icons8.com/external-justicon-flat-justicon/344/external-setting-notifications-justicon-flat-justicon.png" />
                    <span className="ml-1 md:ml-2 text-gray-50 text-lg">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? "bg-orange-800 bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " hover:cursor-pointer w-28 h-12 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-5 md:w-5" alt="haruka's projects" src="https://img.icons8.com/color/344/project.png" />
                    <span className="ml-1 md:ml-2 text-gray-50 text-lg">Projects</span>
                </div>
                <div className='my-4 w-28 md:w-full h-8 px-2 md:px-2.5 flex justify-center items-center'>
                    <a class="flex justify-center items-center gap-1.5 w-4/5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" href="https://github.com/bluesky4u/portfolio-haruka" target="_blank">
                      Star <img className="w-5 md:w-5" alt="haruka's projects" src="https://img.icons8.com/officel/512/star.png" />
                    </a>
                </div>
                {/* <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/nicolemelo/button" title="Sponsor harukamiyagi" width={"100%"} height={"100%"} ></iframe>
                </div> */}
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/5 md:w-1/6 text-sm overflow-y-auto windowMainScreen border-r border-black font-sans">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20 font-sans"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutHaruka;

export const displayAboutHaruka = () => {
    return <AboutHaruka />;
}

function About() {
    return (
        <>
            <div className="w-28 md:w-32 mt-8 bg-white rounded-full">
                <img className="w-full rounded-circle border-2" src="./images/logos/harukamoji.gif" alt="Haruka Miyagi Logo" />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Here is <span className="font-bold">Haruka Miyagi</span> ,</div>
                <div className="font-normal ml-1">I'm an <span className="text-orange-500 font-bold">Software Engineer!</span></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-full md:w-5/6 emoji-list">
                <li className="list-pc text-xl font-sans">
                    I'm a skilled and motivated <span className="text-pink-600 font-bold">Front-end & Back-end developer</span> currently pursuing <span className="font-bold text-pink-600">Artificial Intelligence and Bots</span> for the modern web development.
                    <br />- <span className="text-pink-600 font-bold">Language:</span> Javascript, Typescript, PHP, Python, Java, C, Solidity
                    <br />- <span className="text-pink-600 font-bold">Front-end:</span> HTML, CSS, React, Next, Tailwind CSS, MUI, Bootstrap
                    <br />- <span className="text-pink-600 font-bold">Python Library:</span> Tensorflow, PyTorch, Theano, Keras, NLTK, SpaCy
                    <br />- <span className="text-pink-600 font-bold">C++ Library :</span> Caffe
                    <br />- <span className="text-pink-600 font-bold">DevOps:</span> AWS, Git, CI/CD, Docker/Kubernetes, Google Cloud Platform, Azure, Digital Ocean, Firebase
                    <br />- <span className="text-pink-600 font-bold">Database:</span> MySQL, Postgres, Oracle, MongoDB, Redis, Firebase Runtime Database, AWS DynamoDB
                    <br />- <span className="text-pink-600 font-bold">Restful API:</span>OpenAI API, Midjourney API, ChatGPT, Stable Diffusion, Dialogflow, TTS, STT
                    <br />I am ready to help your <span className="text-pink-600 font-bold">ambitious project.</span> Thank you.
                    <br />( Mail me up <a className='text-pink-600 font-bold' href='mailto:h.miyagi4u@gmail.com'> @h.miyagi4u@gmail.com </a> )
                </li>
                <li className="mt-3 list-building text-xl font-sans"> I love building <span className="text-pink-600 font-bold">awesome websites and products</span> that need wonderful services.</li>
                <li className="mt-3 list-time text-xl font-sans"> When I am free, I like to spend my time reading books, playing games or writing <a className="text-pink-600 font-bold" href="https://medium.com/@haruka-blog" target="_blank"> some blogs.</a></li>
            </ul>
            <br />
        </>
    )
}

function Skills() {
    return (
        <>
            <br />
            <div className="font-medium relative text-2xl mt-1 md:mt-1">
                Technical Skills
            </div>
            <ul className="tracking-tight text-lg w-10/12 emoji-list font-sans">
                <li className="list-arrow text-xl mt-4 leading-tight tracking-tight">
                    I've worked with a variety of programming languages and frameworks.
                </li>
                <li className="list-arrow text-xl mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange"> React  & Python & Node ! </strong></div>
                </li>
                <li className="list-arrow text-xl mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <br />
            <div className="w-full md:w-10/12 flex mt-4">
                <div className="text-xl text-center w-1/2 font-bold">Languages & Tools</div>
                <div className="text-xl text-center w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-4 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="haruka javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="haruka typescript" />
                        <img className="m-1" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="haruka CSS3" />
                        <img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=for-the-badge&logo=html5&logoColor=ffffff" alt="haruka HTML5" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=ffffff" alt="haruka python" />
                        <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="haruka PHP" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="haruka mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="haruka postgresql" />
                        <img className="m-1" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="haruka mongodb" />
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=ffffff" alt="haruka SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=%23ffffff" alt="haruka git" className="m-1" />
                        {/* <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=ffffff" alt="haruka firebase" className="m-1" /> */}
                        {/* <img src="https://img.shields.io/badge/Firefox_Browser-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white" alt="haruka mozila firefox" className="m-1" /> */}
                        <img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white" alt="haruka google chrome" className="m-1" />
                        {/* <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" alt="haruka jira" className="m-1" /> */}
                        <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="haruka figma" className="m-1" />
                        <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="haruka trello" className="m-1" />
                        <img src="https://img.shields.io/badge/Chatbot-0066FF?style=for-the-badge&logo=chatbot&logoColor=white" alt="haruka chatbot" className="m-1" />
                    </div>
                </div>
                <div className="px-4 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=ffffff" alt="haruka next" />
                        <img className="m-1" src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=ffffff" alt="haruka react" />
                        <img className="m-1" src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="haruka vue" />
                        <img className="m-1" src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=red" alt="haruka openai" />
                        <img className="m-1" src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="haruka tensorflow" />
                        <img className="m-1" src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="haruka pytorch" />
                        {/* <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="haruka flutter" /> */}
                        <img className="m-1" src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="haruka opencv" />
                        {/* <img className="m-1" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="haruka django" /> */}
                        <img className="m-1" src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="haruka laravel" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="haruka tailwind css" />
                        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="haruka bootstrap" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=ffffff" alt="haruka node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="haruka jquery" className="m-1" />
                        {/* <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="haruka redux" /> */}
                        {/* <img className="m-1" src="https://img.shields.io/badge/Alpine_Linux-0D597F?style=for-the-badge&logo=alpine-linux&logoColor=white" alt="haruka linux" /> */}
                        <img className="m-1" src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="haruka google cloud" />
                        <img className="m-1" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="haruka aws" />
                        {/* <img className="m-1" src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown" alt="haruka mocha" /> */}
                        <img className="m-1" src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red" alt="haruka chai" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Forefront Chatbot",
            date: "Feb 2023",
            link: "https://chat.forefront.ai/",
            description: [
                "A better ChatGPT experience.",
                "Sign up to get free access to GPT-4, image generation, custom personas, shareable chats, and more."
            ],
            domains: [react, next, nginx, node, mongodb, amazon, js, css]
        },
        {
            name: "MIST NFT MARKETPLACE",
            date: "Sep 2022",
            link: "https://mist.game/nft-marketplace",
            description: [
                "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs.",
                "Collect NFTs, battle epic monsters, and explore infinite immersive environments in this blockchain-based NFT Action RPG."
            ],
            domains: [vue, laravel, ethereum, polygon]
        },
        {
            name: "Watsom Content Generate Tools",
            date: "Feb 2022",
            link: "https://app.watsom.ai/",
            description: [
                "Watsom is a content generation tool that makes it quick and easy to generate content using GPT3.",
                "The best excellent result than Jasper."
            ],
            domains: [react, nginx, node, amazon, tailwindcss]
        },
        {
            name: "Typetone: Personalized AI Content Platform: AI Brand Voice",
            date: "Nov 2022",
            link: "https://app.schrijven.ai/",
            description: [
                "AI content generation in the tone of your personal or brand language.",
                "Easily automate your content in your personal writing style.",
                "Trusharuka by 10,000+ companies."
            ],
            domains: [vue, ts, nuxt, nginx, jquery]
        },
        {
            name: "ClassicDOGE | Earn up to 500% APR by Staking | NFT Pet Packs with Rewards",
            date: "Oct 2022",
            link: "https://staking.classicdoge.io/#/",
            description: [
                " Reward system for staking,",
                "Minting by user randomly NFTs, Upload the NFT arts and Traits(metadata) to IPFS"
            ],
            domains: [react, redux, jquery, polygon]
        },
        {
            name: "okaimono | Calculate the value of your collection",
            date: "Sep 2021",
            link: "https://okaimono.net/urllist",
            description: [
                "A site where you can track the market price of retro games and NFTs. ",
                "By signing up as a member, you can calculate the value of items in your collection and list your favorite collections."
            ],
            domains: [react, nginx, antd, ubuntu, jquery, polygon]
        },
        {
            name: "Customer Management System",
            date: "Mar 2021",
            link: "https://members-demo.line-sys.com/",
            description: [
                "This is the customer & product management system for the EC site.",
                "It interacts with the user using the LINE chatting which implements by LINE API."
            ],
            domains: [react, node, antd, line]
        },
        {
            name: "GARDEN OF VEGAN",
            date: "May 2020",
            link: "https://gardenofvegan.com.au/",
            description: [
                "THE HEALTHIEST, ORGANIC, PLANT-BASED MEAL-DELIVERY SERVICE IN AUSTRALIA.",
            ],
            domains: [laravel, stripe, jquery, bootstrap]
        },
        {
            name: "Harcouts Holiday",
            date: "Dec 2019",
            link: "https://mogwar.io/",
            description: [
                "They’re a small, local team who have the utmost respect and care when it comes to ensuring your holiday stay is the best one it possibly could be. All their guests enjoy an outstanding level of service that is second to none, as are their beautiful private holiday homes.",
            ],
            domains: [nest, node, nginx, postgreSQL]
        },
        {
            name: "LMFX",
            date: "Oct 2019",
            link: "https://lmfx.com/",
            description: [
                "When it comes to trading, LMFX is the broker you are looking for, that offers advanced institutional and retail trading conditions to a global audience. They have thought of everything you might need, to ensure a smooth hassle-free trading experience.",
            ],
            domains: [next, react, jquery, node, bootstrap]
        },
    ];

    return (
        <>
            <div className="font-bold relative text-2xl mt-2 md:mt-5 mb-4">
            🌟Projects🌟
            </div>
            {/* <iframe src="https://github.com/bluesky4u/" title="haruka miyagi" className='my-4 w-5/6 md:w-3/4' ></iframe> */}
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full p-5 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className="text-base font-bold md:text-xl mr-2">{project.name}</div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc text-base md:text-lg mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => (
                                                <img style={{height: 35, margin: 5}} key={index} src={domain} />
                                            )) : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}