# Virtual Vet Assistant 🐾

A complete frontend-only pet care platform built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Six Fully Functional Pages

1. **Home** - Hero banner with quick navigation to key features
2. **Chatbot** - AI-powered assistant with intelligent keyword-based responses for pet care questions
3. **Connect to Vet** - Directory of 8 qualified veterinarians with photos, ratings, and specializations
4. **Tips & Tricks** - 12 expert pet care tips organized by category (Health, Nutrition, Safety, etc.)
5. **About** - Mission statement, values, and developer credits
6. **Contact** - Functional form that logs submissions to browser console

### Design Highlights

- 🎨 Soft, pet-friendly color palette with pastel blues, pinks, and greens
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🔄 Smooth animations and transitions
- 🎯 Consistent navigation with sticky header and footer
- ♿ Accessible with semantic HTML and proper ARIA labels

## 🚀 Getting Started

This is a React + Vite project. To run locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:8080`

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Shared navbar & footer
│   └── ui/                 # Shadcn UI components
├── data/
│   ├── vets.ts            # Veterinarian data (8 profiles)
│   └── tips.ts            # Pet care tips (12 entries)
├── pages/
│   ├── Home.tsx           # Landing page with hero
│   ├── Chatbot.tsx        # Interactive chat interface
│   ├── ConnectVet.tsx     # Vet directory with cards
│   ├── Tips.tsx           # Filterable tips grid
│   ├── About.tsx          # Project information
│   ├── Contact.tsx        # Contact form
│   └── NotFound.tsx       # 404 page
└── App.tsx                # Main routing configuration
```

## 💡 How It Works

### Chatbot Logic
The chatbot uses keyword matching on user input to provide relevant responses. It recognizes questions about:
- Greetings and general inquiries
- Pet nutrition and diet
- Illness and emergencies
- Vaccinations
- Exercise and activity
- Grooming
- Veterinary services

### Vet Directory
All veterinarian data is stored in `src/data/vets.ts`. Each vet profile includes:
- Professional photo (from Unsplash)
- Name and specialization
- Location and availability
- Years of experience
- Star rating

### Tips System
Pet care tips are stored in `src/data/tips.ts` with categorization. Users can filter by:
- All categories
- Health
- Nutrition
- Fitness
- Prevention
- Safety
- Wellness
- Grooming

### Contact Form
The form validates all required fields and logs submissions to the browser console (press F12 to view). In a production app, this would connect to a backend API.

## 🎨 Design System

The app uses a comprehensive design system defined in `src/index.css`:

- **Primary**: Soft sky blue (#85C7DB) - main brand color
- **Secondary**: Warm pink (#FFE0E6) - accents and highlights
- **Accent**: Sage green (#C8E6C9) - secondary accents
- **Background**: Warm cream (#F9F7F4) - page background
- **Borders & Inputs**: Subtle blues for form elements

All colors use HSL format for easy theme customization.

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Pre-built components
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 👨‍💻 Developer

**Aaran Shandilya**

This project demonstrates modern frontend development practices including:
- Component-based architecture
- Type-safe development with TypeScript
- Responsive design principles
- State management with React hooks
- Design system implementation
- SEO optimization with proper meta tags

## 📝 Notes

- **No Backend Required**: All data is stored in TypeScript files
- **No API Calls**: Chatbot uses local logic, no external AI service
- **Browser Console**: Check the console for contact form submissions
- **Fully Static**: Can be deployed to any static hosting service

## 🚀 Deployment

This app can be deployed to any static hosting service:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The `dist/` folder contains the production-ready files.

---

**Built with ❤️ for pet lovers everywhere**
