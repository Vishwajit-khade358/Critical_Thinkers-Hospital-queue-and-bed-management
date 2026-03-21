# Hospital Management System - Architecture

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React + Vite)                  │
│                     http://localhost:5173                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Patient    │  │  Appointment │  │     Bed      │          │
│  │    Pages     │  │    Pages     │  │  Allocation  │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                  │                  │                   │
│         └──────────────────┼──────────────────┘                  │
│                            │                                      │
│                   ┌────────▼────────┐                            │
│                   │   API Service   │                            │
│                   │  (src/data/     │                            │
│                   │    api.ts)      │                            │
│                   └────────┬────────┘                            │
│                            │                                      │
└────────────────────────────┼──────────────────────────────────────┘
                             │
                             │ HTTP/REST API
                             │ (JSON)
                             │
┌────────────────────────────▼──────────────────────────────────────┐
│                    BACKEND (Node.js + Express)                    │
│                     http://localhost:5000                         │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    API Routes                            │    │
│  │  /api/patients  /api/doctors  /api/appointments  /api/beds│   │
│  └────────────────────────┬─────────────────────────────────┘    │
│                           │                                       │
│  ┌────────────────────────▼─────────────────────────────────┐    │
│  │                    Controllers                            │    │
│  │  Patient Logic  Doctor Logic  Appointment Logic  Bed Logic│   │
│  └────────────────────────┬─────────────────────────────────┘    │
│                           │                                       │
│  ┌────────────────────────▼─────────────────────────────────┐    │
│  │                  Mongoose Models                          │    │
│  │  Patient Schema  Doctor Schema  Appointment  BedAllocation│   │
│  └────────────────────────┬─────────────────────────────────┘    │
│                           │                                       │
└───────────────────────────┼───────────────────────────────────────┘
                            │
                            │ MongoDB Driver
                            │
┌───────────────────────────▼───────────────────────────────────────┐
│                    DATABASE (MongoDB)                             │
│                  mongodb://... or mongodb+srv://...               │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  patients    │  │   doctors    │  │ appointments │          │
│  │ collection   │  │  collection  │  │  collection  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                   │
│  ┌──────────────┐                                                │
│  │bedallocations│                                                │
│  │  collection  │                                                │
│  └──────────────┘                                                │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

## Data Flow Example: Creating a Patient

```
1. User fills registration form
   └─> Frontend (React Component)

2. Form submission
   └─> API Service (src/data/api.ts)
       └─> POST /api/patients with patient data

3. Backend receives request
   └─> Express Router (routes/index.js)
       └─> Patient Controller (controllers/index.js)
           └─> Hash password with bcrypt
           └─> Create Patient Model instance
               └─> Mongoose saves to MongoDB

4. MongoDB returns saved document
   └─> Controller sends response
       └─> Frontend receives patient data
           └─> Update UI / Redirect to login
```

## Technology Stack

### Frontend Layer
```
┌─────────────────────────────────────┐
│ React 18                            │
│ ├─ TypeScript                       │
│ ├─ Vite (Build Tool)                │
│ ├─ React Router (Navigation)        │
│ ├─ Tailwind CSS (Styling)           │
│ ├─ shadcn/ui (Components)           │
│ └─ Fetch API (HTTP Requests)        │
└─────────────────────────────────────┘
```

### Backend Layer
```
┌─────────────────────────────────────┐
│ Node.js (Runtime)                   │
│ ├─ Express.js (Web Framework)       │
│ ├─ Mongoose (ODM)                   │
│ ├─ bcryptjs (Password Hashing)      │
│ ├─ CORS (Cross-Origin)              │
│ ├─ dotenv (Environment Variables)   │
│ └─ nodemon (Development)            │
└─────────────────────────────────────┘
```

### Database Layer
```
┌─────────────────────────────────────┐
│ MongoDB                             │
│ ├─ Document-based NoSQL             │
│ ├─ Collections (Tables)             │
│ ├─ BSON Documents (Records)         │
│ └─ Indexes for Performance          │
└─────────────────────────────────────┘
```

