const bookData = {
stars: {
  title: "The Star Ledger", label: "BOOK 01 · LITTLE WINS, REAL LEARNING",
  pages: [
    '<p class="eyebrow">THE STAR LEDGER</p><h2>Fourteen little stars.<br><em>Fourteen moments of noticing.</em></h2><p>These stars mark moments when I contributed, connected an idea, solved a problem, or brought something useful into our NLP class.</p><div class="big-number">14</div><p>Stars earned in total</p><div class="callout">Each entry below records the contribution that earned a star. The star count follows my notes.</div>',
    '<p class="eyebrow">THE STAR LEDGER · 01</p><h2>Where the stars came from</h2><ul><li><strong>1 star — OOV:</strong> Mentioning OOV, meaning out-of-vocabulary words.</li><li><strong>1 star — Bachpan:</strong> Identifying the Hindi suffix <em>-pan</em> in <em>bachpan</em>, meaning childhood.</li><li><strong>2 stars — N-gram model:</strong> Expanding the probability of a four-word sequence.</li><li><strong>2 stars — Hindi prefixes:</strong> Pointing out prefixing examples such as <em>pad / unpad</em> and <em>layak / nalayak</em>.</li><li><strong>2 stars — Viterbi algorithm:</strong> Solving the Viterbi algorithm in class.</li><li><strong>1 star — Finite-state transducers:</strong> Writing FST expressions for Kleene plus and Kleene star over digits.</li><li><strong>2 stars — Language resources:</strong> Discussing why lower-resource languages can be harder for chatbots to handle accurately.</li><li><strong>2 stars — NLP vocabulary:</strong> Contributing five terms: lexical, syntactical, grammatical, morpheme, and word boundary.</li><li><strong>1 star — Stephen Cole Kleene:</strong> Mentioning the mathematician associated with regular expressions and formal language theory.</li></ul><p class="small-muted">The listed entries add up to 14 stars.</p>',
    '<p class="eyebrow">A CLOSER LOOK</p><h2>The four-word N-gram</h2><p>For a sequence of four words, the chain rule expresses the probability as:</p><div class="callout">P(w₁,w₂,w₃,w₄) = P(w₁) × P(w₂|w₁) × P(w₃|w₁,w₂) × P(w₄|w₁,w₂,w₃)</div><p>In simple words, the probability of the full sequence is built from the probability of the first word and the conditional probabilities of each next word given the words before it.</p><h3>Regular expressions</h3><p>For digits 0–9, <code>[0-9]+</code> matches one or more digits. <code>[0-9][0-9]*</code> means one digit followed by zero or more digits.</p><p class="small-muted">These are records of the class contributions, not claims that I invented the underlying algorithms.</p>'
  ]
},
activities: {
  title: "In the Classroom", label: "BOOK 02 · ACTIVITIES & EXPERIMENTS",
  pages: [
    '<p class="eyebrow">IN THE CLASSROOM</p><h2>Learning by trying things.</h2><p>This book collects the activities, hands-on work, and experiments we explored in class—and what I took away from them.</p><div class="tag">Group activity</div><div class="tag">Translation</div><div class="tag">Python / NLTK</div><h3>01 · India Through NLP</h3><p>With Zaheer and Ram, I worked on the idea of using NLP and machine learning to classify Indian states as North Indian or South Indian based on cultural, linguistic, geographical, and social information.</p><p>The concept involved collecting descriptions of languages, food, festivals, clothing, climate, literature, and cultural practices, then extracting features from the text for a classifier.</p>',
    '<p class="eyebrow">ACTIVITY 01 · REFLECTION</p><h2>Culture is more complex than a label.</h2><p>Kerala and Punjab were used as illustrative examples of how language, festivals, cuisine, and geography could provide features for a model.</p><div class="callout">What I learned: NLP can help turn descriptions into features a machine-learning model can process, but cultural identity cannot be fully represented by a simple North/South label.</div><h3>02 · ChatGPT translation activity</h3><p>We explored how ChatGPT translated a Hindi poem that I found on Quora. I compared the translation with the original poem and considered whether the emotional context and implied meaning had been preserved.</p><p>My reflection was that people can often use context and emotional nuance to interpret a poem, while an AI translation may miss parts of the meaning when context is not explicit.</p><p><strong>My rating:</strong> 3.5 / 5</p>',
    '<p class="eyebrow">ACTIVITY 02 · TRANSLATION</p><h2>Meaning lives between the words.</h2><p>The poem described pain after a short conversation, the wounds words can cause, and the feeling of having nobody who understands or comforts a lonely woman.</p><p>The activity made me think about the difference between translating words and communicating the feeling behind them. A translation can be grammatically understandable and still lose tone, cultural context, or emotional nuance.</p><div class="callout">Question I took away: How can we evaluate a translation when the important meaning is implied rather than directly stated?</div>',
    '<p class="eyebrow">ACTIVITY 03 · HANDS-ON CODING</p><h2>The NLTK text-processing pipeline</h2><p>In the NLTK activity, we explored a basic text-processing pipeline in Python, moving through sentence-level and word-level processing and part-of-speech tagging.</p><ul><li>Sentence tokenisation: splitting text into sentences.</li><li>Word tokenisation: splitting sentences into tokens.</li><li>POS tagging: assigning grammatical labels to words.</li><li>Further processing: using the output to inspect the structure of a text.</li></ul><p>I completed two hands-on coding activities. This entry records the NLTK pipeline activity; the second activity can be added here when its exact details are supplied.</p>'
  ]
},
brainstorm: {
  title: "The Idea Table", label: "BOOK 03 · QUESTIONS & CLASS BRAINSTORMS",
  pages: [
    '<p class="eyebrow">THE IDEA TABLE</p><h2>What if we looked at it differently?</h2><p>This book holds the questions from class that made me think beyond the first obvious answer. These are brainstorms and proposed approaches—not validated warning systems or finished research.</p><h3>Can language give an early signal of a natural disaster?</h3><p>My idea was to analyse local radio broadcasts and weather reports. Reports may mention light rain, stronger winds, rising rivers, or unusual sea conditions before a formal warning is issued.</p><p>Instead of only searching for keywords, NLP could track how the language changes in urgency and severity over time.</p>',
    '<p class="eyebrow">BRAINSTORM · NATURAL DISASTERS</p><h2>From a local report to a wider picture</h2><p>The proposed system would:</p><ul><li>Convert radio broadcasts and reports into text.</li><li>Identify weather and hazard descriptions, their locations, and their severity.</li><li>Track whether reports escalate from mild conditions to more urgent warnings.</li><li>Combine reports from connected regions using geography such as shared rivers, coastlines, or oceans.</li><li>Produce a risk-priority signal for further checking.</li></ul><div class="callout">Important limitation: this could be an additional information signal, not a replacement for official warnings. Weather-driven hazards and earthquakes behave differently, and the idea would need careful testing against verified event records.</div>',
    '<p class="eyebrow">OTHER CLASS QUESTIONS</p><h2>Questions worth keeping</h2><ul><li>Can a CFG help identify grammatical patterns in an ancient or poorly documented language?</li><li>Can Reddit or Twitter/X conversations be analysed for sarcasm, sentiment, or possible manipulation?</li><li>Why might an AI detector label human writing as AI-generated?</li><li>How can we identify the context behind a word or phrase rather than only matching keywords?</li><li>Can we compare how different languages express suffixes, prefixes, and word formation?</li></ul><p>These questions are starting points. Each would need a precise scope, suitable data, and a way to test the answer.</p>'
  ]
},
messages: {
  title: "Notes to Ma'am", label: "BOOK 04 · QUESTIONS BEYOND CLASS",
  pages: [
    '<p class="eyebrow">NOTES TO MA’AM</p><h2>Questions that followed me out of class.</h2><p>This book records the personal academic questions I sent to ma’am outside class hours. They show how a class topic led me to explore a related problem on my own.</p><h3>01 · Could NLP help build a grammar for an ancient language?</h3><p>I asked about CFGs for ancient languages that do not already have known grammar rules. I wondered whether, if we could translate words into English and map them across multiple sentences, those mappings might help us discover recurring grammar patterns and eventually build a CFG.</p>',
    '<p class="eyebrow">NOTE 01 · IN SIMPLE WORDS</p><h2>Can we learn the rules from examples?</h2><p>Imagine finding many sentences in a language whose grammar is not fully understood. If we can work out the likely meaning of some words, compare them with translations, and study how the words appear in different sentences, we may begin to notice patterns.</p><p>For example, we might notice that certain words repeatedly appear before names, or that word order changes when a sentence asks a question. These repeated patterns could help us propose grammar rules.</p><div class="callout">The difficult part is that translation alone does not automatically reveal the grammar. We would need enough reliable examples and evidence to test whether our proposed rules actually explain the language.</div>',
    '<p class="eyebrow">MORE QUESTIONS</p><h2>Other things I asked or wondered about</h2><ul><li>Could browser extensions for platforms such as Reddit or Twitter/X support sentiment or manipulation analysis?</li><li>The Penn Treebank POS tagset is commonly described as having 36 tags for word categories; punctuation and other symbols may also appear in tagged output.</li></ul><p>These messages reflect questions and explorations, not necessarily completed projects. The aim was to ask how an NLP concept could be applied to a larger problem.</p>'
  ]
},
research: {
  title: "The Unfinished Shelf", label: "BOOK 05 · INDEPENDENT RESEARCH IDEAS",
  pages: [
    '<p class="eyebrow">THE UNFINISHED SHELF</p><h2>Ideas I kept thinking about.</h2><p>Outside the activities we completed in class, I started collecting possible NLP research directions. They are early-stage ideas, not completed experiments.</p><h3>01 · Echoes Across Pages</h3><p>Can NLP compare the writing styles of contemporary authors with authors from the past and identify similarities in vocabulary, sentence structure, recurring patterns, themes, and storytelling techniques?</p><p>I want to explore whether modern writers share stylistic patterns with earlier literature and whether themes return across generations even when language and historical context change.</p>',
    '<p class="eyebrow">RESEARCH IDEA · LITERARY STYLE</p><h2>How I imagine exploring it</h2><ul><li>Collect legally available books from different literary periods.</li><li>Clean the text and divide books into comparable passages.</li><li>Compare vocabulary and recurring phrases using N-grams and TF-IDF.</li><li>Compare sentence structure, sentence length, punctuation, and vocabulary diversity using stylometry.</li><li>Use semantic embeddings to compare meaning, and topic modelling to explore recurring themes.</li><li>Visualise similarities and test whether results hold across genres and books.</li></ul><div class="callout">A similarity score does not prove that one author influenced or copied another. The goal is to find patterns worth interpreting.</div>',
    '<p class="eyebrow">MORE IDEAS IN THE MARGINS</p><h2>A shelf of possible directions</h2><ul><li><strong>Language and people:</strong> detecting manipulation, sarcasm, and implied meaning in online conversations.</li><li><strong>Workplaces:</strong> analysing anonymous employee feedback to understand Gen Z retention.</li><li><strong>Science:</strong> using local language models to explore and summarise scientific news and papers from the past two years.</li><li><strong>Medicine:</strong> identifying conflicting evidence across medical studies.</li><li><strong>Space:</strong> finding similar spacecraft anomalies across technical reports.</li><li><strong>Quantum computing:</strong> comparing claims across research papers or translating simple natural-language descriptions into constrained Qiskit circuits.</li><li><strong>Transportation:</strong> extracting recurring EV charging complaints or causes of transport delays.</li><li><strong>History and culture:</strong> exploring how cultural practices, literary trends, and historical language change over time.</li></ul>',
    '<p class="eyebrow">A NOTE TO MY FUTURE SELF</p><h2>Not every idea needs to be finished today.</h2><p>Some ideas will change after I read more papers. Some may turn out to be too broad, and others may become practical projects. The next step is to choose one clear question, find suitable data, review existing work, and design an experiment that can test the idea.</p><p>Curiosity is the beginning; evidence is what helps it grow into research.</p>'
  ]
},
music: {
  title: "Schoolhouse Rock!", label: "THE MUSIC CORNER · LEARN THROUGH SONG",
  pages: [
    '<p class="eyebrow">THE MUSIC CORNER</p><h2>Schoolhouse Rock!</h2><p>A little side shelf for the educational songs that make grammar and language memorable. Choose a song to search for its official or authorised listening source.</p><p class="small-muted">Audio is not hosted in this portfolio. Song buttons open a YouTube search so you can choose an available official upload.</p><div class="callout">Pick a song below to open the search in a new tab.</div>',
    '<p class="eyebrow">PICK A SONG</p><h2>Schoolhouse Rock song shelf</h2><div id="songList" class="song-list"></div><p class="small-muted">Availability varies by region and uploader. Prefer official or authorised uploads.</p>'
  ]
}
};

