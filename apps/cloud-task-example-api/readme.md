# Cloud Task Example API

## Overview
This application is an example of using [Google Cloud Tasks](https://cloud.google.com/tasks) in a local environment.

It is assumed the reader is an Angular / NestJs developer with experience in Nx workspaces.

Please NOTE - The `cloud-task-emulator` may not work on your environment.

Please see: https://github.com/aertje/cloud-tasks-emulator for building the `cloud-task-emulator`.

### Set Up

1. Create a `.env` file under `/apps/cloud-task-example-api`
2. Add the following configuration properties

``` bash
CLOUD_TASK_PUBLISHER_LOCATION=global
CLOUD_TASK_PUBLISHER_PROJECT=dev
CLOUD_TASK_PUBLISHER_QUEUE=test
CLOUD_TASK_OPTS_PORT=8123
CLOUD_TASK_OPTS_HOST=localhost

HANDLER_URL=http://localhost:3000/api/handler
```

3. In the root of the workspace, run `npx nx serve cloud-task-example-api`

### Publishing to the Queue

1. Make a `POST` request to the url: `http://localhost:3000/api/publisher` with the body below.

``` json
{
    "id": "some-changing-entity-id"
}
```

### Expected Result