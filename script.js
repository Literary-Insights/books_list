document.addEventListener('DOMContentLoaded', function() {
  const books = [
    {title: "12 Questions for Love A Guide to Intimate Conversations and Deeper Relationships Topaz Adizes", imageUrl: "images/12 Questions for Love A Guide to Intimate Conversations and Deeper Relationships Topaz Adizes.jpg"},
    {title: "The Hunger Habit - Why We Eat When Were Not Hungry and How to Stop - Judson Brewer", imageUrl: "images/The Hunger Habit - Why We Eat When Were Not Hungry and How to Stop - Judson Brewer.jpg"},
    {title: "Practical Optimism: The Art, Science, and Practice of Exceptional Well-Being - Sue Varma", imageUrl: "images/Practical Optimism: The Art, Science, and Practice of Exceptional Well-Being - Sue Varma.jpg"},
    {title: "Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Balanced Brain - Camilla Nord", imageUrl: "images/The Balanced Brain - Camilla Nord.jpg"},
    {title: "Reinvent Yourself - Susan Kahn", imageUrl: "images/Reinvent Yourself - Susan Kahn.jpg"},
    {title: "The Life Brief: A Playbook for No-Regrets Living - Bonnie Wan", imageUrl: "images/The Life Brief: A Playbook for No-Regrets Living - Bonnie Wan.jpg"},
    {title: "Fluke Chance Chaos and Why Everything We Do Matters - Brian Klaas", imageUrl: "images/Fluke Chance Chaos and Why Everything We Do Matters - Brian Klaas.jpg"},
    {title: "Uncommon Sense Teaching Practical Insights in Brain Science to Help Students Learn - Barbara Oakley", imageUrl: "images/Uncommon Sense Teaching Practical Insights in Brain Science to Help Students Learn - Barbara Oakley.jpg"},
    {title: "The Amen Effect Ancient Wisdom to Mend Our Broken Hearts and World - Sharon Brous", imageUrl: "images/The Amen Effect Ancient Wisdom to Mend Our Broken Hearts and World - Sharon Brous.jpg"},
    {title: "Mixed Signals - Uri Gneezy", imageUrl: "images/Mixed Signals - Uri Gneezy.jpg"},
    {title: "The Phone Fix - Dr Faye Begeti", imageUrl: "images/The Phone Fix - Dr Faye Begeti.jpg"},
    {title: "Mastery - The Keys To Success And Long-Term Fulfillment - George Leonard", imageUrl: "images/Mastery - The Keys To Success And Long-Term Fulfillment - George Leonard.jpg"},
    {title: "Supercommunicators: How to Unlock the Secret Language of Connection - Charles Duhigg", imageUrl: "images/Supercommunicators: How to Unlock the Secret Language of Connection - Charles Duhigg.jpg"},
    {title: "This Book May Save Your Life Everyday Health Hacks to Worry Less and Live Better-Karan Rajan", imageUrl: "images/This Book May Save Your Life Everyday Health Hacks to Worry Less and Live Better-Karan Rajan.jpg"},
    {title: "Optimal - Daniel Goleman", imageUrl: "images/Optimal - Daniel Goleman.jpg"},
    {title: "Ultralearning Master Hard Skills Outsmart the Competition and Accelerate Your Career - Scott Young", imageUrl: "images/Ultralearning Master Hard Skills Outsmart the Competition and Accelerate Your Career - Scott Young.jpg"},
    {title: "Your Pocket Therapist - Dr. Annie Zimmerman", imageUrl: "images/Your Pocket Therapist - Dr. Annie Zimmerman.jpg"},
    {title: "The 5 Resets - Dr. Aditi Nerurkar M.D.", imageUrl: "images/The 5 Resets - Dr. Aditi Nerurkar M.D.jpg"},
    {title: "Art Of Focus - Dan Koe", imageUrl: "images/Art Of Focus - Dan Koe.jpg"},
    {title: "48 Laws of Power - Robert Greene", imageUrl: "images/48 Laws of Power - Robert Greene.jpg"},
    {title: "Dopamine Nation: Finding Balance in the Age of Indulgence - Anna Lembke", imageUrl: "images/Dopamine Nation: Finding Balance in the Age of Indulgence - Anna Lembke.jpg"},
    {title: "Same as Ever: A Guide to What Never Changes - Morgan Housel", imageUrl: "images/Same as Ever: A Guide to What Never Changes - Morgan Housel.jpg"},
    {title: "The Art Of Focus - Dan Koe", imageUrl: "images/The Art Of Focus - Dan Koe.jpg"},
    {title: "Self-Talk for a Calmer You - Beverly Flaxington", imageUrl: "images/Self-Talk for a Calmer You - Beverly Flaxington.jpg"},
    {title: "100M Offers How to Make Offers So Good People Feel Stupid Saying No - Alex Hormozi", imageUrl: "images/100M Offers How to Make Offers So Good People Feel Stupid Saying No - Alex Hormozi.jpg"},
    {title: "Million Dollar Weekend The Surprisingly Simple Way to Launch a 7-Figure Business in 48 Hours", imageUrl: "images/Million Dollar Weekend The Surprisingly Simple Way to Launch a 7-Figure Business in 48 Hours.jpg"},
    {title: "Feel-Good Productivity: How to Do More of What Matters to You - Ali Abdaal", imageUrl: "images/Feel-Good Productivity: How to Do More of What Matters to You - Ali Abdaal.jpg"},
    {title: "Abundance - The Inner Path to Wealth - Deepak Chopra", imageUrl: "images/Abundance - The Inner Path to Wealth - Deepak Chopra.jpg"},
    {title: "Power: Why Some People Have It—and Others Don't- Jeffrey Pfeffer", imageUrl: "images/Power: Why Some People Have It—and Others Don't- Jeffrey Pfeffer.jpg"},
    {title: "Hook Point: How to Stand Out in a 3-Second World - Brendan Kane", imageUrl: "images/Hook Point: How to Stand Out in a 3-Second World - Brendan Kane.jpg"},
    {title: "Real Self-Care - Pooja Lakshmin MD", imageUrl: "images/Real Self-Care - Pooja Lakshmin MD.jpg"},
    {title: "Understanding How We Learn - Yana Weinstein", imageUrl: "images/Understanding How We Learn - Yana Weinstein.jpg"},
    {title: "Quiet: The Power of Introverts in a World That Can't Stop Talking - Susan Cain", imageUrl: "images/Quiet: The Power of Introverts in a World That Can't Stop Talking - Susan Cain.jpg"},
    {title: "Give and Take: A Revolutionary Approach to Success - Adam Grant", imageUrl: "images/Give and Take: A Revolutionary Approach to Success - Adam Grant.jpg"},
    {title: "Awaken Your Genius by Ozan Varol", imageUrl: "images/Awaken Your Genius by Ozan Varol.jpg"},
    {title: "The Daily Laws: 366 Meditations - Robert Greene", imageUrl: "images/The Daily Laws: 366 Meditations - Robert Greene.jpg"},
    {title: "The Hard Thing About Hard Things - Ben Horowitz", imageUrl: "images/The Hard Thing About Hard Things - Ben Horowitz.jpg"},
    {title: "The Introvert's Way - Sophia Dembling", imageUrl: "images/The Introvert's Way - Sophia Dembling.jpg"},
    {title: "Think Big: Take Small Steps and Build the Career You Want - Grace Lordan", imageUrl: "images/Think Big: Take Small Steps and Build the Career You Want - Grace Lordan.jpg"},
    {title: "Mindfulness for Dummies - Shamash Alidina", imageUrl: "images/Mindfulness for Dummies - Shamash Alidina.jpg"},
    {title: "48-Hour Start-Up: From Idea to Launch in 1 Weekend by Fraser Doherty", imageUrl: "images/48-Hour Start-Up: From Idea to Launch in 1 Weekend by Fraser Doherty.jpg"},
    {title: "What You Do Is Who You Are: How to Create Your Business Culture - Ben Horowitz", imageUrl: "images/What You Do Is Who You Are: How to Create Your Business Culture - Ben Horowitz.jpg"},
    {title: "The Millionaire Next Door: The Surprising Secrets of America's Rich - Thomas Stanley", imageUrl: "images/The Millionaire Next Door: The Surprising Secrets of America's Rich - Thomas Stanley.jpg"},
    {title: "The Thank You Economy - Gary Vaynerchuk", imageUrl: "images/The Thank You Economy - Gary Vaynerchuk.jpg"},
    {title: "Willpower Doesn't Work - Benjamin Hardy", imageUrl: "images/Willpower Doesn't Work - Benjamin Hardy.jpg"},
    {title: "To Sell Is Human: The Surprising Truth about Moving Others by Daniel H. Pink", imageUrl: "images/To Sell Is Human: The Surprising Truth about Moving Others by Daniel H. Pink.jpg"},
    {title: "If You're So Smart, Why Aren't You Happy - Raj Raghunathan", imageUrl: "images/If You're So Smart, Why Aren't You Happy - Raj Raghunathan.jpg"},
    {title: "Focus - The Hidden Driver of Excellence by Daniel Goleman", imageUrl: "images/Focus - The Hidden Driver of Excellence by Daniel Goleman.jpg"},
    {title: "Effortless - Make It Easier to Do What Matt by Greg McKeown", imageUrl: "images/Effortless - Make It Easier to Do What Matt by Greg McKeown.jpg"},
    {title: "The Effective Executive - Peter F. Drucker", imageUrl: "images/The Effective Executive - Peter F. Drucker.jpg"},
    {title: "Grit: The Power of Passion and Perseverance Paperback by Angela Duckworth", imageUrl: "images/Grit: The Power of Passion and Perseverance Paperback by Angela Duckworth.jpg"},
    {title: "Drive: The Surprising Truth About What Motivates Us Paperback by Daniel H. Pink", imageUrl: "images/Drive: The Surprising Truth About What Motivates Us Paperback by Daniel H. Pink.jpg"},
    {title: "Choose Yourself! - James Altucher", imageUrl: "images/Choose Yourself! - James Altucher.jpg"},
    {title: "Abundance: The Future Is Better Than You Think - Peter H. Diamandis", imageUrl: "images/Abundance: The Future Is Better Than You Think - Peter H. Diamandis.jpg"},
    {title: "Onward: How Starbucks Fought for Its Life without Losing Its Soul - Howard Schultz", imageUrl: "images/Onward: How Starbucks Fought for Its Life without Losing Its Soul - Howard Schultz.jpg"},
    {title: "Win Every Argument: The Art of Debating, Persuading, and Public Speaking - Mehdi Hasan", imageUrl: "images/Win Every Argument: The Art of Debating, Persuading, and Public Speaking - Mehdi Hasan.jpg"},
    {title: "Originals - How Non-Conformists Move the World - Adam Grant", imageUrl: "images/Originals - How Non-Conformists Move the World - Adam Grant.jpg"},
    {title: "The Everything Store: Jeff Bezos and the Age of Amazon - Brad Stone", imageUrl: "images/The Everything Store: Jeff Bezos and the Age of Amazon - Brad Stone.jpg"},
    {title: "Spare - Prince Harry, The Duke of Sussex", imageUrl: "images/Spare - Prince Harry, The Duke of Sussex.jpg"},
    {title: "Loserthink: How Untrained Brains Are Ruining America- Scott Adams", imageUrl: "images/Loserthink: How Untrained Brains Are Ruining America- Scott Adams.jpg"},
    {title: "How Adam Smith Can Change Your Life - Russ Roberts", imageUrl: "images/How Adam Smith Can Change Your Life - Russ Roberts.jpg"},
    {title: "Way of the Wolf - Jordan Belfort", imageUrl: "images/Way of the Wolf - Jordan Belfort.jpg"},
    {title: "Spiritual Activator - Oliver Nino", imageUrl: "images/Spiritual Activator - Oliver Nino.jpg"},
    {title: "Soul Boom: Why We Need a Spiritual Revolution - Rainn Wilson", imageUrl: "images/Soul Boom: Why We Need a Spiritual Revolution - Rainn Wilson.jpg"},
    {title: "The Surrender Experiment - Michael A. Singer", imageUrl: "images/The Surrender Experiment - Michael A. Singer.jpg"},
    {title: "Verbal Judo - The Gentle Art of Persuasion - George J. Thompson", imageUrl: "images/Verbal Judo - The Gentle Art of Persuasion - George J. Thompson.jpg"},
    {title: "How to Fail at Almost Everything and Still Win Big - Scott Adams", imageUrl: "images/How to Fail at Almost Everything and Still Win Big - Scott Adams.jpg"},
    {title: "Shoe Dog - A Memoir by the Creator of Nike - Phil Knight", imageUrl: "images/Shoe Dog - A Memoir by the Creator of Nike - Phil Knight.jpg"},
    {title: "How to Change - Katy Milkman", imageUrl: "images/How to Change - Katy Milkman.jpg"},
    {title: "Keep Going - Austin Kleon", imageUrl: "images/Keep Going - Austin Kleon.jpg"},
    {title: "Show Your Work! - Austin Kleon", imageUrl: "images/Show Your Work! - Austin Kleon.jpg"},
    {title: "Steal Like an Artist - Austin Kleon", imageUrl: "images/Steal Like an Artist - Austin Kleon.jpg"},
    {title: "Habits of a Happy Brain - Loretta Graziano Breuning", imageUrl: "images/Habits of a Happy Brain - Loretta Graziano Breuning.jpg"},
    {title: "Can't Hurt Me Master Your Mind and Defy the Odds", imageUrl: "images/Can't Hurt Me Master Your Mind and Defy the Odds.jpg"},
    {title: "10% Happier - Dan Harris", imageUrl: "images/10% Happier - Dan Harris.jpg"},
    {title: "Solve for Happy - Mo Gawdat", imageUrl: "images/Solve for Happy - Mo Gawdat.jpg"},
    {title: "Love Yourself Like Your Life Depends On It - Kamal Ravikant", imageUrl: "images/Love Yourself Like Your Life Depends On It - Kamal Ravikant.jpg"},
    {title: "The Power of No - James Altucher", imageUrl: "images/The Power of No - James Altucher.jpg"},
    {title: "The Little Book of Hygge - Danish Secrets to Happy Living - Meik Wiking", imageUrl: "images/The Little Book of Hygge - Danish Secrets to Happy Living - Meik Wiking.jpg"},
    {title: "Don't Sweat the Small Stuff And It's All - Richard Carlson", imageUrl: "images/Don't Sweat the Small Stuff And It's All - Richard Carlson.jpg"},
    {title: "Side Hustle - Chris Guillebeau", imageUrl: "images/Side Hustle - Chris Guillebeau.jpg"},
    {title: "Big Magic - Creative Living Beyond Fear - Elizabeth Gilbert", imageUrl: "images/Big Magic - Creative Living Beyond Fear - Elizabeth Gilbert.jpg"},
    {title: "Emotions - Osho", imageUrl: "images/Emotions - Osho.jpg"},
    {title: "Girl, Wash Your Face - Rachel Hollis", imageUrl: "images/Girl, Wash Your Face - Rachel Hollis.jpg"},
    {title: "Find Your Why - Simon Sinek", imageUrl: "images/Find Your Why - Simon Sinek.jpg"},
    {title: "The Power of Regret - How Looking Backward Moves Us Forward Daniel H. Pink", imageUrl: "images/The Power of Regret - How Looking Backward Moves Us Forward Daniel H. Pink.jpg"},
    {title: "The Comfort Book - Matt Haig", imageUrl: "images/The Comfort Book - Matt Haig.jpg"},
    {title: "Five Love Languages Singles Edition - Gary D. Chapman", imageUrl: "images/Five Love Languages Singles Edition - Gary D. Chapman.jpg"},
    {title: "The Life Changing Magic of Tidying Up - Marie Kondo", imageUrl: "images/The Life Changing Magic of Tidying Up - Marie Kondo.jpg"},
    {title: "The Gifts of Imperfection - Brene Brown", imageUrl: "images/The Gifts of Imperfection - Brene Brown.jpg"},
    {title: "Who Moved My Cheese - An Amazing Way to Deal Wealth Management - Spencer Johnson", imageUrl: "images/Who Moved My Cheese - An Amazing Way to Deal Wealth Management - Spencer Johnson.jpg"},
    {title: "The Obstacle Is the Way - The Timeless Art of Turning Trials into Triumph - Ryan Holiday", imageUrl: "images/The Obstacle Is the Way - The Timeless Art of Turning Trials into Triumph - Ryan Holiday.jpg"},
    {title: "Resilient - How to Grow an Unshakable Core of Calm, Strength, and Happiness - Rick Hanson", imageUrl: "images/Resilient - How to Grow an Unshakable Core of Calm, Strength, and Happiness - Rick Hanson.jpg"},
    {title: "How to attract money - Joseph Murphy", imageUrl: "images/How to attract money - Joseph Murphy.jpg"},
    {title: "52 Weekly Affirmations - Joseph Murphy", imageUrl: "images/52 Weekly Affirmations - Joseph Murphy.jpg"},
    {title: "You Are the Placebo Making Your Mind Matter - Joe Dispenza", imageUrl: "images/You Are the Placebo Making Your Mind Matter - Joe Dispenza.jpg"},
    {title: "Believe It to Achieve It - Brian Tracy", imageUrl: "images/Believe It to Achieve It - Brian Tracy.jpg"},
    {title: "Discipline Is Destiny - The Power of Self Control - Ryan Holiday", imageUrl: "images/Discipline Is Destiny - The Power of Self Control - Ryan Holiday.jpg"},
    {title: "Courage Is Calling Fortune Favors the Brave - Ryan Holiday", imageUrl: "images/Courage Is Calling Fortune Favors the Brave - Ryan Holiday.jpg"},
    {title: "The Body Keeps the Score - Bessel Van Der Kolk M.D.", imageUrl: "images/The Body Keeps the Score - Bessel Van Der Kolk M.D.jpg"},
    {title: "The Emotion Code - Dr. Bradley Nelson", imageUrl: "images/The Emotion Code - Dr. Bradley Nelson.jpg"},
    {title: "Stolen Focus - Why You Can't Pay Attention—and How to Think Deeply Again - Johann Hari", imageUrl: "images/Stolen Focus - Why You Can't Pay Attention—and How to Think Deeply Again - Johann Hari.jpg"},
    {title: "It Goes So Fast The Year of No Do Overs - Mary Louise Kelly", imageUrl: "images/It Goes So Fast The Year of No Do Overs - Mary Louise Kelly.jpg"},
    {title: "Make Your Bed -William H. McRaven", imageUrl: "images/Make Your Bed -William H. McRaven.jpg"},
    {title: "Good Vibes, Good Life How Self Love Is the Key to Unlocking Your Greatness - Vex King", imageUrl: "images/Good Vibes, Good Life How Self Love Is the Key to Unlocking Your Greatness - Vex King.jpg"},
    {title: "Nonviolent Communication A Language of Life - Marshall Rosenberg", imageUrl: "images/Nonviolent Communication A Language of Life - Marshall Rosenberg.jpg"},
    {title: "The Psychology of Money - Timeless Lessons on Wealth, Greed, and Happiness - Morgan Housel", imageUrl: "images/The Psychology of Money - Timeless Lessons on Wealth, Greed, and Happiness - Morgan Housel.jpg"},
    {title: "Ikigai: The Japanese Secret to a Long and Happy Life - Hector Garcia", imageUrl: "images/Ikigai: The Japanese Secret to a Long and Happy Life - Hector Garcia.jpg"},
    {title: "Building a Second Brain - Tiago Forte", imageUrl: "images/Building a Second Brain - Tiago Forte.jpg"},
    {title: "The Bed of Procrustes - Nassim Nicholas Taleb", imageUrl: "images/The Bed of Procrustes - Nassim Nicholas Taleb.jpg"},
    {title: "The Miracles of Your Mind - Joseph Murphy", imageUrl: "images/The Miracles of Your Mind - Joseph Murphy.jpg"},
    {title: "I Will Teach You to Be Rich - Ramit Sethi", imageUrl: "images/I Will Teach You to Be Rich - Ramit Sethi.jpg"},
    {title: "Stop Overthinking - Nick Trenton", imageUrl: "images/Stop Overthinking - Nick Trenton.jpg"},
    {title: "Zero to One - Peter Thiel", imageUrl: "images/Zero to One - Peter Thiel.jpg"},
    {title: "The 7 Habits of Highly Effective People - Stephen R. Covey", imageUrl: "images/The 7 Habits of Highly Effective People - Stephen R. Covey.jpg"},
    {title: "Deep Work: Rules for Focused Success - Cal Newport", imageUrl: "images/Deep Work: Rules for Focused Success - Cal Newport.jpg"},
    {title: "Why Has Nobody Told Me This Before - Dr Julie Smith", imageUrl: "images/Why Has Nobody Told Me This Before - Dr Julie Smith.jpg"},
    {title: "Nudge - Improving Decisions About Health, Wealth, and Happiness - Richard H. Thaler, Cass R. Sunstein", imageUrl: "images/Nudge - Improving Decisions About Health, Wealth, and Happiness - Richard H. Thaler, Cass R. Sunstein.jpg"},
    {title: "Never Split the Difference - Chris Voss", imageUrl: "images/Never Split the Difference - Chris Voss.jpg"},
    {title: "The Light We Carry - Michelle Obama", imageUrl: "images/The Light We Carry - Michelle Obama.jpg"},
    {title: "A New Earth - Awakening to Your Life's Purpose - Eckhart Tolle", imageUrl: "images/A New Earth - Awakening to Your Life's Purpose - Eckhart Tolle.jpg"},
    {title: "How to Win Friends and Influence People - Dale Carnegie", imageUrl: "images/How to Win Friends and Influence People - Dale Carnegie.jpg"},
    {title: "The Mastery of Love - A Practical Guide to the Art of Relationship - Don Miguel Ruiz", imageUrl: "images/The Mastery of Love - A Practical Guide to the Art of Relationship - Don Miguel Ruiz.jpg"},
    {title: "So Good They Can't Ignore You - Cal Newport", imageUrl: "images/So Good They Can't Ignore You - Cal Newport.jpg"},
    {title: "Think and Grow Rich! - Napoleon Hill", imageUrl: "images/Think and Grow Rich! - Napoleon Hill.jpg"},
    {title: "The Richest Man In Babylon - George S Clason", imageUrl: "images/The Richest Man In Babylon - George S Clason.jpg"},
    {title: "Rich Dad Poor Dad - Robert Kiyosaki", imageUrl: "images/Rich Dad Poor Dad - Robert Kiyosaki.jpg"},
    {title: "The Lean Startup - Eric Ries", imageUrl: "images/The Lean Startup - Eric Ries.jpg"},
    {title: "Skin in the Game - Nassim Nicholas Taleb", imageUrl: "images/Skin in the Game - Nassim Nicholas Taleb.jpg"},
    {title: "The Power of Now - Eckhart Tolle", imageUrl: "images/The Power of Now - Eckhart Tolle.jpg"},
    {title: "Antifragile - Things That Gain from Disorder - Nassim Taleb", imageUrl: "images/Antifragile - Things That Gain from Disorder - Nassim Taleb.jpg"},
    {title: "Mind to Matter - Dawson Church", imageUrl: "images/Mind to Matter - Dawson Church.jpg"},
    {title: "Hooked - Nir Eyal", imageUrl: "images/Hooked - Nir Eyal.jpg"},
    {title: "The Untethered Soul - Jefferson A Singer", imageUrl: "images/The Untethered Soul - Jefferson A Singer.jpg"},
    {title: "Breaking the Habit of Being Yourself - Joe Dispenza", imageUrl: "images/Breaking the Habit of Being Yourself - Joe Dispenza.jpg"},
    {title: "The Four Agreements - Don Miguel Ruiz", imageUrl: "images/The Four Agreements - Don Miguel Ruiz.jpg"},
    {title: "The Power of Your Subconscious Mind - Joseph Murphy", imageUrl: "images/The Power of Your Subconscious Mind - Joseph Murphy.jpg"},
    {title: "The Alchemist - Paulo Coelho", imageUrl: "images/The Alchemist - Paulo Coelho.jpg"},
    {title: "Secrets of the Millionaire Mind - T. Harv Eker", imageUrl: "images/Secrets of the Millionaire Mind - T. Harv Eker.jpg"},
    {title: "The 5AM Club - Own Your Morning Elevate Your Life - Robin Sharma", imageUrl: "images/The 5AM Club - Own Your Morning Elevate Your Life - Robin Sharma.jpg"},
    {title: "4 Hour Workweek - Timothy Ferriss", imageUrl: "images/4 Hour Workweek - Timothy Ferriss.jpg"},
    {title: "Outlive - The Science and Art of Longevity - Peter Attia, MD", imageUrl: "images/Outlive - The Science and Art of Longevity - Peter Attia, MD.jpg"},
    {title: "Psycho Cybernetics, Updated and Expanded - Maxwell Maltz", imageUrl: "images/Psycho Cybernetics, Updated and Expanded - Maxwell Maltz.jpg"},
    {title: "UNSCRIPTED - The Great Rat Race Escape - MJ DeMarco", imageUrl: "images/UNSCRIPTED - The Great Rat Race Escape - MJ DeMarco.jpg"},
    {title: "Atomic Habits - An Easy & Proven Way to Build Good Habits & Break Bad Ones - James Clear", imageUrl: "images/Atomic Habits - An Easy & Proven Way to Build Good Habits & Break Bad Ones - James Clear.jpg"},
    {title: "The Power of Experiments: Decision Making in a Data-Driven World - Michael Luca", imageUrl: "images/The Power of Experiments: Decision Making in a Data-Driven World - Michael Luca.jpg"},
    {title: "The Courage to Be Disliked - Ichiro Kishimi", imageUrl: "images/The Courage to Be Disliked - Ichiro Kishimi.jpg"},
    {title: "The Almanack of Naval Ravikant - Eric Jorgenson", imageUrl: "images/The Almanack of Naval Ravikant - Eric Jorgenson.jpg"},
    {title: "Thinking in Bets - Making Smarter Decisions  - Annie Duke", imageUrl: "images/Thinking in Bets - Making Smarter Decisions  - Annie Duke.jpg"},
    {title: "The Millionaire Fastlane - Crack the Code to Wealth and Live Rich for a Lifetime -MJ Demarco", imageUrl: "images/The Millionaire Fastlane - Crack the Code to Wealth and Live Rich for a Lifetime -MJ Demarco.jpg"},
    {title: "Smarter Faster Better: The Secrets of Being Productive in Life and Business- Charles Duhigg", imageUrl: "images/Smarter Faster Better: The Secrets of Being Productive in Life and Business- Charles Duhigg.jpg"},
    {title: "How to Stop Worrying and Start Living - Dale Carnegie", imageUrl: "images/How to Stop Worrying and Start Living - Dale Carnegie.jpg"},
];

  const booksList = document.getElementById('booksList');
  booksList.className = "grid grid-cols-6 gap-4"; // Setup a grid with 6 columns

  function displayBooks(filteredBooks) {
      booksList.innerHTML = ''; // Clear the books list

      filteredBooks.forEach(book => {
          const li = document.createElement('li');
          li.className = "flex flex-col items-center bg-white hover:bg-gray-50 transition-colors duration-200 ease-in-out border border-gray-200 shadow-sm";
          
          const img = document.createElement('img');
          img.src = book.imageUrl;
          img.alt = book.title;
          img.className = "w-full h-48 object-cover";
          
          const titleDiv = document.createElement('div');
          titleDiv.className = "text-center p-2";
          
          const link = document.createElement('a');
          link.href = `https://www.amazon.com/s?k=${encodeURIComponent(book.title)}&language=en_US&crid=394BKWL5WW95V&linkCode=sl2&linkId=2427950e84b2e6fab6434b6771a064e8&sprefix=%2Caps%2C310&tag=matheuspupp0a-20&ref=as_li_ss_tl`;
          link.textContent = book.title;
          link.target = "_blank";
          link.className = "text-blue-600 hover:text-blue-800 font-semibold";
          
          titleDiv.appendChild(link);
          
          li.appendChild(img);
          li.appendChild(titleDiv);
          booksList.appendChild(li);
      });
  }

  // New functionality to read a query parameter and redirect
  function redirectToBookFromQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookTitleQuery = urlParams.get('bookTitle');

    if (bookTitleQuery) {
      const decodedQuery = decodeURIComponent(bookTitleQuery).toLowerCase();

      // Find a book where the title includes the decoded query
      const matchingBook = books.find(book => book.title.toLowerCase().includes(decodedQuery));
      
      if (matchingBook) {
        // Construct the Amazon search URL
        const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(matchingBook.title)}&language=en_US&crid=394BKWL5WW95V&linkCode=sl2&linkId=2427950e84b2e6fab6434b6771a064e8&sprefix=%2Caps%2C310&tag=matheuspupp0a-20&ref=as_li_ss_tl`;
        window.location.href = amazonSearchUrl; // Redirect
      }
    }
  }

  // Call the redirect function on page load
  redirectToBookFromQueryParam();

  // Initially display all books
  displayBooks(books);

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.toLowerCase();
      const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchText));
      displayBooks(filteredBooks); // Update the displayed books based on the search
  });
});
