---
title: "Stop Treating Developers Like Bricklayers"
tag: "technology"
date: 2026-02-03
---

I think a good way to reason about where AI coding is headed, is to look at things we build where the tools are so capable that we can focus almost entirely on the creative aspects.

GameMaker gave us Hotline Miami, Undertale, Hyper Light Drifter, Nuclear Throne, all made by people who didn't know how to "code". GarageBand gave us Grimes.

These tools didn't destroy AAA studios. They expanded the landscape. The ceiling didn't collapse, the floor lowered. In games, the middle ground flourished too, something like Expedition 33 in Unreal Engine or Disco Elysium.

Unity was never seen as a threat to game developers. It lowered the barrier to entry and broadened who could participate, but it didn't eliminate the need for experienced developers. People understood their day-to-day tasks might change, but their judgment and expertise would still be required.

AI coding introduces a similar split effect. For people who don't code, it enables entirely new kinds of creators (designers, founders, hobbyists) to build things that previously required a team.

For people who already code, it doesn't remove the work. It changes its center of gravity.

Less time fighting syntax errors and boilerplate. Less googling. Even less “chatting with AI” about implementation details. Less emphasis on memorizing tool quirks.

More emphasis on modeling, architecture, and defining the system in which the code lives. These decisions shape the experience directly. AI may become extremely good at evaluating structures and predicting outcomes. But unless it genuinely shares the kind of lived experience the product is designed for, delegating those decisions entirely would mean outsourcing the very layer where experience is defined. And experience is the one thing we likely want to keep authored by those who actually undergo it.

AI can write the loop. It can even suggest different ways to model your data, as a graph, a timeline, or a spatial hierarchy. But each of those models commits you to a different future. They enable different kinds of features, different performance characteristics, different failure modes. Someone has to decide which future is worth building toward.

Imagine a developer building a game engine and the game is simple, you only need light. You can model light as a cheap abstraction, a sphere that emits a few rays, bumps brightness on the surfaces it hits, and fakes the rest. Or you can model light as a physical system: many rays bouncing, materials interacting, global illumination. Today the surfaces are simple and both models ship the same game, indistinguishable. But one choice makes it portable to something like the Switch, while the other makes it possible to reuse the engine for a GTA-scale world later. There's no universally correct answer. But that decision defines the space of possible games you can build next.

Those choices can also create emergent behavior no designer or PM was even aware of. Imagine that with one of these models, players can discover a camera angle where hidden paths become visible because the light produces a distinctive specular highlight at grazing angles.

Now imagine the jump. A designer can spec "floaty" or "snappy," and they'll iterate with the developer, tweaking values until it feels right. But the developer is the one who built the system that makes those tweaks possible in the first place: exposing coyote time as a tunable parameter, designing the input buffering architecture, creating the acceleration curve system.

And beyond what's being explicitly tested, the developer makes dozens of adjacent decisions that shape the feel but never make it into a spec: how the camera catches up when you land, whether animation blending respects or overrides physics, how friction interacts with slopes, the frame delay between input and visual feedback. These aren't implementation details. They're aesthetic decisions that determine how the game feels, made in a space where designers and PMs often can't see it.

This is developer territory. Not because others can't participate in tuning, but because the developer designs the possibility space itself. What can even be adjusted, how systems interact, and all the invisible technical choices that accumulate into the experience.

Game engines make this easier to see, but the same is true for any complex software system.

Devs fear AI because they see themselves as bricklayers, just translating requirements into code. In Brazil, developers are often dismissively called "pedreiros" (bricklayers), as if we just stack code according to someone else's blueprint. But they're actually designers working at the system level, making architectural decisions that deeply shape the experience.

**See also**
* **[The Law of Leaky Abstractions](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)**: Famous explanation of why you can't just "hand off" a design. The underlying implementation always "leaks" through to the user, meaning the dev is the final arbiter of the experience.
* **[The Experiential Cost of Latency](https://vwo.com/blog/how-vwo-affects-site-speed/)**: Real-world data on how system speed (and the technical choices behind it) directly dictates user conversion and retention.
* **[The Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html)**: A look at how a developer's choice of modularity and system boundaries directly enables (or kills) the product team's ability to pivot or add new interactions next month.
* **[Conway’s Law and System Design](https://en.wikipedia.org/wiki/Conway%27s_law)**: Evidence that the way we organize our code and our teams is the blueprint that determines the final user experience.
