# MongoDB Backend Setup Guide

## 📋 Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account OR local MongoDB installation
- npm or yarn package manager

## 🚀 Step-by-Step Setup

### Step 1: Get MongoDB Connection String

#### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up/Login
3. Create a new cluster (Free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/hospital-db`)
6. Replace `<password>` with your actual password

#### Option B: Local MongoDB
1. Install MongoDB locally
2. Use connection string: `mongodb://localhost:27017/hospital-db`

### Step 2: Configure Backend Environment

1. Navigate to the server folder:
```bash
cd server
```

2. Create `.env` file (copy from `.env.example`):
```bash
copy .env.example .env
```

3. Edit `.env` file and add your MongoDB connection string:
```
MONGODB_URI=your_actual_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Step 3: Install Backend Dependencies

```bash
npm install
```

### Step 4: Configure Frontend Environment

1. Go back to root directory:
```bash
cd ..
```

2. Create `.env` file in root:
```bash
copy .env.example .env
```

3. The file should contain:
```
VITE_API_URL=http://localhost:5000/api
```

### Step 5: Start the Backend Server

```bash
cd server
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:5000
```

### Step 6: Start the Frontend

Open a new terminal and run:
```bash
npm run dev
```

## 🔌 API Endpoints

### Patients
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Create patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient
- `POST /api/patients/login` - Patient login

### Doctors
- `GET /api/doctors` - Get all doctors

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment

### Bed Allocations
- `GET /api/beds` - Get all bed allocations
- `POST /api/beds` - Create bed allocation
- `PUT /api/beds/:id` - Update bed allocation
- `POST /api/beds/:id/visits` - Add doctor visit

## 🧪 Testing the Backend

Test if backend is running:
```bash
curl http://localhost:5000/health
```

Should return:
```json
{"status":"OK","message":"Hospital Backend Running"}
```

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Check if your IP is whitelisted in MongoDB Atlas
- Verify connection string format
- Ensure password doesn't contain special characters (or URL encode them)

### Port Already in Use
- Change PORT in `server/.env` to different number (e.g., 5001)
- Update `VITE_API_URL` in root `.env` accordingly

### CORS Errors
- Backend already configured with CORS
- Ensure frontend is running on expected port

## 📁 Project Structure

```
project/
├── server/                 # Backend
│   ├── src/
│   │   ├── config/        # Database config
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Business logic
│   │   └── server.js      # Entry point
│   ├── .env               # Environment variables
│   └── package.json
├── src/                   # Frontend
│   ├── data/
│   │   ├── api.ts        # API service layer
│   │   └── store.ts      # (Keep for fallback)
│   └── ...
└── .env                   # Frontend env variables
```

## 🔄 Migration from localStorage

The new API layer (`src/data/api.ts`) provides the same interface as the old localStorage store. You can gradually migrate your components to use the API instead of direct localStorage calls.

## 🎯 Next Steps

1. Provide your MongoDB connection string
2. Run the setup commands
3. Test the backend endpoints
4. Update frontend components to use the new API layer

## 📞 Need Help?

If you encounter any issues, provide:
- Error messages from terminal
- MongoDB connection string format (without password)
- Node.js version (`node --version`)
