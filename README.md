# EthioVerifyPay — Payment Verification API 🛡️

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-brightgreen.svg)](https://www.mongodb.com/atlas)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**EthioVerifyPay** is a backend API designed to improve payment verification, reduce transaction errors, and help prevent merchant impersonation within Ethiopia's mobile money ecosystem, particularly for Telebirr and CBE Birr.

## 🎯 The Problem

As mobile money adoption grows in Ethiopia, peer-to-merchant transactions face several challenges:

- **Manual Entry Errors:** Customers may enter incorrect phone numbers, shortcodes, or payment amounts when using USSD menus, potentially resulting in misdirected transfers and complicated reversals.
- **Merchant Impersonation:** Fraudsters may use fake merchant names or counterfeit QR codes to redirect customer payments.
- **Limited Verification:** Customers need a reliable way to verify payment details before proceeding with a transaction.

## 💡 The Solution

EthioVerifyPay introduces a verification layer between customer checkout systems and merchant payment instructions.

### Key Features

- **USSD Deep-Link Generation:** Generates pre-filled, URL-encoded USSD instructions, helping reduce manual entry errors during payment.
- **Token-Based Verification:** Generates unique, short-lived verification tokens associated with individual payment requests.
- **Merchant Validation:** Validates merchant identifiers and payment amounts before generating payment instructions.
- **Lightweight API Responses:** Uses compact JSON responses to support efficient communication on low-bandwidth mobile networks.
- **Centralized Error Handling:** Provides consistent JSON error responses for invalid inputs and server-side failures.
- **Environment-Based Configuration:** Keeps database credentials and other sensitive configuration values outside the source code.

## 🏗️ Architecture & Payment Flow

The following diagram illustrates the intended payment verification workflow.

```text
┌──────────────────────────┐
│     Customer / Client    │
└────────────┬─────────────┘
             │
             │ 1. Initiate checkout
             ▼
┌──────────────────────────┐
│   EthioVerifyPay API     │
│                          │
│ • Validate request       │
│ • Verify merchant data   │
│ • Generate token         │
│ • Build USSD deep-link   │
└────────────┬─────────────┘
             │
             │ 2. Return token and
             │    payment instructions
             ▼
┌──────────────────────────┐
│   Customer Mobile Dialer │
└────────────┬─────────────┘
             │
             │ 3. Review and confirm
             │    payment instructions
             ▼
┌──────────────────────────┐
│  Telebirr / CBE Birr     │
│  Payment Interface       │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│   Merchant Receives      │
│   Payment                │
└──────────────────────────┘
```

> **Important:** Generating a verification token or USSD deep-link does not itself confirm that a payment has been completed. Actual payment confirmation requires a trusted payment-provider response or another reliable transaction verification mechanism.

## ⚙️ Technical Highlights

- **Secure Configuration:** Uses `dotenv` to load environment variables, including database connection strings and application settings.
- **CORS Configuration:** Restricts cross-origin requests to configured frontend origins.
- **Centralized Error Handling:** Handles malformed requests, invalid identifiers, and database errors through consistent Express middleware.
- **Deployment:** Hosted on Render, with keep-alive logic intended to reduce idle-related delays where applicable.

## 🧰 Tech Stack

| Component | Technology |
|---|---|
| Runtime | Node.js 18+ |
| Backend Framework | Express.js 4.x |
| Database | MongoDB Atlas |
| Object Data Modeling | Mongoose |
| Configuration | dotenv |
| Cross-Origin Requests | CORS |
| Hosting | Render |

## 🚀 Getting Started

Follow these steps to run EthioVerifyPay locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js 18 or higher](https://nodejs.org/)
- npm (included with Node.js)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) connection string or a local MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Ekram2004/payment-verify-backend.git
cd payment-verify-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

**Security note:** Never commit your `.env` file or expose database credentials in your repository.

### 4. Start the Server

Run the development server:

```bash
npm run dev
```

Or start the application in production mode:

```bash
npm start
```

The API should be available at:

```text
http://localhost:5000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Checks the API's health status |
| `POST` | `/api/verify/generate` | Generates a merchant payment verification token and USSD link |
| `GET` | `/api/verify/:token` | Validates a token and retrieves its associated session details |

### Example Request

Generate a payment verification token by sending a `POST` request to:

```text
/api/verify/generate
```

Use the request body and required fields defined by the API implementation.

For testing, you can use tools such as [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## 🔐 Security Considerations

- Store sensitive credentials in environment variables.
- Validate and sanitize incoming request data.
- Use sufficiently unpredictable, short-lived verification tokens.
- Apply appropriate rate limits to sensitive endpoints.
- Validate payment completion through a trusted provider integration before marking an invoice as paid.
- Configure CORS to allow only the frontend origins that require access.
- Never treat a generated USSD link or verification token as proof of a completed transaction.

## 👤 Author

**Ekram Asrar**

Final-Year Software Engineering Student | Haramaya University

- **GitHub:** [Ekram2004](https://github.com/Ekram2004)
- **LinkedIn:** [LinkedIn Profile](https://linkedin.com)
- **Email:** [ekramasrar94@gmail.com](mailto:ekramasrar94@gmail.com)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
