// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A collection of some personal projects hosted on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Overview of the courses I have been involved in teaching at the **University of Kent**, organised by academic year and course level.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-accepted-into-ieee-csr-2024-conference-identifying-novelty-in-network-traffic",
          title: 'Paper accepted into IEEE CSR 2024 conference (Identifying Novelty in Network Traffic)',
          description: "",
          section: "News",},{id: "news-presented-my-paper-at-the-ieee-csr-2024-conference-identifying-novelty-in-network-traffic",
          title: 'Presented my paper at the IEEE CSR 2024 conference (Identifying Novelty in Network...',
          description: "",
          section: "News",},{id: "news-began-job-working-as-a-researcher-alongside-the-alan-turing-institute",
          title: 'Began job working as a researcher alongside the Alan Turing Institute.',
          description: "",
          section: "News",},{id: "news-paper-accepted-into-autonomouscyber-2025-workshop-co-located-with-esorics-2025-knowledge-retention-for-generic-reinforcement-learning-policies-in-autonomous-cyber-defence",
          title: 'Paper accepted into AutonomousCyber 2025 workshop co-located with ESORICS 2025 (Knowledge Retention for...',
          description: "",
          section: "News",},{id: "news-paper-accepted-into-autonomouscyber-2025-workshop-co-located-with-esorics-2025-for-my-paper-titled-knowledge-retention-for-generic-reinforcement-learning-policies-in-autonomous-cyber-defence",
          title: 'Paper accepted into AutonomousCyber 2025 workshop co-located with ESORICS 2025 for my paper...',
          description: "",
          section: "News",},{id: "news-presented-my-paper-at-the-autonomouscyber-2025-workshop-co-located-with-esorics-2025-knowledge-retention-for-generic-reinforcement-learning-policies-in-autonomous-cyber-defence",
          title: 'Presented my paper at the AutonomousCyber 2025 workshop co-located with ESORICS 2025 (Knowledge...',
          description: "",
          section: "News",},{id: "news-presented-my-paper-at-the-autonomouscyber-2025-workshop-co-located-with-esorics-2025-automated-cyber-defence-with-reinforcement-learning-in-multi-attack-environments",
          title: 'Presented my paper at the AutonomousCyber 2025 workshop co-located with ESORICS 2025 (Automated...',
          description: "",
          section: "News",},{id: "news-i-won-the-distinguished-paper-award-at-the-autonomouscyber-2025-workshop-co-located-with-esorics-2025-automated-cyber-defence-with-reinforcement-learning-in-multi-attack-environments",
          title: 'I won the distinguished paper award at the AutonomousCyber 2025 workshop co-located with...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
