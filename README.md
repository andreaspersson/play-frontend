### Build

docker build -t play-frontend:v1 .

### Deploy

kubectl create -f .\deployment.yaml

kubectl expose deployment play-frontend --type=LoadBalancer --port=3000


### General info

To scale deployment, set replicas to 0 and then run command again with 1:
kubectl scale deployment play-frontend --replicas=0

Sorting adapted from:
https://stackoverflow.com/a/19326174
