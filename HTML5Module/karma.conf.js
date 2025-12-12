module.exports = function(config) {
	"use strict";

	config.set({
        frameworks: ["ui5"],
		ui5: {
			url: "https://sapui5.hana.ondemand.com"
		},
		preprocessors: {
			"{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
		},
		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},
		reporters: ["progress", "coverage"],
        
        // **********************************************
        // >>> START: REQUIRED FIX FOR CI/CD CONTAINER <<<
        // **********************************************
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromiumHeadless', // Use 'ChromiumHeadless' as defined by your environment
                flags: ['--no-sandbox']   // Add the necessary flag to run in secure containers
            }
        },
        browsers: ["ChromeHeadlessNoSandbox"], // Reference the new custom launcher here
        // **********************************************
        // >>> END: REQUIRED FIX FOR CI/CD CONTAINER <<<
        // **********************************************
        
        browserConsoleLogOptions: {
			level: "error"
        },

		singleRun: true
	});
};
