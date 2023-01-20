import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,70,87)", "rgb(200,104,180)"];

export const info = {
    firstName: "Milan",
    lastName: "Lesnek",
    initials: "Milan",
    position: "a Backend engineer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'I love filtered coffee'
        },
        {
            emoji: '🇨🇿',
            text: 'from Czech Republic'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Kiwi.com"
        },
        {
            emoji: "📧",
            text: "milanlesnek@seznam.cz"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/milan.lesnek/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/sexymilan/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/lesnek",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/milan-lesnek-b45994133/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/MilanLesnek",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Milan. I'm a senior backend engineer at Kiwi.com. I studied Applied Informatics at Brno University of Technology, I enjoy calm places in the nature. You should hire me!",
    skills:
        {
            proficientWith: ['python', 'git', 'github', 'camunda'],
            exposedTo: ['rust', 'js', 'k8s', 'ruby', 'php']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'plants',
            emoji: '🪴'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'diy',
            emoji: '👷'
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}