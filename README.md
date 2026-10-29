# 📒 Notes Application

A modern, full-featured notes application built with React and Vite. This application allows users to create, edit, archive, and manage their personal notes with a clean and responsive interface.

## ✨ Features

### Core Features
- 📝 **Create Notes** - Add new notes with rich text content
- ✏️ **Edit Notes** - Modify existing notes
- 🗑️ **Delete Notes** - Remove notes
- 📦 **Archive System** - Archive and unarchive notes for better organization
- 🔍 **Search Functionality** - Search notes by title with real-time filtering
- 👁️ **Detail View** - View complete note details with formatted content

### User Experience
- 🔐 **Authentication** - Secure login and registration system
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes
- 🌍 **Multi-language** - Support for Indonesian and English
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⬆️ **Back to Top** - Quick navigation button for long pages
- 🔄 **Loading States** - Visual feedback during data operations

### Technical Features
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Modern UI** - Clean and intuitive interface with smooth transitions
- 🔒 **Protected Routes** - Secure pages with authentication
- 💾 **Persistent Storage** - Theme and language preferences saved locally
- 🌐 **API Integration** - Connected to Dicoding Notes API

## Teknologi yang Digunakan

- **React 19** - Library UI
- **React Router DOM v7** - Routing
- **PropTypes** - Type checking untuk props
- **React Icons** - Icon library
- **Vite** - Build tool dan dev server

## 📦 Dependencies

### Production Dependencies
```json
{
  "prop-types": "^15.8.1",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.9.3"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.25.0",
  "@types/react": "^19.1.2",
  "@types/react-dom": "^19.1.2",
  "@vitejs/plugin-react": "^4.4.1",
  "eslint": "^9.25.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^16.0.0",
  "vite": "^6.3.6"
}
```

**Note:** Using React 19 (latest), React Router 7, Vite 6, dengan flat config!

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

## Instalasi

1. Clone atorau download this repository

2. Install vite:
```bash
npm create vite
```

3. Install dependencies:
```bash
npm install
```

4. Install dependencies PropTypes:
```bash
npm install prop-types
```

5. Install react - icons:
```bash
npm install react-icons  
```

6. Install react - icons:
```bash
npm install react-router-dom 
```

7. Run development server:
```bash
npm run dev
```

8. Open browser by link:
```
http://localhost:5173
```

## 📁 Project Structure

