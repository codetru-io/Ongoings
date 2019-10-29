/**
	Source Selector - YoungBoyTrappin_ Music Player Selector - v1.0.0
 	Copyright (c) 2019, Codetru
	
	Author: Codetru
	Profile: https://codetru.io/
	
**/

	/* ========== Variable Declaration ========== */
        var I_player_frame;
        var I_player_selection;

        var M_player_frame;
        var M_player_selection;

        // -------- Frame Source | Main Page -------- //

            var I_apple_source_frame = "<iframe style='margin-top: -40px!important;' allow='autoplay *; encrypted-media *;' frameborder='0' height='400px' width='100%' style='overflow:hidden;background:transparent;' sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation' src='https://embed.music.apple.com/ca/album/up-all-night-ep/1476702376?app=music'></iframe>";
            var I_soundcloud_source_frame = "<iframe style='margin-top: -40px!important;'width='100%' height='400' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/843222926&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe>";
            var I_spotify_source_frame = "<iframe style='margin-top: -40px!important;' src='https://open.spotify.com/embed/album/0XYYw1tr8R8QcErpFeCn4Q&theme=red'width='100%' height='400' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";

        // -------- Frame Source | Music Page -------- //

            var M_apple_source_frame = "<iframe allow='autoplay *; encrypted-media *;' frameborder='0' height='400px' style='width:100%;overflow:hidden;background:transparent;' sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation' src='https://embed.music.apple.com/ca/album/";
            var M_soundcloud_source_frame = "<iframe width='100%' height='400' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
            var M_spotify_source_frame = "<iframe src='https://open.spotify.com/embed/track/";

        // -------- Frame Parameters | Main Page -------- //

            var I_apple_source_parameters = "";      // None Needed
            var I_soundcloud_source_parameters = ""; // None Needed
            var I_spotify_source_parameters = "";    // None Needed

        // -------- Frame Parameters | Music Page -------- //

            var M_apple_source_parameters = "'></iframe>";
            var M_soundcloud_source_parameters = "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe>";
            var M_spotify_source_parameters = "&theme=red'width='100%' height='400' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";

            var M_current_source = "soundcloud";
            var M_current_song;
            var M_music_title;
            var M_current_song_ID;

	/* ========== END | Variable Declaration ========== */



	/* ========== Main Page | Source Picker / Setter ========== */
        var I_frame = document.getElementById("index_source");

        function index_source(I_player_selection) {
            if(I_player_selection == "spotify") {
                I_frame.innerHTML = I_spotify_source_frame;
            }
            else if(I_player_selection == "apple") {
                I_frame.innerHTML = I_apple_source_frame;
            }
            else {
                I_frame.innerHTML = I_soundcloud_source_frame;
            }
        }
	/* ========== Music Page | Source Declaration ========== */
        var M_frame = document.getElementById("M_player_frame");

        var apple_ID = [
            [],
          ['1','sober/1476702376?i=1476702383','Sober'],
          ['2','waiting/1476702376?i=1476702478','Waiting'],
          ['3','tears/1476702376?i=1476702381','Tears'],
          ['4','so-low/1476702376?i=1476702382','So Low'],
          ['5','call-me-feat-kxrlow/1476702376?i=1476702384','Call Me (ft Kxlrow)'],
          ['6','so-low/1476702376?i=1476702382','Broken'],
          ['7','in-my-room/1479359405?i=1479359406','In My Room'],
          ['8','roll-the-dice/1482797232?i=1482797233','Roll The Dice']
        ];
        var soundcloud_ID = [
            [],
            ['1','591659310','Sober'],
            ['2','598936773','Waiting'],
            ['3','607535451','Tears'],
            ['4','612538422','So Low'],
            ['5','618128400','Call Me ft. Kxrlow'],
            ['6','626777916','Broken'],
            ['7','673914089','In My Room'],
            ['8','692609071','Roll The Dice']
        ];
        var spotify_ID = [
            [],
            ['1','7A2I9iWfUyarZqA2XAXaep','Sober'],
            ['2','3X5A6PjuKyIHd1TPMrfeUZ','Waiting'],
            ['3','4PzWhKQg1f5Eq6gYzLHcyI','Tears'],
            ['4','6gspZFtCZsEXp3jqfOriNO','So Low'],
            ['5','5AYaw3rzTXmmcrgrhAQWwH','Call Me ft. Kxrlow'],
            ['6','4QpLQzC2fsMIiLQ8UvsBBM','Broken'],
            ['7','0ko3usDsLvIqFKksEbLpTK','In My Room'],
            ['8','1ccpHPOeDxBICXbYVcrHiO', 'Roll The Dice']
        ];


        // -------- Frame Parameters | Music Page -------- //


        // ----- Functions | Music Page ----- //

            function music_source(M_source_selected) {
                if(M_current_song_ID == null) {
                    M_frame.innerHTML = "<h3 style='font-style:italic'>Select A Song First</h3>"
                }
                else {
                    if(M_source_selected == "spotify") {
                        M_frame.innerHTML = M_spotify_source_frame+spotify_ID[M_current_song_ID][1]+M_spotify_source_parameters;
                        M_player_selection = "spotify";
                    }
                    else if(M_source_selected == "apple") {
                        M_frame.innerHTML = M_apple_source_frame+apple_ID[M_current_song_ID][1]+M_apple_source_parameters;
                        M_player_selection = "apple";
                    }
                    else {
                        M_frame.innerHTML = M_soundcloud_source_frame+M_current_song+M_soundcloud_source_parameters;
                        M_player_selection = "soundcloud";
                    }
                }

            }


            function choose(music_id) {
                // Set Music Title
                M_music_title = document.getElementById("M_player_title");

                // Determine Music Source | Set
                if(M_player_selection == "spotify") {
                    M_current_song = spotify_ID[music_id][1];
                    M_current_source = "spotify";
                    M_current_song_ID = music_id;
                    M_frame.innerHTML = M_spotify_source_frame+M_current_song+M_spotify_source_parameters;
                    M_music_title.innerHTML = spotify_ID[music_id][2];
                }
                else if(M_player_selection == "apple") {
                    M_current_song = apple_ID[music_id][1];
                    M_current_source = "apple";
                    M_current_song_ID = music_id;
                    M_frame.innerHTML = M_apple_source_frame+M_current_song+M_apple_source_parameters;
                    M_music_title.innerHTML = apple_ID[music_id][2];
                }
                else {
                    M_current_song = soundcloud_ID[music_id][1];
                    M_current_source = "soundcloud";
                    M_current_song_ID = music_id;
                    M_frame.innerHTML = M_soundcloud_source_frame+M_current_song+M_soundcloud_source_parameters;
                    M_music_title.innerHTML = soundcloud_ID[music_id][2];
                }
    
                 
                
                
                
                
                
                
                
            }





