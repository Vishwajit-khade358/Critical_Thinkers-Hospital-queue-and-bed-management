# 🎨 UI/UX Visual Guide

## Authority Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Home              Authority Dashboard          Clock   │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────────┐
│ Total Appts  │  Scheduled   │ Completed    │  Cancelled       │
│      5       │      3       │      1       │        1         │
└──────────────┴──────────────┴──────────────┴──────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ 🔍 Search by patient name, phone, or email...                   │
└──────────────────────────────────────────────────────────────────┘

┌─────────────┬────────────────────────────────────────────────────┐
│ Appointments│ Patients (5)                                       │
└─────────────┴────────────────────────────────────────────────────┘

[All] [Scheduled] [Completed] [Cancelled]

┌─────────────────────────────────────────────────────────────────┐
│ PATIENT: John Kumar Doe        STATUS: Scheduled               │
│ 📱 Phone: 9876543210                                            │
│ 📧 Email: john@test.com                                         │
│ 📍 Address: 123 Main Street                                     │
│                                                                  │
│ Doctor: Dr. Rajesh Kumar                                        │
│ Date & Time: 28-Feb-2024 at 10:00 AM                           │
│ Status: Scheduled                                               │
│ Booked on: 26-Feb-2024 10:30:00 AM                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ PATIENT: Priya Sharma          STATUS: Completed               │
│ 📱 Phone: 9876543211                                            │
│ 📧 Email: priya@test.com                                        │
│ 📍 Address: 456 Oak Street                                      │
│                                                                  │
│ Doctor: Dr. Priya Sharma                                        │
│ Date & Time: 25-Feb-2024 at 02:00 PM                           │
│ Status: Completed                                               │
│ Booked on: 20-Feb-2024 09:00:00 AM                             │
└─────────────────────────────────────────────────────────────────┘
```

---

## Patient Profile Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Home              My Profile                 Clock    │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────────────────────────────┐
│                  │  │ My Appointments                           │
│      👤          │  │ [Book Appointment Button]                │
│   Profile Box    │  │                                          │
│                  │  │ ┌──────────────────────────────────────┐ │
│ John Kumar Doe   │  │ │ Dr. Rajesh Kumar       Scheduled     │ │
│ john_doe         │  │ │ 📅 28-Feb-2024         ┌──────────┐  │ │
│                  │  │ │ 🕐 10:00 AM            │Scheduled │  │ │
│ 📱 9876543210    │  │ │ Booked on: 26-Feb...   └──────────┘  │ │
│ 📧 john@test.com │  │ └──────────────────────────────────────┘ │
│ 📍 123 Main St   │  │                                          │
│ 📅 26-Feb-2024   │  │ [Quick Action Buttons]                  │
│                  │  │ ┌──────────────┐  ┌──────────────┐     │
│ [Edit Profile]   │  │ │ 🛏️ Bed Alloc │  │ 👨‍⚕️ Dr Visits │     │
│ [Logout]         │  │ └──────────────┘  └──────────────┘     │
│                  │  │                                          │
└──────────────────┘  └──────────────────────────────────────────┘
```

---

## Bed Allocation Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back             Bed Allocation              Clock            │
└─────────────────────────────────────────────────────────────────┘

┌────────────────────────┐  ┌─────────────────────────────────────┐
│ 🛏️ Allocate Bed        │  │ Active Bed Allocations              │
│                        │  │                                     │
│ Select Patient:        │  │ ┌─────────────────────────────────┐ │
│  ┌──────────────────┐  │  │ │ John Kumar Doe                  │ │
│  │Choose patient..▼ │  │  │ │ Room 101, Bed A                 │ │
│  └──────────────────┘  │  │ │ GENERAL - ₹700/day             │ │
│                        │  │ │ Since: 26-Feb-2024 10:30 AM     │ │
│ Room Number:           │  │ │ Doctor Visits: 1                │ │
│  ┌──────────────────┐  │  │ │          [Discharge]           │ │
│  │e.g. 101         │  │  │ │ Room 101         Bed A         │ │
│  └──────────────────┘  │  │ └─────────────────────────────────┘ │
│                        │  │                                     │
│ Bed Number:            │  │ ┌─────────────────────────────────┐ │
│  ┌──────────────────┐  │  │ │ Priya Sharma                    │ │
│  │e.g. A           │  │  │ │ Room 102, Bed B                 │ │
│  └──────────────────┘  │  │ │ PRIVATE - ₹1500/day            │ │
│                        │  │ │ Since: 25-Feb-2024 03:00 PM     │ │
│ Ward Type:             │  │ │ Doctor Visits: 3                │ │
│  ┌──────────────────┐  │  │ │          [Discharge]           │ │
│  │General Ward - ₹700▼│ │  │ │ Room 102         Bed B         │ │
│  │Private Ward - ₹1500│ │  │ └─────────────────────────────────┘ │
│  │ICU - ₹2200       │ │  │                                     │
│  └──────────────────┘  │  │ ┌─────────────────────────────────┐ │
│                        │  │ │ Amit Patel                      │ │
│  [Allocate Bed]        │  │ │ Room 201, Bed C                 │ │
│                        │  │ │ ICU - ₹2200/day                │ │
│                        │  │ │ Since: 24-Feb-2024 02:15 PM     │ │
│                        │  │ │ Doctor Visits: 5                │ │
│                        │  │ │          [Discharge]           │ │
│                        │  │ └─────────────────────────────────┘ │
└────────────────────────┘  └─────────────────────────────────────┘
```

---

## Home Page - Patient View

```
┌──────────────────────────────────────────────────────────────┐
│  ❤️ CareWell Hospital        Clock  [Logout]                │
│  Your Health, Our Priority                                   │
└──────────────────────────────────────────────────────────────┘

