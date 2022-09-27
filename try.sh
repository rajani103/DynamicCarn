REG_USERNAME="rajjo103"
REG_PASSWORD="Bhaubhau@103"
echo "====> Logging into conatiner"
sudo docker login -u $REG_USERNAME -p $REG_PASSWORD
if [ $? -ne 0 ] ; then
        echo "ERROR: Docker Login failed"
        exit 1
fi
echo "====> Tagging the image"
docker tag api-gateway rajjo103/capstone:api-gateway
docker tag mysql rajjo103/capstone:mysql
docker tag maven1-bookings-management rajjo103/capstone:maven1-bookings-management
docker tag maven1-email-service rajjo103/capstone:maven1-email-service
docker tag maven1-chat-service rajjo103/capstone:maven1-chat-service
        docker tag maven1-payment-service rajjo103/capstone:maven1-payment-service
docker tag maven1-user-service rajjo103/capstone:maven1-user-service
docker tag maven1-authentication-service rajjo103/capstone:maven1-authentication-service
docker tag maven1-eureka-server rajjo103/capstone:maven1-eureka-server
docker tag maven1-eureka-server rajjo103/capstone:maven1-product-webapp
docker tag rabbitmq:management rajjo103/capstone:rabbitmq
docker tag mongo rajjo103/capstone:mongo
docker tag config rajjo103/capstone:config

if [ $? -ne 0 ] ; then
        echo "ERROR: Docker tagging images fialed"
        exit 1
fi


echo "====> Pushing the image to docker repositoy"
docker push  rajjo103/capstone:api-gateway
docker push  rajjo103/capstone:mysql
docker push  rajjo103/capstone:maven1-bookings-management
docker push  rajjo103/capstone:maven1-email-service
docker push  rajjo103/capstone:maven1-chat-service
docker push  rajjo103/capstone:maven1-payment-service
docker push  rajjo103/capstone:maven1-user-service
docker push  rajjo103/capstone:maven1-authentication-service
docker push  rajjo103/capstone:maven1-eureka-server
docker push  rajjo103/capstone:maven1-product-webapp
docker push  rajjo103/capstone:rabbitmq
docker push  rajjo103/capstone:mongo
docker push  rajjo103/capstone:config

if [ $? -ne 0 ] ; then
        echo "ERROR: Docker Pushing the images failed"
        exit 1
fi

echo "Pushed all the images to repository"


