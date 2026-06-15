#!/bin/bash

# don't forget to accept the EULA or it won't boot
while true
do
    java -Xmx8192M -Xms1024M -Dfml.readTimeout=180 -jar minecraft_server.jar nogui
    echo "If you want to completely stop the server process now, press Ctrl+C before the time is up!"
    echo "Rebooting in:"
    for i in 12 11 10 9 8 7 6 5 4 3 2 1
    do
        echo "$i..."
        sleep 1
    done
    echo "Rebooting now!"
done
