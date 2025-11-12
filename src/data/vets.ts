export interface Vet {
  id: number;
  name: string;
  photo: string;
  specialization: string;
  location: string;
  rating: number;
  experience: string;
  availability: string;
}

export const vets: Vet[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    specialization: "General Practice & Surgery",
    location: "New York, NY",
    rating: 4.9,
    experience: "15 years",
    availability: "Mon-Fri, 9AM-6PM"
  },
  {
    id: 2,
    name: "Dr. James Chen",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    specialization: "Exotic Pets & Birds",
    location: "San Francisco, CA",
    rating: 4.8,
    experience: "12 years",
    availability: "Tue-Sat, 10AM-7PM"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    specialization: "Emergency & Critical Care",
    location: "Chicago, IL",
    rating: 5.0,
    experience: "18 years",
    availability: "24/7 Emergency"
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    specialization: "Dentistry & Oral Surgery",
    location: "Austin, TX",
    rating: 4.7,
    experience: "10 years",
    availability: "Mon-Thu, 8AM-5PM"
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    specialization: "Internal Medicine",
    location: "Seattle, WA",
    rating: 4.9,
    experience: "14 years",
    availability: "Mon-Fri, 9AM-5PM"
  },
  {
    id: 6,
    name: "Dr. Robert Williams",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    specialization: "Orthopedics & Rehabilitation",
    location: "Miami, FL",
    rating: 4.8,
    experience: "16 years",
    availability: "Mon-Sat, 8AM-6PM"
  },
  {
    id: 7,
    name: "Dr. Amanda Foster",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    specialization: "Dermatology",
    location: "Boston, MA",
    rating: 4.9,
    experience: "11 years",
    availability: "Tue-Fri, 10AM-6PM"
  },
  {
    id: 8,
    name: "Dr. Kevin Park",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    specialization: "Cardiology",
    location: "Denver, CO",
    rating: 5.0,
    experience: "20 years",
    availability: "Mon-Fri, 9AM-4PM"
  }
];
