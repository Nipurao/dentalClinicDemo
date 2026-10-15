/**
 * Central Configuration for DermaGlow Skin & Laser Clinic
 * Fully customizable for prospective dermatology and aesthetic clinic clients.
 */

export const skinClinicData = {
  id: 'skin',
  name: 'DermaGlow Skin & Laser Clinic',
  tagline: 'Confident Skin. Personalized Care.',
  subtitle: 'Explore personalized dermatology and skincare consultations in a professional, welcoming environment.',
  contact: {
    phone: '+91 98765 12345',
    emergencyPhone: '+91 98765 12349',
    email: 'hello@dermaglowclinic.demo',
    whatsappNumber: '919876512345',
    address: 'Level 2, The Pavilion Wellness Suites, Indiranagar, Bengaluru, Karnataka 560038',
    mapUrl: 'https://maps.google.com/?q=Indiranagar+Bengaluru+Wellness',
    hours: [
      { days: 'Monday – Saturday', time: '10:00 AM – 7:30 PM' },
      { days: 'Sunday', time: '10:30 AM – 3:30 PM (Consultations only)' }
    ]
  },
  theme: {
    accentColor: '#4a6b53', // Sage green
    secondaryColor: '#c5a880', // Warm gold
    charcoalColor: '#1f2421',
    highlightColor: '#d4af37',
    badge: 'Clinical Dermatology & Aesthetic Science'
  },
  hero: {
    badge: 'Evidence-Based Dermatology',
    headline: 'Confident Skin. Personalized Care.',
    supportingText: 'Explore personalized dermatology and skincare consultations in a professional, welcoming environment.',
    primaryCta: 'Request a Consultation',
    secondaryCta: 'Explore Treatments',
    stats: [
      { label: 'Clinical Protocols', value: '35+', note: 'Evidence-Led [Demo]' },
      { label: 'Patient Retention', value: '98.5%', note: 'Demo Metric' },
      { label: 'Medical Lasers', value: 'FDA-Cleared', note: 'Certified Systems' },
      { label: 'Dermatologist Led', value: '100%', note: 'MD Specialists' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'DermaGlow aesthetic skin clinic serene treatment suite'
  },
  whyChooseUs: [
    {
      title: 'MD Dermatologist Oversight',
      description: 'Every treatment program is diagnosed and monitored exclusively by qualified, board-certified medical doctors.',
      icon: 'UserCheck'
    },
    {
      title: 'US-FDA Cleared Technologies',
      description: 'Safe, internationally vetted laser and aesthetic systems calibrated for Indian skin phototypes (Fitzpatrick III-V).',
      icon: 'ShieldCheck'
    },
    {
      title: 'Customized Skin Formulations',
      description: 'Zero generic one-size-fits-all packs. Your regimen is tailored according to barrier health and skin genomics.',
      icon: 'Beaker'
    },
    {
      title: 'Private & Serene Environment',
      description: 'Individual tranquil consultation suites designed for complete patient privacy, dignity, and relaxation.',
      icon: 'Sparkles'
    }
  ],
  services: [
    {
      slug: 'dermatology-consultation',
      name: 'Dermatology Consultation',
      shortDescription: 'In-depth medical evaluation of skin conditions, allergies, eczema, psoriasis, and rash diagnostics by board-certified dermatologists.',
      icon: 'Stethoscope',
      badge: 'Clinical Core',
      duration: '30 - 45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      overview: 'A clinical dermatology consultation provides medical diagnosis and evidence-based management for acute and chronic skin disorders, focusing on identifying root causes rather than superficial masking.',
      idealFor: [
        'Persistent or recurring skin rashes and unexplained redness',
        'Diagnosis of eczema, dermatitis, psoriasis, and urticaria',
        'Unusual mole changes, skin growths, or atypical lesions',
        'Allergy testing and medically supervised topical regimens'
      ],
      procedureSteps: [
        { title: 'Clinical History', description: 'Detailed review of symptoms, lifestyle triggers, past medical history, and topical exposures.' },
        { title: 'Dermoscopic Analysis', description: 'Polarized light dermoscopy to evaluate skin micro-structures, pigment networks, and vascular patterns.' },
        { title: 'Diagnostic Workup', description: 'Recommending targeted blood work, patch testing, or biopsy only when medically indicated.' },
        { title: 'Prescription & Lifestyle Plan', description: 'Individualized medical prescription alongside personalized barrier-repair advice.' }
      ],
      faqs: [
        { q: 'Should I remove makeup before my consultation?', a: 'Yes. For an accurate assessment, your face and affected skin areas should be free of makeup and tinted sunscreens.' },
        { q: 'Can chronic conditions like psoriasis be cured?', a: 'While psoriasis has a genetic component, modern medical therapies and biologicals provide long-term remission and clear skin.' }
      ]
    },
    {
      slug: 'acne-acne-scar-care',
      name: 'Acne & Acne Scar Care',
      shortDescription: 'Targeted medical protocols combining sebum regulation, comedone clearing, subcision, and fractional laser skin resurfacing.',
      icon: 'Sparkles',
      badge: 'Specialty Care',
      duration: '45 - 60 mins',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      overview: 'Acne is a multifaceted inflammatory condition. We formulate comprehensive treatment protocols that quell active cystic breakouts, prevent new lesions, and gently remodel established acne scars.',
      idealFor: [
        'Persistent hormonal, cystic, or nodular acne',
        'Post-inflammatory erythema (red marks) and hyperpigmentation',
        'Depressed scars including rolling, boxcar, and ice-pick scars',
        'Adult onset acne resistant to over-the-counter products'
      ],
      procedureSteps: [
        { title: 'Grade Assessment', description: 'Categorizing acne grade and evaluating sebaceous gland activity.' },
        { title: 'Inflammation Control', description: 'Medical management with topical/systemic retinoids, anti-androgens, or targeted peels.' },
        { title: 'Scar Remodeling', description: 'Combining subcision, MNRF (microneedling radiofrequency), or fractional resurfacing.' },
        { title: 'Maintenance Care', description: 'Non-comedogenic barrier restoration to maintain clarity and prevent relapse.' }
      ],
      faqs: [
        { q: 'How long does it take to see acne improvement?', a: 'Active acne usually begins improving in 4 to 8 weeks, while cellular scar remodeling progresses over 3 to 6 months.' },
        { q: 'Will treatments cause my skin to purge?', a: 'Certain cellular-turnover topicals may cause temporary mild purging as blocked pores clear, which settles with continued guidance.' }
      ]
    },
    {
      slug: 'pigmentation-consultation',
      name: 'Pigmentation Consultation',
      shortDescription: 'Diagnostic assessment and tailored medical protocols for melasma, sun spots, freckles, and post-inflammatory darkening.',
      icon: 'Sun',
      badge: 'Complexion Focus',
      duration: '45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f02e718b178?auto=format&fit=crop&w=800&q=80',
      overview: 'Hyperpigmentation requires nuanced, safe treatment tailored to melanin-rich skin. We diagnose the exact depth of pigment (epidermal vs dermal) before recommending calibrated therapies.',
      idealFor: [
        'Hormonal melasma (mask of pregnancy) on cheeks and forehead',
        'Post-inflammatory hyperpigmentation (PIH) after acne or trauma',
        'Solar lentigines (sun spots) and uneven mottled skin tone',
        'Tanned or photo-damaged skin requiring uniform rejuvenation'
      ],
      procedureSteps: [
        { title: 'Wood Lamp / UV Imaging', description: 'Assessing whether pigment resides in the upper epidermis or deeper dermis.' },
        { title: 'Barrier Optimization', description: 'Strengthening skin barrier before initiating active pigment-lightening agents.' },
        { title: 'Targeted Therapies', description: 'Gentle Q-switched laser toning, tranexamic acid protocols, or customized depigmenting peels.' },
        { title: 'Broad-Spectrum Photoprotection', description: 'Prescribing broad-spectrum tinted mineral sunscreen shielding against UV and visible light.' }
      ],
      faqs: [
        { q: 'Can melasma be permanently removed?', a: 'Melasma can be substantially faded, but requires strict daily sun protection and maintenance to prevent recurrence triggered by UV.' },
        { q: 'Is laser safe for Indian skin tones?', a: 'Yes, when performed with low-fluence, pigment-safe wavelengths (like Nd:YAG) specifically calibrated for Fitzpatrick skin types.' }
      ]
    },
    {
      slug: 'skin-rejuvenation',
      name: 'Skin Rejuvenation',
      shortDescription: 'Advanced hydra-dermabrasion, peptide infusions, and skin boosters designed to restore cellular glow and elasticity.',
      icon: 'HeartHandshake',
      badge: 'Glow & Vitality',
      duration: '60 mins',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      overview: 'Restore moisture balance, cellular vitality, and luminosity to tired or stressed skin using clinical hydra-exfoliation and deeply hydrating hyaluronic acid micro-infusions.',
      idealFor: [
        'Dull, lackluster, dehydrated skin texture',
        'Congested pores and superficial dry flaking',
        'Pre-event skin revitalization requiring immediate luminosity',
        'Restoring environmental moisture barrier after travel or seasonal shifts'
      ],
      procedureSteps: [
        { title: 'Vortex Cleansing', description: 'A gentle suction tip loosens dead skin cells and extracts impurities.' },
        { title: 'Hydrating Exfoliation', description: 'Mild lactic and salicylic acids soften cellular debris without peeling.' },
        { title: 'Antioxidant Infusion', description: 'Flooding skin with vitamins, hyaluronic acid, and botanical antioxidants.' },
        { title: 'LED Phototherapy', description: 'Calming red and infrared light boosts cellular ATP and enhances glow.' }
      ],
      faqs: [
        { q: 'Is there any downtime after skin rejuvenation?', a: 'No downtime. You may resume regular activities immediately with an instant, fresh-faced glow.' },
        { q: 'How frequently should this be scheduled?', a: 'A monthly session is recommended for sustained hydration and clear pore maintenance.' }
      ]
    },
    {
      slug: 'laser-hair-reduction',
      name: 'Laser Hair Reduction',
      shortDescription: 'US-FDA cleared triple-wavelength diode lasers providing safe, pain-chilled, permanent hair reduction for face and body.',
      icon: 'Zap',
      badge: 'Permanent Care',
      duration: '30 - 90 mins (per area)',
      imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
      overview: 'Say goodbye to painful waxing and ingrown hairs with medical-grade laser hair reduction featuring contact cooling technology for an effortless, comfortable session.',
      idealFor: [
        'Unwanted hair on face, underarms, arms, legs, or bikini area',
        'Ingrown hairs, folliculitis, or strawberry legs',
        'Hirsutism associated with PCOS or hormonal imbalances',
        'Smooth skin maintenance with lasting hair density reduction'
      ],
      procedureSteps: [
        { title: 'Skin & Hair Patch Test', description: 'Calibrating optimal laser fluence and spot size for your specific skin and hair tone.' },
        { title: 'Cooling Gel Application', description: 'Soothing clear contact gel protects the skin surface and facilitates laser glide.' },
        { title: 'Targeted Pulsing', description: 'Selective photothermolysis targets hair follicle melanin, deactivating future growth.' },
        { title: 'Post-Laser Soothing', description: 'Application of cooling aloe vera and physical sunscreen to soothe treated skin.' }
      ],
      faqs: [
        { q: 'How many sessions are typically required?', a: 'Hair grows in cycles. Typically 6 to 8 sessions spaced 4 to 6 weeks apart are needed for 85-95% hair reduction.' },
        { q: 'Does laser hair reduction hurt?', a: 'Modern chill-tip applicators provide continuous cooling, making the sensation feel like a mild pinch or snap.' }
      ]
    },
    {
      slug: 'hair-scalp-consultation',
      name: 'Hair & Scalp Consultation',
      shortDescription: 'Trichoscopic scalp diagnostics, shedding assessments, and evidence-led therapy for androgenetic alopecia and scalp health.',
      icon: 'Activity',
      badge: 'Trichology',
      duration: '45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      overview: 'Hair thinning and sudden shedding require scientific investigation. We evaluate follicle density, sebum balance, and root micro-circulation using digital trichoscopy to create a targeted growth plan.',
      idealFor: [
        'Telogen effluvium (sudden diffuse hair shedding after stress/illness)',
        'Male and female pattern thinning (androgenetic alopecia)',
        'Chronic dandruff, scalp psoriasis, or itchy scalp dermatitis',
        'Strengthening weak, miniaturized follicles and promoting density'
      ],
      procedureSteps: [
        { title: 'Digital Trichoscopy', description: 'Micro-camera scanning to quantify hair diameter, empty follicles, and peripilar signs.' },
        { title: 'Nutritional / Endocrine Screen', description: 'Checking ferritin, vitamin D3, B12, and thyroid parameters for systemic triggers.' },
        { title: 'Clinical Therapies', description: 'Combining growth factor concentrates (GFC), mesotherapy, and proven medical solutions.' },
        { title: 'Home Regimen', description: 'Prescription peptide serums, DHT-blockers, and scalp barrier care.' }
      ],
      faqs: [
        { q: 'Can lost hair be regrown?', a: 'Miniaturized follicles can often be revitalized and thickened with early medical intervention before scarring occurs.' },
        { q: 'How does GFC differ from traditional PRP?', a: 'GFC isolates concentrated growth factors directly from platelets without red and white blood cells, minimizing post-injection inflammation.' }
      ]
    },
    {
      slug: 'chemical-peels',
      name: 'Clinical Chemical Peels',
      shortDescription: 'Dermatologist-prescribed AHA, BHA, and retinol resurfacing peels for texture refining and luminous clarity.',
      icon: 'Layers',
      badge: 'Exfoliation',
      duration: '35 - 45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f02e718b178?auto=format&fit=crop&w=800&q=80',
      overview: 'Controlled chemical exfoliation accelerates natural cellular turnover, shedding sun-damaged outer layers to reveal smoother, brighter, more uniform skin underneath.',
      idealFor: [
        'Mild post-acne scarring and rough skin texture',
        'Sun-induced tanning, freckling, and photoaging',
        'Clogged pores, blackheads, and persistent dullness',
        'Fine lines and loss of youthful luminosity'
      ],
      procedureSteps: [
        { title: 'Pre-Peel Degreasing', description: 'Cleansing the skin thoroughly to remove surface oils and ensure even peel penetration.' },
        { title: 'Acid Application', description: 'Precise application of medical glycolic, salicylic, lactic, or mandelic formulations.' },
        { title: 'Neutralization', description: 'Halting acid activity at the clinically determined depth and calming the skin.' },
        { title: 'Hydration Recovery', description: 'Ceramide infusion and mineral physical sunscreen application.' }
      ],
      faqs: [
        { q: 'Will my face visibly peel in sheets?', a: 'Most modern superficial to medium peels cause only micro-flaking or mild dryness, easily manageable with moisturizer.' },
        { q: 'Can I go to work the next day?', a: 'Yes. Most patients resume regular work immediately, avoiding direct midday sunlight.' }
      ]
    },
    {
      slug: 'anti-aging-skin-treatments',
      name: 'Anti-Aging Skin Treatments',
      shortDescription: 'Subtle, physician-administered treatments to soften expression lines, restore volume loss, and stimulate collagen.',
      icon: 'Award',
      badge: 'Age-Defying',
      duration: '45 - 60 mins',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      overview: 'Age gracefully with natural-looking rejuvenation. We focus on collagen banking, skin elasticity, and softening dynamic wrinkles while preserving your authentic facial expressions.',
      idealFor: [
        'Crow’s feet, forehead worry lines, and frown lines',
        'Volume deflation in cheeks, temples, or under-eye tear troughs',
        'Nasolabial folds and marionette shadows',
        'Skin laxity and loss of defined jawline contour'
      ],
      procedureSteps: [
        { title: 'Dynamic Facial Mapping', description: 'Analyzing facial muscle movements at rest and during expression to avoid an unnatural look.' },
        { title: 'Comfort Protocol', description: 'Application of high-strength topical numbing cream for 30 minutes.' },
        { title: 'Micro-Injections', description: 'Physician-delivered micro-droplets of neuromodulators or biocompatible hyaluronic dermal fillers.' },
        { title: 'Post-Care Review', description: 'Complementary follow-up at 14 days to evaluate symmetry and refinement.' }
      ],
      faqs: [
        { q: 'Will my face look frozen or overdone?', a: 'Never. Our aesthetic philosophy is "less is more"—subtle softening that leaves you looking refreshed, rested, and completely natural.' },
        { q: 'How long do results last?', a: 'Neuromodulators typically last 3 to 5 months, while hyaluronic acid fillers last 9 to 18 months.' }
      ]
    },
    {
      slug: 'skin-health-assessment',
      name: 'Skin Health Assessment',
      shortDescription: 'Full-body mole mapping, skin barrier diagnostic testing, and preventative cancer screening.',
      icon: 'FileText',
      badge: 'Preventive Health',
      duration: '40 mins',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      overview: 'Your skin is your largest vital organ. Our preventive assessment combines high-resolution mole photography and barrier TEWL (transepidermal water loss) metrics for complete peace of mind.',
      idealFor: [
        'Patients with numerous moles or personal/family history of skin cancers',
        'Assessing chronic eczema, sensitivity, or compromised moisture barrier',
        'Monitoring changing atypical birthmarks or pigmented spots',
        'Annual proactive wellness checkups for all age groups'
      ],
      procedureSteps: [
        { title: 'Head-to-Toe Inspection', description: 'Systematic examination of skin, scalp, nails, and mucosal borders.' },
        { title: 'Dermoscopic Documentation', description: 'High-resolution digital archiving of moles following the ABCDE criteria.' },
        { title: 'Barrier Hydration Analysis', description: 'Instrument-based measurement of skin stratum corneum hydration and sebum levels.' },
        { title: 'Customized Wellness Report', description: 'A structured digital record outlining low-risk vs monitor spots with recommended lifestyle guidance.' }
      ],
      faqs: [
        { q: 'What is the ABCDE rule for moles?', a: 'Asymmetry, Border irregularity, Color variation, Diameter greater than 6mm, and Evolving or changing over time.' },
        { q: 'How often should I get a full skin check?', a: 'Annually for general preventative health, or every 6 months for individuals with numerous atypical moles.' }
      ]
    },
    {
      slug: 'cosmetic-dermatology-consultation',
      name: 'Cosmetic Dermatology Consultation',
      shortDescription: 'Holistic facial aesthetics planning, contour analysis, and non-surgical anti-aging roadmap tailored to personal goals.',
      icon: 'Sparkle',
      badge: 'Aesthetic Strategy',
      duration: '45 mins',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      overview: 'An unhurried, collaborative consultation to discuss your aesthetic aspirations. We outline realistic outcomes, prioritize treatment timelines, and formulate an evidence-based roadmap.',
      idealFor: [
        'Individuals exploring non-surgical aesthetic enhancements for the first time',
        'Formulating comprehensive pre-wedding skincare calendars',
        'Seeking an ethical second opinion on cosmetic procedures',
        'Long-term preventative collagen preservation strategies'
      ],
      procedureSteps: [
        { title: 'Aesthetic Discussion', description: 'Listening carefully to your concerns, expectations, budget, and lifestyle schedules.' },
        { title: '3D Facial Proportions', description: 'Examining symmetry, golden ratio proportions, and light reflection points.' },
        { title: 'Multi-Modal Roadmap', description: 'Customizing a phased plan sequencing lasers, injectables, peels, and skincare.' },
        { title: 'No-Pressure Overview', description: 'Transparent discussion of expected recovery, maintenance cadence, and realistic outcomes.' }
      ],
      faqs: [
        { q: 'Am I required to book a procedure during the consultation?', a: 'No. The consultation is an educational, no-pressure discovery session for you to make an informed, comfortable decision.' },
        { q: 'Can I do a treatment on the same day?', a: 'If appropriate and time permits, certain non-invasive treatments like peels or laser patches may be initiated.' }
      ]
    }
  ],
  doctors: [
    {
      id: 'dr-aditi-deshmukh',
      name: 'Dr. Aditi Deshmukh',
      qualification: 'MBBS, MD (Dermatology, Venereology & Leprosy) [Demo Placeholder]',
      role: 'Lead Dermatologist & Aesthetic Physician',
      experience: '13+ Years Clinical Practice [Demo]',
      specialties: ['Clinical Dermatology', 'Melasma Protocols', 'Advanced Laser Systems'],
      bio: 'Dr. Aditi Deshmukh is an accomplished dermatologist specializing in pigment disorders and evidence-backed cosmetic dermatology. She believes in restoring skin barrier health before introducing intensive aesthetic interventions.',
      imageUrl: 'https://images.unsplash.com/photo-1594824813587-0b1a0304383d?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    },
    {
      id: 'dr-karan-singh',
      name: 'Dr. Karan Singh',
      qualification: 'MBBS, MD (DVL), Fellowship in Dermatosurgery [Demo Placeholder]',
      role: 'Consultant Dermatologist & Hair Restoration Specialist',
      experience: '11+ Years Clinical Practice [Demo]',
      specialties: ['Acne Scar Subcision', 'Trichology & Hair Shedding', 'MNRF Therapies'],
      bio: 'Dr. Karan Singh combines clinical dermatosurgery with non-invasive laser modalities to treat challenging acne scarring, surgical scars, and hair thinning conditions with minimal patient downtime.',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    },
    {
      id: 'dr-shreya-sen',
      name: 'Dr. Shreya Sen',
      qualification: 'MBBS, DVD, International Fellow in Aesthetic Medicine (FAM) [Demo Placeholder]',
      role: 'Aesthetic Dermatologist & Skin Rejuvenation Lead',
      experience: '9+ Years Clinical Practice [Demo]',
      specialties: ['Non-Surgical Facial Contouring', 'Chemical Exfoliation', 'Skin Boosters'],
      bio: 'Known for her nuanced, hyper-natural aesthetic technique, Dr. Shreya Sen focuses on restoring healthy tissue firmness, hydration, and luminous glow without ever looking overfilled.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    },
    {
      id: 'dr-neeraj-verma',
      name: 'Dr. Neeraj Verma',
      qualification: 'MBBS, MD (Dermatology), Diplomate in Pediatric Dermatology [Demo Placeholder]',
      role: 'Senior Consultant Dermatologist',
      experience: '15+ Years Clinical Practice [Demo]',
      specialties: ['Chronic Eczema & Psoriasis', 'Mole Mapping', 'Allergic Dermatoses'],
      bio: 'With over a decade of hospital dermatology expertise, Dr. Neeraj Verma is our senior clinician for stubborn inflammatory dermatoses, autoimmune skin disorders, and preventative mole surveillance.',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
      isDemo: true
    }
  ],
  gallery: [
    { title: 'Dermatology Consultation Suite', category: 'Suites', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
    { title: 'Medical Laser & Resurfacing Room', category: 'Technology', url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80' },
    { title: 'Serene Aesthetic Recovery Lounge', category: 'Interior', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Digital Trichoscopy & Scalp Studio', category: 'Diagnostics', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
    { title: 'Barrier Analysis & Mole Mapping', category: 'Diagnostics', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Private Skin Rejuvenation Bay', category: 'Suites', url: 'https://images.unsplash.com/photo-1512290900672-1f02e718b178?auto=format&fit=crop&w=800&q=80' }
  ],
  testimonials: [
    {
      name: 'Ananya D.',
      treatment: 'Acne Scar Care & MNRF',
      comment: 'I struggled with post-acne boxcar scars for years. Dr. Karan formulated a staged approach with subcision and laser. My skin texture has smoothed out dramatically without harsh downtime.',
      rating: 5,
      date: 'Recent Patient (Demo Placeholder)'
    },
    {
      name: 'Ritu G.',
      treatment: 'Melasma & Pigmentation Protocol',
      comment: 'Unlike other clinics that pushed instant miracle peels, Dr. Aditi repaired my skin barrier first. My melasma patches are vastly faded and my skin feels calm and resilient.',
      rating: 5,
      date: 'Recent Patient (Demo Placeholder)'
    },
    {
      name: 'Kavita N.',
      treatment: 'Laser Hair Reduction',
      comment: 'Pain-free, exceptionally clean suites, and courteous female practitioners. After 5 sessions I barely have any regrowth. The cooling laser makes it so comfortable.',
      rating: 5,
      date: 'Recent Patient (Demo Placeholder)'
    }
  ],
  faqs: [
    {
      category: 'Consultation & Visits',
      q: 'Do I need a prior appointment for dermatology consultations?',
      a: 'Yes, to guarantee unhurried attention and minimal waiting room time, we see patients strictly by appointment.'
    },
    {
      category: 'Treatment Safety',
      q: 'Are your lasers safe for sensitive or darker Indian skin tones?',
      a: 'Yes. All our medical laser systems are US-FDA cleared and specifically calibrated with long-pulse parameters safe for Fitzpatrick skin types III to V without risk of post-inflammatory hyperpigmentation.'
    },
    {
      category: 'Pricing & Packages',
      q: 'Are consultation charges adjusted if I opt for a procedure?',
      a: 'Yes, for several major procedural courses, a percentage of your initial diagnostic consultation fee is credited towards your treatment package.'
    },
    {
      category: 'Skin Preparation',
      q: 'What should I avoid before a chemical peel or laser session?',
      a: 'Avoid active retinoids, AHA/BHA exfoliants, waxing, and direct intense sunbathing for 3 to 5 days prior to your session.'
    }
  ]
};
