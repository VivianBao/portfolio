export const icons = [{
  'Ruby': 'ruby-plain',
  'Rails': 'rails-plain-wordmark',
  'PostgreSQL': 'postgresql-plain-wordmark',
  'HTML5': 'html5-plain-wordmark',
  'CSS3': 'css3-plain-wordmark',
  'Javascript': 'javascript-plain',
  'Sass': 'sass-original',
  'Github':'github-original',
  'Git': 'git-plain',
  'Bootstrap': 'bootstrap-plain-wordmark',
  'Figma': 'figma-plain',
  'React':'react-original'
}];


export const featuredProjects = [
  {
    id: 1,
    title: 'Kikoemas+',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/kikoemas-mobile.png'})`,
        type: "mobile"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "A web app that helps Japanese high schoolers improve their mental health",
    roles: "Back-end Lead | UX Designer",
    code: "https://github.com/VivianBao/kikoemas",
    site: "https://www.kikoemas.com",
    sub_title: "Access to the help you need by a click",
    story: "As the final team project of Le Wagon Full-stack developer course, we decided to dedicate our web app to the improvement of mental health among Japanese high schoolers. With the pressure of furthering education, the signs of depression is particularly conspicuous in high schoolers among all students. And as Covid struck and caused further mental impact, the mental health of high schoolers was only worsening.<br/>To help students access the help they need, we created a platform for both students and counselors to help simplified the process and turn counseling assistance more accessible.",
    features: [
      {
        sub_title: "1. Direct Chats with Counselors",
        description: "For students who might need immediate attention, the direct chat option would help connect to an available counselor. Counselors would receive an alert and invite to the chatroom.<br/>To ease the anxiety of face-to-face interaction and thus provide a space where conversations are exchanged through text.<br/>After the chat, students are also given the option to book a session with the counselor if they would like to talk again."
      },
      {
        sub_title: "2. Counseling Sessions Booking",
        description: "Students can book a counseling session with the counselor and view their schedule on the booking tab for easy management. Counselors would also have a better understanding of their counseling schedule with the same feature."
      },
      {
        sub_title: "3. Daily Emotion Dairy & Monthly Reports",
        description: "Students are encouraged to leave a emoji stamp everyday to record how they’re feeling. Students would then receive monthly reports showing how their mood changes throughout the month according to these records."
      },
    ],
  },
  {
    id: 2,
    title: 'Barter',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/barter-mac.png'})`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "A platform for people to exchange goods without money",
    roles: "Back-end Lead | UX Designer",
    code: "https://github.com/VivianBao/BARTER",
    site: "https://barter-exchange.herokuapp.com",
    sub_title: "Find what you need, offer what you can",
    story: "This is not only the first team project of Le Wagon Full-stack developer course, but also the first team project on the personal level. The origin of “Barter” starts with the fact that in some areas during Covid, people would barter essential goods when shortage struck, but the lack of efficient communication means made an insufficient flow of information.<br/>To solve this problem, we came up with the idea to offer a platform for easy access to exchange information and management of exchange schedule.",
    features: [
      {
        sub_title:"1. Find What You Need",
        description: "You can find all the items that are up to be bartered on the homepage, or use the search bar to find the desired items."
      },
      {
        sub_title:"2. Offer Your Item",
        description: "Once you find the items you need, you can offer one of your own items to propose an exchange. "
      },
      {
        sub_title:"3. Approve Exchange",
        description: "You can view all the offers made to your items, and accept the exchange if you find the items offered to you acceptable."
      },
       {
        sub_title:"4. Exchange History",
        description: "You can view the upcoming exchange and your exchange history."
      },
    ],
  },
  {
    id: 3,
    title: 'Animu',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/animu-mac.png'})`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "Find your next anime series to binge and create your own watch lists",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/Animu",
    site: "https://animu-japan.herokuapp.com",
    sub_title: "Build Your Own Anime Library",
    story: "",
    features: [
      {
        sub_title:"",
        description: ""
      },
      {
        sub_title:"",
        description: ""
      },
      {
        sub_title:"",
        description: ""
      },
    ],
  }
];

