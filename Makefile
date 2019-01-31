start:
	npx babel-node -- src/game.js

lint:
	npx eslint .

test:
	npm test

build:
	make lint
	make test
	npm run build

publish:
	make build
	npm publish
