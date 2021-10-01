
docker-build:
	docker-compose build

docker-up:
	docker-compose up --build

docker-shell:
	docker exec -it api bash