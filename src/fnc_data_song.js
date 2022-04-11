// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2014/6/29 Modified by nkeronkow
// 2018/11/26 Added to relick's github, changes tracked there
// 2021/03/26 Adapted to DJMAX Respect songs by shockdude
// github.com/shockdude/djmax-song-sorter
// 2022/04/02 Adapted to EZ2ON Reboot R songs by Arthorization
// 2022/04/02 Assets Extracted by Melone

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = '';
str_YouPath = 'https://www.youtube.com/embed/';
str_YouLink = 'https://www.youtube.com/watch?v=';

// Up to which position should images be shown for?
var int_ResultRank = 3;

// Maximum number of result rows before being broken off into another table.
var maxRows = 42;

// * Game and album titles
var ary_TitleData = [
	  "1st Trax"
	, "Special Edition"
	, "2nd Trax"
	, "3rd Trax"
	, "4th Trax"
	, "Platinum"
	, "6th Trax"
	, "7th Trax"
	, "EZ2ON 2008"
	, "EZ2ON 2013"
	, "EZ2ON 2021"
	, "Time Traveler"
	, "Codename Violet"
	, "Priestige Pass"
	, "O2JAM"
	];


// Number of columns in the selection list.
var int_Colspan = 3;

// * Music information
// [Index: Meaning]
// 0: unused
// 1: Track name
const TRACK_NAME = 1;
// 2: Array that maps to ary_TitleData, 0 = track not in title, 1 = track in title.
const TRACK_TITLES = 2;
// 3: Image filename
const TRACK_IMAGE = 3;
// 4: Youtube video ID
const TRACK_YOUTUBE_ID = 4;
// 5: Title (game/album) name
const TRACK_TITLE_NAME = 5;
// 6: Title (game/album) abbreviation
const TRACK_TITLE_ABBREV = 6;
// 7: Track Artist
const TRACK_ARTIST = 7;
// 8: Track type - regular song, V exclusive, link disc
const TRACK_TYPE = 8;
	const REGULAR_SONG = 1;
	const REMIXED_SONG = 2;
	const EXTERIOR_SONG = 3;

// 9: Extended Mix type - short, extended
const EXTENDED_TYPE = 9;
	const SHORT_MIX = 1;
	const EXTENDED_MIX = 2;

