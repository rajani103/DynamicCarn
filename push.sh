REG_USERNAME="rajjo103"
REG_PASSWORD="Bhaubhau@103"
echo "====> Logging into conatiner"
sudo docker login -u $REG_USERNAME -p $REG_PASSWORD
if [ $? -ne 0 ] ; then
        echo "ERROR: Docker Login failed"
        exit 1
fi

#sudo docker tag mongo:mongo1 rajjo103/capstone:mongo1
sudo docker tag config:config1 rajjo103/capstone:config1
sudo docker tag mysql:mysql rajjo103/capstone:mysql
echo "====> Inintialising Pushing the image to conatiner"
#sudo docker push rajjo103/capstone:mongo1
sudo docker push rajjo103/capstone:config1
sudo docker push rajjo103/capstone:mysql
if [ $? -ne 0 ] ; then
        echo "ERROR: Docker PUSH failed"
        exit 1
fi
