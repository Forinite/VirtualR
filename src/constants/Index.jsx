import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


import user1 from '../assets/profile-pictures/user1.webp'
import user2 from '../assets/profile-pictures/user2.webp'
import user3 from '../assets/profile-pictures/user3.webp'
import user4 from '../assets/profile-pictures/user4.webp'
import user5 from '../assets/profile-pictures/user5.webp'
import user6 from '../assets/profile-pictures/user6.webp'




export const navItems = [
    { label: "Features", href: "#"},
    { label: "Workflow", href: "#"},
    { label: "Pricing", href: "#"},
    { label: "Testimonials", href: "#"},
];

export const features = [
    {
        icon: <BotMessageSquare />,
        text: 'Drag-and-Drop Interface',
        description: 'Easily design and arrange You VR how environments with a user friendly drag-and-drop interface',
    },
    
    {
        icon: <Fingerprint />,
        text: 'Multi-Platform Compatibility',
        description: 'Build VR applications that run seamlessly across multiple platforms, include mobile desktop and via headset.',
    },
    {
        icon: <ShieldHalf />,
        text: 'Built-in Templates',
        description: 'Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments',
    },
    {
        icon: <BatteryCharging  />,
        text: 'Real-Time Preview',
        description: 'Preview your VR application in real-time as you make changes allowing for quick iterations and adjustments',
    },

    {
        icon: <PlugZap />,
        text: 'Collaboration Tools',
        description: 'Work together with your team in real-time in VR projects enabling seamless collaboration and idea sharing',
    },
    {
        icon: <GlobeLock />,
        text: 'Analytics Dashboard',
        description: 'Gain valuable insights into user interaction and behaviour within your VR application with an integrated analytics dashboard',
    },
]

export const checklistItems = [
    {
        title: 'Code merge made easy ' ,
        description: ' Track the performance of your VR apps and gain insights into user behaviour.' ,
    },
    {
        title: 'Review code without worry ' ,
        description: ' Track the performance of your VR apps and gain insights into user behaviour' ,
    },
    {
        title: 'AI Assistance to reduce time' ,
        description: '  Track the performance of your VR apps and gain insights into user behaviour' ,
    },
    {
        title: 'Share work in minutes ' ,
        description: '  Track the performance of your VR apps and gain insights into user behaviour' ,
    },

]

export const pricingOptions = [
    {
        title: ' Free ' ,
        price:  '$0',
        features: [
            'Private board sharing',
            '5 Gb Storage',
            'Web analytics',
            'Private Mode',
        ]

    },
    
    {
        title: 'Pro' ,
        price:  '$10',
        features: [
            'Private board sharing',
            '10 Gb Storage',
            'Web analytics',
            'Private Mode',
        ]

    },
    {
        title: 'Enterprise ' ,
        price:  '$200',
        features: [
            'Private board sharing',
            'Unlimited Storage',
            'Web analytics',
            'Private Mode',
        ]

    },

]

export const testimonials = [
    {
        user:  'John Doe',
        company: 'ABC Inc.',
        image: user1,
        text: 'I am extremely satisfied with services provided. The team was responsive, professional and delivered results beyond my expectations.'

    },
    {
        user:  'Jane Smith',
        company: 'Blue Technologies',
        image: user2,
        text: " I couldn't be happier with the outcome of our project. The team's creativity and problem solving skills were instrumental in bringing our vision to life."

    },
    {
        user:  ' David Jones',
        company: 'Quantum Individuals',
        image: user3,
        text: 'Working this company was a pleasure they want to show the details was excellent and commendable I would highly recommend it to anyone who looks top notch service an cutting edge technology provided by such companies in VR'

    },
    {
        user:  'Ronee Brown',
        company: 'Fusion Dynamics',
        image: user4,
        text: 'Working with the team at XYC Company is A game changer for our project. Their attention to detail and innovative solutions helped us achieve our goals. I really should place emphasis on the abundant efforts made by the team to make our project a reality. Looking back at this, the team should be regarded as the best in the enterprise.'

    },
    {
        user:  'Michael Wilson',
        company: 'Visionary creations',
        image: user5,
        text: 'I am amazed on the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results'

    },
    {
        user:  'Emily Davis',
        company: 'energy systems',
        image: user6,
        text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future'

    },
]

export const resourceLinks = [
    {href: '#', text: 'Getting Started'},
    {href: '#', text: 'Documentation'},
    {href: '#', text: 'Tutorial'},
    {href: '#', text: 'API Reference'},
    {href: '#', text: 'Community Forums'},
]
export const platformLinks = [
    {href: '#', text: 'Features'},
    {href: '#', text: 'Supported Devices'},
    {href: '#', text: 'System Requirements'},
    {href: '#', text: 'Downloads'},
    {href: '#', text: 'Release Notes'},
]
export const communityLinks = [
    {href: '#', text: 'Events'},
    {href: '#', text: 'Meetups'},
    {href: '#', text: 'Conferences'},
    {href: '#', text: 'Hackathons'},
    {href: '#', text: 'Jobs'},
]