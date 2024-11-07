import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate Mobile Team Lead and app developer with a talent for building high-performance, user-centric mobile applications. With over five years of hands-on experience in Flutter, Android, and iOS, I have mastered front-end and back-end mobile technologies, including Kotlin, Java, Swift, and Dart. My goal is to leverage my skills in clean architecture and SOLID principles to develop innovative solutions that enhance user engagement and drive business success. Alongside my professional work, I’m dedicated to teaching and mentoring aspiring developers in Native Android and Flutter app development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2021 - Present",
    role: "Mobile Team Lead",
    company: "Code Himalaya",
    description: `As the Mobile Team Lead at Code Himalaya, I drive excellence in mobile application development by leading agile teams of Android, iOS, and Flutter developers. I oversee the complete development lifecycle, from project planning to execution, ensuring the delivery of innovative, high-quality mobile solutions that enhance user experiences across platforms.`,
    technologies: ["Flutter", "Android", "iOS", "CI/CD", "GraphQL", "Strapi"],
  },
  {
    year: "Sep 2023 - Present",
    role: "College Lecturer",
    company: "Medhavi College",
    description: `As an engaging Programming Instructor at Medhavi College, I foster a love for logic through interactive Java and JavaScript instruction. My teaching empowers students to build and experiment from the ground up, preparing them for careers in software development.`,
    technologies: ["Mobile Programming", "Core Java", "JavaScript", "React"],
  },
  {
    year: "Dec 2018 - Aug 2021",
    role: "Professional Freelancer",
    company: "Self Employed",
    description: `As a Professional Freelancer, I provided mentorship in native Android and Flutter development, guiding students from fundamentals to advanced concepts. I supervised final year projects to meet academic and industry standards and successfully completed diverse freelance projects, including ecommerce, ride-sharing, and hotel booking applications, ensuring client satisfaction.`,
    technologies: ["Android", "Flutter", "iOS"],
  },
  {
    year: "Jul 2020 - Jun 2021",
    role: "Software Developer III",
    company: "Nepali Coders",
    description: `In my role as Software Developer III at Nepali Coders, I independently managed native Android and iOS projects for US clients, utilizing Java, Kotlin, Swift, and SwiftUI. I ensured seamless performance and user experience across platforms while collaborating with cross-functional teams to effectively meet project requirements and deadlines.`,
    technologies: ["Android", "iOS", "Flutter", "SwiftUI"],
  },
  {
    year: "Dec 2016 - Mar 2019",
    role: "Software Developer",
    company: "DreamSys IT Solution Pvt Ltd",
    description: `Starting as an intern, I progressed to Software Developer at DreamSys IT Solution Pvt Ltd, showcasing continuous growth and dedication. I developed expertise in Android and iOS platforms using Java, Kotlin, and Swift, ensuring high performance and user satisfaction in mobile application projects.`,
    technologies: ["Android", "iOS", "Flutter",],
  },
];

export const PROJECTS = [
  {
    title: "Divine",
    image: project1,
    description:
      "Divine is a spiritual app aimed at fostering positivity in users' daily lives. It provides daily quotes from Jagadguru Shri Kripalu Ji Maharaj and includes a 24/7 divine radio feature.",
    technologies: ["Flutter", "Firebase", "Streaming Software", "Rest API", "NoSQL"],
    link: "https://dycn.org/",
  },
  {
    title: "MyMoneyMantra",
    image: project2,
    description:
      "Mymoneymantra loan app is one of the best personal loan, instant personal loan, small personal loan, student personal loan, online loan, quick personal loan app in India. It helps users provide fast approval and quick disbursals.",
    technologies: ["Flutter", "Firebase", "Push Notifications", "GraphQL", "Rest API"],
    link: "https://www.mymoneymantra.com/",
  },
  {
    title: " Earntra: Sell Loans & Cards ",
    image: project3,
    description:
      "Earntra is a mobile app by Raaj Khosla & Co PVT LTD (MyMoneyMantra) for selling credit cards and loans digitally. It's India's largest phygital financial marketplace, suitable for experienced salespeople and newcomers alike. Users can submit applications, track leads, and earn commissions. The app offers partnerships with major banks and financial institutions, providing free online training for certification.It allows users to start their own business quickly, with potential for high earnings.",
    technologies: ["Flutter", "Firebase", "Push Notifications", "GraphQL", "Rest API"],
    link: "https://www.earntra.club/",
  },
  {
    title: "MoFinTech",
    image: project4,
    description:
      "At MoFinTech, we craft innovative, integrated software solutions, Mobile Banking platforms, and services to cater to Banking and Financial Institutions across the globe, taking care of their domain-specific challenges and fast-paced industry trends.",
    technologies: ["Flutter", "Firebase", "Push Notifications", "Rest API", "Payment Gateway"],
    link: "https://mo-finance.com/",
  },
  {
    title: "Kash4me",
    image: project5,
    description:
      "Kash4me brings you the platform to earn from each purchase you make. Find the stores with best cashback deals and offers near you and collect the digital loyalty cards( cashback cards) in one place. Have a look at Kash4me app just before heading out for shopping and start earning right from your very first purchase.",
    technologies: ["Native Android", "Kotlin", "Live Data", "Retrofit", "Rest API"],
    link: "https://kash4me.com/",
  }
];

export const SKILLS = [
  {
    name: 'Flutter',
    color: '#02569B',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
      </svg>
    )
  },
  {
    name: 'Android',
    color: '#3DDC84',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4094 13.8533 8 12 8s-3.5902.4094-5.1367.9597L4.841 5.4566a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152.5676l1.9973 3.4592C2.7563 11.0681 0 13.5732 0 18h24c0-4.4268-2.7563-6.9319-6.1185-8.6786" />
      </svg>
    )
  },
  {
    name: 'iOS',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    )
  },
  {
    name: 'CI/CD',
    color: '#4BC0D9',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm.93 18.953v-2.998a.962.962 0 0 0-.93-.995.962.962 0 0 0-.93.995v2.998A9.003 9.003 0 0 1 5.026 12.91h2.998a.962.962 0 0 0 .995-.93.962.962 0 0 0-.995-.93H5.026A9.003 9.003 0 0 1 11.07 5.007v2.998a.962.962 0 0 0 .93.995.962.962 0 0 0 .93-.995V5.007a9.003 9.003 0 0 1 6.044 6.044h-2.998a.962.962 0 0 0-.995.93.962.962 0 0 0 .995.93h2.998a9.003 9.003 0 0 1-6.044 6.043z" />
      </svg>
    )
  },
  {
    name: 'GraphQL',
    color: '#E535AB',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0-9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542 3.297H11.46v11.369h2.082V8.228zm-6.465 0H5.495v11.369h2.082V8.228zm8.415 2.269l-1.803 1.803 4.746 4.746 1.803-1.803-4.746-4.746zm-10.362 0L3.692 15.243l1.803 1.803 4.746-4.746-1.803-1.803z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512.00 512.00" width="24px" height="24px" fill="#ffffff" stroke="#ffffff" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>

    )
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
      </svg>
    )
  },
];

export const CONTACT = {
  address: "Kathmandu, Nepal",
  phoneNo: "+977-9846815406",
  email: "binranabhat@gmail.com",
};
