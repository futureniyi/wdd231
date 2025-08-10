// winners.js

const prizesData = {
    "prizes": [
        {
            "prizeName": "RHS Alumni Excellence Award",
            "objective": "To recognize and reward the best graduating students from both junior and senior schools, encouraging academic excellence and dedication.",
            "criteria": [
                "Must be the best graduating student from their respective school.",
                "Open to both Junior School and Senior School."
            ],
            "categories": [
                {
                    "name": "Best Graduating Student – Senior School (SS3)",
                    "winners": [
                        {
                            "name": "Musa-Samuel Toluwanimi",
                            "year": 2024,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000 (Suregift Card)",
                                "certificate": true,
                                "book": "Atomic Habits by James Clear"
                            },
                            "nominationProcess": [
                                "Nominated by principal based on academic performance",
                                "Book selected by alumni vote"
                            ]
                        },
                        {
                            "name": "Obot Rejoice Mandu",
                            "year": 2025,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000 (Suregift Card)",
                                "certificate": true,
                                "book": "Outliers: The Story of Success"
                            },
                            "nominationProcess": [
                                "Nominated by principal based on academic performance",
                                "Book selected by alumni vote"
                            ]
                        }
                    ]
                },
                {
                    "name": "Best Graduating Student – Junior School (JSS3)",
                    "winners": [
                        {
                            "name": "Musa-Samuel Oluwatofunmi",
                            "year": 2024,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000 (Suregift Card)",
                                "certificate": true,
                                "book": "Atomic Habits by James Clear"
                            },
                            "nominationProcess": [
                                "Nominated by principal based on academic performance",
                                "Book selected by alumni vote"
                            ]
                        },
                        {
                            "name": "Olawale Rebecca",
                            "year": 2025,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000 (Suregift Card)",
                                "certificate": true,
                                "book": "Atomic Habits"
                            },
                            "nominationProcess": [
                                "Nominated by principal based on academic performance",
                                "Book selected by alumni vote"
                            ]
                        }
                    ]
                },
                {
                    "name": "Best in Literature-in-English – Patricia Chukwuma Award",
                    "winners": [
                        {
                            "name": "Adelegan Toluwanimi",
                            "year": 2025,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦30,000",
                                "certificate": true
                            },
                            "nominationProcess": [
                                "Selected based on outstanding performance in Literature-in-English",
                                "Award established by the Chukwuma family in honor of their dear mother"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "prizeName": "RHS Alumni Legacy Teaching Award",
            "objective": "To honor long-term contributions and impact on the RHS community, celebrating teachers who have dedicated a decade or more.",
            "criteria": [
                "Teachers must have spent at least 10 years teaching.",
                "Priority for those who taught the 2007 set."
            ],
            "categories": [
                {
                    "name": "Male Teacher Legacy Award",
                    "winners": [
                        {
                            "name": "Pastor Charles Elobuike",
                            "year": 2024,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000",
                                "plaque": true
                            },
                            "nominationProcess": [
                                "Selected by alumni vote",
                                "Verified years of service"
                            ]
                        },
                        {
                            "name": "Mr. Akinnawonu Olubunmi Thompson",
                            "year": 2025,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000",
                                "plaque": true
                            },
                            "nominationProcess": [
                                "Selected by alumni vote",
                                "Verified years of service"
                            ]
                        }
                    ]
                },
                {
                    "name": "Female Teacher Legacy Award",
                    "winners": [
                        {
                            "name": "Pastor Comfort Omoyeni",
                            "year": 2024,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000",
                                "plaque": true
                            },
                            "nominationProcess": [
                                "Selected by alumni vote",
                                "Verified years of service"
                            ]
                        },
                        {
                            "name": "Mrs. Esther Lisa",
                            "year": 2025,
                            "image": "images/lisa.jpg",
                            "prizeDetails": {
                                "cash": "₦50,000",
                                "plaque": true
                            },
                            "nominationProcess": [
                                "Selected by alumni vote",
                                "Verified years of service"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// Flatten all winners with relevant info into one array
const winners = [];

prizesData.prizes.forEach(prize => {
    prize.categories.forEach(category => {
        category.winners.forEach(winner => {
            winners.push({
                prizeName: prize.prizeName,
                categoryName: category.name,
                winnerName: winner.name,
                year: winner.year,
                image: winner.image,
                prizeDetails: winner.prizeDetails,
                nominationProcess: winner.nominationProcess,
            });
        });
    });
});

export default winners;
