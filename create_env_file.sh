#!/bin/bash

cat <<EOF >.env
DB_HOST=localhost
DB_PORT=27017
DB_NAME=letsmeet
DB_URI=mongodb://localhost:27017/letsmeet
EOF
