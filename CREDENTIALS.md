# Hospital Management System - Credentials & Testing Guide

## ✅ SYSTEM STATUS
- Backend: Running on http://localhost:5000
- Frontend: Running on http://localhost:5173
- Database: MongoDB Atlas Connected
- All passwords: RESET and WORKING

## 🔐 LOGIN CREDENTIALS

### Patient Accounts (All Working)
| Username | Password | Name              |
|----------|----------|-------------------|
| a1       | a1       | Rohan Lahane      |
| a2       | a2       | Ratan Chavan      |
| a3       | a3       | Prathamesh Iche   |
| a4       | a4       | Sharad jaiswal    |

### Authority Account
| Username | Password      |
|----------|---------------|
| admin    | hospital@2024 |

## 🧪 TESTING SCRIPTS

### Check All Patients
```bash
cd server
node check-patients.js
```

### Test Login Flow
```bash
cd server
node test-login.js
```

### Reset All Passwords (if needed)
```bash
cd server
node reset-passwords.js
```

### Test All System Flows
```bash
cd server
node test-flows.js
```

## 🚀 STARTUP SEQUENCE

### Terminal 1 - Backend
```bash
cd server
npm run dev
```

### Terminal 2 - Frontend
```bash
npm run dev
```

## ✨ FEATURES BY ROLE

### Patient Access
- ✓ Book Appointment
- ✓ My Profile
- ✓ My Card
- ✓ View Appointments
- ✓ View Medical History

### Authority Access
- ✓ Dashboard (All Patients)
- ✓ Bed Allocation
- ✓ Doctor Visits
- ✓ Manage Appointments
- ✓ Patient Management

## ✅ NEW PATIENT REGISTRATION

**Status**: FULLY WORKING ✓

When new patients register:
1. Password is automatically hashed with bcrypt (10 rounds)
2. Patient can login immediately after registration
3. No manual password reset needed

**Test**: Run `node test-registration.js` in server directory

## 🔧 TROUBLESHOOTING

### Invalid Credentials Error (Existing Patients)
**Solution**: Run `node reset-passwords.js` in server directory

### Backend Not Responding
**Solution**: Restart backend with `npm run dev` in server directory

### Frontend API Errors
**Solution**: Verify `.env` file has `VITE_API_URL=http://localhost:5000/api`

### Database Connection Issues
**Solution**: Check `server/.env` has correct MONGODB_URI

## 📊 CURRENT DATA
- Patients: 4
- Doctors: 5
- Appointments: 1
- Bed Allocations: 1

## 🔄 DATA INTEGRITY
All appointments and bed allocations are properly linked to existing patients and doctors.
