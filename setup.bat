@echo off
REM Script para Windows - Instalar dependencias y ejecutar OHV Honda App

echo 🚀 Iniciando configuración de OHV Honda App
echo ===========================================

REM Verificar si Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js no está instalado. Por favor instálalo desde https://nodejs.org
    exit /b 1
)

echo ✅ Node.js detectado:
node --version
echo ✅ NPM detectado:
npm --version

REM Backend setup
echo.
echo 📦 Configurando Backend...
cd backend
call npm install
cd ..

REM Frontend setup
echo.
echo 📦 Configurando Frontend...
cd frontend
call npm install
cd ..

echo.
echo ✅ Instalación completa!
echo.
echo Para iniciar la aplicación:
echo 1. Terminal 1: cd backend ^&^& npm run dev
echo 2. Terminal 2: cd frontend ^&^& npm run dev
echo.
echo La aplicación se abrirá en http://localhost:3000

pause
