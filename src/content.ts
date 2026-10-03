// =============================================================================
//  SITE CONTENT (English)
//  Edit this file to change what shows up on your website. The Korean version
//  lives in content.ko.ts — keep the two in sync when you add or remove items.
//
//  Tips:
//  - Text inside quotes can contain simple links: "I work at [Acme](https://acme.com)"
//    and small inline icons: "UT Austin ![Longhorns](/icons/longhorn.png)"
//  - To add an item (a job, a project, a bullet), copy an existing { ... } block,
//    paste it right after (keep the comma between blocks), and edit it.
//  - To remove an item, delete its whole { ... } block.
//  - Images go in the /public folder. "/headshot.webp" means "public/headshot.webp".
// =============================================================================

export const content = {
  // --- Labels (navigation, section headings, and small UI text) -------------
  labels: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    publications: "Publications",
    papers: "Papers",
    patents: "Patents",
    essays: "Essays",
    skipToContent: "Skip to Content",
    viewResume: "View Full Résumé",
    technologiesUsed: "Technologies used",
    socialMedia: "Social media",
    photoAlt: "Photo of Michael Park",
    photoCredit: "Image",
    showAll: "All",
    projectKeywords: "Keywords",
    filterProjects: "Filter projects by category",
    inProgress: "In progress",
  },

  // --- About (top of the page) ----------------------------------------------
  name: "Michael Park",
  altName: "Junbeom Park", // optional smaller line under your name; "" hides it
  title: "AI/ML & Robotics Engineer",
  tagline: "", // optional one-liner under your title; "" hides it

  // Your photo, in /public (e.g. public/me.jpg -> "/me.jpg"). Also used on the link-preview image.
  photo: "/headshot.webp",

  // Short bullet-point bio shown under your photo.
  // A line can be plain text, or { text, items } to add indented sub-bullets.
  bio: [
    "AI/ML Engineer at Winitech",
    "Previously Robotics Research Engineer at\nGeorgia Tech Research Institute (GTRI)",
    "Principal Investigator on 2 funded research grants",
    {
      text: "Awards",
      items: [
        "Star Performer Award, GTRI (2020)",
        "1st Place, NXP Cup Challenge – Amateur Division (2016)",
        "1st Place, UT Austin Senior Design (2016)",
        "School Winner, American Mathematics Competitions (2010)",
      ],
    },
    {
      text: "Education",
      items: [
        "M.S. ECE, Georgia Tech ![Yellow Jackets](/icons/yellowjacket.png)",
        "B.S. ECE, UT Austin ![Longhorns](/icons/longhorn.png)",
      ],
    },
    // "Based in South Korea – relocating to the Bay Area or NYC",
    "Into snowboarding – posi-posi (42°/27°)",
  ],

  // Social icons. Supported icons: github, linkedin, x, email, instagram,
  // youtube, website. Delete any line you don't need.
  socials: [
    { icon: "github", url: "https://github.com/michae1park" },
    // { icon: "linkedin", url: "https://www.linkedin.com/in/michael-park-v" }, // hidden until profile is updated
    { icon: "email", url: "mailto:parkmjb@gmail.com" },
  ],

  // Link to your résumé. Put a PDF in /public and use "/resume.pdf".
  // Leave it as "" to hide the "View Full Résumé" link.
  resume: "",

  // --- Experience section ---------------------------------------------------
  // "url" is optional — add a url: "https://..." line to link a job.
  experience: [
    {
      dates: "Aug 2023 — Present",
      role: "AI/ML Engineer",
      company: "Winitech",
      description:
        "Led R&D of the company's first in-house AI product, a server-based speech-to-text engine, working directly with the R&D director; the engine has since been commercialized and is used in production. Applied systematic performance evaluation throughout development and engineered the engine for stable long-duration operation. Also built LLM-based software that analyzes unstructured text and turns it into structured outputs.",
      skills: ["Python", "PyTorch", "Hugging Face", "Whisper", "vLLM", "Ollama", "ONNX Runtime", "LangChain", "sentence-transformers", "FAISS", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
      dates: "Mar 2018 — Jul 2023",
      role: "Robotics Research Engineer",
      company: "Georgia Tech Research Institute (GTRI)",
      description:
        "Researched and developed autonomous robots across vision, learning, planning, control, and system integration, spanning the full R&D process, from applying and improving state-of-the-art technologies to field trials for commercialization. Principal Investigator on two funded projects and Co-PI on a third.",
      skills: ["ROS", "C++", "Eigen", "Python", "PyTorch", "OpenCV", "YOLO", "PCL", "Open3D", "RGB-D cameras", "TensorRT", "NVIDIA Jetson", "MoveIt", "move_base", "Gazebo", "RViz"],
    },
    {
      dates: "Aug — Dec 2017",
      role: "Research Assistant",
      company: "Healthcare Robotics Lab, Georgia Tech",
      description:
        "Applied deep learning to perception for assistive mobile manipulation robots.",
      skills: ["Python", "Keras", "ROS", "librosa", "scikit-learn", "NumPy"],
    },
    {
      dates: "Jan — Nov 2015",
      role: "Embedded Software Co-op",
      company: "MKS Instruments",
      description:
        "Developed embedded software and test tooling for industrial instrumentation.",
      skills: ["C", "Python", "Microcontrollers", "RTOS"],
    },
  ],

  // --- Projects section -----------------------------------------------------
  // The buttons at the top of the section, in this order; the first one is
  // what visitors see first. An "All" button is added at the end. A project's
  // "categories" lists every button it shows under, using the ids below, and
  // projects show in the order they're listed here.
  projectCategories: [
    { id: "featured", name: "Featured" },
    { id: "nlp", name: "NLP & Audio" },
    { id: "vision", name: "Computer Vision" },
    { id: "robotics", name: "Robotics" },
    { id: "embedded", name: "Hardware & Embedded" },
  ],

  // "image" and "links" are optional — delete a line to leave it out.
  // "links" are the labeled links under the description (Video, Paper, Code, ...);
  // the project title itself isn't a link.
  // "inProgress: true" greys a project out with an "In progress" badge.
  // "role" adds a badge after the title (PI, Co-PI, Solo); "years" shows under it.
  // "hidden: true" keeps a project here but off the page.
  // "extraImages" stacks more pictures under the first (e.g. close-ups).
  // "imageCredit" shows a small "Image: ..." credit under the picture(s);
  // "imageCreditUrl" links that credit to the photo's source.
  // "tags" are keywords shown on the card; "skills" are the tools used.
  projects: [
    {
      name: "Prompt-Driven 3D Perception and Pick-and-Place",
      years: "2026",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/visual-prompt-pick-place.webp",
      description:
        "Vision-based pick-and-place robot in Isaac Sim that recognizes target objects from a single image or a text prompt, then grasps them and places them on a shelf, with no object-specific training and no predefined shelf model. I designed and built the full 3D perception pipeline, from object detection and pose estimation to grasp and placement planning, and connected it to robot motion planning and control. I validated each stage and the full task against Isaac Sim's ground truth.",
      links: [{ label: "Code", url: "https://github.com/Michae1Park/prompt-pick-place" }],
      tags: ["visual prompting", "open-vocabulary detection", "instance segmentation", "6DoF pose estimation", "3D perception", "grasp pose estimation", "placement estimation", "spatial perception", "robot manipulation", "pick-and-place", "simulation", "YCB dataset"],
      skills: ["Python", "C++", "PyTorch", "OpenCV", "Eigen", "YOLOE", "FoundationPose", "ROS2", "MoveIt2", "BehaviorTree.CPP", "Isaac Sim", "Docker"],
    },
    {
      name: "Edge Voice",
      years: "2026",
      categories: ["featured", "nlp", "embedded"],
      image: "/projects/edge-voice.webp",
      description:
        "Real-time speech transcription that runs on edge devices using only the CPU, with no GPU, cloud, or network connection. It handles multiple audio channels in real time, supports English and Korean, and shows partial transcripts while people are still speaking. I designed and built the whole system, from the streaming pipeline to on-device deployment that recovers automatically from failures.",
      links: [{ label: "Code", url: "https://github.com/Michae1Park/edge-voice" }],
      tags: ["on-device STT", "streaming ASR", "voice activity detection", "edge inference", "real-time systems"],
      skills: ["Python", "PyTorch", "ONNX Runtime", "Silero VAD", "Moonshine", "MQTT", "FastAPI"],
    },
    {
      name: "Orchard Thinning Robot",
      years: "2021",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/orchard-thinning.webp",
      extraImages: ["/projects/orchard-thinning-2.webp"],
      imageCredit: "Ai-Ping Hu",
      description:
        "Autonomous mobile robot that thins peachlets and prunes peach trees in orchards. It self-navigates through the orchard and steers clear of obstacles using LIDAR and high-precision GPS accurate to a fraction of an inch; at each tree, an embedded 3D camera determines which peachlets to remove, using deep learning to recognize them, and a claw-like end effector on its arm removes them. I developed the peachlet recognition, the arm control, and the LIDAR- and GPS-based navigation, and ran the field tests in a research-farm orchard.",
      links: [
        { label: "Video", url: "https://www.youtube.com/watch?v=ddSYhLFR7CE" },
        { label: "Article", url: "https://istd.gatech.edu/peachy-robot-glimpse-peach-orchard-future/" },
      ],
      tags: ["image recognition", "deep learning", "3D perception", "LIDAR", "GPS navigation", "obstacle avoidance", "manipulation", "field testing"],
      skills: ["ROS", "RViz", "MoveIt", "move_base", "C++", "Eigen", "Python", "PyTorch", "YOLO", "TensorRT", "NVIDIA Jetson"],
    },
    {
      name: "Egg-Picking Mobile Robot",
      years: "2021–2023",
      role: "Co-PI",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/poultry-house-robot.webp",
      extraImages: ["/projects/poultry-house-robot-dock.webp"],
      imageCredit: "GTRI",
      description:
        "Autonomous robot that navigates commercial poultry houses, finds floor eggs, and picks them up, with automatic docking and charging and scheduled runs. I came to own the whole system, from egg detection and picking to localization and navigation, and took it from the lab to the field, running field trials in a commercial broiler breeder house that reached 85% egg detection accuracy and 91% pick success.",
      links: [
        { label: "Project page", url: "https://atrp.gatech.edu/robotics-automation/" },
        { label: "Abstract", url: "/papers/2023-psa-egg-picking-robot.pdf" },
      ],
      tags: ["object detection", "3D perception", "mobile manipulation", "localization", "autonomous navigation", "field testing"],
      skills: ["ROS", "RViz", "move_base", "C++", "Eigen", "Python", "PyTorch", "YOLO", "TensorRT", "NVIDIA Jetson"],
    },
    {
      name: "First-Aid Assistant Robot",
      years: "2022",
      categories: ["featured", "vision", "nlp", "robotics"],
      image: "/projects/first-aid-robot.webp",
      extraImages: ["/projects/first-aid-robot-2.webp"],
      description:
        "Mobile manipulator that assists with first-aid tasks, controlled through hand gesture recognition and natural language commands. It carries first-aid items on a tray and fetches them on request, and helps support the patient, such as holding a limb steady while the responder works, demonstrated on a medical dummy.",
      tags: ["hand gesture recognition", "natural language", "human-robot interaction", "mobile manipulation", "first aid"],
      skills: ["ROS", "Python", "PyTorch", "NVIDIA Jetson"],
    },
    {
      name: "Robotic Chicken Breast Deboning",
      years: "2018–2023",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/deboning.webp",
      extraImages: ["/projects/deboning-2.webp"],
      imageCredit: "GTRI",
      description:
        "Robot that debones chicken breasts, developed in two phases. **Phase 1, commercial pilot:** a vision-guided robotic cutting system, installed and tested on a commercial deboning line. I came to own the whole pipeline, integrated the system, and ran the pilot tests. **Phase 2, learning from demonstration (lab):** I made the cuts learned instead of hand-programmed: a custom knife tool with ArUco markers and an IMU recorded expert deboners' cuts, machine learning linked each bird's external features to the expert's knife path, and a 6-DoF robot arm performed the learned cuts with smoother, more natural motion than hand-programmed ones.",
      links: [
        { label: "Project page", url: "https://atrp.gatech.edu/robotics-automation/" },
        { label: "LfD article", url: "/papers/2022-poultrytech-lfd.pdf" },
      ],
      tags: ["computer vision", "learning from demonstration", "motion tracking", "manipulation", "system integration"],
      skills: ["ROS", "RViz", "C++", "Eigen", "Python", "PyTorch"],
    },
    {
      name: "Task and Motion Planning for Manipulation",
      years: "2020–2021",
      categories: ["robotics"],
      image: "/projects/tamp-hardware.webp",
      description:
        "Task and motion planning framework for long-horizon manipulation in dynamic environments: a PDDL symbolic planner chooses the sequence of actions, and DDP-ADMM trajectory optimization plans each motion, including contact-aware grasping and pushing, for tasks like sorting objects in clutter and on a moving conveyor belt. I implemented the DDP trajectory optimization in Drake and ran the simulations and hardware tests.",
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/ACCESS.2021.3112879" },
        { label: "Video", url: "https://www.youtube.com/watch?v=FqrJ73xbfPc" },
        { label: "Code", url: "https://github.com/GTLIDAR/tamp-manipulation" },
      ],
      tags: ["task and motion planning", "PDDL", "trajectory optimization", "DDP", "bilevel optimization", "contact-rich manipulation"],
      skills: ["C++", "Python", "Drake", "Eigen", "qpOASES", "LCM", "Bazel"],
    },
    {
      name: "Peanut Visual Inspection",
      years: "2018–2019",
      categories: ["vision"],
      image: "/projects/peanut-inspection.svg",
      description:
        "Machine vision system that automates peanut grading by sorting out defective peanuts. Field-tested; I wrote all of the software.",
      links: [{ label: "News", url: "https://www.gfb.org/news/gfb-news-magazine/post/peanut-grading-redesign-progresses" }],
      tags: ["machine vision", "image classification", "real-time systems"],
      skills: ["Python", "Keras", "C++"],
    },
    {
      name: "Multimodal Failure Prediction",
      years: "2017",
      categories: ["vision", "nlp", "robotics"],
      image: "/projects/multimodal-failure-prediction.svg",
      description:
        "Deep learning model (stacked LSTM and fully connected layers) that fuses audio (MFCC) and visual (AR marker) signals as the perception an assistive robot needs to detect and anticipate failures in a household manipulation task. It reconstructs a missing modality from the one still working, and forecasts both up to 0.5 s ahead, giving a robot time to stop or replan before something goes wrong.",
      links: [{ label: "Code", url: "https://github.com/gt-ros-pkg/hrl-assistive/tree/indigo-devel/hrl_multimodal_prediction" }],
      tags: ["sensor fusion", "time-series forecasting", "failure detection", "LSTM", "MFCC", "AR markers"],
      skills: ["ROS", "Python", "Keras", "librosa", "scikit-learn"],
    },
    {
      name: "10k AI",
      hidden: true,
      years: "2026",
      categories: ["nlp"],
      inProgress: true,
      image: "/projects/project-3.svg",
      description:
        "Question answering over annual reports, with every answer grounded in retrieved passages.",
      tags: ["RAG", "grounded QA", "vLLM"],
      skills: ["Python", "Docker"],
    },
    {
      name: "Hand-Held Poultry Trimming Device",
      years: "2021–2023",
      role: "PI",
      categories: ["embedded"],
      image: "/projects/trimming-testing.webp",
      extraImages: ["/projects/trimming-tool-photo.webp"],
      imageCredit: "GTRI",
      description:
        "Hand-held rotary tool that removes wishbones and cartilage from chicken breast meat, a job normally done slowly with a blade knife. I identified the problem, wrote the proposal and secured funding, and led a team of three, working with industry partners and stakeholders from concept through testing. Against a blade knife, the tool cut trimming time by about 40% and lost less meat, and the design is now a pending patent.",
      links: [
        { label: "Patent", url: "https://patents.google.com/patent/WO2023215772A1/en" },
        { label: "Abstract", url: "/papers/2023-psa-trimming-device.pdf" },
      ],
      tags: ["project leadership", "grant writing", "industry collaboration", "product development", "performance evaluation"],
      skills: [],
    },
    {
      name: "NXP Cup Autonomous Car",
      years: "2016",
      categories: ["robotics", "embedded"],
      image: "/projects/nxp-cup-track.webp",
      imageCredit: "DAC",
      imageCreditUrl: "https://www.facebook.com/dacthechipstosystemsconference/videos/617140158445659/",
      description:
        "Autonomous model car that follows the track with a line-scan camera, built by a team of four for the 2016 NXP Cup Challenge at DAC, where we took 1st place in the amateur division. I wrote the line-scan camera processing that finds the track and the proportional (P) steering controller.",
      links: [
        { label: "Code", url: "https://github.com/Michae1Park/NXPCup" },
        { label: "News", url: "https://x.com/ARMEducation/status/740913745073995776" },
        { label: "News (screenshot)", url: "/docs/2016-nxpcup-arm-education-post.webp" },
      ],
      tags: ["line-scan camera", "signal processing", "P control", "microcontroller"],
      skills: ["C++", "Arm Mbed", "NXP KL25Z"],
    },
    {
      name: "Batteryless Wireless Implant",
      years: "2016",
      categories: ["embedded"],
      image: "/projects/batteryless-implant.webp",
      imageCredit: "UT Austin ECE",
      imageCreditUrl: "https://www.flickr.com/photos/utece/albums/72157673237077994/",
      description:
        "Batteryless, wireless implant that measures temperature and acceleration inside lab rats. A base station powers it and reads it over 13.56 MHz NFC, and a web app shows the data. I wrote the implant's microcontroller firmware in C, including reading its temperature sensor. Best Honors Senior Design Project, UT Austin ECE, 2016.",
      links: [
        { label: "News", url: "https://ece.utexas.edu/news/senior-design-showcase-features-capstone-design-projects" },
        { label: "Report", url: "/docs/2016-batteryless-implant-report.pdf" },
        { label: "Poster", url: "/docs/2016-batteryless-implant-poster.pdf" },
      ],
      tags: ["embedded systems", "chip programming", "firmware", "sensor interfacing"],
      skills: ["C"],
    },
    {
      name: "Smart Display",
      years: "2016",
      categories: ["embedded"],
      image: "/projects/smart-display.webp",
      imageCredit: "UT Austin ECE",
      imageCreditUrl: "https://www.flickr.com/photos/utece/albums/72157668180718675/",
      description:
        "Desk alarm clock that pulls live weather, calendar, stock, and news data over Wi-Fi onto an LCD, built on a TM4C123 microcontroller and a custom PCB. I wrote the system software, including the Wi-Fi and LCD drivers, and built the prototype.",
      links: [{ label: "Video", url: "https://www.youtube.com/watch?v=H84XfKYSuqw" }],
      tags: ["embedded systems", "device drivers", "interrupts", "IoT"],
      skills: ["C"],
    },
  ],

  // --- Publications section -------------------------------------------------
  // Wrap your own name in **double asterisks** to make it bold.
  // "url" is optional — delete that line if there's no link.
  publications: [
    {
      year: "2023",
      title: "A Specialized Hand-Held Trimming Device for Removing Wishbones and Cartilages from Poultry Breast Meat",
      authors: "**Michael Park**, S. L. Thomas, A. Giorges",
      venue: "Poultry Science Association Annual Meeting, Abstract 510P",
      url: "/papers/2023-psa-trimming-device.pdf",
    },
    {
      year: "2023",
      title: "Field Trial Results of an Automated Egg Picking Robot for Commercial Broiler Breeder Flocks",
      authors: "C. Usher, **Michael Park**, Y. H. He",
      venue: "Poultry Science Association Annual Meeting, Abstract 321",
      url: "/papers/2023-psa-egg-picking-robot.pdf",
    },
    {
      year: "2022",
      title: "Using Learning from Demonstration (LfD) to Train Robots for Complex Poultry Processing Tasks",
      authors: "**Michael Park**",
      venue: "PoultryTech, vol. 34, no. 1, p. 3",
      url: "/papers/2022-poultrytech-lfd.pdf",
    },
    {
      year: "2022",
      title: "Artificial Intelligence, Sensors, Robots, and Transportation Systems Drive an Innovative Future for Poultry Broiler and Breeder Management",
      authors: "**Michael Park**, D. Britton, W. Daley, G. McMurray, M. Navaei, A. Samoylov, C. Usher, J. Xu",
      venue: "Animal Frontiers, vol. 12, no. 2, pp. 40–48",
      url: "https://doi.org/10.1093/af/vfac001",
    },
    {
      year: "2021",
      title: "SyDeBO: Symbolic-Decision-Embedded Bilevel Optimization for Long-Horizon Manipulation in Dynamic Environments",
      authors: "Z. Zhao, Z. Zhou, **Michael Park**, Y. Zhao",
      venue: "IEEE Access, vol. 9, pp. 128817–128826",
      url: "https://doi.org/10.1109/ACCESS.2021.3112879",
    },
  ],

  // --- Patents (shown under Publications, after the papers) ------------------
  // Wrap your own name in **double asterisks** to make it bold.
  // "url" is optional — delete that line if there's no link.
  patents: [
    {
      year: "2023",
      title: "Trimming Systems and Methods",
      authors: "S. L. Thomas, A. Giorges, **Michael Park**",
      number: "U.S. Patent Application No. 18/862,441",
      status: "Pending",
      url: "https://thepatentplace.com/iplibrary/patent-application/18862441",
    },
    {
      year: "2015",
      title: "Distribution-Type Thermocouple Sensor and Thermocouple-Based Distribution-Type Temperature Measurement System Using Same",
      authors: "J. Park, M. Kim, J. Kim, **Junbeom Park**, J. Lee",
      number: "Korean Patent No. 10-1520384",
      status: "Granted",
      url: "https://patents.google.com/patent/KR101520384B1/ko",
    },
  ],

  // --- Essays section -------------------------------------------------------
  // Each essay links out to wherever it's published (Medium, Substack, etc.).
  // "description" is optional.
  essays: [
    // {
    //   date: "2026",
    //   title: "What I Learned Shipping Real-World ASR",
    //   url: "https://example.com",
    //   description:
    //     "Lessons from taking speech recognition out of the lab and into production.",
    // },
  ],
};

type Essay = { date: string; title: string; url: string; description?: string };

// Every project field, spelled out so both language files are checked against
// the same shape (rather than whatever mix of fields the English list happens to use).
type Project = {
  name: string;
  categories: string[];
  inProgress?: boolean;
  // Keeps the project in this file but off the page.
  hidden?: boolean;
  // Shown as a badge after the title, e.g. "PI", "Co-PI", "Solo".
  role?: string;
  // Shown in small text under the title, e.g. "2021–2023".
  years?: string;
  image?: string;
  extraImages?: string[];
  imageCredit?: string;
  imageCreditUrl?: string;
  description: string;
  links?: { label: string; url: string }[];
  tags: string[];
  skills: string[];
};

// Essays can be an empty list, so its item type is spelled out here.
export type Content = Omit<typeof content, "essays" | "projects"> & {
  essays: Essay[];
  projects: Project[];
};
