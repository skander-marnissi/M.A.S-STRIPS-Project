var strips = require('strips');
strips.verbose = true;

// Load the domain and problem.
strips.load('./domain.txt', './problem.txt', function(domain, problem) {
    // Use A* search to run the problem against the domain.
    var solutions = strips.solve(domain, problem, cost);

    // Display each solution.
    for (var i in solutions) {
        var solution = solutions[i];

        console.log('- Solution found in ' + solution.steps + ' steps!');
        for (var i = 0; i < solution.path.length; i++) {
            console.log((i + 1) + '. ' + solution.path[i]);
        }        
    }
});

// An example A* landmark-based heuristic method to calculate the cost of a state.
function cost(state) {
    var cost = 5;

    for (var i in state.actions) {
        var action = state.actions[i];
        var nextAction = state.actions[i+1];

        if (action == 'take-train' && nextAction == 'generate-authorization') {
            cost -= 5;
            break;
        }
    }

    return cost;
}
