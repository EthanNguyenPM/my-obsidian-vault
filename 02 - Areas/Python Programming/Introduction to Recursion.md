---
tags:
  - area
  - recursion
  - programming
---
You’ve heard about a trendy new spot that sells fruit sandwiches. What are fruit sandwiches? You have no idea, but you’re eager to find out!

Sadly, when you arrive at the store, the line is out the door and around the block. Undeterred, you hatch a plan to find out how many people are in line before you.

You tap the person in front of you and ask them how many people are ahead of them. They have no idea, (the line is huge!) so they ask you to wait a moment and tap the person in front of them, repeating this process through the line.

Finally, the second to last person taps the person at the front of the line. Nobody is ahead of them, so they reply “It’s just me so: one person!”. **Then this message is repeated back down the line.**

The next person says “okay, there was one person ahead of me, I’ll add myself… I can tell the person behind me: 2 people in line.”

Each person waiting for a reply:

1. receives the message
2. adds themselves to the count
3. responds to the person tapping them

This chain eventually reaches you with the final number. Your plan was a success!

You executed a recursive strategy. The “function” of asking a person **involved asking a person**. The self-referential logic can seem like it goes on forever, but each question brings you closer to the front of the line where **no more people are asked about the line**.
	
Your approach had two aspects which are essential to recursive thinking. Break the problem into two possibilities:

1. There’s nobody left in line, don’t ask
2. There’s someone in line, ask them

We repeat Step 2 with a different input which brings us closer to Step 1.

![[CS-Path---Algorithms---Recursion-Intro_v3.gif]]![[Pasted image 20241011144508.png]]