# tesseractjs-test
Simple script that applies Tesseract.js to all the images in a folder

## Usage
The application runs fine in a container.
Run a
```sh
make build
```
to build the image containing nodejs, tesseractjs and the test application.

Then put some file under `./files` and runs
```sh
make run
```
to make tesseractjs analyze the files. `detect` and `recognize` methods
are applied and results sent to stdout.

`./files` folder is mounted as volume in the container.
