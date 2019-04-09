SHELL := /bin/bash

CODE_DIR=build/code
DOC_DIR=build/docs
SRC_DIR=src
PWD=$(shell pwd)
STATUS=0

all:  build

init: 
	./init.sh

build: init
	make -f tangle-make -k all
	rsync -a ${PWD}/lib-for-ds/node_modules ${CODE_DIR}/runtime/
	rsync -a ${PWD}/lib-for-ds/default ${CODE_DIR}/runtime/web/static
	rsync -a ${SRC_DIR}/runtime/images ${CODE_DIR}/runtime/web/static


server:
	(source ./venv/bin/activate; cd ${CODE_DIR}/runtime/web; python server.py)

clean:	
	make -f tangle-make clean
