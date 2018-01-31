#!/bin/bash

# Use the script after exporting the wordpress using duplicator plugin
set -e
set -x

HOST=`cat secrets.json | jq -r .HOST`
DUPLICATOR_INSTALLER=${1}
DUPLICATOR_ARCHIVE=${2}
SSH_KEY=${3:-~/.ssh/aws_fab.pem}

ssh -i $SSH_KEY "ubuntu@$HOST" -t "bash -i << EOF
mkdir -p ~/tmp
EOF"

scp -i $SSH_KEY $DUPLICATOR_INSTALLER "ubuntu@$HOST:~/tmp"
scp -i $SSH_KEY $DUPLICATOR_ARCHIVE "ubuntu@$HOST:~/tmp"

ssh -i $SSH_KEY "ubuntu@$HOST" -t "bash -i << EOF
sudo cp ~/tmp/* /var/www/html
sudo chown -R www-data:www-data /var/www
sudo chmod -R 2755 /var/www
EOF"
