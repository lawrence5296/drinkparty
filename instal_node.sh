#!/usr/bin/sh

echo "Start setup angular2"
tar xzvf node-v6.9.2.tar.gz 
cd node-v6.9.2
./configure --prefix=/usr/local
make
sudo make install
