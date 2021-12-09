    /**
     * I feel like I was set up to fail since the course did not cover lessons on HTML and CSS, and how to use that with JavaScript.
     * I have posted two mentor questions on Udacity Knowledge and still have not received any assistance:
     * - https://knowledge.udacity.com/questions/759312
     * - https://knowledge.udacity.com/questions/759263
     * This Dinosaurs project is due today, 12/9/2021!
     * 
     */    
    
    //Get the dino.json data
    const dinoFacts = {
        "Dinos": [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]

    };
    
    /**Test if able to output the data
    dinoFacts.Dinos.forEach(function(dino) {
        console.log(dino);
        //console.log(dino.species);
        //console.log(dino.fact);
    });


    //Source: https://knowledge.udacity.com/questions/302516
    //Function that loops through the dino data to create html and place it to the DOM:
    function displayData () {
        dino.forEach(()=> {
            const grid = document.querySelector("#grid");
            grid.innerHTML += `
                <div class="grid-item">
                    <h3>${species}</h3>
                    <img src=" alt="" />
                    <p>facts</p>
                </div>
            `;
        })
    }

    */

    // Create Dino Constructor <-- what is the main goal for this??
    function DinoConstruct() {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    let creature = new DinoConstruct();

    // Create Dino Objects <-- what is the main goal for this??
    const dinoObj = {};

    // Create Human Object <-- what is the main goal for this??
    const humanObj = {};

    // Use IIFE to get human data from form
    (function getHuman(name, height, weight, diet) {
        
        }
    )();

    /**Add a submit event listener to the dino-compare form. Try to console.log the dinos data when the form is submitted.
     * Source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
     * Example:
     * function logSubmit(event) {
     * log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
     * event.preventDefault();
     * }
     * 
     * const form = document.getElementById('form');
     * const log = document.getElementById('log');
     * form.addEventListener('submit', logSubmit);
     */
    const nameForm = document.getElementById('name');
    const heightFtForm = document.getElementById('feet');
    const heightInForm = document.getElementById('inches');
    const weightForm = document.getElementById('weight');
    const dietForm = document.getElementById('diet');
    const buttonForm = document.getElementById('btn');

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array <-- how do you do this?

  
        // Add tiles to DOM

    // Remove form from screen <-- don't know how to do this



    // On button click, prepare and display infographic <-- don't know how to do this


    
    