import { 
  LUNAR_NEW_YEARS, 
  WESTERN_DATA, 
  EASTERN_DATA, 
  PRIMAL_ARCHETYPES 
} from '../data/zodiacData';

/**
 * Calculates the Western Zodiac sign based on month and day.
 * @param {number|string} month - Month of birth (1-12)
 * @param {number|string} day - Day of birth (1-31)
 * @returns {string} The name of the Western sign
 */
export function getWesternSign(month, day) {
  const m = parseInt(month, 10);
  const d = parseInt(day, 10);

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "Aries";
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "Taurus";
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return "Gemini";
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return "Cancer";
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "Leo";
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "Virgo";
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return "Libra";
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return "Scorpio";
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return "Sagittarius";
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "Capricorn";
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "Aquarius";
  return "Pisces";
}

/**
 * Determines the Eastern Zodiac sign based on the shifting Lunar New Year.
 * @param {string} dateString - ISO date string (YYYY-MM-DD)
 * @returns {string} The name of the Lunar animal
 */
export function getEasternSign(dateString) {
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
  
  // Fallback default calculation if date is outside our verified ephemeris bounds
  if (isNaN(year) || year < 1930 || year > 2035) {
    return animals[(year - 1924) % 12];
  }

  // Fetch the specific start date of the Lunar New Year for the birth year
  const lnyString = LUNAR_NEW_YEARS[year];
  const lnyDate = new Date(lnyString);

  // If birthdate is earlier than that year's Lunar New Year, they belong to the previous year's animal
  let astrologicalYear = year;
  if (dateObj < lnyDate) {
    astrologicalYear = year - 1;
  }

  const offset = (astrologicalYear - 1924) % 12;
  const index = (offset < 0) ? (offset + 12) : offset;
  return animals[index];
}

/**
 * Determines the secret internal ascendant animal governed by birth hour.
 * @param {string} hourString - 24hr formatted string (HH:MM)
 * @returns {Object|null} The name of the secret animal, active time range, and dominant trait
 */
export function getChineseSecretAnimal(hourString) {
  if (!hourString) return null;
  const [hour] = hourString.split(':').map(Number);
  
  if (hour >= 23 || hour < 1) return { animal: "Rat", timeRange: "11 PM - 1 AM", trait: "Deep Intuition & Secret Ambition" };
  if (hour >= 1 && hour < 3) return { animal: "Ox", timeRange: "1 AM - 3 AM", trait: "Quiet Resolve & Iron Will" };
  if (hour >= 3 && hour < 5) return { animal: "Tiger", timeRange: "3 AM - 5 AM", trait: "Hidden Passion & Magnetic Rebel" };
  if (hour >= 5 && hour < 7) return { animal: "Rabbit", timeRange: "5 AM - 7 AM", trait: "Natural Diplomat & Discerning Taste" };
  if (hour >= 7 && hour < 9) return { animal: "Dragon", timeRange: "7 AM - 9 AM", trait: "Dynamic Power & Fearless Charisma" };
  if (hour >= 9 && hour < 11) return { animal: "Snake", timeRange: "9 AM - 11 AM", trait: "Inscrutable Logic & Analytical Sage" };
  if (hour >= 11 && hour < 13) return { animal: "Horse", timeRange: "11 AM - 1 PM", trait: "Indomitable Freedom & Radiant Cheer" };
  if (hour >= 13 && hour < 15) return { animal: "Goat", timeRange: "1 PM - 3 PM", trait: "Artistic Spirit & Deep Compassion" };
  if (hour >= 15 && hour < 17) return { animal: "Monkey", timeRange: "3 PM - 5 PM", trait: "Brilliant Wit & Master Problem-Solver" };
  if (hour >= 17 && hour < 19) return { animal: "Rooster", timeRange: "5 PM - 7 PM", trait: "Meticulous Planner & Eloquent Speaker" };
  if (hour >= 19 && hour < 21) return { animal: "Dog", timeRange: "7 PM - 9 PM", trait: "Unrivaled Integrity & Silent Guardian" };
  return { animal: "Pig", timeRange: "9 PM - 11 PM", trait: "Sensory Connoisseur & True Philanthropist" };
}

