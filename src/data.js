// src/data.js
import { LayoutGrid, Sparkles, Sun, ScanLine } from 'lucide-react';

// --- 병원 데이터 (ID가 기준이 됩니다) ---
export const INITIAL_HOSPITALS = [
    {
      id: 'h1',
      name: 'Immune Hospital',
      dept: 'Cancer & Immunity',
      description: 'A specialized medical center focusing on post-op immunity recovery and integrative cancer treatments using Korean traditional medicine.',
      location: 'Gangnam, Seoul',
      rating: 4.9,
      reviews: 128,
      doctors: 29,
      established: '2005',
      languages: ['ENG', 'JPN', 'CHN'],
      doctorProfile: {
          name: 'Dr. Kim Seok-Min',
          title: 'Chief Medical Director',
          image: 'https://placehold.co/200x200/0d9488/ffffff?text=Dr.Kim',
          years: '20+',
          school: 'Kyung Hee Univ.',
          specialties: ['Immunity Care', 'Post-Op Rehab', 'Integrative Medicine'],
          heroMetric: { value: '3,000+', label: 'Rehab Cases' }
      },
      tags: ['Cancer Care', 'Immunity', 'Rehab'],
      images: ['https://placehold.co/1200x600/0d9488/ffffff?text=Immune+Hospital+Facility'],
      logo: 'https://placehold.co/100x100/0d9488/ffffff?text=IH'
    },
    {
      id: 'h2',
      name: 'Grand Plastic Surgery',
      dept: 'Plastic Surgery',
      description: 'Korea’s premier plastic surgery clinic renowned for natural-looking results and celebrity makeovers.',
      location: 'Sinsa, Seoul',
      rating: 4.8,
      reviews: 850,
      doctors: 15,
      established: '2012',
      languages: ['ENG', 'CHN', 'THA'],
      doctorProfile: {
          name: 'Dr. Park',
          title: 'Plastic Surgery Specialist',
          image: 'https://placehold.co/200x200/db2777/ffffff?text=Dr.Park',
          years: '15+',
          school: 'Seoul Nat’l Univ.',
          specialties: ['Rhinoplasty', 'Anti-Aging', 'Facial Contour'],
          heroMetric: { value: '10,000+', label: 'Successful Cases' }
      },
      tags: ['Anti-Aging', 'Facial Contour', 'Body'],
      images: ['https://placehold.co/1200x600/db2777/ffffff?text=Grand+PS+Facility'],
      logo: 'https://placehold.co/100x100/db2777/ffffff?text=GP'
    }
  ];
  
  export const TREATMENTS = [
    {
      id: 't1',
      hospitalId: 'h1',
      hospital: 'Immune Hospital',
      title: 'High-frequency Hyperthermia',
      desc: 'Selectively targets heat-sensitive cancer cells to boost immunity.',
      fullDescription: 'High-frequency hyperthermia treatment raises the body temperature to 42°C to selectively target heat-sensitive cancer cells without damaging normal tissue. It is highly effective when combined with immunotherapy.',
      price: '$300+',
      rating: 4.9,
      tags: ['CancerCare', 'Immunity'],
      images: ['https://placehold.co/600x400?text=Hyperthermia'],
      benefits: ['Non-invasive', 'Boosts Immunity', 'Synergy with Chemo'],
      logo: 'https://placehold.co/100x100/0d9488/ffffff?text=IH'
    },
    {
      id: 't2',
      hospitalId: 'h1',
      hospital: 'Immune Hospital',
      title: 'Facial Paralysis Care',
      desc: 'Integrative acupuncture and herbal therapy for nerve restoration.',
      fullDescription: 'A comprehensive program combining traditional acupuncture, herbal medicine, and modern physical therapy to restore facial nerve function and relieve muscle stiffness.',
      price: '$150 - $250',
      rating: 4.8,
      tags: ['Rehab', 'Acupuncture'],
      images: ['https://placehold.co/600x400?text=Facial+Rehab'],
      benefits: ['Natural Recovery', 'Nerve Stimulation', 'Pain Relief'],
      logo: 'https://placehold.co/100x100/0d9488/ffffff?text=IH'
    },
    {
      id: 't3',
      hospitalId: 'h1',
      hospital: 'Immune Hospital',
      title: 'Post-op Immunity Rehab',
      desc: 'Intensive recovery program after major surgery or chemotherapy.',
      fullDescription: 'Designed for patients recovering from surgery or chemotherapy. Focuses on rebuilding the immune system through diet, herbal medicine, and physical therapy.',
      price: '$500+',
      rating: 5.0,
      tags: ['PostOp', 'Recovery'],
      images: ['https://placehold.co/600x400?text=Immunity+Rehab'],
      benefits: ['Fast Recovery', 'Detox', 'Energy Boost'],
      logo: 'https://placehold.co/100x100/0d9488/ffffff?text=IH'
    },
    {
      id: 't4',
      hospitalId: 'h2',
      hospital: 'Grand Plastic Surgery',
      title: 'Premium Ulthera Lifting',
      desc: 'Non-surgical face lifting using FDA-approved ultrasound technology.',
      fullDescription: 'Ulthera is a non-invasive lifting procedure that uses ultrasound energy to stimulate collagen production deep within the skin, providing a natural lifting effect.',
      price: '$1,200',
      rating: 4.7,
      tags: ['AntiAging', 'Lifting'],
      images: ['https://placehold.co/600x400?text=Ulthera'],
      benefits: ['No Downtime', 'FDA Approved', 'Long-lasting'],
      logo: 'https://placehold.co/100x100/db2777/ffffff?text=GP'
    }
  ];
  
