# Demo App for a CICD pipeline deploying to GKE

## Deploy to QA
Adding a new git tag on master branch will trigger an automated GCB build that will:
* build your container
* update the k8s manifest file
* commit the update manifest back to the repo
* deploy the updated manifest to your k8s cluster
* submit a PR to the js-demo-be-prod repo with the updated manifest