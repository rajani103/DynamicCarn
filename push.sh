REG_USERNAME="rajan9886886836"
REG_PASSWORD="R@j@n5707"
echo "====> Logging into conatiner"
sudo docker login -u $REG_USERNAME -p $REG_PASSWORD
if [ $? -ne 0 ] ; then
        echo "ERROR: Docker Login failed"
        exit 1
fi

#sudo docker tag mongo:mongo1 rajan9886886836/dockertry:mongo1
sudo docker tag config:config1 rajan9886886836/dockertry:config1
sudo docker tag mysql:mysql rajan9886886836/dockertry:mysql
echo "====> Inintialising Pushing the image to conatiner"
#sudo docker push rajan9886886836/dockertry:mongo1
sudo docker push rajan9886886836/dockertry:config1
sudo docker push rajan9886886836/dockertry:mysql
if [ $? -ne 0 ] ; then
        echo "ERROR: Docker PUSH failed"
        exit 1
fi