## API Endpoints Map

```
Backend Server (localhost:5000)
│
├─ /health (GET)
│  └─> Health check endpoint
│
└─ /api
   │
   ├─ /patients
   │  ├─ GET    → List all patients
   │  ├─ POST   → Create patient
   │  ├─ PUT    → Update patient
   │  ├─ DELETE → Delete patient
   │  └─ /login (POST) → Authenticate
   │
   ├─ /doctors
   │  └─ GET    → List all doctors
   │
   ├─ /appointments
   │  ├─ GET    → List appointments
   │  ├─ POST   → Create appointment
   │  └─ PUT    → Update appointment
   │
   └─ /beds
      ├─ GET    → List bed allocations
      ├─ POST   → Allocate bed
      ├─ PUT    → Update allocation
      └─ /:id/visits (POST) → Add doctor visit
```

## Database Schema

### Patient Collection
```javascript
{
  _id: ObjectId,
  firstName: String,
  middleName: String,
  lastName: String,
  address: String,
  mobile: String,
  email: String,
  username: String (unique),
  password: String (hashed),
  registeredAt: Date
}
```

### Doctor Collection
```javascript
{
  _id: ObjectId,
  name: String,
  specialization: String,
  available: Boolean
}
```

### Appointment Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  doctorId: ObjectId (ref: Doctor),
  date: String,
  time: String,
  status: String (enum),
  createdAt: Date
}
```

### BedAllocation Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  floor: Number,
  roomNumber: Number,
  bedNumber: Number,
  wardType: String (enum),
  pricePerDay: Number,
  allocatedAt: Date,
  dischargedAt: Date (nullable),
  doctorVisits: [
    {
      doctorId: ObjectId,
      doctorName: String,
      visitTime: String,
      notes: String
    }
  ]
}
```

## Security Features

```
┌─────────────────────────────────────┐
│ Security Layers                     │
├─────────────────────────────────────┤
│ 1. Password Hashing (bcrypt)        │
│    └─> Passwords never stored plain │
│                                     │
│ 2. CORS Protection                  │
│    └─> Only allowed origins         │
│                                     │
│ 3. Environment Variables            │
│    └─> Secrets not in code          │
│                                     │
│ 4. MongoDB Authentication           │
│    └─> Connection string secured    │
│                                     │
│ 5. Input Validation                 │
│    └─> Mongoose schema validation   │
└─────────────────────────────────────┘
```

## Deployment Architecture (Future)

```
┌──────────────────────────────────────────────────────────┐
│                    Production Setup                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Frontend (Vercel/Netlify)                              │
│  └─> Static files served via CDN                        │
│      └─> https://your-hospital.vercel.app               │
│                                                          │
│  Backend (Heroku/Railway/AWS)                           │
│  └─> Node.js server running                             │
│      └─> https://api.your-hospital.com                  │
│                                                          │
│  Database (MongoDB Atlas)                               │
│  └─> Cloud-hosted MongoDB                               │
│      └─> Automatic backups & scaling                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Development Workflow

```
1. Start Backend
   cd server && npm run dev
   └─> Connects to MongoDB
   └─> Initializes default doctors
   └─> Listens on port 5000

2. Start Frontend
   npm run dev
   └─> Vite dev server starts
   └─> Hot module replacement enabled
   └─> Listens on port 5173

3. Make Changes
   └─> Backend: Auto-restarts (nodemon)
   └─> Frontend: Auto-reloads (Vite HMR)

4. Test Features
   └─> Use browser for UI testing
   └─> Use Thunder Client for API testing
   └─> Check MongoDB Compass for data
```

---

This architecture provides:
- ✅ Separation of concerns
- ✅ Scalability
- ✅ Maintainability
- ✅ Security
- ✅ Real data persistence
- ✅ RESTful API design
