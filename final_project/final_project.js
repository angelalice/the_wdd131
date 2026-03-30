/* Objects */

const health_info = [
    {
        name: "United Healthcare Children's Foundation",
        description: "Provides medical grants for expenses that are not covered by health insurance",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Medical Funding"],
        web_link: "https://www.uhccf.org/?gad_source=1&gad_campaignid=16517755426&gbraid=0AAAAABai7SZMowzV6FuAPzDM2H0z5b43m&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HVjDVTRM_qum43FoTjQ9v20VQoEpXG5OcCUNmD9Bzu1JIDtzczy9EQaAk-PEALw_wcB"
    },
    {
        name: "Idaho Parents Unlimited",
        description: "Helps families of children with special needs get the support they need, from funding to training",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Disability Support", "Medical Funding"],
        web_link: "https://ipulidaho.org/"
    },
    {
        name: "Ronald McDonald House Charities",
        description: "Assists families with housing and meals as they support their ill child",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Housing"],
        web_link: "https://ronaldmcdonaldhouse.org/donate?c_src=paid&c_src2=26AORPM_search_google_exact&utm_campaign=exactnew&utm_medium=googlesem&gclsrc=aw.ds&gad_source=1&gad_campaignid=23138553047&gbraid=0AAAAACRPtoQGn16vFtaZ_bi2EpI16TnkF&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HWDruZHa0lQRgSu-xqpcXTNkPCie0K1xmqd_7-R7ZSqXjCS_jCDVdAaAoupEALw_wcB"
    },
    {
        name: "Family Voices",
        description: "Supports families with children who have special needs through its various programs",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Disability Support", "Disability Programs" ],
        web_link: "https://familyvoices.org/"
    },
    {
        name: "Child Mind Institute",
        description: "Supports children and teens facing mental health issues through its various programs",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Disability Support", "Mental Health Programs"],
        web_link: "https://childmind.org/?gad_source=1&gad_campaignid=23485020427&gbraid=0AAAABCCOvtIJehcVMIQMSlF6feNLyvoc7&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HXZWtphsOKbtRb2ywkawlzbbFr55eG-Iq1bFRvzUVzdTODK-KED1hQaAsDfEALw_wcB"
    },
    {
        name: "Youth Empowerment Services",
        description: "Supports Idaho children who have mental health needs and a physical disability",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Mental Health Support", "Disability Support"],
        web_link: "https://healthandwelfare.idaho.gov/services-programs/medicaid-health/youth-empowerment-services-yes"
    },
    {
        name: "HealthWell Foundation",
        description: "Helps families cover out-of-pocket medical costs such as co-pays, premiums, and medications. ",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Medical Funding"],
        web_link: "https://www.healthwellfoundation.org/contact/?gad_source=1&gad_campaignid=6645960225&gbraid=0AAAAADt7TMNTti4UrfVlBIIfW2sTtNQMx&gclid=CjwKCAjw-J3OBhBuEiwAwqZ_hy2rDG2niXC5QOgeRrsaWxYDed71yXBPRjrLQ_EeL46viDzihFPJzhoC6n0QAvD_BwE"
    },
    {
        name: "Patient Advocate Foundation",
        description: "Provides financial aid and case management for families dealing with serious illnesses ",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Medical Funding"],
        web_link: "https://www.patientadvocate.org/"
    },
    {
        name: "The Assistance Fund",
        description: "Offers financial support for children with chronic or life-threatening conditions",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Medical Funding"],
        web_link: "https://tafcares.org/"
    },
    {
        name: "Shriners Children’s",
        description: "Offers specialized medical care for children regardless of ability to pay",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Specialized Medical Support"],
        web_link: "https://www.shrinerschildrens.org/en/locations"
    }
    
]

