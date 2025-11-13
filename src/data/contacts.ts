export interface Contact {
  id: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
  lastContactDate: string;
  followUpDate: string;
  photo: string;
  notes: string;
  contextTags: string[];
}

const firstNames = [
  "Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "William",
  "Mia", "James", "Charlotte", "Benjamin", "Amelia", "Lucas", "Harper", "Henry", "Evelyn", "Alexander",
  "Abigail", "Michael", "Emily", "Daniel", "Elizabeth", "Matthew", "Sofia", "David", "Avery", "Joseph",
  "Ella", "Samuel", "Madison", "Sebastian", "Scarlett", "John", "Victoria", "Carter", "Aria", "Owen",
  "Grace", "Dylan", "Chloe", "Luke", "Camila", "Gabriel", "Penelope", "Anthony", "Riley", "Isaac",
  "Layla", "Grayson", "Lillian", "Jack", "Nora", "Julian", "Zoey", "Levi", "Mila", "Christopher",
  "Aubrey", "Joshua", "Hannah", "Andrew", "Lily", "Lincoln", "Addison", "Mateo", "Eleanor", "Ryan",
  "Natalie", "Jaxon", "Luna", "Nathan", "Savannah", "Aaron", "Brooklyn", "Eli", "Leah", "Thomas",
  "Zoe", "Charles", "Stella", "Caleb", "Hazel", "Josiah", "Ellie", "Christian", "Paisley", "Hunter",
  "Violet", "Wyatt", "Aurora", "Jonathan", "Audrey", "Elijah", "Maya", "Landon", "Lucy", "Adrian"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
  "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
  "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
  "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
  "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
  "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
];

const contextTagsPool = [
  "Work", "Family", "Friend", "College", "Gym", "Neighbor", "Client", "Mentor", "Hobby",
  "Travel", "Business", "School", "Church", "Sports", "Music", "Art", "Tech", "Health",
  "Finance", "Real Estate", "Marketing", "Sales", "Design", "Engineering", "Education",
  "Healthcare", "Legal", "Consulting", "Startup", "Investment", "Networking", "Conference",
  "LinkedIn", "Instagram", "Facebook", "Twitter", "Dating", "Party", "Wedding", "Birthday"
];

const notesTemplates = [
  "Met at coffee shop, discussed project ideas",
  "Interested in collaboration opportunities",
  "Very knowledgeable about tech industry",
  "Looking for career advice",
  "Wants to connect for networking",
  "Potential business partner",
  "Great conversation about travel experiences",
  "Shared contact at networking event",
  "Friend of a friend, very friendly",
  "Expert in their field, valuable connection",
  "Recently moved to the area",
  "Working on an interesting startup",
  "Alumni from same university",
  "Met through mutual friend",
  "Shares similar interests and hobbies",
  "Looking to hire for their company",
  "Great mentor potential",
  "Fun personality, easy to talk to",
  "Very connected in the industry",
  "Recommended by colleague"
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generatePhoneNumber(): string {
  const areaCode = Math.floor(Math.random() * 900) + 100;
  const firstPart = Math.floor(Math.random() * 900) + 100;
  const secondPart = Math.floor(Math.random() * 9000) + 1000;
  return `+1 (${areaCode}) ${firstPart}-${secondPart}`;
}

function generateDate(startYear: number, endYear: number): string {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function generateBirthDate(): string {
  return generateDate(1970, 2000);
}

function generateLastContactDate(): string {
  return generateDate(2024, 2025);
}

function generateFollowUpDate(): string {
  return generateDate(2025, 2026);
}

// Array of avatar numbers (we'll generate 20 different avatars and reuse them)
const avatarCount = 20;
const avatarIndices = Array.from({ length: avatarCount }, (_, i) => i + 1);

export const dummyContacts: Contact[] = Array.from({ length: 100 }, (_, index) => ({
  id: `contact-${index + 1}`,
  name: `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`,
  birthDate: generateBirthDate(),
  phoneNumber: generatePhoneNumber(),
  lastContactDate: generateLastContactDate(),
  followUpDate: generateFollowUpDate(),
  photo: `/avatars/avatar-${(index % avatarCount) + 1}.jpg`,
  notes: getRandomElement(notesTemplates),
  contextTags: getRandomElements(contextTagsPool, Math.floor(Math.random() * 3) + 1)
}));
