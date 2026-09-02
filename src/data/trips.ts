export interface TripDay {
  day: number;
  title: string;
  description: string;
}

export interface Trip {
  id: number;
  country: string;
  title: string;
  interests: string[];
  duration: string;
  image: string;
  rating?: number;
  itinerary: TripDay[];
}

export const COUNTRY_IMAGE_MAP: Record<string, string> = {
  "France": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
  "United States": "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1000&auto=format&fit=crop",
  "Italy": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop",
  "Spain": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
  "China": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000&auto=format&fit=crop",
  "Mexico": "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1000&auto=format&fit=crop",
  "Turkey": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
  "Germany": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
  "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
  "Thailand": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
  "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
  "Canada": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop",
  "Russia": "https://images.unsplash.com/photo-1513326718677-b964603b136d?q=80&w=1000&auto=format&fit=crop",
  "Malaysia": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
  "Greece": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
  "Portugal": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1000&auto=format&fit=crop",
  "Austria": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1000&auto=format&fit=crop",
  "Australia": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop",
  "Netherlands": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop",
  "Switzerland": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
  "Singapore": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop",
  "South Korea": "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1000&auto=format&fit=crop",
  "Hong Kong": "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1000&auto=format&fit=crop",
  "Czech Republic": "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop",
  "Poland": "https://images.unsplash.com/photo-1519197924294-4ac991a11977?q=80&w=1000&auto=format&fit=crop",
  "Sweden": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1000&auto=format&fit=crop",
  "Denmark": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1000&auto=format&fit=crop",
  "Egypt": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop",
  "Croatia": "https://images.unsplash.com/photo-1555990538-1e4a7d1891d4?q=80&w=1000&auto=format&fit=crop",
  "Norway": "https://images.unsplash.com/photo-1506701153880-11143270564b?q=80&w=1000&auto=format&fit=crop",
  "Indonesia": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
  "Ireland": "https://images.unsplash.com/photo-1590089415225-401ed6b9db8e?q=80&w=1000&auto=format&fit=crop",
  "Vietnam": "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
  "Philippines": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop",
  "Argentina": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1000&auto=format&fit=crop",
  "Finland": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop",
  "Peru": "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop",
  "United Arab Emirates": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
  "Morocco": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
  "Iceland": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1000&auto=format&fit=crop",
  "Costa Rica": "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?q=80&w=1000&auto=format&fit=crop",
  "New Zealand": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
};

export const DESTINATION_PHOTOS: string[] = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513326718677-b964603b136d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519197924294-4ac991a11977?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555990538-1e4a7d1891d4?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506701153880-11143270564b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590089415225-401ed6b9db8e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518259102261-b40117eabbc9?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
];

export function getTripImage(trip: { country: string; image?: string; id?: number }): string {
  if (COUNTRY_IMAGE_MAP[trip.country]) {
    return COUNTRY_IMAGE_MAP[trip.country];
  }
  if (
    trip.image && 
    !trip.image.includes('wikimedia') && 
    !trip.image.includes('Flag') && 
    !trip.image.includes('svg') &&
    !trip.image.includes('photo-1488085061387-422e29b40080')
  ) {
    return trip.image;
  }
  
  // Deterministic fallback based on country name string hash
  let hash = 0;
  const str = trip.country || 'Travel';
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DESTINATION_PHOTOS.length;
  return DESTINATION_PHOTOS[index];
}