const education_info = [
    {
        name: "National Center for Learning Disabilities",
        description: "Provides resources and scholarships for children with learning disabilities",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Educational Funding", "Educational Resources"],
        web_link: "https://ncld.org/"
    },
    {
        name: "Giraffe Laugh Early Learning Centers",
        description: "Offers a tuition scholarship for families that need temporary support or don’t qualify for Idaho’s state support",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Early Education Funding"],
        web_link: "https://www.giraffelaugh.org/"
    },
    {
        name: "Head Start/ Early Head Start",
        description: "Offers free early education and other resources to low-income families",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Early Education Funding"],
        web_link: "https://cdrv.org/cdr-programs-and-services/early-head-start/?gad_source=1&gad_campaignid=22255206237&gbraid=0AAAAABuXtGBpS-ByDs-Tyk5zYGWhGfhXv&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HVvgmi-A6U0R1K1UsUhk80FEVk6oPOKapmqf1jd01aXD-KzIwtEGusaAo7zEALw_wcB"
    },
    {
        name: "Big Brothers Big Sisters",
        description: "Offers mentorship to children from the ages of 5 to 18. These individuals are paired with someone older than they are to foster meaningful relationships and inspiration",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Disability Support"],
        web_link: "https://bbbsil.org/bbbsil-news/why-boys-need-men/?gad_source=1&gad_campaignid=20605841882&gbraid=0AAAAABgMYpUXlHKscWP5kXYXbWewO3hUK&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HU8ytGSYg_9BIiWjBPOLjxHlVOCLi1B2Y3MbnE-uBt3WrtwIDfDvB0aAue-EALw_wcB"
    },
    {
        name: "Child Mind Institute",
        description: "Supports the education of children with mental health or learning disorders",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Disability Support", "Mental Health Support"],
        web_link: "https://childmind.org/?gad_source=1&gad_campaignid=23485020427&gbraid=0AAAABCCOvtIJehcVMIQMSlF6feNLyvoc7&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HVUH40NyggnUl7Jua9z1H_lpxLbZvbah7rNTGJAcys9aIHlr8cM1r8aAtgbEALw_wcB",
    },
    {
        name: "Thornwell",
        description: "Provides various resources, including educational support for families in SC",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Educational Support"],
        web_link: "https://thornwell.org/"
    },
    {
        name: "Jack Kent Cooke Foundation",
        description: "Provides scholarships and academic support for high-achieving students with financial need",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Educational Funding", "Educational Support"],
        web_link: "https://www.jkcf.org/?gad_source=1&gad_campaignid=22878702208&gbraid=0AAAAACeDnW2FSN2GEgPA6jU_1UY-Svkwu&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HXDo7FcVQAl5F8BNpeHjk-j-LLx5Gy75mUr9lNZrbWdjpxaLIBe6ZMaAk8MEALw_wcB",
    },
    {
        name: "Khan Academy",
        description: " Provides free online lessons, practice exercises, and tutoring for students of all ages",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Educational Support"],
        web_link: "https://www.khanacademy.org/"
    },
    {
        name: "Child Care Aware of AMerica",
        description: "Helps families find affordable childcare and financial assistance programs",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Early Education Funding"],
        web_link: "https://www.childcareaware.org/?utm_campaign=Who+We+Are+-+General+Campaign+2025&utm_term=child%20care%20aware%20of%20america&utm_medium=ppc&utm_source=adwords&hsa_kw=child%20care%20aware%20of%20america&hsa_mt=b&hsa_grp=179439633560&hsa_tgt=kwd-298316872969&hsa_net=adwords&hsa_cam=22375931416&hsa_ver=3&hsa_acc=2314880181&hsa_src=g&hsa_ad=741395715589&gad_source=1&gad_campaignid=22375931416&gbraid=0AAAAADspncwNdWWagifjPCdl7zv10SvWr&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HXtgzHmJerdpXNVq-VT1g-lBmi673JuaZj85HNAlnys6wYjppi-j90aAtZmEALw_wcB"
    },
    {
        name: "Scholarships.com",
        description: "Helps families find scholarships and financial aid opportunities for students",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Educational Support", "Educational Funding"],
        web_link: "http://Scholarships.com"
    }
    
]

