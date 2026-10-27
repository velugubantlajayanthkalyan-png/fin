/*
 * SITE CONTENT: people, branches, countries, services and FAQs.
 * (Universities and courses for the course finder are in universities.js.)
 * Change a phone number, add a branch, edit a service — then run:  npm run build
 * Never edit the .html files in the project root by hand; they are regenerated.
 */

const company = {
  name: 'Eesha Global Services',
  legalName: 'Eesha Global Services Pvt Ltd',
  shortName: 'Eesha',
  tagline: 'Abroad admissions consultancy',
  siteUrl: 'https://eeshaglobalservices.com', // no trailing slash
  email: '',          // e.g. 'info@eeshaglobalservices.com' — shown site-wide once filled in
  logo: 'assets/img/logo-192.png',
  primaryContact: 'prudhvi', // who the general "WhatsApp us" buttons go to
  counsellingContact: 'mahedhar', // who receives "Book 1:1 counselling" requests on WhatsApp
  /*
   * ENQUIRY FORM
   * Paste a Web3Forms access key here and every enquiry is emailed to you.
   * Get one free at https://web3forms.com (enter your email, the key arrives by email).
   * While this is empty, the form sends the enquiry through WhatsApp instead.
   */
  enquiryAccessKey: '',
  social: {
    instagram: '',    // full URLs; a link appears in the footer once filled in
    facebook: '',
    youtube: '',
    linkedin: '',
  },
};

/*
 * PEOPLE
 * phone: digits only, with country code, no "+" (used for tel: and WhatsApp links)
 * display: how the number is printed on the page
 * role: job title. Shown only on the About page, not on branch listings.
 * photo: optional, e.g. 'assets/img/team/prudhvi.jpg' (square works best)
 */
const people = {
  naveen: {
    name: 'Naveen',
    role: '',
    office: 'uk',
    phone: '447887133146',
    display: '+44 7887 133146',
    photo: '',
  },
  prudhvi: {
    name: 'Ailuri Prudhvi Reddy',
    role: 'MD / CEO',
    office: 'vijayawada',
    phone: '917093548281',
    display: '+91 70935 48281',
    photo: '',
  },
  mahedhar: {
    name: 'Mahedharsai',
    role: '',
    office: 'chennai',
    phone: '918897559376',
    display: '+91 88975 59376',
    photo: '',
  },
  sandeep: {
    name: 'Meriga Sandeep',
    role: 'Managing Director',
    office: 'ongole',
    phone: '917036285535',
    display: '+91 70362 85535',
    photo: '',
  },
  bhargav: {
    name: 'Kanakam Bhargav',
    role: 'Managing Director',
    office: 'darsi',
    phone: '918341617304',
    display: '+91 83416 17304',
    photo: '',
  },
  siva: {
    name: 'Singamsetty Venkata Siva',
    role: 'Director',
    office: 'darsi',
    phone: '919959562169',
    display: '+91 99595 62169',
    photo: '',
  },
  sai: {
    name: 'Orugu Naga Venkata Sai',
    role: 'Chief Marketing Officer',
    office: 'vijayawada',
    phone: '918520919679',
    display: '+91 85209 19679',
    photo: '',
  },
  vaishnavi: {
    name: 'Vaishnavi',
    role: '',
    office: 'kakinada',
    phone: '918523890135',
    display: '+91 85238 90135',
    photo: '',
  },
};

/*
 * OFFICES — shown on the site in exactly this order.
 * kind: small label under the city name; leave '' for none
 * lead: the person whose number is shown first. Leave '' if nobody is assigned yet;
 *       the office then shows the main number (company.primaryContact) instead.
 * address: leave '' until you have the exact text; it appears automatically once filled in
 * mapUrl: paste a Google Maps share link; until then a search link for the city is used
 * hours: e.g. 'Mon–Sat, 10 am – 7 pm'
 */
