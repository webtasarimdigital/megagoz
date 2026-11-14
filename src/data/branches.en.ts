// ─────────────────────────────────────────────────────────────
// Branş verilerinin İngilizce metinleri (DEMO).
// Yalnızca metin alanları burada; slug, görsel, renk gibi alanlar
// branches.ts'ten gelir ve getBranches("en") ile birleştirilir.
// ─────────────────────────────────────────────────────────────
import type { Branch, BranchId, BranchService } from "./branches";

export type ServiceText = Pick<BranchService, "title" | "excerpt" | "body" | "suitable" | "benefits" | "duration" | "anesthesia" | "sessions" | "recovery" | "faqs">;
export type BranchText = Pick<Branch, "name" | "shortName" | "tagline" | "heroTitle" | "heroText" | "imageAlt" | "intro" | "highlights" | "process" | "faqs" | "formTopics"> & {
  services: Record<string, ServiceText>;
};

export const BRANCH_TEXT_EN: Record<BranchId, BranchText> = {
  /* ═════════════════════════════ EYE ═════════════════════════════ */
  goz: {
    name: "Eye Health",
    shortName: "Eye",
    tagline: "Cataract, smart lenses, laser and all eye conditions",
    heroTitle: ["Your eye health", "is in safe hands."],
    heroText:
      "MegaGöz's founding specialty. From cataract and smart lens surgery to laser treatments, pediatric eye care and retinal diseases — every eye service under one roof.",
    imageAlt: "MegaGöz eye examination",
    intro: { title: ["", ""], text: [], facts: [] },
    highlights: [],
    process: [],
    faqs: [],
    formTopics: ["Cataract / Smart Lens", "Laser Treatment", "Eye Examination", "Pediatric Eye Care", "Other"],
    services: {},
  },

  /* ═════════════════════════ MEDICAL AESTHETICS ═════════════════════════ */
  "medikal-estetik": {
    name: "Medical Aesthetics",
    shortName: "Aesthetics",
    tagline: "Botox, fillers, skin renewal and rejuvenation treatments",
    heroTitle: ["Natural results,", "signed by a physician."],
    heroText:
      "Subtle, personalised medical aesthetic treatments planned around your facial features. Every procedure begins with a physician's examination and a detailed analysis.",
    imageAlt: "Medical aesthetic skin care treatment",
    intro: {
      title: ["A medical approach", "to beauty."],
      text: [
        "Our medical aesthetics department focuses on non-surgical procedures that are quick to perform and let you return to daily life right away. Our goal is not to change your face, but to help you look rested and healthy.",
        "Before every treatment, our physician evaluates your facial proportions, skin type and medical history. Product choice, dosage and injection points are tailored to this analysis.",
      ],
      facts: [
        ["Procedure time", "15–60 min"],
        ["Anaesthesia", "Cream / local"],
        ["Back to daily life", "Usually same day"],
        ["Follow-up", "Week 2"],
      ],
    },
    highlights: [
      "Physician examination and facial analysis before every procedure",
      "Approved products with recorded batch and lot numbers",
      "Sterile treatment rooms backed by a medical centre",
      "Joint assessment with our ophthalmologists for eyelid aesthetics",
    ],
    process: [
      { title: "Consultation", text: "Your expectations and medical history are discussed." },
      { title: "Facial Analysis", text: "Your physician prepares a plan suited to your proportions." },
      { title: "Treatment", text: "Performed in a sterile setting in one comfortable session." },
      { title: "Follow-up", text: "Results are reviewed together within two weeks." },
    ],
    faqs: [
      { q: "Will the results look natural?", a: "Treatment is planned around your facial proportions; the aim is a subtle result that preserves your expressions." },
      { q: "Can I return to daily life after treatment?", a: "For most procedures such as Botox and mesotherapy you can return to work the same day. Your physician will give specific advice for each treatment." },
      { q: "Who performs the treatments?", a: "All medical aesthetic procedures are performed by the same physicians who carry out your examination." },
      { q: "Which products are used?", a: "Only products approved by the Ministry of Health are used, and each product's batch and lot number is recorded in your patient file." },
      { q: "Can several treatments be done on the same day?", a: "Where appropriate, procedures such as Botox and fillers can be combined in one session. Your physician decides after the examination." },
      { q: "Who evaluates treatments around the eyes?", a: "Treatments around the eyes are assessed together with our ophthalmologists when needed." },
    ],
    formTopics: ["Botox", "Fillers", "Skin Renewal", "Mesotherapy / PRP", "Thread Lift", "Other"],
    services: {
      botoks: {
        title: "Botox",
        excerpt: "Softens expression lines while keeping your natural look.",
        duration: "15–20 min",
        anesthesia: "Not required / cooling",
        sessions: "Single session, repeated every 4–6 months",
        recovery: "Same day",
        body: [
          { heading: "What is Botox?", text: "Botulinum toxin temporarily relaxes the expression muscles, softening dynamic lines on the forehead, between the brows and around the eyes. Applied at the right dose and points, it keeps your expressions natural — no frozen look." },
          { heading: "How is it applied?", text: "Your expressions are assessed and injection points are marked. Small amounts are injected into the muscle with very fine needles. The procedure takes 15–20 minutes; the effect starts within 3–5 days and is fully visible by week two." },
          { heading: "Aftercare", text: "Avoid lying down for the first 4 hours, do not massage the area, and avoid intense exercise, sauna and steam rooms for 24 hours. Any small touch-ups are planned at the two-week check." },
        ],
        suitable: ["Expression lines on the forehead, between the brows and around the eyes", "Those wanting a Botox brow lift", "Excessive sweating (hyperhidrosis)", "Teeth grinding and prominent jaw muscles"],
        benefits: ["Quick procedure", "No incisions, no scars", "Preserves natural expressions", "Immediate return to daily life"],
        faqs: [
          { q: "How long does Botox last?", a: "It varies from person to person, but the effect usually lasts 4–6 months. With regular treatments this period can lengthen." },
          { q: "Can Botox be done during pregnancy?", a: "Botox is not performed during pregnancy or breastfeeding." },
          { q: "Will my face look frozen?", a: "When dose and points are tailored to your expressions, your face stays expressive; the aim is to soften lines." },
        ],
      },
      dolgu: {
        title: "Dermal Fillers",
        excerpt: "Volume and balance for lips, cheekbones and jawline.",
        duration: "30–45 min",
        anesthesia: "Numbing cream",
        sessions: "Single session",
        recovery: "1–2 days",
        body: [
          { heading: "What are fillers?", text: "Hyaluronic acid fillers restore volume lost with age and balance facial contours. Hyaluronic acid occurs naturally in the body and is gradually absorbed over time." },
          { heading: "Which areas can be treated?", text: "Lips, cheekbones, tear troughs, nasolabial folds, chin and jawline are the most common areas. A different product density is chosen for each area." },
          { heading: "The procedure", text: "Numbing cream is applied, then the filler is placed with a fine needle or cannula. Mild swelling and redness settle within 1–2 days; results are visible immediately." },
        ],
        suitable: ["Those wanting lip volume and definition", "Volume loss in the cheeks", "Pronounced tear troughs", "Those wanting a more defined jawline"],
        benefits: ["Immediate results", "Not permanent, fully controlled", "Can be dissolved if needed", "Short recovery"],
        faqs: [
          { q: "How long do fillers last?", a: "Depending on the area and product, results last between 6 and 18 months." },
          { q: "Will there be bruising?", a: "Mild bruising can occur in some areas and usually fades within a few days." },
          { q: "What if I'm not happy with the result?", a: "Hyaluronic acid fillers can be dissolved with a special enzyme when needed." },
        ],
      },
      mezoterapi: {
        title: "Mesotherapy",
        excerpt: "Vitamins and actives delivered directly where your skin needs them.",
        duration: "30 min",
        anesthesia: "Numbing cream",
        sessions: "4–6 sessions, 2 weeks apart",
        recovery: "Same day",
        body: [
          { heading: "What is mesotherapy?", text: "Blends of vitamins, minerals, amino acids and hyaluronic acid are delivered into the middle layer of the skin through micro-injections, supporting hydration, radiance and elasticity." },
          { heading: "What results can I expect?", text: "Skin feels more vibrant and hydrated from the first sessions. Once the course is complete, fine lines soften and skin tone becomes more even." },
        ],
        suitable: ["Dull, tired or dehydrated skin", "Fine lines", "Those wanting to improve skin quality", "Preparing the skin before a special event"],
        benefits: ["Works directly on the skin", "Short sessions", "Can be combined with other treatments", "No scarring"],
        faqs: [
          { q: "How many sessions do I need?", a: "A course of 4–6 sessions two weeks apart is usually recommended, followed by maintenance sessions." },
          { q: "Can I wear make-up afterwards?", a: "Avoiding make-up for the first 12–24 hours is recommended." },
        ],
      },
      prp: {
        title: "PRP",
        excerpt: "Skin renewal with plasma from your own blood.",
        duration: "45 min",
        anesthesia: "Numbing cream",
        sessions: "3 sessions, 4 weeks apart",
        recovery: "Same day",
        body: [
          { heading: "What is PRP?", text: "Platelet Rich Plasma is obtained by separating a sample of your own blood in special tubes. Its growth factors support the skin's natural renewal process." },
          { heading: "The procedure", text: "A small amount of blood is drawn, the plasma is separated by centrifuge and applied to the face, neck or décolletage in the same session. The whole process takes about 45 minutes." },
        ],
        suitable: ["Reduced skin quality and firmness", "Acne scars and enlarged pores", "Under-eye darkness and fine lines", "Those preferring a natural treatment"],
        benefits: ["Made from your own blood", "Very low risk of allergy", "Supports natural renewal", "Also used for hair treatments"],
        faqs: [
          { q: "Is PRP painful?", a: "Numbing cream is applied, so the procedure is usually comfortable." },
          { q: "When will I see results?", a: "A glow is noticeable after the first session; clear results are assessed after the course is complete." },
        ],
      },
      "cilt-yenileme": {
        title: "Skin Renewal",
        excerpt: "Protocols for pigmentation, pores and uneven tone.",
        duration: "45–60 min",
        anesthesia: "Cream if needed",
        sessions: "3–6 sessions depending on skin",
        recovery: "1–3 days",
        body: [
          { heading: "What is skin renewal?", text: "Chemical peels, micro-needling and skin care protocols are combined according to your skin's needs. The aim is to reduce pigmentation, pores, acne scars and uneven tone." },
          { heading: "A personalised protocol", text: "After a skin analysis, we decide which methods to use, in what order and for how many sessions. The products you use at home are part of the plan too." },
        ],
        suitable: ["Sun spots and hormonal pigmentation", "Enlarged pores and acne scars", "Uneven skin tone", "Those wanting to improve skin texture"],
        benefits: ["Plan based on skin analysis", "One protocol for several concerns", "Gradual, controlled results", "Home care support"],
        faqs: [
          { q: "Can it be done in summer?", a: "Some peels are not recommended in summer; your physician will choose a protocol suited to the season. Sunscreen is essential in every case." },
          { q: "Will my skin peel?", a: "Depending on the method, light flaking may occur for a few days." },
        ],
      },
      "ip-askilama": {
        title: "Thread Lift",
        excerpt: "Non-surgical lifting for the face and neck.",
        duration: "45–60 min",
        anesthesia: "Local anaesthesia",
        sessions: "Single session",
        recovery: "3–5 days",
        body: [
          { heading: "What is a thread lift?", text: "Special absorbable medical threads are placed under the skin to lift sagging tissue. The threads also stimulate collagen production." },
          { heading: "The procedure", text: "Performed under local anaesthesia with fine cannulas and no incisions. A mild feeling of tightness and some swelling may last a few days." },
        ],
        suitable: ["Mild to moderate sagging of cheeks and jawline", "Drooping brows and eye area", "Patients who prefer to avoid surgery", "Those wanting to tighten the neck"],
        benefits: ["No incisions or stitches", "Immediately visible lift", "Stimulates collagen", "Short recovery"],
        faqs: [
          { q: "How long does a thread lift last?", a: "Depending on the thread and skin structure, the effect usually lasts 12–18 months." },
          { q: "Will the threads be visible?", a: "When placed with the right technique, the threads can neither be seen nor felt." },
        ],
      },
    },
  },

  /* ═════════════════════════════ HAIR TRANSPLANT ═════════════════════════════ */
  "sac-ekimi": {
    name: "Hair Transplant",
    shortName: "Hair Transplant",
    tagline: "FUE, DHI, beard & eyebrow transplant and hair loss treatments",
    heroTitle: ["Your hairline,", "designed for you."],
    heroText:
      "FUE and DHI hair transplants planned under physician supervision, beard and eyebrow transplants, and supportive treatments for hair loss. Every graft is planned for a natural look.",
    imageAlt: "Scalp assessment before a hair transplant",
    intro: {
      title: ["Natural results", "start with the right plan."],
      text: [
        "Success in hair transplantation depends less on the number of grafts than on a hairline designed for your face and the right use of the donor area. That is why every operation begins with our physician's hair analysis and design.",
        "Operations take place in a sterile operating environment within our medical centre. Washing, check-ups and photo follow-up continue with you for 12 months after the transplant.",
      ],
      facts: [
        ["Operation time", "6–8 hours"],
        ["Anaesthesia", "Local"],
        ["Back to work", "3–5 days"],
        ["Final result", "Month 12"],
      ],
    },
    highlights: [
      "Operation planning and hairline design by a physician",
      "Blood tests and dermatological pre-assessment",
      "Sterile operating environment within a medical centre",
      "12-month result tracking with photo follow-ups",
    ],
    process: [
      { title: "Hair Analysis", text: "The donor area and degree of hair loss are examined." },
      { title: "Design", text: "A hairline suited to your facial proportions is drawn." },
      { title: "Operation", text: "Performed under local anaesthesia in a single session." },
      { title: "12-Month Follow-up", text: "Washing, check-ups and result photos." },
    ],
    faqs: [
      { q: "Is a hair transplant painful?", a: "The procedure is done under local anaesthesia. Apart from the anaesthetic injections, there is usually no pain during the operation." },
      { q: "When will I see results?", a: "Transplanted hair sheds in the first months (shock loss), starts growing from month 3–4, and the final result is assessed around month 12." },
      { q: "How many grafts will I need?", a: "The number of grafts is determined during the examination based on the degree of hair loss and donor capacity." },
      { q: "Who performs the operation?", a: "Planning and hairline design are done by our physician; the operation is carried out by our experienced team under physician supervision." },
      { q: "When can I return to work?", a: "For desk jobs, most patients return to work after 3–5 days." },
      { q: "Is transplanted hair permanent?", a: "Follicles from the back of the head are resistant to hair loss and keep this property where they are transplanted." },
    ],
    formTopics: ["FUE / DHI Hair Transplant", "Beard / Eyebrow Transplant", "Female Hair Transplant", "Hair Loss Treatment", "Other"],
    services: {
      "fue-sac-ekimi": {
        title: "FUE Hair Transplant",
        excerpt: "Grafts are extracted one by one and placed into opened channels.",
        duration: "6–8 hours",
        anesthesia: "Local anaesthesia",
        sessions: "Single session",
        recovery: "7–10 days",
        body: [
          { heading: "What is FUE?", text: "Follicular Unit Extraction removes hair follicles one by one from the back of the head with a micromotor and places them into channels opened in the thinning area. It leaves no linear scar and is the most widely used technique." },
          { heading: "Operation day", text: "Your hairline is drawn and photographed, then local anaesthesia is applied. Grafts are harvested, channels are opened and grafts are placed. The operation is completed within the day and you go home the same day." },
          { heading: "After the transplant", text: "The first wash is done at our centre on day 2. Scabs fall off within 10 days. Transplanted hairs shed in the first 1–2 months (shock loss), start growing from month 3–4, and the final result is assessed at month 12." },
        ],
        suitable: ["Men and women with a sufficient donor area", "Thinning on the crown and front", "A receding hairline", "Those wanting to add density after a previous transplant"],
        benefits: ["No linear scar", "Suitable for large areas", "Permanent, natural result", "Short recovery"],
        faqs: [
          { q: "How many grafts can be transplanted?", a: "Depending on donor capacity and the degree of hair loss, 2,500–4,500 grafts are usually planned in a single session." },
          { q: "Will the transplanted hair fall out?", a: "Transplanted hair sheds temporarily in the first months; the follicles stay in place and new hair grows from month 3–4." },
          { q: "When can I exercise?", a: "Light walks are fine immediately; returning to intense exercise is usually recommended after one month." },
        ],
      },
      "dhi-sac-ekimi": {
        title: "DHI Hair Transplant",
        excerpt: "Dense, directional implantation with a Choi pen — no channel opening.",
        duration: "6–8 hours",
        anesthesia: "Local anaesthesia",
        sessions: "Single session",
        recovery: "5–7 days",
        body: [
          { heading: "What is DHI?", text: "Direct Hair Implantation uses a Choi implanter pen to open the channel and place the graft in one step. The angle and direction of each hair are controlled more precisely." },
          { heading: "When is it preferred?", text: "It is often chosen for adding density between existing hair, hairline design and unshaven transplants." },
        ],
        suitable: ["Those wanting high density at the hairline", "Adding density between existing hair", "Patients preferring an unshaven transplant", "Female patients"],
        benefits: ["High density", "Control of angle and direction", "Faster healing", "Unshaven option"],
        faqs: [
          { q: "Is DHI or FUE better?", a: "Both methods are successful; which one suits you is decided during the examination based on hair loss, hair type and expectations." },
          { q: "Is an unshaven transplant possible?", a: "An unshaven DHI transplant can be planned for suitable patients." },
        ],
      },
      "sakal-ekimi": {
        title: "Beard & Moustache Transplant",
        excerpt: "A natural beard line in sparse or empty areas.",
        duration: "4–5 hours",
        anesthesia: "Local anaesthesia",
        sessions: "Single session",
        recovery: "5–7 days",
        body: [
          { heading: "What is a beard transplant?", text: "Grafts taken from the back of the head are placed in sparse or empty areas of the beard and moustache, following the natural growth angle of facial hair." },
          { heading: "When will I see results?", text: "Transplanted hairs shed in the first weeks, start growing from month 3 and show clear results in 6–9 months. The first shave can usually be done after day 10." },
        ],
        suitable: ["Sparse or patchy beards", "Areas with burn or scar tissue", "Those wanting a fuller moustache", "Those wanting a more defined beard line"],
        benefits: ["Permanent result", "Beard design suited to your face", "No linear scar", "Completed in one session"],
        faqs: [
          { q: "Can the transplanted beard be shaved?", a: "Yes. Transplanted beard hair is permanent and can be shaved like a normal beard." },
          { q: "How many grafts are needed?", a: "Depending on the size of the area, 1,500–3,000 grafts are usually planned." },
        ],
      },
      "kas-ekimi": {
        title: "Eyebrow Transplant",
        excerpt: "Permanent eyebrows designed for your expression.",
        duration: "2–3 hours",
        anesthesia: "Local anaesthesia",
        sessions: "Single session",
        recovery: "5–7 days",
        body: [
          { heading: "What is an eyebrow transplant?", text: "Hair follicles are placed one by one into sparse or empty brow areas, following the natural direction and angle of the eyebrow. A brow shape suited to your facial proportions is drawn beforehand." },
          { heading: "Care", text: "Because transplanted brows come from scalp hair, they keep growing and need regular trimming." },
        ],
        suitable: ["Sparse or thin eyebrows", "Gaps or scars in the brows", "Those wanting a natural alternative to permanent make-up", "Those wanting to reshape their brows"],
        benefits: ["Natural, permanent look", "Personalised design", "Short procedure", "No linear scar"],
        faqs: [
          { q: "Is an eyebrow transplant permanent?", a: "Yes, the transplanted follicles are permanent." },
          { q: "When can I wear make-up?", a: "Make-up on the brow area can usually be worn after two weeks." },
        ],
      },
      "kadin-sac-ekimi": {
        title: "Female Hair Transplant",
        excerpt: "Unshaven technique for the hairline and crown.",
        duration: "5–7 hours",
        anesthesia: "Local anaesthesia",
        sessions: "Single session",
        recovery: "7–10 days",
        body: [
          { heading: "Hair transplants for women", text: "Hair loss in women is usually diffuse thinning. That is why the cause (hormonal, nutritional, thyroid, etc.) is investigated first; a transplant is planned for suitable patients." },
          { heading: "Unshaven transplant", text: "For female patients, the transplant can be done without cutting the hair, opening only a small area in the donor zone — making the return to social life more comfortable." },
        ],
        suitable: ["A high hairline or broad forehead", "Visible thinning on the crown", "Hair loss from scars or trauma", "Patients whose hair loss is under control"],
        benefits: ["Unshaven option", "Hairline design", "Pre-assessment with blood tests", "Planned alongside supportive treatments"],
        faqs: [
          { q: "Can every woman have a hair transplant?", a: "With diffuse, active hair loss the cause is investigated first; a transplant is planned when the donor area is suitable and hair loss is under control." },
          { q: "Do I need to cut my hair?", a: "An unshaven technique can be used for suitable patients." },
        ],
      },
      "sac-mezoterapisi-prp": {
        title: "Hair Mesotherapy & PRP",
        excerpt: "Support that slows hair loss and strengthens the roots.",
        duration: "30 min",
        anesthesia: "Not required",
        sessions: "4–6 sessions",
        recovery: "Same day",
        body: [
          { heading: "Supportive treatments", text: "Hair mesotherapy and PRP nourish the follicles, slow hair loss and improve the quality of existing hair. They are also used after a transplant to support healing." },
          { heading: "The procedure", text: "Applied to the scalp with fine needles. Sessions are usually planned 2–4 weeks apart." },
        ],
        suitable: ["Seasonal or stress-related hair loss", "Thinning hair", "Support after a transplant", "Early-stage hair loss"],
        benefits: ["Short sessions", "No impact on daily life", "Supports transplant results", "Improves hair quality"],
        faqs: [
          { q: "Does mesotherapy stop hair loss completely?", a: "Its effect depends on the cause of hair loss; the aim is to slow it down and strengthen the follicles." },
          { q: "How many sessions are needed?", a: "A course of 4–6 sessions is usually recommended." },
        ],
      },
    },
  },

  /* ═══════════════════════════ ORAL & DENTAL ═══════════════════════════ */
  dis: {
    name: "Oral & Dental Health",
    shortName: "Dental",
    tagline: "Implants, smile design, orthodontics and general dentistry",
    heroTitle: ["Healthy teeth,", "a confident smile."],
    heroText:
      "Specialist dentists in every area of oral and dental health — from implants and cosmetic dentistry to orthodontics, pediatric dentistry and root canal treatment.",
    imageAlt: "Dental examination",
    intro: {
      title: ["Digital planning", "for every smile."],
      text: [
        "In our oral and dental health department, treatment starts with a digital intraoral scan and any imaging needed. Several options are presented clearly with their duration and cost, and the decision is made together.",
        "From implants to orthodontics, pediatric dentistry to cosmetic treatments, our specialist dentists work to the same sterilisation and traceability standards applied across every MegaGöz department.",
      ],
      facts: [
        ["Examination", "Digital scan"],
        ["Planning", "3D imaging"],
        ["Session time", "30–90 min"],
        ["Follow-up", "Every 6 months"],
      ],
    },
    highlights: [
      "Digital intraoral scanning and 3D planning",
      "Specialist dentists in every field",
      "Sterilisation and traceability protocols",
      "Regular check-up programme after treatment",
    ],
    process: [
      { title: "Examination", text: "Intraoral examination and any imaging needed." },
      { title: "Treatment Plan", text: "Options, duration and cost are shared clearly." },
      { title: "Treatment", text: "The planned treatment is carried out in comfortable sessions." },
      { title: "Check-ups", text: "Results are maintained with regular check-ups." },
    ],
    faqs: [
      { q: "How long does implant treatment take?", a: "The implant is placed in a single session; healing with the bone usually takes 2–3 months, after which the permanent tooth is fitted." },
      { q: "How many sessions does smile design take?", a: "Including digital planning and a trial, it is usually completed in 2–3 sessions." },
      { q: "When should a child have their first dental check-up?", a: "The first check-up is recommended when the first tooth appears, or by age one at the latest." },
      { q: "Can I get a price before treatment?", a: "After the examination and imaging, your treatment plan is shared in writing with options and costs." },
      { q: "How often should I have my teeth cleaned?", a: "A check-up and, if needed, scaling are usually recommended every 6 months." },
      { q: "Do partner institutions cover dental treatments?", a: "Coverage depends on the institution and treatment; our patient advisors will give you details." },
    ],
    formTopics: ["Implants", "Smile Design / Cosmetic", "Orthodontics", "Teeth Whitening", "General Check-up", "Other"],
    services: {
      implant: {
        title: "Dental Implants",
        excerpt: "A permanent, natural-looking replacement for missing teeth.",
        duration: "30–60 min per tooth",
        anesthesia: "Local anaesthesia",
        sessions: "2–3 stages",
        recovery: "2–3 days",
        body: [
          { heading: "What is an implant?", text: "A titanium screw placed in the jawbone with a prosthetic tooth on top provides the function and look closest to a natural tooth. The gap is filled without touching the neighbouring teeth." },
          { heading: "Treatment stages", text: "Bone structure is assessed with 3D tomography and the implant position is planned. The implant is placed under local anaesthesia. Healing with the bone usually takes 2–3 months, after which the permanent crown is fitted." },
          { heading: "Care", text: "Implant teeth are brushed and flossed just like natural teeth. Check-ups every 6 months extend the life of the implant." },
        ],
        suitable: ["One or more missing teeth", "Those wanting to replace removable dentures", "Those who don't want healthy teeth cut for a bridge", "Adults with sufficient bone structure"],
        benefits: ["Natural look and feel", "No harm to neighbouring teeth", "Long-lasting solution", "Restores chewing function"],
        faqs: [
          { q: "Is implant treatment painful?", a: "The procedure is done under local anaesthesia; mild sensitivity may last a few days afterwards and is managed with pain relief." },
          { q: "Can implants be placed if there isn't enough bone?", a: "In most cases, additional procedures such as bone grafting or sinus lifting make implants possible." },
          { q: "How long do implants last?", a: "With good oral hygiene and regular check-ups, implants can last for many years." },
        ],
      },
      "gulus-tasarimi": {
        title: "Smile Design",
        excerpt: "A digitally planned smile in harmony with your features.",
        duration: "60–90 min per session",
        anesthesia: "Local if needed",
        sessions: "2–3 sessions",
        recovery: "Same day",
        body: [
          { heading: "What is smile design?", text: "A comprehensive cosmetic treatment in which the colour, shape and length of the teeth and the gum line are planned together according to your facial proportions, lips and skin tone." },
          { heading: "Digital planning and trial", text: "Your new smile is designed on screen from photos and digital scans. Before any permanent work, you see the result with an intraoral trial and can ask for changes." },
        ],
        suitable: ["Those unhappy with tooth colour and shape", "Gaps between teeth", "An uneven gum line", "Chipped or worn teeth"],
        benefits: ["Design tailored to your face", "Digital preview", "Intraoral trial", "Several concerns solved in one plan"],
        faqs: [
          { q: "Are teeth filed down in smile design?", a: "It depends on the method; with veneers, only minimal preparation is done." },
          { q: "Can I see the result in advance?", a: "Yes, you see the result beforehand through digital design and an intraoral trial." },
        ],
      },
      "zirkonyum-lamina": {
        title: "Zirconia Crowns & Veneers",
        excerpt: "Cosmetic restorations to correct colour and shape.",
        duration: "60 min per session",
        anesthesia: "Local anaesthesia",
        sessions: "2–3 sessions",
        recovery: "Same day",
        body: [
          { heading: "Zirconia crowns", text: "Metal-free, durable crowns that let light through like natural teeth. Preferred for discoloured, broken or root-canal-treated teeth." },
          { heading: "Veneers (porcelain laminates)", text: "Thin porcelain shells bonded only to the front surface of the tooth. Colour and shape are corrected with very little tooth reduction." },
        ],
        suitable: ["Discoloured teeth", "Broken or worn teeth", "Mild crowding", "Cases where whitening isn't enough"],
        benefits: ["Natural appearance", "Long-lasting and durable", "Colour-stable", "Gum-friendly"],
        faqs: [
          { q: "Zirconia or veneers?", a: "It depends on the condition of the tooth; veneers are usually preferred for healthy teeth and zirconia for worn teeth." },
          { q: "How long do they last?", a: "With good oral hygiene they can last for many years." },
        ],
      },
      ortodonti: {
        title: "Orthodontics & Clear Aligners",
        excerpt: "Straightening teeth with braces or clear aligners.",
        duration: "20–30 min per check-up",
        anesthesia: "Not required",
        sessions: "6–18 months of treatment",
        recovery: "—",
        body: [
          { heading: "What is orthodontics?", text: "Crowded, gapped or misaligned teeth are moved into the correct position using brackets (braces) or clear aligners." },
          { heading: "Clear aligner treatment", text: "Nearly invisible aligners produced through digital planning are changed at set intervals to move teeth gradually. They can be removed for eating and brushing." },
        ],
        suitable: ["Crowded or gapped teeth", "Bite problems", "Adults who don't want visible braces", "Children in the growth period"],
        benefits: ["Aesthetic and functional improvement", "Clear aligner option", "Digital treatment plan", "Better oral hygiene"],
        faqs: [
          { q: "Is there an age limit for orthodontics?", a: "Treatment is possible at any age with healthy teeth and gums." },
          { q: "How many hours a day should I wear aligners?", a: "For effective results, wearing them about 20–22 hours a day is recommended." },
        ],
      },
      "dis-beyazlatma": {
        title: "Teeth Whitening",
        excerpt: "In-office whitening with visible results in one session.",
        duration: "60 min",
        anesthesia: "Not required",
        sessions: "Single session",
        recovery: "Same day",
        body: [
          { heading: "In-office whitening", text: "After the gums are protected, a special whitening gel is applied to the teeth and activated with light. Several shades of lightening can be achieved in one session." },
          { heading: "Aftercare", text: "Avoid tea, coffee, cola, smoking and other staining substances for the first 48 hours. Temporary sensitivity passes within a few days." },
        ],
        suitable: ["Yellowed or stained teeth", "Stains from tea, coffee or smoking", "Those wanting quick results before a special day", "Adults with healthy teeth and gums"],
        benefits: ["Results in one session", "Safe, dentist-supervised treatment", "Gum protection", "Short procedure"],
        faqs: [
          { q: "Does whitening damage teeth?", a: "Whitening performed under dentist supervision does not harm enamel; temporary sensitivity may occur." },
          { q: "How long does it last?", a: "Depending on diet and habits, results can last 1–2 years." },
        ],
      },
      "cocuk-dis-hekimligi": {
        title: "Pediatric Dentistry",
        excerpt: "A gentle, child-friendly first dental experience.",
        duration: "30 min",
        anesthesia: "Local if needed",
        sessions: "Check-up every 6 months",
        recovery: "Same day",
        body: [
          { heading: "Pedodontics", text: "Pediatric dentistry protects oral health during the transition from baby teeth to permanent teeth, and prevents and treats cavities." },
          { heading: "Preventive care", text: "Preventive treatments such as fluoride and fissure sealants reduce the risk of cavities. In the first visits, helping the child get comfortable with the dentist and the setting comes first." },
        ],
        suitable: ["Children due for their first check-up", "Cavities in baby teeth", "Families wanting preventive care", "Children who are anxious about the dentist"],
        benefits: ["Child-focused approach", "Preventive treatments", "Regular follow-up programme", "Guidance for parents"],
        faqs: [
          { q: "When should the first dental check-up be?", a: "The first check-up is recommended when the first tooth appears, or by age one at the latest." },
          { q: "Baby teeth fall out anyway — do they need treatment?", a: "Yes. Baby teeth hold space for permanent teeth to come in correctly, so cavities should be treated." },
        ],
      },
    },
  },
};
