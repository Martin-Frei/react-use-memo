# 🛍️ React Product Sorter with useMemo

A React application demonstrating the power of `useMemo` hook for performance optimization. Fetches products from an API and allows sorting by price with efficient re-rendering.

## 🚀 Live Demo

**[View Live Demo](https://martin-frei.github.io/react-use-memo/)**

## 📸 Screenshot

![Product Sorter](screenshots/main.png)

## 🎯 Features

- 📦 Fetches product data from DummyJSON API
- 🔼 Sort products from Low to High price
- 🔽 Sort products from High to Low price
- ⚡ Performance optimized with `useMemo` hook
- 🎨 Clean UI with Tailwind CSS
- 📱 Responsive grid layout

## 🛠️ Technologies Used

- **React** - UI library with Hooks (useState, useEffect, useMemo)
- **Tailwind CSS** - Utility-first CSS framework
- **DummyJSON API** - Mock product data
- **GitHub Pages** - Deployment

## 💡 React Hooks Demonstrated

### `useMemo`
Memoizes the sorted products array to prevent unnecessary re-calculations. The sorting logic only runs when `products` or `sortType` changes.

### `useEffect`
Fetches product data from the API when the component mounts.

### `useState`
Manages the product list and current sort type.

## 🏃‍♂️ Run Locally

1. Clone the repository
```bash
git clone https://github.com/Martin-Frei/react-use-memo.git
cd react-use-memo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production
```bash
npm run build
```

## 🚀 Deploy to GitHub Pages
```bash
npm run deploy
```

## 🎓 Learning Objectives

This project demonstrates:
- How to use `useMemo` for performance optimization
- Difference between `useEffect` and `useMemo`
- Fetching data from external APIs
- State management in React
- Sorting algorithms in JavaScript

## 📝 Key Code Concepts
```javascript
// useMemo prevents re-sorting on every render
const sortedProducts = useMemo(() => {
  console.log("Sorting products...");
  const productsCopy = [...products];
  if (sortType === "low") {
    productsCopy.sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    productsCopy.sort((a, b) => b.price - a.price);
  }
  return productsCopy;
}, [products, sortType]); // Only recalculates when these change
```

## 👨‍💻 Author

**Martin Frei**
- GitHub: [@Martin-Frei](https://github.com/Martin-Frei)


## 📄 License

This project is open source and available under the MIT License.

## 🔗 Related Projects

- [React Memory Game](https://github.com/Martin-Frei/react_flippcards)
- More coming soon...