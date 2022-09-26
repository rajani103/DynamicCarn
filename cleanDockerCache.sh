sudo docker system prune -a -f 
sudo docker rm -f $(docker ps -a -q) 