```
notes-app/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BackToTop.jsx
│   │   ├── Navigation.jsx
│   │   ├── NoteInput.jsx
│   │   ├── NoteItem.jsx
│   │   ├── NotesList.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── SearchBar.jsx
│   ├── contexts/            # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── LanguageContext.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.jsx
│   │   ├── useTheme.jsx
│   │   ├── useLanguage.jsx
│   │   └── useInput.jsx
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── AddPage.jsx
│   │   ├── EditPage.jsx
│   │   ├── DetailPage.jsx
│   │   ├── ArchivePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/              # CSS styles
│   │   └── style.css
│   ├── utils/               # Utility functions
│   │   └── network-data.js
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Technologies Used

### Core
- **React 19.1.0** - Latest JavaScript library for building user interfaces
- **Vite 6.3.6** - Next generation frontend tooling with lightning-fast HMR
- **React Router 7.9.3** - Declarative routing for React with improved performance

### UI & Styling
- **CSS Variables** - For dynamic theme customization
- **React Icons 5.5.0** - Beautiful icon library (Feather Icons)
- **Responsive Design** - Mobile-first approach with modern CSS

### State Management
- **React Context API** - For global state management
- **React Hooks** - For component state and lifecycle

### Code Quality
- **ESLint 9.25.0** - Modern linting with flat config system
- **PropTypes 15.8.1** - Runtime type checking for props

### API
- **Dicoding Notes API** - Backend service for notes management

## 🏗️ Technical Implementation

### React Components Architecture

#### Class Components
Some components use Class Components to demonstrate understanding of lifecycle and state management:
- **`NoteInput`** (`src/components/NoteInput.jsx`)
  - Controlled component with class
  - State management for title and body
  - Event handlers with binding

#### Functional Components with Hooks
Other components use modern Functional Components with Hooks:
- **`HomePage`** (`src/pages/HomePage.jsx`)
  - `useState` for notes and loading state
  - `useEffect` for data fetching
  - `useSearchParams` for search functionality
- **`ArchivePage`** (`src/pages/ArchivePage.jsx`)
  - State management for archived notes
  - Search with URL parameters
- **`DetailPage`** (`src/pages/DetailPage.jsx`)
  - `useParams` to get note ID
  - `useNavigate` for navigation
  - `useEffect` for fetching note detail
- **`AddPage`** (`src/pages/AddPage.jsx`)
  - `useState` for loading state
  - `useNavigate` for redirect
- **`EditPage`** (`src/pages/EditPage.jsx`)
  - Complex state management
  - `useParams` and `useEffect`
- **Presentational Components**
  - `NoteItem`, `NotesList`, `SearchBar`
  - Pure components for reusability

### Custom Hooks
Extracting reusable logic with custom hooks:
- **`useInput`** - Controlled component logic
- **`useAuth`** - Authentication state
- **`useTheme`** - Theme management
- **`useLanguage`** - Internationalization

### React Context API
Global state management using Context:
- **`AuthContext`** - User authentication state
- **`ThemeContext`** - Dark/light theme
- **`LanguageContext`** - Internationalization (i18n)

### Routing Implementation
Using React Router DOM v7 with features:
- **Protected Routes** - Authentication guard
- **Path Parameters** - Detail page (`/notes/:id`)
- **Search Parameters** - Search functionality (`/?keyword=...`)
- **404 Handling** - NotFound page with wildcard route
- **Nested Routes** - MainLayout with Outlet
- **Programmatic Navigation** - useNavigate hook

### State Management Strategy
- **Local State** - `useState` for component-specific state
- **Global State** - React Context for shared state
- **Persistent State** - localStorage for theme, language, and auth token
- **API State** - Fetch on demand, no global cache

### Controlled Components
- **Input Title** - Standard controlled component with `value` and `onChange`
- **Input Body** - `contentEditable` div for rich text support
  - Custom event handler `onInput`
  - `dangerouslySetInnerHTML` for rendering HTML content
  - Placeholder using CSS `::before` pseudo-element

### API Integration
- **Helper Functions** in `src/utils/network-data.js`
- **Bearer Token Authentication** - Automatic header injection
- **Error Handling** - Graceful error messages
- **Loading States** - User feedback during fetch

### Styling Architecture
- **CSS Variables** - Dynamic theming
- **Data Attributes** - `[data-theme="dark"]` for theme switching
- **Responsive Design** - Mobile-first approach
- **Modern CSS**
  - Grid layout for notes list
  - Flexbox for components
  - Smooth transitions
  - Custom scrollbar

### Performance Optimizations
- **Lazy Loading** - Component-level code splitting potential
- **Memoization Ready** - Structure supports React.memo
- **Efficient Re-renders** - Proper key props
- **Debounced Search** - URL parameter updates

### Security Considerations
- **Protected Routes** - Unauthorized access prevention
- **Token Storage** - localStorage with proper cleanup
- **XSS Prevention** - Careful use of `dangerouslySetInnerHTML`
- **Input Validation** - Client-side form validation

### Development Tools
- **ESLint 9** - Code quality with flat config
- **Vite 6** - Fast development and build
- **React DevTools Ready** - Component debugging
- **React Router DevTools Compatible**

## 🔄 Data Flow

```
User Action → Component Event Handler → API Call (network-data.js)
→ Update State → Re-render Component → Update UI
```

## 🎯 Best Practices Applied

- ✅ Component composition and reusability
- ✅ Separation of concerns (components, hooks, contexts, utils)
- ✅ Prop validation with PropTypes
- ✅ Error boundaries ready structure
- ✅ Accessible UI (semantic HTML)
- ✅ Consistent naming conventions
- ✅ Clean code principles
- ✅ DRY (Don't Repeat Yourself) with custom hooks
- ✅ Single Responsibility Principle per component

## 📖 How to Use

### 1. Register New Account
- Open the application, you'll be directed to the login page
- Click **"Register here"** link below the login form
- Fill in the registration form:
  - **Full Name**: Minimum 3 characters
  - **Email**: Valid email format
  - **Password**: Minimum 6 characters
- Click **"Register"** button
- After success, you'll be redirected to the login page

### 2. Login to Application
- On the login page, enter:
  - **Email**: Your registered email
  - **Password**: Your account password
- Click **"Login"** button
- If successful, you'll enter the main application page
- Authentication token will be saved automatically

### 3. View Notes List
- After login, you'll see the **"Active Notes"** page
- All active notes are displayed in grid card format
- Click **Archive** icon (📦) in navigation to view archived notes
- Each note displays: title, date, and content preview

### 4. Search Notes
- Use the search bar above the notes list
- Type the note title you want to search
- Search results appear in real-time
- URL will change to `/?keyword=...` (shareable)
- Search works on both active and archive pages

### 5. Add New Note
- Click **"+"** (plus) icon in the top right navigation
- URL will change to `/notes/new`
- Fill in the note form:
  - **Title**: Type note title
  - **Content**: Type or paste note content (supports rich text)
- Click **"Save"** button with ✓ icon
- New note will appear in the active notes list

### 6. View Note Details
- Click **note title** or note card in the list
- URL will change to `/notes/:id`
- Detail page displays:
  - Complete title
  - Creation date
  - Full note content with formatting
- Detail page can be accessed directly via URL (shareable)

### 7. Edit Note
- Open the note detail you want to edit
- Click **"Edit"** button with ✏️ icon
- URL will change to `/notes/edit/:id`
- Modify title or note content as needed
- Click **"Save"** button (✓) to save changes
- Click **"Cancel"** button (✕) to cancel changes
- After saving, you'll be redirected to note detail
- **Note**: Creation date will be reset because API doesn't support direct editing

### 8. Archive/Unarchive Notes
- **Archive from List**:
  - On note card, click **Archive** icon (📦)
  - Note will move to archive page
- **Archive from Detail**:
  - Open note detail
  - Click **"Archive"** button with 📦 icon
  - Note will move to archive
- **Restore from Archive**:
  - Open archive page
  - Click **Unarchive** icon (↑) on note card
  - Or open archived note detail and click **"Unarchive"**
  - Note will return to active page

### 9. Delete Note
- **Delete from List**:
  - On note card, click **Trash** icon (🗑️)
  - Deletion confirmation will appear
  - Click "OK" to delete
- **Delete from Detail**:
  - Open note detail
  - Click **"Delete"** button with 🗑️ icon
  - Confirm deletion
  - After deletion, you'll be redirected to main page
- **Note**: Deletion is permanent and cannot be undone

### 10. Change Theme
- Click **Moon** icon (🌙) for dark mode
- Click **Sun** icon (☀️) for light mode
- Theme preference is saved automatically
- Theme will be applied when opening the app again

### 11. Change Language
- Click **Globe** button (🌐) with label "ID" or "EN"
- Language will switch between Indonesian and English
- Language preference is saved automatically
- All application text will change according to selected language

### 12. Logout
- Click **Logout** icon (🚪) in the top right navigation
- You'll exit the application
- Authentication token will be deleted
- You'll be redirected back to login page

### 13. Additional Features

#### Back to Top Button
- Appears automatically when scrolling down
- Click to return to top of page with smooth scroll

#### Shareable URLs
- Each page has a unique URL that can be shared:
  - Note detail: `/notes/:id`
  - Search: `/?keyword=search`
  - Archive: `/archives?keyword=search`
  - Edit: `/notes/edit/:id`

#### Empty State
- If no notes, displays friendly illustration and message
- If search not found, button to clear search is available

#### Loading States
- Spinner appears when loading data
- Buttons disabled during save/loading process

## 🎨 Theme Customization

The application uses CSS variables for easy theme customization. You can modify the colors in `src/styles/style.css`:

```css
:root {
  --primary-color: #6366f1;
  --danger-color: #ef4444;
  --success-color: #10b981;
  /* ... other variables */
}
```

## 🌍 Language Support

Currently supported languages:
- 🇮🇩 Indonesian (Bahasa Indonesia)
- 🇬🇧 English

## 📝 API Endpoints

The application uses the following API endpoints:

- `POST /login` - User login
- `POST /register` - User registration
- `GET /users/me` - Get logged user info
- `GET /notes` - Get active notes
- `GET /notes/archived` - Get archived notes
- `GET /notes/:id` - Get note detail
- `POST /notes` - Create new note
- `POST /notes/:id/archive` - Archive a note
- `POST /notes/:id/unarchive` - Unarchive a note
- `DELETE /notes/:id` - Delete a note

## 🔐 Authentication

The application uses JWT (JSON Web Token) for authentication. The token is stored in localStorage and automatically included in API requests.

## 🐛 Known Issues

- Edit functionality uses a workaround (delete + create) due to API limitations
- Note content is limited to HTML format

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Project ini dibuat untuk keperluan submission pembelajaran React di program Asah Led by Dicoding.

## 👨‍💻 Author

Created with ❤️ for learning purposes

## 🙏 Acknowledgments

- [Dicoding Indonesia](https://www.dicoding.com/) - For providing the Notes API
- [React Icons](https://react-icons.github.io/react-icons/) - For the beautiful icons
- [Vite](https://vitejs.dev/) - For the amazing build tool

## 📞 Support

If you have any questions or issues, please open an issue in the repository.

---

**Happy Note Taking! 📝**