/**
 * Merges Western and Eastern elemental systems to synthesize a detailed psychological report.
 * @param {string} western - Name of Western sign
 * @param {string} eastern - Name of Eastern sign
 * @returns {Object} Structured report parameters including the overall archetype name
 */
export function generateDetailedReport(western, eastern) {
  const west = WESTERN_DATA[western];
  const east = EASTERN_DATA[eastern];
  const archetype = PRIMAL_ARCHETYPES[western]?.[eastern] || "The Celestial Beacon";

  const westEl = west.element;
  const eastEl = east.element;

  const intro = `As ${archetype}, you represent an intriguing crossroads of cosmic currents where Western ${westEl} (${western}) blends with Eastern Lunar ${eastEl} (${eastern}).`;
  
  let personalityBlend = "";
  if (westEl === "Fire") {
    if (eastEl === "Wood") personalityBlend = "Wood acts as the absolute fuel for your Fire. You possess an endless reserve of ideas, inspiration, and dynamic momentum.";
    else if (eastEl === "Fire") personalityBlend = "Double fire elements create an incredibly warm, enthusiastic, and radiant character. Your natural magnetism is undeniable.";
    else if (eastEl === "Earth") personalityBlend = "Your fiery instincts are anchored by a practical, earthy determination. You have the rare gift of initiating ambitious ideas and seeing them through.";
    else if (eastEl === "Metal") personalityBlend = "Fire meets metal in a furnace of high pressure. You possess the intensity to forge your own path with surgical execution.";
    else personalityBlend = "A fascinating duality of steam. You toggle between passionate outpourings of energy and deep periods of emotional introspection.";
  } else if (westEl === "Earth") {
    if (eastEl === "Wood") personalityBlend = "Your patient, steady earthy nature is structured with the expansive growth of wood. You build reliable systems with innovative blueprints.";
    else if (eastEl === "Fire") personalityBlend = "Deep down, you are highly motivated. Your calm earth exterior hides a hot core of drive and endurance.";
    else if (eastEl === "Earth") personalityBlend = "Double earth signals unshakeable stability, deep integrity, and a realistic, grounded approach to life.";
    else if (eastEl === "Metal") personalityBlend = "Your analytical mind combined with practical execution makes you exceptionally sharp. You organize chaos into productive patterns.";
    else personalityBlend = "Earth and Water blend into a highly nurturing, highly protective personality. You are intuitive yet intensely practical.";
  } else if (westEl === "Air") {
    if (eastEl === "Wood") personalityBlend = "You are a master communicator. The free flow of your air-sign mind is supported by fertile wood development.";
    else if (eastEl === "Fire") personalityBlend = "A wildfire of wit and charm. Your intellectual air fans the flames of your social, expressive side.";
    else if (eastEl === "Earth") personalityBlend = "Your visionary, conceptual air-sign logic is highly grounded in practical outputs.";
    else if (eastEl === "Metal") personalityBlend = "Double intellect forces. Your mental sharp-mindedness is paired with structured, logical systems.";
    else personalityBlend = "You balance logic with absolute sensitivity. You process life through abstract ideas but remain highly empathetic.";
  } else { // Water
    if (eastEl === "Wood") personalityBlend = "Wood and Water create a lush garden of artistic, empathic energy. You are highly imaginative and compassionate.";
    else if (eastEl === "Fire") personalityBlend = "You are highly intuitive with a vibrant, intense emotional spectrum. You react deeply and love with total passion.";
    else if (eastEl === "Earth") personalityBlend = "You blend emotional fluidness with grounded structure. You are highly protective of your vulnerabilities.";
    else if (eastEl === "Metal") personalityBlend = "Your fluid, emotional deepness is polished by analytical logic. You observe things others miss completely.";
    else personalityBlend = "Double water creates an ocean of intuition, feeling, and psychic receptivity. You read people like books.";
  }

  const relationshipAdvice = `In love, you require both a meeting of minds (Western) and deep loyalty (Eastern). You thrive with partners who appreciate your multifaceted nature.`;
  const careerPath = `Professionally, you are a master of combining ${west.quality} strategies with the tactical resourcefulness of the ${eastern}.`;

  return { intro, blend: personalityBlend, relationships: relationshipAdvice, career: careerPath, archetype };
}