// 1. Lunar New Year Start Dates (1930 to 2035) to handle Lunar astrology perfectly
// Anyone born on or after this date in a given year belongs to that year's Zodiac animal.
// If born before, they belong to the previous year's animal.
export const LUNAR_NEW_YEARS = {
  1930: "1930-01-30", 1931: "1931-02-17", 1932: "1932-02-06", 1933: "1933-01-26", 1934: "1934-02-14",
  1935: "1935-02-04", 1936: "1936-01-24", 1937: "1937-02-11", 1938: "1938-01-31", 1939: "1939-02-19",
  1940: "1940-02-08", 1941: "1941-01-27", 1942: "1942-02-15", 1943: "1943-02-05", 1944: "1944-01-25",
  1945: "1945-02-13", 1946: "1946-02-02", 1947: "1947-01-22", 1948: "1948-02-10", 1949: "1949-01-29",
  1950: "1950-02-17", 1951: "1951-02-06", 1952: "1952-01-27", 1953: "1953-02-14", 1954: "1954-02-03",
  1955: "1955-01-24", 1956: "1956-02-12", 1957: "1957-01-31", 1958: "1958-02-18", 1959: "1959-02-08",
  1960: "1960-01-28", 1961: "1961-02-15", 1962: "1962-02-05", 1963: "1963-01-25", 1964: "1964-02-13",
  1965: "1965-02-02", 1966: "1966-01-21", 1967: "1967-02-09", 1968: "1968-01-30", 1969: "1969-02-17",
  1970: "1970-02-06", 1971: "1971-01-27", 1972: "1972-02-15", 1973: "1973-02-03", 1974: "1974-01-23",
  1975: "1975-02-11", 1976: "1976-01-31", 1977: "1977-02-18", 1978: "1978-02-07", 1979: "1979-01-28",
  1980: "1980-02-16", 1981: "1981-02-05", 1982: "1982-01-25", 1983: "1983-02-13", 1984: "1984-02-02",
  1985: "1985-02-20", 1986: "1986-02-09", 1987: "1987-01-29", 1988: "1988-02-17", 1989: "1989-02-06",
  1990: "1990-01-27", 1991: "1991-02-15", 1992: "1992-02-04", 1993: "1993-01-23", 1994: "1994-02-10",
  1995: "1995-01-31", 1996: "1996-02-19", 1997: "1997-02-07", 1998: "1998-01-28", 1999: "1999-02-16",
  2000: "2000-02-05", 2001: "2001-01-24", 2002: "2002-02-12", 2003: "2003-02-01", 2004: "2004-01-22",
  2005: "2005-02-09", 2006: "2006-01-29", 2007: "2007-02-18", 2008: "2008-02-07", 2009: "2009-01-26",
  2010: "2010-02-14", 2011: "2011-02-03", 2012: "2012-01-23", 2013: "2013-02-10", 2014: "2014-01-31",
  2015: "2015-02-19", 2016: "2016-02-08", 2017: "2017-01-28", 2018: "2018-02-16", 2019: "2019-02-05",
  2020: "2020-01-25", 2021: "2021-02-12", 2022: "2022-02-01", 2023: "2023-01-22", 2024: "2024-02-10",
  2025: "2025-01-29", 2026: "2026-02-17", 2027: "2027-02-06", 2028: "2028-01-26", 2029: "2029-02-13",
  2030: "2030-02-03", 2031: "2031-01-23", 2032: "2032-02-11", 2033: "2033-01-31", 2034: "2034-02-19",
  2035: "2035-02-08"
};

