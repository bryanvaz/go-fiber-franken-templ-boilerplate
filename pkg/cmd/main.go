package main

import (
	"os"
	filepathPkg "path/filepath"

	"github.com/bryanvaz/go-fiber-franken-templ-boilerplate/pkg/views"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// The absolute path to the directory containing the binary
func BinDir() string {
	bin, err := os.Executable()
	if err != nil {
		panic(err)
	}
	filepath, err := filepathPkg.Abs(bin)
	if err != nil {
		panic(err)
	}
	return filepathPkg.Dir(filepath)
}

func main() {
	app := fiber.New()
	app.Use(logger.New())

	app.Static("/assets", filepathPkg.Join(BinDir(), "./assets/"), fiber.Static{
		Browse: true,
		MaxAge: 1,
	})

	app.Get("/", func(c *fiber.Ctx) error {
		page := views.Index()
		return views.Render(c, page)
	})

	log.Fatal(app.Listen(":3000"))
}
