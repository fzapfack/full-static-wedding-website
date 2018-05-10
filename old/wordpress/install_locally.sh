#!/usr/bin/env bash

NAME=${1?name needs to be set}

cd /var/www/html/wordpress
mkdir -p $NAME
cd $NAME
unzip -q ~/Downloads/wordpress-4.7.9.zip -d /tmp
mv /tmp/wordpress/* .
chown -R www-data:www-data /var/www/html/wordpress
chmod -R 755 /var/www/html/wordpress


# unzip -q ~/Downloads/wordpress-4.9.4.zip -d .
# sudo ln -s $dir/wordpress /var/www/html/wordpress/$NAME
# chown -R www-data:www-data $dir/wordpress
# chmod -R 755 $dir/wordpress
# sudo chown -R www-data:www-data /var/www/html/wordpress/$NAME/
# sudo chmod -R 755 /var/www/html/wordpress/$NAME/
# sudo chown -R www-data:www-data /var/www/html/wordpress/$NAME
# sudo chmod -R 755 /var/www/html/wordpress/$NAME

mysql << EOF
DROP DATABASE IF EXISTS $NAME;
CREATE DATABASE $NAME;
DROP USER IF EXISTS $NAME@localhost;
CREATE USER $NAME@localhost IDENTIFIED BY '$NAME';
grant all privileges on $NAME.* to $NAME@localhost;
flush privileges;
EOF
