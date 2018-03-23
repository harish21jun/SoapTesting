set ROOT=%1
set PROJECT=%2
set TEST_SUITE=%3
set TEST_CASE=%4
set TOCP_HOST=%5

cd  C:\Harish\Learning\Node Js\SoapTesting
call run.bat %ROOT% %PROJECT% %TEST_SUITE% %TEST_CASE% %TOCP_HOST%

set ANT_HOME=C:\apache-ant-1.10.1-bin\apache-ant-1.10.1
set PATH=%PATH%;%JAVA_HOME%/bin;%ANT_HOME%/bin
cd  C:\Harish\Learning\Node Js\SoapTesting
ant -f generateReport.xml -Droot="%ROOT%"
