lint-frontend:
	make -C frontend lint

install:
	npm ci

start-frontend:
	make -C frontend start

start:
	npx start-server -s ./frontend/build

build:
	rm frontend/build -rf
	npm run build
