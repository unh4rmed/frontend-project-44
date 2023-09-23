fix-lint:
	npx eslint --fix .

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

brain-even:
	brain-even
