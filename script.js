document.addEventListener('DOMContentLoaded', function() {
  const books = [
    {title: "The Hunger Habit - Why We Eat When Were Not Hungry and How to Stop - Judson Brewer", imageUrl: "images/The Hunger Habit - Why We Eat When Were Not Hungry and How to Stop - Judson Brewer.jpg"},
    {title: "Practical Optimism: The Art, Science, and Practice of Exceptional Well-Being - Sue Varma", imageUrl: "images/Practical Optimism: The Art, Science, and Practice of Exceptional Well-Being - Sue Varma.jpg"},
    {title: "Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Balanced Brain - Camilla Nord", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Reinvent Yourself - Susan Kahn", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Life Brief: A Playbook for No-Regrets Living - Bonnie Wan", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Fluke Chance Chaos and Why Everything We Do Matters - Brian Klaas", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Uncommon Sense Teaching Practical Insights in Brain Science to Help Students Learn", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Amen Effect Ancient Wisdom to Mend Our Broken Hearts and World - Sharon Brous", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Mixed Signals - Uri Gneezy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Phone Fix - Dr Faye Begeti", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Mastery - The Keys To Success And Long-Term Fulfillment - George Leonard", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Supercommunicators: How to Unlock the Secret Language of Connection - Charles Duhigg", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "This Book May Save Your Life Everyday Health Hacks to Worry Less and Live Better-Karan Rajan", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Optimal - Daniel Goleman", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Ultralearning Master Hard Skills Outsmart the Competition and Accelerate Your Career", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Your Pocket Therapist - Dr. Annie Zimmerman", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The 5 Resets - Dr. Aditi Nerurkar M.D.", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Art Of Focus - Dan Koe", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "48 Laws of Power - Robert Greene", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Dopamine Nation: Finding Balance in the Age of Indulgence - Anna Lembke", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Same as Ever: A Guide to What Never Changes - Morgan Housel", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Art Of Focus - Dan Koe", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Self-Talk for a Calmer You - Beverly Flaxington", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "100M Offers How to Make Offers So Good People Feel Stupid Saying No - Alex Hormozi", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Million Dollar Weekend The Surprisingly Simple Way to Launch a 7-Figure Business in 48 Hours", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Feel-Good Productivity: How to Do More of What Matters to You - Ali Abdaal", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Abundance - The Inner Path to Wealth - Deepak Chopra", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Power: Why Some People Have It—and Others Don't- Jeffrey Pfeffer", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Hook Point: How to Stand Out in a 3-Second World - Brendan Kane", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Real Self-Care - Pooja Lakshmin MD", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Understanding How We Learn - Yana Weinstein", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Quiet: The Power of Introverts in a World That Can't Stop Talking - Susan Cain", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Give and Take: A Revolutionary Approach to Success - Adam Grant", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Awaken Your Genius by Ozan Varol", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Daily Laws: 366 Meditations - Robert Greene", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Hard Thing About Hard Things - Ben Horowitz", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Introvert's Way - Sophia Dembling", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Think Big: Take Small Steps and Build the Career You Want - Grace Lordan", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Mindfulness for Dummies - Shamash Alidina", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "48-Hour Start-Up: From Idea to Launch in 1 Weekend by Fraser Doherty", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "What You Do Is Who You Are: How to Create Your Business Culture - Ben Horowitz", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Millionaire Next Door: The Surprising Secrets of America's Rich - Thomas Stanley", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Thank You Economy - Gary Vaynerchuk", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Willpower Doesn't Work - Benjamin Hardy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "To Sell Is Human: The Surprising Truth about Moving Others by Daniel H. Pink", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "If You're So Smart, Why Aren't You Happy - Raj Raghunathan", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Focus - The Hidden Driver of Excellence by Daniel Goleman", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Effortless - Make It Easier to Do What Matt by Greg McKeown", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Effective Executive - Peter F. Drucker", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Grit: The Power of Passion and Perseverance Paperback by Angela Duckworth", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Drive: The Surprising Truth About What Motivates Us Paperback by Daniel H. Pink", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Choose Yourself! - James Altucher", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Abundance: The Future Is Better Than You Think - Peter H. Diamandis", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Onward: How Starbucks Fought for Its Life without Losing Its Soul - Howard Schultz", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Win Every Argument: The Art of Debating, Persuading, and Public Speaking - Mehdi Hasan", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Originals - How Non-Conformists Move the World - Adam Grant", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Everything Store: Jeff Bezos and the Age of Amazon - Brad Stone", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Spare - Prince Harry, The Duke of Sussex", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Loserthink: How Untrained Brains Are Ruining America- Scott Adams", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "How Adam Smith Can Change Your Life - Russ Roberts", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Way of the Wolf - Jordan Belfort", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Spiritual Activator - Oliver Nino", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Soul Boom: Why We Need a Spiritual Revolution - Rainn Wilson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Surrender Experiment - Michael A. Singer", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Verbal Judo - The Gentle Art of Persuasion - George J. Thompson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "How to Fail at Almost Everything and Still Win Big - Scott Adams", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Shoe Dog - A Memoir by the Creator of Nike - Phil Knight", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "How to Change - Katy Milkman", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Keep Going - Austin Kleon", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Show Your Work! - Austin Kleon", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Steal Like an Artist - Austin Kleon", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Habits of a Happy Brain - Loretta Graziano Breuning", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Can't Hurt Me Master Your Mind and Defy the Odds", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "10% Happier - Dan Harris", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Solve for Happy - Mo Gawdat", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Love Yourself Like Your Life Depends On It - Kamal Ravikant", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Power of No - James Altucher", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Little Book of Hygge - Danish Secrets to Happy Living - Meik Wiking", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Don't Sweat the Small Stuff And It's All - Richard Carlson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Side Hustle - Chris Guillebeau", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Big Magic - Creative Living Beyond Fear - Elizabeth Gilbert", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Emotions - Osho", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Girl, Wash Your Face - Rachel Hollis", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Find Your Why - Simon Sinek", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Power of Regret - How Looking Backward Moves Us Forward Daniel H. Pink", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Comfort Book - Matt Haig", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Five Love Languages Singles Edition - Gary D. Chapman", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Life Changing Magic of Tidying Up - Marie Kondo", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Gifts of Imperfection - Brene Brown", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Who Moved My Cheese - An Amazing Way to Deal Wealth Management - Spencer Johnson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Obstacle Is the Way - The Timeless Art of Turning Trials into Triumph - Ryan Holiday", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Resilient - How to Grow an Unshakable Core of Calm, Strength, and Happiness - Rick Hanson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "How to attract money - Joseph Murphy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "52 Weekly Affirmations - Joseph Murphy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "You Are the Placebo Making Your Mind Matter - Joe Dispenza", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Believe It to Achieve It - Brian Tracy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Discipline Is Destiny - The Power of Self Control - Ryan Holiday", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Courage Is Calling Fortune Favors the Brave - Ryan Holiday", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Body Keeps the Score - Bessel Van Der Kolk M.D.", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Emotion Code - Dr. Bradley Nelson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Stolen Focus - Why You Can't Pay Attention—and How to Think Deeply Again - Johann Hari", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "It Goes So Fast The Year of No Do Overs - Mary Louise Kelly", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Make Your Bed -William H. McRaven", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Good Vibes, Good Life How Self Love Is the Key to Unlocking Your Greatness - Vex King", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Nonviolent Communication A Language of Life - Marshall Rosenberg", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Psychology of Money - Timeless Lessons on Wealth, Greed, and Happiness - Morgan Housel", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Ikigai: The Japanese Secret to a Long and Happy Life - Hector Garcia", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Building a Second Brain - Tiago Forte", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Bed of Procrustes - Nassim Nicholas Taleb", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Miracles of Your Mind - Joseph Murphy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "I Will Teach You to Be Rich - Ramit Sethi", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Stop Overthinking - Nick Trenton", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Zero to One - Peter Thiel", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The 7 Habits of Highly Effective People - Stephen R. Covey", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Deep Work: Rules for Focused Success - Cal Newport", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Why Has Nobody Told Me This Before - Dr Julie Smith", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Nudge - Improving Decisions About Health, Wealth, and Happiness - Richard H. Thaler, Cass R. Sunstein", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Never Split the Difference - Chris Voss", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Light We Carry - Michelle Obama", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "A New Earth - Awakening to Your Life's Purpose - Eckhart Tolle", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "How to Win Friends and Influence People - Dale Carnegie", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Mastery of Love - A Practical Guide to the Art of Relationship - Don Miguel Ruiz", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "So Good They Can't Ignore You - Cal Newport", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Think and Grow Rich! - Napoleon Hill", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Richest Man In Babylon - George S Clason", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Rich Dad Poor Dad - Robert Kiyosaki", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Lean Startup - Eric Ries", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Skin in the Game - Nassim Nicholas Taleb", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Power of Now - Eckhart Tolle", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Antifragile - Things That Gain from Disorder - Nassim Taleb", imageUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1682082306024/c21cb674-3ef5-43a3-9328-79de730e96e6.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"},
    {title: "Mind to Matter - Dawson Church", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Hooked - Nir Eyal", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Untethered Soul - Jefferson A Singer", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Breaking the Habit of Being Yourself - Joe Dispenza", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Four Agreements - Don Miguel Ruiz", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Power of Your Subconscious Mind - Joseph Murphy", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Alchemist - Paulo Coelho", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Secrets of the Millionaire Mind - T. Harv Eker", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The 5AM Club - Own Your Morning Elevate Your Life - Robin Sharma", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "4 Hour Workweek - Timothy Ferriss", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Outlive - The Science and Art of Longevity - Peter Attia, MD", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Psycho Cybernetics, Updated and Expanded - Maxwell Maltz", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "UNSCRIPTED - The Great Rat Race Escape - MJ DeMarco", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Atomic Habits - An Easy & Proven Way to Build Good Habits & Break Bad Ones - James Clear", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Power of Experiments: Decision Making in a Data-Driven World - Michael Luca", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Courage to Be Disliked - Ichiro Kishimi", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Almanack of Naval Ravikant - Eric Jorgenson", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Thinking in Bets - Making Smarter Decisions  - Annie Duke", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "The Millionaire Fastlane - Crack the Code to Wealth and Live Rich for a Lifetime -MJ Demarco", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "Smarter Faster Better: The Secrets of Being Productive in Life and Business- Charles Duhigg", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
    {title: "How to Stop Worrying and Start Living - Dale Carnegie", imageUrl: "images/Slow Productivity The Lost Art of Accomplishment Without Burnout - Cal Newport.jpg"},
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
