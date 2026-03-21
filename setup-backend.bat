@echo off
echo ========================================
echo Hospital Management System - Backend Setup
echo ========================================
echo.

echo Step 1: Installing Backend Dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed
echo.

echo Step 2: Checking for .env file...
if not exist .env (
    echo WARNING: .env file not found!
    echo Please create server\.env file with your MongoDB connection string
    echo Example:
    echo MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hospital-db
    echo PORT=5000
    echo NODE_ENV=development
    echo.
    pause
) else (
    echo ✓ .env file found
)
echo.

cd ..
echo Step 3: Installing Frontend Dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed
echo.

echo Step 4: Checking for frontend .env file...
if not exist .env (
    echo Creating frontend .env file...
    echo VITE_API_URL=http://localhost:5000/api > .env
    echo ✓ Frontend .env created
) else (
    echo ✓ Frontend .env file found
)
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Make sure you have created server\.env with MongoDB connection string
echo 2. Open TWO terminal windows:
echo    Terminal 1: cd server ^&^& npm run dev
echo    Terminal 2: npm run dev
echo.
echo Read BACKEND_SETUP.md for detailed instructions
echo.
pause
