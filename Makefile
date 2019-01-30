start:
	npx babel-node -- src/bin/game.js

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
