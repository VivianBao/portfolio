export const icons = [{
  'Ruby': 'ruby-plain',
  'Rails': 'rails-plain-wordmark',
  'PostgreSQL': 'postgresql-plain-wordmark',
  'Javascript': 'javascript-plain',
  'React.js':'react-original',
  'Express.js': 'express-original',
  'Git': 'git-plain',
  'Github':'github-original',
  'HTML5': 'html5-plain-wordmark',
  'CSS3': 'css3-plain-wordmark',
  'Sass': 'sass-original',
  'Bootstrap': 'bootstrap-plain-wordmark',
  'Figma': 'figma-plain',
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
    story: "As the final team project of Le Wagon Full-stack developer course, we decided to dedicate our web app to the improvement of mental health among Japanese high schoolers. With the pressure of furthering education, the signs of depression is particularly conspicuous in high schoolers among all students. And as Covid struck and caused further mental impact, the mental health of high schoolers was only worsening. To help students access the help they need, we created a platform for both students and counselors to help simplified the process and turn counseling assistance more accessible.",
    team: ["Vivian Bow", "Caio Santos", "Ryota Enoki", "Karen Joy Fujibayashi", "Renato Delboni"],
    features: [
      {
        sub_title: "1. Direct Chats with Counselors",
        description: "For students who might need immediate attention, the direct chat option would help connect to an available counselor. Counselors would receive an alert and invite to the chatroom. To ease the anxiety of face-to-face interaction and thus provide a space where conversations are exchanged through text. After the chat, students are also given the option to book a session with the counselor if they would like to talk again."
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
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/barter/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/3.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/4.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/5.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/6.png'}`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "Find what you need, offer what you can",
    roles: "Back-end Lead | UX Designer",
    code: "https://github.com/VivianBao/BARTER",
    site: "https://barter-exchange.herokuapp.com",
    sub_title: "Find what you need, offer what you can",
    story: "This is not only the first team project of Le Wagon Full-stack developer course, but also the first team project on the personal level. The origin of “Barter” starts with the fact that in some areas during Covid, people would barter essential goods when shortage struck, but the lack of efficient communication means made an insufficient flow of information. To solve this problem, we came up with the idea to offer a platform for easy access to exchange information and management of exchange schedule.",
    team: ["Vivian Bow", "Caio Santos", "Ryota Enoki", "Karen Joy Fujibayashi"],
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
    id: 7,
    title: 'Quote API',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/quote_api.png'})`,
        type: "desktop"
      }
    ],
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/quote-api/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quote-api/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quote-api/3.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quote-api/4.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quote-api/5.png'}`,
        type: "desktop"
      }
    ],
    tags: ["Express.js", "Javascript","HTML5", "CSS3", "Sass", "Figma"],
    description: "Your Personal Quote Library",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/quote-api",
    site: "",
    sub_title: "Store Your Inspiration",
    story: "This project expanded one of the exercises from codecady Full-stack Engineer course. “Quote API” project utilized routing in Express.js to create CRUD endpoints and realize the concept of a quote library.",
    features: [
      {
        sub_title:"1. Browse Quotes",
        description: "You can browse all the quotes in the collection. And if you’re looking for inspiration, you can get a quote randomly recommended by the system. You can also browse quotes by a particular person, you can find quotes by the author."
      },
      {
        sub_title:"2. Add a Quote",
        description: "If you encounter a quote that is inspirational to you, you can add a quote to the collection. "
      },
      {
        sub_title:"3. Edit a Quote",
        description: "Dread not if you have a typo in the quote you just add, you can edit a quote in the collection."
      },
      {
        sub_title:"4. Delete A Quote",
        description: "You can also delete a quote if you find you no longer need it."
      },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Animu',
  //   img: [
  //     {
  //       url: `url(${process.env.PUBLIC_URL + '/animu-mac.png'})`,
  //       type: "desktop"
  //     }
  //   ],
  //   tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
  //   description: "Find your next anime series to binge and create your own watch lists",
  //   roles: "Full Stack Developer",
  //   code: "https://github.com/VivianBao/Animu",
  //   site: "https://animu-japan.herokuapp.com",
  //   sub_title: "Build Your Own Anime Library",
  //   story: "",
  //   features: [
  //     {
  //       sub_title:"1. Create a Anime List",
  //       description: ""
  //     },
  //     {
  //       sub_title:"2. Add Anime to List",
  //       description: ""
  //     },
  //     {
  //       sub_title:"3. Browse the Recommended Anime",
  //       description: ""
  //     },
  //   ],
  // },
  {
    id: 5,
    title: 'Task Manager',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/task-manager-mac.png'})`,
        type: "desktop"
      }
    ],
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/task-manager/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/task-manager/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/task-manager/3.png'}`,
        type: "desktop"
      },
       {
        url: `${process.env.PUBLIC_URL + '/task-manager/4.png'}`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap"],
    description: "Organize your daily tasks with Task Manager!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/rails-task-manager",
    site: "https://task-manager-vb.herokuapp.com/",
    sub_title: "Your personal daily task manager",
    story: "A task list that helps you keep track of all your tasks of the day with a simple and elegant layout. All features are instinctive that help you add, edit, or remove a task. ",
    features: [
      {
        sub_title:"1. View Your Task List",
        description: "First thing you see on the homepage is a list of all your tasks. "
      },
      {
        sub_title:"2. Add or Edit a Task",
        description: "If you have a new task, click on the ‘Add New Task’ button to create one. You can click on the task on the list to see notes. And if you would like to edit the content of the task, click the ‘edit’ button."
      },
      {
        sub_title:"3. Check out a Task",
        description: "If you have completed a task, simply check the box and it will be marked as completed."
      },
      {
        sub_title:"4. Remove Completed Task",
        description: "At the end of the day, you can remove all the completed tasks from your list."
      }
    ],
  },
  {
    id: 4,
    title: 'Quizzical',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/quizzical-mobile.png'})`,
        type: "mobile"
      }
    ],
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/quizzical/1.png'}`,
        type: "mobile"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quizzical/2.png'}`,
        type: "mobile"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quizzical/3.png'}`,
        type: "mobile"
      }
    ],
    tags: ["React.js", "HTML5", "CSS3", "Javascript", "Sass", "Figma"],
    description: "Test your knowledge on a variety of fields!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/react-quizzical",
    site: "https://quizzical-anime.herokuapp.com/",
    sub_title: "Test Your Knowledge in Anime",
    story: "This project is originated from the exercises from Learn React tutorial from scrimba. A simple but fun quiz generator with a collection of questions about anime.",
    features: [
      {
        sub_title:"1. Select Answer",
        description: "Each quiz will have randomly generated questions about anime. Select the answer by clicking on the choice you decide to go with."
      },
      {
        sub_title:"2. Check Answer",
        description: "After you’re confident to submit your answers, click on the button and see how many points you score! You can always start a new quiz if you would like to challenge again."
      }
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
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/3.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/4.png'}`,
        type: "desktop"
      }
    ],
    tags: ["React.js", "HTML5", "CSS3", "Javascript", "Sass", "Figma"],
    description: "Come play tenzies and see your best record!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/react-tenzies-game",
    site: "https://fun-tenzies.herokuapp.com",
    sub_title: "Can You Be Faster?",
    story: "This project is originated from the exercises from Learn React tutorial from scrimba. Tenzies is a game that tests your reflex. To win this game, you need to roll the dices until they are of the same number, and the less time you take the better!",
    features: [
      {
        sub_title:"1. How it works",
        description: "To win this game, you need to roll the dices until they are of the same number."
      },
      {
        sub_title:"2. Lock a Dice",
        description: "Choose a number and click all the dices that are of the same number to lock them down, so they won’t be rolled along with unlocked dices."
      },
      {
        sub_title:"3. Roll",
        description: "Click on ‘Roll’ button to roll the unlocked dices, until all the dices are the same number."
      },
      {
        sub_title:"4. Try to break your personal record!",
        description: "A timer will go off once you start a game, and you will see your record once you win a game. It will also keep track of your best record, so keep trying!"
      }
    ],
  },
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
    story: "As the final team project of Le Wagon Full-stack developer course, we decided to dedicate our web app to the improvement of mental health among Japanese high schoolers. With the pressure of furthering education, the signs of depression is particularly conspicuous in high schoolers among all students. And as Covid struck and caused further mental impact, the mental health of high schoolers was only worsening. To help students access the help they need, we created a platform for both students and counselors to help simplified the process and turn counseling assistance more accessible.",
    team: ["Vivian Bow", "Caio Santos", "Ryota Enoki", "Karen Joy Fujibayashi", "Renato Delboni"],
    features: [
      {
        sub_title: "1. Direct Chats with Counselors",
        description: "For students who might need immediate attention, the direct chat option would help connect to an available counselor. Counselors would receive an alert and invite to the chatroom. To ease the anxiety of face-to-face interaction and thus provide a space where conversations are exchanged through text. After the chat, students are also given the option to book a session with the counselor if they would like to talk again."
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
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/barter/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/3.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/4.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/5.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/barter/6.png'}`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
    description: "A platform for people to exchange goods without money",
    roles: "Back-end Lead | UX Designer",
    code: "https://github.com/VivianBao/BARTER",
    site: "https://barter-exchange.herokuapp.com",
    sub_title: "Find what you need, offer what you can",
    story: "This is not only the first team project of Le Wagon Full-stack developer course, but also the first team project on the personal level. The origin of “Barter” starts with the fact that in some areas during Covid, people would barter essential goods when shortage struck, but the lack of efficient communication means made an insufficient flow of information. To solve this problem, we came up with the idea to offer a platform for easy access to exchange information and management of exchange schedule.",
    team: ["Vivian Bow", "Caio Santos", "Ryota Enoki", "Karen Joy Fujibayashi"],
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
  // {
  //   id: 3,
  //   title: 'Animu',
  //   img: [
  //     {
  //       url: `url(${process.env.PUBLIC_URL + '/animu-mac.png'})`,
  //       type: "desktop"
  //     }
  //   ],
  //   tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap", "Figma"],
  //   description: "Find your next anime series to binge and create your own watch lists",
  //   roles: "Full Stack Developer",
  //   code: "https://github.com/VivianBao/Animu",
  //   site: "https://animu-japan.herokuapp.com",
  //   sub_title: "",
  //   story: "",
  //   features: [
  //     {
  //       sub_title:"",
  //       description: ""
  //     },
  //     {
  //       sub_title:"",
  //       description: ""
  //     },
  //     {
  //       sub_title:"",
  //       description: ""
  //     },
  //   ],
  // },
  {
    id: 5,
    title: 'Task Manager',
    img: [
      {
        url: `url(${process.env.PUBLIC_URL + '/task-manager-mac.png'})`,
        type: "desktop"
      }
    ],
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/task-manager/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/task-manager/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/task-manager/3.png'}`,
        type: "desktop"
      },
       {
        url: `${process.env.PUBLIC_URL + '/task-manager/4.png'}`,
        type: "desktop"
      }
    ],
    tags: ["Ruby", "Rails", "PostgreSQL", "HTML5", "CSS3", "Javascript", "Sass", "Bootstrap"],
    description: "Organize your daily tasks with Task Manager!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/rails-task-manager",
    site: "https://task-manager-vb.herokuapp.com/",
    sub_title: "Your personal daily task manager",
    story: "A task list that helps you keep track of all your tasks of the day with a simple and elegant layout. All features are instinctive that help you add, edit, or remove a task. ",
    features: [
      {
        sub_title:"1. View Your Task List",
        description: "First thing you see on the homepage is a list of all your tasks. "
      },
      {
        sub_title:"2. Add or Edit a Task",
        description: "If you have a new task, click on the ‘Add New Task’ button to create one. You can click on the task on the list to see notes. And if you would like to edit the content of the task, click the ‘edit’ button."
      },
      {
        sub_title:"3. Check out a Task",
        description: "If you have completed a task, simply check the box and it will be marked as completed."
      },
      {
        sub_title:"4. Remove Completed Task",
        description: "At the end of the day, you can remove all the completed tasks from your list."
      }
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
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/quizzical/1.png'}`,
        type: "mobile"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quizzical/2.png'}`,
        type: "mobile"
      },
      {
        url: `${process.env.PUBLIC_URL + '/quizzical/3.png'}`,
        type: "mobile"
      }
    ],
    tags: ["React.js", "HTML5", "CSS3", "Javascript", "Sass", "Figma"],
    description: "Test your knowledge on a variety of fields!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/react-quizzical",
    site: "https://quizzical-anime.herokuapp.com/",
    sub_title: "Test Your Knowledge in Anime",
    story: "This project is originated from the exercises from Learn React tutorial from scrimba. A simple but fun quiz generator with a collection of questions about anime.",
    features: [
      {
        sub_title:"1. Select Answer",
        description: "Each quiz will have randomly generated questions about anime. Select the answer by clicking on the choice you decide to go with."
      },
      {
        sub_title:"2. Check Answer",
        description: "After you’re confident to submit your answers, click on the button and see how many points you score! You can always start a new quiz if you would like to challenge again."
      }
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
    img_gallery: [
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/1.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/2.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/3.png'}`,
        type: "desktop"
      },
      {
        url: `${process.env.PUBLIC_URL + '/tenzies/4.png'}`,
        type: "desktop"
      }
    ],
    tags: ["React.js", "HTML5", "CSS3", "Javascript", "Sass", "Figma"],
    description: "Come play tenzies and see your best record!",
    roles: "Full Stack Developer",
    code: "https://github.com/VivianBao/react-tenzies-game",
    site: "https://fun-tenzies.herokuapp.com",
    sub_title: "Can You Be Faster?",
    story: "This project is originated from the exercises from Learn React tutorial from scrimba. Tenzies is a game that tests your reflex. To win this game, you need to roll the dices until they are of the same number, and the less time you take the better!",
    features: [
      {
        sub_title:"1. How it works",
        description: "To win this game, you need to roll the dices until they are of the same number."
      },
      {
        sub_title:"2. Lock a Dice",
        description: "Choose a number and click all the dices that are of the same number to lock them down, so they won’t be rolled along with unlocked dices."
      },
      {
        sub_title:"3. Roll",
        description: "Click on ‘Roll’ button to roll the unlocked dices, until all the dices are the same number."
      },
      {
        sub_title:"4. Try to break your personal record!",
        description: "A timer will go off once you start a game, and you will see your record once you win a game. It will also keep track of your best record, so keep trying!"
      }
    ],
  },
];