const safety_info = [
    {
        name: "Safe Families For Children",
        description: "Provides a safe, temporary home for children in order to allow caregivers the chance to focus on crises",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Housing", "Crisis Support"],
        web_link: "https://buildingfamiliesforchildren.org/sffc/?gad_source=1&gad_campaignid=1300799957&gbraid=0AAAAADl7cGf_0QeNQphGXR8lmeD66SKZc&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HWcgi59B5-YK1uL2TdJz-PQUgqOKkBbf_Y7S8vDqWi2tYq83UloHigaApbUEALw_wcB"
    },
    {
        name: "Charlie's House",
        description: "Offers resources to help parents and caregivers prevent accidents and fatal injuries to kids in and around the home",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Familial Support"],
        web_link: "https://www.charlieshouse.org/"
    },
    {
        name: "YWCA",
        description: "Offers various programs for children and teens who have been affected by domestic abuse",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Safety Resources", "Safety Programs"],
        web_link: "https://www.ywca.org/"
    },
    {
        name: "La Casa de Las Madres",
        description: "Provides 24/7 crisis hotlines and family violence shelters",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Safety Resources", "Crisis Support", "Housing"],
        web_link: "https://www.lacasa.org/"
    },
    {
        name: "Cradles to Crayons",
        description: "Provides children with high-quality clothing that will be packed and shipped directly to the children who need it",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Stability Support"],
        web_link: "https://www.cradlestocrayons.org/"
    },
    {
        name: "Thornwell",
        description: "Provides various resources, including support for children and families who are struggling with living in a new home from previous abuse or need to be placed in a loving home",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Mental Health Support", "Stability Support", "Familial Support", "Housing"],
        web_link: "https://thornwell.org/?gad_source=1&gad_campaignid=22664395586&gbraid=0AAAAABSGvLWSpSjN5iyllS5Ei1vi1WJVm&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HUL4G6Gdj8OO_vcz6cAA6FoGfCmt9UaSvpngQXwSec4Ywe32zn8ph8aAi-REALw_wcB"
    },
    {
        name: "Dave Thomas Foundation for Adoption",
        description: "Helps children in foster care find permanent, loving homes",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Stability Support", "Housing"],
        web_link: "https://www.davethomasfoundation.org/resource/finding-forever-families-a-step-by-step-guide-to-adoption-us/?gad_source=1&gad_campaignid=20597744797&gbraid=0AAAAADw9sihL4xO56Zow6KRIXdFjLvUQa"
    },
    {
        name: "Baby2Baby",
        description: "Provides diapers, clothing, and basic necessities to children living in poverty",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Stability Support"],
        web_link: "https://baby2baby.org/"
    },
    {
        name: "Family Promise",
        description: "Helps families facing homelessness find shelter and regain stability",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Familial Support", "Housing", "Crisis Support"],
        web_link: "https://familypromise.org/"
    },
    {
        name: "Feeding America",
        description: "Supplies food through a nationwide network of food banks, helping families in crisis",
        imgsrc: "img",
        imgalt: "alt",
        tags: ["Stability Support","Crisis Support"],
        web_link: "https://www.feedingac.org/one-time/?utm_source=google_ads&utm_medium=cpc&utm_campaign=onetime&utm_content=krhodes&utm_term=feeding%20america&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=1156189439&hsa_cam=20125311724&hsa_grp=149771845355&hsa_ad=658333330709&hsa_src=g&hsa_tgt=kwd-321990464154&hsa_kw=feeding%20america&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20125311724&gbraid=0AAAAAC9Qieo6G5yGM_znOegTYnSGWULXw&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HU_TDEbg2F2MoEqRhXcHnMytvmxZAxK4h4mCBCo19YgZVCiuxjcedsaAh4wEALw_wcB"
    }
    
]