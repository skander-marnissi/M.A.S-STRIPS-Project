var strips = require('strips');
strips.verbose = true;

// Load the domain and problem.
strips.load('./domain.txt', './problem.txt', function(domain, problem) {
	// solve(domain, problem, isDepthFirstSearch = true, maxSolutions = 1, cost = null)
    // Use breadth-first-search.
    var solutions = strips.solve(domain, problem, false);

    // Display each solution.
    for (var i in solutions) {
        var solution = solutions[i];

        console.log('- Solution found in ' + solution.steps + ' steps!');
        for (var i = 0; i < solution.path.length; i++) {
            console.log((i + 1) + '. ' + solution.path[i]);
        }        
    }
});
