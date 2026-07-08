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
  
  if (isNaN(year) || year < 1930 || year > 2035) {
    return animals[(year - 1924) % 12];
  }

  const lnyString = LUNAR_NEW_YEARS[year];
  const lnyDate = new Date(lnyString);

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
    if (eastEl === "Wood") {
      personalityBlend = "You carry a radiant, self-replenishing drive. Because Wood naturally fuels Fire, your ambitious goals are constantly sustained by fresh, expansive ideas and a vibrant social curiosity. You don't just start projects with passion; you possess the organic stamina to nurture them into flourishing realities, blending raw enthusiasm with a warm, growth-oriented mindset.";
    } else if (eastEl === "Fire") {
      personalityBlend = "Your presence is instantly magnetic and intensely warm. Operating under a double-fire influence, you process the world through pure inspiration and passionate impulse. You are a natural catalyst for change, inspiring others with your bold authenticity, though you must occasionally learn to rest so your brilliant light doesn't burn out your physical reserves.";
    } else if (eastEl === "Earth") {
      personalityBlend = "You possess the rare and powerful ability to turn high-flying passions into concrete, lasting achievements. Your fiery inspiration is perfectly anchored by a patient, pragmatic determination. You don't just chase dreams; you build stable, structured foundations for them, moving through life with both a warm heart and an unshakeable, practical focus.";
    } else if (eastEl === "Metal") {
      personalityBlend = "You are a person of high-pressure focus and incredible resolve. The meeting of fire and metal creates a brilliant forge—your passionate instincts are refined by a sharp, disciplined, and logical mindset. You demand excellence of yourself and others, cutting through distractions with absolute clarity to carve out your own unique path.";
    } else { // Water
      personalityBlend = "Your inner world is a fascinating, highly sensitive dance of steam and depth. You balance passionate, outward-bound creative energy with a rich, highly intuitive emotional landscape. This creates a deeply empathetic and magnetic personality; you feel everything intensely and possess a unique ability to connect with others on a profoundly raw level.";
    }
  } else if (westEl === "Earth") {
    if (eastEl === "Wood") {
      personalityBlend = "You build reliable systems with an eye for natural growth. Blending patient, stable earth with the expansive curiosity of wood, you excel at taking raw materials and organizing them into thriving, creative ecosystems. You are highly practical yet deeply progressive, offering steady support while encouraging those around you to reach higher.";
    } else if (eastEl === "Fire") {
      personalityBlend = "Your calm, grounded exterior hides a remarkably driven and warm interior. While you project a steady, dependable presence, you are fueled by a hot core of quiet ambition and loyalty. You don't feel the need to shout to be heard; your actions carry a heavy, warm authority, and you protect those you love with quiet, enduring strength.";
    } else if (eastEl === "Earth") {
      personalityBlend = "You are an unshakeable anchor in a chaotic world. Operating under a double-earth influence, your life is guided by deep-rooted integrity, common sense, and a profound appreciation for stability. You move through life with a realistic, highly dependable pace, earning the absolute trust of everyone fortunate enough to be in your inner circle.";
    } else if (eastEl === "Metal") {
      personalityBlend = "Your analytical precision is perfectly matched by your practical execution. You look at chaos and instinctively see the underlying structure, organizing projects and ideas with absolute efficiency. You carry high standards, a quiet determination, and a sharp, logical mind that excels at turning messy concepts into polished, valuable realities.";
    } else { // Water
      personalityBlend = "You possess a deeply nurturing, protective, and receptive personality. Like fertile soil watered by natural springs, you are highly intuitive yet intensely practical. You hold onto memories and values with great care, creating safe, comfortable environments where people and relationships can truly take root and flourish.";
    }
  } else if (westEl === "Air") {
    if (eastEl === "Wood") {
      personalityBlend = "You are a master of ideas, connections, and communication. Your conceptual, quick-thinking mind flows seamlessly alongside a fertile, growth-oriented spirit. You love exploring new philosophies, bridging diverse groups of people, and translating complex concepts into warm, accessible, and inspiring conversations.";
    } else if (eastEl === "Fire") {
      personalityBlend = "You carry an electric, highly engaging energy that naturally uplifts any room you enter. Your intellectual curiosity acts as a draft of fresh air that fanned your passionate, expressive side. You are witty, charming, and highly social, constantly seeking out new adventures and turning dry facts into sparkling, creative dialogues.";
    } else if (eastEl === "Earth") {
      personalityBlend = "You are a pragmatic visionary. While your mind is always floating in the realm of concepts, structures, and future possibilities, your instincts are deeply grounded in real-world utility. You excel at taking complex, abstract ideas and translating them into step-by-step, highly functional plans that actually work.";
    } else if (eastEl === "Metal") {
      personalityBlend = "Your mind is a razor-sharp instrument of logic and clarity. Operating under a double-intellect influence, you easily detach from emotional noise to analyze facts, isolate key problems, and engineer brilliant strategic solutions. You value truth, clear communication, and elegant, highly organized systems above all else.";
    } else { // Water
      personalityBlend = "You balance high-level logic with profound emotional sensitivity. You process the world through objective ideas, yet you remain deeply, almost psychically keyed into the subtle emotional undercurrents around you. This makes you an incredibly empathetic listener and a highly creative thinker who understands the human heart just as well as abstract concepts.";
    }
  } else { // Water
    if (eastEl === "Wood") {
      personalityBlend = "You carry a highly artistic, imaginative, and deeply compassionate spirit. Like a lush garden fed by steady rain, your emotional depth naturally nourishes your creative development. You are sensitive to beauty, flow around obstacles with quiet grace, and possess a gentle, healing presence that naturally comforts those in pain.";
    } else if (eastEl === "Fire") {
      personalityBlend = "You possess a highly vibrant, intense, and deeply intuitive emotional spectrum. You react to life from a place of absolute depth, loving with fierce loyalty and processing your surroundings with raw sensitivity. You must find creative or physical outlets for your rich inner currents, as your passion and empathy are incredibly powerful forces.";
    } else if (eastEl === "Earth") {
      personalityBlend = "You beautifully blend emotional fluidity with protective, grounded structures. While you possess deep reservoirs of feeling, intuition, and empathy, you keep them safe behind a sensible, cautious exterior. You are highly reliable, fiercely loyal, and excel at providing a safe, stable, and incredibly loving container for your loved ones.";
    } else if (eastEl === "Metal") {
      personalityBlend = "Your intuitive emotional depth is beautifully polished by a sharp, analytical logic. You observe the quiet, unspoken details that others miss entirely, giving you a profound psychological insight into human behavior. You are quiet, highly strategic, and combine a sensitive heart with a cool, discerning mind.";
    } else { // Water
      personalityBlend = "You swim in a deep, boundless ocean of intuition, feeling, and psychic receptivity. Operating under a double-water influence, you read environments and people effortlessly, often knowing what others feel before they do. You are highly creative, fluidly adaptable, and guided by a profound, quiet spiritual wisdom.";
    }
  }

  const relationshipAdvice = `You thrive in connections where your intellectual spark is validated and your emotional safety is respected. You seek a relationship grounded in mutual freedom, where you both can communicate without playing psychological games.`;
  const careerPath = `Professionally, you excel in environments where you can blend strategic planning with practical, day-to-day execution. You thrive as a problem-solver who can handle chaos with composure while inspiring collaborative teamwork.`;

  return { intro, blend: personalityBlend, relationships: relationshipAdvice, career: careerPath, archetype };
}