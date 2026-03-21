// Migration utility to transfer localStorage data to MongoDB backend
// Run this in browser console after backend is running

const API_URL = 'http://localhost:5000/api';

async function migrateLocalStorageToMongoDB() {
  console.log('🔄 Starting migration from localStorage to MongoDB...');
  
  try {
    // Get data from localStorage
    const patients = JSON.parse(localStorage.getItem('hospital_patients') || '[]');
    const appointments = JSON.parse(localStorage.getItem('hospital_appointments') || '[]');
    const beds = JSON.parse(localStorage.getItem('hospital_beds') || '[]');
    
    console.log(`Found ${patients.length} patients, ${appointments.length} appointments, ${beds.length} bed allocations`);
    
    // Migrate patients
    const patientIdMap = new Map();
    for (const patient of patients) {
      const response = await fetch(`${API_URL}/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patient)
      });
      const newPatient = await response.json();
      patientIdMap.set(patient.id, newPatient._id);
      console.log(`✓ Migrated patient: ${patient.firstName} ${patient.lastName}`);
    }
    
    // Migrate appointments (update patient IDs)
    for (const appointment of appointments) {
      const newAppointment = {
        ...appointment,
        patientId: patientIdMap.get(appointment.patientId)
      };
      await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAppointment)
      });
      console.log(`✓ Migrated appointment for patient ID: ${appointment.patientId}`);
    }
    
    // Migrate bed allocations (update patient IDs)
    for (const bed of beds) {
      const newBed = {
        ...bed,
        patientId: patientIdMap.get(bed.patientId)
      };
      await fetch(`${API_URL}/beds`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBed)
      });
      console.log(`✓ Migrated bed allocation for patient ID: ${bed.patientId}`);
    }
    
    console.log('✅ Migration completed successfully!');
    console.log('You can now clear localStorage if desired.');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

// Run migration
migrateLocalStorageToMongoDB();