Compassionate Care, Modern Medicine
Advanced hospital management system ensuring quality care

┌────────────────┬────────────────┬────────────────┐
│      📅        │      👤        │      🛏️        │
│                │                │                │
│ Book           │ My Profile     │ My Card        │
│ Appointment    │                │                │
│                │ View profile   │ See medical    │
│ Schedule with  │ & appointment  │ record         │
│ specialist     │ details        │                │
│ doctors        │                │                │
└────────────────┴────────────────┴────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ About Our Hospital                                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ 🏥 50+ Beds              👨‍⚕️ 15+ Doctors      🚑 24/7 Emergency │
│ Fully equipped          Experienced       Round-the-clock   │
│ rooms with modern       specialists       services & ICU    │
│ infrastructure          across            care              │
│                         departments                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Home Page - Authority View

```
┌──────────────────────────────────────────────────────────────┐
│  ❤️ CareWell Hospital        Clock  [Logout]                │
│  Your Health, Our Priority                                   │
└──────────────────────────────────────────────────────────────┘

Compassionate Care, Modern Medicine
Advanced hospital management system ensuring quality care

┌─────────────────┬──────────────────┬──────────────┬──────────┐
│     📋          │      🛏️           │     👨‍⚕️       │    📅    │
│                 │                  │              │          │
│ Dashboard       │ Bed Allocation   │ Doctor       │ Manage   │
│                 │                  │ Visits       │ Appts    │
│ View all        │ Manage rooms     │              │          │
│ patients &      │ and beds         │ Track        │ Review   │
│ appointments    │                  │ doctor       │ booked   │
│                 │                  │ visits       │ appts    │
└─────────────────┴──────────────────┴──────────────┴──────────┘

┌──────────────────────────────────────────────────────────────┐
│ About Our Hospital                                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ 🏥 50+ Beds              👨‍⚕️ 15+ Doctors      🚑 24/7 Emergency │
│ Fully equipped          Experienced       Round-the-clock   │
│ rooms with modern       specialists       services & ICU    │
│ infrastructure          across            care              │
│                         departments                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Login/Register Modal

```
┌─────────────────────────────────────────┐
│ 🏥 CareWell Hospital                    │
│                                         │
│ [Register] [Login Patient] [Auth Login] │
│                                         │
│ ┌───────────────────────────────────┐  │
│ │ REGISTER AS PATIENT               │  │
│ ├───────────────────────────────────┤  │
│ │ First Name: [____________________]│  │
│ │ Middle Name: [___________________]│  │
│ │ Last Name: [____________________]│  │
│ │ Phone: [________________________]│  │
│ │ Email: [________________________]│  │
│ │ Address: [______________________]│  │
│ │ Username: [_____________________]│  │
│ │ Password: [_____________________]│  │
│ │                                  │  │
│ │ [Register Patient]              │  │
│ │ Already registered? Login here  │  │
│ └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### OR

```
┌─────────────────────────────────────────┐
│ 🏥 CareWell Hospital                    │
│                                         │
│ [Register] [Login Patient] [Auth Login] │
│                                         │
│ ┌───────────────────────────────────┐  │
│ │ LOGIN AS AUTHORITY                │  │
│ ├───────────────────────────────────┤  │
│ │ Username: [_____________________]│  │
│ │ Password: [_____________________]│  │
│ │                                  │  │
│ │ [Login as Authority]             │  │
│ │                                  │  │
│ │ Demo: admin / hospital@2024      │  │
│ └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## Appointment Booking Page

```
┌──────────────────────────────────────────────────────────────┐
│ ← Back Home                  Book Appointment    Clock       │
└──────────────────────────────────────────────────────────────┘

