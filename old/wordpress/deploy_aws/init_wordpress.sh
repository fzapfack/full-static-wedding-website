#!/bin/bash

set -e
set -x

HOST=`cat secrets.json | jq -r .HOST`
SSH_KEY=${2:-~/.ssh/aws_fab.pem}

ssh -i $SSH_KEY "ubuntu@$HOST" -t "bash -i << EOF
sudo apt-get update && sudo apt upgrade
sudo apt-get install apache2
sudo apt-get install -y php7.0 libapache2-mod-php7.0 php7.0-cli php7.0-common php7.0-mbstring php7.0-gd php7.0-intl php7.0-xml php7.0-mysql php7.0-mcrypt php7.0-zip

sudo service apache2 restart
EOF"