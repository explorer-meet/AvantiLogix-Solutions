import {
  Cpu,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  LineChart,
  Bot,
  Server,
  Users,
  Layers,
  Rocket,
  Database,
  Globe,
  Briefcase,
  HeartPulse,
} from 'lucide-react';

export const SITE = {
  name: 'AvantiLogix',
  description:
    'AvantiLogix provides technology staffing, consulting, and solution delivery for enterprise IT initiatives.',
  email: 'support@avantilogix.com',
  phones: ['+91 8758770402'],
  address: 'D-406, They SkyWalk Element, Jagatpur, 382470, Ahmedabad',
  offices: [
    {
      name: 'Ahmedabad',
      address: 'D-406, They SkyWalk Element, Jagatpur, 382470, Ahmedabad',
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/avantilogix-solutions-private-limited',
  },
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact Us' },
];

export const SERVICES = [
  {
    slug: 'it-strategy',
    cta: { label: 'Plan a technology roadmap', interest: 'project' },
    featured: false,
    title: 'IT Strategy & Advisory',
    icon: Briefcase,
    image: '/images/service-strategy.jpg',
    short:
      'Align technology with business goals through enterprise architecture and digital transformation roadmaps.',
    description:
      'Our advisors partner with your leadership to define a future-ready IT vision — covering enterprise architecture, vendor strategy, digital transformation roadmaps, and modernization priorities that compound revenue and efficiency.',
    points: [
      'Enterprise architecture & TOGAF alignment',
      'Digital transformation roadmap',
      'Vendor and platform strategy',
      'Technology cost optimization',
    ],
  },
  {
    slug: 'software-development',
    cta: { label: 'Discuss a software project', interest: 'engineering' },
    featured: false,
    title: 'Software Development & Engineering',
    icon: Cpu,
    image: '/images/service-software.jpg',
    short:
      'Custom web, mobile and enterprise software built with .NET, Java, Node.js, React and modern stacks.',
    description:
      'Full-cycle product engineering — from discovery and UX through architecture, build, QA and DevOps. We build resilient, scalable applications using .NET, Java, Node.js, Python, React and React Native.',
    points: [
      'Web & mobile application development',
      'Enterprise portals and SaaS platforms',
      'API design and microservices',
      'DevOps and CI/CD automation',
    ],
  },
  {
    slug: 'cloud-services',
    cta: { label: 'Discuss cloud modernization', interest: 'cloud' },
    featured: true,
    title: 'Cloud Services',
    icon: Cloud,
    image: '/images/service-cloud.jpg',
    short:
      'Cloud migration, modernization, and managed operations across AWS, Azure, and GCP.',
    description:
      'Cloud adoption support spanning migration assessments, landing-zone design, containerization, FinOps, security, and ongoing operations.',
    points: [
      'Cloud migration & modernization',
      'Kubernetes, containers, serverless',
      'FinOps & cost governance',
      'Managed cloud operations',
    ],
  },
  {
    slug: 'cybersecurity',
    cta: { label: 'Talk to a security expert', interest: 'security' },
    featured: false,
    title: 'Cybersecurity Consulting',
    icon: ShieldCheck,
    image: '/images/service-security.jpg',
    short:
      'Security assessments, identity architecture, and security operations for complex environments.',
    description:
      'Support security programs through risk assessments, identity governance, vulnerability management, security operations, and support for compliance-readiness work.',
    points: [
      'Zero-trust architecture & IAM',
      'Vulnerability & penetration testing',
      'SOC, SIEM and incident response',
      'Support for compliance-readiness work in regulated environments',
    ],
  },
  {
    slug: 'ai-ml',
    cta: { label: 'Explore AI use cases', interest: 'data-ai' },
    featured: true,
    title: 'AI / ML & Data Science',
    icon: BrainCircuit,
    image: '/images/service-ai.jpg',
    short:
      'Generative AI, predictive models, NLP and computer vision built on MLOps foundations.',
    description:
      'We build AI products that move the business — generative AI assistants, predictive models, NLP, computer vision, and recommendation engines, productionized on a rigorous MLOps foundation.',
    points: [
      'Generative AI & LLM solutions',
      'Predictive modeling & forecasting',
      'NLP, vision and recommendation engines',
      'MLOps, monitoring and governance',
    ],
  },
  {
    slug: 'data-analytics',
    cta: { label: 'Discuss data & analytics', interest: 'data-ai' },
    featured: true,
    title: 'Data Analytics & BI',
    icon: LineChart,
    image: '/images/service-data.jpg',
    short:
      'Modern data platforms, lakehouses, Power BI and Tableau dashboards that surface real insight.',
    description:
      'From data strategy and modern warehouses to embedded analytics — we deliver lakehouses on Snowflake, Databricks and Synapse with Power BI, Tableau and Looker storytelling on top.',
    points: [
      'Data warehouse & lakehouse design',
      'ETL/ELT pipelines and quality',
      'Self-serve BI: Power BI, Tableau, Looker',
      'KPI frameworks and executive dashboards',
    ],
  },
  {
    slug: 'rpa',
    cta: { label: 'Discuss process automation', interest: 'project' },
    featured: false,
    title: 'Robotic Process Automation',
    icon: Bot,
    image: '/images/service-rpa.jpg',
    short:
      'UiPath, Automation Anywhere and Power Automate bots that cut cost and accelerate operations.',
    description:
      'We identify high-ROI automation opportunities and ship resilient bots using UiPath, Automation Anywhere and Microsoft Power Automate — wrapped in a Center of Excellence model.',
    points: [
      'Process discovery and ROI analysis',
      'UiPath, Automation Anywhere, Power Automate',
      'Attended & unattended automation',
      'Automation CoE & governance',
    ],
  },
  {
    slug: 'managed-it',
    cta: { label: 'Discuss managed operations', interest: 'cloud' },
    featured: false,
    title: 'Managed IT Services',
    icon: Server,
    image: '/images/service-managed.jpg',
    short:
      'Infrastructure, application, and database support with proactive monitoring.',
    description:
      'Managed support for infrastructure, applications, and databases, including monitoring, patching, and continuous improvement.',
    points: [
      'L1–L3 application & infra support',
      'Database administration (SQL/Oracle)',
      'Monitoring, patching and SLAs',
      'ITIL-aligned service operations',
    ],
  },
  {
    slug: 'staffing',
    cta: { label: 'Request technology talent', interest: 'staffing' },
    featured: true,
    title: 'IT Staffing & Augmentation',
    icon: Users,
    image: '/images/service-staffing.jpg',
    short:
      'Vetted contract, contract-to-hire and direct-hire talent across cloud, data, AI and enterprise stacks.',
    description:
      'Our recruiting team connects organizations with contract, contract-to-hire, and full-time technology talent across modern stacks.',
    points: [
      'Contract & contract-to-hire',
      'Direct-hire & executive search',
      'Managed talent pods',
      'Onshore, nearshore and offshore models',
    ],
  },
  {
    slug: 'startup-mvp',
    cta: { label: 'Scope your MVP', interest: 'project' },
    featured: false,
    title: 'Startup & MVP Launch',
    icon: Rocket,
    image: '/images/service-startup.jpg',
    short:
      'Product teams that help shape ideas into launch-ready MVPs.',
    description:
      'A blended team of designers, engineers, and product managers that supports founders through discovery, architecture, engineering, and launch.',
    points: [
      'Product discovery and UX',
      'MVP architecture & engineering',
      'Cloud-native foundations',
      'Investor demo & launch support',
    ],
  },
  {
    slug: 'data-warehousing',
    cta: { label: 'Discuss data warehousing', interest: 'data-ai' },
    featured: false,
    title: 'Data Warehousing & DBA',
    icon: Database,
    image: '/images/service-warehouse.jpg',
    short:
      'Snowflake, Redshift, Synapse and on-prem warehouse design plus expert database administration.',
    description:
      'Modernize your warehouse and keep databases humming. Our DBAs and data engineers cover Snowflake, Redshift, Synapse, SQL Server, Oracle and PostgreSQL — on-prem or cloud.',
    points: [
      'Snowflake, Redshift, Synapse',
      'SQL Server, Oracle, PostgreSQL DBA',
      'High availability & DR design',
      'Performance tuning & cost control',
    ],
  },
  {
    slug: 'enterprise-portals',
    cta: { label: 'Discuss a portal project', interest: 'engineering' },
    featured: false,
    title: 'Web Apps & Enterprise Portals',
    icon: Globe,
    image: '/images/service-portals.jpg',
    short:
      'SharePoint, Liferay and custom enterprise portals that connect people, content and process.',
    description:
      'Modern intranets and customer portals on SharePoint, Liferay, and headless stacks — designed for collaboration, single sign-on, and integration with the systems that run your business.',
    points: [
      'SharePoint Online & Liferay',
      'Headless CMS portals',
      'SSO & enterprise integration',
      'Knowledge management & workflows',
    ],
  },
  {
    slug: 'business-analysis',
    cta: { label: 'Discuss business analysis', interest: 'project' },
    featured: false,
    title: 'Functional Business Analysis',
    icon: Layers,
    image: '/images/service-analysis.jpg',
    short:
      'BAs and product managers who translate business needs into delivery-ready requirements.',
    description:
      'Senior business analysts and product managers who bridge business and engineering — discovery workshops, process maps, user stories and crisp acceptance criteria your delivery teams can run on.',
    points: [
      'Discovery & requirements engineering',
      'Process modeling (BPMN)',
      'User stories & acceptance criteria',
      'UAT and release readiness',
    ],
  },
  {
    slug: 'healthcare',
    cta: { label: 'Discuss healthcare technology', interest: 'healthcare' },
    featured: false,
    title: 'Healthcare Services',
    icon: HeartPulse,
    image: '/images/service-healthcare.jpg',
    short:
      'Healthcare technology, clinical data integration, interoperability, and analytics for payers and providers.',
    description:
      'Engineering support for healthcare organizations spanning applications, data exchange, systems integration, and clinical and operational analytics.',
    points: [
      'Cloud and apps built with HIPAA safeguards in mind',
      'HL7 & FHIR interoperability',
      'Epic / Cerner integration',
      'Clinical and population health analytics',
    ],
  },
];

export const INDUSTRIES = [
  {
    name: 'Healthcare & Life Sciences',
    challenges: ['Connecting clinical, claims and member data across systems','Data protection and access controls for regulated health information','Modernizing legacy payer and provider platforms','Analytics for care, cost and operations'],
    desc: 'Engineering that takes HIPAA requirements into account, plus data integration and analytics for payers and providers.',
    icon: HeartPulse,
  },
  {
    name: 'Banking & Fintech',
    challenges: ['Modernizing core and channel platforms without disrupting customers','Secure, auditable payment and lending workflows','Data platforms for risk, fraud and reporting','Cloud migration in regulated environments'],
    desc: 'Secure, regulated platforms for lending, payments, wealth and digital banking.',
    icon: Briefcase,
  },
  {
    name: 'Insurance',
    challenges: ['Policy administration and claims modernization','Integrating legacy systems with modern APIs','Data and AI for underwriting and claims triage','Scaling delivery teams for multi-year programs'],
    desc: 'Policy administration, claims modernization and AI-powered underwriting.',
    icon: ShieldCheck,
  },
  {
    name: 'Retail & E-commerce',
    challenges: ['Unifying customer, order and inventory data','Scalable commerce platforms for seasonal peaks','Personalization and demand analytics','Cloud cost control as traffic grows'],
    desc: 'Headless commerce, personalization and unified customer data platforms.',
    icon: Globe,
  },
  {
    name: 'Manufacturing',
    challenges: ['ERP and supply-chain system modernization','Connecting plant, IoT and enterprise data','Analytics for quality and maintenance planning','Staffing specialized engineering skills'],
    desc: 'Industry 4.0, IoT, ERP modernization and predictive maintenance.',
    icon: Cpu,
  },
  {
    name: 'Public Sector',
    challenges: ['Modernizing citizen-facing digital services','Delivering within strict security and procurement requirements','Migrating legacy systems to the cloud','Data sharing and reporting across agencies'],
    desc: 'Citizen-centric digital services, designed with government security requirements in mind.',
    icon: Layers,
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We immerse in your business, map outcomes, and align on what success looks like.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Architecture, UX and delivery plans that balance speed, scale and total cost of ownership.',
  },
  {
    step: '03',
    title: 'Deliver',
    desc: 'Agile pods ship in tight increments with continuous quality and stakeholder visibility.',
  },
  {
    step: '04',
    title: 'Sustain',
    desc: 'Managed operations, observability and continuous improvement that compound value.',
  },
];

export const VALUES = [
  {
    title: 'Teamwork',
    desc: 'One team, one fight. We work as a unified extension of your organization.',
  },
  {
    title: 'Respect',
    desc: 'We embrace diversity of culture, background, experience, thoughts and ideas.',
  },
  {
    title: 'Trust',
    desc: 'We follow through on our commitments with open and honest communication.',
  },
  {
    title: 'Excellence',
    desc: 'Relevant, innovative, timely and affordable — consistently exceeding expectations.',
  },
];
