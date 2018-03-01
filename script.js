
//VUE FOR CHOOSE YOUR OWN ADVENTURE PAGE
var app = new Vue({
	el: '#app',
	
	data: {
		roadEvents: {},
		dungeonEvents: {},
		battle: {},
		returnEvents: {},
	
	/*	
		roadResults: {},
		dungeonResults: {},
		battleResults: {},
		returningResults: {},
	*/	
	
		maxRoadEvent: 0,
		maxDungeonEvent: 0,
		maxReturnEvent: 0,
		eventnum: 0,
		
		name: '',
		class: '',
		health: 50,
		gold: 0,
				
		kitten: false,
		
		firstOption: "",
		secondOption: "",
		thirdOption: "",
		story: "",
		achievement: "",
		
		//Current Event key: 0 (home), 1 (road), 2(dungeon), 3 (return)
		currentEvent: 0,
		
		resume: false,

	
	
	
	},
	
	created: function(){
		
	
		
		//TEMPLATES FOR EVENTS
		
		///////////////////////////////////////////
		//ROAD EVENTS
		///////////////////////////////////////////
		var increment = 0;
		////////////////////////////////////////////////////
		
		
		if (!(increment in this.roadEvents))
			Vue.set(this.roadEvents, increment, new Array);
		
		
		var Story = "You travel for a while down the open road." + 
						"Eventually you come across a child crying at the side of the road." + 
						"What do you do?";
		
		var FirstOption = "Try to comfort the child.";
		var SecondOption = "Keep walking. It's best not to get involved.";
		var ThirdOption = "Cast Silence on the child.";
		
		
		var firstResultStory = "The child turns out to be a vampire. It immediately pounces on you, fangs bared. " + 
										"Fortunately it's small size prevents it from sucking you dry, and you awaken " + 
										"several hours later, badly injured. It also stole your purse.";		
		var secondResultStory = "The child turns out to be a vampire, and does not take kindly to being ignored. " + 
										"It tries to pounce on you from behind, but trips over a protruding root and stakes " +
										"itself through the heart. You collect 5 gold from it's corpse, and quickly move on.";
		var thirdResultStory = "The child runs away, and you enjoy the blessed quiet for a few hundred yards.";		
		
		var newHealth = this.health/2;		
		
		//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
		var FirstResult = [firstResultStory, -100, -(newHealth), "No Good Deed Goes Unpunished", false];
		var SecondResult = [secondResultStory, 5, 0, "Knock on Wood", false];
		var ThirdResult = [thirdResultStory, 0, 0, "Heartless", false];

		
		var eventArray = [Story, FirstOption, FirstResult, SecondOption, SecondResult, ThirdOption, ThirdResult];
		
		this.roadEvents[increment].push(eventArray);
		
		//this.roadEvents[increment][0][INDEX OF DESIRED VALUE]
		
		increment = increment + 1;	
		
		////////////////////////////////////////////////////										
		////////////////////////////////////////////////////	
		
		if (!(increment in this.roadEvents))
			Vue.set(this.roadEvents, increment, new Array);
		
		
		var Story = "A masked woman confronts you, brandishing a knife and demanding 'all your gold.'" +
						" What do you do?";
		
		var FirstOption = "Hand over all your gold";
		var SecondOption = "Use your Scroll of Fireball on the woman";
		var ThirdOption = "Call out for help";
		
		
		var firstResultStory = "The woman takes your gold and wanders away into the bushes.";		
		var secondResultStory = "You remember that you do not have a Scroll of Fireball just as the woman knifes you in the kidneys and snatches your purse.";
		var thirdResultStory = "Your screams do not go unanswered. A bear charges out of the woods and mauls you. The woman runs off screaming, and the bear gives chase, leaving you barely alive.";		
					
		
		//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
		var FirstResult = [firstResultStory, -100, 0, "Discretion > Valor", false];
		var SecondResult = [secondResultStory, -100, -10, "Absent-minded", false];
		var ThirdResult = [thirdResultStory, 0, -20, "Always A Bigger Fish", false];
		
		
		/*var eventArray
		
		key: 0: Story
			  1: FirstOption
			  2: FirstResult
			  3: SecondOption
			  4: SecondResult
			  5: ThirdOption
			  6: ThirdResult 											
													
													*/
		
		var eventArray = [Story, FirstOption, FirstResult, SecondOption, SecondResult, ThirdOption, ThirdResult];
		
		this.roadEvents[increment].push(eventArray);
		
		//this.roadEvents[increment][0][INDEX OF DESIRED VALUE]
		
		increment = increment + 1;											
		////////////////////////////////////////////////////	
		
		
		
		this.maxRoadEvent = increment;
		
		///////////////////////////////////////////
		//DUNGEON EVENTS
		///////////////////////////////////////////
		increment = 0;
		////////////////////////////////////////////////////
		

		if (!(increment in this.dungeonEvents))
			Vue.set(this.dungeonEvents, increment, new Array);
		
		
		var Story = "The mouth of a promising cave gapes before you. You enter, shivering in the damp. " +
						"A few rats scamper in the shadows. The way forward splits into two paths. The voice of your dearly departed mentor echoes in your mind: 'Always take the right path!' What do you do?";
		
		var FirstOption = "Go left";
		var SecondOption = "Go right";
		var ThirdOption = "Ask the rats";
		
		
		var firstResultStory = "Despite your mentor telling you to 'always take the right path' you go left. Immediately you find an enormous chest of gold and rubies. You stuff your pockets and wisely leave immediately.";		
		var secondResultStory = "What you had initially believed to be stalactites turn out to be the fangs of an enormous subterranean beast. Too late you remember your mentor has been dead for years. You barely manage to drag yourself out of the cave, arm held on by a few threads of sinew.";
		var thirdResultStory = "Your attempt to speak Rat is interpreted as an unpardonable insult in Ratese. A swarm of rodents engulfs you, and you flee to the entrance of the cave.";		
		
		
		//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
		var FirstResult = [firstResultStory, 1000000, 0, "Figuratively, not Literally", false];
		var SecondResult = [secondResultStory, 0, -100, "Hearing Voices", false];
		var ThirdResult = [thirdResultStory, 0, -20, "Lost in Translation", false];
		
		
		/*var eventArray
		
		key: 0: Story
			  1: FirstOption
			  2: FirstResult
			  3: SecondOption
			  4: SecondResult
			  5: ThirdOption
			  6: ThirdResult 											
													
													*/
		
		var eventArray = [Story, FirstOption, FirstResult, SecondOption, SecondResult, ThirdOption, ThirdResult];
		
		this.dungeonEvents[increment].push(eventArray);
		
		
		increment = increment + 1;											
		////////////////////////////////////////////////////	
		
		////////////////////////////////////////////////////
		

		if (!(increment in this.dungeonEvents))
			Vue.set(this.dungeonEvents, increment, new Array);
		
		
		var Story = "A large mausoleum looms in a graveyard beside the road. You decide to try your luck. The gate is unlocked, and you descend into the crypt, trying not to think about spiders.";
		
		var FirstOption = "Root through the sarcophagi";
		var SecondOption = "Use a stick to clear away the cobwebs";
		var ThirdOption = "Rethink your life choices";
		
		
		var firstResultStory = "The sarcophagus is empty except for a moldering skeleton. Somebody else seems to have been here first. As you turn to leave you spot a single coin clenched in the skeleton's bony fingers.";		
		var secondResultStory = "A spider the size of a large rat leaps out of the shadows and digs its fangs into your face. You manage to bat it off with the cobweb-covered stick and run screaming from the crypt.";
		var thirdResultStory = "You place a small offering of gold at the ancestor shrine in the center of the crypt and leave quickly. At the entrance, the ghost of a friendly kitten appears and begins following you, purring. You feel better about yourself.";		
		
		
		//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
		var FirstResult = [firstResultStory, 1, 0, "Was it worth it?", false];
		var SecondResult = [secondResultStory, 0, -20, "Arachnophobia", false];
		var ThirdResult = [thirdResultStory, -5, 5, "Purr-fection", true];
		
		
		/*var eventArray
		
		key: 0: Story
			  1: FirstOption
			  2: FirstResult
			  3: SecondOption
			  4: SecondResult
			  5: ThirdOption
			  6: ThirdResult 											
		*/
		
		var eventArray = [Story, FirstOption, FirstResult, SecondOption, SecondResult, ThirdOption, ThirdResult];
		
		this.dungeonEvents[increment].push(eventArray);
		
		
		increment = increment + 1;											
		////////////////////////////////////////////////////	
		
		this.maxDungeonEvent = increment;
		
		
		
		
		
		///////////////////////////////////////////
		//RETURN EVENTS
		///////////////////////////////////////////
		
		
		increment = 0;
		////////////////////////////////////////////////////
		

		if (!(increment in this.returnEvents))
			Vue.set(this.returnEvents, increment, new Array);
		
		
		var Story = "As you return along the road, the ground begins to tremble. In the distance you see a cloud of dust approaching. What do you do?";
		
		var FirstOption = "Climb the nearest tree and hold on for dear life";
		var SecondOption = "Stand your ground";
		var ThirdOption = "Pray";
		
		
		var firstResultStory = "You reach a safe height just in time. Hundreds of joggers rush past in a flash marathon, trampling foliage and tossing empty water bottles in their wake. After an hour the worst has passed, though a few stragglers continue to labor past.";		
		var secondResultStory = "As the cloud approaches, you glimpse the cause: a massive marathon of joggers! You are engulfed by the stampede and trampled for the better part of an hour.";
		var thirdResultStory = "A beam of light descends from the heavens, and you suddenly find yourself safe and sound back at the inn.";		
		
		
		//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
		var FirstResult = [firstResultStory, 0, 0, "Discretion > Valor, part 2", false];
		var SecondResult = [secondResultStory, 0, -50, "Legion", false];
		var ThirdResult = [thirdResultStory, 0, 0, "Divine Intervention", true];
		
		
		/*var eventArray
		
		key: 0: Story
			  1: FirstOption
			  2: FirstResult
			  3: SecondOption
			  4: SecondResult
			  5: ThirdOption
			  6: ThirdResult 											
		*/
		
		var eventArray = [Story, FirstOption, FirstResult, SecondOption, SecondResult, ThirdOption, ThirdResult];
		
		this.returnEvents[increment].push(eventArray);
		
		
		increment = increment + 1;											
		////////////////////////////////////////////////////	
		
		////////////////////////////////////////////////////
		

		if (!(increment in this.returnEvents))
			Vue.set(this.returnEvents, increment, new Array);
		
		
		var Story = "As you return home, a masked man leaps from the bushes, gibbering and waving a knife.";
		
		var FirstOption = "Perform a citizen's arrest";
		var SecondOption = "Run away";
		var ThirdOption = "Pray";
		
		
		var firstResultStory = "The man's flailing knife cuts your belt and your pants fall down. Then he knifes you in the kidneys and steals your purse.";		
		var secondResultStory = "You try to run away, but trip on a root and impale yourself on a fallen branch. The man stabs you for good measure and steals your purse.";
		var thirdResultStory = "A beam of light descends from the heavens, and you suddenly find yourself safe and sound back at the inn.";		
		
		
		//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
		var FirstResult = [firstResultStory, -(this.gold), -10, "Law and Order", false];
		var SecondResult = [secondResultStory, -(this.gold), -30, "Deja Vu", false];
		var ThirdResult = [thirdResultStory, 0, 0, "Divine Intervention", true];
		
		
		/*var eventArray
		
		key: 0: Story
			  1: FirstOption
			  2: FirstResult
			  3: SecondOption
			  4: SecondResult
			  5: ThirdOption
			  6: ThirdResult 											
		*/
		
		var eventArray = [Story, FirstOption, FirstResult, SecondOption, SecondResult, ThirdOption, ThirdResult];
		
		this.returnEvents[increment].push(eventArray);
		
		
		increment = increment + 1;											
		////////////////////////////////////////////////////	
		
		this.maxReturnEvent = increment;
		
		
		console.log("Road Events: " + this.maxRoadEvent);
		console.log("Dungeon Events: " + this.maxDungeonEvent);
		console.log("Return events: " + this.maxReturnEvent);
		

		//initialize										
		this.homeEvent();
		
	}, //end created
	/*
	watch: {
		eventnum : function(value, oldvalue){
			
			
		},
	
	
	},	
	*/
	
		
	methods: {
		
		//A template for adventures. Can be modified, duplicated for expansion plans
		startAdventure: function(){
			
			this.roadEvent();

		},
		
		roadEvent: function(){
			console.log("roadEvent called");
			
				//get a random road event -> set eventnum to random possible value.
		
					
				//set eventnum to random possible
				this.randomRoadEvent();
			
				//get the information from roadEvent[eventnum][0] - the choice
				/*
				var eventArray
		
			key: 0: Story
				  1: FirstOption
				  2: FirstResult
				  3: SecondOption
				  4: SecondResult
				  5: ThirdOption
				  6: ThirdResult 											
			*/
				
			
				this.story = this.roadEvents[this.eventnum][0][0];
				
				this.firstOption = this.roadEvents[this.eventnum][0][1];
				this.secondOption = this.roadEvents[this.eventnum][0][3];
				this.thirdOption = this.roadEvents[this.eventnum][0][5];
			
				this.currentEvent = 1; 
			
				//get information from roadEvent[eventnum][1] - the consequence
				//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
			
			
			
			
		},
		
		dungeonEvent: function(){
				console.log("dungeonEvent called");
				//get a random dungeon event -> set eventnum to random possible value.
		
					
				//set eventnum to random possible
				this.randomDungeonEvent();
			
				//get the information from roadEvent[eventnum][0] - the choice
				/*
				var eventArray
		
			key: 0: Story
				  1: FirstOption
				  2: FirstResult
				  3: SecondOption
				  4: SecondResult
				  5: ThirdOption
				  6: ThirdResult 											
			*/
				
			
				this.story = this.dungeonEvents[this.eventnum][0][0];
				
				this.firstOption = this.dungeonEvents[this.eventnum][0][1];
				this.secondOption = this.dungeonEvents[this.eventnum][0][3];
				this.thirdOption = this.dungeonEvents[this.eventnum][0][5];
			
				this.currentEvent = 2; 
			
				//get information from roadEvent[eventnum][1] - the consequence
				//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
			
			
		},
		
		bossEvent: function(){
				console.log("bossEvent called");
		},
		
		kittenEvent: function(){
				console.log("kittenEvent called");
		},
		
		returnEvent: function(){
			console.log("returnEvent called");
			//get a random return event -> set eventnum to random possible value.
		
					
				//set eventnum to random possible
				this.randomReturnEvent();
			
				//get the information from returnEvents[eventnum][0] - the choice
				/*
				var eventArray
		
			key: 0: Story
				  1: FirstOption
				  2: FirstResult
				  3: SecondOption
				  4: SecondResult
				  5: ThirdOption
				  6: ThirdResult 											
			*/
				
			
				this.story = this.returnEvents[this.eventnum][0][0];
				
				this.firstOption = this.returnEvents[this.eventnum][0][1];
				this.secondOption = this.returnEvents[this.eventnum][0][3];
				this.thirdOption = this.returnEvents[this.eventnum][0][5];
			
				this.currentEvent = 3; 
			
				//get information from returnEvent[eventnum][1] - the consequence
				//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
			
			
		},
		
		homeEvent: function(){
			this.currentEvent = 0;
			
			//Set story, buttons, etc
			this.story = "Home sweet home. The inn is still deserted, and the innkeeper has a sour expression." + 
								"The cat that usually perches on the counter is nowhere to be seen.";
			this.firstOption = "Start Adventure";
			this.secondOption = "Ask for a glass of water";
			this.thirdOption = "Buy a healing potion";
		
		},
		
		
		getRandom: function(min, max){
			min = Math.ceil(min);
			
			max = Math.floor(max);
		
			return Math.floor(Math.random() * (max - min + 1)) + min; //max and min included
		
		
		},		
		
		randomRoadEvent: function(){
			this.eventnum = this.getRandom(0, this.maxRoadEvent-1);
			
		},
		
		randomDungeonEvent: function(){
			this.eventnum = this.getRandom(0, this.maxDungeonEvent-1);
		},
		
		randomReturnEvent: function(){
			this.eventnum = this.getRandom(0, this.maxReturnEvent-1);
		
		},
		
	///////////////////////////////////////////////////////////////	
	//	CHOICE FUNCTIONS
	///////////////////////////////////////////////////////////////
	/*
	key: 0: Story
			  1: FirstOption
			  2: FirstResult
			  3: SecondOption
			  4: SecondResult
			  5: ThirdOption
			  6: ThirdResult 											
			*/
	
	//result array form : NthResult = [story, netGold, netHealth, Achievement, Kitten]
	
		firstChoice: function(){
			
			if (this.currentEvent === 0) 			//home event
			{
				//Start Adventure
				this.roadEvent();
			}
			
			else if (this.currentEvent === 1)	//road event		
			{
				this.story = this.roadEvents[this.eventnum][0][2][0]
				this.gold = this.gold + this.roadEvents[this.eventnum][0][2][1];
				this.health = this.health + this.roadEvents[this.eventnum][0][2][2];
				this.achievement = this.roadEvents[this.eventnum][0][2][3];
				this.kitten = this.roadEvents[this.eventnum][0][2][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				
				//chance to do another road event. Otherwise, call dungeon event
				//for now, just do dungeon event
				this.resume = true;
					
			}
			
			else if (this.currentEvent === 2) //dungeon event
			{
				this.story = this.dungeonEvents[this.eventnum][0][2][0]
				this.gold = this.gold + this.dungeonEvents[this.eventnum][0][2][1];
				this.health = this.health + this.dungeonEvents[this.eventnum][0][2][2];
				this.achievement = this.dungeonEvents[this.eventnum][0][2][3];
				this.kitten = this.dungeonEvents[this.eventnum][0][2][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				//chance for another dungeon event. Otherwise, call next event
				//for now just do return event.
				this.resume = true;
			
			}
			
			else if (this.currentEvent === 3) //return event
			{
				this.story = this.returnEvents[this.eventnum][0][2][0]
				this.gold = this.gold + this.returnEvents[this.eventnum][0][2][1];
				this.health = this.health + this.returnEvents[this.eventnum][0][2][2];
				this.achievement = this.returnEvents[this.eventnum][0][2][3];
				this.kitten = this.returnEvents[this.eventnum][0][2][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				//return 'home'
			this.resume = true;
				
			}	
			
			else //THIS IS A PROBLEM IF WE ARE HERE
			{
				console.log("YOU SHOULD NOT BE HERE: currentEvent out of bounds");
				this.story = "A DIMENSIONAL HORROR DEVOURS REALITY.";
			}		
			
		},
		
		secondChoice: function(){
		
			if (this.currentEvent === 0) 			//home event
			{
				//Drink
			}
			
			else if (this.currentEvent === 1)	//road event		
			{
				this.story = this.roadEvents[this.eventnum][0][4][0]
				this.gold = this.gold + this.roadEvents[this.eventnum][0][4][1];
				this.health = this.health + this.roadEvents[this.eventnum][0][4][2];
				this.achievement = this.roadEvents[this.eventnum][0][4][3];
				this.kitten = this.roadEvents[this.eventnum][0][4][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				
				//chance to do another road event. Otherwise, call dungeon event
				//for now, just do dungeon event
				this.resume = true;
			}
			
			else if (this.currentEvent === 2) //dungeon event
			{
				this.story = this.dungeonEvents[this.eventnum][0][4][0]
				this.gold = this.gold + this.dungeonEvents[this.eventnum][0][4][1];
				this.health = this.health + this.dungeonEvents[this.eventnum][0][4][2];
				this.achievement = this.dungeonEvents[this.eventnum][0][4][3];
				this.kitten = this.dungeonEvents[this.eventnum][0][4][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				//chance for another dungeon event. Otherwise, call next event
				//for now just do return event.
				this.resume = true;
			
			}
			
			else if (this.currentEvent === 3) //return event
			{
				this.story = this.returnEvents[this.eventnum][0][4][0]
				this.gold = this.gold + this.returnEvents[this.eventnum][0][4][1];
				this.health = this.health + this.returnEvents[this.eventnum][0][4][2];
				this.achievement = this.returnEvents[this.eventnum][0][4][3];
				this.kitten = this.returnEvents[this.eventnum][0][4][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				//return 'home'
				this.resume = true;
			}	
			
			else //THIS IS A PROBLEM IF WE ARE HERE
			{
				console.log("YOU SHOULD NOT BE HERE: currentEvent out of bounds");
				this.story = "A DIMENSIONAL HORROR DEVOURS REALITY.";
			}		
		
		},
		
		thirdChoice: function(){
		
			if (this.currentEvent === 0) 			//home event
			{
				//Visit healer
				if (this.gold >= 10)
				{
					this.health = 50;
					this.gold = this.gold - 10;				
				}
			}
			
			else if (this.currentEvent === 1)	//road event		
			{
				this.story = this.roadEvents[this.eventnum][0][6][0]
				this.gold = this.gold + this.roadEvents[this.eventnum][0][6][1];
				this.health = this.health + this.roadEvents[this.eventnum][0][6][2];
				this.achievement = this.roadEvents[this.eventnum][0][6][3];
				this.kitten = this.roadEvents[this.eventnum][0][6][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				
				//chance to do another road event. Otherwise, call dungeon event
				//for now, just do dungeon event

				console.log(this.currentEvent);				
				
				this.resume = true;
			}
			
			else if (this.currentEvent === 2) //dungeon event
			{
				this.story = this.dungeonEvents[this.eventnum][0][6][0]
				this.gold = this.gold + this.dungeonEvents[this.eventnum][0][6][1];
				this.health = this.health + this.dungeonEvents[this.eventnum][0][6][2];
				this.achievement = this.dungeonEvents[this.eventnum][0][6][3];
				this.kitten = this.dungeonEvents[this.eventnum][0][6][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				//chance for another dungeon event. Otherwise, call next event
				//for now just do return event.
				this.resume = true;
			
			}
			
			else if (this.currentEvent === 3) //return event
			{
				this.story = this.returnEvents[this.eventnum][0][6][0]
				this.gold = this.gold + this.returnEvents[this.eventnum][0][6][1];
				this.health = this.health + this.returnEvents[this.eventnum][0][6][2];
				this.achievement = this.returnEvents[this.eventnum][0][6][3];
				this.kitten = this.returnEvents[this.eventnum][0][6][4];
				
				
				console.log("Story: " + this.story);
				console.log("Gold: " + this.gold);
				console.log("health: " + this.health);
				console.log("Achievement: " + this.achievement);
				console.log("Kitten: " + this.kitten);
				
				//return 'home'
				this.resume = true;
			}	
			
			else //THIS IS A PROBLEM IF WE ARE HERE
			{
				console.log("YOU SHOULD NOT BE HERE: currentEvent out of bounds");
				this.story = "A DIMENSIONAL HORROR DEVOURS REALITY.";
			}		
			
		},
		
		resumeAdventure: function(){
			if (this.currentEvent === 0) 			//home event
			{
				//should do nothing, not appear
			}
			
			else if (this.currentEvent === 1)	//road event		
			{
				this.resume = false;

				this.dungeonEvent();
				
			}
			
			else if (this.currentEvent === 2) //dungeon event
			{
				this.resume = false;
				
				this.returnEvent();
			
			}
			
			else if (this.currentEvent === 3) //return event
			{
				this.resume = false;
				
				this.homeEvent();
			}	
			
			else //THIS IS A PROBLEM IF WE ARE HERE
			{
				console.log("YOU SHOULD NOT BE HERE: currentEvent out of bounds");
				this.story = "A DIMENSIONAL HORROR DEVOURS REALITY.";
			}	
		
		},
	
	
	},//end methods
	
	
	
	
	
	
	
})
