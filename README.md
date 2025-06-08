🚀 Skip Hire Booking App

A sleek and user-friendly React + TypeScript application for selecting skip sizes, managing selection state, and providing an elegant checkout experience.

## ✨ Features

- **Dynamic Skip Listing**: View and select from a range of skip sizes.
- **Custom API Hook**: Fetches data using a reusable `useAPI` hook, handling loading, error, and data states.
- **Error Boundaries**: Graceful handling of rendering errors with an `ErrorBoundary` component.
- **Environment Variables**: Environment-specific API URLs and keys managed through `.env` files.
- **Responsive UI**: Built with Tailwind CSS for a modern and responsive design.
- **Interactive Cards**: Card hover and selection states for an enhanced user experience.
- **Lazy-loaded Images**: Performance-optimized image loading.

📁 Project Structure

src/
├── api/                  # API layer for data fetching
│   ├── axios.ts          # Axios instance with defaults
│   └── skips.api.ts      # Functions to interact with the skips API
│
├── components/           # UI components
│   └── skips/            # Components specific to skip bin selection
│       ├── AddToCart.tsx
│       ├── ErrorAlert.tsx
│       ├── Loader.tsx
│       └── SkipCard.tsx
│
├── hooks/                # Custom React hooks
│   └── useSkips.ts       # Fetches skip data with loading and error handling
│
├── pages/                # Pages (routed components)
│   └── Skip.tsx          # Skip selection page
│
├── types/                # TypeScript type definitions
│   ├── index.ts
│   └── skip.types.ts
│
├── App.tsx               # App component, entry point for routing
├── index.css             # Global styles
└── main.tsx              # Main entry point for the React app


🛠️ My Approach

🧩 Implementation Approach
Custom useAPI Hook:
Centralizes data fetching logic (loading, error, data states) to keep components clean and maintainable.

ErrorBoundary Component:
Wraps the main App component to catch rendering errors, displaying a fallback UI and preventing the entire app from crashing.

State Management:

Selected Skip: Tracks the currently selected skip in Skip.tsx.

API Data: Fetched once via useAPI, stored in local component state.

UI Feedback: Loading spinner and graceful error messages for smooth user experience.

Image Handling:
Images are lazy-loaded to improve performance and reduce initial load time.

Images are loaded with loading="lazy" for better performance.

⚡ How to Run

# Install dependencies

npm install

# Start the dev server

npm run dev