const offices = [
  { id: 'uk', city: 'United Kingdom', region: '', kind: 'International head office', lead: 'naveen', team: [], address: '', mapUrl: '', hours: '', inIndia: false },
  { id: 'vijayawada', city: 'Vijayawada', region: 'Andhra Pradesh', kind: '', lead: 'sai', team: ['prudhvi'], address: '', mapUrl: '', hours: '', inIndia: true },
  { id: 'chennai', city: 'Chennai', region: 'Tamil Nadu', kind: '', lead: 'mahedhar', team: [], address: '', mapUrl: '', hours: '', inIndia: true },
  { id: 'ongole', city: 'Ongole', region: 'Andhra Pradesh', kind: '', lead: 'sandeep', team: [], address: '', mapUrl: '', hours: '', inIndia: true },
  { id: 'hyderabad', city: 'Hyderabad', region: 'Telangana', kind: '', lead: '', team: [], address: '', mapUrl: '', hours: '', inIndia: true },
  { id: 'darsi', city: 'Darsi', region: 'Andhra Pradesh', kind: '', lead: 'bhargav', team: ['siva'], address: '', mapUrl: '', hours: '', inIndia: true },
  { id: 'kakinada', city: 'Kakinada', region: 'Andhra Pradesh', kind: '', lead: 'vaishnavi', team: [], address: '', mapUrl: '', hours: '', inIndia: true },
];

/*
 * DESTINATIONS
 * Facts here are deliberately general. Visa and work rules change often,
 * so every country page tells students that the counsellor confirms current rules.
 */
