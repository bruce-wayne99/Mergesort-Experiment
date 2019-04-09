#!/bin/bash

if [ -d literate-tools ]; then
    echo "literate-tools already present"
    (cd literate-tools; git pull)
else
    git clone https://github.com/vlead/literate-tools.git
    (cd literate-tools)
fi

if [ -d lib-for-ds ]; then
    echo "lib-for-js already present"
else
    git clone https://gitlab.com/vlead-projects/lib-for-ds.git
fi

if [ -L tangle-make ]; then
    echo "symlinked makefile already present"
else 
    ln -sf literate-tools/makefile tangle-make
fi