var ary_SongData = [
	//1st Trax :D
	[1, "Baby Dance",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748166133289000/BabyDance4.png", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Catch the Flow",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748246336770118/CatchTheFlow4.png", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "Confete",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748267853549588/Confete4.png", "OJTQiVk4xFo", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Dirty D",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748292226658304/DirtyD4.png", "gML5ef9eX88", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Do you Remember?",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748477501640774/DoYouRemember4.png", "6zwWLM5pb3o", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Envy Mask",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748477036081222/EnvyMaskRemaster4_35321.png", "sC9KGK-LYNY", "1st Trax", "1st", "Creatune/Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Freedom",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748489002434651/FreedomRemaster4_39964.png", "Ffkb9tTyVxE","1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Funny Funky",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748490218782720/FunnyFunky4.png", "7HK9BYkK3Yk", "1st Trax", "1st", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Get the Beat",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748529393569792/GetTheBeat4_34034.png", "cftJk7kI1A0", "1st Trax", "1st", "DJ. Hong", REGULAR_SONG, SHORT_MIX],
	[1, "I Do Love You",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748590269714452/IDoLoveYou4.png", "TOs-5u0fBkE", "1st Trax", "1st", "Jeon Jun-Kyu/CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "I've Fallen",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748591318290482/IveFallenRemaster4_39428.png", "eQ25ghXDxYg", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Let it Go",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748590957572096/LetItGo4.png", "LoX13su9zmk", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Look Out",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748590416494672/LookOutRemaster4_41038.png", "aKOP9UjD-GE", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 1",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748660767567922/Minus14.png", "xc3YHS3zUjk", "1st Trax", "1st", "Danmal_G", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 1 (HD Mix)",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748660314603541/Minus1HDMix4.png", "1st Trax", "1st", "Danmal_G", REMIXED_SONG, SHORT_MIX],
	[1, "Mystic Dream 9903",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748701112598578/MysticDream99034.png", "-Nd-ozUn8tQ", "1st Trax", "1st", "Danmal_G", REGULAR_SONG, SHORT_MIX],
	[1, "Quake in Kyoto",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748784625352715/QuakeInKyoto4.png", "gRa8ckgsDZg", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "The Rhythm",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hhttps://media.discordapp.net/attachments/773273391569829928/961748962073772052/TheRhythmRemaster4.png", "xJF2CsRqwd8", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "Southwest Cadillac",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748942842916964/SouthwestCadillac4.png", "ldeCGYPS0Wg", "1st Trax", "1st", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Stay",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748949679620116/StayRemaster4_36294.png", "0dDRNWS0rTY", "1st Trax", "1st", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Yes Yes",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748966419083284/YesYes4.png", "uffQ2Mdl9m4", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "You live the life you live",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748815247978536/Reggae4.png", "7quY1leNbY0", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Ztar warZ",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748965521494096/ZtarWarz4.png", "7quY1leNbY0", "1st Trax", "1st", "DJ. Melong", REGULAR_SONG, SHORT_MIX],
	
	
	// Special Edition :D
	[1, "Catch the Flow (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748246622007356/CatchTheFlowRemix4.png", "Yj-1zk9dFhU", "Special Edition", "S/E", "Creatune", REMIXED_SONG, SHORT_MIX],
	[1, "Combonation",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748245598601216/Combination4_39479.png", "Vz6GQm787bo", "Special Edition", "S/E", "Kim Jin Kwon", REGULAR_SONG, SHORT_MIX],
	[1, "Confete (Evening Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748264833650768/ConfeteRemix4.png", "o1zcQwSdsAg", "Special Edition", "S/E", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Dieoxin",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748291622690866/Dieoxin4.png", "bYmCYPCyzFw", "Special Edition", "S/E", "DJ. Yonda", REGULAR_SONG, SHORT_MIX],
	[1, "Do You Remember? (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748477723963402/DoYouRememberRemix4.png", "bZJxRTkcyJs", "Special Edition", "S/E", "Remix Station", REMIXED_SONG, SHORT_MIX],
	[1, "Envy Mask (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748477258391582/EnvyMaskRemix4.png", "B0Ak1bNiEUA", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	[1, "For 3 Weeks",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748491175071774/For3Weeks4_39510.png", "kyt9DOq27as", "Special Edition", "S/E", "Lee So-eun", REGULAR_SONG, SHORT_MIX],
	[1, "The Future",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748528596660264/Future4_38656.png", "ae26NcepRSQ", "Special Edition", "S/E", "Remix Station", REGULAR_SONG, SHORT_MIX],
	[1, "Let it Go (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748588784939038/LetItGoRemix4.png", "GdBZ4CaInGs", "Special Edition", "S/E", "Ruby Tuesday", REMIXED_SONG, SHORT_MIX],
	[1, "Love & Ectasy",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748590814973962/LoveExtasy4.png", "MRAGUApACxc", "Special Edition", "S/E", "Baby Vox", REGULAR_SONG, SHORT_MIX],
	[1, "My Honey",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748700693135400/MyHoney4.png", "Bmp1NCf029o", "Special Edition", "S/E", "Lee Seung-Hwan", REGULAR_SONG, SHORT_MIX],
	[1, "Mystic Dream 9903 (Horror Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748700907065364/MysticDream9903Remix4_36552.png", "hLKlgaaejyg", "Special Edition", "S/E", "Danmal_G", REMIXED_SONG, SHORT_MIX],
	[1, "Quake in Kyoto (Mega Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748784897998858/QuakeInKyotoRemix4.png", "vBfd5p3QXaw", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	[1, "R.D.M.",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748815965220974/RDM4.png", "Special Edition", "S/E", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Red Hot",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748816598564934/RedHot4.png", "I3cnLUMH9ac", "Special Edition", "S/E", "DR. YONDA", REGULAR_SONG, SHORT_MIX],
	[1, "The Rhythm (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748962342211674/TheRhythmRemix4.png", "_CDM5a5Fqjo", "Special Edition", "S/E", "Creatune", REMIXED_SONG, SHORT_MIX],
	[1, "Special K",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "hhttps://media.discordapp.net/attachments/773273391569829928/961748941001592895/SpecialK4.png", "Ab_hQCJzcg4", "Special Edition", "S/E", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Stay (Radio Edit)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748949935485008/StayRemix4.png", "-msgC8JBtOE", "Special Edition", "S/E", "Jeon Jun-Kyu", REMIXED_SONG, SHORT_MIX],
	[1, "You live the life you love (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748815445114931/ReggaeRemix4.png", "x86F_bVqjeU", "Special Edition", "S/E", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Ztar warZ (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748900774039604/ZtarWarzRemix4.png", "OHSSmnHAnRY", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	
	// 2nd Trax :D
	[1, "Anytime",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748167014096936/Anytime4.png", "X2r5Bo8Fkuw", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Appeal",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748167601307668/Appeal4.png", "M3dcumo8ISI", "2nd Trax", "2nd", "Andy Lee, Jennifer", REGULAR_SONG, SHORT_MIX],
	[1, "Back for More",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748208663539802/BackForMoreRemaster4.png", "1vy52s2YdeQ", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Back to Bed",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748209099767828/BackToBed4.png", "FUhbkxLQeGY", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Be my Baby",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748207468163122/BeMyBaby4.png", "Z-NnrYwVrX4", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "The Boy",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748963298541578/TheBoy4.png", "SnH6VdpZbkE", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Damnation",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748265911599104/Damnation4.png", "LDHbAODdP9g", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Departure",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748291173888010/Departure4.png", "K31ANpte9mg", "2nd Trax", "2nd", "Bae Hee-Kyoung", REGULAR_SONG, SHORT_MIX],
	[1, "Exist",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748492349493248/Exist4.png", "DAhkLzsq8DI", "2nd Trax", "2nd", "Kim Seung-Hyun", REGULAR_SONG, SHORT_MIX],
	[1, "Funky 5",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748489883226123/Funky54.png", "y4W2QM2BZew", "2nd Trax", "2nd", "Kim Seung-Hyun", REGULAR_SONG, SHORT_MIX],
	[1, "Get it Up",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748529137729586/GetItUp4.png", "uLEYC5mLkPI", "2nd Trax", "2nd", "Lee Jong-Pil, Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Hyponotize",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748589904797777/Hypnotize4.png", "pU8Lu2vI6SQ", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "It's my secret",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748591054053436/ItsMySecret4_37200.png", "0HW5C4EO59Y", "2nd Trax", "2nd", "Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "I've Got this Feeling",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748575858069544/IveGotThisFeeling4.png", "8-Jark1Styg", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Jam",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748576634028112/Jam4.png", "fFRXtJRmHpE", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Minus One (Space Mix)",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748660536885248/Minus1Remix4.png", "k3iAU4YNAjA", "2nd Trax", "2nd", "CROOVE", REMIXED_SONG, SHORT_MIX],
	[1, "Moving On",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748659320528976/MovingOn4_33272.png", "AUvaxUyIqwc", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Red Ocean",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748814472028180/RedOcean4.png", "vLStTCcoLA0", "2nd Trax", "2nd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Say That U",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748787754324008/SayThatYou4.png", "jbx-rJKXQ3Y", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Seize The Day",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748788295376947/SeizeTheDay4.png", "oIRyyVzopLo", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Sentimental No No",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748941425234011/SentimentalNoNo4.png", "FbUpkd5Cxdk", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Showdown",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748942406684682/ShowDown4.png", "b7Fp5Vre3rU", "2nd Trax", "2nd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "We Luv Music",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748962371575818/WeLuvMusic4_39727.png", "l8BreWWI82E", "2nd Trax", "2nd", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Where's My Girl",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748962644222002/WheresMyGirl4.png", "pTxmSWKXlLA", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "With U Girl",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748963072045156/WithYouGirl4.png", "m-ua4INuG3k", "2nd Trax", "2nd", "Yang Joon-young", REGULAR_SONG, SHORT_MIX],
	[1, "You are the one for me",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748966905614346/YouAreTheOneForMeRemaster4.png", "Q3aasmUzk9g", "2nd Trax", "2nd", "Jeon Jun-Kyu, Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Changa",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748244776501338/ChangaRemaster4.png", "gv0Y7msB--k", "2nd Trax", "2nd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	
	// 3rd Trax :D
	[1, "2.14",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748146596233258/2142.png", "QCzesRS7cSc", "3rd Trax", "3rd", "FE", REGULAR_SONG, SHORT_MIX],
	[1, "20000000000",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748146961125426/200000000002_34374.png", "M41bR9zaEu8", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "2nd Jewel",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748145820270652/2ndJewel4.png", "E5mFTStYd0A", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "The 3rd Place",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748965286613092/The3rdPlace4.png", "QSoR4CW3gE0", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Anemia",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748144985628692/Anemia3.png", "DA1aHWrRLf0", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Black Market",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748229458890812/BlackMarket4.png", "8Uakbdb8vxw", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Cosmic Bird",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748265076944996/CosmicBird4.png", "ImgDeK6e_r8", "3rd Trax", "3rd", "FE, CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Give it 2 me",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748529624252486/GiveIt2Me4.png", "sXWvPxk5eUI", "3rd Trax", "3rd", "FE", REGULAR_SONG, SHORT_MIX],
	[1, "In a nutshell",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748590492008549/InANutshell4.png", "RgGZxQvVgq0", "3rd Trax", "3rd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Lie Lie",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748589309222972/LieLie4_37066.png", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 2",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748658590724096/Minus24.png", "xAiLyYRI3oA", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "M-Police",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748659551219732/MPolice4.png", "PJ1hLrrXFzU", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Night Watcher",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748702505074718/NightWatcher4.png", "408pZWQtfGA", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "R.F.C.",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748789067120721/RFC4_35616.png", "KZ5VHI-m9cY", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Sand Storm",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748789985677312/SandStorm4.png", "nKUvk3GfN8A", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Shake",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748941664317480/Shake4.png", "FwTQkHx8YfQ", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Smash",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748941723021413/Smash4.png", "8FZSS3TZ23s", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Sparrow",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748940716384306/Sparrow4.png", "XEB163eB3jA", "3rd Trax", "3rd", "xxdbxx, CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Substance",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748940800294912/Substance4.png", "aO-_ow3QPuw", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Y-Gate",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://media.discordapp.net/attachments/773273391569829928/961748966620397578/YGate4.png", "eoYP3n1O7uA", "3rd Trax", "3rd", "Lee Jong-Phil", REGULAR_SONG, SHORT_MIX],
		
	
	// 4th Trax :)
	[1, "Aquaris",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "WZyeUS6TcVA", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "B.O.W.",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "g58JY4n7k38", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Blue",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "nxbAB_EdOIw", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Calling me Now",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "s4k2S9LZWDg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Climax",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "_HL-rHZXI78", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Complex",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "K0A77LG9noM", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Delight",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "MgCuP87LFnI", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Eye of the Beholder",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "wIlcpd_yA4k", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Feel so Sad",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "0ZaMPnJQZ2o", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Fire Storm",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "310fds69GdU", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Futurist",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "vgaHRZ01krw", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Go!",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "Ga47iBkA5lU", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "J.M.J.",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "Ib403VUCUhc", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Judgement",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "Ipj0gk6G99M", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Lovely Day",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "pB92W9DT7ps", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Angry Automaton",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "IUyUcswGMI8", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Metagalactic",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "MuJsFMR-oDE", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Ready to Yah",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "XIUIXh0H70M", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Shout",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "qLf1xhIWgzc", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Tokyo 9 PM",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "IjVdTC9vGpM", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	
	// Platinum
	[1, "Any way you want it",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "J2zizFKUcI0", "Platinum", "PT", "Eridanus", REGULAR_SONG, SHORT_MIX],
	[1, "Aquaris (Physical Inspiration Hyper Blue Mix)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "eS4lY15xlCk", "Platinum", "PT", "Forte Escape", REMIXED_SONG, SHORT_MIX],
	[1, "Cellauve",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "0L6jXbd8N-g", "Platinum", "PT", "Eridanus", REGULAR_SONG, SHORT_MIX],
	[1, "I've fallen (Hot Dog Boogie Groove Mix)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "P35z0WyQDq0", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "I've got this feeling (DJ. FE Restless Acid Soul Mix)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "mRBk8e9s8GE", "Platinum", "PT", "Forte Escape", REMIXED_SONG, SHORT_MIX],
	[1, "J.M.J. (DFC Space Gear Re-Formation)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "QnwDrawvKf0", "Platinum", "PT", "Forte Escape", REMIXED_SONG, SHORT_MIX],
	[1, "Memories",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "-a5Btg35WcE", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Night Madness",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "CzFiLMRs_rk", "Platinum", "PT", "Joyrock", REGULAR_SONG, SHORT_MIX],
	[1, "Panic Strike",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "hFey7YUoOQE", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Q Factor",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "hbKRWLOM-sI", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Riff Guy",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "x7gc2yBqwA8", "Platinum", "PT", "Eridanus", REGULAR_SONG, SHORT_MIX],
	[1, "Spotlight",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "yBGU_mp1qWc", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Unknown H2",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "pIbE7tA2sKM", "Platinum", "PT", "BIGDUCK", REGULAR_SONG, SHORT_MIX],
	[1, "Weird Wave",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "sN16te_RZBA", "Platinum", "PT", "Joyrock", REMIXED_SONG, SHORT_MIX],
	[1, "Zeroize",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "9roXfejoFhs", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "느낌",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "vJpSpUJjeJ8", "Platinum", "PT", "Eridanus, Kang Eun Soo", REGULAR_SONG, SHORT_MIX],
	
	// 6th Trax :)
	[1, "Baby Dance (Club Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "iJTcErnC_iY", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Bacardi on the Beach",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "7k2Z_KrVarw", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Be Mine",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "R6sRcvQbRXI", "6th Trax", "6th", "TY:F", REGULAR_SONG, SHORT_MIX],
	[1, "Be my Baby (Funky Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "G5EvaIcCcf0", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Be-at Feedback",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "RBfBOvva-Pw", "6th Trax", "6th", "B-E", REGULAR_SONG, SHORT_MIX],
	[1, "The Boy (EK2-Beat Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "Vuveu0ozeQM", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Curse It!!",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "-pWzCtWS9Ck", "6th Trax", "6th", "Han Tae-Soo", REGULAR_SONG, SHORT_MIX],
	[1, "Dance Machine",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "m2gV49WO9A0", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Dance With Me",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "Ouj3VTtj34U", "6th Trax", "6th", "Kim Min", REGULAR_SONG, SHORT_MIX],
	[1, "Frantic",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "pIEiiEPsKVU", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "I've got this feeling (Extended Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "Qwcm5ihLOuM", "6th Trax", "6th", "Itdie", REGULAR_SONG, EXTENDED_MIX],
	[1, "Jam (A.C Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "j43a6ZkvMIY", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Lie Lie (Ceave Beat Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "uJVwXMJajzY", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Move Your Body",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "HrXAOtivH0o", "6th Trax", "6th", "Sean Kim", REGULAR_SONG, SHORT_MIX],
	[1, "One Two Three Four",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "uf6pmDCGvVY", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Refresh",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "Wafz-ZDFh0E", "6th Trax", "6th", "Kim Min", REGULAR_SONG, SHORT_MIX],
	[1, "Stay with Me",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "XPVurMs-3Vc", "6th Trax", "6th", "Han Tae-Soo", REGULAR_SONG, SHORT_MIX],
	[1, "Up and Down",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "tEJOhXC9zGA", "6th Trax", "6th", "Soulzean", REGULAR_SONG, SHORT_MIX],
	[1, "With U Girl(Beach Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "VFQ3FITRjag", "6th Trax", "6th", "Itdie", REGULAR_SONG, SHORT_MIX],
	[1, "You were the one",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "E9C2-5ITMbs", "6th Trax", "6th", "Kim Min", REGULAR_SONG, SHORT_MIX],
	[1, "Your Style",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "hKVyXcGQQeM", "6th Trax", "6th", "DaKick", REGULAR_SONG, SHORT_MIX],
	[1, "느낌 (Sonic A.P.E Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "KBglasLHKJg", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Changa II",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "ugZzxbIS3gc", "6th Trax", "6th", "Han Tae-Soo", REGULAR_SONG, SHORT_MIX],
	
	// 7th Trax :)
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "PW685B-kwLY", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "The Back of Beyond",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "6Xrox8Yemz4", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "Black Bird",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "M4WtnsQpm-U", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "Black Flame",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "okjRBE7S41E", "7th Trax", "7th", "Transin", REGULAR_SONG, SHORT_MIX],
	[1, "Dreamy Flight",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "3USmHIubZ0U", "7th Trax", "7th", "Transin", REGULAR_SONG, SHORT_MIX],
        [1, "End of Summer",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "VDUp_AMnOhI", "7th Trax", "7th", "Mhz", REGULAR_SONG, SHORT_MIX],
	[1, "Energy Flower (Original Mix)",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "nIthoQQRm5E", "7th Trax", "7th", "r300k", REMIXED_SONG, SHORT_MIX],
        [1, "Explode Engine",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "zsumIZVZuzE", "7th Trax", "7th", "Transin", REGULAR_SONG, SHORT_MIX],
	[1, "Fallen Angel",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "sweH0lhCh1Y", "7th Trax", "7th", "Springhead", REGULAR_SONG, SHORT_MIX],
        [1, "Fell Hound 3",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3h1U0fKMhY", "7th Trax", "7th", "Springhead", REGULAR_SONG, SHORT_MIX],
	[1, "Forget",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "E27lfO0MOe0", "7th Trax", "7th", "Praya", REGULAR_SONG, SHORT_MIX],
        [1, "G.O.A.",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "Vok0kYTbrAU", "7th Trax", "7th", "Curium", REGULAR_SONG, SHORT_MIX],
        [1, "Gray Hunter",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "Rj_Whx3FKZk", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "Gray Street",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "r5-9B8oQbyE", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Holic",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "hbcC6sOYVHE", "7th Trax", "7th", "SHK", REGULAR_SONG, SHORT_MIX],
        [1, "Hyper Magic",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "JD_F5xI6C3M", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "KAFAT",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "lwQRsnRZCW8", "7th Trax", "7th", "Springhead", REGULAR_SONG, SHORT_MIX],
        [1, "Legacy of Hatred (Live)",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "RGq1AevJlAQ", "7th Trax", "7th", "CCNN", REGULAR_SONG, SHORT_MIX],
	[1, "Legend of Moonlight",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "7lUTioRpLF0", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "Let me hear your voice",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "Io1tFsoNA60", "7th Trax", "7th", "Transin", REGULAR_SONG, SHORT_MIX],
	[1, "Mage Girl Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "OwDj1SirHMw", "7th Trax", "7th", "Praya", REGULAR_SONG, SHORT_MIX],
        [1, "One's Trash",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "fQBu-K9O3f4", "7th Trax", "7th", "KIEN", REGULAR_SONG, SHORT_MIX],
        [1, "Paradise",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "iuPJKH6r4wM", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "The Prince of Darkness",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "lIE1VjC7nEI", "7th Trax", "7th", "Redeye", REGULAR_SONG, SHORT_MIX],
	[1, "R.E.D.",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "DchtdAZUwl0", "7th Trax", "7th", "KIEN", REGULAR_SONG, SHORT_MIX],
        [1, "Return",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "hX_QRLqcsMg", "7th Trax", "7th", "Springhead", REGULAR_SONG, SHORT_MIX],
	[1, "Revelation",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "rN4krLvg84A", "7th Trax", "7th", "Springhead", REGULAR_SONG, SHORT_MIX],
        [1, "Round 3",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "1DSsUmC-vdM", "7th Trax", "7th", "Desired Effect, r300k", REGULAR_SONG, SHORT_MIX],
	[1, "Shot Time",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "o_9CD_08d5g", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "Silver Ocean",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "oN-NRSmm8EU", "7th Trax", "7th", "Curium", REGULAR_SONG, SHORT_MIX],
	[1, "Soul Destructor",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "fOnf-YG5bLI", "7th Trax", "7th", "Transin", REGULAR_SONG, SHORT_MIX],
        [1, "Soul Eater",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "Mwi-8cRImTQ", "7th Trax", "7th", "Springhead", REGULAR_SONG, SHORT_MIX],
        [1, "Space Destiny",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "9LxwBdgL010", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "Sunlight",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "jsTJ-yTLixI", "7th Trax", "7th", "Desired Effect, r300k", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet Heart",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "26ATZ6FFNys", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "To My Love",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "N1m-cuW9gvU", "7th Trax", "7th", "TranceMAX", REGULAR_SONG, SHORT_MIX],
	[1, "Toy War",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "3W-rQrhq1m4", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "Unrequited Love 2",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "Nsj69tsCi84", "7th Trax", "7th", "CCNN", REGULAR_SONG, SHORT_MIX],
	[1, "White Rose",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "kCEcbV422ko", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],
        [1, "The World",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "SV1ObjD_nB4", "7th Trax", "7th", "r300k", REGULAR_SONG, SHORT_MIX],
	[1, "Faded Spirit",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "hojBoBmp9JY", "7th Trax", "7th", "Praya", REGULAR_SONG, SHORT_MIX],
        [1, "Cheonjigaebyouk",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "e-Uyb2n_Edw", "7th Trax", "7th", "M2U", REGULAR_SONG, SHORT_MIX],

	// EZ2ON 2008
	[1, "Black Industry",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "VZZmfuO5KMo", "EZ2ON 2008", "2008", "r300k, ALTiTUNE", REGULAR_SONG, SHORT_MIX],
	[1, "Black Industry (And More Rock Version)",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "vyD7qYAsW2g", "EZ2ON 2008", "2008", "And More", REMIXED_SONG, SHORT_MIX],
	[1, "Black Key",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "rMEiqcuo22Y", "EZ2ON 2008", "2008", "Frederic Francois Chopin", REGULAR_SONG, SHORT_MIX],
	[1, "The Boy (Indigo Blue Mix)",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "1NBt8WlRWRg", "EZ2ON 2008", "2008", "ALTiTUNE", REGULAR_SONG, SHORT_MIX],
	[1, "Energy Flower 3007",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "SX_jaHT9WGA", "EZ2ON 2008", "2008", "r300k", REMIXED_SONG, SHORT_MIX],
	[1, "First Choice",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "Su0oImOj8EI", "EZ2ON 2008", "2008", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "The First Movement of Moonlight",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "ReTXVCwDYSw", "EZ2ON 2008", "2008", "Mnfc", REGULAR_SONG, SHORT_MIX],
	[1, "Refresh (Winter Remix)",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "7jdWBzFL15s", "EZ2ON 2008", "2008", "ALTiTUNE", REMIXED_SONG, SHORT_MIX],
	[1, "Round 3 (The First Noel X-Mas Edit) ",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "1J4WhpJiEPQ", "EZ2ON 2008", "2008", "r300k", REMIXED_SONG, SHORT_MIX],
	[1, "Second Choice",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "nQ8HaA7ZvUY", "EZ2ON 2008", "2008", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Sudden Death",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "Ppc8Wm-0dSc", "EZ2ON 2008", "2008", "DJ.Hamcheese", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet Land",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "D757wPW6Qgw", "EZ2ON 2008", "2008", "ALTiTUNE", REGULAR_SONG, SHORT_MIX],
	[1, "T-eMotion",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "_RLzrSqjaKA", "EZ2ON 2008", "2008", "SHK", REGULAR_SONG, SHORT_MIX],
	[1, "The World is One's Oyster",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "yYEOBYiKop4", "EZ2ON 2008", "2008", "r300k", REGULAR_SONG, SHORT_MIX],
	[1, "You Keep Me Waiting",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "tALoFq0I8zE", "EZ2ON 2008", "2008", "ALTiTUNE", REGULAR_SONG, SHORT_MIX],
	[1, "Clear After Rain",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://upload.wikimedia.org/wikipedia/commons/3/35/EZ2ON_logo.png", "A9hK4CDsj-A", "EZ2ON 2008", "2008", "ALTiTUNE", REGULAR_SONG, SHORT_MIX],
			
	// EZ2ON 2013 :)
	[1, "The ASHTRAY",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "iQ06D-p_Tog", "Azure Expression", "2013", "r300k", REGULAR_SONG, SHORT_MIX],
	[1, "Aura",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "gKXs2BAJ8Sg", "7th Trax 2.0", "2013", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "Common Story",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "izckf0QMdAg", "EZ2ON REBOOT", "2013", "Happy Jackson", REGULAR_SONG, SHORT_MIX],
	[1, "Digital Labyrinth",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "dQuyMWNci1E", "EZ2ON REBOOT", "2013", "nato", REGULAR_SONG, SHORT_MIX],
	[1, "Frozen Eyes",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "bv72HeDd-Gg", "Azure Expression", "2013", "fromsmk", REGULAR_SONG, SHORT_MIX],
	[1, "Infinity",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "dwpd6CZoY0w", "EZ2ON REBOOT", "2013", "Lunatic Sounds", REGULAR_SONG, SHORT_MIX],
	[1, "Kamui",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "Wx7dBGLLrVo", "Codename Violet", "2013", "TJ. Hangneil", REGULAR_SONG, SHORT_MIX],
	[1, "Lucid",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "v_7_F8eYYvY", "7th Trax 1.5", "2013", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "Monochrome",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "cYlDhQvs-yM", "EZ2ON REBOOT", "2013", "seiben & TAK", REGULAR_SONG, SHORT_MIX],
	[1, "Nihilism",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "y23jO3gOYNs", "Azure Expression", "2013", "nato", REGULAR_SONG, SHORT_MIX],
	[1, "SIGMA",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "p-KXGi9qGHU", "Endless Circulation", "2013", "fromsmk", REGULAR_SONG, SHORT_MIX],
	[1, "Snow Dream",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "Q3193qBHEfM", "EZ2ON REBOOT", "2013", "TAK", REGULAR_SONG, SHORT_MIX],
	[1, "Special K (ALTiTUNE Mix)",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "KHCZjhL2ptE", "EZ2ON REBOOT", "2013", "ALTiTUNE", REMIXED_SONG, SHORT_MIX],
	[1, "The Story of Birds",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://t1.daumcdn.net/cfile/tistory/995CA8375F0B4CBA02", "7WwaR0wD9rQ", "EZ2ON REBOOT", "2013", "seiben", REGULAR_SONG, SHORT_MIX],
	
	// EZ2ON 2021
	[1, "2nd Life",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "rVHWrQRpRmA", "7th Trax 2.0", "2021", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "Don't Say Anything",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "QW0DvnD7F20", "7th Trax 2.0", "2021", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "R-Decision",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "QnPECLLcRew", "7th Trax 2.0", "2021", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "SINUS",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "AKZadMQUgRo", "7th Trax 2.0", "2021", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "Never Feel This Way",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "MmdIQuXzaa8", "7th Trax 1.5", "2021", "yak_won", REGULAR_SONG, SHORT_MIX],
	[1, "Absolute Death",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "lrURkBpcoFo", "Final EX", "2021", "LeCiel", REGULAR_SONG, SHORT_MIX],
	[1, "Altered Ego",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "Plv88ZohfeE", "Final EX", "2021", "P4koo", REGULAR_SONG, SHORT_MIX],
	[1, "Daydream",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "DUN_tN0xYHY", "Final EX/BMS", "2021", "RiraN", EXTERIOR_SONG, SHORT_MIX],
	[1, "Enter The Beginning",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "yBbN4FoCGCM", "Final EX", "2021", "Edvard S.", REGULAR_SONG, SHORT_MIX],
	[1, "picking",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "HZy_Xe5diHc", "Final EX", "2021", "Luze", REGULAR_SONG, SHORT_MIX],
	[1, "The Last Page",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "avoK05YebNI", "Final EX/BMS", "2021", "ARForest", EXTERIOR_SONG, SHORT_MIX],
	[1, "TYR",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "dgAletjq_bM", "Final EX", "2021", "LhoU", REGULAR_SONG, SHORT_MIX],
	[1, "ULTIMATUM",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "or2jS9NxLXs", "Final EX", "2021", "Cosmograph", REGULAR_SONG, SHORT_MIX],
	[1, "WE ALIVE",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "jTjydTYfo1U", "Final", "2021", "Cosmograph", REGULAR_SONG, SHORT_MIX],
	[1, "Starflyer",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "8x9sl7IPzbY", "Final", "2021", "P4koo", REGULAR_SONG, SHORT_MIX],
	[1, "Finite",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "7p2H9kWO_6k", "Sabin Sound Star", "2021", "Sta", REGULAR_SONG, SHORT_MIX],
	[1, "Messier 333",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "Qozu70cfWXQ", "Bonus Edition/BMS", "2021", "sun3", EXTERIOR_SONG, SHORT_MIX],
	[1, "SINGULAR POINT",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "y0iViHud9b0", "Night Traveler", "2021", "ATAS", REGULAR_SONG, SHORT_MIX],
	[1, "Engine",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "dVkaoBdYx58", "Time Traveler", "2021", "eFeL", REGULAR_SONG, SHORT_MIX],
	[1, "Air (EZ2ON ver.)",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "fy06FCrvIDw", "EZ2ON RR/BMS", "2021", "SHIKI", REMIXED_SONG, SHORT_MIX],
	[1, "Aqua Flow",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "QhTLBm3YWLk", "EZ2ON RR", "2021", "wigen", REGULAR_SONG, SHORT_MIX],
	[1, "comet",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "B7f6nEcI5rI", "EZ2ON RR", "2021", "wigen", REGULAR_SONG, SHORT_MIX],
	[1, "Only See Me Now",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "gRekhNKOb4k", "EZ2ON RR", "2021", "Roy Mikelate", REGULAR_SONG, SHORT_MIX],
	[1, "Brain Power",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "JS_OOA6jiyA", "Misc.", "2021", "NOMA", EXTERIOR_SONG, SHORT_MIX],
	[1, "Call Me Up Now",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "pBhquSCps10", "Misc.", "2021", "FOIV", EXTERIOR_SONG, SHORT_MIX],
	[1, "LOVE X LIE",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "tzm29PIzzI8", "Misc.", "2021", "J.SEASON X SOHEE", EXTERIOR_SONG, SHORT_MIX],
	[1, "DataErr0r",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "2r56sQ54XpM", "BMS", "2021", "Lunatic Sounds", EXTERIOR_SONG, SHORT_MIX],
	[1, "The Formula",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "TdTMpnDIbs0", "BMS", "2021", "Junk", EXTERIOR_SONG, SHORT_MIX],
	[1, "Freefloat",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "L3HsRUM2F_Q", "BMS", "2021", "yusi.", EXTERIOR_SONG, SHORT_MIX],
	[1, "GOODTEK",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "CCcvGQ16FnQ", "BMS", "2021", "EBIMAYO", EXTERIOR_SONG, SHORT_MIX],
	[1, "METATRON",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "iiN3MR4BDhE", "BMS", "2021", "SHIKI", EXTERIOR_SONG, SHORT_MIX],
	[1, "MiLK",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "2CJw_rihu5s", "BMS", "2021", "モリモリあつし ", EXTERIOR_SONG, SHORT_MIX],
	[1, "PUPA",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.akamai.steamstatic.com/steam/apps/1477590/header.jpg?t=1616605443", "wFW6qyZmQVw", "BMS", "2021", "モリモリあつし ", EXTERIOR_SONG, SHORT_MIX],
	
	// Time Traveler :)
	[1, "#BEYOND", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "lyDHBLqvA3k", "Time Traveler", "TT", "Roy C. vs Transin", REGULAR_SONG, SHORT_MIX],
	[1, "Black Sour Ruby", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "W3WBXTe8A-w", "Time Traveler", "TT", "Cosine", REGULAR_SONG, SHORT_MIX],
	[1, "#Ctrl+Alt+Del", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "6wMHoGPFqjc", "Time Traveler", "TT", "Roy Mikelate", REGULAR_SONG, SHORT_MIX],
	[1, "Darker than Black", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "dPSYA3fAxSA", "Time Traveler", "TT", "Springhead", REGULAR_SONG, SHORT_MIX],
	[1, "Encounter on Orbit", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "KKdUCN3ILh0", "Time Traveler", "TT", "Aresynth", REGULAR_SONG, SHORT_MIX],
	[1, "Guardian", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "rnosJ9Fo6II", "Time Traveler", "TT", "Lunatic Sounds", REGULAR_SONG, SHORT_MIX],
	[1, "Hi-Tech Soda Machine", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "CGWzG73SD4o", "EZ2ON RR", "TT", "M0DDRA1D", REGULAR_SONG, SHORT_MIX],
	[1, "Last Knot", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "AzXruNXsUWU", "Time Traveler", "TT", "Sobrem", REGULAR_SONG, SHORT_MIX],
	[1, "Precision Strike", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "IFHIYDXRxX0", "Time Traveler", "TT", "Lokan", REGULAR_SONG, SHORT_MIX],
	[1, "Skyline", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "jV5gbz8Y3Ko", "Time Traveler", "TT", "Lokan", REGULAR_SONG, SHORT_MIX],
	[1, "sweet star", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/5fuLXtddgzU/maxresdefault.jpg", "BqXVmItf5OA", "Time Traveler", "TT", "ginkiha", REGULAR_SONG, SHORT_MIX],
	
	// Codename Violet
	[1, "Break a Spell",					[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "_kK3J0052pU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	
	// Prestige Pass !!
	[1, "Stay 2022",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "Lsu1gjQ1Dyw", "Prestige Pass", "PP", "Jeon Jun Kyu & Scott Mac", REGULAR_SONG, SHORT_MIX],
	[1, "Belong To You",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Prestige Pass", "PP", "Jeon Jun Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "R.F.C II",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "ocGreDEMIRs", "Prestige Pass", "PP", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Overdrying",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Prestige Pass", "PP", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Iron Cloud",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "BLWqife1ik8", "Prestige Pass", "PP", "r300k", REGULAR_SONG, SHORT_MIX],
	[1, "開花",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "UIGaDH9DsGE", "Prestige Pass", "PP", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "Glacial Alice",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "Lsu1gjQ1Dyw", "Prestige Pass", "PP", "ATAS", REGULAR_SONG, SHORT_MIX],
	[1, "ATOPY",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "-gc6Nb4FHRg", "Prestige Pass", "PP", "SANY-ON", REGULAR_SONG, SHORT_MIX],
	[1, "Backfire",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "OGWXlW22wgE", "Prestige Pass", "PP", "Roy Mikelate (feat. Sobrem)", REGULAR_SONG, SHORT_MIX],
	[1, "TakeOFF",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Prestige Pass", "PP", "A1NVERSE", REGULAR_SONG, SHORT_MIX],
	[1, "Kings",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "dCRx4ImWqgI", "Prestige Pass", "PP", "AmamoriP", REGULAR_SONG, SHORT_MIX],
	[1, "LIGHTYEAR",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "pqoNaLboVyU", "Prestige Pass", "PP", "Zekk", REGULAR_SONG, SHORT_MIX],
	[1, "kthnox",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "Lsu1gjQ1Dyw", "Prestige Pass", "PP", "Sobrem", REGULAR_SONG, SHORT_MIX],
	[1, "A Showdown Between Two Prideful Geniuses",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Prestige Pass", "PP", "EmoCosine vs. RiraN", REGULAR_SONG, SHORT_MIX],
	[1, "Go Back",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "KYOEJ80AmKo", "Prestige Pass", "PP", "PlanetBoom (Feat. Miya)", REGULAR_SONG, SHORT_MIX],
	[1, "Sakura Garden",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Prestige Pass", "PP", "M2U x Pica", REGULAR_SONG, SHORT_MIX],
	[1, "별처럼 (Stella)",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "xAQ6VxStTqg", "Prestige Pass", "PP", "NieN (feat. Lee Ji Ae)", REGULAR_SONG, SHORT_MIX],
	[1, "個人的なメモ (KENPO SAITO)",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "UIGaDH9DsGE", "Prestige Pass", "PP", "ASLETICS x Zpinkpong", REGULAR_SONG, SHORT_MIX],
	[1, "Various Ways",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "Lsu1gjQ1Dyw", "Prestige Pass", "PP", "Yamajet", REGULAR_SONG, SHORT_MIX],
	[1, "Start Me Up",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "UrgzT-m54r0", "Prestige Pass", "PP", "Tatsh", REGULAR_SONG, SHORT_MIX],
	[1, "MAX301",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "ocGreDEMIRs", "Prestige Pass", "PP", "NAOKI underground -Ω-", REGULAR_SONG, SHORT_MIX],
	[1, "Unleashed Emotions",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "448Ggds9ZiU", "Prestige Pass", "PP", "TAG", REGULAR_SONG, SHORT_MIX],
	[1, "felys -final remix-",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "kg-V_uQYZLY", "Prestige Pass", "PP", "onoken", REGULAR_SONG, SHORT_MIX],
	[1, "TRPNO",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "UIGaDH9DsGE", "Prestige Pass", "PP", "Nauts", REGULAR_SONG, SHORT_MIX],
	
	// Groove Coaster
	[1, "Black MInD",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "_7iEZimewKE", "Groove Coaster", "GC", "COSIO", REGULAR_SONG, SHORT_MIX],
	[1, "Good Night, Bad Luck.",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "mZXNt08GfK4", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Got more raves?",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "JNnQOs5zkk0", "Groove Coaster", "GC", "E.G.G.", REGULAR_SONG, SHORT_MIX],
	[1, "Groove Prayer",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "LGH7kNXqXGc", "Groove Coaster", "GC", "COSIO", REGULAR_SONG, SHORT_MIX],
	[1, "HB-axeleration",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "4EeFWe2lLek", "Groove Coaster", "GC", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Marry me, Nightmare",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "wbgjJ84SZmw", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "ouroboros -twin stroke of the end-",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "BozGJJJUrUU", "Groove Coaster", "GC", "cranky / MASAKI", REGULAR_SONG, SHORT_MIX],
	[1, "OVER THE NIGHT",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "TanjhRfa6eo", "Groove Coaster", "GC", "REDALiCE", REGULAR_SONG, SHORT_MIX],
	[1, "Satisfiction",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "wUxyWSpopXo", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Warrior",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "p55PziQGLDA", "Groove Coaster", "GC", "cranky", REGULAR_SONG, SHORT_MIX],

	// Deemo
	[1, "Angelic Sphere",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "BDIWrU3TbYE", "Deemo", "DM", "3R2", REGULAR_SONG, SHORT_MIX],
	[1, "ANiMA",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "tJFjBCe20H4", "Deemo", "DM", "xi", REGULAR_SONG, SHORT_MIX],
	[1, "Dream",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "FXkrjfZQUuQ", "Deemo", "DM", "Rabpit", REGULAR_SONG, SHORT_MIX],
	[1, "Legacy",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "H3TpRoDC9SU", "Deemo", "DM", "switchworks", REGULAR_SONG, SHORT_MIX],
	[1, "Magnolia",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "jDEQ7UTIKsA", "Deemo", "DM", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Nine point eight",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "YlOWFOSsaCI", "Deemo", "DM", "Mili", REGULAR_SONG, SHORT_MIX],
	[1, "Sairai",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "trzogtjYcTc", "Deemo", "DM", "Shinichi Kobayashi", REGULAR_SONG, SHORT_MIX],
	[1, "Undo",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "Rf_NobfcyvY", "Deemo", "DM", "Yuk-cheung Chun", REGULAR_SONG, SHORT_MIX],
	[1, "Utopiosphere",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "KazdHqs1fvU", "Deemo", "DM", "Mili", REGULAR_SONG, SHORT_MIX],
	[1, "YUBIKIRI-GENMAN",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "Ju-JhfKO1o0", "Deemo", "DE", "Mili", REGULAR_SONG, SHORT_MIX],

	// Cytus
	[1, "AXION",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "vF-y-Ap1NiI", "Cytus", "CY", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "CODE NAME: ZERO",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "WIiG8bHoAbM", "Cytus", "CY", "NeLIME", REGULAR_SONG, SHORT_MIX],
	[1, "conflict",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "fEcI8wW_omw", "Cytus", "CY", "Cranky + siromaru", REGULAR_SONG, SHORT_MIX],
	[1, "EMber",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "OjTzVsy5xtw", "Cytus", "CY", "SIHanatsuka", REGULAR_SONG, SHORT_MIX],
	[1, "Entrance",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "C3Hum0ej_rc", "Cytus", "CY", "Ice", REGULAR_SONG, SHORT_MIX],
	[1, "L",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "1bt6S4DbyJI", "Cytus", "CY", "Ice", REGULAR_SONG, SHORT_MIX],
	[1, "Les Parfums de L'Amour",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "PFukE8XmhKE", "Cytus", "CY", "naotyu-", REGULAR_SONG, SHORT_MIX],
	[1, "Mammal",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "sZtBIP2SgL4", "Cytus", "CY", "Teikyou", REGULAR_SONG, SHORT_MIX],
	[1, "Myosotis",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "netCEsALPhw", "Cytus", "CY", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Old Gold",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "uevVv8zo0oU", "Cytus", "CY", "Cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Shoot Out",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "o2htkoZWW8A", "Cytus", "CY", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Ververg",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "329pzl2R38U", "Cytus", "CY", "onoken", REGULAR_SONG, SHORT_MIX],

	// // Chunithm
	[1, "Cyberozar",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "cGxEd3rgvqA", "Chunithm", "CHU", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "Garakuta Doll Play",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "iSPJM2xiw9E", "Chunithm", "CHU", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Ikazuchi",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "0Z77JgHr7Pk", "Chunithm", "CHU", "Takenobu Mitsuyoshi", REGULAR_SONG, SHORT_MIX],
	[1, "Ray Tuning",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "hBHEDoRSLQg", "Chunithm", "CHU", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "The wheel to the right",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "o-fzrbk--o4", "Chunithm", "CHU", "Sampling Masters MEGA", REGULAR_SONG, SHORT_MIX],
	[1, "Trrricksters!!",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "RrIyhEq7TX0", "Chunithm", "CHU", "s-don vs. Hino Isuka", REGULAR_SONG, SHORT_MIX],
	
	// Portable 3
	[1, "glory day (JHS Remix)",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "Fdu3kT2aAi4", "Respect", "DMR", "Bexter & Mycin.T / JHS", REGULAR_SONG, SHORT_MIX],
	[1, "glory day (Mintorment Remix)",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "FtEmR9zdTGY", "Respect", "DMR", "Bexter & Mycin.T / Mintorment", REGULAR_SONG, SHORT_MIX],
	[1, "Become Myself",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "GKg07PKWJow", "Portable 3", "DMP3", "PIA", REGULAR_SONG, SHORT_MIX],
	[1, "Break!",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "NppRvfIWVX4", "Portable 3", "DMP3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Desperado ~Nu Skool Mix~",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "cY3cKPKl5jw", "Portable 3", "DMP3", "Croove / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Enemy Storm ~Dark Jungle Mix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "hxnVTJHimgU", "Portable 3", "DMP3", "Croove / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Everything",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "z9HpAgYDHV4", "Portable 3", "DMP3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Gone Astray",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "nCumwaA9UM4", "Portable 3", "DMP3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Hanz Up!",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "6N4qEY9V5Hw", "Portable 3", "DMP3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "IF",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "LsMms1I5-VI", "Portable 3", "DMP3", "Vanilla Unity", REGULAR_SONG, SHORT_MIX],
	[1, "Leave Me Alone",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "KVry8-jlr5s", "Portable 3", "DMP3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Luv Flow ~Funky House Mix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "4-sYjg5ciS4", "Portable 3", "DMP3", "3rd Coast / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Luv is True",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "-b-yKbvdxU0", "Portable 3", "DMP3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "MASAI ~Electro House Mix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "yY_Lpk8etvo", "Portable 3", "DMP3", "Croove / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Mellow D Fantasy",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "0qw3T3l78Wk", "Portable 3", "DMP3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "NB Ranger : NonStop Remix",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "qmIUEv4zoxY", "Portable 3", "DMP3", "M2U, NieN, Sugar Donut / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Out Law - Reborn",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "AT0rNlMjTWQ", "Portable 3", "DMP3", "Croove / Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Raise Me Up",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "SAPsOzFA_hQ", "Portable 3", "DMP3", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Season (Warm Mix)",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "lYwMbNDlVeY", "Portable 3", "DMP3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "SuperSonic ~Mr.Funky Remix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "IGHGxVsbTok", "Portable 3", "DMP3", "Planetboom / Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "The Rain Maker",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "_p0JuJ-FCfM", "Portable 3", "DMP3", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Waiting for the Sun",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "WBWZDbuCYcs", "Portable 3", "DMP3", "MindCube", REGULAR_SONG, SHORT_MIX],
	[1, "Your Smile",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "49bqK4ogNMQ", "Portable 3", "DMP3", "Cistrans (Roseline)", REGULAR_SONG, SHORT_MIX],
	[1, "ZET ~Mr.Funky Remix~",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "8dcys2h6eSM", "Portable 3", "DMP3", "BEXTER / Mr.Funky", REGULAR_SONG, SHORT_MIX],

	// ESTIMATE
	[1, "Helix",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "kHgRkFN6M18", "ESTIMATE", "ESTI", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "In My Heart ~ESTi Remix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "rW5Z3uPqGkk", "ESTIMATE", "ESTI", "Tsukasa / ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Obelisque",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "x30u10gtGco", "ESTIMATE", "ESTI", "ESTi & M2U", REGULAR_SONG, SHORT_MIX],
	[1, "pit-a-pet",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "XH6_O9ljmTk", "ESTIMATE", "ESTI", "TAK / seibin", REGULAR_SONG, SHORT_MIX],
	[1, "U-NIVUS",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "eoUXRvI6wLE", "ESTIMATE", "ESTI", "ESTi", REGULAR_SONG, SHORT_MIX],
	
	
	// V Extension II
	[1, "Arcade Love (feat. KNVWN)",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "9M11lQpl7fk", "V Extension II", "VE2", "Newton / KNVWN", REGULAR_SONG, SHORT_MIX],
	[1, "Chrysanthemum",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "EM_PmOfPeRM", "V Extension II", "VE2", "Kanallia", REGULAR_SONG, SHORT_MIX],
	[1, "Cocked Pistol",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "wwTe0a4kqg0", "V Extension II", "VE2", "Pierre Blanche", REGULAR_SONG, SHORT_MIX],
	[1, "Daydream",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "sayzAjrOvEs", "V Extension II", "VE2", "Mycin.T / SiNA", REGULAR_SONG, SHORT_MIX],
	[1, "FALLING IN LOVE",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "I3M_CNtzATY", "V Extension II", "VE2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Forgotten",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "uHIPr8nVg18", "V Extension II", "VE2", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "I've got a feeling",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "a_CR9J6H2rI", "V Extension II", "VE2", "LeeZu", REGULAR_SONG, SHORT_MIX],
	[1, "Imaginary dance",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "VBFHPRE7ixc", "V Extension II", "VE2", "CHUCK", REGULAR_SONG, SHORT_MIX],
	[1, "Melonaid",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "b7kwTlwD1m0", "V Extension II", "VE2", "KATOMORI", REGULAR_SONG, SHORT_MIX],
	[1, "Memories of dreams",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "ALH4U12WuPQ", "V Extension II", "VE2", "Pory", REGULAR_SONG, SHORT_MIX],
	[1, "Never let you go",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "KBk2bZ87kPY", "V Extension II", "VE2", "Blosso", REGULAR_SONG, SHORT_MIX],
	[1, "Odysseus",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "7bJFJzOnN3c", "V Extension II", "VE2", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "Over Me",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "gg6WiPwd25M", "V Extension II", "VE2", "SSOMbo", REGULAR_SONG, SHORT_MIX],
	[1, "Red Eyes",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "k9YXXZjpYCA", "V Extension II", "VE2", "Cosmograph", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet On You",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "2DIz_n_y9e4", "V Extension II", "VE2", "jam-jam", REGULAR_SONG, SHORT_MIX],
	[1, "Underwater Castle",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "XO5s7zDpenQ", "V Extension II", "VE2", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "Vertical Floating",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "AQDfyASsHig", "V Extension II", "VE2", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Voyage",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "JWd-ck93WE0", "V Extension II", "VE2", "SOPHI", REGULAR_SONG, SHORT_MIX],
	[1, "Won't Back Down",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "rc3p4rVa77M", "V Extension II", "VE2", "Pure 100% / KASA", REGULAR_SONG, SHORT_MIX],
	[1, "Zero to the hunnit",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "e4cULGHvpnc", "V Extension II", "VE2", "SiNA", REGULAR_SONG, SHORT_MIX],
];