const destinations = [
  {
    id: 'uk',
    file: 'study-in-uk.html',
    flag: 'gb',
    name: 'United Kingdom',
    short: 'the UK',
    intakes: 'September, January',
    masters: '1 year',
    bachelors: '3 years (4 in Scotland)',
    tests: 'IELTS or PTE; some universities accept TOEFL, Duolingo or Class 12 English marks',
    visa: 'Student visa',
    summary:
      'One-year master’s degrees, two main intakes, and our own office in the country.',
    why: [
      'Most master’s degrees take one year, so you pay living costs for one year instead of two.',
      'Two main intakes, September and January, give you a second chance if you miss the first.',
      'Some universities accept strong Class 12 English marks in place of a language test.',
      'Eesha has its own office in the UK, so you have a contact in the country.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score, or a waiver from the university',
      'Statement of purpose and letters of recommendation',
      'CAS (Confirmation of Acceptance for Studies) from your university',
      'Bank statements or an education loan sanction letter',
      'Tuberculosis test certificate from an approved clinic',
    ],
    after:
      'After your degree you can apply for the Graduate Route visa, which lets you stay in the UK and work or look for work.',
    fields: ['Business and management', 'Computer science and data', 'Engineering', 'Public health and nursing', 'Law'],
  },
  {
    id: 'usa',
    file: 'study-in-usa.html',
    flag: 'us',
    name: 'United States',
    short: 'the USA',
    intakes: 'Fall (Aug–Sep), Spring (Jan)',
    masters: '2 years',
    bachelors: '4 years',
    tests: 'TOEFL, IELTS or Duolingo; GRE or GMAT for some courses',
    visa: 'F-1 student visa',
    summary:
      'The widest choice of universities and courses, with work options after STEM degrees.',
    why: [
      'Thousands of universities, so there is a realistic option for most academic profiles.',
      'Courses are flexible: you choose electives and can often change your focus as you go.',
      'Many universities no longer ask for the GRE; we tell you which ones do.',
      'Graduates can work in their field after the degree, with a longer period for STEM subjects.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree transcripts',
      'English test score, plus GRE or GMAT where the course asks for it',
      'Statement of purpose, résumé and letters of recommendation',
      'Form I-20 from your university',
      'Bank statements or an education loan sanction letter',
      'SEVIS fee receipt and DS-160 confirmation for the visa interview',
    ],
    after:
      'Optional Practical Training (OPT) lets you work in your field after you graduate. Graduates of STEM courses can apply for an extension.',
    fields: ['Computer science', 'Data science and AI', 'Engineering', 'Business analytics and MBA', 'Life sciences'],
  },
  {
    id: 'canada',
    file: 'study-in-canada.html',
    flag: 'ca',
    name: 'Canada',
    short: 'Canada',
    intakes: 'September, January, May',
    masters: '1–2 years',
    bachelors: '4 years',
    tests: 'IELTS, PTE or TOEFL',
    visa: 'Study permit',
    summary:
      'Universities and public colleges, three intakes a year, and work rights that depend on your course.',
    why: [
      'You can choose between university degrees and shorter, career-focused college programmes.',
      'Three intakes a year: September, January and May.',
      'Co-op programmes build paid work experience into the course.',
      'Whether you can work after graduating depends on the course and college, so we check that before you apply.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Letter of acceptance from a designated learning institution',
      'Attestation letter from the province, where it is required',
      'Proof of funds (a GIC is commonly used)',
      'Study plan and medical examination',
    ],
    after:
      'Many graduates qualify for a post-graduation work permit. Eligibility depends on your programme and institution, and we confirm it before you accept an offer.',
    fields: ['Business and project management', 'IT and software', 'Healthcare', 'Engineering technology', 'Supply chain'],
  },
  {
    id: 'australia',
    file: 'study-in-australia.html',
    flag: 'au',
    name: 'Australia',
    short: 'Australia',
    intakes: 'February, July',
    masters: '1.5–2 years',
    bachelors: '3 years',
    tests: 'IELTS, PTE or TOEFL',
    visa: 'Student visa (subclass 500)',
    summary:
      'Highly ranked universities, February and July intakes, and a graduate visa after you finish.',
    why: [
      'Several Australian universities rank among the best in the world.',
      'February and July intakes fit well with Indian academic calendars.',
      'PTE is widely accepted, which many students find easier to schedule.',
      'A graduate visa lets eligible students stay and work after their course.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Confirmation of Enrolment (CoE) from your university',
      'Genuine Student statement',
      'Overseas Student Health Cover (OSHC)',
      'Bank statements or an education loan sanction letter',
    ],
    after:
      'Eligible graduates can apply for the Temporary Graduate visa (subclass 485) to stay and work after their course.',
    fields: ['IT and cyber security', 'Engineering', 'Nursing and health', 'Accounting and business', 'Construction management'],
  },
  {
    id: 'germany',
    file: 'study-in-germany.html',
    flag: 'de',
    name: 'Germany',
    short: 'Germany',
    intakes: 'Winter (Sep–Oct), Summer (Mar–Apr)',
    masters: '2 years',
    bachelors: '3–4 years',
    tests: 'IELTS or TOEFL for English-taught courses; German for others',
    visa: 'National student visa',
    summary:
      'Low or no tuition at many public universities, and strong engineering and technology courses.',
    why: [
      'Many public universities charge little or no tuition, even for international students.',
      'A large number of master’s courses are taught fully in English.',
      'Germany is known for engineering, automotive and manufacturing courses.',
      'Graduates can stay on a residence permit while they look for a job.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'APS certificate (required for Indian applicants)',
      'English or German language score',
      'Motivation letter, CV and letters of recommendation',
      'Admission letter from your university',
      'Blocked account confirmation and health insurance',
    ],
    after:
      'After graduating you can apply for a residence permit that gives you time to find work related to your degree.',
    fields: ['Mechanical and automotive engineering', 'Computer science', 'Electrical engineering', 'Data science', 'Management'],
  },
  {
    id: 'ireland',
    file: 'study-in-ireland.html',
    flag: 'ie',
    name: 'Ireland',
    short: 'Ireland',
    intakes: 'September, some in January',
    masters: '1 year',
    bachelors: '3–4 years',
    tests: 'IELTS, PTE, TOEFL or Duolingo',
    visa: 'Study visa',
    summary:
      'English-speaking, one-year master’s degrees, and a base for many global technology and pharma companies.',
    why: [
      'An English-speaking country inside the European Union.',
      'Most master’s degrees take one year.',
      'Many global technology and pharmaceutical companies have their European offices in Ireland.',
      'Graduates can stay on after their course to look for work.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Offer letter and fee payment receipt from your university',
      'Bank statements or an education loan sanction letter',
      'Medical insurance',
      'Statement of purpose',
    ],
    after:
      'The Third Level Graduate Programme lets graduates stay in Ireland after their course to look for work.',
    fields: ['Computer science and cloud', 'Data analytics', 'Pharmaceutical science', 'Finance', 'Business'],
  },
  {
    id: 'france',
    file: 'study-in-france.html',
    flag: 'fr',
    name: 'France',
    short: 'France',
    intakes: 'September, some in January',
    masters: '1–2 years',
    bachelors: '3 years',
    tests: 'IELTS or TOEFL for English-taught courses; French (DELF, DALF or TCF) for others',
    visa: 'Long-stay student visa (VLS-TS)',
    summary:
      'Well-known business and engineering schools, with a large number of master’s courses taught in English.',
    why: [
      'France’s business schools, the grandes écoles, are among the best known in Europe for management and finance.',
      'Fees at public universities are set by the government and are lower than in most English-speaking countries.',
      'A large number of master’s courses are taught fully in English, so French is not always needed to get in.',
      'Students can work part-time while they study.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English or French language score',
      'Statement of purpose, CV and letters of recommendation',
      'Admission letter from your university or school',
      'Campus France file and interview (the Études en France procedure)',
      'Proof of funds and proof of accommodation',
    ],
    after:
      'Graduates with a master’s degree from France can apply for a post-study residence permit that gives them time to look for work.',
    fields: ['Management and marketing', 'Finance', 'Luxury and fashion management', 'Data science and AI', 'Aerospace and engineering'],
  },
  {
    id: 'nz',
    file: 'study-in-new-zealand.html',
    flag: 'nz',
    name: 'New Zealand',
    short: 'New Zealand',
    intakes: 'February, July',
    masters: '1–2 years',
    bachelors: '3 years',
    tests: 'IELTS, PTE or TOEFL',
    visa: 'Fee Paying Student Visa',
    summary:
      'Eight public universities, February and July intakes, and a work visa for eligible graduates.',
    why: [
      'New Zealand has eight universities, and all eight are public.',
      'February and July intakes line up well with Indian academic calendars.',
      'Known for agriculture, environmental science, engineering, IT and health courses.',
      'Students can work part-time during term, and eligible graduates can stay on to work.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Offer of place from your university',
      'Evidence of funds for tuition fees and living costs',
      'Statement of purpose',
      'Medical and police certificates, where your course length requires them',
    ],
    after:
      'Graduates with an eligible qualification can apply for a Post Study Work Visa. How long it lasts depends on what you studied.',
    fields: ['IT and software', 'Engineering', 'Agriculture and environment', 'Business and management', 'Health sciences'],
  },
  {
    id: 'europe',
    file: 'study-in-europe.html',
    flag: 'eu',
    name: 'Europe',
    short: 'Europe',
    intakes: 'Mostly September; some in February',
    masters: '1–2 years',
    bachelors: '3–4 years',
    tests: 'IELTS or TOEFL for English-taught courses; some universities also accept Duolingo',
    visa: 'Long-stay student visa of the country you study in',
    summary:
      'Italy, the Netherlands, Spain, Sweden, Poland and more, with many courses taught in English.',
    why: [
      'Thousands of master’s courses across Europe are taught fully in English.',
      'Public university fees in many European countries are lower than in the UK, USA or Australia.',
      'A residence permit from one Schengen country lets you make short visits to the others.',
      'Each country is known for something: design in Italy, engineering in the Netherlands and Sweden, hospitality in Switzerland.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Statement of purpose, CV and letters of recommendation',
      'Admission letter from your university',
      'Pre-enrolment on the national portal where required (for example Universitaly for Italy)',
      'Proof of funds, health insurance and proof of accommodation',
    ],
    after:
      'Most European countries let graduates stay on for a period to look for work. How long depends on the country, so we confirm the current rule before you apply.',
    fields: ['Engineering', 'Design and fashion', 'Business and management', 'Computer science and data', 'Hospitality management'],
  },
];