export const REVIEWS_DATA = [
  { id: 1, name: "Sarah J.", country: "US", rating: 5, content: "The coordinator was very helpful. My shoulder pain is gone after the treatment!", date: "Oct 2023", helpful: 12 },
  { id: 2, name: "Kenji T.", country: "JP", rating: 5, content: "Clean facility and kind staff. Felt very safe. The result is amazing.", date: "Sep 2023", helpful: 8 },
  { id: 3, name: "Elena K.", country: "RU", rating: 5, content: "Great service. The results exceeded my expectations.", date: "Nov 2023", helpful: 4 },
];

export const PRIVACY_CONTENT = `
[Privacy Policy for HEALO]

Effective Date: October 31, 2025

1. Introduction
Bonroy Inc. (hereinafter referred to as the “Company”, provider of "HEALO" service) values your privacy and protects your personal information in compliance with the Personal Information Protection Act of the Republic of Korea.

2. Information We Collect
To provide our AI Medical Concierge services, we collect the following:
- Required: Name, Email, Password, Nationality.
- Optional: Health data (symptoms, desired procedures), Past medical records (for consultation purposes).
* We do not collect sensitive data without your explicit consent.

3. Purpose of Collection
- To verify identity and manage membership.
- To provide AI-based medical recommendations and hospital matching services.
- To process bookings and payments for medical procedures.

4. Sharing of Information
We only share your data with:
- Partner Hospitals: For medical consultation and booking confirmation (only with your consent).
- Payment Gateways: To process service fees or deposits.
We never sell your data to third parties for advertising purposes.

5. Data Retention
We retain your personal data only as long as necessary to provide our services or as required by law. You may request deletion of your account at any time via contact@healo.com.

6. Security
We use industry-standard encryption (SSL) and secure servers to protect your data. However, no transmission over the internet is 100% secure.

7. Contact Us
If you have any questions, please contact our Data Protection Officer at:
Email: contact@healo.com
Address: Seoul, Republic of Korea
`;

export const TERMS_CONTENT = `
[Terms of Service for HEALO]

Effective Date: October 31, 2025

1. Introduction
Welcome to HEALO. These Terms of Service govern your use of the HEALO website and AI Medical Concierge services operated by Bonroy Inc.

2. Nature of Service (Intermediary Role)
HEALO is a platform that connects international patients with medical institutions in Korea using AI technology.
- IMPORTANT: HEALO is NOT a medical provider. We do not provide medical advice, diagnosis, or treatment.
- The ultimate decision and responsibility for any medical procedure lie solely between the User and the Medical Institution.

3. Booking & Payments
- A deposit (typically 10% of the estimated cost) may be required to secure your appointment.
- Cancellations made 72 hours prior to the appointment are eligible for a full refund of the deposit. Cancellations made within 72 hours may be subject to penalties.

4. User Responsibilities
- You must provide accurate and up-to-date information regarding your health condition.
- You agree to comply with the hospital's policies and Korean laws during your visit.

5. Limitation of Liability
Bonroy Inc. is not liable for:
- Medical outcomes, side effects, or malpractice by the partner hospitals.
- Disputes arising directly between the User and the Hospital.
- Issues caused by false information provided by the User.

6. Intellectual Property
All content on HEALO (logos, text, AI algorithms, designs) is the property of Bonroy Inc. and is protected by copyright laws.

7. Governing Law & Jurisdiction
These Terms shall be governed by the laws of the Republic of Korea. Any disputes shall be resolved exclusively by the Seoul Central District Court.

8. Contact
For support or inquiries: contact@healo.com
`;