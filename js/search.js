// When the user clicks on the search box, we want to toggle the search dropdown
function displayToggleSearch(e) {
  e.preventDefault();
  e.stopPropagation();

  closeDropdownSearch(e);
  
  if (idx === null) {
    console.log("Building search index...");
    prepareIdxAndDocMap();
    console.log("Search index built.");
  }
  const dropdown = document.querySelector("#search-dropdown-content");
  if (dropdown) {
    if (!dropdown.classList.contains("show")) {
      dropdown.classList.add("show");
    }
    document.addEventListener("click", closeDropdownSearch);
    document.addEventListener("keydown", searchOnKeyDown);
    document.addEventListener("keyup", searchOnKeyUp);
  }
}

//We want to prepare the index only after clicking the search bar
var idx = null
const docMap = new Map()

function prepareIdxAndDocMap() {
  const docs = [  
    {
      "title": "Colophon",
      "url": "/improv-living-guide/colophon.html",
      "content": "Colophon This book is edited using GitBook, an online and desktop tool that helps with writing a book by using Git as the storage backend."
    } ,    
    {
      "title": "Common Mistakes",
      "url": "/improv-living-guide/common-mistakes.html",
      "content": "Common Mistakes Here’s a collection of behaviors one is likely to see with newer improvisors. If they happen with more experienced improvisors, I think it’s a crime they weren’t coached out of these behaviors. Some people say there’s no “right” or “wrong” way to improv. I don’t think this is true. Improv isn’t a random collection of responses. There are some moves that are stronger or weaker or more helpful than others. So maybe there isn’t a 100% wrong or 100% right, but there is some form of value judgement and ordering of potential moves. Not caring hard enough Improv, in reality, is incredibly low stakes. There are no props, no costumes, no script, and no budget. Therefore, it is important to contour what you do have (imaginary props and imaginary scripts) with importance. Treat things importantly. Often times, newer improvisors will drop bombs like “I’m being taken away in a spaceship” or “my dog just died” but the subsequent reactions won’t match. If any of those things were said in real life, the reactions would be way more different and intense. If a bomb is used, it’s important to honor that bomb. Even if it isn’t a bomb (e.g. “check out my blue shirt”), it is important by virtue of being in the scene. Otherwise we’re losing out on opportunities for discovery or at worst we aren’t listening to what our scene partner is really saying (i.e. if the statement was an oblique suggestion to start a game). Exercise from Bianca: Do a spit take (i.e. extreme reaction) in response to some mundane response. Status fighting Many scenes can be boiled down into a status dynamic of high and low. The lack of clarity in a scene can be caused by the improvisors not knowing or not agreeing who the high and low status characters are. A symptom of this is when one character pitches an idea to the other, but the idea is met with skepticism rather than with acceptance. (Of course, the acceptance can be in the form of a rejection from the perspective of the character, in addition to a straightforward acceptance). Debating This might be the same as above. Playing indifferent Organic contributions like “check out my blue shirt” might be ignored completely. Or even intentional bombs could be ignored. Or maybe the responding improvisor is choosing to play a character who is indifferent. This is very hard to play. Characters should always care. Back to providing contour. Playing externally Lots of improvisors like to talk about people who aren’t there (e.g. “my boyfriend Steve”). A scene is more active if the relationship being discussed is right there, between the two characters on stage. The one exception to this rule is if the offstage character is of inordinately great importance and affects the onstage characters in a significant way. This is more appropriate for narrative forms where the offstage character has a higher likelihood of being portrayed. Also the constant talk of external factors sets up an expectation to the audience that this will be realized in some way (i.e. seeing said boyfriend in the next scene). Pitching ideas Boring scene content. Talking about future plans Similar to above. Replace in favor of active scenework (do the thing you are talking about and deal with the aftermath). Being surprised There are times when it is okay to be surprised in a scene, but the difference is subtle. Most times, being surprised is the actor being hesitant of the idea. By default, all behaviors and gifts should be mundane and habitual. If it is revealed that a character loves sky diving, that is only a reveal to the audience, not to the characters on stage. Surprise as characters should only come after a foundation has been developed."
    } ,    
    {
      "title": "Diversity",
      "url": "/improv-living-guide/diversity.html",
      "content": "Diversity Type-casting It bothers me when females are made mothers and older improvisors are made grandparents. Ideally everyone could be everything. Male, female, young, old. Overly white names A teacher at camp had pointed out that improv names tend to be overly white."
    } ,    
    {
      "title": "Exercises",
      "url": "/improv-living-guide/exercises.html",
      "content": "Exercises Pointies Everyone stands in a circle. The starting person points to someone and says a word. The next person points to another person and says another word. Repeat until a pattern is established with where the words are coming from and that everyone has a word and a person to point to (should repeat in a circle). Reset and repeat with another set of words and different targets. Try to sustain two sets of words simultaneously. Up to three. Class callbacks During a recent UCB class, we used the last 10 minutes of class to do callback scenes inspired by anything that happened during that class. I think this is a great way to introduce the idea of callbacks and to have students exercise their memory muscle by having the callback window span the entire class. Mapping realism Play out each row, first as a straight scene (no comedy), then again with the same level of gravity but discussing something else. Straight Twist Ex-lovers running into one another at the supermarket Strangers who just met minutes ago in the parking lot, running into one another at the supermarket A couple discussing a breakup Two people discussing a change in laundromat A confrontation over cheating in a relationship A confrontation over cheating in a diet Two people meeting as college roommates Two people meeting as jail cell mates Marriage proposal Asking to finish one’s burrito Coming back from war Coming back from the DMV Confessing about a drunk kiss Confessing about drunkenly purchasing a yacht Standing over a father’s open casket Standing over a party sub that has been eaten My exercises Repeat repeat Two person scene (whatever) but each actor repeats their line. Goals: stick to the exact wording you use use emphatic/non-verbal delivery cast out short, repeatable gifts (prevent rambling) One word responses Initiator does normal dialog. Responder only reacts using one word from what was just say. Can include small words or phrasal, but don’t get crazy. Maximum stop Player one, ready to ramble and improvise non-stop about something. Player two, ready to interject with small things, possibly unrelated, like I need a tissue. Goals: do not keep going after someone has interrupted/tagged you. Gift ping pong Player one give gift. Player two accept and ellaborate (ramble). Player two give gift. Goals: unrelated. No narrative, no world, no relationship. Think expansive. Accept and generate. Emotional reactions Player one confess. Player two emotionally react. Can be preloaded or organic. Blind initiations From UCB 401 Each side come up with an initation based on a suggestion. Both sides say them and have to retain as much true as possible. Jedi mind trick From UCB 401 One person improvises and the other person labels. “You are doing this right now.” or “You feel like this” etc."
    } ,    
    {
      "title": "Favorite Shows",
      "url": "/improv-living-guide/favorite-shows.html",
      "content": "Favorite Shows Here are some my favorite shows in the city. Spoiler alert, they’re all at the Magnet Theater! Musical Megawatt Every Tuesday night, Magnet’s eight musical house teams perform (two teams per hour block). The great number of house teams is a great testament to Magnet’s commitment to being the leader in musical improv. I used to overdose on this show and watch everything. Sometimes you can’t help yourself because the improv is that good. Each team also has their own style. You won’t be watching eight musical Harolds. Friday Night Show Before each show, the theater collects written, anonymous confessions into a bucket. Then to inspire scenes, improvisors take slips from the bucket and read them aloud. As the night progresses, callbacks and remixes happen more frequently. I really love the speed of this show. And it’s filled to the brim with some of Magnet’s best and fastest players. Sometimes I wonder if they’re really reading the slips or making things up. Sometimes they read full sentences! Small handwriting from the audience? Premiere Instructors and senior musical improvisors take the stage for one full hour. It’s like a powered up version of Musical Megawatt. Megawatt performances can sometimes feel rushed at 25 minutes. Premiere on the other hand has the luxury of time, so they can explore characters and the environment more fully and even engage in more games that don’t move the plot forward. If you’ve never seen musical improv (or want to show it to someone else who hasn’t) and you can only see one show, this is the one. Trike Fast two-person improv. The way they handle digressions and edits has been likened to cutaways in Family Guy. It’s impressive to see two performers hold up an entire universe of characters and navigate through them with breakneck speed."
    } ,    
    {
      "title": "Forms",
      "url": "/improv-living-guide/forms.html",
      "content": "Forms The Harold Jeremy Bent: Think of the Harold as a pyramid. Spend the most time in first beats (width?) and the least time in third beats (over 20s too slow) Expansion Harold Harold. But the second beats can happen in any order. (Is this a property of any Harold?) The Montage As taught at Magnet’s Level 5 Conservatory. Not to be confused with a musical montage. Eight players Four first beat two-person scenes Each with an early/first line absurdity Second beat heightens with the same characters, walk-ons allowed Third beats are freestyle The Expansion As taught at Magnet’s Level 5 Conservatory. Not to be confused with the expansion harold. Eight players Three first beat scenes Played for maximal realism (the complete lack of absurd or melodramatic elements) How would you really react in real life? Second beat follows one character with the most heat/drama beside a new character with high social value Third beats are freestyle Pinata Level 6 long, opening scene second beats third beats think of entrances as new scenes, new energy. Let energy of the scene be affected and change. everyone shift focus to new character more “distant” than normal scenes. okay to talk about foreign problems. pretend as if prompt was “so what’s up with you”. what is your idle character bitching about? suggestion is location that can fit on the stage could be a more oblique interpretation e.g. library =&gt; back room of library don’t link back new people in the new entrances to existing things/problems with the first characters JTS Brown Peter: Every scene exit is a new scene (from the current physical positions)"
    } ,    
    {
      "title": "Freestyle Love Supreme",
      "url": "/improv-living-guide/freestyle-love-supreme.html",
      "content": "Freestyle Love Supreme On Wednesday, January 8, 2019, I saw Freestyle Love Supreme during their last week of shows. No major guests other than the guest female beatboxer. Structure of show Our electronic devices were put in faraday bags for us to hold on to, so everything is from memory or are baseless assumptions. Most of the rap is not sung. But during the very structure-free musical improv sections, the lyrics can be sung and not even rhyme, to help provide texture or plot. Mic check I’m assuming not a real mic check but they layer on their entrances and identify themselves as “mic one” or “mic two” etc. The parts of the polyphony are simple and likely improvised. Ramps and ends. Free rap Suggestions taken from the audience, scanned by section (e.g. left, right, center, mezz left, etc). No structure, whoever feels inspired to step up and demonstrate. My suggestion “SQUEEZE” from the center mezzanine was taken as the first suggestion of the show. But all the performers would continually honor other suggestions as they chose/remembered. Suggestions from a bucket Bucket was seeded (left and right side of the stage) before the show started. One rapper (UTK) cyphers based on the suggestion from the bucket. Someone else pulls out suggestions from the bucket and they are always delivered on beat 1 of a new couplet. Gets faster and faster for difficulty. Maybe close on a reference to the first suggestion. Things you hate Suggestions solicited from the audience with an MC (Two Touch). Rappers free to choose. MC rejects (or just scans more) politics, overly sexual content, etc One suggestion per rapper. Trappy beat. Two couplets, a drop, two more couplets. Per rapper. Cycle around again, but one couplet only, drop, then couplet. Third cycle, one couplet each (no drop) Ends with a comedic button from the MC. Demonstrated on Jimmy Fallon https://www.youtube.com/watch?v=_nERNNOtll0 Note, paper from bucket spread across floor as confetti atop each rapper (on their first drop) Life regrets MC solicits stories from the audience. Gives personal story then offers “headline”. This part the audience did not understand. Headlines are to help the MC scan for interesting stories. Give us a moment in life that you regret and wished you could replay. Chosen story was daughter’s father burying the neighbor’s cat. Story is framed as a record playing (beatboxer miming). Improvised structure-free musical is done. Some singing, some rapping, some non-rapping. Beatboxer framer rewinds record and musical is played backwards quickly. Second, faster, shorter musical is played out with pivotal moment replaced with something else. There seem to be signals of when improvisors want to offer up scene changes or suggesting when to move on to the next major signpost of the story. Probably just being loud and repetitive up stage. Things you love MC scans for interesting word of something people love (was “detention”) Musical director (new, fourth seat) invited up to sing. R&amp;B, bongos, lounge vibe Freestyle chorus is set revolving around repetitive use of the key word Each rapper raps a true story inspired by that word Between each rapper, chorus setter calls back chorus melodically but freestyles short jokes and commentary based on the previous rapper Ends organically on guest chorus If the rapper can sing (Aneesa), this is where more singing can be done. Demonstrated on previous FLS comedy project on YouTube Day in the life MC scans for person with interesting day. Must be specific, 5-7 people (to provide backline something to do), but not “30 people” or something generic. Over 18, sober. Musical improv set done based on person’s day Closing Ends on mic check song callback Evergreen Suggestions on the floor free to be picked up at any time during the show and used"
    } ,    
    {
      "title": "General tips",
      "url": "/improv-living-guide/general-tips.html",
      "content": "General tips I notice a lot of the same behavior and situations among more novice improvisors. Face the audience. One of the most jarring things in novice improvising is not understanding blocking or lines of sight. When doing with other people, the orientation should almost always be lengthwise so that the audience can see everyone. No one should be standing in front of someone else and no one’s back should be to the audience. A more advanced version of this is if there is a wall that objects need to be pulled from, the wall should be the audience wall, not the back wall. This style minimizes how much of your back the audience sees and gives them more insight into what objects you are getting. Listen more. A lot of the way novice improvisors play is probably in the mindset of “what can I bring to the table”. It’s very active. But sometimes it can get off the rails if all the improvisors in the scene are just contributing but not reacting. One very simple rule which I think should be enforced is don’t talk over one another. If one performer is talking over another, there’s a high likelihood that the second person isn’t listen to the first and is just rushing to get their deal out. Another is react to what the other person just said. Exercising patience and letting people speak isn’t everything. It’s also about internalizing what the other performers are saying and having your character react. Otherwise it’s just two people still talking past one another, just in a more polite, slow way. Get out the who and where. I would bet money that scenes that don’t go as well suffer from a lack of clear relationships and environments. Getting them out early can only help. It gives you more to chew on and reduces the likelihood of inventing wacky things. Play real, don’t invent. Novices seem to feel this pressure to invent or say wacky things to inject funniness into scenes, rather than discovering what is fun or using a much more organic contribution. I think coaching students to default to playing real and reacting realistically will lead to more palatable scenes and even stronger performers in the future. Commit harder. If there’s one thing that separates mediocre improv from transcendent improv, it’s commitment. Playing emotionally detached (as a character) seems to be a weak move most of the time. And playing detached as an actor is just bad acting. This also applies to object work. Nothing worse than seeing an impossibly tight grip on an object or having it vanish and reappear because the improvisor is just letting it go randomly. It’s hard to play musical scenes, especially those involving singing and dancing, with less commitment. Musical improv teachers have said, even if you do bad ballet, you need to commit hard. No one wants to watch self-aware, apologetic ballet (“sorry I’m so bad at this”). Simplify your choruses. A lot of people get into verbal diarrhea when they panic. This tick can be particularly unhelpful during the setting of a chorus. One challenge I like posing to people is how much can they sing with as few words as possible, most likely in an AAAA format. A simple lyric still leaves a lot of room for melodic and dynamic choices. Establish points of view faster. Textbook musical trios usually have three distinct points of view. Sometimes trio-oriented scenes devolve into much longer, meandering scenes. If the improvisors know that the scene on deck is meant to be a trio (as in the fairy tale narrative), then the goal should be to establish three points of view as fast as possible. Quips make it personal, make it matter if you’re going to go to crazy town, take the local feed the wolf (doug widick) if there is a game installed, push that button; invest"
    } ,    
    {
      "title": "Hip-hop",
      "url": "/improv-living-guide/hip-hop.html",
      "content": "Hip-hop The great Katy Berry once said… improvised hip-hop is the new frontier for musical improvisors. Doug Widick: train that muscle. can’t choose between hot and cold if the skill is only a dripping faucet there are different muscles. e.g. more structured/planning/lily pad vs straight free flow (no context) “repetition is the mother of learning” ?? (is supported by SRS theory) Thinking Thinking of your rap more as a structured poem rather than as a story of unlimited words. This helps combat rambling or missing the beat. allow the rhythm of the hook to inspire the rhythm of the verses think of rhyming less intellectually and more about the raw sounds made with your mouth (more flexible rhymes) Exercises Beastie rap Circle up. Person drops an A line. Group reply with “da dada-da. dada dada da.” Next person does one A line. Dada again, etc. Back to first person will also close with another A line. Next person drop a B line. Hard mode: drop the dadada’s and go straight to the next person. Goals: set up your context so the room can guess your word Hate/Love 8 bars about something you feel passionately about Cypher Freestyle continually. Organically take focus away from the current person. Topics Topic is thrown at you. Continually freestyle until another topic is thrown at you. Up to 3x per person. Then switch to another person. Topics can come from anywhere (student/teacher). Pull up Invented by Megan Reilly? pull up x9, high energy “i’m pullin up on the X” could be AAAA rhyme or AABB challenge mode: more syllables challenge mode: with character affectation Pass the clap into scenelete pass the clap organically claim it and start a scenelette with intro “I am X” everyone repeat “you are X” have one description line like “i like do Y” everyone repeat “you like do Y” repeat intro, everyone repeat intro, keep passing clap You Are first person “finishes” a block, gifting “you are” to the next person, doing 4 bars second person accepts, starting with “i am” (optional), 4 bars second person gifts a new person, etc mode 1: done in a circle challenge mode: non-linear pass around (so that people have to listen) Tell us about your week Hook is “tell us about your week”. 8 bars about your week. This without the that (double) Person A’s last word is Person B’s first word. The rhymes are on both pairs. A: A cheese without the wedge is like the bees without the hedge. B. The hedge without the grass is like the ledge without the crass. Character wheel Person in the middle to be “it” First random person, offer a facial expression Second random person, offer a physical form, posture Third random person, offer a vocal sound Monologue as character Beatboxer comes in, do 8 bars in character Bounce back “i’m say a line bounce back (bounce back!)” definitely repeat yourself during bounce back hand off is split between people e.g. ABBC (one person) Onomoetoepeia first line “X is, an onomotopoeia” (optional, but should be establishing line) finish 8 bars hook is “x, that’s an onomotopeia” Rhythm first establish a unique rhythmic pattern first level zero: freestyle poetry to it, no rhyming level one: rap to that pattern (four bars) Forms Musical initiations Beatboxer first (to free form) Hook first within scene Hook first from backline Verse first within scene toggle rap: person within scene makes clear initiation of beat drop, does one verse structure is supported when second person DOES NOT rap, and beat goes away. person continues to talk and heighten first person resumes by signaling and dropping another verse, etc Song forms Hook, verse, hook, verse, hook (for two person scenes) Hook is 4 lines (or 8 if half lines) Verse is 8 bars Can split verses in group scenes Group game initiate as homogeneous drop (we’re all dentists) with hook sandwich verses with hook each verse heightens third vs can be normal heighten or absurd heighten if absurd heighten, team steps in to cut beat and talk them off the ledge then signal to drop last hook with beat Opening Documentary Team of five organically broken out into two pairs and a single. Vary stage “heights”. One at a time do character pair monologue. Second beat a little faster. Third cycle drop beatbox and each raps. One person does a verse, one person does a hook. Single person does same length of bars as the pair. Trio everyone overlay."
    } ,    
    {
      "title": "Improv language",
      "url": "/improv-living-guide/improv-language.html",
      "content": "Improv language Often times in improv, there are devices or tropes that have a much higher occurrence in improv than in real life. Exposition The vocative. Mom, Dad, Billy. Prepositions. In this library. In this park. Explicit descriptors: As your therapist, I feel Pull the trigger We shouldn’t be subtle or nice unlike in real life. We need to pull the emotional trigger to add transparency and drama. “You’re being a dick right now!” should happen more on stage than in real life. Game patterns “Don’t do this” means “please do more of it so we can play a game using this button”. Bad patterns Using bombs like cancer, spaceships, or divorce and reacting to them in an indifferent or jovial way. Subtext Answering a question that wasn’t asked. A: Hey, what do you think of this dress? B: She doesn’t want to get back with you. My exercises Practice the following phrases. Repeated emphatically until organic improv spills out. “In this PLACE” e.g. in this library, in our home, in this classroom “We are RELATIONSHIP”, e.g. we are brothers, we are lovers, you are my teacher “I feel X”, e.g. I am mad at you, I am sad about “Don’t do X”, invite other improvisor to do X more “Are you X”, invitation to say yes to gift “I don’t want it” means give it to me Especially for “I feel”, goal is to get comfortable using improv language that is not subtle, not coy. “Are you X” should be played as a “yes” but can be played with light/denial (ultimately is a YES to both improvisors) Likewise, being defensive about something ultimately means you lose. Let us see how you lose.”"
    } ,    
    {
      "title": "Improv",
      "url": "/improv-living-guide/improv.html",
      "content": "Improv Improv that feels hard to do as a performer will feel hard to watch by the audience. Unprepared One thing that struck me odd about intro to improv classes is that you get up to perform straightaway. There’s never any handholding about projecting your voice, where to look, how to stand. Theater It still feels weird to meet to look at improv as a part of the overall theater scene. It often feels like it’s own bubble. But there are tons of actors who do improv to enhance their careers. I’ve thought of taking an acting 101 class to see how it would affect my improv. A UCB teacher once remarked about playing realistically in improv, “The worst you can do is a piece of theater.” Realism helps ground the crazy and give it its inherent funniness. If everything is crazy, the audience can’t follow along or won’t buy into the reality."
    } ,    
    {
      "title": "Improv: A Living Guide",
      "url": "/improv-living-guide/",
      "content": "This is a microsite."
    } ,    
    {
      "title": "Initiations",
      "url": "/improv-living-guide/initiations.html",
      "content": "Initiations Organic Let the actors sit and stew in the space. Establish eye contact with your scene partner. Organic chairs Place chairs in a random location on the stage. Same as above. Hit one The big two are relationship and location. “Let your where give you a who” Relationship can do two things. Inform your character details or inform your dynamic. How do you feel, high or low status, etc. Peter style In Magnet’s conservatory, Level 5, you learn a much more patient style. You immediately follow the initiating partner out on stage, but you exist on stage as a fully formed, fully informed bored character. Contrast with the usually blank/thirsty scene partner that is waiting for their scene partner’s initiation. In this style, you are ready to exist as yourself, in a fully-formed idle state, free of “wonder”, free of anticipation of outside stimulus. And then you react. Even if you have an idea from the onset, acknowledge your scene partner’s current position/attitude and let it inspire you. Let it fit in your world, as opposed coming in hot with a very heady suggestion and having to figure out how to get there."
    } ,    
    {
      "title": "Introduction",
      "url": "/improv-living-guide/introduction.html",
      "content": "Introduction As a student of improv, I can’t help but notice the abundance of knowledge passed around the improv community. Most of it never gets written down, or when it does it remains in one student’s notebook never to been seen again. This digitally created book is an attempt to aggregate, document, and share my experiences with improv. And it gives me an excuse to explore the world of open source books. Think of it less as a traditional book but more as a living, ever-evolving collection of notes and scattered thoughts arranged into book format. The views expressed in this book are solely those of the author and do not represent the views of any theaters or parties that may be mentioned within. About the author Mark Canlas is a software engineer and improvisor living in New York City. He has studied improv and musical improv at UCB, Magnet Theater, The PIT, and Reckless Theatre. He has been featured in Magnet’s Summer 2017 Circuit on Team Boomhauer and in Thank You For Coming Out, a show that celebrates the LGBTQ community. http://www.markcanlas.com/ @markcanlasnyc on Twitter"
    } ,      
    {
      "title": "Listening",
      "url": "/improv-living-guide/listening.html",
      "content": "Listening Non-verbal contributions At Camp Magnet 2019, in Rick Andrews workshop, he often parroted back initiations that he heard, but only focusing on the intonation and not the words. (as a means of finding deeper context) Character chorus I’ve heard (that students are told) that characters should always have “a deal”. I heard one that that this could also be like a musical chorus. That if your character has a deal or philosophy, it should probably be repeated a handful of times, just like a musical chorus. I think this is less helpful when the scene does not call for differentiation (e.g. group scenes). Maybe every character can have a deal, but it doesn’t need to be expressed explicitly (in that it might interfere with or derail the principle dynamic). Sound of a Harold Nick Kanellis compares the overall vibe of a Harold to different sonic textures, like musical instruments or cartoon character sounds. Also, the occurrence of game is akin to a song structure for each texture. Beats of games happen with regularity and have periods of rest, just like traditional music. Everything is a gift Phoebe Tyers: Everything you do and your partner does is a gift. Not even explicit “gift” gifts. Could be used any time, though sometimes used to inject energy. Could be related or non-sequitor. Make it yours, make it matter (overheard randomly, context not necessarily about gifts) Energy as a beachball Some scenes have a rhythm (e.g. from the game) and should be executed in tempo, like keeping a beach ball in the air. Prevent energy from dying out. E.g. “here’s my deal” with an implicit invitation of “what’s yours” to go around the circle Intimacy Peter: the degree to which two people reveal their weaknesses to one another Absurdity Don’t be so quick to call out absurdity if it is played real/normal. No no yes Always give in (physically) even if in real life you wouldn’t. Can still maintain POV."
    } ,    
    {
      "title": "Mechanics",
      "url": "/improv-living-guide/mechanics.html",
      "content": "Mechanics Thought bubbles Bloop bloop bloop! Split screens Needs active listening and lots of silence. Conversations should be in service of one another. A: I don’t know her name. B: He doesn’t even know my name! Running/journeys Running in place and objects run past. Like a montage"
    } ,    
    {
      "title": "Memorable Scenes",
      "url": "/improv-living-guide/memorable-scenes.html",
      "content": "Memorable Scenes"
    } ,    
    {
      "title": "Musical Exercises",
      "url": "/improv-living-guide/musical-exercises.html",
      "content": "Musical Exercises Reggae this without a that https://youtu.be/gOANksxK6kA Reggae beat 3-3-2. Last two beats of the couplet become the first two of the next person’s couplet. Same as this without the that."
    } ,    
    {
      "title": "Musical Improv",
      "url": "/improv-living-guide/musical-improv.html",
      "content": "Musical Improv Fear On my first day of musical improv class, the teacher asked us why we signed up. The number one response, maybe 80% of the people, was “fear”. A lot of people wanted to confront their fear in style! Musical background I came into musical improv with a musical background. I’ve sung in lots of choirs but never did musical theater. I thought I was hot shit. To anyone wondering “do I need to be a singer to do musical improv?” the answer is no. The class definitely has musical elements. The experience will be enhanced if you are musically inclined, but in no way is it a requirement. People underestimate how much musicality is built into their bodies and minds (pop music, leading tones, etc). A lot of musical improv revolves around using people’s natural instincts, no special training required. And to anyone that insists, “what if I’m tone-deaf?” I’ve only met one tone deaf person in my entire life. That phrase is over-used. People by and large are not tone-deaf. People may need to work on listening for and staying on rhythm. Also, there are so many facets to musical improv. Musicality is just one of them. Some of the best musical improvisors I’ve seen I would not describe as the strongest musically, so it doesn’t matter. Juggling I liken musical improv to juggling five balls when you can only handle three. When you first do it, it can be stressful trying to balance dancing, singing, listening, support work, and what not all at the same time. It feels very overwhelming. Eventually you learn to mentally compartmentalize and it does get easier with time and practice. One time I did an entire group number and completely forgot to sing. Melody writing Lyric writing Choreography (leading, following) Harmonizing Support work, listening Improv For a while I was loathe to admit that musical improv is still very much rooted in improv. When the accompaniment isn’t playing, you should still have good scene work. Any amount of straight improv experience is great to have going into a musical improv class. It’s not required, but it will greatly enhance your experience (since you won’t be learning how to make stuff up AND learning how to sing). Regular vs musical Musical. There’s something very magical and fun about being able to burst into song. There’s also a level of dynamism and commitment and teamwork that I would see more often in a musical show than in a regular show. My dream is to either watch or play straight scenes with that level of engagement."
    } ,    
    {
      "title": "My Kind of Improv",
      "url": "/improv-living-guide/my-kind-of-improv.html",
      "content": "My Kind of Improv A Magnet teacher once lamented, someone saying “I’m not into improv” is like saying “I’m not into television”. It’s weird to write off an entire medium. But I guess the problem stems from lack of exposure to different kinds of improv. Here are some aspects that really resonate with me. Organic delivery Compare the following lines. A: You’re a doctor. I need help. B: Doc, gimme the news. The first is something a novice improvisor might say. It’s effective in establishing a reality and a relationship. But it just sounds stilted. It’s improv-speak. The second is much more natural-sounding. But the trap here is that it requires much more interpretation on the listener’s end. If you don’t have a sharp partner who is picking up what you’re laying down, lines like this might get you in trouble. As an audience member, I always much prefer the most organic delivery possible. Fast listening Here’s an initiation. Shannon!? Shannon Bernacky? It’s Alice, from John Jay High! Here are two responses. A: Hi. We went to high school together. B: Class of 2004! AHHH!!!! The first response is a very straight “yes and” but it’s more of just a “yes”. The two players have firmly established their relationship to the audience and one another. However, it’s boring and lacks a lot of “and”. The second response adds more information and confirms the relationship via emotion rather than via words. I prefer watching moves like this, but they can be more difficult to play if the people on stage aren’t in sync. A way to tank a sexy response like this is for the first player to say the following because they were not sure if their partner understood. Shannon, we went to high school together. Now we’ve established to everyone that we are not on the same page and need to invest in safety lines like this. Degree of difficulty If improv were judged like an Olympic sport, “degree of difficulty” would be one of the things we measure. I think really great, entertaining improv has some element of magic or difficulty to it. It’s usually the parts of the show that makes those not in the know exclaim, “that was planned, right?”. Including but not limited to duets with harmony, universal choruses, strong tableaus, and nicely wrapped endings. Musical improv In general, a musical improv team commits harder and faster than a normal team. Straight improv rarely hits high highs where as musical improv is very effective very often. A good musical improv team is necessarily maintaining a high level of synchronicity and tackling things that are harder than normal improv (lyric writing, melody writing, choreography, etc). The “highlights” thread for musical improv is always much more boisterous and elaborate than the highlights thread for other nights. Aggressive support, aggressive quiet/listening Always ready to ramble and contribute, but always ready to stop and listen"
    } ,    
    {
      "title": "Narrative",
      "url": "/improv-living-guide/narrative.html",
      "content": "Narrative Plot Plot is not as important as the emotional dynamic or emotional river. Plot is just a tiny boat which you can be in, but is not as big as the river is wide and constant. Implied plot Sometimes plot can happen between scenes so that the scenework can focus on characters and relationships rather than plot details. Time dashes Scene don’t need to be done in real time. Training montage Sometimes it is nice to see a semi real-time view of character growth in the form of a musical training montage (one task/challenge per verse)."
    } ,    
    {
      "title": "New York City",
      "url": "/improv-living-guide/new-york-city.html",
      "content": "New York City"
    } ,    
    {
      "title": "Object work",
      "url": "/improv-living-guide/object-work.html",
      "content": "Object work Heightening Important to subtly heighten certain parts of object work since object is fake. Touching it’s surface features to inform the audience what shape it is. Giving it weight by slowing down your body motions to help indicate how big it is or what it is made out of. Animation tip: slow means heavy. Ridiculousness Bad plunger, bad driving of the car, bad reading a magazine."
    } ,    
    {
      "title": "Openings",
      "url": "/improv-living-guide/openings.html",
      "content": "Openings Pattern game Solicit suggestion. In an arc, organically mention things that come to mind. Documentary Magnet style Two chairs out. Organic pairs do quick characters. No repeats. UCB style Standing. Organic pairs. With callbacks to the exact same actors as the characters. Faster a la second/third beats. When seeding scenes, anyone can initiate off any character(s) premise. Unless the character is very, very strong. Character monologues Form a line. Step out one at a time (organically) and do character monologues. Peter style Revisit other people’s characters (e.g. second and third beats), getting faster Doc again (merge conflict) similar to Christopher Guest movies, mockumentary. the office, talking heads Magnet style done sitting in two chairs pairs are organic no revisits goal is organic (no set number; go by time/feeling) UCB style done standing can organically include (not mandatory) characters in the same universe (inspired by documentary form where this actually happens) pairs are revisited (faster a la second beats) tied to the original actors scenework inspired by the opening is not tied to the original actors or pairs (e.g. can be one person representing premise) order before second beats can be organic (e.g. ABCADE) goal is five character pairs Invocation “it is a hammer” “you are a hammer, the thing i used to x” with personal stakes “thou art a hammer”, endowed with mythic descriptions “i am a hammer”, channeling aspects like a spirit"
    } ,    
    {
      "title": "Relationships",
      "url": "/improv-living-guide/relationships.html",
      "content": "Relationships The defining characteristic of improv at the Magnet seems to be its focus on relationships as the driver for game. I think focusing on relationships is the better move when teaching improvisors. People tend to get really in their head about game causing their moves to be less present and less earned. I liken Magnet vs UCB to the difference between campers rubbing sticks together to create fire vs chemists studying the nature of fire. Knowing the ins and outs of the chemical reaction behind fire won’t necessarily help you survive in the wild. H vs A characters At Camp Magnet 2019, Bianca Casusol mentioned that ideally characters should be vertical and independent, with a relationship line between them (like the letter H) rather than co-dependent (like the letter A). A character should be able to exist on their own if their scene partner ever leaves. Justification and history During a character Sketch workshop, a student said they were told to “never use history as a justification”, which took everyone aback. I think the take away was don’t use a history with distance to justify something. The history has to personally affect you and your actions, even if you are reliving them in the current moment. Compare: traumatized because of a recent plane crash and having current PTSD (good) vs my mom made me do x (bad, distant)."
    } ,      
    {
      "title": "Stage",
      "url": "/improv-living-guide/stage.html",
      "content": "Stage Setting chairs Bianca: Don’t frantically place chairs. Calmly put the chairs where you want them, or else the frantic energy will bleed into the scene. Clearing the stage After getting the get, I strongly recommend clearing the stage. This gives you the opportunity to more clearly initiate from a blank slate rather than inherit the energy and posture of the get (generally the group standing upright in an arc). I’ve never asked him about it personally, but I’ve seen Will Jacobs take a circular sweep in his general area after getting the get. I’m calling this move The Will Jacobs."
    } ,    
    {
      "title": "Style",
      "url": "/improv-living-guide/style.html",
      "content": "Style TJ and Dave On June 9, 2019, I went to my first ever (and only so far) TJ and Dave show. Their style is far more comedic than I was lead to believe. Maybe I have an unreasonable link that slow means not funny. Random notes about their style (in this one show) that I noticed. I think they organically arrived at the phrase “get off my dick”. Interesting how they honored its second beat by having an entire debate between auxiliary characters about the validity of the phrase, never really saying it outright. And then the button on the scene in an unexpected, unearned way was simply repeating in full “get off my dick”. Really solid use of tension and release. I think one of the scenelets had an organic initiation of “I hate it when you put it in bay one, put it back in bay two”. I don’t think it was ever really established what those were. But they seemed very comfortable to be hitting that dynamic repeatedly and utilizing it in a grounded way with basic object work, despite never really clarifying what they bays are or what they are for (no place, no occupation other than “workers”). Multiple times, in character, they would ask “what’s that?” as in, “please repeat that, I didn’t hear what you said”, which I think is extremely interesting. It means they put a premium on making sure they hear what each other is saying and are fine melding that into their character work. Ironically, they talk over each other often. Personally, I hate this. Maybe it’s okay because they’ve known each other for such a long time and in such an intimate format. Maybe they can multi-task (unlikely) listening and speaking. Maybe they are keeping an earshot out for non-verbal contributions like tonality. Maybe they only do this when the words are unimportant and just performative. But that last one is unlikely given the frequency in which they talked over one another. My greatest fear is that newer improvisors will look at this and say “TJ and Dave don’t wait to talk, why should I?” which is a terrible takeaway. Every move they made seemed to be in service of a game or a laugh. Everything felt very self-less. There didn’t seem to be much ego. Even very distinct looking/sounding solo characters stayed pretty grounded and were framed in servicing some punchline or through line. Very light light amount of body switching."
    } ,    
    {
      "title": "Teaching",
      "url": "/improv-living-guide/teaching.html",
      "content": "Teaching Having taking a variety of classes with many different teachers, I think I’ve zoned in on a style that resonates with me more than others. How vs what There seems to be two major teaching styles when approaching teaching improv. One is more “here’s what you should do” and the other is more “here’s what good improv is”. The former is more of a recipe while the second is more descriptive. I don’t find the descriptive, heady style to be particularly useful for teaching. It’s like describing fire as “exothermic oxidation” vs “you get something useful if you rub two sticks together”. The heady style is good for more experienced improvisors who want to deeply analyze some work or structure with other experienced improvisors as the audience. I think more students would benefit from being given the tools for success even if they don’t fully understand the material, so that the improv is in their body rather than in their heads. I hear a lot of “I’m really in my head” or “that’s so heady”. I think that comes from having a cursory understanding that frameworks for improv exist but being unable to actualize that into timely moves on stage. Reps In the same vein as “how vs what”, a class that is more reps-oriented is likely to produce better results. In my experience teaching recreational volleyball to adults, this is also the case. Students benefit from physically touching the ball a lot rather than listening to a coach lecture. Some teachers like to talk a lot. I don’t think over-intellectualizing material that students are familiar with helps them learn. Maybe it can help a minority of students learn. But I think the entire class benefits from getting in as many reps as possible and then leaving the intellectualizing to opt-in questions. Regarding reps, I also think the strength of your improv is better measured in the amount of reps (possibly frequency) rather than “what level are you”. Your deal is a wheel From RaeRo about Brooklyn Comedy Collective: Your character’s deal is the frame of a wagon wheel and contexts are the spokes coming out of the center. Your character can be put in any context. Connections “Connections release tension and get laughs.” Doug Widick"
    } ,    
    {
      "title": "Warm-ups",
      "url": "/improv-living-guide/warmups.html",
      "content": "Warm-ups Crazy 8s To a count of eight, shake your right arm raised. Then your left arm, right leg, left leg. Then each down to a count of one. Then “woo!!”. But some people end it with “awww crazy 8s!”. Bird/egg (Kanellis) A physicality warm-up. Teacher says bird, you stand up, puff our your chest, and beat your wings, cawww. Teacher says egg, you scrunch down like you’re trying to hatch. Alternate. Alpha bravo Circle up, with a bit of space between. Someone initiate a repetitive sound and motion. Everyone else match that sound and motion as much as possible. After a groove has been established, someone else interrupt with a new sound and motion (at a different rhythm). Everyone else match that new sound and motion. Repeat after a groove has been established, etc. Genre cauldron An idea-generating exercise useful for priming the group to think about genre-specific tropes. Typically used in musical formats. Coach shouts out a genre (e.g. country westerns, R&amp;B songs) and everyone organically contributes things to the circle that they are thinking of in relation to the genre. Go in any order until the genre is tapped out or generation slows down. 1, 2, 3, nailed it! One person is “it”. Group counts, 1, 2, 3, with the it person making organic poses each count. Every else has matching energy. It person starts scenelette but everyone organicly participates with matching energy. When scenelette is over, everyone goes hands in and up and says “nailed it!” Scenework no suggestion: vague initiation to clarification suggestion to banal initiation: clarify/contextualize with relationship (intense like mother/Batman) suggestion to banal initiation: clarify/contextualize with location pocket an emotion given coach: banal initiation to emotional response One word stories Circle up. One word at a time, like fairy tale. Person can say PERIOD to end thought. Variant: SECRETS. Instead of “period”, say “secrets” like oooOOooo. What a great wedding! Circle up. Primary person says they have a themed wedding. Everyone says “what a great wedding!” Each person pitches something apropos to that wedding. Then next primary person, etc. Knife throw encircle someone mime throwing a knife to someone recipient mimes catching the knife between their hands (e.g. with a clap) recipient becomes the thrower; repeat level 2: you catch for the person on your left. e.g. if they are attacked, you must catch their knife. and you are the thrower. Zombies encircle, with one person in the middle as the “slow zombie” initially, pick any target to walk slowly towards, to tag victim needs to make eye contact with someone in the circle that someone needs to shout out a name of someone else zombie must slow walk to the target that is shouted out person becomes zombie if a) tagged by zombie b) not following rules (e.g. target shouts improperly) levels: requirement for commnicating name becoming more complex (e.g. whisper to someone else for them to shout) Group reaction encircle, one person in the middle person in the middle makes neutral, un-loaded statement circle reacts cohesively to it (like all like or all hate, etc) middle person continues with another statement (slightly narrative?) circle heightens their group reaction. repeat until climax (4 ish reactions?)"
    }    
  ];

  idx = lunr(function () {
    this.ref("title");
    this.field("content");

    docs.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  docs.forEach(function (doc) {
    docMap.set(doc.title, doc.url);
  });
}

// The onkeypress handler for search functionality
function searchOnKeyDown(e) {
  const keyCode = e.keyCode;
  const parent = e.target.parentElement;
  const isSearchBar = e.target.id === "search-bar";
  const isSearchResult = parent ? parent.id.startsWith("result-") : false;
  const isSearchBarOrResult = isSearchBar || isSearchResult;

  if (keyCode === 40 && isSearchBarOrResult) {
    // On 'down', try to navigate down the search results
    e.preventDefault();
    e.stopPropagation();
    selectDown(e);
  } else if (keyCode === 38 && isSearchBarOrResult) {
    // On 'up', try to navigate up the search results
    e.preventDefault();
    e.stopPropagation();
    selectUp(e);
  } else if (keyCode === 27 && isSearchBarOrResult) {
    // On 'ESC', close the search dropdown
    e.preventDefault();
    e.stopPropagation();
    closeDropdownSearch(e);
  }
}

// Search is only done on key-up so that the search terms are properly propagated
function searchOnKeyUp(e) {
  // Filter out up, down, esc keys
  const keyCode = e.keyCode;
  const cannotBe = [40, 38, 27];
  const isSearchBar = e.target.id === "search-bar";
  const keyIsNotWrong = !cannotBe.includes(keyCode);
  if (isSearchBar && keyIsNotWrong) {
    // Try to run a search
    runSearch(e);
  }
}

// Move the cursor up the search list
function selectUp(e) {
  if (e.target.parentElement.id.startsWith("result-")) {
    const index = parseInt(e.target.parentElement.id.substring(7));
    if (!isNaN(index) && (index > 0)) {
      const nextIndexStr = "result-" + (index - 1);
      const querySel = "li[id$='" + nextIndexStr + "'";
      const nextResult = document.querySelector(querySel);
      if (nextResult) {
        nextResult.firstChild.focus();
      }
    }
  }
}

// Move the cursor down the search list
function selectDown(e) {
  if (e.target.id === "search-bar") {
    const firstResult = document.querySelector("li[id$='result-0']");
    if (firstResult) {
      firstResult.firstChild.focus();
    }
  } else if (e.target.parentElement.id.startsWith("result-")) {
    const index = parseInt(e.target.parentElement.id.substring(7));
    if (!isNaN(index)) {
      const nextIndexStr = "result-" + (index + 1);
      const querySel = "li[id$='" + nextIndexStr + "'";
      const nextResult = document.querySelector(querySel);
      if (nextResult) {
        nextResult.firstChild.focus();
      }
    }
  }
}

// Search for whatever the user has typed so far
function runSearch(e) {
  if (e.target.value === "") {
    // On empty string, remove all search results
    // Otherwise this may show all results as everything is a "match"
    applySearchResults([]);
  } else {
    const tokens = e.target.value.split(" ");
    const moddedTokens = tokens.map(function (token) {
      // "*" + token + "*"
      return token;
    })
    const searchTerm = moddedTokens.join(" ");
    const searchResults = idx.search(searchTerm);
    const mapResults = searchResults.map(function (result) {
      const resultUrl = docMap.get(result.ref);
      return { name: result.ref, url: resultUrl };
    })

    applySearchResults(mapResults);
  }

}

// After a search, modify the search dropdown to contain the search results
function applySearchResults(results) {
  const dropdown = document.querySelector("div[id$='search-dropdown'] > .dropdown-content.show");
  if (dropdown) {
    //Remove each child
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.firstChild);
    }

    //Add each result as an element in the list
    results.forEach(function (result, i) {
      const elem = document.createElement("li");
      elem.setAttribute("class", "dropdown-item");
      elem.setAttribute("id", "result-" + i);

      const elemLink = document.createElement("a");
      elemLink.setAttribute("title", result.name);
      elemLink.setAttribute("href", result.url);
      elemLink.setAttribute("class", "dropdown-item-link");

      const elemLinkText = document.createElement("span");
      elemLinkText.setAttribute("class", "dropdown-item-link-text");
      elemLinkText.innerHTML = result.name;

      elemLink.appendChild(elemLinkText);
      elem.appendChild(elemLink);
      dropdown.appendChild(elem);
    });
  }
}

// Close the dropdown if the user clicks (only) outside of it
function closeDropdownSearch(e) {
  // Check if where we're clicking is the search dropdown
  if (e.target.id !== "search-bar") {
    const dropdown = document.querySelector("div[id$='search-dropdown'] > .dropdown-content.show");
    if (dropdown) {
      dropdown.classList.remove("show");
      document.documentElement.removeEventListener("click", closeDropdownSearch);
    }
  }
}