// 2. Western Astrology Signs Detailed Properties
export const WESTERN_DATA = {
  "Aries": { element: "Fire", symbol: "Ram", planet: "Mars", quality: "Cardinal", color: "from-red-500 to-orange-500", desc: "Bold, ambitious, and an energetic pioneer who initiates with courage." },
  "Taurus": { element: "Earth", symbol: "Bull", planet: "Venus", quality: "Fixed", color: "from-emerald-500 to-green-600", desc: "Resilient, grounded, and appreciative of sensory pleasures and security." },
  "Gemini": { element: "Air", symbol: "Twins", planet: "Mercury", quality: "Mutable", color: "from-cyan-400 to-blue-500", desc: "Witty, curious, and expressive, constantly seeking intellectual stimulation." },
  "Cancer": { element: "Water", symbol: "Crab", planet: "Moon", quality: "Cardinal", color: "from-blue-400 to-indigo-500", desc: "Intuitive, nurturing, and fiercely protective of home and heart." },
  "Leo": { element: "Fire", symbol: "Lion", planet: "Sun", quality: "Fixed", color: "from-amber-500 to-red-500", desc: "Magnanimous, dramatic, and a natural born leader with a creative flair." },
  "Virgo": { element: "Earth", symbol: "Virgin", planet: "Mercury", quality: "Mutable", color: "from-teal-600 to-emerald-700", desc: "Analytical, dedicated, and highly organized with a passion for improvement." },
  "Libra": { element: "Air", symbol: "Scales", planet: "Venus", quality: "Cardinal", color: "from-pink-400 to-sky-400", desc: "Harmonious, diplomatic, and driven by aesthetic balance and justice." },
  "Scorpio": { element: "Water", symbol: "Scorpion", planet: "Pluto & Mars", quality: "Fixed", color: "from-indigo-900 via-purple-800 to-rose-950", desc: "Intense, magnetic, possessing immense willpower and transformative depth." },
  "Sagittarius": { element: "Fire", symbol: "Archer", planet: "Jupiter", quality: "Mutable", color: "from-orange-500 to-purple-600", desc: "Adventurous, philosophical, and a freedom-loving truth-seeker." },
  "Capricorn": { element: "Earth", symbol: "Sea-Goat", planet: "Saturn", quality: "Cardinal", color: "from-slate-700 to-slate-900", desc: "Pragmatic, disciplined, climbing steadily toward career peaks." },
  "Aquarius": { element: "Air", symbol: "Water Bearer", planet: "Uranus & Saturn", quality: "Fixed", color: "from-indigo-400 to-cyan-500", desc: "Visionary, altruistic, championing unique individualities and progress." },
  "Pisces": { element: "Water", symbol: "Fish", planet: "Neptune & Jupiter", quality: "Mutable", color: "from-blue-500 via-teal-400 to-indigo-600", desc: "Dreamy, empathic, fluidly artistic, bridging physical and spiritual realms." }
};

// 3. Eastern Astrology Animals Detailed Properties
export const EASTERN_DATA = {
  "Rat": { element: "Water", polarity: "Yang", energy: "Quick-witted, resourceful, charming, and highly versatile.", luckyColor: "Blue & Gold", icon: "🐀" },
  "Ox": { element: "Earth", polarity: "Yin", energy: "Diligent, dependable, strong, and highly systematic.", luckyColor: "White, Yellow & Green", icon: "🐂" },
  "Tiger": { element: "Wood", polarity: "Yang", energy: "Brave, competitive, unpredictable, and fiercely self-assured.", luckyColor: "Orange, Blue & Gray", icon: "🐅" },
  "Rabbit": { element: "Wood", polarity: "Yin", energy: "Quiet, elegant, kind, and artistic with great taste.", luckyColor: "Red, Pink & Purple", icon: "🐇" },
  "Dragon": { element: "Earth", polarity: "Yang", energy: "Confident, charismatic, powerful, and natural-born trailblazer.", luckyColor: "Gold, Silver & Grayish White", icon: "🐉" },
  "Snake": { element: "Fire", polarity: "Yin", energy: "Enigmatic, wise, intuitive, and deeply analytical.", luckyColor: "Black, Red & Yellow", icon: "🐍" },
  "Horse": { element: "Fire", polarity: "Yang", energy: "Animated, active, energetic, and highly independence-driven.", luckyColor: "Green & Yellow", icon: "🐎" },
  "Goat": { element: "Earth", polarity: "Yin", energy: "Gentle, compassionate, creative, and harmonious.", luckyColor: "Green, Red & Purple", icon: "🐐" },
  "Monkey": { element: "Metal", polarity: "Yang", energy: "Sharp, smart, mischievous, and incredibly inquisitive.", luckyColor: "White, Blue & Gold", icon: "🐒" },
  "Rooster": { element: "Metal", polarity: "Yin", energy: "Observant, hardworking, courageous, and outspoken.", luckyColor: "Gold, Brown & Yellow", icon: "🐓" },
  "Dog": { element: "Earth", polarity: "Yang", energy: "Loyal, honest, amiable, and protective.", luckyColor: "Green, Red & Purple", icon: "🐕" },
  "Pig": { element: "Water", polarity: "Yin", energy: "Compassionate, generous, diligent, and peaceful.", luckyColor: "Yellow, Grey & Gold", icon: "🐖" }
};

