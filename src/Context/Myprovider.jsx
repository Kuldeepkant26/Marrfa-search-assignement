import React, { createContext, useState } from 'react'


export const MyContext = createContext()
function Myprovider({ children }) {
    const [bookData, setBookData] = useState([
        {
            id: "A1B2Cui3D4E5",
            title: "The Silent Ocean",
            author: "Rachel Morgan",
            description: "A deep dive into the mysteries of the sea, blending fact with fiction to uncover the wonders of the ocean.",
            rating: 4.5,
            category: "Fiction"
        },
        {
            id: "F6G7H8uiI9J0",
            title: "Quantum Dreams",
            author: "Elijah Wright",
            description: "A Sci-Fi exploration of parallel worlds, quantum physics, and the possibilities that lie within alternate realities.",
            rating: 4.8,
            category: "Sci-Fi"
        },
        {
            id: "Kui1L2M3N4O5",
            title: "Unbreakable Bonds",
            author: "Sophia Bennett",
            description: "A touching novel about the relationships that define us and the strength we find in family and friendship.",
            rating: 4.2,
            category: "Fiction"
        },
        {
            id: "P6Q7R8S9uiT0",
            title: "The Entrepreneur's Handbook",
            author: "Daniel Rogers",
            description: "A comprehensive guide to building a successful business from scratch, filled with real-life examples and strategies.",
            rating: 4.7,
            category: "Non-Fiction"
        },
        {
            id: "U1V2uiW3X4Y5",
            title: "Galaxies Beyond",
            author: "Lucas Evans",
            description: "An intergalactic Sci-Fi adventure exploring uncharted territories and the civilizations that exist beyond our own galaxy.",
            rating: 4.6,
            category: "Sci-Fi"
        },
        {
            id: "Z6A7B8C9D0ui",
            title: "Mindful Living",
            author: "Olivia Carter",
            description: "A self-help book that focuses on mindfulness practices to help readers live a more focused and fulfilled life.",
            rating: 4.3,
            category: "Self-Help"
        },
        {
            id: "Eui1F2G3H4I5",
            title: "Echoes of the Past",
            author: "Benjamin Lee",
            description: "A historical fiction novel set during World War II, capturing the struggles and triumphs of ordinary people in extraordinary times.",
            rating: 4.4,
            category: "Historical Fiction"
        },
        {
            id: "J6K7L8Mui9N0",
            title: "The AI Revolution",
            author: "Isabella King",
            description: "An insightful look into the future of artificial intelligence and how it will transform industries and daily life.",
            rating: 4.9,
            category: "Non-Fiction"
        },
        {
            id: "O1Pui2Q3R4S5",
            title: "Beneath the Stars",
            author: "Ethan Walker",
            description: "A poetic exploration of love and loss, set against the backdrop of a small coastal town under the night sky.",
            rating: 4.1,
            category: "Fiction"
        },
        {
            id: "T6U7V8uiW9X0",
            title: "The Digital Age",
            author: "Mia Thompson",
            description: "A non-fiction examination of how technology has shaped modern life, from smartphones to social media.",
            rating: 4.5,
            category: "Non-Fiction"
        },
        {
            id: "Y1Z2X3W4V5",
            title: "The Final Frontier",
            author: "Ava Mitchell",
            description: "An epic Sci-Fi adventure that follows a team of astronauts as they embark on a dangerous mission to explore the edge of the known universe.",
            rating: 4.7,
            category: "Sci-Fi"
        },
        {
            id: "W6X7Y8Z9uiA0",
            title: "The Power of Habit",
            author: "Charles Duhigg",
            description: "A groundbreaking exploration of how habits work and how they can be changed to improve our lives and achieve our goals.",
            rating: 4.6,
            category: "Non-Fiction"
        },
        {
            id: "V1W2X3uiY4Z5",
            title: "A Tale of Two Cities",
            author: "Charles Dickens",
            description: "A classic novel that depicts the contrasting lives of individuals in Paris and London during the French Revolution.",
            rating: 4.3,
            category: "Historical Fiction"
        },
        {
            id: "U6uiV7W8X9Y0",
            title: "The Cosmic Code",
            author: "Heinz Pagels",
            description: "A deep dive into the fascinating world of quantum mechanics, explaining the mysteries of the universe in simple terms.",
            rating: 4.8,
            category: "Non-Fiction"
        },
        {
            id: "T1U2V3W4uiX5",
            title: "Lost in Time",
            author: "Samuel Rivera",
            description: "A gripping time-travel adventure where a historian is accidentally transported to a pivotal moment in history, with far-reaching consequences.",
            rating: 4.5,
            category: "Sci-Fi"
        },
        {
            id: "uiS6T7U8V9W0",
            title: "The Art of War",
            author: "Sun Tzu",
            description: "An ancient Chinese military treatise offering strategies for success in warfare and life, still relevant in modern times.",
            rating: 4.9,
            category: "Non-Fiction"
        },
        {
            id: "R1S2T3Uui4V5",
            title: "Shadows of the Mountain",
            author: "Lily Anderson",
            description: "A haunting mystery novel set in a remote mountain town, where secrets from the past begin to unravel in shocking ways.",
            rating: 4.4,
            category: "Mystery"
        },
        {
            id: "Q6R7S8T9U0ui",
            title: "The Infinite Mind",
            author: "Emma Hughes",
            description: "A thought-provoking exploration of the brain's potential, from memory enhancement to artificial intelligence and beyond.",
            rating: 4.7,
            category: "Non-Fiction"
        },
        {
            id: "P1Q2R3S4Tui5",
            title: "Whispers in the Dark",
            author: "Jack Thompson",
            description: "A chilling horror novel about a haunted house and the dark forces that lurk within, terrorizing its new inhabitants.",
            rating: 4.2,
            category: "Horror"
        },
        {
            id: "O6P7Q8R9uiS0",
            title: "The Road to Success",
            author: "Laura Taylor",
            description: "A motivational self-help book that offers practical advice on setting goals, overcoming obstacles, and achieving long-term success.",
            rating: 4.6,
            category: "Self-Help"
        }
        ,
        {
            id: "U1V2W3X4uiY5",
            title: "Achieve Your Goals",
            author: "Fiona Harper",
            description: "A step-by-step guide to setting and achieving long-term goals in both personal and professional life.",
            rating: 4.4,
            category: "Self-Help"
        },
        {
            id: "V6W7X8Yui9Z0",
            title: "Unlocking Creativity",
            author: "Jake Armstrong",
            description: "A motivational book designed to help individuals harness their creative potential in everyday life.",
            rating: 4.5,
            category: "Self-Help"
        },
        {
            id: "W1X2Y3Zui4A5",
            title: "The Art of Focus",
            author: "Liam Collins",
            description: "A guide to eliminating distractions and improving productivity in a digital world.",
            rating: 4.6,
            category: "Self-Help"
        },
        {
            id: "X6Y7Z8A9B0",
            title: "Embracing Change",
            author: "Charlotte Lewis",
            description: "A practical book about adapting to life’s inevitable changes and turning challenges into opportunities.",
            rating: 4.7,
            category: "Self-Help"
        },
        {
            id: "Y1Z2A3Bui4C5",
            title: "The Power of Positivity",
            author: "Lucas Reed",
            description: "A book on the science and benefits of maintaining a positive mindset to improve well-being.",
            rating: 4.8,
            category: "Self-Help"
        },
        {
            id: "P6Q7R8Sui9T0",
            title: "The Lost Battalion",
            author: "Harper James",
            description: "A historical novel based on the true story of a battalion that disappeared during World War I.",
            rating: 4.4,
            category: "Historical Fiction"
        },
        {
            id: "Q1R2S3T4uiU5",
            title: "Empire of Ashes",
            author: "Clara Evans",
            description: "A gripping tale of a Roman general’s rise and fall during the height of the Roman Empire.",
            rating: 4.5,
            category: "Historical Fiction"
        },
        {
            id: "R6uiS7T8U9V0",
            title: "The Distant Shore",
            author: "Thomas Clark",
            description: "A saga of survival and love set in the aftermath of the Civil War.",
            rating: 4.3,
            category: "Historical Fiction"
        },
        {
            id: "S1T2uiU3V4W5",
            title: "The King's Secret",
            author: "Eleanor Baker",
            description: "A historical mystery revolving around a hidden heir to the throne in 17th-century England.",
            rating: 4.6,
            category: "Historical Fiction"
        },
        {
            id: "T6U7Vui8W9X0",
            title: "The Silk Road Saga",
            author: "Arthur Grant",
            description: "An epic tale of merchants, explorers, and adventurers traveling the ancient Silk Road.",
            rating: 4.7,
            category: "Historical Fiction"
        },
        {
            id: "Kpi1L2M3N4O5",
            title: "Building Resilience",
            author: "Grace Hill",
            description: "An insightful guide to developing mental strength and resilience in challenging times.",
            rating: 4.5,
            category: "Non-Fiction"
        },
        {
            id: "uiL6M7N8O9P0",
            title: "The Economics of Tomorrow",
            author: "David Roberts",
            description: "A comprehensive look at how technology and innovation are shaping the future of the global economy.",
            rating: 4.7,
            category: "Non-Fiction"
        },
        {
            id: "M1N2O3P4Q5ui",
            title: "Mind Over Matter",
            author: "Sophia Wright",
            description: "A self-help book focusing on mindfulness and mental clarity in the digital age.",
            rating: 4.6,
            category: "Non-Fiction"
        },
        {
            id: "Nui6O7P8Q9R0",
            title: "Leadership Redefined",
            author: "Mark Stewart",
            description: "A modern take on leadership, providing strategies to lead with empathy and innovation.",
            rating: 4.8,
            category: "Non-Fiction"
        },
        {
            id: "O1P2Q3R0S5ui",
            title: "The Human Connection",
            author: "Isabella Turner",
            description: "Exploring the science of human relationships and how meaningful connections are made.",
            rating: 4.9,
            category: "Non-Fiction"
        },
        {
            id: "F1G2Hui3I4J5",
            title: "Stellar Drift",
            author: "Evan Harper",
            description: "A deep-space adventure where a group of explorers discovers an ancient alien civilization.",
            rating: 4.8,
            category: "Sci-Fi"
        },
        {
            id: "G6H7Iui8J9K0",
            title: "Time's Edge",
            author: "Lydia Wilson",
            description: "A thrilling time-travel novel where a scientist must prevent a catastrophic event in the future.",
            rating: 4.7,
            category: "Sci-Fi"
        },
        {
            id: "Hui1I2J3K4L5",
            title: "The Eternal Code",
            author: "Benjamin Ross",
            description: "A Sci-Fi mystery about a code hidden within the universe, unlocking the potential for immortality.",
            rating: 4.6,
            category: "Sci-Fi"
        },
        {
            id: "I6J7K8L9Mui0",
            title: "Nebula Frontier",
            author: "Zara Quinn",
            description: "A space opera about a group of outcasts who must band together to survive on the far reaches of the galaxy.",
            rating: 4.5,
            category: "Sci-Fi"
        },
        {
            id: "J1K2L3M4N5ui",
            title: "Quantum Echo",
            author: "Miles Thompson",
            description: "A scientist unlocks a gateway to parallel universes but risks losing everything in the process.",
            rating: 4.9,
            category: "Sci-Fi"
        },

        {
            id: "A6B7C8uiD9E0",
            title: "Whispers of the Forest",
            author: "Emily Winters",
            description: "A mystical tale of a young woman's journey to uncover the secrets hidden deep within an enchanted forest.",
            rating: 4.3,
            category: "Fiction"
        },
        {
            id: "B1C2Dui3E4F5",
            title: "Wings of Fate",
            author: "Jonathan Blake",
            description: "A magical realism story about a small town where everyone has the power to control their destiny with a single wish.",
            rating: 4.7,
            category: "Fiction"
        },
        {
            id: "C6D7Eui8F9G0",
            title: "The Midnight Whisperer",
            author: "Olivia Brooks",
            description: "A suspenseful novel about a journalist who uncovers dark secrets while investigating a mysterious murder in her hometown.",
            rating: 4.4,
            category: "Fiction"
        },
        {
            id: "D1E2Fui3G4H5",
            title: "Dancing Shadows",
            author: "Lucas Carter",
            description: "A gripping drama about a group of childhood friends and the web of lies that threatens to destroy their lives.",
            rating: 4.6,
            category: "Fiction"
        },
        {
            id: "E6F7Gui8H9I0",
            title: "The Last Ember",
            author: "Sarah Mitchell",
            description: "An emotional novel about love and loss, set against the backdrop of a wildfire that changes everything.",
            rating: 4.5,
            category: "Fiction"
        },
        {
            id: "M1N2O3Pui4Q5",
            title: "The Vanishing Act",
            author: "Isabella Greene",
            description: "A detective is tasked with solving the mysterious disappearance of a famous magician, but every clue leads to more confusion.",
            rating: 4.6,
            category: "Mystery"
        },
        {
            id: "M2N3O4P5uiQ6",
            title: "The Midnight Murders",
            author: "James Blackwood",
            description: "A small town is rocked by a series of gruesome murders that seem to happen at the stroke of midnight, leaving no trace of the killer.",
            rating: 4.5,
            category: "Mystery"
        },
        {
            id: "M3N4O5P6uiQ7",
            title: "A Web of Lies",
            author: "Clara Thompson",
            description: "A seasoned detective uncovers a complex web of lies while investigating a seemingly straightforward murder case.",
            rating: 4.7,
            category: "Mystery"
        },
        {
            id: "M4N5O6P7Q8",
            title: "Secrets in the Attic",
            author: "Michael Harris",
            description: "A young woman returns to her childhood home and uncovers dark family secrets hidden away in the attic, leading to a mystery that spans generations.",
            rating: 4.4,
            category: "Mystery"
        },
        {
            id: "M5N6O7P8Q9",
            title: "The Last Witness",
            author: "Emily Watson",
            description: "A witness to a high-profile murder goes into hiding, but as the detective tries to track them down, he discovers that nothing is as it seems.",
            rating: 4.8,
            category: "Mystery"
        },
        {
            id: "H1A2B3C4D5",
            title: "The Haunting of Hollow Manor",
            author: "Rachel Carter",
            description: "A chilling tale of a family who moves into an old mansion, only to discover it's haunted by vengeful spirits.",
            rating: 4.5,
            category: "Horror"
        },
        {
            id: "H2A3B4C5D6",
            title: "Nightmare Cove",
            author: "Peter Dawson",
            description: "A group of friends visits a secluded beach house, but their vacation turns into a nightmare when something starts stalking them at night.",
            rating: 4.2,
            category: "Horror"
        },
        {
            id: "H3A4B5Cui6D7",
            title: "Shadows in the Dark",
            author: "Elena Jones",
            description: "A horror novel about a woman who starts seeing mysterious shadows in her home that seem to have a mind of their own.",
            rating: 4.3,
            category: "Horror"
        },
        {
            id: "H4A5B6C7D8",
            title: "The Silent Screams",
            author: "Aaron Steele",
            description: "An eerie thriller where a small town is plagued by the unexplainable disappearance of its children, with only one man willing to uncover the terrifying truth.",
            rating: 4.4,
            category: "Horror"
        },
        {
            id: "H5A6B7C8D9",
            title: "Echoes of the Abyss",
            author: "Megan Harper",
            description: "A deep-sea horror adventure where a research crew encounters unspeakable horrors in the depths of the ocean.",
            rating: 4.7,
            category: "Horror"
        }
    ])
    return (
        <MyContext.Provider value={{ bookData }}>
            {children}
        </MyContext.Provider>
    )
}

export default Myprovider
