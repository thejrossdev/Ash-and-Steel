@echo off
REM don't forget to accept the EULA or it won't boot

:loop
java -Xmx8192M -Xms1024M -Dfml.readTimeout=180 -jar minecraft_server.jar nogui
echo If you want to completely stop the server process now, press Ctrl+C before the time is up!
echo Rebooting in:
for /l %%i in (12, -1, 1) do (
    echo %%i...
    timeout /t 1 /nobreak >nul
)
echo Rebooting now!
goto loop
