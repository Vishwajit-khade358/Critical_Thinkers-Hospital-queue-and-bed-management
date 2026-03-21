# Hospital Management System - Complete Setup Guide

## 🎯 Overview

You now have a fully functional hospital management system with:
- ✅ Patient Registration & Login
- ✅ Patient Appointment Booking
- ✅ Authority Dashboard (view all patients and appointments)
- ✅ Patient Profile Dashboard
- ✅ Bed Allocation with Pricing
- ✅ Doctor Visits Tracking
- ✅ Local Storage Database (no backend servers required)

---

## 🚀 WHAT YOU NEED TO DO NOW

### **STEP 1: Start the Development Server**

Open your terminal and run:
```bash
npm run dev
# OR if using bun
bun run dev
```

The application will be available at `http://localhost:5173`

### **STEP 2: Test Patient Registration & Login**

1. Go to home page
2. Click **"Login / Register"**
3. Choose **"Register as Patient"**
4. Fill in the registration form:
   - First Name: `John`
   - Middle Name: `Kumar`
   - Last Name: `Doe`
   - Address: `123 Main St`
   - Mobile: `9876543210`
   - Email: `john@example.com`
   - Username: `john_patient`
   - Password: `123456`
5. Click **Register**
6. You'll be automatically logged in as a patient

### **STEP 3: Book an Appointment (Patient)**

1. After login, you'll see action cards on the home page
2. Click **"Book Appointment"**
3. Select a doctor from the dropdown
4. Choose a date and time
5. Click **"Book Appointment"**
6. Check **"My Profile"** to see your booked appointment

### **STEP 4: Login as Authority**

1. Click **Logout** button (top right)
2. Click **"Login / Register"** again
3. Choose **"Login as Authority"**
4. Use these credentials:
   - **Username:** `admin`
   - **Password:** `hospital@2024`
5. You'll be logged in as authority (hospital staff)

### **STEP 5: View Authority Dashboard**

1. After authority login, click **"Dashboard"** card
2. You'll see:
   - **📊 Stats:** Total appointments, scheduled, completed, cancelled
   - **🔍 Search:** Find patients by name, phone, or email
   - **📋 Appointments Tab:** All appointments with patient info
   - **👥 Patients Tab:** All registered patients and their appointments

---

## 📊 Key Features Explained

### **For Patients:**
- **My Profile:** View personal info, all appointments, quick actions
- **Book Appointment:** Schedule with doctors (date, time, doctor selection)
- **Patient Card:** Digital health record
- **Edit Account:** Users can change username/password and contact info from their patient card
- **Delete Account:** Patients may remove their account entirely from patient card
- **Bed Allocation:** View bed details with pricing per ward type

### **For Authority:**
- **Dashboard:** Central hub to view everything
- **Patient List:** All registered patients with contact info
- **Appointment Management:** See all scheduled/completed/cancelled appointments
- **Appointment Completion:** Authority can mark scheduled appointments complete; completed ones move out of scheduled list. When a bed allocation is discharged the linked appointment is automatically marked complete.
- **Bed Management:** Allocate beds with ward type pricing:
  - General Ward: ₹700/day
  - Private Ward: ₹1500/day
  - ICU: ₹2200/day
- **Doctor Visits:** Track visits to patient beds

---

## 💾 Data Storage (LocalStorage)

All data is automatically saved to your browser's localStorage:
- **Key:** `hospital_auth` - User login session
- **Key:** `hospital_patients` - All registered patients
- **Key:** `hospital_appointments` - All appointments
- **Key:** `hospital_beds` - Bed allocations
- **Key:** `hospital_doctors` - Doctor list

### To Clear All Data:
Open browser DevTools (F12) → Console → Run:
```javascript
localStorage.clear();
```

---

## 🔐 Authentication

### Authority Login (Hardcoded):
- Username: `admin`
- Password: `hospital@2024`

### Patient Login:
- Any registered patient can login with their credentials
- Each patient can only see their own appointment and profile

---

## 📱 Testing Workflow

### Test Case 1: Complete Patient Journey
1. Register as patient ✓
2. Book appointment ✓
3. View in "My Profile" ✓
4. Logout
5. Login as authority ✓
6. See patient in dashboard ✓
7. See appointment details ✓

### Test Case 2: Authority Management
1. Login as authority ✓
2. Go to Dashboard ✓
3. View all patients ✓
4. Filter appointments by status ✓
5. Allocate beds to patients ✓
6. Mark doctor visits ✓

