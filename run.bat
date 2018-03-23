set ROOT=%~1
set PROJECT=%~2
set TEST_SUITE=%~3
set TEST_CASE=%~4
set TOCP_HOST=%~5

echo ROOT %~1
echo PROJECT %~2
echo TEST_SUITE %~3
echo TEST_CASE %~4
echo TOCP_HOST=%~5

cd  C:\Harish\Learning\Node Js\SoapTesting
if "%TEST_SUITE%" == ""  goto RUN_ALL
if "%TEST_CASE%" == ""	goto RUN_ALL_TESTCASE
if "%TEST_CASE%" == "" if "%TEST_SUITE%" == ""  goto RUN_ALL


goto RUN_SPECIFIC

:RUN_SPECIFIC
testrunner.bat -s%TEST_SUITE% -c%TEST_CASE% -P TOCP_HOST=%TOCP_HOST% -r -a -A -M -j -f"%ROOT%\Output" -I -i "%ROOT%\%PROJECT%"

:RUN_ALL
testrunner.bat -P TOCP_HOST=%TOCP_HOST% -r -a -A -M -j -f"%ROOT%\Output" -I -i "%ROOT%\%PROJECT%"

:RUN_ALL_TESTCASE
testrunner.bat -s%TEST_SUITE% -P TOCP_HOST=%TOCP_HOST% -r -a -A -M -j -f"%ROOT%\Output" -I -i "%ROOT%\%PROJECT%"
