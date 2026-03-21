# MongoDB Backend Implementation Checklist

## ✅ What Has Been Created

### Backend Structure
- [x] `server/` folder with complete backend setup
- [x] Express.js server with CORS enabled
- [x] MongoDB models (Patient, Doctor, Appointment, BedAllocation)
- [x] RESTful API endpoints for all operations
- [x] Controllers with business logic
- [x] Database configuration
- [x] Environment variables template

### Frontend Integration
- [x] API service layer (`src/data/api.ts`)
- [x] Environment variables template
- [x] Maintained backward compatibility with localStorage

### Documentation
- [x] Comprehensive setup guide (BACKEND_SETUP.md)
- [x] Updated README with backend info
- [x] Setup automation script (setup-backend.bat)
- [x] Data migration utility

## 📋 What You Need to Provide

### 1. MongoDB Connection String
**Required:** Your MongoDB connection URI

**Options:**
- **MongoDB Atlas (Cloud):** `mongodb+srv://username:password@cluster.mongodb.net/hospital-db`
- **Local MongoDB:** `mongodb://localhost:27017/hospital-db`

**How to get it:**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Click "Connect" → "Connect your application"
5. Copy connection string

### 2. Environment Configuration
Create `server/.env` file with:
```
MONGODB_URI=<your_connection_string_here>
PORT=5000
NODE_ENV=development
```

## 🚀 Implementation Steps

### Phase 1: Backend Setup (15 minutes)

1. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment**
   - Create `server/.env` file
   - Add your MongoDB connection string
   - Verify PORT setting

3. **Test Backend**
   ```bash
   npm run dev
   ```
   - Should see: "✅ MongoDB Connected Successfully"
   - Should see: "🚀 Server running on http://localhost:5000"

4. **Verify API**
   - Open browser: http://localhost:5000/health
   - Should return: `{"status":"OK","message":"Hospital Backend Running"}`

### Phase 2: Frontend Configuration (5 minutes)

1. **Create Frontend .env**
   ```bash
   cd ..
   echo VITE_API_URL=http://localhost:5000/api > .env
   ```

2. **Install Frontend Dependencies** (if not already done)
   ```bash
   npm install
   ```

### Phase 3: Testing (10 minutes)

1. **Start Both Servers**
   - Terminal 1: `cd server && npm run dev`
   - Terminal 2: `npm run dev`

2. **Test Basic Operations**
   - Register a new patient
   - Login with patient credentials
   - Create an appointment
   - Allocate a bed

3. **Verify Data in MongoDB**
   - Use MongoDB Compass or Atlas UI
   - Check collections: patients, doctors, appointments, bedallocations

### Phase 4: Data Migration (Optional)

If you have existing localStorage data:

1. **Open browser console** (F12)
2. **Load migration script:**
   - Copy contents of `migrate-data.js`
   - Paste in console
   - Press Enter
3. **Verify migration** in MongoDB

## 🔧 Troubleshooting Guide

### Issue: "MongoDB Connection Error"
**Solutions:**
- Verify connection string format
- Check if IP is whitelisted in MongoDB Atlas
- Ensure password doesn't have special characters
- Try URL encoding password

### Issue: "Port 5000 already in use"
**Solutions:**
- Change PORT in `server/.env` to 5001
- Update `VITE_API_URL` in root `.env` to match
- Kill process using port: `netstat -ano | findstr :5000`

### Issue: "CORS Error"
**Solutions:**
- Backend already configured with CORS
- Verify frontend is calling correct API URL
- Check browser console for exact error

### Issue: "Cannot find module"
**Solutions:**
- Run `npm install` in both root and server folders
- Delete `node_modules` and reinstall
- Check Node.js version (should be v18+)

## 📊 API Endpoints Reference

### Patients
- `GET /api/patients` - List all patients
- `POST /api/patients` - Register new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient
- `POST /api/patients/login` - Patient login

### Doctors
- `GET /api/doctors` - List all doctors (auto-initialized)

### Appointments
- `GET /api/appointments` - List all appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment status

### Bed Allocations
- `GET /api/beds` - List all bed allocations
- `POST /api/beds` - Allocate bed
- `PUT /api/beds/:id` - Update allocation (discharge)
- `POST /api/beds/:id/visits` - Add doctor visit

## 🎯 Next Steps After Setup

1. **Update Frontend Components**
   - Replace localStorage calls with API calls
   - Use `src/data/api.ts` service layer
   - Add loading states and error handling

2. **Add Authentication**
   - Implement JWT tokens
   - Add protected routes
   - Store auth token in localStorage/cookies

3. **Enhance Features**
   - Real-time updates with WebSockets
   - File uploads for patient documents
   - Email notifications
   - Advanced search and filtering

4. **Deploy**
   - Backend: Heroku, Railway, or AWS
   - Frontend: Vercel, Netlify, or AWS S3
   - Database: MongoDB Atlas (already cloud-based)

## 📞 Support

If you encounter issues:
1. Check this checklist first
2. Review BACKEND_SETUP.md
3. Verify all environment variables
4. Check terminal logs for errors
5. Test API endpoints with Postman/Thunder Client

## ✨ Success Criteria

You'll know everything is working when:
- ✅ Backend starts without errors
- ✅ MongoDB connection successful
- ✅ Frontend can register/login patients
- ✅ Data persists after page refresh
- ✅ All CRUD operations work
- ✅ No CORS errors in browser console
