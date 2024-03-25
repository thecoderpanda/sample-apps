#!/bin/bash

TRACING_JS_PATH="tracing.js"
APP_JS_PATH="app.js"

pm2 start $APP_JS_PATH --name "app-monitoring" --node-args "-r $TRACING_JS_PATH"

# pm2 save
# pm2 startup