---

## 🛠️ File Structure

```
src/
├── pages/
│   ├── Index.tsx                 # Home page
│   ├── AppointmentPage.tsx       # Patient books appointment
│   ├── PatientProfile.tsx        # Patient dashboard (NEW)
│   ├── PatientCard.tsx           # Patient health record
│   ├── BedAllocationPage.tsx     # Bed allocation with pricing
│   ├── DoctorVisitsPage.tsx      # Doctor visit tracking
│   ├── ManageAppointments.tsx    # Authority appt view
│   ├── AuthorityDashboard.tsx    # Main authority panel (NEW)
│   └── NotFound.tsx
├── components/
│   ├── AuthModal.tsx             # Login/Register modal
│   └── ui/                       # UI components
├── contexts/
│   └── AuthContext.tsx           # Auth state management
├── data/
│   └── store.ts                  # LocalStorage database
└── App.tsx                       # Routing setup
```

---

## 🔗 Routes Available

| Route | User Type | Purpose |
|-------|-----------|---------|
| `/` | Both | Home page |
| `/appointment` | Patient | Book appointment |
| `/profile` | Patient | View profile & appointments |
| `/my-card` | Patient | Patient card |
| `/bed-allocation` | Authority | Manage beds |
| `/doctor-visits` | Authority | Track doctor visits |
| `/manage-appointments` | Authority | View appointments |
| `/authority-dashboard` | Authority | Main dashboard (NEW) |

---

## ⚠️ Common Issues & Solutions

### Issue: Data not persisting
**Solution:** Check browser settings - localStorage must be enabled

### Issue: Can't login as authority
**Solution:** Use exact credentials:
- Username: `admin`
- Password: `hospital@2024`

### Issue: Patient doesn't appear in authority dashboard
**Solution:** Logout and login again to refresh the view

### Issue: Can't allocate bed without ward type
**Solution:** Select a ward type from dropdown (General, Private, or ICU)

---

## 🎨 Customization

### Change Authority Credentials:
Edit `src/contexts/AuthContext.tsx`:
```tsx
const AUTHORITY_USERNAME = 'admin';
const AUTHORITY_PASSWORD = 'hospital@2024';
```

### Change Bed Prices:
Edit `src/pages/BedAllocationPage.tsx`:
```tsx
const wardPrices = {
  general: 700,      // Change these values
  private: 1500,
  icu: 2200,
};
```

### Add More Default Doctors:
Edit `src/data/store.ts`:
```tsx
const doctors: Doctor[] = [
  { id: 'd1', name: 'Dr. Name', specialization: 'Department', available: true },
  // Add more...
];
```

---

## ✨ Advanced Features You Can Add Later

- Email notifications for appointments
- SMS alerts
- Payment integration
- Prescription management
- Medical history reports
- Bed availability calendar
- Multi-language support

---

## 📞 Quick Test Data

You can create multiple test patients to see the full functionality:

**Patient 1:**
- Name: John Kumar Doe
- Phone: 9876543210
- Email: john@example.com
- Username: john_patient
- Password: 123456

**Patient 2:**
- Name: Priya Sharma
- Phone: 9876543211
- Email: priya@example.com
- Username: priya_patient
- Password: 123456

**Patient 3:**
- Name: Amit Patel
- Phone: 9876543212
- Email: amit@example.com
- Username: amit_patient
- Password: 123456

---

## 🎯 Success Checklist

- [ ] Run `npm run dev` or `bun run dev`
- [ ] Register a patient
- [ ] Book an appointment as patient
- [ ] See appointment in patient profile
- [ ] Logout and login as authority (admin/hospital@2024)
- [ ] View patient in authority dashboard
- [ ] See appointment details with patient info
- [ ] Allocate a bed with ward type and pricing
- [ ] All data persists after page refresh

---

## 📝 Summary

You now have a **complete, working hospital management system** that:
1. ✅ Allows patients to register and book appointments
2. ✅ Stores all data in browser's localStorage
3. ✅ Provides authority dashboard to view all activities
4. ✅ Shows patient information with appointments
5. ✅ Includes pricing for bed allocation
6. ✅ Requires NO backend server - works entirely offline

**Everything is ready to use right now!** 🎉

---

**For questions or issues, check the code comments and error messages in your browser console.**
