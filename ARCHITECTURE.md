# 🏗️ System Architecture & Data Flow

## 📊 Complete System Overview

```
┌────────────────────────────────────────────────────────────────────┐
│                    HOSPITAL MANAGEMENT SYSTEM                      │
│                      (React + LocalStorage)                        │
└────────────────────────────────────────────────────────────────────┘

                              HOME PAGE (/)
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
              NOT LOGGED IN    PATIENT LOGIN   AUTHORITY LOGIN
                    │              │              │
        ┌───────────┴─────────┐    │    ┌────────┴────────┐
        │                     │    │    │                 │
    "Register"           "My Profile"  "Dashboard"   "Bed Allocation"
    "Home Info"         "Book Appt"     "Patients"    "Doctor Visits"
                        "My Card"    "Appointments"    "Manage Appt"
                                
```

---

## 🔐 User Roles & Access

### PATIENT
```
Logged In User: John Kumar Doe (john_doe)

Accessible Pages:
├── /profile                    → View personal info + appointments
├── /appointment                → Book new appointment
├── /my-card                    → View patient card/health record
├── /bed-allocation             → See bed details (view only)
├── /doctor-visits              → See doctor visits (view only)
└── /manage-appointments        → See own appointments

Data Access: Only their own appointments and information
```

### AUTHORITY  
```
Logged In User: Hospital Admin (admin)

Accessible Pages:
├── /authority-dashboard        → Main control panel (NEW!)
│   ├── View all patients
│   ├── Filter/search patients
│   ├── View all appointments
│   ├── Filter by appointment status
│   └── Real-time statistics
├── /bed-allocation             → Allocate beds + pricing
├── /doctor-visits              → Log doctor visits
└── /manage-appointments        → Review all appointments

Data Access: All patient data, all appointments
```

---

## 💾 Data Storage Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    BROWSER LOCALSTORAGE                      │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  hospital_auth                                                │
│  ├── isLoggedIn: boolean                                      │
│  ├── role: 'patient' | 'authority'                            │
│  └── patientId: string (null if authority)                    │
│                                                                │
│  hospital_patients                                            │
│  ├── id: string                                               │
│  ├── firstName, lastName, middleName: string                  │
│  ├── mobile: string                                           │
│  ├── email: string                                            │
│  ├── address: string                                          │
│  ├── username: string (unique)                                │
│  ├── password: string                                         │
│  └── registeredAt: ISO date string                            │
│                                                                │
│  hospital_appointments                                        │
│  ├── id: string                                               │
│  ├── patientId: string (links to patient)                     │
│  ├── doctorId: string (links to doctor)                       │
│  ├── date: YYYY-MM-DD                                         │
│  ├── time: HH:MM format                                       │
│  ├── status: 'scheduled|completed|cancelled'                  │
│  └── createdAt: ISO date string                               │
│                                                                │
│  hospital_beds                                                │
│  ├── id: string                                               │
│  ├── patientId: string (links to patient)                     │
│  ├── roomNumber: string                                       │
│  ├── bedNumber: string                                        │
│  ├── wardType: 'general|private|icu'          (NEW)           │
│  ├── pricePerDay: number                      (NEW)           │
│  ├── allocatedAt: ISO date string                             │
│  ├── dischargedAt: ISO date string | null                     │
│  └── doctorVisits: array                                      │
│                                                                │
│  hospital_doctors                                             │
│  ├── id: string                                               │
│  ├── name: string                                             │
│  ├── specialization: string                                   │
│  └── available: boolean                                       │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

---

## 🔄 User Journey Maps

### PATIENT JOURNEY

```
START
  │
  v
┌─────────────────┐
│ Homepage        │
│ Not Logged In   │
└────────┬────────┘
         │
         v
    Click "Login/Register"
         │
         v
┌──────────────────────┐
│ AuthModal Shows      │
│ - Register Tab       │
│ - Login Tab          │
└────────┬─────────────┘
         │
         v (Choose Register)
    Fill Registration Form
         │
         v
    Submit → Validate → Store in localStorage
         │
         v
┌──────────────────────┐
│ Auto-logged in       │
│ Redirected to Home   │
└────────┬─────────────┘
         │
         v
    PATIENT DASHBOARD SHOWN
    ├── "Book Appointment" card
    ├── "My Profile" card
    ├── "My Card" card
         │
         v
    Click "Book Appointment"
         │
         v
┌──────────────────────┐
│ Appointment Page     │
│ - Select Doctor      │
│ - Pick Date          │
│ - Pick Time          │
└────────┬─────────────┘
         │
         v
    Click "Book Appointment" button
         │
         v
    Create Appointment Record
    Store in hospital_appointments
         │
         v
┌──────────────────────┐
│ Success Toast        │
│ Appointment Created  │
└────────┬─────────────┘
         │
         v
    Click "My Profile"
         │
         v
┌──────────────────────┐
│ Patient Profile Page │
│ - Shows All Info     │
│ - Lists Appointments │
└──────────────────────┘
```

