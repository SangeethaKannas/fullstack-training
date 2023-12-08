# General Rules

Follow standard conventions
KISS: Keep it simple stupid. Reduce complexity as much as possible.
Boy scout rule: Leave the campground cleaner than you found it.
Always find root cause of the problem.

# Design Rules
Keep configurable data at high levels.
Prefer polymorphism to if/else or switch/case
Prevent over configuration.
Use dependency injections
Law of Demeter: Class to know its direct dependencies

# Understandability
Consistency: All similar things to be in similar way
Easily understandable and explanatory variables
Boundary conditions: Encapsulation
    Put processing for them in single place


# Code review best practices
Effective Code Review Tips
As an author, value your  reviewer’s time. For respectful code reviews: 

Check list before submitting for code review 
• Review your code yourself first
• Break up large changelists
• Automate the easy stuff (linting, formatting)
• Narrowly scope changes
• Respond graciously to critique
• Minimize lag between rounds of review
• Artfully solicit missing information
• Communicate responses explicitly https://bit.ly/code-revws

● Don’t forget the docs. Good documentation contains context that is missing from the code. It’s doesn’t just repeat it.
● Discuss things upfront where it makes sense to. Design docs and team meetings can be great for 
aligning on API semantics, implementation details etc. prior to the code review and can avoid exceptionally long review cycles.As a reviewer, check that code is…
● Required. Is the code needed?
● Well designed (e.g. how well do the various pieces interact together and the system as a whole?)
● Readable by others 
● Doing what the author intended (and is the intention good for both end-users and maintainers?)
● No more complex than needed (e.g. can it be understood quickly? are folks very likely to add bugs when modifying it?)
● Commented with the why vs. what (explain why code exists vs what its doing if possible)
● Following the style guide (ideally automate enforcement, code with major style changes (e.g. reformats) should be kept separate)
● Has appropriate tests that are designed well
● Sufficiently documented in the same PR (keeps the docs fresh, and helps explain what you're doing)

Keep code reviews constructive
● Comments should be about the code, not the developer.
● Programming skill evaluations don’t belong in code reviews.
● Don’t ask condescending questions. 
    Common examples of the genre     include “Why did you do this?”
● Write clear and specific comments.
● Include positive feedback. 
● Avoid overly nitpicking. Lean on automatic style checking for this. https://bit.ly/code-etiquette
● Let computers do the boring parts
● Settle style arguments with a style guide
● Start reviewing immediately
● Start high level and work your way down
● Be generous with code examples
● Frame feedback as requests, not commands
● Tie notes to principles, not opinionshttps://mtlynch.io/code-review-love/
Lots of good criteria. 
Decide what matters.
● Is the API as small as possible, as large as needed?
● Is there one way of doing one thing, not multiple ones?
● Is it consistent, does it follow the principle of least surprises?
● Clean split of API/internals, without internals leaking in the API?
● Are there no breaking changes to user-facing parts (configuration, metrics, log formats, etc.)? https://bit.ly/code-review-pyramid
● Does it satisfy the requirements?
● Is it logically correct?
● Is there no unnecessary complexity?
● Is it robust (no concurrency issues, proper error handling, etc.)?
● Is it performant?
● Is it secure (e.g. no XSS issues)
● Is it observable (e.g. metrics, logging, tracing, etc.)?
● Do newly added dependencies pull their weight?
https://bit.ly/code-review-pyramid


More resources 
https://bit.ly/code-revws
https://mtlynch.io/code-review-love/
https://bit.ly/code-review-pyramid
https://bit.ly/code-etiquette