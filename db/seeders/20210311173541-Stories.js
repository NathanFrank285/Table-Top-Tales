Seed data for stories:
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Stories', [
      {
        title: `My First Time`,
        body: `
            So there I was, rowing my rowboat in the middle of the ocean. I had been on the run from my lovers' father who wanted me to pay child support for my 5 kids. I didn't have the gold so I took the town fishermans' row boat and just kept going. I rowed for 3 days and three nights before passing out from exhaustion.\n
            When I awoke I saw an incredible sight above me. A clockwork flying craft was in the middle of a battle with a large red dragon. The dragon was getting the upper hand and I thought, "I can help." My desire was misguided at best. I pulled out my Elven crafted longbow and enchanted one of my arrows with fire and let er loose. Well, my bow string snapped and I found myself on fire. You would think, being in the middle of the ocean, I would jump into the water. I did not. I fixed my bow while still on fire. Enchanted another arrow while still on fire. I aimed for the dragon, while still on fire. I fired my bow, and the string snapped. Not only was I on fire, my row boat was on fire. I finally decided the boat was a lost cause and leapt into the water. I was burnt, wet, and in pain.\n
            I looked up and the dragon was gone, but the plane was coming right for me. I swam as fast as my tired body could take me. I swam for what felt like an hour. Behind me I heard a crash as the clockwork craft dove into the water and broke apart. After a minute 3 figures surfaced from the wreckage. I swam to them and introduced myself. "What a fight you guys had, my name's Jerry Botchugalupo, I was rowing my boat when I saw…" I didn't get to finish my sentence as the Dragonborn punched my right in the nose. I was out like a light.\n
            The next thing I remember is waking up on an improvised raft surrounded by a human, a clockwork being of some kind, and the Dragonborn that punched me out. They questioned me and I told them the truth, I was running from my responsibilities. They told me that they owed the dragon 50 million dollars and tried to, "dine and dash" as they put it. They said they needed a 4th party member because their last guy got his head cut off. They promptly showed me his severed head they kept in in a sack. I vomited.\n
            After blowing what felt like 7-8 chunks I agreed to join them on the condition that one of them would teach me to shoot a bow properly. They explained that none of them used bows. I joined them anyway. We rowed this makeshift raft for 2 more days before reaching land. I kissed the ground and felt the sand in my hands. And that is the story of how I joined my first adventuring party.
        `,
        picture: `https://cdn.discordapp.com/attachments/353381815869898752/819387858141315122/Dragon_vs_Plane.jpg`,
        userId: 1,
        hook: `So there I was, rowing my rowboat in the middle of the ocean...`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: `Cosmic Horror`,
        body: `
            So this was my first game of the Delta Green RPG. I was super excited cause I listened to my favorite podcast play the game and it seemed awesome. I checked the discord for the pod and saw a fellow listener was putting together a one-off of a scenario and I jumped at the chance to play. He helped me figure out a character idea and I ran with it.\n
            Tim Hightower is a deputy sheriff in California. He was working a crime scene when he saw some things he shouldn't have. Delta Green found out and recruited him. So this mission was both mine and my character's first mission.\n
            The team was called to Yosemite national park. A young boy named Brandon was found by a park ranger there. He had been missing since the 1970s. We met up in Sacramento and drove to the park. It began to storm heavily as we arrived. We spoke to the park rangers to try to gather some info and then spoke to the boy himself. He looked like he was still 6 years old but should've been 50 by now at least. We were stumped. He had weird markings on his body and a raised spot on the back of his neck. He was terrified of fire and refused to bathe when one of the rangers tried to clean him up.\n
            The rangers said he was found near a part of the forest called "The Devil's Chair". It is a natural rock formation that resembles a chair. We decided that would be our next stop. Before we could head out though the storm had picked up. We had a choice between 2 ATVs or one of the Jeeps. I would regret this decision later but we chose the ATVs.\n
            We set out, 2 people on each 4-Wheeler. About half the way to the site one of our vehicles was bogged down in the mud. As we attempted to free the ATV a pack of wolves descended on us. Luckily, we were smart enough to bring weapons and fought them off easily. We freed the 4-Wheeler and continued.\n
            When we reached The Devil's Chair we spread out. 2 of us searched the formation while the other 2 looked around the adjacent forest. I was on the Forest team. While looking around we saw a small child sitting under a tree. We both ran to the child and realized he looked exactly like the Brandon that was back at the ranger station. I picked him up and my partner gasped. I looked to my right and saw a 15 foot tall humanoid creature. Before I could react I was flung into a tree. "Brandon" was killed instantly and the creature vanished.\n
            As I lay against the tree, stunned and in pain, we received a radio message from the rangers. "We need help, something is happening…" The radio turned to static and we couldn't raise them again. I hobbled onto the back of an ATV and we headed back to the station. 5 minutes into the trip, small pale creatures started running out of the forrest all around us. The two guys in the front crashed into a tree and were swarmed quickly. I told my partner to floor it. He flipped the ATV and we were swarmed by these things as well. We quickly realized they were small pale children with black eyes. Tim Hightowers last words were "Run Todd." His last action was putting his gun to the head of one of these things and blowing its brains out. The last feeling Tim Hightower felt was pain as he was eaten alive.
        `,
        picture: `https://cdn.discordapp.com/attachments/353381815869898752/819399460047421470/Forest.jpg`,
        userId: 1,
        hook: `Cthulian horrors are nothing to trifle with.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: `Deadlands is a game`,
        body: `
            So this story takes place in a Savage Worlds, Deadlands game. My character is a gambler named Anna McKnight. My party and I found ourselves working for a rancher in the middle of New Mexico. How we ended up there is an entirely different story.\n
            So our very first gig for this guy was to go out and try to find some of his missing cattle. Well none of us had any skill in survival so the first day was a bust. We ended up back at the ranch with empty bellies and no cattle to show for it.\n
            Round 2, Fight! We headed out in the morning and were lucky enough to find 2 of the missing cows. Guess what? None of us had any skills in cattle wrangling. We were lucky enough to catch one cow. One of my party members was able to get a lasso on the second but was dragged 300 feet trying to keep hold before we caught up and wrangled the cattle as a group.\n
            #Thankgodthat'sover. #Itwasnotover. We started to bring the cows back to the stable but, as I said before, none of us had any survival skills. #Lost. After spending most of the day trying to find our way back we ended up in a copse of trees. Stopping to take a break in here meant we were ambushed by a giant spider and a spider swarm. #happyday. The giant spider latched onto one of our two cows and the swarm jumped on our resting party.\n
            We quickly gathered our weapons and spread out. I started shooting at the giant spider in an attempt to save the cow. It didn't work and the spider drained the cow. I got a few hits on it before it jumped on my character. As I "Tactically Withdrew" one of my teammates was able to critically wound it and finished it off. The swarm was another story.\n
            Quick question, how do you damage a swarm? Cause we didn't know at the time. After failing at several different attempts, our drunk threw a bottle of tequila at it and shot the bottle, thus, lighting the swarm on fire. That killed it pretty quickly and we were able to save one of the cows.\n
            So what did we learn today? If you see a spider swarm, light it on fire.

        `,
        picture: `https://cdn.discordapp.com/attachments/353381815869898752/819403999769788417/Giant_Spider.jpg`,
        userId: 1,
        hook: `If you see a spider swarm, light it on fire.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: `The day we sacrificed a child`,
        body: `
            I've always had great times playing games with my friends. My friend Bryan is a great GM, always on top of the flow of the game, carefully weighing players choices and always thinking of new ways to put us in satisfying situations.\n

            This game was not like that at all. See this time we had a different GM, Bryan no longer in the hot seat; this time the game was hard, no longer about wonder and excitement. This was about sustaining mental fortitude through precarious and oft times emotionally tasking situations.\n

            We were part of Delta Green now. All previous morals are disregarded, we had no idea what we were up against.\n

            Long story short we discovered mole men have been abducting children by an outpost in the Yosemite National Forest; not so crazy probably something you've heard before. But get this, the children never aged and there were multiple of the same child. And they had psychic properties well beyond the power to throw a grown human across the room with considerable force. We had to get our contact out, the child we found had to get to our containment site.\n
            While we were thinking of ways to get our eagle to the nest, the mole men knew our location and already destroying the building we were in. We had to move quick so we threw our target into the car and sped off.\n
            So there we were, me and my buddy just trying to escape the mole men.\n
            Escaping worked until our drive checks failed and we were swarmed by creatures of small light bodies. They swarmed the car, we shot a few but we were quickly overwhelmed. If we didn't do something quick we were dead and the mission would be a failure.\n
            The mole men were approaching, the small creatures converging still.\n

            We had no other option.\n

            We threw the child outside and allowed the smaller creatures to take him back to the tall mole men.\n

            We could hear the pleas, the cries for help. The wailing and helplessness.\n

            There was nothing we could do sans killing ourselves. With the ruckus over, as we steadied ourselves we realized what we had done and as it washed over us we failed our sanity checks.\n

            But it wasn't over.\n
            We still had witnesses left alive at the scene of the incident. There was still work to be done.
        `,
        picture: `https://cdn.discordapp.com/attachments/780620654185152533/819611642592624651/1956themolepeople5a.jpg`,
        userId: 2,
        hook: `So there we were, me and my buddy just trying to escape the mole men.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
