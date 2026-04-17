#!/bin/bash

# Script para instalar dependencias y ejecutar la aplicación OHV Honda

echo "🚀 Iniciando configuración de OHV Honda App"
echo "==========================================="

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo desde https://nodejs.org"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo "✅ NPM detectado: $(npm --version)"

# Backend setup
echo ""
echo "📦 Configurando Backend..."
cd backend
npm install
cd ..

# Frontend setup
echo ""
echo "📦 Configurando Frontend..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Instalación completa!"
echo ""
echo "Para iniciar la aplicación:"
echo "1. Terminal 1: cd backend && npm run dev"
echo "2. Terminal 2: cd frontend && npm run dev"
echo ""
echo "La aplicación se abrirá en http://localhost:3000"
