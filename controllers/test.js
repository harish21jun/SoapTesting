exports.test = function(req, res, next) {
var result="";
	//console.log(req.body.root);
	//console.log(req.body.project);
	//console.log(req.body.testsuite);
	//console.log(req.body.testcase);
	//console.log(req.body.host);

const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'trigger.bat',req.body.root,req.body.project,req.body.testsuite,req.body.testcase,req.body.host]);


bat.stdout.on('data', (data) => {
	result = result+data.toString();
	console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);

	//result = result.substring(result.indexOf('TestCaseRunner Summary'));
	//console.log("Output:"+result);
	//var details = result.split('\n');
/*	res.render('test-complete',{
			page : 'test-complete',
			timeTaken : details[2],
			totalTestSuites: details[3],
			totalTestCases: details[4],
			totalTestSteps: details[5],
			totalRequestAssertions: details[6],
			totalFailedAssertions: details[7],
			totalExportedResults: details[8],
			summaryReport: req.body.root+'/TestReports/Output/test_case_run.html',
			junitReport: req.body.root+'/TestReports/html/index.html',
			errors: []
	}
);
*/
res.render('test-complete',{
			page : 'test-complete',
			junitReport: req.body.root+'/TestReports/html/index.html',
			errors: []
	}
);

});



};