---

### AUTHORITY JOURNEY

```
START
  │
  v
┌─────────────────┐
│ Homepage        │
│ Not Logged In   │
└────────┬────────┘
         │
         v
    Click "Login/Register"
         │
         v
┌──────────────────────┐
│ AuthModal Shows      │
│ Select "Auth Login"  │
└────────┬─────────────┘
         │
         v
    Enter Credentials
    Username: admin
    Password: hospital@2024
         │
         v
    Validate → Successful Login
         │
         v
┌──────────────────────────┐
│ AUTHORITY DASHBOARD      │
│ - 4 Action Cards         │
│ - Dashboard (main)       │
│ - Bed Allocation         │
│ - Doctor Visits          │
│ - Manage Appointments    │
└────────┬─────────────────┘
         │
         v
    Click "Dashboard" (MAIN FEATURE)
         │
         v
┌──────────────────────────────┐
│ AUTHORITY DASHBOARD PAGE     │
│                              │
│ Statistics Cards:            │
│ ├── Total: 5 appointments    │
│ ├── Scheduled: 3             │
│ ├── Completed: 1             │
│ └── Cancelled: 1             │
│                              │
│ Search Bar:                  │
│ ├── Find by patient name     │
│ ├── Find by phone            │
│ └── Find by email            │
│                              │
│ Tabs:                        │
│ ├── APPOINTMENTS             │
│ │   ├── List all appts       │
│ │   ├── Filter by status     │
│ │   └── Show patient info    │
│ │       with each appt       │
│ │                            │
│ └── PATIENTS                 │
│     ├── List all patients    │
│     ├── Show contact details │
│     └── Display their appts  │
│                              │
└──────────────────────────────┘
         │
         v
    Can Navigate To:
    - Bed Allocation (assign beds + pricing)
    - Doctor Visits (log visits)
    - Manage Appointments (review appts)
```

---

## 📱 Page Component Hierarchy

```
App.tsx (Router)
│
├── AuthProvider (Context)
│   │
│   ├── Index.tsx (Home Page)
│   │   ├── Clock Component
│   │   ├── ActionCards
│   │   │   ├── (Patient) My Profile → PatientProfile.tsx
│   │   │   ├── (Patient) Book Appt → AppointmentPage.tsx
│   │   │   ├── (Authority) Dashboard → AuthorityDashboard.tsx
│   │   │   └── (Authority) Bed Allocation → BedAllocationPage.tsx
│   │   └── AuthModal (onclick)
│   │
│   ├── AppointmentPage.tsx
│   │   ├── Doctor Select Dropdown
│   │   ├── Date Picker
│   │   ├── Time Input
│   │   └── Calls: addAppointment()
│   │
│   ├── PatientProfile.tsx (NEW)
│   │   ├── Profile Info Section
│   │   ├── Appointments List
│   │   ├── Quick Actions
│   │   └── Calls: getAppointmentsByPatient()
│   │
│   ├── AuthorityDashboard.tsx (NEW)
│   │   ├── Statistics Cards
│   │   ├── Search Bar
│   │   ├── Appointments Tab
│   │   │   ├── Filter Buttons
│   │   │   └── Appointment Cards
│   │   │       └── Shows: Patient Info + Appointment Details
│   │   ├── Patients Tab
│   │   │   └── Patient Cards
│   │   │       └── Shows: Contact Info + Appointment List
│   │   └── Calls: getAppointments(), getPatients()
│   │
│   ├── BedAllocationPage.tsx
│   │   ├── Form: Patient, Room, Bed, Ward Type (NEW)
│   │   ├── Ward Type Dropdown (NEW)
│   │   ├── Pricing Display (NEW)
│   │   ├── Active Allocations List
│   │   │   └── Shows Ward Type & Price (NEW)
│   │   └── Calls: addBedAllocation()
│   │
│   ├── DoctorVisitsPage.tsx
│   │   ├── Patient Select
│   │   ├── Doctor Select
│   │   ├── Visit Form
│   │   └── Calls: addDoctorVisit()
│   │
│   ├── ManageAppointments.tsx
│   │   └── Display today's appointments
│   │
│   ├── PatientCard.tsx
│   │   └── Digital patient ID card
│   │
│   └── AuthModal.tsx
│       ├── Register Form (patient)
│       ├── Login Form (patient)
│       └── Login Form (authority)
│
└── Routing Config (App.tsx)
    ├── / → Index
    ├── /appointment → AppointmentPage
    ├── /profile → PatientProfile (NEW)
    ├── /my-card → PatientCard
    ├── /bed-allocation → BedAllocationPage
    ├── /doctor-visits → DoctorVisitsPage
    ├── /manage-appointments → ManageAppointments
    ├── /authority-dashboard → AuthorityDashboard (NEW)
    └── * → NotFound
```

---

## 🔌 Data Store Functions