export const railsProjects = [
  {
    id: 1,
    title: 'Kikoemas+',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/kikoemas-mobile.png'})`,
        type: "mobile"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "A web app that helps Japanese high schoolers improve their mental health",
    roles: "Back-end Lead | UX Designer",
    code: "https://github.com/VivianBao/kikoemas",
    site: "https://www.kikoemas.com",
    sub_title: "Access to the help you need by a click",
    story: "As the final team project of Le Wagon Full-stack developer course, we decided to dedicate our web app to the improvement of mental health among Japanese high schoolers. With the pressure of furthering education, the signs of depression is particularly conspicuous in high schoolers among all students. And as Covid struck and caused further mental impact, the mental health of high schoolers was only worsening.<br/>To help students access the help they need, we created a platform for both students and counselors to help simplified the process and turn counseling assistance more accessible.",
    features: [
      {
        sub_title: "1. Direct Chats with Counselors",
        description: "For students who might need immediate attention, the direct chat option would help connect to an available counselor. Counselors would receive an alert and invite to the chatroom.<br/>To ease the anxiety of face-to-face interaction and thus provide a space where conversations are exchanged through text.<br/>After the chat, students are also given the option to book a session with the counselor if they would like to talk again."
      },
      {
        sub_title: "2. Counseling Sessions Booking",
        description: "Students can book a counseling session with the counselor and view their schedule on the booking tab for easy management. Counselors would also have a better understanding of their counseling schedule with the same feature."
      },
      {
        sub_title: "3. Daily Emotion Dairy & Monthly Reports",
        description: "Students are encouraged to leave a emoji stamp everyday to record how they’re feeling. Students would then receive monthly reports showing how their mood changes throughout the month according to these records."
      },
    ],
  },
  {
    id: 2,
    title: 'Barter',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/barter-mac.png'})`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "A platform for people to exchange goods without money",
    roles: "Back-end Lead | UX Designer",
    code: "https://github.com/VivianBao/BARTER",
    site: "https://barter-exchange.herokuapp.com",
    sub_title: "Find what you need, offer what you can",
    story: "This is not only the first team project of Le Wagon Full-stack developer course, but also the first team project on the personal level. The origin of “Barter” starts with the fact that in some areas during Covid, people would barter essential goods when shortage struck, but the lack of efficient communication means made an insufficient flow of information.<br/>To solve this problem, we came up with the idea to offer a platform for easy access to exchange information and management of exchange schedule.",
    features: [
      {
        sub_title:"1. Find What You Need",
        description: "You can find all the items that are up to be bartered on the homepage, or use the search bar to find the desired items."
      },
      {
        sub_title:"2. Offer Your Item",
        description: "Once you find the items you need, you can offer one of your own items to propose an exchange. "
      },
      {
        sub_title:"3. Approve Exchange",
        description: "You can view all the offers made to your items, and accept the exchange if you find the items offered to you acceptable."
      },
       {
        sub_title:"4. Exchange History",
        description: "You can view the upcoming exchange and your exchange history."
      },
    ],
  },
  {
    id: 3,
    title: 'Animu',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/animu-mac.png'})`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "Find your next anime series to binge and create your own watch lists",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/Animu",
    site: "https://animu-japan.herokuapp.com",
    sub_title: "",
    story: "",
    features: [
      {
        sub_title:"",
        description: ""
      },
      {
        sub_title:"",
        description: ""
      },
      {
        sub_title:"",
        description: ""
      },
    ],
  },
  {
    id: 5,
    title: 'Task Manager',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/task-manager-mac.png'})`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap"],
    description: "Organize your daily tasks with Task Manager!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/rails-task-manager",
    site: "https://task-manager-vb.herokuapp.com/",
    sub_title: "",
    story: "",
    features: [
      {
        sub_title:"",
        description: ""
      },
      {
        sub_title:"",
        description: ""
      },
      {
        sub_title:"",
        description: ""
      },
    ],
  }
];

export const reactProjects = [
  {
    id: 4,
    title: 'Quizzical',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/quizzical-mobile.png'})`,
        type: "mobile"
      }
    ],
    tags: ["React", "HTML5", "CSS3", "Javascript", "Sass", "Figma"],
    description: "Test your knowledge on a variety of fields!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/react-quizzical",
    site: "https://quizzical-anime.herokuapp.com/",
    sub_title: "Test Your Knowledge in Anime",
    story: "This project is originated from the exercises from Learn React tutorial from scrimba. A simple but fun quiz generator with a collection of questions about anime.",
    features: [
      {
        sub_title:"1. Start Quiz",
        description: ""
      },
      {
        sub_title:"2. Select Answer",
        description: ""
      },
      {
        sub_title:"3. Check Answer",
        description: ""
      },
    ],
  },
  {
    id: 6,
    title: 'Tenzies',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/tenzies-mac.png'})`,
        type: "desktop"
      }
    ],
    tags: ["React", "HTML5", "CSS3", "Javascript", "Sass", "Figma"],
    description: "Come play tenzies and see your best record!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/react-tenzies-game",
    site: "https://fun-tenzies.herokuapp.com",
    sub_title: "Can You Be Faster?",
    story: "This project is originated from the exercises from Learn React tutorial from scrimba. Tenzies is a game that tests your reflex. To win this game, you need to roll the dices until they are of the same number, and the less time you take the better!",
    features: [
      {
        sub_title:"1. Click and freeze dices to lock the number",
        description: ""
      },
      {
        sub_title:"2. Click the roll button to roll the dices that aren’t locked",
        description: ""
      },
      {
        sub_title:"3. Try to break your personal record!",
        description: ""
      },
    ],
  },
];
