import Papa from 'papaparse';

export default Papa.parse(`Passages,Reading Day,Week,Start Date,End Date
Genesis 1-2; Psalm 19; Mark 1,1,1,1-Jan-2023,7-Jan-2023
Gen 3-5; Mark 2,2,1,1-Jan-2023,7-Jan-2023
Gen 6-8; Psalm 104; Mark 3,3,1,1-Jan-2023,7-Jan-2023
Gen 9-11; Mark 4,4,1,1-Jan-2023,7-Jan-2023
Gen 12-15; Psalm 148; Mark 5,5,1,1-Jan-2023,7-Jan-2023
Genesis 16-18; Mark 6,6,2,8-Jan-2023,14-Jan-2023
Gen 19-20; Psalm 1; Mark 7,7,2,8-Jan-2023,14-Jan-2023
Gen 21-23; Psalm 107; Mark 8,8,2,8-Jan-2023,14-Jan-2023
Gen 24-25; Psalm 4; Mark 9,9,2,8-Jan-2023,14-Jan-2023
Gen 26-27; Mark 10,10,2,8-Jan-2023,14-Jan-2023
Genesis 28-29; Mark 11,11,3,15-Jan-2023,21-Jan-2023
Gen 30-31; Psalm 11; Mark 12,12,3,15-Jan-2023,21-Jan-2023
Gen 32-34; Psalm 145; Mark 13,13,3,15-Jan-2023,21-Jan-2023
Gen 35-37; Psalm 12; Mark 14;,14,3,15-Jan-2023,21-Jan-2023
Gen 38-40; Mark 15,15,3,15-Jan-2023,21-Jan-2023
Genesis 41-42; Mark 16,16,4,22-Jan-2023,28-Jan-2023
Gen 43-44; Psalm 24; Galatians 1,17,4,22-Jan-2023,28-Jan-2023
Gen 45-46; Psalm 108; Gal 2,18,4,22-Jan-2023,28-Jan-2023
Gen 47-48; Psalm 25; Gal 3,19,4,22-Jan-2023,28-Jan-2023
Gen 49-50; Gal 4,20,4,22-Jan-2023,28-Jan-2023
Exodus 1-3; Gal 5,21,5,29-Jan-2023,4-Feb-2023
Exodus 4-6; Gal 6,22,5,29-Jan-2023,4-Feb-2023
Exodus 7-9; Psalm 105; Ephesians 1,23,5,29-Jan-2023,4-Feb-2023
Exodus 10-12; Eph 2,24,5,29-Jan-2023,4-Feb-2023
Exodus 13-15; Psalm 114; Eph 3,25,5,29-Jan-2023,4-Feb-2023
Exodus 16-18; Eph 4,26,6,5-Feb-2023,11-Feb-2023
Exodus 19-21; Psalm 33; Eph 5,27,6,5-Feb-2023,11-Feb-2023
Exodus 22-24; Psalm 109; Eph 6,28,6,5-Feb-2023,11-Feb-2023
Exodus 25-27; Psalm 90; Philippians 1,29,6,5-Feb-2023,11-Feb-2023
Exodus 28-31; Phil 2,30,6,5-Feb-2023,11-Feb-2023
Exodus 32-34; Philippians 3,31,7,12-Feb-2023,18-Feb-2023
Exodus 35-37; Psalm 26; Phil 4,32,7,12-Feb-2023,18-Feb-2023
Exodus 38-40; Hebrews 1,33,7,12-Feb-2023,18-Feb-2023
Leviticus 1-3; Psalm 27; Heb 2,34,7,12-Feb-2023,18-Feb-2023
Lev 4-7; Heb 3,35,7,12-Feb-2023,18-Feb-2023
Leviticus 8-11; Ps 110; Hebrews 4,36,8,19-Feb-2023,25-Feb-2023
Lev 12-14; Psalm 111; Heb 5,37,8,19-Feb-2023,25-Feb-2023
Lev 15-18; Psalm 31; Heb 6,38,8,19-Feb-2023,25-Feb-2023
Lev 19-20; Heb 7,39,8,19-Feb-2023,25-Feb-2023
Lev 21-23; Heb 8,40,8,19-Feb-2023,25-Feb-2023
Leviticus 24-25; Psalm 81; Hebrews 9,41,9,26-Feb-2023,4-Mar-2023
Lev 26-27; Psalm 112; Heb 10,42,9,26-Feb-2023,4-Mar-2023
Numbers 1-2; Psalm 64; Heb 11,43,9,26-Feb-2023,4-Mar-2023
Num 3-5; Heb 12,44,9,26-Feb-2023,4-Mar-2023
Num 6-7; Heb 13,45,9,26-Feb-2023,4-Mar-2023
Numbers 8-11; Colossians 1,46,10,5-Mar-2023,11-Mar-2023
Num 12-14; Psalm 28; Col 2,47,10,5-Mar-2023,11-Mar-2023
Num 15-18; Psalm 113; Col 3,48,10,5-Mar-2023,11-Mar-2023
Num 19-21; Col 4,49,10,5-Mar-2023,11-Mar-2023
Num 22-25; Luke 1,50,10,5-Mar-2023,11-Mar-2023
Numbers 26-29; Luke 2,51,11,12-Mar-2023,18-Mar-2023
Num 30-33; Psalm 35; Luke 3,52,11,12-Mar-2023,18-Mar-2023
Num 34-36; Luke 4,53,11,12-Mar-2023,18-Mar-2023
Deuteronomy 1-3; Psalm 36; Luke 5,54,11,12-Mar-2023,18-Mar-2023
Deut 4-5; Luke 6,55,11,12-Mar-2023,18-Mar-2023
Deuteronomy 6-9; Luke 7,56,12,19-Mar-2023,25-Mar-2023
Deut 10-14; Psalm 5; Luke 8,57,12,19-Mar-2023,25-Mar-2023
Deut 15-18; Psalm 115; Luke 9,58,12,19-Mar-2023,25-Mar-2023
Deut 19-22; Psalm 6; Luke 10,59,12,19-Mar-2023,25-Mar-2023
Deut 23-26; Luke 11,60,12,19-Mar-2023,25-Mar-2023
Deut 27-31; Luke 12,61,13,26-Mar-2023,1-Apr-2023
Deut 32-34; Psalm 13; Luke 13,62,13,26-Mar-2023,1-Apr-2023
Joshua 1-4; Psalm 143; Luke 14,63,13,26-Mar-2023,1-Apr-2023
Joshua 5-8; Psalm 14; Luke 15,64,13,26-Mar-2023,1-Apr-2023
Joshua 9-13; Luke 16,65,13,26-Mar-2023,1-Apr-2023
Joshua 14-17; Luke 17,66,14,2-Apr-2023,8-Apr-2023
Joshua 18-21; Psalm 15; Luke 18,67,14,2-Apr-2023,8-Apr-2023
Joshua 22-24; Psalm 116; Luke 19,68,14,2-Apr-2023,8-Apr-2023
Judges 1-3; Psalm 16; Luke 20,69,14,2-Apr-2023,8-Apr-2023
Judges 4-6; Luke 21,70,14,2-Apr-2023,8-Apr-2023
Judges 7-8; Luke 22,71,15,9-Apr-2023,15-Apr-2023
Judges 9-11; Psalm 17; Luke 23,72,15,9-Apr-2023,15-Apr-2023
Judges 12-16; Psalm 146; Luke 24,73,15,9-Apr-2023,15-Apr-2023
Judges 17-18; Psalm 21; Acts 1,74,15,9-Apr-2023,15-Apr-2023
Judges 19-21; Acts 2,75,15,9-Apr-2023,15-Apr-2023
Ruth 1-2; Acts 3,76,16,16-Apr-2023,22-Apr-2023
Ruth 3-4; Psalm 37; Acts 4,77,16,16-Apr-2023,22-Apr-2023
1 Samuel 1-2; Psalm 120; Acts 5,78,16,16-Apr-2023,22-Apr-2023
1 Sam 3-5; Psalm 23; Acts 6,79,16,16-Apr-2023,22-Apr-2023
1 Sam 6-8; Acts 7,80,16,16-Apr-2023,22-Apr-2023
1 Samuel 9-10; Acts 8,81,17,23-Apr-2023,29-Apr-2023
1 Sam 11-13; Psalm 38; Acts 9,82,17,23-Apr-2023,29-Apr-2023
1 Sam 14; Psalm 124; Acts 10,83,17,23-Apr-2023,29-Apr-2023
1 Sam 15-16; 1 Chr 1; Ps 39; Acts 11,84,17,23-Apr-2023,29-Apr-2023
1 Sam 17; 1 Chr 2; Acts 12,85,17,23-Apr-2023,29-Apr-2023
1 Sam 18-19; 1 Chr 3; Ps 59; Acts 13,86,18,30-Apr-2023,6-May-2023
"1 Sa 20;1 Chr 4; Ps 56, 57, 142; Acts 14",87,18,30-Apr-2023,6-May-2023
1 Sam 21-22; 1 Chr 5; Ps 52; Acts 15,88,18,30-Apr-2023,6-May-2023
1 Sam 23-24; 1 Chr 6; Ps 54; Acts 16,89,18,30-Apr-2023,6-May-2023
1 Sam 25; 1 Chr 7; Acts 17,90,18,30-Apr-2023,6-May-2023
1 Sam 26-27; 1 Chr 8; Acts 18,91,19,7-May-2023,13-May-2023
1 Sam 28-29; 1 Chr 9; Acts 19,92,19,7-May-2023,13-May-2023
1 Sam 30-31; 1 Chr 10; Acts 20,93,19,7-May-2023,13-May-2023
"2 Sam 1-2; 1 Chr 11; Ps 96, 106; Acts 21",94,19,7-May-2023,13-May-2023
2 Sam 3-5; 1 Chr 12; Ps 122; Acts 22,95,19,7-May-2023,13-May-2023
2 Sam 6; 1 Chr 13; Psalm 60; Acts 23,96,20,14-May-2023,20-May-2023
1 Chron 14-16; Acts 24,97,20,14-May-2023,20-May-2023
2 Sam 7-8; 1 Chr 17; Ps 132; Acts 25,98,20,14-May-2023,20-May-2023
2 Sam 9-10; 1 Chr 18-19; Ps 89; Acts 26,99,20,14-May-2023,20-May-2023
"2 Sa 11-12; 1 Chr 20; Ps 51, 32; Acts 27",100,20,14-May-2023,20-May-2023
2 Sam 13-14; Acts 28,101,21,21-May-2023,27-May-2023
"2 Sam 15-17; Psalms 3, 63; Romans 1",102,21,21-May-2023,27-May-2023
2 Sam 18-20; Psalm 34; Romans 2,103,21,21-May-2023,27-May-2023
2 Sam 21-23; Psalm 18; Romans 3,104,21,21-May-2023,27-May-2023
2 Sam 24; 1 Chr 21; Romans 4,105,21,21-May-2023,27-May-2023
1 Chr 22-25; Psalm 78; Romans 5,106,22,28-May-2023,3-Jun-2023
1 Kings 1; 1 Chr 26-28; Romans 6,107,22,28-May-2023,3-Jun-2023
1 Kings 2; 1 Chr 29; Romans 7,108,22,28-May-2023,3-Jun-2023
1 Kings 3; 2 Chr 1; Ps 42; Romans 8,109,22,28-May-2023,3-Jun-2023
1 Kings 4; Prov 1-2; Psalm 43; Romans 9,110,22,28-May-2023,3-Jun-2023
Proverbs 3-5; Romans 10,111,23,4-Jun-2023,10-Jun-2023
Proverbs 6-7; Psalm 7; Romans 11,112,23,4-Jun-2023,10-Jun-2023
Proverbs 8-10; Psalm 144; Romans 12,113,23,4-Jun-2023,10-Jun-2023
Proverbs 11-13; Ps 8; Romans 13,114,23,4-Jun-2023,10-Jun-2023
Proverbs 14-15; Romans 14,115,23,4-Jun-2023,10-Jun-2023
Proverbs 16-18; Romans 15,116,24,11-Jun-2023,17-Jun-2023
Proverbs 19-21; Ps 40; Romans 16,117,24,11-Jun-2023,17-Jun-2023
Proverbs 22-23; Ps 117; 1 Thess 1,118,24,11-Jun-2023,17-Jun-2023
Proverbs 24-25; Ps 41; 1 Thess 2,119,24,11-Jun-2023,17-Jun-2023
Proverbs 26-28; 1 Thess 3,120,24,11-Jun-2023,17-Jun-2023
Proverbs 29-31; 1 Thess 4,121,25,18-Jun-2023,24-Jun-2023
Song of Sol 1-3; Ps 72; 1 Thess 5,122,25,18-Jun-2023,24-Jun-2023
Song of Sol 4-6; 2 Thess 1,123,25,18-Jun-2023,24-Jun-2023
Song of Sol 7-8; Psalm 127; 2 Thess 2,124,25,18-Jun-2023,24-Jun-2023
1 Kings 5; 2 Chr 2; 2 Thess 3,125,25,18-Jun-2023,24-Jun-2023
1 Kings 6; 2 Chr 3; 1 Timothy 1,126,26,25-Jun-2023,1-Jul-2023
1 Kings 7; 2 Chr 4; Psalm 44; 1 Tim 2,127,26,25-Jun-2023,1-Jul-2023
1 Kings 8; Psalm 30; 1 Tim 3,128,26,25-Jun-2023,1-Jul-2023
2 Chr 5-7; Psalm 121; 1 Tim 4,129,26,25-Jun-2023,1-Jul-2023
1 Kings 9; 2 Chr 8; 1 Tim 5,130,26,25-Jun-2023,1-Jul-2023
1 Kings 10-11; 2 Chr 9; 1 Tim 6,131,27,2-Jul-2023,8-Jul-2023
Ecclesiastes 1-3; Psalm 45; 2 Tim 1,132,27,2-Jul-2023,8-Jul-2023
Eccl 4-6; Psalm 125; 2 Tim 2,133,27,2-Jul-2023,8-Jul-2023
Eccl 7-9; Psalm 46; 2 Tim 3,134,27,2-Jul-2023,8-Jul-2023
Eccl 10-12; 2 Tim 4,135,27,2-Jul-2023,8-Jul-2023
1 Kings 12; 2 Chr 10-11; Titus 1,136,28,9-Jul-2023,15-Jul-2023
1 Kings 13-14; 2 Chr 12; Ps 47; Titus 2,137,28,9-Jul-2023,15-Jul-2023
1 Kings 15; 2 Chr 13-14; Titus 3,138,28,9-Jul-2023,15-Jul-2023
2 Chr 15-16; 1 Kings 16; Philemon,139,28,9-Jul-2023,15-Jul-2023
1 Kings 17-18; Psalm 119; Jude,140,28,9-Jul-2023,15-Jul-2023
1 Kin 19-21; 2 Chr 17; Ps 129; Matt 1,141,29,16-Jul-2023,22-Jul-2023
1 Kings 22; 2 Chr 18; Matt 2,142,29,16-Jul-2023,22-Jul-2023
2 Chr 19-20; 2 Kings 1; Psalm 20; Matt 3,143,29,16-Jul-2023,22-Jul-2023
2 Kings 2-3; Psalm 48; Matt 4,144,29,16-Jul-2023,22-Jul-2023
2 Kings 4-6; Matt 5,145,29,16-Jul-2023,22-Jul-2023
2 Kings 7-8; 2 Chr 21; Matt 6,146,30,23-Jul-2023,29-Jul-2023
2 Kings 9-10; Psalm 49; Matt 7,147,30,23-Jul-2023,29-Jul-2023
2 Chr 22-23; 2 Kings 11; Ps 131; Matt 8,148,30,23-Jul-2023,29-Jul-2023
2 Chr 24; 2 Kings 12; Psalm 50; Matt 9,149,30,23-Jul-2023,29-Jul-2023
Joel; Matt 10,150,30,23-Jul-2023,29-Jul-2023
Jonah; Matt 11,151,31,30-Jul-2023,5-Aug-2023
2 Kings 13-14; 2 Chr 25; Ps 53; Matt 12,152,31,30-Jul-2023,5-Aug-2023
Amos 1-3; Matt 13,153,31,30-Jul-2023,5-Aug-2023
Amos 4-6; Psalm 55; Matt 14,154,31,30-Jul-2023,5-Aug-2023
Amos 7-9; Matt 15,155,31,30-Jul-2023,5-Aug-2023
Hosea 1-3; Matt 16,156,32,6-Aug-2023,12-Aug-2023
Hosea 4-6; Psalm 58; Matt 17,157,32,6-Aug-2023,12-Aug-2023
Hosea 7-10; Matt 18,158,32,6-Aug-2023,12-Aug-2023
Hosea 11-13; Matt 19,159,32,6-Aug-2023,12-Aug-2023
Hosea 14; 2 Chr 26-27; Ps 61; Matt 20,160,32,6-Aug-2023,12-Aug-2023
2 Kings 15-16; Matt 21,161,33,13-Aug-2023,19-Aug-2023
Isaiah 1-3; Psalm 9; Matt 22,162,33,13-Aug-2023,19-Aug-2023
Isaiah 4-6; Matt 23,163,33,13-Aug-2023,19-Aug-2023
Micah 1-4; Psalm 10; Matt 24,164,33,13-Aug-2023,19-Aug-2023
Micah 5-7; Matt 25,165,33,13-Aug-2023,19-Aug-2023
Isaiah 7-10; Psalm 22; Matt 26,166,34,20-Aug-2023,26-Aug-2023
Isa 11-13; Psalm 118; Matt 27,167,34,20-Aug-2023,26-Aug-2023
Isa 14-16; Matt 28,168,34,20-Aug-2023,26-Aug-2023
Isa 17-19; Psalm 62; 1 Cor 1,169,34,20-Aug-2023,26-Aug-2023
Isa 20-22; 1 Cor 2,170,34,20-Aug-2023,26-Aug-2023
Isaiah 23-25; 1 Cor 3,171,35,27-Aug-2023,2-Sep-2023
Isa 26-29; Psalm 65; 1 Cor 4,172,35,27-Aug-2023,2-Sep-2023
Isa 30-32; 1 Cor 5,173,35,27-Aug-2023,2-Sep-2023
Isa 33-35; 1 Cor 6,174,35,27-Aug-2023,2-Sep-2023
2 Chr 28; 2 Kings 17; Psalm 66; 1 Cor 7,175,35,27-Aug-2023,2-Sep-2023
2 Chr 29-31; 1 Cor 8,176,36,3-Sep-2023,9-Sep-2023
2 Kings 18-19; 2 Chr 32; Ps 67; 1 Cor 9,177,36,3-Sep-2023,9-Sep-2023
Isa 36-37; Psalm 123; 1 Cor 10,178,36,3-Sep-2023,9-Sep-2023
2 Kings 20; Isa 38-40; Ps 68; 1 Cor 11,179,36,3-Sep-2023,9-Sep-2023
Isa 41-44; 1 Cor 12,180,36,3-Sep-2023,9-Sep-2023
Isa 45-48; 1 Cor 13,181,37,10-Sep-2023,16-Sep-2023
Isa 49-52; Psalm 69; 1 Cor 14,182,37,10-Sep-2023,16-Sep-2023
Isa 53-55; Psalm 128; 1 Cor 15,183,37,10-Sep-2023,16-Sep-2023
Isa 56-59; Psalm 70; 1 Cor 16,184,37,10-Sep-2023,16-Sep-2023
Is 60-63; 2 Cor 1,185,37,10-Sep-2023,16-Sep-2023
Isa 64-66; 2 Cor 2,186,38,17-Sep-2023,23-Sep-2023
2 Kings 21; 2 Chr 33; Ps 71; 2 Cor 3,187,38,17-Sep-2023,23-Sep-2023
Nahum; Psalm 149; 2 Cor 4,188,38,17-Sep-2023,23-Sep-2023
2 Kings 22-23; Psalm 73; 2 Cor 5,189,38,17-Sep-2023,23-Sep-2023
2 Chr 34-35; 2 Cor 6,190,38,17-Sep-2023,23-Sep-2023
Habakkuk; 2 Cor 7,191,39,24-Sep-2023,30-Sep-2023
Zephaniah; Psalm 74; 2 Cor 8,192,39,24-Sep-2023,30-Sep-2023
Jeremiah 1-4; Psalm 130; 2 Cor 9,193,39,24-Sep-2023,30-Sep-2023
Jer 5-7; Psalm 75; 2 Cor 10,194,39,24-Sep-2023,30-Sep-2023
Jer 8-10; 2 Cor 11,195,39,24-Sep-2023,30-Sep-2023
Jer 11-13; 2 Cor 12,196,40,1-Oct-2023,7-Oct-2023
Jer 14-16; Psalm 76; 2 Cor 13,197,40,1-Oct-2023,7-Oct-2023
Jer 17-20; James 1,198,40,1-Oct-2023,7-Oct-2023
"Jer 22, 23, 26; Psalm 77; James 2",199,40,1-Oct-2023,7-Oct-2023
"Jer 25, 35, 36, 45; Ps 133; James 3",200,40,1-Oct-2023,7-Oct-2023
"Jer 27, 28, 29, 24; James 4",201,41,8-Oct-2023,14-Oct-2023
"Jer 37, 21, 34; Psalm 79; James 5",202,41,8-Oct-2023,14-Oct-2023
Jer 30-33; 1 Peter 1,203,41,8-Oct-2023,14-Oct-2023
"Jer 38, 39, 52; 1 Pet 2",204,41,8-Oct-2023,14-Oct-2023
2 Kin 24-25; 2 Chr 36; Ps 126; 1 Pt 3,205,41,8-Oct-2023,14-Oct-2023
Lamentations; Psalm 137; 1 Peter 4,206,42,15-Oct-2023,21-Oct-2023
Obadiah; Jer 40-42; Ps 147; 1 Pet 5,207,42,15-Oct-2023,21-Oct-2023
"Jer 43, 44, 46; 2 Pet 1",208,42,15-Oct-2023,21-Oct-2023
"Jer 47, 48, 49; Ps 80; 2 Pet 2",209,42,15-Oct-2023,21-Oct-2023
Jer 50-51; 2 Pet 3,210,42,15-Oct-2023,21-Oct-2023
Ezekiel 1-3; John 1,211,43,22-Oct-2023,28-Oct-2023
Ezek 4-6; Psalm 82; John 2,212,43,22-Oct-2023,28-Oct-2023
Ezek 7-9; John 3,213,43,22-Oct-2023,28-Oct-2023
Ezek 10-12; Psalm 83; John 4,214,43,22-Oct-2023,28-Oct-2023
Ezek 13-15; Psalm 136; John 5,215,43,22-Oct-2023,28-Oct-2023
Ezekiel 16-18; John 6,216,44,29-Oct-2023,4-Nov-2023
Ezek 19-21; Psalm 84; John 7,217,44,29-Oct-2023,4-Nov-2023
Ezek 22-24; Psalm 134; John 8,218,44,29-Oct-2023,4-Nov-2023
Ezek 25-27; Psalm 85; John 9,219,44,29-Oct-2023,4-Nov-2023
Ezek 28-30; John 10,220,44,29-Oct-2023,4-Nov-2023
Ezekiel 31-33; John 11,221,45,5-Nov-2023,11-Nov-2023
Ezek 34-36; Psalm 86; John 12,222,45,5-Nov-2023,11-Nov-2023
Ezek 37-39; Psalm 87; John 13,223,45,5-Nov-2023,11-Nov-2023
Ezek 40-42; John 14,224,45,5-Nov-2023,11-Nov-2023
Ezek 43-45; Psalm 135; John 15,225,45,5-Nov-2023,11-Nov-2023
Ezekiel 46-48; John 16,226,46,12-Nov-2023,18-Nov-2023
Daniel 1-3; Psalm 88; John 17,227,46,12-Nov-2023,18-Nov-2023
Dan 4-6; John 18,228,46,12-Nov-2023,18-Nov-2023
Dan 7-9; Psalm 91; John 19,229,46,12-Nov-2023,18-Nov-2023
Dan 10-12; John 20,230,46,12-Nov-2023,18-Nov-2023
Ezra 1-2; John 21,231,47,19-Nov-2023,25-Nov-2023
Ezra 3-4; Psalm 92; 1 John 1,232,47,19-Nov-2023,25-Nov-2023
Haggai; Zechariah 1; Ps 138; 1 John 2,233,47,19-Nov-2023,25-Nov-2023
Zech 2-5; Psalm 93; 1 John 3,234,47,19-Nov-2023,25-Nov-2023
Zech 6-8; 1 John 4,235,47,19-Nov-2023,25-Nov-2023
Zech 9-11; 1 John 5,236,48,26-Nov-2023,2-Dec-2023
Zech 12-14; Psalm 94; 2 John,237,48,26-Nov-2023,2-Dec-2023
Ezra 5-6; Psalm 95; 3 John,238,48,26-Nov-2023,2-Dec-2023
Esther 1-3; Psalm 139; Revelation 1,239,48,26-Nov-2023,2-Dec-2023
Esther 4-6; Rev 2,240,48,26-Nov-2023,2-Dec-2023
Esther 7-10; Revelation 3,241,49,3-Dec-2023,9-Dec-2023
Ezra 7-10; Psalm 97; Rev 4,242,49,3-Dec-2023,9-Dec-2023
Nehemiah 1-3; Rev 5,243,49,3-Dec-2023,9-Dec-2023
Neh 4-6; Psalm 98; Rev 6,244,49,3-Dec-2023,9-Dec-2023
Neh 7-9; Psalm 140; Rev 7,245,49,3-Dec-2023,9-Dec-2023
Neh 10-13; Revelation 8,246,50,10-Dec-2023,16-Dec-2023
Malachi; Psalm 2; Rev 9,247,50,10-Dec-2023,16-Dec-2023
Job 1-3; Psalm 29; Rev 10,248,50,10-Dec-2023,16-Dec-2023
Job 4-7; Psalm 99; Rev 11,249,50,10-Dec-2023,16-Dec-2023
Job 8-11; Rev 12,250,50,10-Dec-2023,16-Dec-2023
Job 12-14; Psalm 100; Rev 13,251,51,17-Dec-2023,23-Dec-2023
Job 15-17; Rev 14,252,51,17-Dec-2023,23-Dec-2023
Job 18-20; Psalm 141; Rev 15,253,51,17-Dec-2023,23-Dec-2023
Job 21-23; Psalm 101; Rev 16,254,51,17-Dec-2023,23-Dec-2023
Job 24-27; Rev 17,255,51,17-Dec-2023,23-Dec-2023
Job 28-30; Revelation 18,256,52,24-Dec-2023,30-Dec-2023
Job 31-33; Psalm 102; Rev 19,257,52,24-Dec-2023,30-Dec-2023
Job 34-36; Rev 20,258,52,24-Dec-2023,30-Dec-2023
Job 37-39; Psalm 103; Rev 21,259,52,24-Dec-2023,30-Dec-2023
Job 40-42; Psalm 150; Rev 22,260,52,24-Dec-2023,30-Dec-2023
`, {
  header: true
});