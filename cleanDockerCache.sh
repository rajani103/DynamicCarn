sudo docker system prune -a -d 
sudo docker rm -f $(docker ps -a -q) 
