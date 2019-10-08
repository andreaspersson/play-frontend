### Deployment

docker build -t play-backend:v1 .

kubectl run play-backend --image=play-backend:v1 --image-pull-policy=Never --port=3003

kubectl expose deployment play-backend --type=LoadBalancer --port=3003

To scale deployment, set replicas to 0 and then run command again with 1:
kubectl scale deployment play-backend --replicas=0
