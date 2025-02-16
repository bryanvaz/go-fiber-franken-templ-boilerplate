package main

import (
	"log"

	"github.com/bryanvaz/go-fiber-franken-boilerplate/pkg/views"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()
	app.Use(logger.New())

	app.Get("/", func(c *fiber.Ctx) error {
		page := views.Index()
		return views.Render(c, page)
	})

	log.Fatal(app.Listen(":3000"))
}