let currentBook = null;
let pageIndex = 0;
const overlay = document.getElementById("overlay");
const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");
const openBook = document.getElementById("openBook");
const songs = [
  "Conjunction Junction", "Lolly, Lolly, Lolly, Get Your Adverbs Here", "Unpack Your Adjectives",
  "Verb: That's What's Happening", "A Noun Is a Person, Place, or Thing", "Interjections!",
  "Busy Prepositions", "The Tale of Mr. Morton", "Three Is a Magic Number", "I'm Just a Bill",
  "Interplanet Janet", "The Great American Melting Pot"
];
function renderBook() {
  const b = bookData[currentBook];
  const readerShell = document.querySelector(".reader-shell");
  readerShell.className = "reader-shell " + ({stars:"theme-star",activities:"theme-star",brainstorm:"theme-cyber",messages:"theme-history",research:"theme-history",music:"theme-music"}[currentBook] || "");
  const leftIndex = pageIndex;
  const rightIndex = pageIndex + 1;
  leftContent.innerHTML = b.pages[leftIndex] || '<p class="eyebrow">A LITTLE PAUSE</p><h2>More pages to come.</h2><p>This book can grow as more class notes and activities are added.</p>';
  rightContent.innerHTML = b.pages[rightIndex] || '<p class="eyebrow">END OF THIS SECTION</p><h2>Keep exploring.</h2><p>Return to the shelf and open another book.</p>';
  document.getElementById("leftNum").textContent = String(leftIndex + 1);
  document.getElementById("rightNum").textContent = String(rightIndex + 1);
  document.getElementById("readerCounter").textContent = b.label;
  document.getElementById("prevPage").disabled = pageIndex === 0;
  document.getElementById("prevPage").style.opacity = pageIndex === 0 ? ".35" : "1";
  document.getElementById("nextPage").disabled = pageIndex + 2 >= b.pages.length;
  document.getElementById("nextPage").style.opacity = pageIndex + 2 >= b.pages.length ? ".35" : "1";
  if (currentBook === "music" && pageIndex === 0) {
    rightContent.innerHTML += '<p class="small-muted">Turn the page to browse songs.</p>';
  }
  if (currentBook === "music" && pageIndex >= 1) {
    const list = document.getElementById("songList");
    if (list) list.innerHTML = songs.map(function(song) {
      return '<a class="song-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/results?search_query=' + encodeURIComponent("Schoolhouse Rock " + song + " official") + '"><span>♫</span><span>' + song + '</span><span>↗</span></a>';
    }).join("");
  }
}
function openAbook(id) {
  currentBook = id;
  pageIndex = 0;
  renderBook();
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("closeBook").focus();
}
function closeAbook() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function turnPage(direction) {
  const next = pageIndex + direction * 2;
  if (next < 0 || next >= bookData[currentBook].pages.length) return;
  openBook.classList.remove("turning");
  void openBook.offsetWidth;
  openBook.classList.add("turning");
  window.setTimeout(function() { pageIndex = next; renderBook(); }, 170);
}
document.querySelectorAll(".book").forEach(function(button) {
  button.addEventListener("click", function() { openAbook(button.dataset.book); });
});
document.getElementById("closeBook").addEventListener("click", closeAbook);
document.getElementById("prevPage").addEventListener("click", function() { turnPage(-1); });
document.getElementById("nextPage").addEventListener("click", function() { turnPage(1); });
overlay.addEventListener("click", function(event) { if (event.target === overlay) closeAbook(); });
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") { closeAbook(); document.getElementById("aboutModal").classList.remove("show"); }
  if (overlay.classList.contains("show") && event.key === "ArrowRight") turnPage(1);
  if (overlay.classList.contains("show") && event.key === "ArrowLeft") turnPage(-1);
});
const aboutModal = document.getElementById("aboutModal");
document.getElementById("aboutBtn").addEventListener("click", function() { aboutModal.classList.add("show"); aboutModal.setAttribute("aria-hidden", "false"); });
document.getElementById("closeAbout").addEventListener("click", function() { aboutModal.classList.remove("show"); aboutModal.setAttribute("aria-hidden", "true"); });
aboutModal.addEventListener("click", function(event) { if (event.target === aboutModal) aboutModal.classList.remove("show"); });