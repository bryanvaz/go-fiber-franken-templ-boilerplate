
OUT_PATH=dist
BINARY_NAME=server
GO_MAIN=./pkg/cmd/main.go

all: build

deps:
	npm install
	go mod tidy

.PHONY: build
build:
	@mkdir -p ${OUT_PATH}
	@npm run build
	@go run github.com/a-h/templ/cmd/templ generate
	@CGO_ENABLED=0 go build -o ${OUT_PATH}/${BINARY_NAME} ${GO_MAIN}

clean:
	@go clean
	@rm -rf ${OUT_PATH}


