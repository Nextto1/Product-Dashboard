# Product Dashboard

A React-based Product Management Dashboard for managing products with CRUD operations, search, filters, pagination, and toast notifications.

---

## 🚀 Setup Instructions

### **Clone the Repository**

```bash
git clone https://github.com/YourUsername/Product-Dashboard.git
cd Product-Dashboard
```

### **Install Dependencies**

```bash
npm install
```

### **Run the Development Server**

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── ProductList.jsx
│   ├── ProductModal.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── NotFound.jsx
├── hooks/
│   └── useFetch.js
├── App.jsx
├── index.css
└── index.js
```

---

## 📝 Assumptions and Decisions

- Using **Tailwind CSS** for quick styling and responsive design.
- Using **Axios** for API communication.
- Using **React Router** for navigation.
- Local storage used for persisting favorites for simplicity.
- Basic error handling for API calls.

---

## 🔀 Navigation Flow

- **Dashboard:** View all products, search, and filter.
- **Add Product:** Create a new product.
- **Edit Product:** Modify an existing product.
- **Delete Product:** Remove a product.
- **Favorites:** Mark and unmark products as favorites.
- **Product Details:** View full product information in a modal.

---

## 💡 Future Improvements

- Add authentication and user roles.
- Implement state management (Redux or Zustand) for more efficient state handling.
- Use a backend database for persistent data storage.
- Add more advanced filtering and sorting options.
- Optimize performance for large product lists.
- Add test cases for better reliability.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
