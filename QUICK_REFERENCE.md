# Quick Reference Card

## 🚀 Quick Start Commands

### First Time Setup
```bash
# Run automated setup
setup-backend.bat

# OR Manual setup:
cd server
npm install
cd ..
npm install
```

### Daily Development

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## 🔑 Environment Variables

### server/.env
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hospital-db
PORT=5000
NODE_ENV=development
```

### .env (root)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🌐 Important URLs

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000
- **Health Check:** http://localhost:5000/health
- **MongoDB Atlas:** https://cloud.mongodb.com

## 📡 API Quick Reference

```javascript
// Patient Operations
GET    /api/patients           // List all
POST   /api/patients           // Create
PUT    /api/patients/:id       // Update
DELETE /api/patients/:id       // Delete
POST   /api/patients/login     // Login

// Doctor Operations
GET    /api/doctors            // List all

// Appointment Operations
GET    /api/appointments       // List all
POST   /api/appointments       // Create
PUT    /api/appointments/:id   // Update

// Bed Operations
GET    /api/beds               // List all
POST   /api/beds               // Allocate
PUT    /api/beds/:id           // Update
POST   /api/beds/:id/visits    // Add visit
```

## 🔧 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Port in use | Change PORT in server/.env |
| MongoDB connection failed | Check connection string & IP whitelist |
| CORS error | Verify API_URL in frontend .env |
| Module not found | Run npm install in both folders |

## 📦 Project Structure

```
project/
├── server/              # Backend
│   ├── src/
│   │   ├── config/     # DB config
│   │   ├── models/     # Schemas
│   │   ├── routes/     # API routes
│   │   ├── controllers/# Logic
│   │   └── server.js   # Entry
│   ├── .env           # Backend config
│   └── package.json
├── src/                # Frontend
│   ├── data/
│   │   ├── api.ts     # API layer
│   │   └── store.ts   # Old store
│   └── ...
└── .env               # Frontend config
```

## 🧪 Testing Commands

```bash
# Test backend health
curl http://localhost:5000/health

# Test get doctors
curl http://localhost:5000/api/doctors

# Test create patient (PowerShell)
Invoke-RestMethod -Uri http://localhost:5000/api/patients -Method POST -ContentType "application/json" -Body '{"firstName":"Test","lastName":"User","mobile":"1234567890","email":"test@test.com","username":"testuser","password":"test123"}'
```

## 📝 MongoDB Atlas Setup (5 steps)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up → Create free cluster
3. Create database user (username + password)
4. Whitelist IP (0.0.0.0/0 for development)
5. Get connection string → Replace password

## 🔐 Security Checklist

- [ ] Never commit .env files
- [ ] Use strong MongoDB passwords
- [ ] Whitelist specific IPs in production
- [ ] Enable MongoDB authentication
- [ ] Use HTTPS in production
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Sanitize user inputs

## 📚 Useful Resources

- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)
- [REST API Best Practices](https://restfulapi.net/)

## 💡 Pro Tips

1. **Use MongoDB Compass** for visual database management
2. **Install Thunder Client** (VS Code extension) for API testing
3. **Enable auto-save** in your editor
4. **Use nodemon** for auto-restart (already configured)
5. **Check logs** when something breaks
6. **Test API endpoints** before frontend integration

## 🎯 Success Indicators

✅ Backend console shows "MongoDB Connected Successfully"
✅ Frontend can register and login users
✅ Data persists after browser refresh
✅ No errors in browser console
✅ Health endpoint returns OK status

---

**Need detailed help?** See BACKEND_SETUP.md or BACKEND_CHECKLIST.md
