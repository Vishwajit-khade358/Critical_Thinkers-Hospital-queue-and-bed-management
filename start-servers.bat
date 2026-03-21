@echo off
echo ========================================
echo Starting Hospital Management System
echo ========================================
echo.
echo Starting Backend Server...
echo.
start cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak > nul
echo.
echo Starting Frontend Server...
echo.
start cmd /k "npm run dev"
echo.
echo ========================================
echo Both servers are starting!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo Health Check: http://localhost:5000/health
echo.
echo Press any key to exit this window...
pause > nul