const RAW_TRIPS: Trip[] = [
  {
    "id": 1,
    "country": "France",
    "title": "France Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "rating": 4.9,
    "image": "/Paris.jpg",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in France and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in France. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of France. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of France's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 2,
    "country": "United States",
    "title": "United States Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "rating": 4.7,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/960px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in United States and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in United States. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of United States. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of United States's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 3,
    "country": "Italy",
    "title": "Italy Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "rating": 4.8,
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/960px-Flag_of_Italy.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Italy and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Italy. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Italy. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Italy's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 4,
    "country": "Spain",
    "title": "Spain Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "rating": 4.6,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Flag_of_the_Kingdom_of_Spain.svg/960px-Flag_of_the_Kingdom_of_Spain.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Spain and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Spain. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Spain. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Spain's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 5,
    "country": "China",
    "title": "China Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "rating": 4.5,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/960px-Flag_of_the_People%27s_Republic_of_China.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in China and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in China. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of China. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of China's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 6,
    "country": "Mexico",
    "title": "Mexico Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "rating": 4.8,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/960px-Flag_of_Mexico.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Mexico and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Mexico. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Mexico. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Mexico's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 7,
    "country": "Turkey",
    "title": "Turkey Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/960px-Flag_of_Turkey.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Turkey and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Turkey. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Turkey. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Turkey's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 8,
    "country": "Germany",
    "title": "Germany Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/960px-Flag_of_Germany.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Germany and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Germany. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Germany. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Germany's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 9,
    "country": "United Kingdom",
    "title": "United Kingdom Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/960px-Flag_of_the_United_Kingdom_%281-2%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in United Kingdom and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in United Kingdom. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of United Kingdom. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of United Kingdom's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 10,
    "country": "Thailand",
    "title": "Thailand Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/960px-Flag_of_Thailand.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Thailand and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Thailand. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Thailand. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Thailand's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 11,
    "country": "Japan",
    "title": "Japan Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Japan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Japan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Japan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Japan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 12,
    "country": "Canada",
    "title": "Canada Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Canada and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Canada. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Canada. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Canada's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 13,
    "country": "Russia",
    "title": "Russia Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Russia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Russia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Russia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Russia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 14,
    "country": "Malaysia",
    "title": "Malaysia Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Malaysia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Malaysia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Malaysia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Malaysia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 15,
    "country": "Greece",
    "title": "Greece Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Greece and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Greece. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Greece. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Greece's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 16,
    "country": "Portugal",
    "title": "Portugal Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Portugal and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Portugal. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Portugal. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Portugal's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 17,
    "country": "Austria",
    "title": "Austria Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Austria and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Austria. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Austria. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Austria's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 18,
    "country": "Australia",
    "title": "Australia Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Australia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Australia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Australia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Australia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 19,
    "country": "Netherlands",
    "title": "Netherlands Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Netherlands and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Netherlands. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Netherlands. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Netherlands's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 20,
    "country": "Switzerland",
    "title": "Switzerland Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Switzerland and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Switzerland. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Switzerland. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Switzerland's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 21,
    "country": "Singapore",
    "title": "Singapore Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Singapore and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Singapore. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Singapore. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Singapore's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 22,
    "country": "South Korea",
    "title": "South Korea Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in South Korea and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in South Korea. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of South Korea. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of South Korea's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 23,
    "country": "Hong Kong",
    "title": "Hong Kong Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Hong Kong and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Hong Kong. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Hong Kong. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Hong Kong's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 24,
    "country": "Czech Republic",
    "title": "Czech Republic Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Czech Republic and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Czech Republic. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Czech Republic. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Czech Republic's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 25,
    "country": "Poland",
    "title": "Poland Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Poland and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Poland. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Poland. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Poland's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 26,
    "country": "Sweden",
    "title": "Sweden Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Sweden and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Sweden. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Sweden. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Sweden's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 27,
    "country": "Denmark",
    "title": "Denmark Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Denmark and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Denmark. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Denmark. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Denmark's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 28,
    "country": "Egypt",
    "title": "Egypt Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Egypt and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Egypt. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Egypt. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Egypt's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 29,
    "country": "Croatia",
    "title": "Croatia Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Croatia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Croatia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Croatia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Croatia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 30,
    "country": "Norway",
    "title": "Norway Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Norway and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Norway. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Norway. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Norway's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 31,
    "country": "Indonesia",
    "title": "Indonesia Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Indonesia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Indonesia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Indonesia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Indonesia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 32,
    "country": "Ireland",
    "title": "Ireland Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Ireland and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Ireland. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Ireland. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Ireland's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 33,
    "country": "Romania",
    "title": "Romania Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Romania and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Romania. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Romania. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Romania's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 34,
    "country": "Belgium",
    "title": "Belgium Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Belgium and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Belgium. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Belgium. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Belgium's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 35,
    "country": "Vietnam",
    "title": "Vietnam Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Vietnam and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Vietnam. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Vietnam. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Vietnam's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 36,
    "country": "Philippines",
    "title": "Philippines Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Philippines and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Philippines. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Philippines. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Philippines's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 37,
    "country": "Argentina",
    "title": "Argentina Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Argentina and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Argentina. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Argentina. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Argentina's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 38,
    "country": "Finland",
    "title": "Finland Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Finland and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Finland. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Finland. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Finland's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 39,
    "country": "Peru",
    "title": "Peru Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Peru and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Peru. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Peru. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Peru's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 40,
    "country": "United Arab Emirates",
    "title": "United Arab Emirates Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in United Arab Emirates and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in United Arab Emirates. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of United Arab Emirates. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of United Arab Emirates's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 41,
    "country": "Morocco",
    "title": "Morocco Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Morocco and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Morocco. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Morocco. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Morocco's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 42,
    "country": "Israel",
    "title": "Israel Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Israel and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Israel. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Israel. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Israel's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 43,
    "country": "New Zealand",
    "title": "New Zealand Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in New Zealand and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in New Zealand. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of New Zealand. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of New Zealand's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 44,
    "country": "Colombia",
    "title": "Colombia Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Colombia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Colombia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Colombia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Colombia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 45,
    "country": "Bulgaria",
    "title": "Bulgaria Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Bulgaria and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Bulgaria. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Bulgaria. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Bulgaria's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 46,
    "country": "Saudi Arabia",
    "title": "Saudi Arabia Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Saudi Arabia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Saudi Arabia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Saudi Arabia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Saudi Arabia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 47,
    "country": "Hungary",
    "title": "Hungary Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Hungary and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Hungary. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Hungary. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Hungary's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 48,
    "country": "Tunisia",
    "title": "Tunisia Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Tunisia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Tunisia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Tunisia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Tunisia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 49,
    "country": "Dominican Republic",
    "title": "Dominican Republic Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Dominican Republic and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Dominican Republic. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Dominican Republic. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Dominican Republic's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 50,
    "country": "Qatar",
    "title": "Qatar Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Qatar and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Qatar. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Qatar. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Qatar's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 51,
    "country": "Chile",
    "title": "Chile Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Chile and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Chile. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Chile. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Chile's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 52,
    "country": "Slovakia",
    "title": "Slovakia Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Slovakia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Slovakia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Slovakia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Slovakia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 53,
    "country": "Oman",
    "title": "Oman Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Oman and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Oman. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Oman. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Oman's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 54,
    "country": "Belarus",
    "title": "Belarus Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Belarus and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Belarus. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Belarus. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Belarus's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 55,
    "country": "Kazakhstan",
    "title": "Kazakhstan Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Kazakhstan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Kazakhstan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Kazakhstan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Kazakhstan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 56,
    "country": "Latvia",
    "title": "Latvia Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Latvia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Latvia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Latvia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Latvia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 57,
    "country": "Lithuania",
    "title": "Lithuania Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Lithuania and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Lithuania. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Lithuania. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Lithuania's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 58,
    "country": "Azerbaijan",
    "title": "Azerbaijan Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Azerbaijan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Azerbaijan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Azerbaijan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Azerbaijan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 59,
    "country": "Estonia",
    "title": "Estonia Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/960px-Flag_of_Estonia.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Estonia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Estonia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Estonia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Estonia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 60,
    "country": "Uzbekistan",
    "title": "Uzbekistan Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/960px-Flag_of_Uzbekistan.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Uzbekistan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Uzbekistan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Uzbekistan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Uzbekistan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 61,
    "country": "Lebanon",
    "title": "Lebanon Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/960px-Flag_of_Lebanon.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Lebanon and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Lebanon. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Lebanon. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Lebanon's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 62,
    "country": "Georgia",
    "title": "Georgia Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Georgia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Georgia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Georgia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Georgia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 63,
    "country": "Iceland",
    "title": "Iceland Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/960px-Flag_of_Iceland.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Iceland and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Iceland. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Iceland. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Iceland's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 64,
    "country": "Jordan",
    "title": "Jordan Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/960px-Flag_of_Jordan.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Jordan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Jordan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Jordan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Jordan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 65,
    "country": "North Macedonia",
    "title": "North Macedonia Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/960px-Flag_of_North_Macedonia.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in North Macedonia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in North Macedonia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of North Macedonia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of North Macedonia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 66,
    "country": "Bosnia and Herzegovina",
    "title": "Bosnia and Herzegovina Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/960px-Flag_of_Bosnia_and_Herzegovina.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Bosnia and Herzegovina and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Bosnia and Herzegovina. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Bosnia and Herzegovina. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Bosnia and Herzegovina's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 67,
    "country": "Mauritius",
    "title": "Mauritius Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/960px-Flag_of_Mauritius.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Mauritius and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Mauritius. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Mauritius. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Mauritius's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 68,
    "country": "Armenia",
    "title": "Armenia Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/960px-Flag_of_Armenia.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Armenia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Armenia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Armenia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Armenia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 69,
    "country": "Myanmar",
    "title": "Myanmar Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Myanmar and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Myanmar. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Myanmar. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Myanmar's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 70,
    "country": "Panama",
    "title": "Panama Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Panama and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Panama. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Panama. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Panama's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 71,
    "country": "Costa Rica",
    "title": "Costa Rica Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Costa Rica and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Costa Rica. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Costa Rica. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Costa Rica's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 72,
    "country": "Ghana",
    "title": "Ghana Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Ghana and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Ghana. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Ghana. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Ghana's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 73,
    "country": "Senegal",
    "title": "Senegal Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Senegal and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Senegal. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Senegal. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Senegal's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 74,
    "country": "Kyrgyzstan",
    "title": "Kyrgyzstan Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Kyrgyzstan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Kyrgyzstan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Kyrgyzstan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Kyrgyzstan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 75,
    "country": "Namibia",
    "title": "Namibia Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Namibia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Namibia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Namibia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Namibia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 76,
    "country": "Zambia",
    "title": "Zambia Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Zambia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Zambia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Zambia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Zambia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 77,
    "country": "Uganda",
    "title": "Uganda Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Uganda and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Uganda. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Uganda. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Uganda's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 78,
    "country": "Togo",
    "title": "Togo Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Togo and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Togo. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Togo. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Togo's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 79,
    "country": "Syria",
    "title": "Syria Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Syria and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Syria. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Syria. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Syria's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 80,
    "country": "Madagascar",
    "title": "Madagascar Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Madagascar and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Madagascar. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Madagascar. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Madagascar's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 81,
    "country": "Mozambique",
    "title": "Mozambique Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Mozambique and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Mozambique. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Mozambique. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Mozambique's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 82,
    "country": "Botswana",
    "title": "Botswana Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Botswana and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Botswana. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Botswana. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Botswana's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 83,
    "country": "Sudan",
    "title": "Sudan Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Sudan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Sudan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Sudan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Sudan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 84,
    "country": "Gabon",
    "title": "Gabon Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Gabon and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Gabon. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Gabon. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Gabon's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 85,
    "country": "Malawi",
    "title": "Malawi Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Malawi and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Malawi. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Malawi. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Malawi's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 86,
    "country": "Burkina Faso",
    "title": "Burkina Faso Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Burkina Faso and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Burkina Faso. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Burkina Faso. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Burkina Faso's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 87,
    "country": "Guinea",
    "title": "Guinea Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Guinea and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Guinea. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Guinea. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Guinea's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 88,
    "country": "Rwanda",
    "title": "Rwanda Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Rwanda and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Rwanda. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Rwanda. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Rwanda's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 89,
    "country": "Benin",
    "title": "Benin Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Benin and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Benin. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Benin. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Benin's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 90,
    "country": "Tanzania",
    "title": "Tanzania Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Tanzania and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Tanzania. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Tanzania. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Tanzania's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 91,
    "country": "Niger",
    "title": "Niger Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Niger and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Niger. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Niger. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Niger's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 92,
    "country": "Tajikistan",
    "title": "Tajikistan Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Tajikistan and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Tajikistan. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Tajikistan. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Tajikistan's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 93,
    "country": "Haiti",
    "title": "Haiti Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Haiti and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Haiti. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Haiti. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Haiti's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 94,
    "country": "Chad",
    "title": "Chad Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Chad and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Chad. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Chad. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Chad's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 95,
    "country": "Moldova",
    "title": "Moldova Highlights",
    "interests": [
      "Culture",
      "History"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Moldova and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Moldova. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Moldova. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Moldova's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 96,
    "country": "Eswatini",
    "title": "Eswatini Highlights",
    "interests": [
      "Relaxation",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Eswatini and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Eswatini. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Eswatini. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Eswatini's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 97,
    "country": "Timor-Leste",
    "title": "Timor-Leste Highlights",
    "interests": [
      "Culture",
      "Food"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Timor-Leste and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Timor-Leste. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Timor-Leste. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Timor-Leste's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 98,
    "country": "Brunei",
    "title": "Brunei Highlights",
    "interests": [
      "History",
      "Architecture"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Brunei and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Brunei. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Brunei. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Brunei's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 99,
    "country": "Gambia",
    "title": "Gambia Highlights",
    "interests": [
      "Nature",
      "Relaxation"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Gambia and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Gambia. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Gambia. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Gambia's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  },
  {
    "id": 100,
    "country": "Sierra Leone",
    "title": "Sierra Leone Highlights",
    "interests": [
      "Adventure",
      "Hiking"
    ],
    "duration": "5 Days",
    "image": "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Welcome",
        "description": "Arrive in Sierra Leone and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner."
      },
      {
        "day": 2,
        "title": "Cultural Landmarks",
        "description": "A full day guided tour covering the most iconic historical and cultural landmarks in Sierra Leone. Learn about the rich heritage and take plenty of photos."
      },
      {
        "day": 3,
        "title": "Nature & Adventure",
        "description": "Venture out of the city to experience the stunning natural landscapes of Sierra Leone. Options for light hiking or a scenic boat ride."
      },
      {
        "day": 4,
        "title": "Leisure & Cuisine",
        "description": "A relaxing morning followed by a culinary masterclass. Discover the secrets of Sierra Leone's famous dishes and enjoy a sunset cruise."
      },
      {
        "day": 5,
        "title": "Departure",
        "description": "Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport."
      }
    ]
  }
];

export const TRIPS: Trip[] = RAW_TRIPS.map(trip => ({
  ...trip,
  image: getTripImage(trip)
}));

export const COUNTRIES = ['All', ...Array.from(new Set(TRIPS.map(t => t.country))).sort()];
export const INTERESTS = ['All', 'Food', 'Culture', 'History', 'Nature', 'Relaxation', 'Hiking', 'Adventure', 'Architecture'];
