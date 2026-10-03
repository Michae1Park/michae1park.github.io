// =============================================================================
//  SITE CONTENT (Korean / 한국어)
//  The Korean version of content.ts, shown at /ko/. It must have the same
//  shape as content.ts — if you add or remove an item there, do the same here.
//  Organization names, publication titles, and venues are kept in English
//  since those are their official names.
// =============================================================================

import type { Content } from "./content";

export const contentKo: Content = {
  // --- Labels (navigation, section headings, and small UI text) -------------
  labels: {
    about: "소개",
    experience: "경력",
    projects: "프로젝트",
    publications: "논문·특허",
    papers: "논문",
    patents: "특허",
    essays: "에세이",
    skipToContent: "본문으로 건너뛰기",
    viewResume: "전체 이력서 보기",
    technologiesUsed: "사용 기술",
    socialMedia: "소셜 미디어",
    photoAlt: "Michael Park 사진",
    photoCredit: "이미지",
    showAll: "전체",
    projectKeywords: "키워드",
    filterProjects: "분야별 프로젝트 보기",
    inProgress: "진행 중",
  },

  // --- About (top of the page) ----------------------------------------------
  name: "박준범",
  altName: "Michael Park",
  title: "AI/ML & 로봇 엔지니어",
  tagline: "",

  photo: "/headshot.webp",

  bio: [
    "Winitech AI/ML 엔지니어",
    "전 Georgia Tech Research Institute (GTRI) 로봇 연구원",
    "연구비 지원 과제 2건 연구책임자(PI)",
    {
      text: "수상",
      items: [
        "GTRI Star Performer Award (2020)",
        "NXP Cup Challenge 아마추어 부문 1위 (2016)",
        "UT Austin 졸업 작품 1위 (2016)",
        "American Mathematics Competitions 교내 1위 (2010)",
      ],
    },
    {
      text: "학력",
      items: [
        "Georgia Tech 전기전자컴퓨터공학 석사 ![Yellow Jackets](/icons/yellowjacket.png)",
        "UT Austin 전기전자컴퓨터공학 학사 ![Longhorns](/icons/longhorn.png)",
      ],
    },
    // "한국 거주 – 베이 에어리어 또는 뉴욕으로 이주 예정",
    "취미: 스노우보드 (전향 42°/27°)",
  ],

  socials: [
    { icon: "github", url: "https://github.com/michae1park" },
    // { icon: "linkedin", url: "https://www.linkedin.com/in/michael-park-v" }, // hidden until profile is updated
    { icon: "email", url: "mailto:parkmjb@gmail.com" },
  ],

  resume: "",

  // --- Experience section ---------------------------------------------------
  experience: [
    {
      dates: "2023.08 — 현재",
      role: "AI/ML 엔지니어",
      company: "Winitech",
      description:
        "회사 최초의 자체 AI 제품인 서버 기반 음성 인식(STT) 엔진의 연구개발을 연구소장과 직접 협업하며 리드. 개발한 엔진은 상용화되어 현재 실제 서비스에 적용 중. 개발 과정에서 성능을 체계적으로 평가하고 장시간 동작 안정성까지 고려. 비정형 텍스트를 분석해 정형 데이터로 변환하는 LLM 기반 소프트웨어 개발.",
      skills: ["Python", "PyTorch", "Hugging Face", "Whisper", "vLLM", "Ollama", "ONNX Runtime", "LangChain", "sentence-transformers", "FAISS", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
      dates: "2018.03 — 2023.07",
      role: "로봇 연구원",
      company: "Georgia Tech Research Institute (GTRI)",
      description:
        "비전, 학습, 계획, 제어, 시스템 통합 전반에 걸친 자율 로봇 연구 개발. 최신 기술의 적용 및 개선부터 상용화를 위한 현장 시험까지 연구개발 전 과정을 수행. 연구 과제 2건의 책임연구원(PI)과 1건의 공동연구책임자(Co-PI)를 맡음.",
      skills: ["ROS", "C++", "Eigen", "Python", "PyTorch", "OpenCV", "YOLO", "PCL", "Open3D", "RGB-D cameras", "TensorRT", "NVIDIA Jetson", "MoveIt", "move_base", "Gazebo", "RViz"],
    },
    {
      dates: "2017.08 — 2017.12",
      role: "연구 조교",
      company: "Healthcare Robotics Lab, Georgia Tech",
      description:
        "보조용 모바일 매니퓰레이션 로봇의 인지(perception)에 딥러닝을 적용.",
      skills: ["Python", "Keras", "ROS", "librosa", "scikit-learn", "NumPy"],
    },
    {
      dates: "2015.01 — 2015.11",
      role: "임베디드 소프트웨어 인턴 (Co-op)",
      company: "MKS Instruments",
      description: "산업용 계측 장비의 임베디드 소프트웨어와 테스트 도구를 개발.",
      skills: ["C", "Python", "Microcontrollers", "RTOS"],
    },
  ],

  // --- Projects section -----------------------------------------------------
  // Category ids must match content.ts. Tags stay in English (technical terms).
  projectCategories: [
    { id: "featured", name: "대표 프로젝트" },
    { id: "nlp", name: "자연어·오디오" },
    { id: "vision", name: "컴퓨터 비전" },
    { id: "robotics", name: "로보틱스" },
    { id: "embedded", name: "하드웨어·임베디드" },
  ],

  projects: [
    {
      name: "프롬프트 기반 3D 인식 및 Pick-and-Place",
      years: "2026",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/visual-prompt-pick-place.webp",
      description:
        "Isaac Sim 환경에서 물체별 학습이나 사전 정의된 선반 모델 없이, 이미지 한 장 또는 텍스트 프롬프트만으로 대상 물체를 인식하고 파지 및 적재하는 비전 기반 Pick-and-Place 로봇을 개발. 물체 검출과 자세 추정부터 파지 및 적재 위치 계획까지 전체 3D 인식 파이프라인을 설계 및 구현하고, 로봇 동작 계획 및 제어에 연결. Isaac Sim의 Ground Truth로 각 단계와 전체 작업을 검증.",
      links: [{ label: "코드", url: "https://github.com/Michae1Park/prompt-pick-place" }],
      tags: ["visual prompting", "open-vocabulary detection", "instance segmentation", "6DoF pose estimation", "3D perception", "grasp pose estimation", "placement estimation", "spatial perception", "robot manipulation", "pick-and-place", "simulation", "YCB dataset"],
      skills: ["Python", "C++", "PyTorch", "OpenCV", "Eigen", "YOLOE", "FoundationPose", "ROS2", "MoveIt2", "BehaviorTree.CPP", "Isaac Sim", "Docker"],
    },
    {
      name: "Edge Voice",
      years: "2026",
      categories: ["featured", "nlp", "embedded"],
      image: "/projects/edge-voice.webp",
      description:
        "엣지 기기에서 GPU나 클라우드, 네트워크 연결 없이 CPU만으로 동작하는 실시간 음성 인식. 여러 오디오 채널을 실시간으로 처리하고, 영어와 한국어를 지원하며, 말하는 도중에도 부분 인식 결과를 보여줌. 스트리밍 파이프라인부터 장애 시 자동 복구되는 상시 구동 구성까지 전체 시스템을 설계 및 개발.",
      links: [{ label: "코드", url: "https://github.com/Michae1Park/edge-voice" }],
      tags: ["on-device STT", "streaming ASR", "voice activity detection", "edge inference", "real-time systems"],
      skills: ["Python", "PyTorch", "ONNX Runtime", "Silero VAD", "Moonshine", "MQTT", "FastAPI"],
    },
    {
      name: "복숭아 과수원 적과 로봇",
      years: "2021",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/orchard-thinning.webp",
      extraImages: ["/projects/orchard-thinning-2.webp"],
      imageCredit: "Ai-Ping Hu",
      description:
        "과수원에서 복숭아 유과(어린 열매)를 솎아내고(적과) 가지를 치는(전정) 자율 모바일 로봇. LiDAR와 인치 이하 정밀도의 고정밀 GPS로 과수원을 자율 주행하며 장애물을 회피하고, 나무에 도착하면 내장 3D 카메라와 딥러닝으로 유과를 인식해 제거할 유과를 판단하고, 팔 끝의 집게형 엔드이펙터로 제거. 유과 인식, 팔 제어, LiDAR와 GPS 기반 주행을 개발하고, 연구용 농장의 과수원에서 현장 시험을 수행.",
      links: [
        { label: "영상", url: "https://www.youtube.com/watch?v=ddSYhLFR7CE" },
        { label: "기사", url: "https://istd.gatech.edu/peachy-robot-glimpse-peach-orchard-future/" },
      ],
      tags: ["image recognition", "deep learning", "3D perception", "LIDAR", "GPS navigation", "obstacle avoidance", "manipulation", "field testing"],
      skills: ["ROS", "RViz", "MoveIt", "move_base", "C++", "Eigen", "Python", "PyTorch", "YOLO", "TensorRT", "NVIDIA Jetson"],
    },
    {
      name: "계란 수거 모바일 로봇",
      years: "2021–2023",
      role: "공동연구책임자",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/poultry-house-robot.webp",
      extraImages: ["/projects/poultry-house-robot-dock.webp"],
      imageCredit: "GTRI",
      description:
        "상업용 양계장을 자율 주행하며 바닥의 계란을 찾아 수거하고, 자동 도킹과 충전, 예약 운행까지 지원하는 로봇. 계란 검출과 수거부터 위치 추정과 주행까지 시스템 전체를 맡게 되었고, 이를 실험실에서 현장으로 옮김: 상업용 종계장에서 현장 시험을 수행해 계란 검출 정확도 85%, 수거 성공률 91%를 달성.",
      links: [
        { label: "프로젝트 페이지", url: "https://atrp.gatech.edu/robotics-automation/" },
        { label: "초록", url: "/papers/2023-psa-egg-picking-robot.pdf" },
      ],
      tags: ["object detection", "3D perception", "mobile manipulation", "localization", "autonomous navigation", "field testing"],
      skills: ["ROS", "RViz", "move_base", "C++", "Eigen", "Python", "PyTorch", "YOLO", "TensorRT", "NVIDIA Jetson"],
    },
    {
      name: "응급처치 보조 로봇",
      years: "2022",
      categories: ["featured", "vision", "nlp", "robotics"],
      image: "/projects/first-aid-robot.webp",
      extraImages: ["/projects/first-aid-robot-2.webp"],
      description:
        "손동작 인식과 자연어 명령으로 제어되어 응급처치 작업을 보조하는 모바일 매니퓰레이터. 응급처치 물품을 트레이에 싣고 다니며 요청에 따라 가져다줌. 처치자가 작업하는 동안 팔다리를 고정해 주는 등 환자 지지도 도움. 의료용 더미로 시연.",
      tags: ["hand gesture recognition", "natural language", "human-robot interaction", "mobile manipulation", "first aid"],
      skills: ["ROS", "Python", "PyTorch", "NVIDIA Jetson"],
    },
    {
      name: "닭 가슴살 발골 로봇",
      years: "2018–2023",
      categories: ["featured", "vision", "robotics"],
      image: "/projects/deboning.webp",
      extraImages: ["/projects/deboning-2.webp"],
      imageCredit: "GTRI",
      description:
        "두 단계로 개발한 닭 가슴살 발골 로봇. **1단계, 상업 현장 파일럿:** 비전 기반 로봇 절단 시스템으로, 상업용 발골 라인에 설치해 시험. 파이프라인 전체를 맡게 되었고, 시스템을 통합하고 파일럿 시험을 수행. **2단계, 시연 학습(LfD) (실험실):** 사람이 직접 프로그래밍한 절단 대신 학습된 절단을 구현. ArUco 마커와 IMU를 부착한 맞춤형 칼로 숙련자의 절단을 기록하고, 머신러닝으로 닭의 외형 특징과 숙련자의 칼 경로 사이의 관계를 학습해, 6자유도 로봇 팔에서 직접 프로그래밍한 동작보다 더 부드럽고 자연스러운 절단을 시연.",
      links: [
        { label: "프로젝트 페이지", url: "https://atrp.gatech.edu/robotics-automation/" },
        { label: "LfD 기고문", url: "/papers/2022-poultrytech-lfd.pdf" },
      ],
      tags: ["computer vision", "learning from demonstration", "motion tracking", "manipulation", "system integration"],
      skills: ["ROS", "RViz", "C++", "Eigen", "Python", "PyTorch"],
    },
    {
      name: "매니퓰레이션을 위한 Task and Motion Planning",
      years: "2020–2021",
      categories: ["robotics"],
      image: "/projects/tamp-hardware.webp",
      description:
        "동적 환경에서의 장기(long-horizon) 조작 작업을 위한 Task and Motion Planning 프레임워크: PDDL 기호 계획기가 동작 순서를 정하고, DDP-ADMM trajectory optimization이 접촉을 고려한 집기와 밀기를 포함한 각 동작을 계획해, 복잡한(cluttered) 환경이나 움직이는 컨베이어 벨트 위의 물체 분류 같은 작업을 수행. Drake에서 DDP trajectory optimization을 구현하고 시뮬레이션과 하드웨어 실험을 수행.",
      links: [
        { label: "논문", url: "https://doi.org/10.1109/ACCESS.2021.3112879" },
        { label: "영상", url: "https://www.youtube.com/watch?v=FqrJ73xbfPc" },
        { label: "코드", url: "https://github.com/GTLIDAR/tamp-manipulation" },
      ],
      tags: ["task and motion planning", "PDDL", "trajectory optimization", "DDP", "bilevel optimization", "contact-rich manipulation"],
      skills: ["C++", "Python", "Drake", "Eigen", "qpOASES", "LCM", "Bazel"],
    },
    {
      name: "땅콩 비전 검사",
      years: "2018–2019",
      categories: ["vision"],
      image: "/projects/peanut-inspection.svg",
      description:
        "결함 있는 땅콩을 자동으로 선별해 등급 판정을 자동화한 머신 비전 시스템. 현장 시험을 거쳤으며, 소프트웨어 전체를 개발.",
      links: [{ label: "뉴스", url: "https://www.gfb.org/news/gfb-news-magazine/post/peanut-grading-redesign-progresses" }],
      tags: ["machine vision", "image classification", "real-time systems"],
      skills: ["Python", "Keras", "C++"],
    },
    {
      name: "다중 모드 오류 예측",
      years: "2017",
      categories: ["vision", "nlp", "robotics"],
      image: "/projects/multimodal-failure-prediction.svg",
      description:
        "오디오(MFCC)와 시각(AR 마커) 신호를 융합하는 딥러닝 모델(적층 LSTM과 완전 연결 층)로, 가정용 조작 작업에서 보조 로봇이 오류를 감지하고 예측하는 데 필요한 인지 모듈을 개발. 한 모달리티가 누락되면 정상인 다른 모달리티로 복원하고, 두 신호를 최대 0.5초 앞까지 예측해, 로봇이 문제가 생기기 전에 멈추거나 재계획할 시간을 확보할 수 있게 함.",
      links: [{ label: "코드", url: "https://github.com/gt-ros-pkg/hrl-assistive/tree/indigo-devel/hrl_multimodal_prediction" }],
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
        "사업보고서에 대해 검색된 문서 근거에 기반해 답하는 질의응답 시스템.",
      tags: ["RAG", "grounded QA", "vLLM"],
      skills: ["Python", "Docker"],
    },
    {
      name: "닭 가슴살 손질 도구",
      years: "2021–2023",
      role: "연구책임자",
      categories: ["embedded"],
      image: "/projects/trimming-testing.webp",
      extraImages: ["/projects/trimming-tool-photo.webp"],
      imageCredit: "GTRI",
      description:
        "칼로 느리게 하던 닭 가슴살의 차골과 연골 제거를 위한 휴대용 회전 도구. 문제를 발굴하고 제안서를 작성해 연구비를 확보했으며, 3인 팀을 이끌고 산업 파트너 및 이해관계자와 협력해 개념 설계부터 시험까지 진행. 칼과 비교해 손질 시간을 약 40% 줄이고 고기 손실도 줄였으며, 설계는 현재 특허 출원 중.",
      links: [
        { label: "특허", url: "https://patents.google.com/patent/WO2023215772A1/en" },
        { label: "초록", url: "/papers/2023-psa-trimming-device.pdf" },
      ],
      tags: ["project leadership", "grant writing", "industry collaboration", "product development", "performance evaluation"],
      skills: [],
    },
    {
      name: "NXP 컵 자율주행 자동차",
      years: "2016",
      categories: ["robotics", "embedded"],
      image: "/projects/nxp-cup-track.webp",
      imageCredit: "DAC",
      imageCreditUrl: "https://www.facebook.com/dacthechipstosystemsconference/videos/617140158445659/",
      description:
        "라인 스캔 카메라로 트랙을 따라 달리는 자율주행 모형 자동차로, 4인 팀이 2016 DAC NXP 컵 챌린지를 위해 제작해 아마추어 부문 1위를 차지. 트랙을 찾는 라인 스캔 카메라 처리와 비례(P) 조향 제어기를 작성.",
      links: [
        { label: "코드", url: "https://github.com/Michae1Park/NXPCup" },
        { label: "뉴스", url: "https://x.com/ARMEducation/status/740913745073995776" },
        { label: "뉴스 (캡처)", url: "/docs/2016-nxpcup-arm-education-post.webp" },
      ],
      tags: ["line-scan camera", "signal processing", "P control", "microcontroller"],
      skills: ["C++", "Arm Mbed", "NXP KL25Z"],
    },
    {
      name: "무배터리 무선 임플란트",
      years: "2016",
      categories: ["embedded"],
      image: "/projects/batteryless-implant.webp",
      imageCredit: "UT Austin ECE",
      imageCreditUrl: "https://www.flickr.com/photos/utece/albums/72157673237077994/",
      description:
        "실험용 쥐 체내의 온도와 가속도를 측정하는 무배터리 무선 임플란트. 베이스 스테이션이 13.56 MHz NFC로 전력을 공급하고 데이터를 읽으며, 웹 앱으로 데이터를 확인. 온도 센서 읽기를 포함한 임플란트의 마이크로컨트롤러 펌웨어를 C로 작성. 2016 텍사스 오스틴 대학 전기전자컴퓨터공학부 최우수 졸업 작품상.",
      links: [
        { label: "뉴스", url: "https://ece.utexas.edu/news/senior-design-showcase-features-capstone-design-projects" },
        { label: "보고서", url: "/docs/2016-batteryless-implant-report.pdf" },
        { label: "포스터", url: "/docs/2016-batteryless-implant-poster.pdf" },
      ],
      tags: ["embedded systems", "chip programming", "firmware", "sensor interfacing"],
      skills: ["C"],
    },
    {
      name: "스마트 디스플레이",
      years: "2016",
      categories: ["embedded"],
      image: "/projects/smart-display.webp",
      imageCredit: "UT Austin ECE",
      imageCreditUrl: "https://www.flickr.com/photos/utece/albums/72157668180718675/",
      description:
        "Wi-Fi로 날씨, 일정, 주식, 뉴스 데이터를 받아 LCD에 보여주는 탁상용 알람 시계로, TM4C123 마이크로컨트롤러와 자체 설계 PCB로 제작. Wi-Fi와 LCD 드라이버를 포함한 시스템 소프트웨어를 작성하고 프로토타입을 제작.",
      links: [{ label: "영상", url: "https://www.youtube.com/watch?v=H84XfKYSuqw" }],
      tags: ["embedded systems", "device drivers", "interrupts", "IoT"],
      skills: ["C"],
    },
  ],

  // --- Publications section -------------------------------------------------
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
  patents: [
    {
      year: "2023",
      title: "Trimming Systems and Methods",
      authors: "S. L. Thomas, A. Giorges, **Michael Park**",
      number: "U.S. Patent Application No. 18/862,441",
      status: "출원 중",
      url: "https://thepatentplace.com/iplibrary/patent-application/18862441",
    },
    {
      year: "2015",
      title: "Distribution-Type Thermocouple Sensor and Thermocouple-Based Distribution-Type Temperature Measurement System Using Same",
      authors: "J. Park, M. Kim, J. Kim, **Junbeom Park**, J. Lee",
      number: "Korean Patent No. 10-1520384",
      status: "등록",
      url: "https://patents.google.com/patent/KR101520384B1/ko",
    },
  ],

  // --- Essays section -------------------------------------------------------
  essays: [
    // {
    //   date: "2026",
    //   title: "What I Learned Shipping Real-World ASR",
    //   url: "https://example.com",
    //   description: "음성 인식을 연구실에서 실제 프로덕션으로 옮기며 얻은 교훈.",
    // },
  ],
};
