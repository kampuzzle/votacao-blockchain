FROM node:20.16.0

WORKDIR /web/

RUN npm install -g @angular/cli

# Set environment variable to disable Google Analytics
ENV NG_CLI_ANALYTICS="false"

CMD bash -c "npm install && ng serve --host=0.0.0.0 --disable-host-check --poll=1000"