┌────────────────────────────┐  ┌─────────────────────────────┐
│ 📅 Book Appointment        │  │ Select Time Slots           │
│                            │  │                             │
│ Select Doctor:             │  │ Available times:            │
│ ┌──────────────────────┐   │  │ ┌─────────────────────────┐ │
│ │Dr. Rajesh Kumar▼     │   │  │ │ 09:00 AM  10:00 AM      │ │
│ │Dr. Priya Sharma      │   │  │ │ 10:30 AM  11:00 AM      │ │
│ │Dr. Amit Patel        │   │  │ │ 01:00 PM  02:00 PM      │ │
│ │Dr. Sunita Gupta      │   │  │ │ 02:30 PM  03:00 PM      │ │
│ │Dr. Vikram Singh      │   │  │ │ 04:00 PM  05:00 PM      │ │
│ └──────────────────────┘   │  │ └─────────────────────────┘ │
│                            │  │                             │
│ Select Date:               │  │ Selected:                   │
│ ┌──────────────────────┐   │  │ Dr. Rajesh Kumar            │
│ │ 28-Feb-2024      ◀▶ │   │  │ 28-Feb-2024 at 10:00 AM    │
│ └──────────────────────┘   │  │                             │
│                            │  │ [Book Appointment]          │
│                            │  │                             │
└────────────────────────────┘  └─────────────────────────────┘
```

---

## Authority Dashboard - Patients Tab

```
┌────────────────────────────────────────────────────────────┐
│ Appointments | Patients (5)                                │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ JOHN KUMAR DOE                                             │
│                                                            │
│ 📱 Phone: 9876543210      APPOINTMENTS (2):               │
│ 📧 Email: john@test.com   • Dr. Rajesh Kumar              │
│ 📍 Address: 123 Main St     28-Feb-2024, 10:00 AM        │
│ 👤 Username: john_teste    [Scheduled]                   │
│ 📅 Registered: 26-Feb-24   • Dr. Priya Sharma             │
│                            02-Mar-2024, 02:00 PM         │
│                            [Scheduled]                   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ PRIYA SHARMA                                               │
│                                                            │
│ 📱 Phone: 9876543211      APPOINTMENTS (1):               │
│ 📧 Email: priya@test.com  • Dr. Amit Patel               │
│ 📍 Address: 456 Oak Street 25-Feb-2024, 02:00 PM         │
│ 👤 Username: priya_patnt   [Completed]                   │
│ 📅 Registered: 24-Feb-24                                  │
│                                                            │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ AMIT PATEL                                                 │
│                                                            │
│ 📱 Phone: 9876543212      APPOINTMENTS (0):               │
│ 📧 Email: amit@test.com   No appointments booked          │
│ 📍 Address: 789 Pine Rd                                   │
│ 👤 Username: amit_patient                                 │
│ 📅 Registered: 22-Feb-24                                  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Color Scheme

```
PRIMARY: Blue (#0066CC)
Used for: Buttons, links, icons, headings

SECONDARY: Light Gray (#F5F5F5)
Used for: Backgrounds, cards, sections

DESTRUCTIVE (Red): #DC2626
Used for: Cancel, delete, discharge buttons

SUCCESS (Green): #10B981
Used for: Completed status

INFO (Blue): #3B82F6
Used for: Scheduled status

WARNING (Red): #EF4444
Used for: Cancelled status

TEXT: Dark Gray (#1F2937)
MUTED TEXT: Medium Gray (#6B7280)
BORDER: Light Gray (#E5E7EB)
```

---

## Responsive Breakpoints

```
Mobile (< 640px):
- Single column layout
- Full-width cards
- Stacked buttons

Tablet (640px - 1024px):
- 2 column layout
- Responsive grid
- Wrapped buttons

Desktop (> 1024px):
- Full multi-column layout
- Side-by-side dashboards
- Inline buttons
```

---

## Animations

```
Fade In: Page load
Slide Up: Card entrance
Hover: Button scale + shadow
Transition: Color changes
```

---

## Responsive Grid

```
Dashboard Cards:
- Desktop: 4 columns
- Tablet: 2 columns  
- Mobile: 1 column

Patient List:
- Desktop: 3 columns (left: basic, right: appointments)
- Tablet: 2 columns
- Mobile: 1 column (stacked)

Action Cards:
- Desktop: Full width
- Tablet: 2 per row
- Mobile: 1 per row
```

---

This is what users will see with your system! 🎨