/*
 * FEATURES — the "Why Eesha" list on the home page and the Services page.
 * highlight: true puts it in the large top row.
 */
const features = [
  { icon: 'gift', title: 'Zero upfront fee, free counselling', text: 'Talk to our experts for free. You pay nothing to get started.', highlight: true },
  { icon: 'languages', title: 'IELTS, PTE, TOEFL, Duolingo and GRE training', text: 'Coaching for the test your universities ask for, from the same team handling your application.', highlight: true },
  { icon: 'graduation-cap', title: 'Admission into top-ranked universities', text: 'Applications to leading universities in India and abroad.', highlight: true },
  { icon: 'badge-percent', title: 'Scholarships available', text: 'We look for the scholarships and fee waivers you qualify for and help you apply.', highlight: true },
  { icon: 'piggy-bank', title: 'Low initial deposit', text: 'Start your admission with a small deposit rather than a large one-time payment.' },
  { icon: 'landmark', title: 'Financial services and bank loan assistance', text: 'End-to-end help with your education loan, from choosing a lender to getting the sanction letter.' },
  { icon: 'stamp', title: 'Visa processing and slot booking', text: 'Visa file preparation, interview practice and help booking your appointment slot.' },
  { icon: 'plane', title: 'Forex and flight ticketing', text: 'Foreign exchange and student-friendly flight tickets, arranged through us.' },
  { icon: 'bed-double', title: 'Pre-departure and accommodation assistance', text: 'A briefing before you fly and help finding somewhere to live when you land.' },
  { icon: 'arrow-left-right', title: 'University transfers in the USA', text: 'Already in the US and want to change university? We handle the transfer process.' },
  { icon: 'book-open-check', title: 'Academic assignment guidance', text: 'Support with assignments and academic writing once your course begins.' },
];

