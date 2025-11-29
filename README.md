# Unit Converter

A modern, responsive unit converter web application built with React, TypeScript, and Bootstrap. Convert between various units across multiple categories including length, weight, area, time, speed, and more.

## 🌟 Features

- **Multiple Unit Categories**: Convert units across 7 different categories

  - 📐 Area (square millimeter, square centimeter, square meter, square kilometer, square inch, square foot, square yard, square mile, acre, hectare)
  - ⚡ Energy (joule, kilojoule, calorie, kilocalorie, watt-hour, kilowatt-hour)
  - 💾 Data (bit, byte, kilobyte, megabyte, gigabyte, terabyte, petabyte)
  - 📏 Length (millimeter, centimeter, meter, kilometer, inch, foot, yard, mile)
  - 🚀 Speed (meter per second, kilometer per hour, mile per hour, knot, foot per second)
  - Pressure (pascal, bar, psi, atm)
  - ⏱️ Time (millisecond, second, minute, hour, day, week, month, year)
  - 🧴 Volume (milliliter, liter, cubic meter, gallon, quart, pint, cup, fluid ounce, cubic inch, cubic foot)
  - ⚖️ Weight (milligram, gram, kilogram, ounce, pound)

- **Real-time Conversion**: Instant conversion as you type
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **User-Friendly Interface**: Clean and intuitive Bootstrap-powered UI
- **Context API**: Efficient state management using React Context
- **TypeScript**: Type-safe code for better development experience

## 🚀 Demo

[Live Demo](https://WebDevAbdullah.github.io/unit-converter/)

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Bootstrap** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Vite** - Fast build tool and development server
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/WebDevAbdullah/unit-converter.git
cd unit-converter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. Select a unit category from the sidebar (Length, Weight, Volume, etc.)
2. Choose the "From" unit you want to convert from
3. Choose the "To" unit you want to convert to
4. Enter the value you want to convert
5. See the converted result instantly in the results table

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (Todo)

## 🧮 Conversion Logic

The application uses conversion tables where each unit is converted to a base unit:

- Area → square meters
- Data → bytes
- Energy → joule
- Length → meters
- Pressure → pascal
- Speed → meters per second
- Time → seconds
- Volume → liters
- Weight → grams

The conversion process:

1. Convert input value from source unit to base unit
2. Convert base unit value to target unit
3. Display all possible conversions in results table

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/WebDevAbdullah/unit-converter/issues).
