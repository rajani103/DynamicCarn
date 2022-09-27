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
docker tag build-bookings-management rajjo103/capstone:build-bookings-management
docker tag build-email-service rajjo103/capstone:build-email-service
docker tag build-chat-service rajjo103/capstone:build-chat-service
docker tag build-payment-service rajjo103/capstone:build-payment-service
docker tag build-user-service rajjo103/capstone:build-user-service
docker tag build-authentication-service rajjo103/capstone:build-authentication-service
docker tag build-eureka-server rajjo103/capstone:build-eureka-server
docker tag build-eureka-server rajjo103/capstone:build-product-webapp
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
docker push  rajjo103/capstone:build-bookings-management
docker push  rajjo103/capstone:build-email-service
docker push  rajjo103/capstone:build-chat-service
docker push  rajjo103/capstone:build-payment-service
docker push  rajjo103/capstone:build-user-service
docker push  rajjo103/capstone:build-authentication-service
docker push  rajjo103/capstone:build-eureka-server
docker push  rajjo103/capstone:build-product-webapp
docker push  rajjo103/capstone:rabbitmq
docker push  rajjo103/capstone:mongo
docker push  rajjo103/capstone:config

if [ $? -ne 0 ] ; then
        echo "ERROR: Docker Pushing the images failed"
        exit 1
fi