/*
 * THE FULL JOURNEY — numbered on the Services page, in this order.
 */
const journey = [
  { title: 'Free 1:1 counselling', text: 'We look at your marks, budget and goals, and tell you plainly which countries and courses are realistic.' },
  { title: 'Test preparation', text: 'IELTS, PTE, TOEFL, Duolingo or GRE training, depending on what your universities need.' },
  { title: 'University shortlist', text: 'A list of universities that fit your profile, with fees, deadlines and the reason for each choice.' },
  { title: 'Applications and SOP', text: 'We prepare your documents and statement of purpose, submit your applications and track every one.' },
  { title: 'Offer and scholarships', text: 'We help you compare offers, apply for scholarships and accept the right one.' },
  { title: 'Education loan', text: 'From eligibility to sanction letter. The loan process is explained step by step below.' },
  { title: 'Visa and slot booking', text: 'We prepare your visa file, practise the interview with you and help book your appointment.' },
  { title: 'Forex and flights', text: 'Foreign exchange, your fee payment and a flight ticket, arranged through us.' },
  { title: 'Accommodation and pre-departure', text: 'Help finding a place to live, plus a briefing on what to pack and what to expect.' },
  { title: 'Support after you land', text: 'Our UK office, university transfers in the USA, and academic assignment guidance during your course.' },
];

/*
 * EDUCATION LOAN PROCESS — shown on the Services page.
 */
const loanSteps = [
  { title: 'Check your eligibility', text: 'We look at your admission, course, co-applicant income and any collateral, and tell you which loan types fit.' },
  { title: 'Compare lenders', text: 'Public-sector banks, private banks and NBFCs differ on interest rate, collateral, margin and processing time. We lay the options side by side.' },
  { title: 'Gather documents', text: 'Admission letter, fee structure, academic records, KYC for you and your co-applicant, income proof, and property papers if the loan is secured.' },
  { title: 'Apply and follow up', text: 'We help you fill the application and stay in touch with the bank until it is processed.' },
  { title: 'Sanction letter', text: 'Once approved, the bank issues a sanction letter, which you can use as proof of funds for many visa applications.' },
  { title: 'Disbursement', text: 'The bank pays the tuition fee directly to your university, usually term by term, and releases living costs as agreed.' },
];

const faqs = [
  {
    q: 'Is counselling really free?',
    a: 'Yes. Your first counselling sessions are free and there is no upfront fee to start working with us.',
  },
  {
    q: 'When should I start?',
    a: 'About 8 to 12 months before your intake. For a September start, that means beginning the previous autumn or winter. Starting later is possible, but your choice of universities gets narrower.',
  },
  {
    q: 'Do I need IELTS?',
    a: 'It depends on the country and the university. Most accept IELTS or PTE, many also accept TOEFL or Duolingo, and some UK universities accept strong Class 12 English marks instead. We offer training for all of these tests.',
  },
  {
    q: 'I have backlogs or a gap in my studies. Can I still apply?',
    a: 'Often, yes. Many universities accept applicants with backlogs or study gaps, though your options depend on how many and on the rest of your profile. Give us the details and we will tell you where you stand.',
  },
  {
    q: 'Can you help with an education loan?',
    a: 'Yes, from start to finish: checking eligibility, comparing banks and NBFCs, preparing documents, and following up until the sanction letter arrives.',
  },
  {
    q: 'Can you guarantee an admission or a visa?',
    a: 'No, and nobody honestly can. Universities and embassies make those decisions. What we do is make sure your applications are complete, accurate and on time, which is the part you can control.',
  },
];

/*
 * STUDENT REVIEWS
 * country: 'uk' or 'usa' (any destination id works). featured: true shows it on the home page.
 * Add only real reviews, with the student's permission to show their name.
 */
