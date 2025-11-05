import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import pislfreightImg from "../public/pislfreight.png";
import zenillaImg from "../public/zenilla.png";
import huntvilleImg from "../public/huntville.png";
import axamansardImg from "../public/axamansard.png";
import lagferryImg from "../public/lagferry.png";
import coverageLocatorImg from "../public/coverage-locator.png";
import geolockImg from "../public/geolock.png";
import pdcImg from "../public/pdc.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Lead",
    location: "Polaris Digitech, Lagos",
    description:
      "Working as lead frontend developer role, mentoring junior developers and overseeing the complete development process",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },

  {
    title: "Software Developer",
    location: "Polaris Digitech, Lagos",
    description:
      "Worked as sofware developer majorly frontend role, also cloud architect",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Software Developer",
    location: "TechSpice, Lagos",
    description:
      "I worked as a part-time developer role, with role lead role overseeing the complete developement process",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Jnr. Software Developer",
    location: "GIIT, Lagos",
    description: "It was an intership experience that became a remote job.",
    icon: React.createElement(FaReact),
    date: "2020 - 2020",
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  link?: string;
  featured?: boolean;
  keyFeatures?: readonly string[];
  technologiesUsed?: readonly string[];
  businessImpact?: string;
};

export const projectsData: readonly Project[] = [
  {
    title: "Axamansard Risk Geo-platform",
    description:
      "Platform to do automatic address verification of the customers, show risks to axamansard based on location, to help them make insightful business decision. Also manage manual address and their agents, and staffs.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "PostGIS", "Geospatial"],
    imageUrl: axamansardImg,
    link: "https://axamansard.riskgeoplatform.com",
    featured: false,
    keyFeatures: [
      "Automatic Address Verification: Geocode, normalize, and validate customer addresses to reduce errors and fraud",
      "Location-Based Risk Scoring: Visualize exposure and compute risk indices using proximity and area-based analysis",
      "Portfolio & Exposure Dashboards: Aggregate risk by region, product, and time to guide underwriting and pricing",
      "Manual Address Workflows: Review queues, overrides, and audit trails for exceptional cases",
      "Agent & Staff Management: Assignment, tracking, and performance views for field agents and internal teams",
      "Role-Based Access Control: Secure feature access for underwriting, operations, and management",
    ],
    technologiesUsed: [
      "Frontend: Angular, TypeScript, RxJS",
      "Backend: Java with Spring Boot (REST APIs)",
      "Database: PostgreSQL with PostGIS for geospatial queries and indexing",
      "Maps & Geospatial: Web maps SDK and geocoding services for visualization and address validation",
    ],
    businessImpact:
      "The platform streamlines verification and risk assessment, reducing operational overhead and improving decision accuracy. AXA Mansard teams can proactively identify high-risk locations, accelerate underwriting, and maintain cleaner address data across customers, agents, and staff.",
  },
  {
    title: "Lagos State Ferry Service",
    description:
      "Real-time boat tracking and analytics platform for Lagos State Ferry Service with trip management, incident reporting, and terminal operations.",
    tags: [
      "Angular",
      "Spring Boot",
      "Real-time Tracking",
      "Maritime",
      "Analytics",
    ],
    imageUrl: lagferryImg,
    link: "https://lagferryetrack.com",
    featured: true,
    keyFeatures: [
      "Real-time Boat Tracking: Live GPS tracking of all ferry boats on an interactive map with real-time position updates",
      "Trip Analytics: Comprehensive analytics dashboard showing completed trips, trip duration, passenger counts, and performance metrics",
      "Incident Reporting: System for reporting and tracking maritime incidents with location data and timestamps",
      "Boat Movement Playback: Historical playback feature to review boat movements and routes for analysis and training",
      "Terminal Management: Complete terminal operations management including scheduling, docking, and terminal resource allocation",
      "Real-time Dashboard: Live monitoring of all active ferries with status updates and alerts",
    ],
    technologiesUsed: [
      "Frontend: Angular with TypeScript for a robust, scalable user interface",
      "Backend: Java with Spring Boot for RESTful API development and business logic",
      "Real-time Communication: WebSocket support for live tracking updates",
      "Database: PostgreSQL for reliable data persistence",
      "Maps: Interactive mapping libraries for real-time visualization",
    ],
    businessImpact:
      "The platform has revolutionized ferry operations management in Lagos State, providing real-time visibility into ferry movements, enabling data-driven decision making, improving safety through incident tracking, and streamlining terminal operations for better efficiency and passenger experience.",
  },
  {
    title: "MTN Coverage Locator",
    description:
      "Interactive geospatial platform for visualizing and searching MTN network coverage across Nigeria with comprehensive coverage data management.",
    tags: [
      "Next.js",
      "React",
      "Spring Boot",
      "PostGIS",
      "Telecommunications",
      "Geospatial",
    ],
    imageUrl: coverageLocatorImg,
    link: "https://external.mtnncoveragelocator.com",
    featured: true,
    keyFeatures: [
      "Interactive Coverage Visualization: Dynamic maps showing MTN network coverage with different signal strength indicators across Nigeria",
      "Advanced Search: Powerful search functionality to find coverage information by location, address, or coordinates",
      "Coverage Data Management: Comprehensive tools for managing, updating, and analyzing coverage data with administrative controls",
      "Multi-layer Visualization: Support for different coverage types (2G, 3G, 4G, 5G) with toggleable map layers",
      "Geospatial Analysis: Advanced PostGIS-powered queries for spatial analysis and coverage optimization",
      "Responsive Design: Optimized interface using Chakra UI that works seamlessly across all devices",
    ],
    technologiesUsed: [
      "Frontend: Next.js with React and TypeScript for server-side rendering and optimal performance",
      "UI Framework: Chakra UI for consistent, accessible component design",
      "Mapping: Leaflet and Google Maps for interactive geospatial visualization",
      "Backend: Spring Boot with RESTful APIs for data management and business logic",
      "Database: PostgreSQL with PostGIS extension for advanced geospatial queries and spatial indexing",
      "Server Infrastructure: Spectrum Server for high-performance geospatial data serving",
    ],
    businessImpact:
      "The platform has enabled MTN to efficiently visualize and manage network coverage across Nigeria, improving network planning decisions, enhancing customer service through accurate coverage information, and supporting strategic expansion initiatives with data-driven insights.",
  },
  {
    title: "MTN GeoLock",
    description:
      "Geolocation locking system for MTN Fixed Broadband and High Speed 5G devices to ensure optimal service quality by locking devices to specific serving sites.",
    tags: [
      "Next.js",
      "React",
      "Spring Boot",
      "PostGIS",
      "5G",
      "Telecommunications",
    ],
    imageUrl: geolockImg,
    link: "https://mtn-geolock.web.app/",
    featured: false,
    keyFeatures: [
      "Device Geolocking: Lock Fixed Broadband and High Speed 5G devices to specific serving sites for optimal performance",
      "Site Management: Comprehensive management of serving sites with geographic boundaries and service parameters",
      "Device Tracking: Real-time tracking and monitoring of locked devices with location verification",
      "Interactive Mapping: Visual representation of serving sites, device locations, and coverage boundaries using Leaflet and Google Maps",
      "Quality Assurance: Ensure consistent service quality by preventing devices from connecting to suboptimal sites",
      "Administrative Controls: Advanced tools for managing geolock rules, exceptions, and device assignments",
      "Geospatial Analysis: PostGIS-powered spatial queries for site optimization and device placement analysis",
    ],
    technologiesUsed: [
      "Frontend: Next.js with React and TypeScript for modern, performant user interfaces",
      "UI Components: Chakra UI for accessible design system and Tailwind CSS for custom styling",
      "Mapping: Leaflet and Google Maps integration for interactive geospatial visualization",
      "Backend: Spring Boot with comprehensive REST APIs for device and site management",
      "Database: PostgreSQL with PostGIS for advanced geospatial data storage and spatial queries",
      "Server Infrastructure: Spectrum Server for efficient geospatial data processing and serving",
    ],
    businessImpact:
      "MTN GeoLock has significantly improved service quality for Fixed Broadband and 5G customers by ensuring devices connect to optimal serving sites. The platform has reduced service disruptions, improved network efficiency, and enabled better resource allocation through precise geographic device management.",
  },
  {
    title: "PDC Data Collector",
    description:
      "Universal data collection and management platform that eliminates paperwork and manual errors through efficient digital data collection and analysis.",
    tags: [
      "React",
      "Spring Boot",
      "Data Collection",
      "Field Surveys",
      "Analytics",
    ],
    imageUrl: pdcImg,
    link: "https://pdcv2-2.web.app/",
    featured: true,
    keyFeatures: [
      "Universal Data Collection: Flexible form builder that supports any type of data collection including surveys, inspections, inventories, and field observations",
      "Geographic Data Capture: Integrated Mapbox mapping for location-based data collection with GPS coordinates and spatial data",
      "Offline Capability: Collect data in remote locations without internet connectivity with automatic synchronization when online",
      "Data Management: Comprehensive data management dashboard for viewing, editing, and organizing collected data",
      "Analytics & Reporting: Advanced analytics tools for analyzing collected data with customizable reports and visualizations",
      "User-Friendly Interface: Intuitive design using Ant Design components for seamless user experience",
      "Error Reduction: Automated validation and structured data entry to minimize manual errors",
      "Multi-format Export: Export collected data in various formats for further analysis",
    ],
    technologiesUsed: [
      "Frontend: React with modern JavaScript for dynamic user interfaces",
      "UI Framework: Ant Design for professional, consistent component library",
      "Styling: Tailwind CSS for custom design and responsive layouts",
      "Mapping: Mapbox for interactive maps and geospatial data visualization",
      "Backend: Spring Boot with Java for robust RESTful API development",
      "Database: PostgreSQL for reliable data persistence and management",
    ],
    businessImpact:
      "PDC Data Collector has transformed data collection workflows across various industries, significantly reducing paperwork, eliminating manual errors, improving data accuracy, and enabling faster decision-making through efficient data collection and analysis processes.",
  },
  {
    title: "Zenilla Media",
    description:
      "Web for unparalleled integrated marketing communications solutions tailored for the diverse and dynamic landscape of Sub-Saharan Africa.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: zenillaImg,
    link: "https://www.zenillamedia.com",
    featured: false,
    keyFeatures: [
      "Responsive Design: Mobile-first approach ensuring optimal experience across all devices",
      "Performance Optimized: Built with Next.js for optimal loading speeds and SEO",
      "Modern UI/UX: Clean, professional design with smooth animations",
      "Content Management: Easy-to-update content structure for marketing teams",
    ],
    technologiesUsed: [
      "Frontend: React, Next.js, TypeScript",
      "Styling: Tailwind CSS with custom design system",
      "Animations: Framer Motion for smooth interactions",
      "Deployment: Vercel for optimal performance",
    ],
    businessImpact:
      "The platform has successfully served multiple clients across Sub-Saharan Africa, providing them with effective digital marketing solutions and improved brand visibility.",
  },
  {
    title: "PISL Freight",
    description:
      "A web facing application for approximately tell the client cost of buying a car from directly from the  United State and shipping it to Nigeria. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node", "Express"],
    imageUrl: pislfreightImg,
    // link: "https://www.pislfreight.com",
    featured: false,
    keyFeatures: [
      "Real-time Calculations: Dynamic cost estimation based on current rates and regulations",
      "User-friendly Interface: Intuitive design for easy navigation and calculation",
      "Database Integration: MongoDB for storing calculation history and user data",
      "Responsive Design: Optimized for both desktop and mobile users",
    ],
    technologiesUsed: [
      "Backend: Node.js with Express for API development",
      "Database: MongoDB for data persistence and user management",
      "Frontend: React with Next.js for optimal performance",
      "Styling: Tailwind CSS for consistent design",
    ],
    businessImpact:
      "The platform has streamlined the vehicle importation process for hundreds of users, providing transparency in cost calculations and reducing the complexity of international shipping.",
  },
  {
    title: "Huntville",
    description:
      "Huntville it an online exam registration center,technological solution for clients and trainings ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: huntvilleImg,
    link: "https://www.huntsvilletech.com.ng",
    featured: false,
    keyFeatures: [
      "Exam Registration: Streamlined process for students to register for various examinations",
      "Admin Dashboard: Comprehensive management tools for administrators",
      "Real-time Updates: Live notifications and status updates",
      "Mobile Responsive: Optimized for all device types",
    ],
    technologiesUsed: [
      "State Management: Redux for predictable state management",
      "Type Safety: Full TypeScript implementation for better development experience",
      "Performance: Next.js for server-side rendering and optimization",
      "UI/UX: Custom design system with Tailwind CSS",
    ],
    businessImpact:
      "The platform has successfully processed thousands of exam registrations, improving the efficiency of educational institutions and providing a better experience for students.",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Reactjs",
  "Nextjs",
  "Angular",
  "Nodejs",
  "Expressjs",
  "Python",
  "PHP",
  "C++",
  "Go Lang",
  "SQL",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Machine Learning",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Linux",
  "Ngnix",
  " Vulnerability Assessment",
  "Penetration Testing",
  "IT Support",
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/adesholly",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adesholly/",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/ade_sholly11",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:adesholly11@gmail.com",
    icon: Mail,
  },
] as const;

export const RESUME_URL = "/resume.pdf";
