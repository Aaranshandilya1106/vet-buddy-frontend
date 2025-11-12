export interface Tip {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
}

export const tips: Tip[] = [
  {
    id: 1,
    title: "Regular Vet Checkups",
    category: "Health",
    description: "Schedule annual wellness exams for your pet. Early detection of health issues can save lives and reduce treatment costs.",
    icon: "🏥"
  },
  {
    id: 2,
    title: "Balanced Nutrition",
    category: "Nutrition",
    description: "Feed your pet high-quality food appropriate for their age, size, and activity level. Consult your vet for dietary recommendations.",
    icon: "🍖"
  },
  {
    id: 3,
    title: "Daily Exercise",
    category: "Fitness",
    description: "Dogs need at least 30 minutes of exercise daily. Cats benefit from interactive play sessions. Regular activity prevents obesity and behavioral issues.",
    icon: "🎾"
  },
  {
    id: 4,
    title: "Dental Hygiene",
    category: "Health",
    description: "Brush your pet's teeth regularly and provide dental chews. Poor dental health can lead to serious infections and organ damage.",
    icon: "🦷"
  },
  {
    id: 5,
    title: "Proper Hydration",
    category: "Nutrition",
    description: "Ensure fresh, clean water is always available. Dehydration can cause kidney problems and other serious health issues.",
    icon: "💧"
  },
  {
    id: 6,
    title: "Vaccination Schedule",
    category: "Prevention",
    description: "Keep vaccinations up to date to protect against rabies, distemper, parvovirus, and other preventable diseases.",
    icon: "💉"
  },
  {
    id: 7,
    title: "Parasite Prevention",
    category: "Prevention",
    description: "Use monthly flea, tick, and heartworm preventatives year-round. These parasites can transmit serious diseases.",
    icon: "🛡️"
  },
  {
    id: 8,
    title: "Safe Environment",
    category: "Safety",
    description: "Pet-proof your home by removing toxic plants, securing chemicals, and eliminating choking hazards. Keep medications out of reach.",
    icon: "🏠"
  },
  {
    id: 9,
    title: "Mental Stimulation",
    category: "Wellness",
    description: "Provide puzzle toys, training sessions, and new experiences. Mental enrichment reduces anxiety and destructive behaviors.",
    icon: "🧩"
  },
  {
    id: 10,
    title: "Grooming Routine",
    category: "Grooming",
    description: "Regular brushing, nail trims, and bathing keep your pet comfortable and help you spot skin issues or lumps early.",
    icon: "✂️"
  },
  {
    id: 11,
    title: "Microchipping",
    category: "Safety",
    description: "Microchip your pet and keep registration information current. It's the best way to ensure a lost pet is returned to you.",
    icon: "📍"
  },
  {
    id: 12,
    title: "Temperature Awareness",
    category: "Safety",
    description: "Never leave pets in hot cars. Provide shade and cool water in summer. Limit outdoor time in extreme cold for sensitive breeds.",
    icon: "🌡️"
  }
];
