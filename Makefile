.DEFAULT_GOAL := help

.PHONY: help install ci start dev build clear serve swizzle deploy docusaurus write-translations write-heading-ids

help:
	@echo "Usage: make <target>"
	@echo
	@echo "Common targets:"
	@echo "  install             Run npm install"
	@echo "  start, dev          Start dev server (npm run start)"
	@echo "  build               Build the site (npm run build)"
	@echo "  clear               Clear cache (npm run clear)"
	@echo "  serve               Serve build locally (npm run serve)"
	@echo "  deploy              Deploy site (npm run deploy)"
	@echo "  write-translations  Run write-translations (npm run write-translations)"
	@echo "  write-heading-ids   Run write-heading-ids (npm run write-heading-ids)"

install:
	npm install

start:
	npm run start

dev: start

build:
	npm run build

clear:
	npm run clear

serve:
	npm run serve

deploy:
	npm run deploy

write-translations:
	npm run write-translations

write-heading-ids:
	npm run write-heading-ids

