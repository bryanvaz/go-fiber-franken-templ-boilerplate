# Boilerplate template for Franken UI with Golang Fiber, Templ, and Vite

Starting point for incorporating [Franken UI](https://github.com/franken-ui/ui)
with a Golang web stack based on [Fiber](https://github.com/gofiber/fiber)
and [Templ](https://github.com/a-h/templ) and [Vite](https://github.com/vitejs/vite) for bundling.

## Getting Started

### Prerequisites

- Node.js
- Go
- Air (Hot Reload for Go) https://github.com/air-verse/air
- CMake (For final builds)

### Installation

1. Clone the repository
2. Install dependencies
3. Run the application

```bash
git clone https://github.com/bryanvaz/go-fiber-franken-templ-boilerplate.git
cd go-fiber-franken-templ-boilerplate
npm install
go mod download
air
```

## Usage

### Development

```bash
air
```

### Production

```bash
make clean
make
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