// 4. Complete 144 Primal Zodiac Archetype Matrix
export const PRIMAL_ARCHETYPES = {
  "Aries": {
    "Rat": "The Tyrannosaurus Rex", "Ox": "The Rhino", "Tiger": "The Warlord", "Rabbit": "The Instigator", 
    "Dragon": "The Charger", "Snake": "The Strategist", "Horse": "The Mustang", "Goat": "The Wanderer", 
    "Monkey": "The Trickster", "Rooster": "The Herald", "Dog": "The Guardian", "Pig": "The Crusader"
  },
  "Taurus": {
    "Rat": "The Collector", "Ox": "The Anchor", "Tiger": "The Gladiator", "Rabbit": "The Aesthetic", 
    "Dragon": "The Empire Builder", "Snake": "The Viper", "Horse": "The Clydesdale", "Goat": "The Craftsman", 
    "Monkey": "The Artisan", "Rooster": "The Perfectionist", "Dog": "The Sentinel", "Pig": "The Epicurean"
  },
  "Gemini": {
    "Rat": "The Live Wire", "Ox": "The Philosopher", "Tiger": "The Maverick", "Rabbit": "The Diplomat", 
    "Dragon": "The Dynamo", "Snake": "The Illusionist", "Horse": "The Messenger", "Goat": "The Poet", 
    "Monkey": "The Virtuoso", "Rooster": "The Debater", "Dog": "The Watchdog", "Pig": "The Socialite"
  },
  "Cancer": {
    "Rat": "The Caretaker", "Ox": "The Fortress", "Tiger": "The Protector", "Rabbit": "The Sanctuary", 
    "Dragon": "The Dreamer", "Snake": "The Intuitive", "Horse": "The Nomad", "Goat": "The Artist", 
    "Monkey": "The Empath", "Rooster": "The Nest-Builder", "Dog": "The Ally", "Pig": "The Nurturer"
  },
  "Leo": {
    "Rat": "The Sovereign", "Ox": "The Monument", "Tiger": "The Monarch", "Rabbit": "The Aristocrat", 
    "Dragon": "The Emperor", "Snake": "The Enigma", "Horse": "The Champion", "Goat": "The Muse", 
    "Monkey": "The Entertainer", "Rooster": "The Showman", "Dog": "The Defender", "Pig": "The Philanthropist"
  },
  "Virgo": {
    "Rat": "The Analyst", "Ox": "The Mastermind", "Tiger": "The perfectionist", "Rabbit": "The Scholar", 
    "Dragon": "The Architect", "Snake": "The Sage", "Horse": "The Workhorse", "Goat": "The Restorer", 
    "Monkey": "The Tactician", "Rooster": "The Critic", "Dog": "The Scout", "Pig": "The Organizer"
  },
  "Libra": {
    "Rat": "The Peacekeeper", "Ox": "The Judge", "Tiger": "The Mediator", "Rabbit": "The Esthete", 
    "Dragon": "The Ambassador", "Snake": "The Charmer", "Horse": "The Courser", "Goat": "The Designer", 
    "Monkey": "The Negotiator", "Rooster": "The Stylist", "Dog": "The Arbitrator", "Pig": "The Host"
  },
  "Scorpio": {
    "Rat": "The Alchemist", "Ox": "The Steel Wall", "Tiger": "The Panther", "Rabbit": "The Mystic", 
    "Dragon": "The Sorcerer", "Snake": "The Hypnotist", "Horse": "The Phoenix", "Goat": "The Shaman", 
    "Monkey": "The mastermind", "Rooster": "The Inquisitor", "Dog": "The Vigilante", "Pig": "The Deep-Diver"
  },
  "Sagittarius": {
    "Rat": "The Explorer", "Ox": "The Crusader", "Tiger": "The Nomad", "Rabbit": "The Thinker", 
    "Dragon": "The Voyager", "Snake": "The Seer", "Horse": "The Centaur", "Goat": "The Pilgrim", 
    "Monkey": "The Adventurer", "Rooster": "The Optimist", "Dog": "The Ranger", "Pig": "The Bon Vivant"
  },
  "Capricorn": {
    "Rat": "The Executive", "Ox": "The Granite Block", "Tiger": "The Commander", "Rabbit": "The Magistrate", 
    "Dragon": "The Titan", "Snake": "The Controller", "Horse": "The Climber", "Goat": "The Builder", 
    "Monkey": "The Director", "Rooster": "The Administrator", "Dog": "The Warden", "Pig": "The Trustee"
  },
  "Aquarius": {
    "Rat": "The Visionary", "Ox": "The Iconoclast", "Tiger": "The Rebel", "Rabbit": "The Idealist", 
    "Dragon": "The Innovator", "Snake": "The Genius", "Horse": "The Maverick", "Goat": "The Altruist", 
    "Monkey": "The Inventor", "Rooster": "The Reformer", "Dog": "The Humanitarian", "Pig": "The Utopian"
  },
  "Pisces": {
    "Rat": "The Dreamer", "Ox": "The Anchor", "Tiger": "The Mystic", "Rabbit": "The Empath", 
    "Dragon": "The Chimera", "Snake": "The Medium", "Horse": "The Pegasus", "Goat": "The Healer", 
    "Monkey": "The Sorcerer", "Rooster": "The Visionary", "Dog": "The Savior", "Pig": "The Altruist"
  }
};