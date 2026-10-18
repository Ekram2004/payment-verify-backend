EthioVerifyPay - Payment Verification API 🛡️
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg) (https://nodejs.org/)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey.svg) (https://expressjs.com/)
![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-brightgreen.svg) (https://www.mongodb.com/atlas)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
A robust backend service designed to mitigate payment fraud, prevent spoofing, and eliminate manual entry errors within the Ethiopian merchant ecosystem (Telebirr & CBE Birr).
🎯 The Problem
In Ethiopia's rapidly expanding mobile money landscape, peer-to-merchant transactions face two persistent operational risks:
Manual Entry Errors: Customers entering incorrect phone numbers, shortcodes, or amounts into USSD menus, leading to misdirected transfers and tedious reversal processes.
Merchant Impersonation & Spoofing: Fraudulent actors displaying falsified merchant names or counterfeit QR codes to divert customer funds.
💡 The Solution
EthioVerifyPay serves as an intermediary verification layer that links customer checkouts directly to verified merchant identities:
Deep-Linked USSD Automation: Constructs pre-filled, URL-encoded USSD execution strings (e.g., *127*...%23 for Telebirr) that feed directly into mobile dialers, eliminating user typing mistakes entirely.
Tamper-Proof Session Tokens: Issues short-lived, unique verification tokens tied to individual invoices to verify merchant legitimacy before payment execution.
Low-Bandwidth Optimization: Designed with minimal JSON payloads to maintain sub-second response times on 3G cellular connections across Ethiopia.
🏗️ Architecture & Payment Flow
[Customer Mobile / Web]
         │
         ▼  (1) Initiate checkout request
[EthioVerifyPay API] ──► Validates Merchant ID & Amount in MongoDB
         │
         ▼  (2) Returns verified session token + encoded USSD deep-link
[Customer Phone Dialer]
         │
         ▼  (3) User confirms pre-populated prompt via Telebirr / CBE USSD
[Telecom / Bank Gateway] ──► Payment settles to verified merchant
⚙️ Technical Highlights
Secure Environment Architecture: Isolated configuration for MongoDB Atlas connection strings, JWT/token secrets, and environment parameters using dotenv.
CORS & Origin Hardening: Restricted Cross-Origin Resource Sharing (CORS) configured strictly for authenticated frontend origins.
Centralized Error Handling: Custom Express middleware intercepting database timeouts, invalid merchant UUIDs, and malformed inputs with uniform JSON error responses.
Deployment Reliability: Hosted on Render with keep-alive logic to mitigate cold-start latency.
📦 Tech Stack
Runtime: Node.js (v18+)
Framework: Express.js
Database & ODM: MongoDB Atlas / Mongoose
Security & Utilities: CORS, Dotenv, URL Encoding utilities
Hosting: Render
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
npm (v9 or higher)
A MongoDB Atlas connection string (or local MongoDB instance)
Installation
Clone the repository:
git clone https://github.com/Ekram2004/payment-verify-backend.git
cd payment-verify-backend
Install dependencies:
npm install
Configure Environment Variables:
Create a .env file in the root directory:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
Run the server:
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
The API will start listening on http://localhost:5000.
📡 Sample Endpoints
Method	Endpoint	Description
GET	/api/health	Service health check
POST	/api/verify/generate	Generates a verified merchant payment token & encoded USSD link
GET	/api/verify/:token	Validates active session details before user dials USSD
👤 Author
Ekram Asrar
Final-Year Software Engineering Student | Haramaya University
GitHub (https://github.com/Ekram2004)
LinkedIn (https://linkedin.com)
Email: ekramasrar94@gmail.com
