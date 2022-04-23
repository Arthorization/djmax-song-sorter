# ez2on-song-sorter
manually merge sort your favourite ez2on reboot r songs with love and easectacy 

## Developer notes

All of the song data is found at [src/fnc_data_song.js](./src/fnc_data_song.js), defined in the array `ary_SongData`. Each song's data is an array with a specific number of elements; for example:

```json
[1, "Baby Dance", [1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "xuBQ7dGdj_s", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
```

The elements, in order, are as follows:

1. Nothing useful, but we just have `1` here by convention.
2. Song title.
3. A 1:1 mapping to `ary_TitleData`. If the element at index `i` is 1, then it belongs to the game/album with the title `ary_TitleData[i]`.
4. A url for an image for the game to which the song belongs.
5. YouTube video ID.
6. Game/album full title.
7. Game/album abbreviated classification.
8. Song artist
9. `1` if a regular song, `2` if V exclusive, `3` if link disc.
10. `1` if short/non-extended mix, `2` if an extended mix.

For more information, see [touhou-song-sorter](https://github.com/relick/touhou-song-sorter)
This project is a fork respository of [shockdude's DJMAX Sorter](https://github.com/shockdude/djmax-song-sorter)

## Credits
Original Coding belongs to Relick

Entries insertition by Arthorization

Debugging by Arthorization

Image extraction by Melone

Corrections by Melone (He nagged me :O)

Melone is the one who made me (Arthorization) do this, so thank him for the birth of this project

Special thanks to shockdude for helping me with the project and also allowing me to do this project in the first place.

Note: All IPs of EZ2ON, EZ2DJ, and EZ2AC belongs to Square Pixel and Neonovice. 
Any collab IPs belong to their respective company. 
