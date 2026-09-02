const fs = require('fs');
const https = require('https');

const countries = [
  "France", "United States", "Italy", "Spain", "China", "Mexico", "Turkey", "Germany", 
  "United Kingdom", "Thailand", "Japan", "Canada", "Russia", "Malaysia", "Greece", 
  "Portugal", "Austria", "Australia", "Netherlands", "Switzerland", "Singapore", 
  "South Korea", "Hong Kong", "Czech Republic", "Poland", "Sweden", "Denmark", "Egypt", 
  "Croatia", "Norway", "Indonesia", "Ireland", "Romania", "Belgium", "Vietnam", 
  "Philippines", "Argentina", "Finland", "Peru", "United Arab Emirates", "Morocco", 
  "Israel", "New Zealand", "Colombia", "Bulgaria", "Saudi Arabia", "Hungary", "Tunisia", 
  "Dominican Republic", "Qatar", "Chile", "Slovakia", "Oman", "Belarus", "Kazakhstan", 
  "Latvia", "Lithuania", "Azerbaijan", "Estonia", "Uzbekistan", "Lebanon", "Georgia", 
  "Iceland", "Jordan", "North Macedonia", "Bosnia and Herzegovina", "Mauritius", "Armenia", 
  "Myanmar", "Panama", "Costa Rica", "Ghana", "Senegal", "Kyrgyzstan", "Namibia", 
  "Zambia", "Uganda", "Togo", "Syria", "Madagascar", "Mozambique", "Botswana", "Sudan", 
  "Gabon", "Malawi", "Burkina Faso", "Guinea", "Rwanda", "Benin", "Tanzania", "Niger", 
  "Tajikistan", "Haiti", "Chad", "Moldova", "Eswatini", "Timor-Leste", "Brunei", 
  "Gambia", "Sierra Leone"
];

const interestsOptions = [
  ['Culture', 'Food'],
  ['History', 'Architecture'],
  ['Nature', 'Relaxation'],
  ['Adventure', 'Hiking'],
  ['Culture', 'History'],
  ['Relaxation', 'Food']
];

const getWikipediaImage = (country) => {
  return new Promise((resolve) => {
    const title = encodeURIComponent(country);
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=800`;
    
    https.get(url, { headers: { 'User-Agent': 'WandorApp/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop');
          }
        } catch (e) {
          resolve('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop');
        }
      });
    }).on('error', () => {
      resolve('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2940&auto=format&fit=crop');
    });
  });
};

async function generate() {
  const trips = [];
  console.log('Generating 100 trips...');

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const image = await getWikipediaImage(country);
    const interests = interestsOptions[i % interestsOptions.length];
    
    const itinerary = [
      { day: 1, title: 'Arrival & Welcome', description: `Arrive in ${country} and check into your premium accommodation. Spend the evening exploring the local neighborhood and enjoying a traditional welcome dinner.` },
      { day: 2, title: 'Cultural Landmarks', description: `A full day guided tour covering the most iconic historical and cultural landmarks in ${country}. Learn about the rich heritage and take plenty of photos.` },
      { day: 3, title: 'Nature & Adventure', description: `Venture out of the city to experience the stunning natural landscapes of ${country}. Options for light hiking or a scenic boat ride.` },
      { day: 4, title: 'Leisure & Cuisine', description: `A relaxing morning followed by a culinary masterclass. Discover the secrets of ${country}'s famous dishes and enjoy a sunset cruise.` },
      { day: 5, title: 'Departure', description: `Enjoy a final breakfast and some last-minute souvenir shopping before your transfer to the airport.` }
    ];

    trips.push({
      id: i + 1,
      country: country,
      title: `${country} Highlights`,
      interests: interests,
      duration: '5 Days',
      image: image,
      itinerary: itinerary
    });
    
    console.log(`[${i+1}/100] Processed ${country}`);
    await new Promise(r => setTimeout(r, 100)); // Rate limiting
  }

  const fileContent = `export interface TripDay {
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
  itinerary: TripDay[];
}

export const TRIPS: Trip[] = ${JSON.stringify(trips, null, 2)};

export const COUNTRIES = ['All', ...Array.from(new Set(TRIPS.map(t => t.country))).sort()];
export const INTERESTS = ['All', 'Food', 'Culture', 'History', 'Nature', 'Relaxation', 'Hiking', 'Adventure', 'Architecture'];
`;

  fs.mkdirSync('./src/data', { recursive: true });
  fs.writeFileSync('./src/data/trips.ts', fileContent);
  console.log('Successfully generated src/data/trips.ts');
}

generate();
