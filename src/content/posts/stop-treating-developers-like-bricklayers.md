---
title: "Stop Treating Developers Like Bricklayers"
tag: "technology"
date: 2026-02-03
---

I think a good way to reason about where AI coding is headed, is to look at things we build where the tools are so capable that we can focus almost entirely on the creative aspects.

GameMaker gave us Hotline Miami, Undertale, Hyper Light Drifter, Nuclear Throne, all made by people who didn't know how to "code". GarageBand gave us Grimes.

It didn't disrupt AAA games, it broadened the landscape of what games could be (middle way being something like Expedition 33 with UE or Disco Elysium).

Unity was never seen as a threat to game devs. They knew their day-to-day jobs could change, but their knowledge and expertise would still be required.

**So what actually changes?** Less time fighting syntax errors and boilerplate. Less googling and even chatting with AI. Less specific knowledge of tools. More time on what actually matters:

Choosing which internal model best represents the problem. Two implementations might produce identical behavior today, but they open up completely different sets of future possibilities. The developer is the one mapping out how different abstractions handle edge cases, failure modes, performance characteristics, and crucially, understanding how these choices ripple through to what the product can become.

AI can write the loop. It can't choose between modeling your data as a graph versus a timeline versus a spatial hierarchy, and each choice naturally enables entirely different kinds of features down the line.

Imagine a developer building a game engine and the game is simple, you only need light. You can model light as a cheap abstraction, a sphere that emits a few rays, bumps brightness on the surfaces it hits, and fakes the rest. Or you can model light as a physical system: many rays bouncing, materials interacting, global illumination. Today the surfaces are simple and both models ship the same game, indistinguishable. But one choice makes it possible to reuse the engine for a GTA-scale world later, while the other makes it portable to something like the Switch. There's no universally correct answer. But that decision defines the space of possible products you can build next.

Those choices can also create emergent behavior no designer or PM was even aware of. Imagine that with one of these models, players can discover a camera angle where hidden paths become visible because the light produces a distinctive specular highlight at grazing angles.

Now imagine the jump. A designer can spec “floaty” or “snappy.” But the actual feel is decided in code: coyote time, input buffering, variable jump height, acceleration curves, friction, animation timing, camera lag. The developer iterates those knobs until it feels right, and that isn’t “implementation.” That is the experience. These choices become aesthetics.

This is purely developer territory. A PM can't see it. A designer can't spec it. But it determines a lot.

Devs fear AI because they see themselves as bricklayers, just translating requirements into code. In Brazil, developers are often dismissively called "pedreiros" (bricklayers), as if we just stack code according to someone else's blueprint. But they're actually designers working at the system level, making architectural decisions that deeply shape the experience in ways PMs and product designers often can't even see.

**See also**
* **[The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)**: Famous explanation of why you can't just "hand off" a design. The underlying implementation always "leaks" through to the user, meaning the dev is the final arbiter of the experience.
* **[The Experiential Cost of Latency](https://vwo.com/blog/how-vwo-affects-site-speed/)**: Real-world data on how system speed (and the technical choices behind it) directly dictates user conversion and retention.
* **[The Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html)**: A look at how a developer's choice of modularity and system boundaries directly enables (or kills) the product team's ability to pivot or add new interactions next month.
* **[Conway’s Law and System Design](https://en.wikipedia.org/wiki/Conway%27s_law)**: Evidence that the way we organize our code and our teams is the blueprint that determines the final user experience.
