/**
 * PROJECTS DATA - REAL PROJECTS BY KALAIPRIYA S
 * 100% Authentic implementations in AI, Deep Learning, NLP, and Full Stack Web.
 */
export const projects = [
  {
    id: "bug-diagnosis-platform",
    title: "Intelligent Bug Diagnosis Platform with Fix Recommendation",
    category: "Generative AI & AI Systems",
    categoryKey: "genai",
    featured: true,
    tagline: "AI-powered platform built during Infosys Springboard internship analyzing bug reports and recommending fixes.",
    overview: "Developed as an AI/ML internship project at Infosys Springboard (Aug–Oct 2026), this automated defect diagnosis platform processes error logs, stack traces, and bug reports. Utilizing Retrieval-Augmented Generation (RAG) and dense vector embeddings, it queries historical defect repositories (Mozilla, Apache, Eclipse) to identify similar resolved issues, identify probable root causes, and generate contextual fix recommendations.",
    architecture: "Bug Report & Log Ingestion -> Text Normalization & Embedding Generation -> FAISS Vector Similarity Search against Historical Repositories (Mozilla / Apache / Eclipse) -> Contextual Augmentation -> AI Agent / LLM Inference -> Root Cause Analysis & Fix Recommendations.",
    keyFeatures: [
      "Built and delivered during a 2-month AI/ML internship at Infosys Springboard",
      "Semantic similarity search powered by FAISS vector indexing over large-scale open-source defect repositories",
      "Automated extraction of stack trace patterns, error signatures, and relevant code contexts",
      "FastAPI asynchronous backend delivering fast inference and structured diagnosis responses",
      "Contextual fix recommendation assistant reducing developer debugging turnaround time"
    ],
    technologies: ["Python", "FastAPI", "RAG", "FAISS", "Vector Search", "Embeddings", "AI Agents", "Semantic Search"],
    metrics: "Sub-second Retrieval | Evaluated on Mozilla, Apache & Eclipse Datasets",
    githubUrl: "https://github.com/kalai2006priya-art/intelligent-bug-diagnosis-platform-internship",
    liveDemoUrl: null
  },
  {
    id: "pneumonia-diagnosis-dl",
    title: "Intelligent Pneumonia Diagnosis Using Deep Learning",
    category: "Deep Learning & Vision",
    categoryKey: "dl",
    featured: true,
    tagline: "Computer vision application classifying chest radiographs into Normal vs. Pneumonia.",
    overview: "Built an end-to-end medical imaging classification pipeline that accurately identifies Normal vs. Pneumonia cases from chest X-ray scans. Utilizes convolutional neural network (CNN) architecture and transfer learning with MobileNetV2 for high diagnostic screening accuracy.",
    architecture: "Radiograph Ingestion -> Image Preprocessing & Rescaling -> CNN Feature Extraction via MobileNetV2 -> Dense Classification Layer -> Interactive Streamlit Diagnostic Interface.",
    keyFeatures: [
      "Convolutional Neural Network (CNN) architecture utilizing MobileNetV2 backbone optimized for radiographic image feature extraction",
      "Interactive Streamlit web dashboard allowing instant radiograph uploads and confidence percentage display",
      "Data preprocessing and image normalization pipeline built with NumPy and OpenCV",
      "Comprehensive evaluation with confusion matrix, precision, recall, and classification metrics"
    ],
    technologies: ["Python", "CNN", "Deep Learning", "MobileNetV2", "Transfer Learning", "Streamlit", "NumPy", "OpenCV"],
    metrics: "High Classification Accuracy | Real-time Streamlit Interface",
    githubUrl: "https://github.com/kalai2006priya-art/Pneumonia-Diagnosis-Deep-Learning",
    liveDemoUrl: null
  },
  {
    id: "career-confusion-guidance",
    title: "Career Confusion Guidance – AI Emotion & Reason Analyzer",
    category: "NLP & Machine Learning",
    categoryKey: "nlp",
    featured: true,
    tagline: "NLP and BERT-driven system analyzing student career anxieties to recommend personalized pathways.",
    overview: "An empathetic AI-powered career counseling platform that evaluates natural language user concerns regarding career dilemmas. Using BERT embeddings and NLP classifiers, it detects emotional states (confusion, anxiety, ambition) and underlying root causes, generating personalized career suggestions and step-by-step action roadmaps.",
    architecture: "Natural Language Input -> Text Preprocessing & Tokenization -> BERT Sentiment & Reason Extraction -> Multi-class ML Classifier -> Recommendation Engine -> User Session & History Tracking in Streamlit.",
    keyFeatures: [
      "Transformer-based sentiment and emotional state detection using BERT embeddings",
      "Underlying cause extraction to understand specific pain points (skills gap, decision paralysis, market trends)",
      "Personalized career roadmaps with actionable milestones and upskilling recommendations",
      "User authentication and previous analysis history tracking to observe career confidence progression"
    ],
    technologies: ["Python", "BERT", "NLP", "Machine Learning", "Scikit-Learn", "Pandas", "Streamlit"],
    metrics: "Multi-class Emotion Detection | Historical Tracking Enabled",
    githubUrl: "https://github.com/kalai2006priya-art/Career-Confusion-Guidance",
    liveDemoUrl: null
  },
  {
    id: "healthcare-appointment-system",
    title: "Healthcare Appointment Scheduling Platform",
    category: "Full Stack & Web",
    categoryKey: "web",
    featured: false,
    tagline: "Interactive web portal connecting patients and medical practitioners for streamlined appointment booking.",
    overview: "A responsive, component-driven web application designed to simplify medical scheduling. Allows patients to explore clinician availability, book consultations, and view upcoming appointments, while offering medical providers an organized schedule management interface.",
    architecture: "React.js Component Architecture -> State Management & Scheduling Handlers -> Responsive UI Views (Patient Portal / Doctor Schedule) -> Form Validation & Booking Verification.",
    keyFeatures: [
      "Dynamic appointment slot reservation with instant booking feedback and schedule synchronization",
      "User-friendly calendar interface for patients to search doctors and select preferred visit slots",
      "Doctor dashboard for viewing patient queues, consultation statuses, and slot availability",
      "Clean, accessible responsive design optimized for mobile and desktop screens"
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Component Architecture"],
    metrics: "Responsive Multi-Device UI | Seamless Appointment Flow",
    githubUrl: "https://github.com/kalai2006priya-art/HealthCareAppointmentSystem",
    liveDemoUrl: null
  }
];

export const projectCategories = [
  { key: "all", label: "All Projects" },
  { key: "genai", label: "Generative AI & LLMs" },
  { key: "dl", label: "Deep Learning & Vision" },
  { key: "nlp", label: "NLP & Machine Learning" },
  { key: "web", label: "Full Stack & Web" }
];