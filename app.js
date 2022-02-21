    /**
     * I am confused how to do this Dinosaurs project. The object-oriented JS lessons did not cover how to 
     * incorporate it with HTML and CSS. I feel like I am set up to fail since the lessons did not provide
     * content material that would help set us up for this project. 
     * I have posted two mentor questions on Udacity Knowledge and still have not received any assistance:
     * - https://knowledge.udacity.com/questions/759312
     * - https://knowledge.udacity.com/questions/759263
     * This Dinosaurs project is due today, 12/9/2021!
     * Anyway, this is the best I could do based on what I could comprehend on the project's requirements.
     * It would be great if a Mentor could provide real-time assistance, where they could help
     * break down the logic into more understandable, simplistic next steps.
     */    
    
    //1. Get the dino.json data
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
    */

    /**2. Display Dinosaurs species to grid
     * I don't understand the exact breakdown of this code, but found it on Udacity's Knowledge posts during my research
     * Source: https://knowledge.udacity.com/questions/302516
     * It's supposed to be a function that loops through the dino data to create html and place it to the DOM
     * I don't understand why it's passing a #grid instead of just grid for its argument??
     */
    function displayData () {
        dinoFacts.Dinos.forEach((dino)=> {
            const grid = document.querySelector("#grid");
            grid.innerHTML += `
                <div class="grid-item">
                    <h3>${dino.species}</h3>
                    <img src=" alt="" />
                    <p>facts</p>
                </div>
            `;
        })
    }

    //3. Create Dino Constructor <-- what is the main goal for this??
    class Dino
        constructor(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    let creature = new constructor();

    //4. Create Dino Objects <-- why do I need this when I already have the dinoFacts variable (line 15) containing the Dinosaurs facts?
    const dinoObj = {};

    //5. Variables to reference the user form
    const nameForm = document.getElementById('name');
    const heightFtForm = document.getElementById('feet');
    const heightInForm = document.getElementById('inches');
    const weightForm = document.getElementById('weight');
    const dietForm = document.getElementById('diet');
    const buttonForm = document.getElementById('btn');

    //6. Create Human Object <-- is this used to store the human data?
    const humanObj = {
        name: nameForm,
        height: heightFtForm + heightInForm,
        weight: weightForm,
        diet: dietForm
    };

    //7. Use IIFE to get human data from form
    (function getHuman(name, height, weight, diet) {
        return humanObj;
    }
    )();

    
    //comparing weight of dino with human  (method1)
    function comparingWeight(object1, object2) {
        let diff = object2.height - object1.height;
        return (object2.height > object1.height) ? `The ${object2.species} is ${diff} lbs more than you!`
            : (object2.height < object1.height) ? `You're ${Math.abs(diff)} lbs more than the ${object2.species}!`
                : `You are as same as ${object2.species}`;
    
    }

     // comparing height of dino with human  (method2)

     function comparingheight(object1, object2) {
        let diff = object2.height - object1.height;
        return (object2.height > object1.height) ? `The ${object2.species} is ${diff} inches more than you!`
            : (object2.height < object1.height) ? `You're ${Math.abs(diff)} inches more than the ${object2.species}!`
                : `You are as same as ${object2.species}`;
    
    }
    
    //comparing diet of dino with human  (method3)
    function comparingDiet(object1, object2) {
        return (object2.diet === object1.diet) ? `You and ${object2.species} has the same diet!`
            : `You have so different diet! ${object2.species} is ${object2.diet}`;
    
    }
    // change facts function added to get random facts
    function randomFacts(num, dinoData, HumanData) {
        let fact;
        switch (num) {
            case 1:
                //comparing weight 
                fact = comparingWeight(dinoData, HumanData);
                return fact;
            case 2:
                // for comparing height
                fact = comparingHeight(dinoData, HumanData);
                return fact;
            case 3:
                // for comparing diet 
                fact = comparingDiet(dinoData,HumanData);
                return fact;
            case 4:
                // return fact
                return `The ${HumanData.species} is ${HumanData.diet} discovered in ${HumanData.when}`;
            case 5:
                //return fact
                return `The ${HumanData.species} is  discovered at ${HumanData.where}`;
            case 6:
                //return fact
                return `The ${HumanData.species} is ${HumanData.diet},and fact about is ${HumanData.fact}`;
            default:
                return `You know ${HumanData.species} is ${HumanData.fact}`;
        }
    }
    
    
    // Generate Tiles for each Dino in Array
    function addTiles(obj) {
        let grid = document.getElementById('grid');
        dinoObj.forEach((data) => {
            //div
            const div = document.createElement('div');
            // image 
            let image = document.createElement('img');
            let img = data.image;
            image.src = img;
    
            //h3
            const h3 = document.createElement('h3');
            //p
            const p = document.createElement('p');
    
            if (data.species === 'human') {
                h3.textContent = obj.name;
            }
            else if (data.species === 'Pigeon') {
                h3.textContent = data.species;
                p.textContent = 'All birds are Dinosaurs.';
            }
            else {
                h3.textContent = data.species;
                let randomNum = Math.floor((Math.random() * 7) + 1);
                p.textContent = randomFacts(randomNum, obj, data); // to get random facts
            }
    
            //Add tiles to DOM
            grid.appendChild(div);
            div.classList.add('grid-item');
            div.appendChild(h3);
            div.appendChild(image);
            div.appendChild(p);
        });
    }



    //11. Generate Tiles for each Dino in Array <-- how do you do this??

  
        // Add tiles to DOM

    //12. Remove form from screen <-- how to do this??



    //13. On button click, prepare and display infographic
    /**Add a submit event listener to the dino-compare form. Try to console.log the dinos data when the form is submitted.
     */
    buttonForm.addEventListener('click', (function() {
        return function() {
            console.log(dinoFacts.Dinos);
        }
    })());


    
    
