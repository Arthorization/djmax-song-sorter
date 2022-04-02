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
	const EXTERIOR_GAME = 3;

// 9: Extended Mix type - short, extended
const EXTENDED_TYPE = 9;
	const SHORT_MIX = 1;
	const EXTENDED_MIX = 2;

var ary_SongData = [
	//1st Trax
	[1, "Baby Dance",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Catch the Flow",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "Confete",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Dirty D",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Do you Remember?",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Envy Mask",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune/Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Freedom",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Funny Funky",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Get the Beat",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "DJ. Hong", REGULAR_SONG, SHORT_MIX],
	[1, "I Do Love You",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Jeon Jun-Kyu/CROOVE", REGULAR_SONG, SHORT_MIX],
	??[1, "I've Fallen",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Let it Go",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Look Out",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 1",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Danmal_G", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 1 (HD Mix)",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Danmal_G", REMIXED_SONG, SHORT_MIX],
	[1, "Mystic Dream 9903",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Danmal_G", REGULAR_SONG, SHORT_MIX],
	[1, "Quake in Kyoto",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "The Rhythm",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "Southwest Cadillac",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Stay",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Yes Yes",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "You live the life you live",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Ztar warZ",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "DJ. Melong", REGULAR_SONG, SHORT_MIX],
	
	
	// Special Edition
	[1, "Catch the Flow (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Creatune", REMIXED_SONG, SHORT_MIX],
	[1, "Combonation",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Kim Jin Kwon", REGULAR_SONG, SHORT_MIX],
	[1, "Confete (Evening Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Dieoxin",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "DJ. Yonda", REGULAR_SONG, SHORT_MIX],
	[1, "Do You Remember? (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Remix Station", REMIXED_SONG, SHORT_MIX],
	[1, "Envy Mask (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	[1, "For 3 Weeks",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Lee So-eun", REGULAR_SONG, SHORT_MIX],
	[1, "The Future",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Remix Station", REGULAR_SONG, SHORT_MIX],
	[1, "Let it Go (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Ruby Tuesday", REMIXED_SONG, SHORT_MIX],
	[1, "Love & Ectasy",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Baby Vox", REGULAR_SONG, SHORT_MIX],
	[1, "My Honey",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Lee Seung-Hwan", REGULAR_SONG, SHORT_MIX],
	[1, "Mystic Dream 9903 (Horror Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Danmal_G", REMIXED_SONG, SHORT_MIX],
	[1, "Quake in Kyoto (Mega Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	[1, "R.D.M.",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Red Hot",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "DR. YONDA", REGULAR_SONG, SHORT_MIX],
	[1, "The Rhythm (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Creatune", REMIXED_SONG, SHORT_MIX],
	[1, "Special K",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Stay (Radio Edit)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Jeon Jun-Kyu", REMIXED_SONG, SHORT_MIX],
	[1, "You live the life you love (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Ztar warZ (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	
	// 2nd Trax
	[1, "Another Time",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Appeal",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Andy Lee, Jennifer", REGULAR_SONG, SHORT_MIX],
	[1, "Back for More",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Back to Bed",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Be my Baby",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "The Boy",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Damnation",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Departure",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Bae Hee-Kyoung", REGULAR_SONG, SHORT_MIX],
	[1, "Exist",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Kim Seung-Hyun", REGULAR_SONG, SHORT_MIX],
	[1, "Funky 5",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Kim Seung-Hyun", REGULAR_SONG, SHORT_MIX],
	[1, "Get it Up",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Lee Jong-Pil, Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Hyponotize",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "It's my secret",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "I've Got this Feeling",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Jam",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Minus One (Space Mix)",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "CROOVE", REMIXED_SONG, SHORT_MIX],
	[1, "Moving On",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Red Ocean",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Say That U",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Seize The Day",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Sentimental No No",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Showdown",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "We Luv Music",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Where's My Girl",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "With U Girl",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Yang Joon-young", REGULAR_SONG, SHORT_MIX],
	[1, "You are the one for me",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Jeon Jun-Kyu, Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Changa",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	
	// 3rd Trax
	[1, "2.14",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "FE", REGULAR_SONG, SHORT_MIX],
	[1, "20000000000",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "2nd Jewel",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "The 3rd Place",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Anemia",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Black Market",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Cosmic Bird",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "FE, CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Give it 2 me",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "FE", REGULAR_SONG, SHORT_MIX],
	[1, "In a nutshell",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Lie Lie",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 2",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "M-Police",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Night Watcher",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "R.F.C.",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Sand Storm",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Shake",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Smash",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Sparrow",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx, CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Substance",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Y-Gate",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Lee Jong-Phil", REGULAR_SONG, SHORT_MIX],
		
	
	// 4th Trax
	[1, "Rising The Sonic",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "ahdGgpeQVfg", "Respect", "DMR", "Dayz", REGULAR_SONG, SHORT_MIX],
	[1, "Closer",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "MrDHm1-qAKg", "Clazziquai Edition", "DMCE", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Coastal Tempo",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "xXKG6kYf4qY", "Clazziquai Edition", "DMCE", "3rd Coast / ReX", REGULAR_SONG, SHORT_MIX],
	[1, "Color",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "jRxs3-kXZuo", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Come to me",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "uD7QDovGxsk", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Creator",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "i2jXcSnEw6Y", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Dark Envy",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "dIkLF875EZw", "Clazziquai Edition", "DMCE", "Sugar Donut", REGULAR_SONG, SHORT_MIX],
	[1, "Electronics",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "GcUMJN1SZh8", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Fate",								[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "SNDonNU4eok", "Clazziquai Edition", "DMCE", "STi", REGULAR_SONG, SHORT_MIX],
	[1, "First Kiss",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "B9_n6PcBuM4", "Clazziquai Edition", "DMCE", "BJJ", REGULAR_SONG, SHORT_MIX],
	[1, "Flea",								[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "bOV_J5n3fXI", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Forever",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "2rUyE0TBaYU", "Clazziquai Edition", "DMCE", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Freedom",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "SzzWapLwWCU", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Here in the Moment",				[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "suuauPUw6V8", "Clazziquai Edition", "DMCE", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Here in the Moment ~Extended Mix~",[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "SdCfQbqOGL4", "Clazziquai Edition", "DMCE", "Ruby Tuesday", LINK_DISC, EXTENDED_MIX],
	[1, "In My Heart",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "FoQLo1dW3qE", "Clazziquai Edition", "DMCE", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Love Mode",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "1PlY3kvGt18", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "Lover (CE Style)",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "uPxrdsJAA14", "Clazziquai Edition", "DMCE", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Proposed, Flower, Wolf",			[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "pd6-NHf2akA", "Clazziquai Edition", "DMCE", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "Tell Me",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "8ppm0yuS4D4", "Clazziquai Edition", "DMCE", "Lee Geol", REGULAR_SONG, SHORT_MIX],
	[1, "The Clear Blue Sky",				[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "5Lwc_-U3PzM", "Clazziquai Edition", "DMCE", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "The Night Stage",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "kE2TuqFes3Q", "Clazziquai Edition", "DMCE", "Clazziquai", REGULAR_SONG, SHORT_MIX],
	[1, "To You",							[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "XqWjSGMY7SQ", "Clazziquai Edition", "DMCE", "Sweetune", REGULAR_SONG, SHORT_MIX],
	[1, "Urban Night (Clazziquai Edition)",	[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "T9DpL4nyA7Y", "Clazziquai Edition", "DMCE", "hYO", REGULAR_SONG, SHORT_MIX],
	[1, "Y (CE Style)",						[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300210/capsule_616x353.jpg", "Qg4UJCM6btE", "Clazziquai Edition", "DMCE", "ND Lee", REGULAR_SONG, SHORT_MIX],

	// Platinum
	[1, "ANALYS",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "Y8GOUA747Ig", "Respect", "DMR", "HAYAKO", REGULAR_SONG, SHORT_MIX],
	[1, "Airwave ~Extended Mix~",			[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "TE8ChoO0Cu8", "Black Square", "DMBS", "ReX", LINK_DISC, EXTENDED_MIX],
	[1, "Beat U Down",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "Eoi0GlSWt2Y", "Black Square", "DMBS", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Colours of Sorrow",				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "htmqGeIABYc", "Black Square", "DMBS", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Cypher Gate",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "IssTYZ4mwWU", "Black Square", "DMBS", "7 Sequence", REGULAR_SONG, SHORT_MIX],
	[1, "Desperado",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "euqqD0T-7UI", "Black Square", "DMBS", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "Fermion",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "jgJ2VjO9P80", "Black Square", "DMBS", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Fever Pitch Girl",					[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "Ji_WfAxdpVM", "Black Square", "DMBS", "Nikacha", REGULAR_SONG, SHORT_MIX],
	[1, "Get Down",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "0uG35q3PkJ4", "Black Square", "DMBS", "BJJ", REGULAR_SONG, SHORT_MIX],
	[1, "Grave Consequence",				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "ezeRJFx3ggU", "Black Square", "DMBS", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Heart of Witch",					[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "vlSKDIgdN0A", "Black Square", "DMBS", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "In my Dream",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "S-_HrhVFey0", "Black Square", "DMBS", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Jealousy",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "YwQ6GMT8wzo", "Black Square", "DMBS", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Keys to the World",				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "G-Tsxd3tEaE", "Black Square", "DMBS", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Lovely Hands",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "ueTc6tZSlh0", "Black Square", "DMBS", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Lover (BS Style)",					[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "axMpfA2UmPw", "Black Square", "DMBS", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "PDM",								[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "h5YTDj3cgmQ", "Black Square", "DMBS", "Trish / Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Proposed, Flower, Wolf Part.2",	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "fQBPtCA4v3E", "Black Square", "DMBS", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "Ready Now",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "88ZHtudb6Yg", "Black Square", "DMBS", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Ruti'n",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "CYv5Sw0HrZQ", "Black Square", "DMBS", "BEXTER", REGULAR_SONG, SHORT_MIX],
	[1, "Secret World",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "i3OsnJn42XI", "Black Square", "DMBS", "Sweetune", REGULAR_SONG, SHORT_MIX],
	[1, "Y (BS Style)",						[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1300211/capsule_616x353.jpg", "9Kjc55BTZoc", "Black Square", "DMBS", "ND Lee", REGULAR_SONG, SHORT_MIX],
	
	// 6th Trax
	[1, "Do you want it",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "4psK3x42jrg", "Respect", "DMR", "House Rulez / Kali", REGULAR_SONG, SHORT_MIX],
	[1, "Access",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "eg9q1JUI5ZY", "Technika 1", "DMT1", "SPHAZER", REGULAR_SONG, SHORT_MIX],
	[1, "Area 7",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "g798zBeEv1U", "Technika 1", "DMT1", "SPHAZER", REGULAR_SONG, SHORT_MIX],
	[1, "Beyond the Future",			[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "yf16uuhz3F8", "Technika 1", "DMT1", "7 Sequence", REGULAR_SONG, SHORT_MIX],
	[1, "Dear My Lady",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "le1UI9hBYcM", "Technika 1", "DMT1", "Oriental ST8", REGULAR_SONG, SHORT_MIX],
	[1, "DJMAX",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "3Lig9cuxbHQ", "Technika 1", "DMT1", "Humming Urban Stereo", REGULAR_SONG, SHORT_MIX],
	[1, "Fury",							[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "6NgNKDnmEC4", "Technika 1", "DMT1", "Sugar Donut", REGULAR_SONG, SHORT_MIX],
	[1, "HEXAD",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "SFcOo9bYDhY", "Technika 1", "DMT1", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Honeymoon",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "MT-PXlygsuk", "Technika 1", "DMT1", "Humming Urban Stereo", REGULAR_SONG, SHORT_MIX],
	[1, "I Want You",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "K0CYsqBnmWY", "Technika 1", "DMT1", "Lin-G", REGULAR_SONG, SHORT_MIX],
	[1, "Landscape",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "KaXFmMkwnhY", "Technika 1", "DMT1", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Melody",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "U6prZ_R2LzQ", "Technika 1", "DMT1", "bermei.inazawa / Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Play the Future",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "PmY8CEQ-WdQ", "Technika 1", "DMT1", "Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Remember",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "XhIjYzsaPIg", "Technika 1", "DMT1", "Lin-G", REGULAR_SONG, SHORT_MIX],
	[1, "Shoreline",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "bCDCYRBHzGk", "Technika 1", "DMT1", "Oriental ST8", REGULAR_SONG, SHORT_MIX],
	[1, "SON OF SUN",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "BCRkabc_NTM", "Technika 1", "DMT1", "Hosoe Shinji", REGULAR_SONG, SHORT_MIX],
	[1, "SON OF SUN ~Extended Mix~",	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "OBqoKJtu_5k", "Technika 1", "DMT1", "Hosoe Shinji", LINK_DISC, EXTENDED_MIX],
	[1, "Supersonic",					[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "893RlJyO-wc", "Technika 1", "DMT1", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet Shining Shooting Star",	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "E9VuY2z54YI", "Technika 1", "DMT1", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "The Last Dance",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "hAr8CJZtIjc", "Technika 1", "DMT1", "Urbatronic Chopsticks", REGULAR_SONG, SHORT_MIX],
	[1, "Thor",							[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "oUbF_SGie58", "Technika 1", "DMT1", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "Voyage",						[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386610/capsule_616x353.jpg", "zBbXvOdBV6c", "Technika 1", "DMT1", "makou", REGULAR_SONG, SHORT_MIX],
	
	// 7th Trax
	[1, "End of Mythology",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "G3aRgjqL_I8", "Respect", "DMR", "Alice Schach and the Magic Orchestra", REGULAR_SONG, SHORT_MIX],
	[1, "Airwave",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "Ej64Vj30VyY", "Technika 2", "DMT2", "ReX", REGULAR_SONG, SHORT_MIX],
	[1, "BEE-U-TIFUL",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "1yY5WX96X5A", "Technika 2", "DMT2", "First Aid", REGULAR_SONG, SHORT_MIX],
	[1, "Burn It Down",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "f2rlSLzrH3w", "Technika 2", "DMT2", "P'sycho-Remi", REGULAR_SONG, SHORT_MIX],
	[1, "Cosmic Fantastic Lovesong",	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "NBjhGBy5qrE", "Technika 2", "DMT2", "DINY", REGULAR_SONG, SHORT_MIX],
	[1, "Cozy Quilt",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "lA4CWquu3tA", "Technika 2", "DMT2", "bermei.inazawa", REGULAR_SONG, SHORT_MIX],
	[1, "D2",							[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "927PVGtIgfA", "Technika 2", "DMT2", "First Aid", REGULAR_SONG, SHORT_MIX],
	[1, "Dream of Winds",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "8FFGY7w0IFY", "Technika 2", "DMT2", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "Dual Strikers",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "W4j005HdOl0", "Technika 2", "DMT2", "7 Sequence", REGULAR_SONG, SHORT_MIX],
	[1, "Eternal Fantasy",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "F7pD-QFND2g", "Technika 2", "DMT2", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "La Campanella : Nu Rave",		[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "YeGbKlnOTpw", "Technika 2", "DMT2", "cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Love is Beautiful",			[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "zuCwc-BZoEE", "Technika 2", "DMT2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "MonoXide",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "v_15riLmzZU", "Technika 2", "DMT2", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Nova (Mr.Funky Remix)",		[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "x9wTg7GVQXc", "Technika 2", "DMT2", "BEXTER / Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Put Em Up",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "IwSyvJ0aJwo", "Technika 2", "DMT2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Puzzler",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "avCn9MGiM0E", "Technika 2", "DMT2", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Rage of Demon",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "PxSUSqjJKmc", "Technika 2", "DMT2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Say It From Your Heart",		[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "GZSqumeIbs4", "Technika 2", "DMT2", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet Dream",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "KPi0eS0oBC4", "Technika 2", "DMT2", "Lin-G", REGULAR_SONG, SHORT_MIX],
	[1, "The Guilty",					[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "0G8Vat_fusk", "Technika 2", "DMT2", "P'sycho-Remi", REGULAR_SONG, SHORT_MIX],
	[1, "Trip",							[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "H4mbaEg5NX0", "Technika 2", "DMT2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "XLASHER",						[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "DpnCmsE0u2Q", "Technika 2", "DMT2", "Hosoe Shinji", REGULAR_SONG, SHORT_MIX],
	[1, "Thor ~Extended Mix~",			[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "MS1B_teArP4", "Technika 2", "DMT2", "XeoN", REGULAR_SONG, EXTENDED_MIX],
	[1, "Y ~Extended Mix~",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386611/capsule_616x353.jpg", "OfiaVmAGV7I", "Technika 2", "DMT2", "ND Lee", REGULAR_SONG, EXTENDED_MIX],
	
	// Technika 3
	[1, "ALiCE",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "s8W2A7GVQ54", "Respect", "DMR", "seibin", REGULAR_SONG, SHORT_MIX],
	[1, "설레임(HeartBeat) Part.2",	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "ckkzuRdES6g", "Technika 3", "DMT3", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "유령(Ghost)",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "AQVZ_vYexQ8", "Technika 3", "DMT3", "STi", REGULAR_SONG, SHORT_MIX],
	[1, "A Life With You",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "hWqaNe7Xors", "Technika 3", "DMT3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "AD2222",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "ryvIlLlqlhQ", "Technika 3", "DMT3", "Croove", REGULAR_SONG, SHORT_MIX],
	[1, "AD2222 ~Extended Mix~",	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "kGSZbtAqj2o", "Technika 3", "DMT3", "Croove", REGULAR_SONG, EXTENDED_MIX],
	[1, "Angel",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "GWPKhN3lqnQ", "Technika 3", "DMT3", "Laurent Newfield / Ravenant", REGULAR_SONG, SHORT_MIX],
	[1, "Bamboo on Bamboo",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "x7HEXmxtgU8", "Technika 3", "DMT3", "Sampling Masters MEGA", REGULAR_SONG, SHORT_MIX],
	[1, "Black Swan",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "d6-PPdBdXak", "Technika 3", "DMT3", "TAK", REGULAR_SONG, SHORT_MIX],
	[1, "Dark Prism",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "_JsG6FBaDR8", "Technika 3", "DMT3", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Dream Again",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "dH5x8WOg3ME", "Technika 3", "DMT3", "DINY", REGULAR_SONG, SHORT_MIX],
	[1, "EGG",						[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "003Jm2RZx9g", "Technika 3", "DMT3", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "EGG ~Extended Mix~",		[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "BVsv9CuJA38", "Technika 3", "DMT3", "Nauts", REGULAR_SONG, EXTENDED_MIX],
	[1, "Emblem",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "sFHn175wDqg", "Technika 3", "DMT3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Fallin' in LUV",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "oHGCMpGqnDs", "Technika 3", "DMT3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Feel Ma Beat",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "sm0Zufxnp08", "Technika 3", "DMT3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Give Me 5",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "ovqtp2GivBM", "Technika 3", "DMT3", "ND Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Kung-Fu Rider",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "LAf-wrYXpZs", "Technika 3", "DMT3", "AstroKid", REGULAR_SONG, SHORT_MIX],
	[1, "My Heart, My Soul",		[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "WLBqXBGPDVk", "Technika 3", "DMT3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Now a NEW Day",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "KrJyGhPK-Mw", "Technika 3", "DMT3", "Sui.Jay", REGULAR_SONG, SHORT_MIX],
	[1, "Out of CTRL",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "oe9mdnytyVA", "Technika 3", "DMT3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Over the Rainbow",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "fzzTmCrIfMo", "Technika 3", "DMT3", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Right Back",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "_waGyYAV2DA", "Technika 3", "DMT3", "TANUKI", REGULAR_SONG, SHORT_MIX],
	[1, "Showdown",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "vl9bG_o_INE", "Technika 3", "DMT3", "LeeZu", REGULAR_SONG, SHORT_MIX],
	[1, "SigNalize",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "6DLxx6K-hFw", "Technika 3", "DMT3", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "SuperNova",				[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "-4ZEOqXEzEM", "Technika 3", "DMT3", "cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Supersonic 2011",			[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "PtD8AMnJApE", "Technika 3", "DMT3", "Sound LAB", REGULAR_SONG, SHORT_MIX],
	[1, "Wanna Be Your Lover",		[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "IQ5mV0EFw8U", "Technika 3", "DMT3", "Laurent Newfield / Ravenant", REGULAR_SONG, SHORT_MIX],
	[1, "Xeus",						[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "FtODrCGHa5c", "Technika 3", "DMT3", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "You & Me",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1386612/capsule_616x353.jpg", "GTdZqN_yizs", "Technika 3", "DMT3", "NieN", REGULAR_SONG, SHORT_MIX],

	// Emotional Sense
	[1, "Cosmic Elevator",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "Kd72hDtQ77w", "Emotional Sense", "ES", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Feel",							[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "EExs5QEVzXs", "Emotional Sense", "ES", "DJ Mocha", REGULAR_SONG, SHORT_MIX],
	[1, "Knowledge System",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "KnSgHNyEfXw", "Emotional Sense", "ES", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Real Over Drive",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "EniJ8UEuz2Y", "Emotional Sense", "ES", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Space of Soul",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "3nsIBHLZGJk", "Emotional Sense", "ES", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Super Lovely",					[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "gs5bACRz3bU", "Emotional Sense", "ES", "EarBreaker", REGULAR_SONG, SHORT_MIX],
	[1, "Urban Night (DJMAX Online)",	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "q5_OWmEjw-U", "Emotional Sense", "ES", "Electronic Boutique", REGULAR_SONG, SHORT_MIX],
	[1, "Yo! Max!",						[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "YWC28cLaAL4", "Emotional Sense", "ES", "ND Lee", REGULAR_SONG, SHORT_MIX],

	// V Extension
	[1, "Attack",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "0Lt2NERKgG4", "V Extension", "VE", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "BLACK GOLD",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "iV0tpqo0E1A", "V Extension", "VE", "cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Do It",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "mCohUvkMwb0", "V Extension", "VE", "House Rulez", REGULAR_SONG, SHORT_MIX],
	[1, "Dream It",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "-H6rGmtHfuo", "V Extension", "VE", "Bexter", REGULAR_SONG, SHORT_MIX],
	[1, "Fancy Night",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "i3M3_zqDdZE", "V Extension", "VE", "Sina x Chuck", REGULAR_SONG, SHORT_MIX],
	[1, "FIGHT NIGHT (feat. Calyae)",			[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "LaSwOfJ8dns", "V Extension", "VE", "Messier", REGULAR_SONG, SHORT_MIX],
	[1, "Kensei",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "pecxsy3Z318", "V Extension", "VE", "Pure 100%", REGULAR_SONG, SHORT_MIX],
	[1, "Lisrim",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "XM8Najws_Mk", "V Extension", "VE", "onoken", REGULAR_SONG, SHORT_MIX],
	[1, "Lost Serenity",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "A6dOKwTvarc", "V Extension", "VE", "Benicx", REGULAR_SONG, SHORT_MIX],
	[1, "Lost Temple",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "qBpLcVDJU44", "V Extension", "VE", "IMLAY", REGULAR_SONG, SHORT_MIX],
	[1, "Maharajah -fenomeno edition-",			[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "_QAdanFBYYA", "V Extension", "VE", "Alice Schach and the Magic Orchestra", REGULAR_SONG, SHORT_MIX],
	[1, "Misty Er'A",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "fx8bYk5PcM8", "V Extension", "VE", "Mycin.T x jam-jam", REGULAR_SONG, SHORT_MIX],
	[1, "Move Yourself",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "YLO9rE6JnJA", "V Extension", "VE", "IMLAY / YESSO", REGULAR_SONG, SHORT_MIX],
	[1, "NANAIRO",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "Z4utnvNjoI4", "V Extension", "VE", "HAYAKO", REGULAR_SONG, SHORT_MIX],
	[1, "Never Die",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "sClhXsaUIGw", "V Extension", "VE", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Remember Me",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "TyKgTJ-BAFo", "V Extension", "VE", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Space Challenger",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "Q-CbwgGUpNQ", "V Extension", "VE", "Bagagee Viphex13", REGULAR_SONG, SHORT_MIX],
	[1, "Vile Requiem",							[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "ZE8Po36RkqE", "V Extension", "VE", "GOTH", REGULAR_SONG, SHORT_MIX],
	[1, "welcome to the space (feat. Jisun)",	[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "7K_wmnT_Qwc", "V Extension", "VE", "Pory", REGULAR_SONG, SHORT_MIX],
	[1, "WONDER $LOT 777",						[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "Wk9d9GQbBEs", "V Extension", "VE", "MYUKKE.", REGULAR_SONG, SHORT_MIX],

	// Dok2 - Only On
	[1, "Only On", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e02fdf812e9da9c76233ecddc3c", "BeNk6oN65dY", "Event", "DOK2", "Dok2 / HELIXX", REGULAR_SONG, SHORT_MIX],
	
	// Guilty Gear
	[1, "Break a Spell",					[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "_kK3J0052pU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	[1, "Holy Orders (Be Just Or Be Dead)",	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "SMIXv7WuCZ4", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	[1, "Marionette",						[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "4RYTgFia0RU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	
	// Girls' Frontline
	[1, "Barbarous Funera",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Girls' Frontline", "GF", "Rikako Watanabe", REGULAR_SONG, SHORT_MIX],
	[1, "Frontline",				[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "RH_8HOfRmp4", "Girls' Frontline", "GF", "B@kamin / M2U", REGULAR_SONG, SHORT_MIX],
	[1, "What am I fighting for?",	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "IOGxyC_Dar0", "Girls' Frontline", "GF", "Haloweak", REGULAR_SONG, SHORT_MIX],
	
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
	
	// NEXON
	[1, "Alliance x Empire",												[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "J-9cwxFqgnY", "NEXON (AxE)", "NEXON", "NEXON", V_EXCLUSIVE, SHORT_MIX],
	[1, "An old story from Grandma",										[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "BcYjGGWsR14", "NEXON (Mabinogi)", "NEXON", "HanStone / S.F.A", V_EXCLUSIVE, SHORT_MIX],
	[1, "Apparition",														[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "Ywqw4vtJ5oQ", "NEXON (Talesweaver)", "NEXON", "ESTi", V_EXCLUSIVE, SHORT_MIX],
	[1, "Buyeo Fortress ~Blosso Remix~",									[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "N-SjiV36cVQ", "NEXON (Nexus TK)", "NEXON", "NEXON / Blosso", V_EXCLUSIVE, SHORT_MIX],
	[1, "Constant Moderato",												[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "mzCKruq6zEw", "NEXON (Blue Archive)", "NEXON", "Mitsukiyo", V_EXCLUSIVE, SHORT_MIX],
	[1, "Cromm Cruaich",													[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "GMkLsJJNDgY", "NEXON (Mabinogi Heroes)", "NEXON", "Studio EIM", V_EXCLUSIVE, SHORT_MIX],
	[1, "It's my war now",													[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "yf-4ApnNhuc", "NEXON (Dungeon & Fighter)", "NEXON", "Kim Dong Hyun", V_EXCLUSIVE, SHORT_MIX],
	[1, "Kartrider Mashup ~Cosmograph Remix~",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "QJ-WoqhAHVU", "NEXON", "NEXON", "NEXON / Studio EIM / Cosmograph", V_EXCLUSIVE, SHORT_MIX],
	[1, "Kartrider Mashup ~Pure 100% Remix~",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "kr2RwZ3XaFc", "NEXON", "NEXON", "NEXON / Studio EIM / Pure 100%", V_EXCLUSIVE, SHORT_MIX],
	[1, "Kartrider, Crazyarcade, Bubblefighter Main theme ~CHUCK Remix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "ezU41UafYck", "NEXON", "NEXON", "NEXON / CHUCK", V_EXCLUSIVE, SHORT_MIX],
	[1, "Lacheln, The City of Dreams",										[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "4a87UnXNc-Q", "NEXON (MapleStory)", "NEXON", "NEXON", V_EXCLUSIVE, SHORT_MIX],
	[1, "Lugh Lamhfada",													[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "sR5XNucNvUM", "NEXON (Mabinogi Heroes)", "NEXON", "Studio EIM", V_EXCLUSIVE, SHORT_MIX],
	[1, "Reminiscence",														[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "aMY5b6InJSk", "NEXON (Talesweaver)", "NEXON", "Nauts", V_EXCLUSIVE, SHORT_MIX],
	[1, "Start The Adventure ~SOPHI Remix~",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "Gz9qGT6MjM0", "NEXON (MapleStory)", "NEXON", "NEXON / SOPHI", V_EXCLUSIVE, SHORT_MIX],
	[1, "Tayberrs - Collapsed Paradise",									[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "LzLhEk9Rnnw", "NEXON (Dungeon & Fighter)", "NEXON", "Jung Young Gul", V_EXCLUSIVE, SHORT_MIX],
	[1, "The Final Dance",													[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "6xAEnPWR3Go", "NEXON (Mabinogi)", "NEXON", "HanStone", V_EXCLUSIVE, SHORT_MIX],
	[1, "The Little Adventurer",											[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "UGopFYfAQEA", "NEXON (MapleStory 2)", "NEXON", "Studio EIM", V_EXCLUSIVE, SHORT_MIX],
	[1, "The Raindrop Flower ~jam-jam Remix~",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "Q-KnCo3LboY", "NEXON (MapleStory)", "NEXON", "Studio EIM / jam-jam", V_EXCLUSIVE, SHORT_MIX],
	[1, "The Siege warfare ~Pierre Blanche, Yonce Remix~",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "-Cx5ZAMI6TA", "NEXON (Nexus TK)", "NEXON", "NEXON / Pierre Blanche / Yonce", V_EXCLUSIVE, SHORT_MIX],
	[1, "Where Legend Begin ~VoidRover Remix~",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "mwmIkJiJ1HU", "NEXON (Legend of Darkness)", "NEXON", "Asteria / VoidRover", V_EXCLUSIVE, SHORT_MIX],
	[1, "Young Adventurer ~SiNA Remix~",									[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1782170/capsule_616x353.jpg", "lTLRtySvmLY", "NEXON (Mabinogi)", "NEXON", "HanStone / SiNA", V_EXCLUSIVE, SHORT_MIX],
	
	// V Extension II
	[1, "Arcade Love (feat. KNVWN)",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "9M11lQpl7fk", "V Extension II", "VE2", "Newton / KNVWN", REGULAR_SONG, SHORT_MIX],
	[1, "Chrysanthemum",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "EM_PmOfPeRM", "V Extension II", "VE2", "Kanallia", REGULAR_SONG, SHORT_MIX],
	[1, "Cocked Pistol",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "wwTe0a4kqg0", "V Extension II", "VE2", "Pierre Blanche", REGULAR_SONG, SHORT_MIX],
	[1, "Daydream",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "sayzAjrOvEs", "V Extension II", "VE2", "Mycin.T / SiNA", REGULAR_SONG, SHORT_MIX],
	[1, "FALLING IN LOVE",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "I3M_CNtzATY", "V Extension II", "VE2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Flowering ~Original Ver.~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "3vhA8njtoQg", "V Extension II", "VE2", "ampstyle", V_LINK, EXTENDED_MIX],
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
