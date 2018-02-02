# Demo App for a CICD pipeline deploying to GKE

## Deploy to QA
Adding a new git tag on master branch will trigger an automated GCB build that will:
* build your container
* update the k8s manifest file
* commit the update manifest back to the repo
* deploy the updated manifest to your k8s qa cluster
* submit a PR to the stable branch with the updated manifest

## Deploy to Prod
Merging PR to stable will trigger an automated GCB build that will:
* deploy the updated manifest to your k8s prod cluster