# 🏥 Hospital Management System - Quick Start

## ✅ What's Implemented

### Patient Side:
- ✅ Registration & Login
- ✅ Book Appointments 
- ✅ View Personal Profile
- ✅ See All Bookings
- ✅ Patient Card View
- ✅ Ward-specific Pricing Visibility
- ✅ Edit username/password and contact info from Patient Card
- ✅ Delete account from Patient Card

### Authority Side:
- ✅ Authority Dashboard (NEW)
  - View ALL registered patients
  - View ALL appointments with full patient details
  - Search & filter patients
  - Filter appointments by status
  - Real-time statistics
- ✅ Bed Allocation with Pricing
  - General Ward: ₹700/day
  - Private Ward: ₹1500/day
  - ICU: ₹2200/day
- ✅ Doctor Visit Tracking
- ✅ Appointment Management
- ✅ Ability to mark scheduled appointments complete (completed entries saved permanently)
- ✅ Appointment automatically completes when a bed is discharged

---

## 🚀 GET STARTED IN 3 STEPS

### Step 1️⃣: Start the Server
```bash
npm run dev
```

### Step 2️⃣: Create a Patient Account
- Click "Login / Register"
- Fill registration form
- Book an appointment

### Step 3️⃣: View as Authority
- Logout
- Login as Authority:
  - Username: `admin`
  - Password: `hospital@2024`
- Click "Dashboard" to see all patients & appointments

---

## 📊 Authority Dashboard Features

Your authority dashboard now includes:

1. **Statistics Cards**
   - Total Appointments
   - Scheduled Count
   - Completed Count
   - Cancelled Count

2. **Search Bar**
   - Find by patient name
   - Find by phone number
   - Find by email

3. **Appointments Tab**
   - See all appointments
   - Filter by status (All, Scheduled, Completed, Cancelled)
   - Full patient information displayed
   - Doctor details
   - Booking date/time

4. **Patients Tab**
   - All registered patients list
   - Patient contact info
   - Their appointment history
   - Appointment status indicators

---

## 💡 How It Works

### Data Flow:
```
Patient Registration
        ↓
Patient Stored in LocalStorage
        ↓
Patient Books Appointment
        ↓
Appointment Stored in LocalStorage
        ↓
Authority Logs In
        ↓
Authority Sees All Patients & Appointments
        ↓
Authority Can Allocate Beds with Pricing
```

### Data Storage:
- Uses browser **localStorage** (no server needed)
- Automatically syncs across all pages
- Data persists after browser closes
- Can be cleared by developer (F12 → Console → localStorage.clear())

---

## 🔐 Default Credentials

### Authority Login:
```
Username: admin
Password: hospital@2024
```

### Test Patient:
You can create any patient with these fields:
- First Name, Middle Name, Last Name
- Phone Number
- Email
- Address
- Username (must be unique)
- Password

---

## 📱 Test the Complete Workflow

### Test Case 1: Patient Books Appointment
```
1. Go to http://localhost:5173
2. Click "Login / Register" → "Register as Patient"
3. Fill in details:
   - Name: John Kumar Doe
   - Phone: 9876543210
   - Email: john@hospital.com
   - Username: john_doe
   - Password: pass123
4. Click Register
5. Click "Book Appointment"
6. Select Doctor → Date → Time → Book
7. Go to "My Profile" to see your appointment
```

### Test Case 2: Authority Views Patient
```
1. Click Logout
2. Click "Login / Register" → "Login as Authority"
3. Username: admin
4. Password: hospital@2024
5. Click "Dashboard"
6. You'll see the patient "John Kumar Doe" in the list
7. See their appointment details
8. Filter by status or search
```

### Test Case 3: Bed Allocation with Pricing
```
1. Still logged in as authority
2. Click "Bed Allocation" from home
3. Select patient from dropdown
4. Enter Room Number: 101
5. Enter Bed Number: A
6. Select Ward Type (General: ₹700, Private: ₹1500, ICU: ₹2200)
7. Click "Allocate Bed"
8. See pricing displayed immediately
```

---

## 🎯 Key Features Explained

### Authority Dashboard:
- **Centralized View**: See everything in one place
- **Patient Information**: Name, phone, email, address
- **Appointment Details**: Doctor, date, time, status
- **Search Functionality**: Find patients quickly
- **Status Filtering**: View specific appointment statuses
- **Real-time Stats**: Up-to-date appointment counts

### Patient Profile:
- **Personal Information**: All registration details
- **Appointment History**: All past and future bookings
- **Quick Actions**: Easy navigation to other features
- **Booking Badges**: Visual status indicators

### Bed Allocation:
- **Ward Type Selection**: Choose appropriate ward
- **Automatic Pricing**: Shows cost per type
- **Patient Mapping**: Allocate beds to registered patients
- **Active View**: See all current bed allocations

---

## 🛠️ API Endpoints (LocalStorage Keys)

All data is stored in localStorage with these keys:

| Key | Contains |
|-----|----------|
| `hospital_auth` | Current user login session |
| `hospital_patients` | All registered patients |
| `hospital_appointments` | All appointment bookings |
| `hospital_beds` | All bed allocations |
| `hospital_doctors` | Default doctor list |

---

## 🎨 Customization Options

### Change Authority Password:
File: `src/contexts/AuthContext.tsx`
```typescript
const AUTHORITY_PASSWORD = 'hospital@2024'; // Change this
```

### Change Bed Pricing:
File: `src/pages/BedAllocationPage.tsx`
```typescript
const wardPrices = {
  general: 700,      // Change to desired price
  private: 1500,     // Change to desired price
  icu: 2200,         // Change to desired price
};
```

### Add More Doctors:
File: `src/data/store.ts` - `initializeDoctors()` function

---

## ❓ FAQ

**Q: Where is the data stored?**
A: In your browser's localStorage. No server needed!

**Q: Can multiple people use this?**
A: Yes! Each person on the same browser. Data is device-specific.

**Q: What if I clear browser data?**
A: All data will be deleted. You'll need to register again.

**Q: Can I export the data?**
A: Yes, via developer console (F12 → localStorage keys)

**Q: How do I reset everything?**
A: F12 → Console → `localStorage.clear()`

---

## 🎓 Learning Resources

- Patient Registration flow in `src/components/AuthModal.tsx`
- Authority Dashboard in `src/pages/AuthorityDashboard.tsx`
- Data store logic in `src/data/store.ts`
- Auth context in `src/contexts/AuthContext.tsx`

---

## 🎉 You're All Set!

The system is ready to use. Just run `npm run dev` and start testing!

For detailed docs, see **SETUP_GUIDE.md**