const reviews = [
  { name: "Ananya Reddy", university: "University of Hertfordshire", country: 'uk', text: "Eesha Global Services guided me throughout my UK study abroad journey, from choosing the right university to completing my application. Their counselling and documentation support made the process much easier." },
  { name: "Rahul Sharma", university: "Coventry University", country: 'uk', text: "My experience with Eesha Global Services was very good. The team explained the admission process clearly and helped me prepare my documents and understand the visa requirements. Their support was really helpful." },
  { name: "Sneha Patel", university: "University of Greenwich", country: 'uk', text: "The team helped me explore suitable courses and universities in the UK based on my interests. Their timely guidance throughout the application process made my study abroad journey less stressful." },
  { name: "Karthik Varma", university: "University of East London", country: 'uk', text: "Eesha Global Services supported me at every stage of my admission process. From application submission to visa preparation, they were approachable and answered my questions patiently." },
  { name: "Priya Nair", university: "University of Portsmouth", country: 'uk', text: "I’m happy with the guidance I received from Eesha Global Services. They helped me understand the application requirements, organise my documents, and move forward with my plans to study in the UK." },
  { name: "Sai Teja", university: "University of Sunderland", country: 'uk', text: "The counselling and application support were very helpful. Eesha Global Services explained the process step by step and helped me understand the requirements for studying in the UK." },
  { name: "Divya Krishna", university: "De Montfort University", country: 'uk', text: "My experience with Eesha Global Services was smooth and reassuring. The team provided guidance on university selection, applications, and visa documentation, which helped me stay organised throughout the process." },
  { name: "Vamsi Krishna", university: "University of the West of England, Bristol", country: 'uk', text: "Eesha Global Services made the university application process easier to understand. Their team was responsive and provided useful guidance whenever I needed clarification about the next steps." },
  { name: "Neha Gupta", university: "University of Birmingham", country: 'uk', text: "The team helped me explore my study options and understand the requirements for applying to UK universities. Their counselling and assistance with documentation were valuable throughout my journey." },
  { name: "Harish Reddy", university: "University of Leicester", country: 'uk', text: "I appreciate the support from Eesha Global Services during my admission process. They guided me through the application requirements and provided helpful information about the steps involved in studying abroad." },
  { name: "Arjun Kumar", university: "Arizona State University", country: 'usa', text: "Eesha Global Services helped me navigate the process of applying to universities in the USA. Their guidance on course selection, applications, and documentation made the entire process easier to manage." },
  { name: "Pooja Sharma", university: "University of Texas at Arlington", country: 'usa', text: "The team provided helpful counselling and explained the different stages of my US university application. Their support with documentation and visa preparation helped me feel more confident." },
  { name: "Rohit Verma", university: "Northeastern University", country: 'usa', text: "I had a positive experience with Eesha Global Services. They helped me understand my university options and guided me through the application process with clear communication and timely assistance." },
  { name: "Lakshmi Priya", university: "University of Cincinnati", country: 'usa', text: "Eesha Global Services supported me throughout my overseas education journey. Their guidance on university applications and required documents helped me stay organised and understand what needed to be done at each stage." },
  { name: "Nikhil Reddy", university: "University of South Florida", country: 'usa', text: "The team was approachable and helpful throughout my application process. They clarified my doubts about university requirements and provided guidance on preparing for the student visa process." },
  { name: "Meghana Rao", university: "University of Illinois Chicago", country: 'usa', text: "I’m grateful for the counselling and support I received from Eesha Global Services. They helped me explore suitable universities and understand the application requirements for pursuing my studies in the USA." },
  { name: "Sai Kiran", university: "University of North Texas", country: 'usa', text: "Eesha Global Services made the application process more manageable by explaining each step clearly. Their assistance with documentation and visa guidance was helpful throughout my study abroad planning." },
  { name: "Aishwarya Menon", university: "San José State University", country: 'usa', text: "The team provided useful guidance on choosing a university and completing my applications. I appreciated their willingness to answer questions and help me understand the requirements for studying in the USA." },
  { name: "Varun Kumar", university: "University of Central Missouri", country: 'usa', text: "My experience with Eesha Global Services was helpful and straightforward. Their team guided me through the admission process and explained the documentation and visa preparation steps." },
  { name: "Sravya Reddy", university: "University of Maryland, Baltimore County", country: 'usa', text: "Eesha Global Services helped me understand the different stages of applying to universities in the USA. Their counselling and application guidance made the process easier to navigate and helped me prepare for the next steps." },
];

const firstMeeting = [
  'Class 10, Class 12 and degree mark sheets (photos on your phone are fine)',
  'Your passport, if you have one',
  'Any English test or GRE score you already have',
  'A rough idea of your budget, and whether you plan to take a loan',
  'Countries or courses you are curious about, even if you are not sure yet',
];

module.exports = { company, people, offices, destinations, features, journey, loanSteps, faqs, reviews, firstMeeting };
