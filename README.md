here is the Readme
EthioVerifyPay - Payment Verification API 🛡
A robust Node.js/Express backend designed to eliminate payment fraud and manual entry errors in the Ethiopian merchant ecosystem (Telebirr/CBE).
🚀 The Challenge
Merchants in Ethiopia frequently face:
Manual Entry Errors: Customers sending money to the wrong merchant account due to typos in USSD codes.
🛠 System Architecture
The API acts as a secure verification layer that:
Generates unique merchant verification codes to prevent spoofing.
Constructs URL-encoded USSD strings (e.g., *127*1*...%23) that interface directly with mobile dialers.
⚙️ Technical Highlights
Environment Management: Securely handles MongoDB Atlas connections and API keys via .env.
CORS Security: Configured to allow only trusted frontend origins, protecting the verification flow.
Error Handling: Centralized middleware to handle database connection failures and invalid merchant lookups.
📦 Tech Stack
Runtime: Node.js
Framework: Express.js
Database: MongoDB Atlas (Mongoose ODM)
Deployment: Render (with auto-sleep prevention logic)
🏗 Local Setup
git clone https://github.com/Ekram2004/payment-verify-backend
npm install
Create .env with MONGODB_URI and PORT.
npm start
Developed by Ekram Asrar- 4th Year Software Engineering Student
