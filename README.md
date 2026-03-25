# 🏡 StayScape

A full-stack accommodation booking platform that allows users to explore, list, and book properties seamlessly. Built using the MERN stack with a focus on scalable backend architecture and clean UI.

---

## 🚀 Features

* 🏠 Browse and explore property listings
* ➕ Add and manage property listings
* 🔐 User authentication and authorization
* 📅 Booking management system
* 🖼️ Image upload and storage using Cloudinary
* 📱 Responsive UI with Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Cloud & Deployment

* Render (Backend deployment)
* Cloudinary (Image storage & optimization)

---

## 🧱 Architecture

The application follows the **MVC (Model-View-Controller)** architecture:

* **Model:** Handles database schemas and data logic (MongoDB + Mongoose)
* **View:** Frontend UI built using HTML, CSS, Bootstrap
* **Controller:** Manages application logic, routes, and request handling

---

## 📂 Project Structure

```
StayScape/
│
├── models/         # Mongoose schemas
├── controllers/    # Business logic
├── routes/         # API routes
├── views/          # Frontend templates (if used)
├── public/         # Static assets (CSS, JS, images)
├── config/         # DB and Cloudinary config
└── app.js          # Entry point
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
[git clone https://github.com/a/StayScape.git](https://github.com/abhinavNarvekar/StayScape.git)
cd StayScape
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_secret
```

### 4. Run the application

```bash
npm start
```

---

## 🌐 Deployment

The backend is deployed on **Render**.
You can access the live project here:
👉 *[(https://stayscape-wgig.onrender.com/listings)]*

---

## 📸 Screenshots

<img width="2876" height="1622" alt="image" src="https://github.com/user-attachments/assets/51138a8f-e624-4942-b201-754cfc2e0728" />
<img width="2872" height="1656" alt="image" src="https://github.com/user-attachments/assets/850ddce6-ade2-4eaa-81f6-4d46e24cd212" />
<img width="2880" height="1532" alt="image" src="https://github.com/user-attachments/assets/38d119fb-deef-4f50-8f0a-c57431083beb" />



---

## 🔮 Future Improvements

* 💳 Integrate real payment gateway
* ⭐ Add reviews and ratings system
* 🔍 Advanced search & filtering
* 📍 Map integration for property locations

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📬 Contact

**Abhinav Narvekar**
📧 [abhinavnarvekar577@gmail.com](mailto:abhinavnarvekar577@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/abhinav-narvekar-441b012b0)

---

⭐ If you found this project helpful, consider giving it a star!
