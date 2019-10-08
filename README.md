### Deployment

docker build -t play-frontend:v1 .

kubectl run play-frontend --image=play-frontend:v1 --image-pull-policy=Never --port=3000

kubectl expose deployment play-frontend --type=LoadBalancer --port=3000

To scale deployment, set replicas to 0 and then run command again with 1:
kubectl scale deployment play-backend --replicas=0





Sorting adapted from:
https://stackoverflow.com/a/19326174
