build:
	docker build -t rdaneel/tesseractjs:0.1 .

run:
	docker run -v ${PWD}/files:/tes/files -ti --rm --name tes rdaneel/tesseractjs:0.1

push:
	docker push rdaneel/tesseractjs:0.1

