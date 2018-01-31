# Wordpress wedding
Steps to deploy a simple wordpress site to AWS EC2

This was my first expierience with wordpress. I was asked to build a wedding website for my cousin.
This app is supposed to have less than 10k visit lifetime lol

### Licence
No licence

### Dependencies

- Python 3.5
- wordpress site locally

## Steps
### Build your website locally
I used the sydney themes, with Elementor plugin

### Export local website
The simplest ay I found was to use the plugin `duplicator`.
After packaging you should download the 2 files `installer.php` and `archive*.zip`

### Setup Aws ressources
* Create an aws ec2 instance: I chose an AMI ubuntu on a t2.micro (free tier eligible)
* Create the mysql database: I decided use an RDS instance (Also available on free tier). 
Please note careffully the connection details
* Install apache and php on the ec2 server: run 
```
bash init_wordpress.sh
```
* scp wordpress package on the ec2 server : run 
cd deploy_aws
./deploy.sh ~/Downloads/installer.php ~/Downloads/20171228_stephinnocent_6bf58a52b414d90d2859180118210325_archive.zip
```
* Install the wordpress app: 
Just follow the step decribe in (https://wpformation.com/migrer-wordpress-duplicator/)
If you can not connect to the rds instance please check your security groups
