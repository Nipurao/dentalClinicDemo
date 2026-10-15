/**
 * Central Configuration for SmileCare Dental Studio
 * Fully customizable for prospective clinic clients.
 */

export const dentalClinicData = {
  id: 'dental',
  name: 'SmileCare Dental Studio',
  tagline: 'Your Healthier Smile Starts Here',
  subtitle: 'Personalized dental care in a comfortable, modern environment. Explore our treatments and request an appointment with our team.',
  contact: {
    phone: '+91 98765 43210',
    emergencyPhone: '+91 98765 43219',
    email: 'care@smilecaredental.demo',
    whatsappNumber: '919876543210',
    address: 'Suite 402, Platinum Medical Enclave, Sector 14, Gurugram, Haryana 122001',
    mapUrl: 'https://maps.google.com/?q=Gurugram+Medical+Centre',
    hours: [
      { days: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
      { days: 'Saturday', time: '9:30 AM – 6:00 PM' },
      { days: 'Sunday', time: '10:00 AM – 2:00 PM (Emergency only)' }
    ]
  },
  theme: {
    accentColor: '#0d9488',
    secondaryColor: '#0b192c',
    highlightColor: '#10b981',
    badge: 'Comprehensive Oral Wellness'
  },
  hero: {
    badge: 'Modern Dental Practice',
    headline: 'Your Healthier Smile Starts Here',
    supportingText: 'Personalized dental care in a comfortable, modern environment. Explore our treatments and request an appointment with our team.',
    primaryCta: 'Book an Appointment',
    secondaryCta: 'Explore Our Treatments',
    stats: [
      { label: 'Years Serving Community', value: '12+', note: 'Demo Metric' },
      { label: 'Patient Satisfaction', value: '99.2%', note: 'Demo Metric' },
      { label: 'Advanced Operatories', value: '6', note: 'Demo Metric' },
      { label: 'Sterilization Standard', value: 'Class B', note: 'Autoclave Monitored' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'SmileCare modern dental clinic consultation room'
  },
  whyChooseUs: [
    {
      title: 'Digital & Pain-Minimal Tech',
      description: 'Intraoral 3D scanners, low-radiation digital X-rays, and painless computer-guided anaesthesia.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Hospital-Grade Sterilization',
      description: 'Strict multi-stage Class B vacuum autoclave protocols for patient safety and contamination prevention.',
      icon: 'Sparkles'
    },
    {
      title: 'Transparent Treatment Planning',
      description: 'No hidden charges. Clear digital visualizations and itemized estimates prior to any procedure.',
      icon: 'FileText'
    },
    {
      title: 'Comfort-First Patient Experience',
      description: 'Ergonomic dental chairs, noise-canceling headphones, and gentle specialists trained in dental anxiety.',
      icon: 'HeartHandshake'
    }
  ],
  services: [
    {
      slug: 'general-dentistry',
      name: 'General Dentistry',
      shortDescription: 'Comprehensive dental exams, digital diagnostics, composite restorations, and lifelong oral health maintenance.',
      icon: 'Stethoscope',
      badge: 'Core Care',
      duration: '45 - 60 mins',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      overview: 'Our general dentistry services form the bedrock of your long-term oral well-being. Using digital diagnostics and tooth-colored composite restorations, we detect and treat dental issues in their earliest stages.',
      idealFor: [
        'Routine 6-month checkups and digital oral screenings',
        'Tooth sensitivity or early decay restoration',
        'Replacing old amalgam silver fillings with composite',
        'Preventative maintenance for healthy gums and teeth'
      ],
      procedureSteps: [
        { title: 'Digital Examination', description: 'Comprehensive visual inspection aided by high-magnification intraoral cameras.' },
        { title: 'Low-Dose Radiography', description: 'Targeted digital X-rays to assess interdental areas and underlying bone health.' },
        { title: 'Personalized Discussion', description: 'A transparent walkthrough of findings with digital photographs displayed on chairside monitors.' },
        { title: 'Gentle Restoration', description: 'Minimally invasive preparation and shade-matched composite application when needed.' }
      ],
      faqs: [
        { q: 'How often should I schedule a dental exam?', a: 'Clinical guidelines recommend a professional examination and cleaning every 6 months for most adults and children.' },
        { q: 'Are tooth-colored composite fillings durable?', a: 'Yes. Modern nano-hybrid composites bond directly to natural enamel and offer exceptional longevity and aesthetics.' }
      ]
    },
    {
      slug: 'dental-cleaning-preventive-care',
      name: 'Dental Cleaning & Preventive Care',
      shortDescription: 'Ultrasonic plaque and tartar removal, enamel polishing, and fluoride strengthening to protect gums.',
      icon: 'Sparkles',
      badge: 'Preventive',
      duration: '40 - 50 mins',
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      overview: 'Professional dental prophylaxis removes calcified tartar and bacterial biofilms that regular brushing cannot touch, safeguarding you against gingivitis and periodontal disease.',
      idealFor: [
        'Removing persistent coffee, tea, and tobacco stains',
        'Bleeding or inflamed gums (gingivitis prevention)',
        'Chronic halitosis (bad breath) management',
        'Strengthening enamel in cavity-prone teeth'
      ],
      procedureSteps: [
        { title: 'Periodontal Assessment', description: 'Measuring gum pocket depths to check for early signs of inflammation.' },
        { title: 'Ultrasonic Scaling', description: 'Gentle acoustic vibrations and cool water irrigation dislodge stubborn calculus.' },
        { title: 'Air-Flow Micro-Polishing', description: 'Buffing tooth surfaces smooth to deter future bacterial adhesion.' },
        { title: 'Enamel Remineralization', description: 'Application of professional topical fluoride varnish for acid resistance.' }
      ],
      faqs: [
        { q: 'Does dental cleaning make teeth loose?', a: 'No, this is a common myth. Cleaning removes hardened tartar that was artificially masking loose teeth caused by gum disease.' },
        { q: 'Will the cleaning be painful?', a: 'We use gentle ultrasonic instruments with temperature-controlled water. Topical numbing gel is available for sensitive teeth.' }
      ]
    },
    {
      slug: 'teeth-whitening',
      name: 'Teeth Whitening',
      shortDescription: 'In-office professional LED whitening and customized take-home trays for a luminous, refreshed smile.',
      icon: 'Sun',
      badge: 'Aesthetic',
      duration: '60 - 75 mins',
      imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      overview: 'Safely brighten natural tooth enamel under professional supervision using pH-balanced, desensitizing whitening formulations that break down deep intrinsic stains.',
      idealFor: [
        'Age-related yellowing or dull enamel',
        'Stains from dark beverages, red wine, or spices',
        'Smiles prepping for weddings, interviews, or milestone events',
        'Patients desiring immediate noticeable lightening'
      ],
      procedureSteps: [
        { title: 'Shade Calibration', description: 'Documenting starting tooth shade with a standardized photographic shade guide.' },
        { title: 'Gingival Barrier', description: 'Carefully isolating the gums and lips to protect soft tissues from the whitening gel.' },
        { title: 'Active Formula & LED', description: 'Applying medical-grade whitening gel activated in three 15-minute cycles.' },
        { title: 'Post-Care Gloss', description: 'Remineralizing treatment applied to lock in shade and eliminate post-treatment sensitivity.' }
      ],
      faqs: [
        { q: 'Will whitening damage my tooth enamel?', a: 'Professional whitening overseen by a dentist does not harm enamel structure or weaken teeth.' },
        { q: 'How long do whitening results last?', a: 'Typically 12 to 24 months, depending on dietary habits and oral hygiene.' }
      ]
    },
    {
      slug: 'root-canal-treatment',
      name: 'Root Canal Treatment',
      shortDescription: 'Advanced rotary endodontics designed to save infected teeth quickly, comfortably, and painlessly.',
      icon: 'Activity',
      badge: 'Tooth Preservation',
      duration: '60 - 90 mins (1-2 visits)',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      overview: 'Modern rotary endodontics eliminates tooth pain caused by deep infection or nerve inflammation, preserving your natural root structure for a lifetime.',
      idealFor: [
        'Persistent throbbing toothache or night pain',
        'Extreme prolonged sensitivity to hot and cold',
        'Localized swelling or gum pimple near the root',
        'Deep decay approaching the pulp chamber'
      ],
      procedureSteps: [
        { title: 'Comfort Numbing', description: 'Targeted computer-assisted local anaesthesia ensuring absolute numbness.' },
        { title: 'Microscopic Cleaning', description: 'Rotary nickel-titanium instruments disinfect intricate root canals.' },
        { title: 'Biocompatible Sealing', description: 'Sterile gutta-percha seal prevents recurrent bacterial ingress.' },
        { title: 'Crowning & Restoration', description: 'Reinforcing the treated tooth with a custom ceramic or zirconia crown.' }
      ],
      faqs: [
        { q: 'Is a root canal painful?', a: 'Modern root canals are virtually painless—no more uncomfortable than getting a standard filling.' },
        { q: 'Why not simply extract the tooth?', a: 'Preserving your natural tooth prevents adjacent teeth from drifting and avoids costlier bridges or implants later.' }
      ]
    },
    {
      slug: 'dental-implants',
      name: 'Dental Implants',
      shortDescription: 'Permanent, titanium-anchored replacements that replicate the strength, look, and feel of natural teeth.',
      icon: 'Award',
      badge: 'Restorative',
      duration: 'Varies by case',
      imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      overview: 'Dental implants are the gold standard for replacing missing teeth. A biocompatible titanium fixture fuses seamlessly with your jawbone, supporting a lifelike porcelain crown.',
      idealFor: [
        'Replacing single or multiple missing teeth',
        'Stabilizing loose lower dentures',
        'Preventing jawbone resorption following tooth loss',
        'Restoring natural chewing power and clear speech'
      ],
      procedureSteps: [
        { title: 'CBCT 3D Bone Scan', description: 'Evaluating bone volume and nerve trajectories with precision 3D tomography.' },
        { title: 'Guided Placement', description: 'Minimally invasive computer-guided surgical insertion of the titanium implant.' },
        { title: 'Osseointegration', description: 'A healing window during which natural bone knits securely to the implant fixture.' },
        { title: 'Custom Crown Attachment', description: 'Fixing an individualized zirconia crown matched to adjacent natural teeth.' }
      ],
      faqs: [
        { q: 'How long do dental implants last?', a: 'With routine dental hygiene and regular checkups, dental implants can last decades or a lifetime.' },
        { q: 'Am I a candidate if I have bone loss?', a: 'Modern bone grafting and sinus elevation techniques make implants accessible to most patients.' }
      ]
    },
    {
      slug: 'braces-clear-aligners',
      name: 'Braces & Clear Aligners',
      shortDescription: 'Discreet orthodontic correction for teens and adults using clear aligners or low-profile ceramic braces.',
      icon: 'Layers',
      badge: 'Orthodontics',
      duration: '6 - 18 months',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      overview: 'Correct crowded teeth, gaps, and bite misalignments comfortably with state-of-the-art virtually invisible clear aligners or precision ceramic brackets.',
      idealFor: [
        'Overcrowded or overlapping teeth',
        'Unwanted spacing or gaps between teeth',
        'Deep bite, open bite, or crossbite correction',
        'Adults wanting aesthetic, barely noticeable orthodontic treatment'
      ],
      procedureSteps: [
        { title: '3D Digital Impression', description: 'A 5-minute optical scan eliminating messy traditional impression trays.' },
        { title: 'Virtual Smile Simulation', description: 'Preview your tooth movements and final smile outcome on screen before starting.' },
        { title: 'Custom Aligner Series', description: 'Receive custom-manufactured medical-grade polyurethane trays changed bi-weekly.' },
        { title: 'Retainer Protection', description: 'Post-treatment clear retainers to maintain your ideal alignment indefinitely.' }
      ],
      faqs: [
        { q: 'How many hours a day must I wear aligners?', a: 'Aligners must be worn 20 to 22 hours per day, removed only for eating and brushing.' },
        { q: 'Are aligners suitable for adults?', a: 'Absolutely. Over 60% of our aligner patients are working adults.' }
      ]
    },
    {
      slug: 'pediatric-dentistry',
      name: 'Pediatric Dentistry',
      shortDescription: 'Gentle, fear-free dentistry for infants, children, and teenagers in a warm, welcoming setting.',
      icon: 'Smile',
      badge: 'Family & Kids',
      duration: '30 - 45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      overview: 'Our pediatric dental care builds positive dental attitudes for life. We specialize in early preventive care, dental sealants, and cavity treatments tailored to growing smiles.',
      idealFor: [
        'First dental visits for toddlers (around age 1)',
        'Pit and fissure dental sealants to prevent molars decay',
        'Fluoride treatments and nutritional dental counseling',
        'Gentle cavity treatment and emergency pediatric trauma care'
      ],
      procedureSteps: [
        { title: 'Friendly Orientation', description: 'Introducing child-friendly vocabulary and playful equipment demonstrations.' },
        { title: 'Gentle Examination', description: 'Counting teeth and assessing bite development with minimal fuss.' },
        { title: 'Protective Sealants', description: 'BPA-free clear resin coating brushed over molar grooves to seal out food particles.' },
        { title: 'Reward & Encouragement', description: 'Positive reinforcement, brushing rewards, and pediatric hygiene coaching.' }
      ],
      faqs: [
        { q: 'When should a child first visit the dentist?', a: 'We recommend visiting by their first birthday or when their first tooth erupts.' },
        { q: 'Are baby teeth really that important to treat?', a: 'Yes. Baby teeth guide permanent teeth into place and are vital for chewing, speech, and jaw development.' }
      ]
    },
    {
      slug: 'cosmetic-dentistry',
      name: 'Cosmetic Dentistry',
      shortDescription: 'Porcelain veneers, aesthetic bonding, and comprehensive smile makeovers tailored to facial harmony.',
      icon: 'Sparkle',
      badge: 'Smile Makeover',
      duration: 'Varies by treatment',
      imageUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      overview: 'Combine art and dental science to transform chipped, discolored, or uneven teeth with custom handcrafted porcelain veneers and artistic resin bonding.',
      idealFor: [
        'Chipped, worn down, or uneven tooth edges',
        'Severe intrinsic discoloration unresponsive to bleaching',
        'Irregular tooth shapes or minor alignment flaws',
        'Full smile rejuvenations designed for facial aesthetics'
      ],
      procedureSteps: [
        { title: 'Aesthetic Analysis', description: 'Facial photography and digital smile analysis factoring in lip lines and skin tone.' },
        { title: 'Mockup Try-In', description: 'Previewing temporary aesthetic resin veneers in your mouth before final fabrication.' },
        { title: 'Micro-Preparation', description: 'Minimal conservative enamel refinement to create room for wafer-thin porcelain.' },
        { title: 'Permanent Bonding', description: 'Permanent bonding with dual-cure dental resins for strength and natural translucency.' }
      ],
      faqs: [
        { q: 'How long do porcelain veneers last?', a: 'High-quality porcelain veneers commonly last 10 to 15+ years with proper care.' },
        { q: 'Will cosmetic veneers look artificial?', a: 'No. We work with master ceramists who replicate natural enamel layering, translucency, and light reflections.' }
      ]
    },
    {
      slug: 'tooth-extraction',
      name: 'Tooth Extraction & Wisdom Teeth',
      shortDescription: 'Gentle, minimally traumatic tooth extractions and surgical wisdom tooth management.',
      icon: 'Scissors',
      badge: 'Surgical',
      duration: '45 - 60 mins',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      overview: 'When a severely broken, impacted, or crowded tooth cannot be salvaged, our oral surgery approach prioritizes tissue preservation, minimal trauma, and quick recovery.',
      idealFor: [
        'Painful, impacted, or partially erupted third molars (wisdom teeth)',
        'Extensively fractured teeth beyond restorative repair',
        'Orthodontic extractions to relieve severe dental crowding',
        'Loose teeth resulting from advanced periodontal breakdown'
      ],
      procedureSteps: [
        { title: 'Pre-Surgical Radiography', description: 'Mapping root curvatures and adjacent nerve proximity with digital scans.' },
        { title: 'Profound Local Numbing', description: 'Ensuring zero pain during the procedure through potent, targeted anesthetics.' },
        { title: 'Atraumatic Elevation', description: 'Sectioning and gently elevating the tooth to conserve surrounding alveolar bone.' },
        { title: 'Collagen Healing Socket', description: 'Placement of healing sponge and resorbable sutures to accelerate clot formation.' }
      ],
      faqs: [
        { q: 'What is the recovery time after a wisdom tooth extraction?', a: 'Most patients resume normal non-strenuous routines in 2 to 3 days with minimal swelling.' },
        { q: 'What foods should I eat after an extraction?', a: 'Cool, soft foods such as smoothies, yogurt, mashed potatoes, and lukewarm broths are ideal.' }
      ]
    },
    {
      slug: 'emergency-dental-consultation',
      name: 'Emergency Dental Consultation',
      shortDescription: 'Same-day urgent relief for acute toothache, knocked-out teeth, broken restorations, or oral swelling.',
      icon: 'AlertCircle',
      badge: 'Urgent Care',
      duration: 'Immediate / 30 - 45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      overview: 'Dental emergencies require rapid, calm, and effective intervention. We hold priority emergency slots each day to relieve acute pain and save damaged teeth.',
      idealFor: [
        'Sudden severe, unmanageable dental pain',
        'Knocked-out (avulsed) or severely displaced teeth',
        'Broken crowns, lost fillings, or fractured teeth',
        'Facial swelling or bleeding requiring immediate clinical triage'
      ],
      procedureSteps: [
        { title: 'Immediate Pain Triage', description: 'Prompt assessment to identify the source of discomfort and administer pain relief.' },
        { title: 'Focused Diagnostics', description: 'Targeted single-tooth digital X-rays to check for nerve damage or root fracture.' },
        { title: 'Stabilization Treatment', description: 'Temporary restoration, nerve extirpation, or tooth splinting depending on injury.' },
        { title: 'Definitive Care Plan', description: 'Scheduling full restorative follow-up once the acute condition has stabilized.' }
      ],
      faqs: [
        { q: 'What should I do if a permanent tooth is knocked out?', a: 'Handle it only by the crown, do not scrub it. Place it in cold milk or saliva and reach our clinic within 60 minutes.' },
        { q: 'Can I walk in without an appointment for an emergency?', a: 'Yes. Please call our emergency helpline ahead so our clinical team can prepare the operatory.' }
      ]
    }
  ],
  doctors: [
    {
      id: 'dr-aarav-sharma',
      name: 'Dr. Aarav Sharma',
      qualification: 'BDS, MDS (Oral & Maxillofacial Surgery) [Demo Placeholder]',
      role: 'Chief Dental Surgeon & Implantologist',
      experience: '14+ Years Clinical Practice [Demo]',
      specialties: ['Dental Implants', 'Surgical Extractions', 'Full Mouth Rehabilitation'],
      bio: 'Dr. Aarav Sharma has extensive experience in surgical dentistry and guided implantology. He focuses on pain-minimal protocols and digital restorative techniques to help patients regain chewing function with ease.',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    },
    {
      id: 'dr-meera-nair',
      name: 'Dr. Meera Nair',
      qualification: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics) [Demo Placeholder]',
      role: 'Consultant Orthodontist & Clear Aligner Specialist',
      experience: '10+ Years Clinical Practice [Demo]',
      specialties: ['Clear Aligners', 'Teens Orthodontics', 'Surgical Bite Correction'],
      bio: 'Dr. Meera Nair is dedicated to crafting harmonious smiles using contemporary biomechanics and digital aligner workflows. Her patient-first approach prioritizes lifestyle comfort and aesthetic precision.',
      imageUrl: 'https://images.unsplash.com/photo-1594824813587-0b1a0304383d?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    },
    {
      id: 'dr-rohan-kapoor',
      name: 'Dr. Rohan Kapoor',
      qualification: 'BDS, MDS (Conservative Dentistry & Endodontics) [Demo Placeholder]',
      role: 'Micro-Endodontist & Restorative Specialist',
      experience: '9+ Years Clinical Practice [Demo]',
      specialties: ['Rotary Root Canals', 'Aesthetic Veneers', 'Tooth Preservation'],
      bio: 'Specializing in single-visit root canal treatments under magnification, Dr. Rohan Kapoor is known for turning feared procedures into smooth, comfortable experiences for nervous patients.',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    },
    {
      id: 'dr-ananya-joshi',
      name: 'Dr. Ananya Joshi',
      qualification: 'BDS, Fellowship in Pediatric Dentistry [Demo Placeholder]',
      role: 'Pediatric Dental Care Lead',
      experience: '8+ Years Clinical Practice [Demo]',
      specialties: ['Preventive Pediatric Care', 'Child Dental Psychology', 'Interceptive Orthodontics'],
      bio: 'Dr. Ananya brings patience, enthusiasm, and a warm demeanor to childhood oral care. She is passionate about creating positive dental experiences that instill good habits from an early age.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    }
  ],
  gallery: [
    { title: 'Advanced Digital Operatory', category: 'Facilities', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
    { title: 'Intraoral 3D Scanning Suite', category: 'Technology', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' },
    { title: 'Welcoming Patient Lounge', category: 'Interior', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Sterilization & Autoclave Bay', category: 'Sterilization', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
    { title: 'Private Consultation Room', category: 'Interior', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Pediatric Dental Zone', category: 'Facilities', url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80' }
  ],
  testimonials: [
    {
      name: 'Vikram S.',
      treatment: 'Dental Implants',
      comment: 'I was hesitant about getting an implant after losing a molar, but the team made the entire procedure seamless. Transparent pricing, no pain, and the tooth looks completely natural.',
      rating: 5,
      date: 'Recent Patient (Demo Placeholder)'
    },
    {
      name: 'Priyanka M.',
      treatment: 'Clear Aligners',
      comment: 'As a working professional, I didn’t want metal braces. The 3D scan and clear aligners gave me straight teeth in under 9 months without anyone noticing.',
      rating: 5,
      date: 'Recent Patient (Demo Placeholder)'
    },
    {
      name: 'Sunil K.',
      treatment: 'Root Canal & Ceramic Crown',
      comment: 'Severe pain brought me in on a Saturday morning. Dr. Kapoor completed the root canal with zero pain. The clinic hygiene and sterile environment is world-class.',
      rating: 5,
      date: 'Recent Patient (Demo Placeholder)'
    }
  ],
  faqs: [
    {
      category: 'Appointments & Consultations',
      q: 'How do I book an appointment?',
      a: 'You can submit an appointment enquiry through our online booking page, send a message directly to our clinic WhatsApp, or call our reception desk directly.'
    },
    {
      category: 'Appointments & Consultations',
      q: 'What should I bring to my first dental visit?',
      a: 'Please bring any previous dental X-rays or records you have, a list of current medications, and a valid photo ID.'
    },
    {
      category: 'Payments & Insurance',
      q: 'Do you offer dental financing or EMI options?',
      a: 'Yes, we provide flexible, interest-free EMI plans for extensive restorative, orthodontic, and implant procedures through partner financial institutions.'
    },
    {
      category: 'Hygiene & Safety',
      q: 'How does your clinic ensure sterilization safety?',
      a: 'We strictly adhere to international sterilization protocols using hospital-grade Class B vacuum autoclaves, disposable barrier films, and biological spore tests.'
    }
  ]
};
