
// A pre selection of verses of the Bible included in an array
const bibleVerses = [
    "Romans 8:38-39 - For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    "Lamentations 3:22-23 - The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    "2 Corinthians 4:16-18 - So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen.",
    "John 15:13 - Greater love has no one than this: to lay down one's life for one's friends.",
    "Ephesians 3:20 - Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
    "Deuteronomy 31:6 - Be strong and courageous. Do not be afraid or terrified because of them, or the LORD your God goes with you; he will never leave you nor forsake you.",
    "Psalm 27:12 - The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?",
    "John 4:18 - There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
    "Romans 8:31 - What, then, shall we say in response to these things? If God is for us, who can be against us?",
    "Romans 15:13 - May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    "Psalm 31:24 - Be strong, and let your heart take courage, all you who wait for the LORD!",
    "Isaiah 41:10 - Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    "Isaiah 40:31 - But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    "Mark 10:27 - Jesus looked at them and said, ‘With man it is impossible, but not with God. For all things are possible with God.'",
    "1 Peter 5:7 - Casting all your anxieties on him, because he cares for you.",
    "Matthew 19:26 - But Jesus looked at them and said, ‘With man this is impossible, but with God all things are possible.'",
    "Philippians 4:13 - I can do all things through him who strengthens me.",
    "1 Corinthians 15:58 - Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the LORD, knowing that in the LORD your labor is not in vain.",
    "Proverbs 3:3-6 - Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
    "1 Corinthians 16:13-14 - Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love.",
    "Matthews 17:20 - Our faith can move mountains.",
    "Psalm 107:1 - Give thanks to the LORD for He is good: His love endures forever.",
    "Jeremiah 29:11 - For I know the plans I have for you, 'declares the LORD,' plans to prosper you and not to harm you, plans to give you hope and a future.",
    "Psalm 34:8 - Taste and see that the LORD is good; blessed is the one who takes refuge in him.",
    "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
];

let randomVerse  = (verses) => {
    let verseNumber = Math.floor(Math.random()*26);
    return `The selected passage is ${verses[verseNumber]}`
}

document.getElementById('verse').innerHTML = randomVerse(bibleVerses);