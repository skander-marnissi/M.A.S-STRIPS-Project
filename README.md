# M.A.S-STRIPS-Project

STRIPS is a planning methodology for solving this challenge(See Project_Report.pdf) , where planning is performed under certain assumptions and where plan generation is separated from its execution. It can be used by intelligent agents and autonomous robots.

It intelligently involves the execution of a sequence of actions to achieve a goal.

## Installation

Open cmd and type the following commands: 

```bash
git clone https://github.com/SkanderMarnissi/M.A.S-STRIPS-Project/
```

After downloading:

```bash
cd M.A.S-STRIPS-Project
```

Then install all packages/modules that needs to be installed:

### Step 1: Install node.js : 

You can install node.js from https://nodejs.org/en/

### Step 2: Install STRIPS packages:

```bash
npm install packages.json
```

## How it works?

In this project, the final output is an evaluation of three searching technics A* search, depth first search and breadth first search in a simulation.

*Note: all the context of the simulation and report are detail in the Project_Report.pdf.*

# Usage

In order to process the program and make it work you need to:

### Step 1: install the required packages/libraries.

### Step 2: Now execute what ever simulation you want to run:

#### To run the depth first search algorithm type:

```bash
node depth-first-search.js
```

#### To run the breadth first search algorithm type:

```bash
node breadth-first-search.js
```


#### To run the A* search algorithm type:

```bash
node Asearch.js
```

#### To obtain the STRIPS graph of possibilities type:

```bash
node graph.js
```


*Note: The simulation will take time, so you have to wait 3-5 min depending on your computer resources.*


*SKANDER MARNISSI COPYRIGHT © 2020 - ALL RIGHTS RESERVED*