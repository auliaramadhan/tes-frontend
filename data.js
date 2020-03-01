
var fs = require('fs');

var data = 
[
   {
      latitude:1.286920
      , longitude: 103.854570
      , place_name: 'Merlion'
      , place_desc: `Patung ikonis setinggi 8,5 m berkepala singa & tubuh ikan yang menyemprotkan air dari mulutnya.`
      ,place_detail: `The Merlion (Malay: Singa-Laut, Chinese: 鱼尾狮, Tamil: மெர்லயன்) is the 
      official mascot of Singapore, depicted as a mythical creature with a lion's head and the body of a fish. 
      Being of prominent symbolic nature to Singapore and Singaporeans in general, it is widely used to represent 
      both the city state and its people in sports teams, advertising, branding, tourism and as a national personification.`
      , place_address: 'One Fullerton, Singapura 04921'
      , place_web: 'www.visitsingapore.com'
      , landmark:[
         
      ]
   },
   {
      latitude:1.287466,
      longitude: 103.851424
      , place_name: 'Asian Civilisations Museum'
      , place_desc: `The Asian Civilisations Museum (ACM) is an institution which forms a part of the four museums in Singapore`
      ,place_detail: `The Asian Civilisations Museum (ACM) is an institution which forms a part of the four museums in Singapore, the other three being the Peranakan Museum at Old Tao Nan School, the National Museum of Singapore and the Singapore Art Museum.
      It is one of the pioneering museums in the region to specialise in pan-Asian cultures and civilisations. The museum specialises in the material history of China, Southeast Asia, South Asia and West Asia, from which the diverse ethnic groups of Singapore trace their ancestry.`
      , place_address: '1 Empress Pl, Singapura 179555'
      , place_web: 'www.nhb.gov.sg/acm/'
      , landmark:[
         
      ]
   },
   {
      latitude:1.290555,
      longitude:  103.846188
      , place_name: 'Clarke Quay'
      , place_desc: `Clarke Quay is a historical riverside quay in located within the Singapore River Planning Area. The quay is situated upstream from the mouth of the Singapore River and Boat Quay.`
      ,place_detail: `Clarke Quay is also the name of a road along the quay, part of which has since been converted into a pedestrian mall. Clarke Street, located next to Clarke Quay, was officially named in 1896, and was originally two streets known simply as East Street and West Street in north Kampong Malacca. Similar to Clarke Quay, Clarke Street has since been converted into a pedestrian mall.`
      , place_address: '3 River Valley Rd, Singapura 179024'
      , place_web: 'www.capitaland.com/sg/malls/clarkequay'
      , landmark:[
         
      ]
   },
   {
      latitude:1.295526,
      longitude:  103.845331
      , place_name: 'Fort Canning Hill'
      , place_desc: `Fort Canning Hill, is a small hill about 48 metres (157 ft) high in the southeast portion of the island city-state of Singapore`
      ,place_detail: `Within the Central Area that forms Singapore's central business district. Although small in physical size, it has a long history intertwined with that of the city-state due to its location as the highest elevation within walking distance to the city's civic district within the Downtown Core. It is also a popular venue for music shows and concerts.`
      , place_address: 'River Valley Road, Singapura 17961'
      , place_web: 'www.visitsingapore.com'
      , landmark:[
         
      ]
   },
   {
      latitude:1.302279,
      longitude: 103.837399
      , place_name: 'Orchard Road'
      , place_desc: `Orchard Road is a major 2.2 kilometre-long road in the Central Area of Singapore`
      ,place_detail: `A famous tourist attraction, It is an upscale shopping area of Singapore, with numerous internationally renowned department stores, restaurants and coffeehouses located in its vicinity.
      The Orchard Planning Area is a planning area as specified by the Urban Redevelopment Authority. It is part of the Central Area located within the Central Region. Orchard is bordered by Newton in the east and north, Tanglin in the west, River Valley in the south and Museum to the southeast.`
      , place_address: '437 Orchard Road, Singapore 238878'
      , place_web: 'www.visitsingapore.com'
      , landmark:[
         
      ]
   },
   {
      latitude:1.289332,
      longitude:  103.863152
      , place_name: 'Singapore Flyer'
      , place_desc: `The Singapore Flyer is a giant observation wheel at Downtown Core, Singapore.`
      ,place_detail: `It opened in 2008, with construction having taken about 2½ years. It carried its first paying passengers on 11 February, had a soft opening to the public on 1 March, and was then officially opened on 15 April. It has 28 air-conditioned capsules, each able to accommodate 28 passengers, and incorporates a three-story terminal building.The Flyer has an overall height of 165 metres and was the world's tallest Ferris wheel until the 167.6 m High Roller, which is 2.6 m (9 ft) taller than the Flyer, opened on the Las Vegas Strip in Nevada, US, on 31 March 2014`
      , place_address: '30 Raffles Ave, Singapura 039803'
      , place_web: 'www.singaporeflyer.com'
      , landmark:[
         
      ]
   },
   {
      latitude:1.283099,
      longitude:  103.860295
      , place_name: 'IMarina Bay Sands'
      , place_desc: `IMarina Bay Sands is an integrated resort fronting Marina Bay in Singapore, owned by the Las Vegas Sands corporation`
      ,place_detail: `At its opening in 2010, it was billed as the world's most expensive standalone casino property at S$8 billion, The resort includes a 2,561-room hotel, a 120,000-square-metre convention-exhibition centre, the 74,000-square-metre The Shoppes at Marina Bay Sands mall, a museum, two large theatres, "celebrity chef" restaurants, two floating Crystal Pavilions, art-science exhibits, and the world's largest atrium casino with 500 tables and 1,600 slot machines. The complex is topped by a 340-metre-long (1,120 ft) SkyPark with a capacity of 3,900 people and a 150 m (490 ft) infinity swimming pool, set on top of the world's largest public cantilevered platform, which overhangs the north tower by 67 m (220 ft).[4][5] The 20-hectare resort was designed by Moshe Safdie architects`
      , place_address: '11 Marina Boulevard, Singapura 01894'
      , place_web: 'www.visitsingapore.com'
      , landmark:[
         'Art Science Museum',
         'Marina bay sand skypar',
         'Double Helix Bridge'
      ]
   },
   {
      latitude:1.281790,
      longitude:  103.863954
      , place_name: 'Gardens by the Bay'
      , place_desc: `The Gardens by the Bay is a nature park spanning 101 hectares (250 acres) in the Central Region of Singapore, adjacent to the Marina Reservoir`
      ,place_detail: `The park consists of three waterfront gardens: Bay South Garden (in Marina South), Bay East Garden (in Marina East) and Bay Central Garden (in Downtown Core and Kallang).The largest of the gardens is the Bay South Garden at 54 hectares (130 acres) designed by Grant Associates. Its Flower Dome is the largest glass greenhouse in the world. Gardens by the Bay was part of the nation's plans to transform its "Garden City" to a "City in a Garden", with the aim of raising the quality of life by enhancing greenery and flora in the city. `
      , place_address: '18 Marina Gardens Dr, Singapura 018953'
      , place_web: 'www.gardensbythebay.com.sg'
      , landmark:[
         'Bay South Garden',
         'Bay Central Garden',
         'Bay East Garden'
      ]
   },
   {
      latitude:1.284193,
      longitude:  103.843362
      , place_name: 'Chinatown'
      , place_desc: `Chinatown is a subzone and ethnic enclave located within the Outram district in the Central Area of Singapore.`
      ,place_detail: `Featuring distinctly Chinese cultural elements, Chinatown has had a historically concentrated ethnic Chinese population. Chinatown is considerably less of an enclave than it once was. However, the precinct does retain significant historical and cultural significance. Large sections of it have been declared national heritage sites officially designated for conservation by the Urban Redevelopment Authority.`
      , place_address: '2 Banda Street, Singapura 059962'
      , place_web: 'www.visitsingapore.com'
      , landmark:[
         'Telok Ayer',
         'Kreeta Ayer',
         'Bukit Pasoh'
      ]
   },
]

fs.writeFile('data.json', JSON.stringify(data), 'utf8', function (err) {
   if (err) throw err;
   console.log('Saved!');
 });
 