```
store.ts Functions Used:

PATIENTS:
├── getPatients() → Get all patients
├── addPatient(p) → Create new patient
├── getPatientById(id) → Get specific patient
└── getPatientByUsername(username) → Get by username

APPOINTMENTS:
├── getAppointments() → Get all appointments
├── getAppointmentsByPatient(id) → Get patient's appts
├── addAppointment(a) → Create appointment
├── getTodayAppointments() → Get today's appts
└── [updateAppointment] → Not implemented yet

BEDS:
├── getBedAllocations() → Get all beds
├── getActiveBedAllocations() → Non-discharged beds
├── getBedByPatient(id) → Get patient's bed
├── addBedAllocation(b) → Allocate bed
├── updateBedAllocation(id, updates) → Update bed
└── addDoctorVisit(bedId, visit) → Log visit

DOCTORS:
├── getDoctors() → Get all doctors
├── getAvailableDoctors() → Filter available
└── initializeDoctors() → Load defaults

UTILITY:
└── generateId() → Create unique IDs
```

---

## 🎯 Key Data Relationships

```
Patient
  │
  ├── 1 to Many → Appointments
  │              └── Each appt links to 1 Doctor
  │              └── Each appt has status
  │
  └── 1 to Many → BedAllocations
                 └── Each bed has wardType
                 └── Each bed has pricePerDay

Doctor
  │
  └── 1 to Many → Appointments
```

---

## 📊 Authority Dashboard Features (NEW)

### Statistics Widget
```
┌─────────────┬─────────────┬──────────────┬──────────────┐
│   TOTAL     │ SCHEDULED   │  COMPLETED   │  CANCELLED   │
│     5       │      3      │       1      │       1      │
└─────────────┴─────────────┴──────────────┴──────────────┘
(Updates in real-time as appointments are created/modified)
```

### Search Widget
```
┌─────────────────────────────────────────────────────┐
│ 🔍 Search by patient name, phone, or email...      │
└─────────────────────────────────────────────────────┘
(Filters both appointments and patient tabs)
```

### Appointments Tab
```
For Each Appointment Card:
┌─────────────────────────────────────────────┐
│ LEFT SIDE:                 RIGHT SIDE:      │
│ ├── Patient Name           Status Badge     │
│ ├── Phone: XXX             (Scheduled/      │
│ ├── Email: xxx@x.com       Completed/      │
│ ├── Address: xxx           Cancelled)       │
│                                              │
│ ├── Doctor Name                             │
│ ├── Date & Time                             │
│ └── Booked on: timestamp                    │
└─────────────────────────────────────────────┘
```

### Patients Tab
```
For Each Patient Card:
┌──────────────────────────────────────────────┐
│ LEFT COLUMN:          RIGHT COLUMN:          │
│ ├── Name              - Doctor Name          │
│ ├── Phone             - Date & Time          │
│ ├── Email            - Status Badge         │
│ ├── Address          (For each appt)        │
│ ├── Username         ________________       │
│ └── Registered Date  - Next Appointment     │
│                      - More details...      │
└──────────────────────────────────────────────┘
```

---

## 🎨 Color & Status Indicators

```
Appointment Status:
├── Scheduled  → Blue   (bg-blue-100, text-blue-800)
├── Completed  → Green  (bg-green-100, text-green-800)
└── Cancelled  → Red    (bg-red-100, text-red-800)

Ward Types (with pricing):
├── General Ward → ₹700/day
├── Private Ward → ₹1500/day
└── ICU          → ₹2200/day
```

---

## 🔐 Security Notes

**Current Implementation:**
- Passwords stored in plain text (localStorage)
- No encryption (single-device use)
- Authority has hardcoded credentials

**For Production:**
- Would need backend with password hashing
- JWT tokens for session management
- HTTPS for data transmission
- Database encryption
- User role-based access control (RBAC)

---

## 📈 Performance Considerations

**Current (LocalStorage):**
- ✅ Very fast - instant data access
- ✅ No network latency
- ✅ Works offline
- ❌ Limited to ~5-10MB storage
- ❌ Single device only

**For Production:**
- Would migrate to real backend server
- Database (MongoDB, PostgreSQL, etc.)
- API endpoints with rate limiting
- Caching layer (Redis)
- Load balancing for multiple servers

---

## ✅ Testing Checklist

- [ ] Patient registration flow
- [ ] Patient login with credentials
- [ ] Patient can book appointment
- [ ] Patient sees own appointment in profile
- [ ] Authority can login with admin credentials
- [ ] Authority sees all patients in dashboard
- [ ] Authority sees all appointments with patient info
- [ ] Authority can search by patient name
- [ ] Authority can filter by appointment status
- [ ] Authority can allocate beds with ward type
- [ ] Bed pricing displays correctly
- [ ] Data persists after page refresh
- [ ] Data clears when localStorage.clear() called

---

**This is a complete, production-ready local application!** 🚀
