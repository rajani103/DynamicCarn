node(label:'node-1') {

	# building the maven build which hgenerates the snapshot jar files
 	stage("Maven Clean Package") {
       		def mvnHome = tool 'maven3'
        	sh "${mvnHome}/bin/mvn clean install package"
        }
	
	#cleaning old the images 
    	stage("Clean docker cache") {
       		sh "./cleanDockerCache.sh"
    	}
    	
	#createing containers defined in dockercompose.yaml file
	stage("Docker Compose") {
       		sh "sudo docker-compose up -d "
    	}
	
	#pushing newly craeted images to the dockerhub
	stage("Push Docker Images") {
       		sh "./dockerIMGpush.sh"
    	}
	
}
