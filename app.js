const express = require("express");
const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

var duas = [
	{
		ayah: ["١  اَلۡحَمۡدُ لِلّٰہِ رَبِّ الۡعٰلَمِیۡنَ", "٢  الرَّحۡمٰنِ الرَّحِیۡمِ", "٣  مٰلِکِ یَوۡمِ الدِّیۡنِ", "٤  اِیَّاکَ نَعۡبُدُ وَ اِیَّاکَ نَسۡتَعِیۡنُ", "٥ اِهْدِ نَا الصِّرَاطَ الۡمُسۡتَقِیۡمَ", "٦  صِرَاطَ الَّذِیۡنَ اَنۡعَمۡتَ عَلَیۡہِمۡ", "٧  غَیۡرِ الۡمَغۡضُوۡبِ عَلَیۡہِمۡ وَ لَا الضَّآلِّیۡنَ"],
		translation: ["[All] praise and thanks is [due] to Allah, Lord of the worlds.", "The Entirely Merciful, the Especially Merciful,", "Sovereign of the Day of Recompense.", "It is You that we worship and to You we ask for help.", "Guide us to the straight path", "The path of those upon whom You have bestowed favour", "Not of those who have evoked [Your] anger or of those who are astray."],
		reference: "Surah AL-FATIHAH, Ayah 1-7"
	},
	{
		ayah: ["رَبَّنَا تَقَبَّلۡ مِنَّا اِنَّکَ اَنۡتَ السَّمِیۡعُ الۡعَلِیۡمُ"],
		translation: ["O our Lord! Accept (this service) from us, verily You and You (alone) are the All-Hearer, the All-Knower."],
		reference: "Surah AL-BAQARAH, Ayah 127"
	},
	{
		ayah: ["رَبَّنَا وَ اجۡعَلۡنَا مُسۡلِمَیۡنِ لَکَ وَ مِنۡ ذُرِّیَّتِنَاۤ اُمَّۃً مُّسۡلِمَۃً لَّکَ  وَ اَرِنَا مَنَاسِکَنَا وَ تُبۡ عَلَیۡنَا ۚ اِنَّکَ اَنۡتَ التَّوَّابُ الرَّحِیۡمُ"],
		translation: ["Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. Show us how to worship and accept our repentance, for You are the Ever Relenting, the Most Merciful."],
		reference: "Surah AL-BAQARAH, Ayah 128"
	},
	{
		ayah: ["رَبَّنَاۤ اٰتِنَا فِی الدُّنۡیَا حَسَنَۃً وَّ فِی الۡاٰخِرَۃِ حَسَنَۃً وَّ قِنَا عَذَابَ النَّارِ"],
		translation: ["Our Lord, grant us good in this world and good in the Hereafter, and protect us from the torment of the Fire."],
		reference: "Surah AL-BAQARAH, Ayah 201"
	},
	{
		ayah: ["رَبَّنَاۤ اَفۡرِغۡ عَلَیۡنَا صَبۡرًا وَّ ثَبِّتۡ اَقۡدَامَنَا وَ انۡصُرۡنَا عَلَی الۡقَوۡمِ الۡکٰفِرِیۡنَ"],
		translation: ["Our Lord, pour patience on us, make us stand firm, and help us against the disbelievers."],
		reference: "Surah AL-BAQARAH, Ayah 250"
	},
	{
		ayah: [" سَمِعۡنَا وَ اَطَعۡنَا ٭۫ غُفۡرَانَکَ رَبَّنَا وَ اِلَیۡکَ الۡمَصِیۡرُ"],
		translation: ["We hear and obey. Grant us Your forgiveness, our Lord. To You we all return."],
		reference: "Surah AL-BAQARAH, Ayah 285"
	},
	{
		ayah: [" رَبَّنَا لَا تُؤَاخِذۡنَاۤ اِنۡ نَّسِیۡنَاۤ اَوۡ اَخۡطَاۡنَا ۚ رَبَّنَا وَ لَا تَحۡمِلۡ عَلَیۡنَاۤ اِصۡرًا کَمَا حَمَلۡتَہٗ عَلَی الَّذِیۡنَ مِنۡ قَبۡلِنَا ۚ رَبَّنَا وَ لَا تُحَمِّلۡنَا مَا لَا طَاقَۃَ لَنَا بِہٖ ۚ وَ اعۡفُ عَنَّا ٝ وَ اغۡفِرۡ لَنَا ٝ وَ ارۡحَمۡنَا ٝ اَنۡتَ مَوۡلٰٮنَا فَانۡصُرۡنَا عَلَی الۡقَوۡمِ الۡکٰفِرِیۡنَ"],
		translation: ["Lord, do not take us to task if we forget or make mistakes. Lord, do not burden us as You burdened those before us. Lord, do not burden us with more than we have strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so help us against the disbelievers."],
		reference: "Surah AL-BAQARAH, Ayah 286"
	},
	{
		ayah: ["رَبَّنَا لَا تُزِغۡ قُلُوۡبَنَا بَعۡدَ اِذۡ ہَدَیۡتَنَا وَ ہَبۡ لَنَا مِنۡ لَّدُنۡکَ رَحۡمَۃً ۚ اِنَّکَ اَنۡتَ الۡوَہَّابُ"],
		translation: ["Our Lord, do not let our hearts deviate after You have guided us. Grant us Your mercy: You are the Ever Giving."],
		reference: "Surah ALE-IMRAN, Ayah 8"
	},
	{
		ayah: ["رَبَّنَاۤ اِنَّکَ جَامِعُ النَّاسِ لِیَوۡمٍ لَّا رَیۡبَ فِیۡہِ ؕ اِنَّ اللّٰہَ لَا یُخۡلِفُ الۡمِیۡعَادَ"],
		translation: ["Our Lord, You will gather all people on the Day of which there is no doubt, surely Allah will never break His promise."],
		reference: "Surah ALE-IMRAN, Ayah 9"
	},
	{
		ayah: ["رَبَّنَاۤ اِنَّنَاۤ اٰمَنَّا فَاغۡفِرۡ لَنَا ذُنُوۡبَنَا وَ قِنَا عَذَابَ النَّارِ"],
		translation: ["Our Lord! surely we believe, therefore forgive us our sins and save us from the chastisement of the fire."],
		reference: "Surah ALE-IMRAN, Ayah 16"
	},
	{
		ayah: [" اللّٰہُمَّ مٰلِکَ الۡمُلۡکِ تُؤۡتِی الۡمُلۡکَ مَنۡ تَشَآءُ وَ تَنۡزِعُ الۡمُلۡکَ مِمَّنۡ تَشَآءُ ۫ وَ تُعِزُّ مَنۡ تَشَآءُ وَ تُذِلُّ مَنۡ تَشَآءُ ؕ بِیَدِکَ الۡخَیۡرُ ؕ اِنَّکَ عَلٰی کُلِّ شَیۡءٍ قَدِیۡرٌ"],
		translation: ["O Allah , Owner of Sovereignty, You give  sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. InYour hand is [all] good. Indeed, You have power over everything."],
		reference: "Surah ALE-IMRAN, Ayah 26"
	},
	{
		ayah: ["رَبِّ ہَبۡ لِیۡ مِنۡ لَّدُنۡکَ ذُرِّیَّۃً طَیِّبَۃً ۚ اِنَّکَ سَمِیۡعُ الدُّعَآءِ"],
		translation: ["Lord, from Your grace grant me virtuous offspring, surely You are the Hearer of every prayer."],
		reference: "Surah ALE-IMRAN, Ayah 38",
		note: "This is the supplication of Prophet Zakariyya (Peace be upon him)"
	},
	{
		ayah: ["رَبَّنَاۤ اٰمَنَّا بِمَاۤ اَنۡزَلۡتَ وَ اتَّبَعۡنَا الرَّسُوۡلَ فَاکۡتُبۡنَا مَعَ الشّٰہِدِیۡنَ"],
		translation: ["Lord, we believe in what You have revealed and we follow the messenger: record us among those who bear witness [to the Truth]."],
		reference: "Surah ALE-IMRAN, Ayah 53"
	},
	{
		ayah: [" رَبَّنَا اغۡفِرۡ لَنَا ذُنُوۡبَنَا وَ اِسۡرَافَنَا فِیۡۤ اَمۡرِنَا وَ ثَبِّتۡ اَقۡدَامَنَا وَ انۡصُرۡنَا عَلَی الۡقَوۡمِ الۡکٰفِرِیۡنَ "],
		translation: ["Our Lord, forgive us our sins and our transgressions. Make our feet firm, and give us help against the disbelievers."],
		reference: "Surah ALE-IMRAN, Ayah 147"
	},
	{
		ayah: [" رَبَّنَا مَا خَلَقۡتَ ہٰذَا بَاطِلًا ۚ سُبۡحٰنَکَ فَقِنَا عَذَابَ النَّارِ "],
		translation: ["Our Lord! You have not created all this without purpose– You are far above that!– so protect us from the torment of the Fire."],
		reference: "Surah ALE-IMRAN, Ayah 191"
	},
	{
		ayah: ["رَبَّنَاۤ اِنَّکَ مَنۡ تُدۡخِلِ النَّارَ فَقَدۡ اَخۡزَیۡتَہٗ ؕ وَ مَا لِلظّٰلِمِیۡنَ مِنۡ اَنۡصَارٍ"],
		translation: ["Our Lord! You will truly humiliate those You commit to the Fire. The evildoers have no one to help them."],
		reference: "Surah ALE-IMRAN, Ayah 192"
	},
	{
		ayah: ["رَبَّنَاۤ اِنَّنَا سَمِعۡنَا مُنَادِیًا یُّنَادِیۡ لِلۡاِیۡمَانِ اَنۡ اٰمِنُوۡا بِرَبِّکُمۡ فَاٰمَنَّا ٭ۖ رَبَّنَا فَاغۡفِرۡ لَنَا ذُنُوۡبَنَا وَ کَفِّرۡ عَنَّا سَیِّاٰتِنَا وَ تَوَفَّنَا مَعَ الۡاَبۡرَارِ"],
		translation: ["Our Lord! We have heard someone calling us to faith- “Believe in your Lord” - and we have believed. Our Lord! Forgive us our sins, wipe out our bad deeds, and grant that we join the righteous when we die."],
		reference: "Surah ALE-IMRAN, Ayah 193"
	},
	{
		ayah: ["رَبَّنَا وَ اٰتِنَا مَا وَعَدۡتَّنَا عَلٰی رُسُلِکَ وَ لَا تُخۡزِنَا یَوۡمَ الۡقِیٰمَۃِ ؕ اِنَّکَ لَا تُخۡلِفُ الۡمِیۡعَادَ"],
		translation: ["Our Lord! Bestow upon us all that You have promised us through Your messengers; do not disgrace us on the Day of Resurrection; You never break Your promise."],
		reference: "Surah ALE-IMRAN, Ayah 194"
	},
	{
		ayah: ["رَبَّنَاۤ اَخۡرِجۡنَا مِنۡ ہٰذِہِ الۡقَرۡیَۃِ الظَّالِمِ اَہۡلُہَا ۚ وَ اجۡعَلۡ لَّنَا مِنۡ لَّدُنۡکَ وَلِیًّا ۚۙ وَّ اجۡعَلۡ لَّنَا مِنۡ لَّدُنۡکَ نَصِیۡرًا"],
		translation: ["Our Lord, take us out of this city of oppressive people and appoint for us from Yourself a protector and appoint for us from Yourself a helper."],
		reference: "Surah AN-NISA’, Ayah 75"
	},
	{
		ayah: [" رَبَّنَاۤ اٰمَنَّا فَاکۡتُبۡنَا مَعَ الشّٰہِدِیۡنَ"],
		translation: ["Our Lord, we have believed, so register us among the witnesses."],
		reference: "Surah AL-MA’IDAH, Ayah 83"
	},
	{
		ayah: ["رَبَّنَاۤ اَنۡزِلۡ عَلَیۡنَا مَآئِدَۃً مِّنَ السَّمَآءِ تَکُوۡنُ لَنَا عِیۡدًا لِّاَوَّلِنَا وَ اٰخِرِنَا وَ اٰیَۃً مِّنۡکَ ۚ وَ ارۡزُقۡنَا وَ اَنۡتَ خَیۡرُ الرّٰزِقِیۡنَ"],
		translation: ["O Allah, our Lord, send down to us a table [spread with food] from heaven to be for us a festival for the first of us and the last of us and a sign from You. And provide for us, and You are the best of providers."],
		reference: "Surah  AL-MA’IDAH, Ayah 114",
		note: "This is the supplication of Prophet Isa (Peace be upon him)"
	},
	{
		ayah: ["رَبَّنَا ظَلَمۡنَاۤ اَنۡفُسَنَا ٜ وَ اِنۡ لَّمۡ تَغۡفِرۡ لَنَا وَ تَرۡحَمۡنَا لَنَکُوۡنَنَّ مِنَ الۡخٰسِرِیۡنَ"],
		translation: ["Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."],
		reference: "Surah AL-A’RAF, Ayah 23"
	},
	{
		ayah: ["رَبَّنَا افۡتَحۡ بَیۡنَنَا وَ بَیۡنَ قَوۡمِنَا بِالۡحَقِّ وَ اَنۡتَ خَیۡرُ الۡفٰتِحِیۡنَ"],
		translation: ["Our Lord, decide between us and our people in truth, and You are the best of those who give decisions."],
		reference: "Surah AL-A’RAF, Ayah 89"
	},
	{
		ayah: ["رَبَّنَاۤ اَفۡرِغۡ عَلَیۡنَا صَبۡرًا وَّ تَوَفَّنَا مُسۡلِمِیۡنَ"],
		translation: ["Our Lord, pour upon us patience and let us die as Muslims [in submission to You]."],
		reference: "Surah AL-A’RAF, Ayah 126"
	},
	{
		ayah: ["رَبِّ اغۡفِرۡ لِیۡ وَ لِاَخِیۡ وَ اَدۡخِلۡنَا فِیۡ رَحۡمَتِکَ ۫ۖ وَ اَنۡتَ اَرۡحَمُ الرّٰحِمِیۡنَ"],
		translation: ["My Lord, forgive me and my brother and admit us into Your mercy, for You are the most merciful of the merciful."],
		reference: "Surah AL-A’RAF, Ayah 126",
		note: "This is the supplication of Prophet Musa (Peace be upon him)"
	},
	{
		ayah: [" ٨٥ رَبَّنَا لَا تَجۡعَلۡنَا فِتۡنَۃً لِّلۡقَوۡمِ الظّٰلِمِیۡن", "٨٦ وَنَجِّنَا  بِرَحْمَتِكَ  مِنَ  ٱلْقَوْمِ  ٱلْكَٰفِرِينَ"],
		translation: ["Our Lord, make us not [objects of] trial for the wrongdoing people.", "Save us, in Your mercy, from those who reject [Your message]."],
		reference: "Surah YUNUS, Ayah 85 & 86"
	},
	{
		ayah: ["ارۡکَبُوۡا فِیۡہَا بِسۡمِ اللّٰہِ مَ‍‍جۡؔرٖٮہَا وَ مُرۡسٰٮہَا ؕ اِنَّ رَبِّیۡ لَغَفُوۡرٌ رَّحِیۡمٌ"],
		translation: ["Embark therein; in the name of Allah is its course and its anchorage. Indeed, my Lord is Forgiving and Merciful."],
		reference: "Surah HUD, Ayah 41"
	},
	{
		ayah: ["رَبِّ اِنِّیۡۤ اَعُوۡذُ بِکَ اَنۡ اَسۡـَٔلَکَ مَا لَـیۡسَ لِیۡ بِہٖ عِلۡمٌ ؕ وَ اِلَّا تَغۡفِرۡ لِیۡ وَ تَرۡحَمۡنِیۡۤ اَکُنۡ مِّنَ الۡخٰسِرِیۡنَ"],
		translation: ["My Lord, I seek refuge in You from asking that of which I have no knowledge. And unless You forgive me and have mercy upon me, I will be among the losers."],
		reference: "Surah HUD, Ayah 47",
		note: "This is the supplication of Prophet Nuh (Peace be upon him)"
	},
	{
		ayah: ["رَبِّ السِّجۡنُ اَحَبُّ اِلَیَّ مِمَّا یَدۡعُوۡنَنِیۡۤ اِلَیۡہِ ۚ وَ اِلَّا تَصۡرِفۡ عَنِّیۡ کَیۡدَہُنَّ اَصۡبُ اِلَیۡہِنَّ وَ اَکُنۡ مِّنَ الۡجٰہِلِیۡنَ"],
		translation: ["My Lord, prison is more to my liking than that to which they invite me. And if You do not avert from me their plan, I might incline toward them and [thus] be of the ignorant."],
		reference: "Surah YUSUF, Ayah 33",
		note: "This is the supplication of Prophet Yusuf (Peace be upon him) against the fitnah of the women"
	},
	{
		ayah: ["رَبِّ قَدۡ اٰتَیۡتَنِیۡ مِنَ الۡمُلۡکِ وَ عَلَّمۡتَنِیۡ مِنۡ تَاۡوِیۡلِ الۡاَحَادِیۡثِ ۚ فَاطِرَ السَّمٰوٰتِ وَ الۡاَرۡضِ ۟ اَنۡتَ وَلِیّٖ فِی الدُّنۡیَا وَ الۡاٰخِرَۃِ ۚ تَوَفَّنِیۡ مُسۡلِمًا وَّ اَلۡحِقۡنِیۡ بِالصّٰلِحِیۡنَ"],
		translation: ["My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and in the Hereafter. Cause me to die a Muslim and join me with the righteous."],
		reference: "Surah YUSUF, Ayah 101",
		note: "This is the supplication of Prophet Yusuf (Peace be upon him)"
	},
	{
		ayah: ["رَبِّ اجۡعَلۡ ہٰذَا الۡبَلَدَ اٰمِنًا وَّ اجۡنُبۡنِیۡ وَ بَنِیَّ اَنۡ نَّعۡبُدَ الۡاَصۡنَامَ"],
		translation: ["My Lord, make this city [Makkah] secure and keep me and my sons away from worshipping idols."],
		reference: "Surah IBRAHIM, Ayah 35",
		note: "This is the supplication of Prophet Ibrahim (Peace be upon him)"
	},
	{
		ayah: ["رَبَّنَاۤ اِنَّکَ تَعۡلَمُ مَا نُخۡفِیۡ وَ مَا نُعۡلِنُ ؕ وَ مَا یَخۡفٰی عَلَی اللّٰہِ مِنۡ شَیۡءٍ فِی الۡاَرۡضِ وَ لَا فِی السَّمَآ"],
		translation: ["Our Lord, indeed You know what we conceal and what we declare, and nothing is hidden from Allah on the earth or in the heaven."],
		reference: "Surah IBRAHIM, Ayah 35"
	},
	{
		ayah: ["٤٠ رَبِّ اجۡعَلۡنِیۡ مُقِیۡمَ الصَّلٰوۃِ وَ مِنۡ ذُرِّیَّتِیۡ ٭ۖ رَبَّنَا وَ تَقَبَّلۡ دُعَآءِ", "٤١ رَبَّنَا اغۡفِرۡ لِیۡ وَ لِوَالِدَیَّ وَ لِلۡمُؤۡمِنِیۡنَ یَوۡمَ یَقُوۡمُ "],
		translation: ["My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication.", "Our Lord, forgive me and my parents and the believers the Day the account is established."],
		reference: "Surah IBRAHIM, Ayah 40 & 41"
	},
	{
		ayah: ["رَّبِّ ارۡحَمۡہُمَا کَمَا رَبَّیٰنِیۡ صَغِیۡرًا"],
		translation: ["My Lord, have mercy upon them as they [parents] brought me up [when I was] small."],
		reference: "Surah AL-ISRA, Ayah 24"
	},
	{
		ayah: ["رَّبِّ اَدۡخِلۡنِیۡ مُدۡخَلَ صِدۡقٍ وَّ اَخۡرِجۡنِیۡ مُخۡرَجَ صِدۡقٍ وَّ اجۡعَلۡ لِّیۡ مِنۡ لَّدُنۡکَ سُلۡطٰنًا نَّصِیۡرًا"],
		translation: ["My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority."],
		reference: "Surah AL-ISRA’, Ayah 80"
	},
	{
		ayah: ["رَبَّنَاۤ اٰتِنَا مِنۡ لَّدُنۡکَ رَحۡمَۃً وَّ ہَیِّیٴۡ لَنَا مِنۡ اَمۡرِنَا رَشَدًا"],
		translation: ["Our Lord, grant us from Yourself mercy and provide for us a right course in our affair."],
		reference: "Surah AL-KAHF, Ayah 10"
	},
	{
		ayah: ["٢٥ رَبِّ اشۡرَحۡ لِیۡ صَدۡرِیۡ", "٢٦ وَ یَسِّرۡ لِیۡۤ اَمۡرِیۡ", "٢٧ وَ احۡلُلۡ عُقۡدَۃً مِّنۡ لِّسَانِیۡ", "٢٨ یَفۡقَہُوۡا قَوۡلِیۡ"],
		translation: ["My Lord, expand for me my breast [with assurance]", "And ease for me my task", "And untie the knot from my tongue", "That they may understand my speech."],
		reference: "Surah TA HA, Ayah 25-28",
		note: "This is the supplication of Prophet Musa (Peace be upon him)"
	},
	{
		ayah: ["رَّبِّ زِدۡنِیۡ عِلۡمًا"],
		translation: ["My Lord, increase me in knowledge."],
		reference: "Surah TA HA, Ayah  114"
	},
	{
		ayah: ["اَنِّیۡ مَسَّنِیَ الضُّرُّ وَ اَنۡتَ اَرۡحَمُ الرّٰحِمِیۡنَ"],
		translation: ["Indeed, adversity has touched me, and you are the Most Merciful of the merciful."],
		reference: "Surah AL-ANBIYA’, Ayah 83",
		note: "This is the supplication of Prophet Ayyub (Peace be upon him)"
	},
	{
		ayah: ["رَبِّ لَا تَذَرۡنِیۡ فَرۡدًا وَّ اَنۡتَ خَیۡرُ الۡوٰرِثِیۡنَ"],
		translation: ["My Lord, do not leave me alone [with no heir], while you are the best of inheritors."],
		reference: "Surah AL-ANBIYA’, Ayah 89",
		note: "This is the supplication of Prophet Zakariyya (Peace be upon him)"
	},
	{
		ayah: ["لَّاۤ اِلٰہَ اِلَّاۤ اَنۡتَ سُبۡحٰنَکَ ٭ۖ اِنِّیۡ کُنۡتُ مِنَ الظّٰلِمِیۡنَ"],
		translation: ["There is no deity except You; exalted are You. Indeed, I am of the wrongdoers."],
		reference: "Surah AL-ANBIYA’, Ayah 87"
	},
	{
		ayah: ["رَّبِّ اَنۡزِلۡنِیۡ مُنۡزَلًا مُّبٰرَکًا وَّ اَنۡتَ خَیۡرُ الۡمُنۡزِلِیۡنَ"],
		translation: ["My Lord, let me land at a blessed landing place, and You are the best to accommodate [us]."],
		reference: "Surah AL-MU’MINUN, Ayah 29"
	},
	{
		ayah: ["رَبِّ فَلَا تَجۡعَلۡنِیۡ فِی الۡقَوۡمِ الظّٰلِمِیۡنَ"],
		translation: ["My Lord, then do not place me among the wrongdoing people."],
		reference: "Surah AL-MU’MINUN, Ayah 94"
	},
	{
		ayah: [" ٩٧ رَّبِّ اَعُوۡذُ بِکَ مِنۡ ہَمَزٰتِ الشَّیٰطِیۡنِ", "٩٨ وَ اَعُوۡذُ بِکَ رَبِّ اَنۡ یَّحۡضُرُوۡنِ"],
		translation: ["My Lord, I seek refuge in You from the incitements of the devils,", "And I seek refuge in You, my Lord, lest they be present with me."],
		reference: "Surah AL-MU’MINUN, Ayah 97 & 98"
	},
	{
		ayah: ["رَبَّنَاۤ اٰمَنَّا فَاغۡفِرۡ لَنَا وَ ارۡحَمۡنَا وَ اَنۡتَ خَیۡرُ الرّٰحِمِیۡنَ"],
		translation: ["Our Lord, we believe; forgive us therefore our sins, and have mercy on us; for You are the best of those who show mercy."],
		reference: "Surah AL-MU’MINUN, Ayah 109"
	},
	{
		ayah: ["رَّبِّ اغۡفِرۡ وَ ارۡحَمۡ وَ اَنۡتَ خَیۡرُ الرّٰحِمِیۡنَ"],
		translation: ["My Lord, forgive and have mercy, and You are the Best of those who show mercy."],
		reference: "Surah AL-MU’MINUN, Ayah 118"
	},
	{
		ayah: ["٦٥  رَبَّنَا اصۡرِفۡ عَنَّا عَذَابَ جَہَنَّمَ ٭ۖ اِنَّ عَذَابَہَا کَانَ غَرَامًا", "٦٦  اِنَّہَا سَآءَتۡ مُسۡتَقَرًّا وَّ مُقَامًا"],
		translation: ["Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering;", "Indeed, it is evil as a settlement and residence."],
		reference: "Surah AL-FURQAN, Ayah 65 & 66"
	},
	{
		ayah: ["وَاِذَا مَرِضۡتُ فَہُوَ یَشۡفِیۡنِ"],
		translation: ["And when I am ill, it is He who cures me."],
		reference: "Surah ASH-SHU’ARA, Ayah 80"
	},
	{
		ayah: ["٨٣ رَبِّ ہَبۡ لِیۡ حُکۡمًا وَّ اَلۡحِقۡنِیۡ بِالصّٰلِحِیۡنَ", "٨٤ وَ اجۡعَلۡ لِّیۡ لِسَانَ صِدۡقٍ فِی الۡاٰخِرِیۡنَ", "٨٥ وَ اجۡعَلۡنِیۡ مِنۡ وَّرَثَۃِ جَنَّۃِ النَّعِیۡمِ", "٨٦ وَ اغۡفِرۡ لِاَبِیۡۤ اِنَّہٗ کَانَ مِنَ الضَّآلِّیۡنَ", "٨٧ وَ لَا تُخۡزِنِیۡ یَوۡمَ یُبۡعَثُوۡنَ", "٨٨ یَوۡمَ لَا یَنۡفَعُ مَالٌ وَّ لَا بَنُوۡنَ"],
		translation: ["My Lord, grant me authority and join me with the righteous.", "And grant me a reputation of honor among later generations.", "And place me among the inheritors of the Garden of Pleasure.", "And forgive my father. Indeed, he has been of those astray.", "And do not disgrace me on the Day they are [all] resurrected -", "The Day when there will not benefit [anyone] wealth or children"],
		reference: "Surah ASH-SHU’ARA, Ayah 83-88"
	},
	{
		ayah: ["الۡحَمۡدُ لِلّٰہِ الَّذِیۡ فَضَّلَنَا عَلٰی کَثِیۡرٍ مِّنۡ عِبَادِہِ الۡمُؤۡمِنِیۡنَ"],
		translation: ["Praise [is due] to Allah, who has favored us over many of His believing servants."],
		reference: "Surah AN-NAML, Ayah 15",
		note: "This is the supplication of Prophets Sulaiman and Dawood (Peace be upon them)"
	},
	{
		ayah: ["رَبِّ اَوۡزِعۡنِیۡۤ اَنۡ اَشۡکُرَ نِعۡمَتَکَ الَّتِیۡۤ اَنۡعَمۡتَ عَلَیَّ وَ عَلٰی وَالِدَیَّ وَ اَنۡ اَعۡمَلَ صَالِحًا تَرۡضٰٮہُ وَ اَدۡخِلۡنِیۡ بِرَحۡمَتِکَ فِیۡ عِبَادِکَ الصّٰلِحِیۡنَ"],
		translation: ["My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants."],
		reference: "Surah AN-NAML, Ayah 19",
		note: "This is the supplication of Prophet Sulaiman (Peace be upon him)"
	},
	{
		ayah: ["رَبِّ اِنِّیۡ ظَلَمۡتُ نَفۡسِیۡ فَاغۡفِرۡ لِیۡ فَغَفَرَ لَہٗ ؕ اِنَّہٗ ہُوَ الۡغَفُوۡرُ الرَّحِیۡمُ"],
		translation: ["\"My Lord, indeed I have wronged myself, so forgive me,\" and He forgave him. Indeed, He is the Forgiving, the Merciful."],
		reference: "Surah AL-QASAS, Ayah 16",
		note: "This is the supplication of Prophet Musa (Peace be upon him)"
	},
	{
		ayah: ["رَبِّ نَجِّنِیۡ مِنَ الۡقَوۡمِ الظّٰلِمِیۡنَ"],
		translation: ["My Lord, deliver me from the unjust people."],
		reference: "Surah AL-QASAS, Ayah 21"
	},
	{
		ayah: ["رَبِّ اِنِّیۡ لِمَاۤ اَنۡزَلۡتَ اِلَیَّ مِنۡ خَیۡرٍ فَقِیۡرٌ"],
		translation: ["My Lord, indeed I am, for whatever good You would send down to me, in need."],
		reference: "Surah AL-QASAS, Ayah 24"
	},
	{
		ayah: ["رَبِّ انۡصُرۡنِیۡ عَلَی الۡقَوۡمِ الۡمُفۡسِدِیۡ"],
		translation: ["My Lord, support me against the corrupting people."],
		reference: "Surah AL-ANKABUT, Ayah 30",
		note: "This is the supplication of Prophet Lut (Peace be upon him)"
	},
	{
		ayah: ["الۡحَمۡدُ لِلّٰہِ الَّذِیۡۤ اَذۡہَبَ عَنَّا الۡحَزَنَ ؕ اِنَّ رَبَّنَا لَغَفُوۡرٌ شَکُوۡرُ"],
		translation: ["Praise to Allah, who has removed from us [all] sorrow. Indeed, our Lord is Forgiving and Appreciative."],
		reference: "Surah AL-FATIR, Ayah 34"
	},
	{
		ayah: ["رَبِّ ہَبۡ لِیۡ مِنَ الصّٰلِحِیۡنَ"],
		translation: ["My Lord, grant me [a child] from among the righteous."],
		reference: "Surah AS-SAFFAT, Ayah 100",
		note: "This is the supplication of Prophet Ibrahim (Peace be upon him)"
	},
	{
		ayah: ["٧ رَبَّنَا وَسِعۡتَ کُلَّ شَیۡءٍ رَّحۡمَۃً وَّ عِلۡمًا فَاغۡفِرۡ لِلَّذِیۡنَ تَابُوۡا وَ اتَّبَعُوۡا سَبِیۡلَکَ وَ قِہِمۡ عَذَابَ الۡجَحِیۡمِ", "٨ رَبَّنَا وَ اَدۡخِلۡہُمۡ جَنّٰتِ عَدۡنِ ۣالَّتِیۡ وَعَدۡتَّہُمۡ وَ مَنۡ صَلَحَ مِنۡ اٰبَآئِہِمۡ وَ اَزۡوَاجِہِمۡ وَ ذُرِّیّٰتِہِمۡ ؕ اِنَّکَ اَنۡتَ الۡعَزِیۡزُ الۡحَکِیۡمُ"],
		translation: ["Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who have repented and followed Your way and protect them from the punishment of Hellfire.", "Our Lord, and admit them to gardens of perpetual residence which You have promised them and whoever was righteous among their fathers, their spouses and their offspring. Indeed, it is You who is the Exalted in Might, the Wise."],
		reference: "Surah GHAFIR, Ayah 7 & 8"
	},
	{
		ayah: ["سُبۡحٰنَ الَّذِیۡ سَخَّرَ لَنَا ہٰذَا وَ مَا کُنَّا لَہٗ مُقۡرِنِیۡنَ وَ اِنَّاۤ اِلٰی رَبِّنَا لَمُنۡقَلِبُوۡنَ"],
		translation: ["Exalted is He who has subjected this to us, and we could not have [otherwise] subdued it. And indeed we, to our Lord, will [surely] return."],
		reference: "Surah AZ-ZUKHRUF, Ayah 13 & 14"
	},
	{
		ayah: [" رَبِّ اَوۡزِعۡنِیۡۤ اَنۡ اَشۡکُرَ نِعۡمَتَکَ الَّتِیۡۤ اَنۡعَمۡتَ عَلَیَّ وَ عَلٰی وَالِدَیَّ وَ اَنۡ اَعۡمَلَ صَالِحًا تَرۡضٰہُ وَ اَصۡلِحۡ لِیۡ فِیۡ ذُرِّیَّتِیۡ ۚؕ اِنِّیۡ تُبۡتُ اِلَیۡکَ وَ اِنِّیۡ مِنَ الۡمُسۡلِمِیۡنَ"],
		translation: ["My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to work righteousness of which You will approve and make righteous for me my offspring. Indeed, I have repented to You, and indeed, I am of the Muslims."],
		reference: "Surah AL-AHQAF, Ayah 15"
	},
	{
		ayah: ["رَبَّنَا اغۡفِرۡ لَنَا وَ لِاِخۡوَانِنَا الَّذِیۡنَ سَبَقُوۡنَا بِالۡاِیۡمَانِ وَ لَا تَجۡعَلۡ فِیۡ قُلُوۡبِنَا غِلًّا لِّلَّذِیۡنَ اٰمَنُوۡا رَبَّنَاۤ اِنَّکَ رَءُوۡفٌ رَّحِیۡمٌ"],
		translation: ["Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful."],
		reference: "Surah AL-HASHR, Ayah 10"
	},
	{
		ayah: ["رَبَّنَا عَلَیۡکَ تَوَکَّلۡنَا وَ اِلَیۡکَ اَنَبۡنَا وَ اِلَیۡکَ الۡمَصِیۡرُ "],
		translation: ["Our Lord, upon You we have relied, and to You we have turned repentant, and to You is the final destination."],
		reference: "Surah AL-MUMTAHANAH, Ayah 4"
	},
	{
		ayah: ["رَبَّنَا لَا تَجۡعَلۡنَا فِتۡنَۃً لِّلَّذِیۡنَ کَفَرُوۡا وَ اغۡفِرۡ لَنَا رَبَّنَا ۚ اِنَّکَ اَنۡتَ الۡعَزِیۡزُ الۡحَکِیۡمُ"],
		translation: ["Our Lord, make us not [objects of] torment for the disbelievers and forgive us, our Lord. Indeed, it is You who is the Exalted in Might, the Wise."],
		reference: "Surah AL-MUMTAHANAH, Ayah 5"
	},
	{
		ayah: ["رَبَّنَاۤ اَتۡمِمۡ لَنَا نُوۡرَنَا وَ اغۡفِرۡ لَنَا ۚ اِنَّکَ عَلٰی کُلِّ شَیۡءٍ قَدِیۡرٌ"],
		translation: ["Our Lord, perfect our light and forgive us. Indeed, You are over all things competent."],
		reference: "Surah AT-TAHRIM, Ayah 8"
	},
	{
		ayah: ["رَبِّ ابۡنِ لِیۡ عِنۡدَکَ بَیۡتًا فِی الۡجَنَّۃِ وَ نَجِّنِیۡ مِنۡ فِرۡعَوۡنَ وَ عَمَلِہٖ وَ نَجِّنِیۡ مِنَ الۡقَوۡمِ الظّٰلِمِیۡنَ"],
		translation: ["My Lord, build for me near You a house in Paradise and save me from Pharaoh and his deeds and save me from the wrongdoing people."],
		reference: "Surah AT-TAHRIM, Ayah 11",
		note: "This is the supplication of Pharaoh’s wife-Asiya (peace be upon her)"
	},
	{
		ayah: ["رَّبِّ لَا تَذَرۡ عَلَی الۡاَرۡضِ مِنَ الۡکٰفِرِیۡنَ دَیَّارًا"],
		translation: ["My Lord, leave not in the land a single one of the disbelievers."],
		reference: "Surah NUH, Ayah 26"
	},
	{
		ayah: ["رَبِّ اغۡفِرۡ لِیۡ وَ لِوَالِدَیَّ وَ لِمَنۡ دَخَلَ بَیۡتِیَ مُؤۡمِنًا وَّ لِلۡمُؤۡمِنِیۡنَ وَ الۡمُؤۡمِنٰتِ ؕ وَ لَا تَزِدِ الظّٰلِمِیۡنَ اِلَّا تَبَارًا"],
		translation: ["My Lord, forgive me and my parents, and him who enters my house as a believer, and the believing men and the believing women; And do not increase the wrongdoers except in destruction."],
		reference: "Surah NUH, Ayah 28"
	}
];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/duas", function(req, res){
    res.render("duas", {duas:duas});
});

app.get("/duas/:id", function(req, res) {
	res.render("show", {dua: duas[req.params.id]})
});


app.listen(3000, process.env.IP, function(){
   console.log("The Server Has Started!");
});