    // data 

    let dropdown_options = ["home", "video", "audio", "design", "about", "socials"];

    let para = {

        about: "joedavies.io is a digital repository. <br> <br> Joe Davies is a 28 year old digital artist based in New Zealand. <br> <br> 'Thank you for visiting my web app. My work explores the space between technology and art. I create digital content for posterity and offer digital services to users.'",
    
        design: "joedavies.io is a web based application written in html, scss and javascript and is an example of my design and scripting. I can code, design and maintain websites at a set cost (no hourly prices) and work alongside other developers in bigger projects.", "sub" : "User Experience Design.",
    
        audio: "I trained classically in youth and since I have gone on to produce and perform electronic music in a variety of different settings. I like feel good music with developmental chord progressions and I also like to work with alternative time signatures. My services include both a) live performance as a dj for events and private parties and b) creating music for digital, commercial and personal productions.",

        video: "My approach - quality video, audio and shot composition engineered toward simple themes. I can lead production from start to finish, beginning with explorations of what the concept is and what it wants to achieve. The relationship between video, audio and user experience will also inform the project progression. I use design tools, market strategy and technology to develop what content you want to create and the method of its release and access.",
    

    // examples
        coingecko: 'https://www.coingecko.com/en/coins/algorand',
    
        youtubeframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qhBZO5htcrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    
    }
    
    let photos = {

        blondinis_cover: "/joeio_draft_04/src/img/bp_03-01.png",

        techno_hills: '/joeio_draft_04/src/img/techno_logos-01.png'
    }

    let videos = {

        blondinis_video: "src/audio/gold_in_the_valley_03.wav",

        techno_video: '<iframe width="100%" src="https://www.youtube.com/embed/4LyjoUFf0PA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="iframe_x"></iframe>',

         test_video: '<iframe width="100%" height="" src="https://www.youtube.com/embed/D6ptEfen830" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

         blondins_iframe: '<iframe width="100%" src="https://www.youtube.com/embed/_qAy--r7jAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="iframe"></iframe>'
    }

    let headers = ["about", "socials"];
    //html id vars

    let x = document.getElementById("id");
    let _01 = document.getElementById("component_01");
    console.log(_01);
    let _02 = document.getElementById("component_02");
    let _03 = document.getElementById("component_03");
    let _04 = document.getElementById("component_04");
    let _video_component = document.getElementById('video_component');
    let wide_video_iframe = document.getElementById('video_component_iframe');
    let _05 = document.getElementById("component_05");
    let _05_01 = document.getElementById('component_05_01');
    let _06 = document.getElementById("component_06");
    let _06_01 = document.getElementById('component_06_01');
    let _07 = document.getElementById("component_07");
    let _08 = document.getElementById("component_08");
    let _09 = document.getElementById("component_09");
    let _10 = document.getElementById("component_10");
    let _11 = document.getElementById("component_11");
    let bh = document.getElementById('blondinis_header');
    let _13 = document.getElementById("component_13");


    // 
    let audio_act = document.getElementsByClassName('audio_act');
    let audio_act_02 = document.getElementsByClassName('audio_act_02');
    let video_play = document.getElementById('video_play');

    // gray casing 

    let db = document.getElementById('design_box');
    let ab = document.getElementById('audio_box');
    let vb = document.getElementById('video_box');

    //html touchpoints

    let nav = document.getElementById('nav_bars');
    let audio_x = document.getElementById('audio');
    let design = document.getElementById('design');
    let button = document.getElementById('button');
    let submit = document.getElementById('submit');
    let video = document.getElementById('video');
    
    // inner htmls

    let text = document.getElementById('text');
    let subheader = document.getElementById('subheader');
    let tune_header = document.getElementById('tune_header');
    let third_header = document.getElementById('third_header');
    let img_src = document.getElementById('img_src');
    let audio_img = document.getElementById('audio_img');
    let second_img = document.getElementById('second_img');

    // dropdown options

    let home = document.getElementById('home');
    let _video_button = document.getElementById('_video');
    let _audio = document.getElementById('_audio');
    let _design = document.getElementById('_design');
    let _about = document.getElementById('_about');
    let _socials = document.getElementById('_socials');

    //state_variables

    let landing = 'free state on landing no js, one page application';

    let audio_land = [_01, _02, _03, _04, wide_video_iframe, _13];

    let audio_off = [_11, _10, _09, _07, _video_component, _08, bh, _06, _05, _05_01];

    let video_land = [_01, _02, _03, _04, _13, wide_video_iframe];

    let video_off = [_11, _10, _09, _08, _07, _video_component, bh, _06_01, _05, _05_01];

    let design_land = [_01, _02, _03, _04, _08];

    let design_off = [_11, _10, _09, _07, _06, _video_component, wide_video_iframe, _05_01, bh, _06_01, _05, _13];

    //dropdown overlay is different 

    let about_land = [_01, _03, _04, _05, _09];

    let about_off = [_07, _11, _10, _06, _video_component, _02, wide_video_iframe, _05_01, bh, _06_01, _08, _13];

    let socials_land = [_01, _03, _04, _09,_10];

    let socials_off = [_11, _08, _06, _05, _video_component, _02, _07, wide_video_iframe, _05_01, bh, _06_01, _13];

    let contact_land = [_01, _03, _04, _08, _11, _09]; 

    let contact_off = [_03, _10, _08, _06, _05, _video_component, _02, wide_video_iframe, _05_01, bh, _06_01, _13];

    //  audio set up

    let lib0 = document.getElementById('0');
    let lib1 = document.getElementById('1');
    let lib2 = document.getElementById('2');
    let lib3 = document.getElementById('3');
    let lib4 = document.getElementById('4');
    let lib5 = document.getElementById('5');
    let lib6 = document.getElementById('6');
    let lib7 = document.getElementById('7');

    // let audio_lib_off = [lib0, lib1, lib2, lib3, lib4, lib6, lib7];
    // let video_lib_off = [lib1, lib2, lib3, lib4, lib5, lib6, lib7];
    // console.log(lib1);
let img_z = document.getElementById('img_z');
let h22 = document.getElementById('h22');
    // nav_function

    vb.style.backgroundColor = 'rgb(53, 53, 53)';

    nav.onclick = function()
        {
            console.log('hello');
            if (_07.style.display === "none") {
                _07.style.display = "flex";
                            } 
            else {
                _07.style.display = "none";
                           }
                           
        }
        audio_x.onclick = function() {
            for (let i = 0; i < audio_land.length; i++) {
                
                console.log(audio_land[i]);
                audio_land[i].style.display = 'flex';

                wide_video_iframe.innerHTML = videos.techno_video;
                document.getElementById('audio_box').style.backgroundColor = 'rgb(53, 53, 53)';
                db.style.backgroundColor = 'transparent';
                vb.style.backgroundColor = 'transparent';
 


                
            }
            audio.pause();
            for (let x = 0; x < audio_off.length; x++ ) {
                    audio_off[x].style.display = 'none';
                    console.log(audio_off);
            }

            for (let y = 0; y <audio_act.length; y++) {
                audio_act[y].pause();
            }
            audio.src = '/joeio_draft_04/src/audio/instrumentals/sunday_school.mp3';
            img_z.src = '/joeio_draft_04/src/img/hip_hop_ins/hip_hop_instru-01.png';
            h22.innerHTML = 'Sunday School';
            lib0.classList.remove("selected");
            lib1.classList.remove("selected");
            lib2.classList.remove("selected");
            lib3.classList.remove("selected");
            lib4.classList.remove("selected");
            lib5.classList.add("selected");
            console.log('hello');


      
        }
        _audio.onclick = function() {
            for (let i = 0; i < audio_land.length; i++) {
                
                console.log(audio_land[i]);
                audio_land[i].style.display = 'flex';
                
                text.innerHTML = para.audio;
                wide_video_iframe.innerHTML = videos.techno_video;

                document.getElementById('audio_box').style.backgroundColor = 'rgb(53, 53, 53)';
                db.style.backgroundColor = 'transparent';
                vb.style.backgroundColor = 'transparent';
                video_play.pause();
                second_img.src = '/joeio_draft_04/src/img/hip_hop_ins/hip_hop_instru-01.png';

                for (let y = 0; y <audio_act.length; y++) {
                    audio_act[y].pause();
                }
                audio.pause();
                audio.src = '/joeio_draft_04/src/audio/instrumentals/j_d_01.wav';
                img_z.src = '/joeio_draft_04/src/img/hip_hop_ins/hip_hop_instru-01.png';
                h22.innerHTML = 'MC Pasa';
                lib0.classList.remove("selected");
                lib1.classList.remove("selected");
                lib2.classList.remove("selected");
                lib3.classList.remove("selected");
                lib4.classList.remove("selected");
                lib5.classList.add("selected");

                
            }

            for (let x = 0; x < audio_off.length; x++ ) {
                    audio_off[x].style.display = 'none';
                    console.log(audio_off);
            }

        }




        // video landing
        video.onclick = function() {
            for (let i = 0; i < video_land.length; i++) 
                    {
                console.log(i);
                video_land[i].style.display = 'flex';
                    }

                    audio.pause();
                    document.getElementById('video_box').style.backgroundColor = 'rgb(53, 53, 53)';
                    ab.style.backgroundColor = 'transparent';
                    db.style.backgroundColor = 'transparent';
                    second_img.src = '/joeio_draft_04/src/img/bp/bp_04-01.png';
                    wide_video_iframe.innerHTML = videos.blondins_iframe;
                    // audio_act.pause();

                    for (let y = 0; y <audio_act.length; y++) {
                        audio_act[y].pause();
                    }


                    for (let p = 0; p < audio_act_02.length; p++) {
                        audio_act_02[p].pause();
                        console.log('gfff');
                    }
                    audio.src = '/joeio_draft_04/src/audio/blondinis_audio/dreamz.wav';
                    img_z.src = '/joeio_draft_04/src/img/bp/bp_04-01.png';
                    h22.innerHTML = 'Dreamz';
                    lib0.classList.add("selected");
                    lib1.classList.remove("selected");
                    lib2.classList.remove("selected");
                    lib3.classList.remove("selected");
                    lib4.classList.remove("selected");
                    lib5.classList.remove("selected");
                    

            for (let x = 0; x < video_off.length; x++ ) 
            
                        {
                    video_off[x].style.display = 'none';
                        }    
            }

            _video.onclick = function() {
                for (let i = 0; i < video_land.length; i++) 
                        {
                    console.log(i);
                    video_land[i].style.display = 'flex';
                        }
                        
    
                        document.getElementById('video_box').style.backgroundColor = 'rgb(53, 53, 53)';
                        ab.style.backgroundColor = 'transparent';
                        db.style.backgroundColor = 'transparent';
                        second_img.src = '/joeio_draft_04/src/img/bp/bp_04-01.png';
                        wide_video_iframe.innerHTML = videos.blondins_iframe;    
                        audio.pause();
    
                        
    
                for (let x = 0; x < video_off.length; x++ ) 
                
                            {
                        video_off[x].style.display = 'none';
                            }    

                            for (let y = 0; y <audio_act.length; y++) {
                                audio_act[y].pause();
                            }
        
        
                            for (let p = 0; p < audio_act_02.length; p++) {
                                audio_act_02[p].pause();
                                console.log('gfff');
                            }

                            audio.src = '';
                            img_z.src = '/joeio_draft_04/src/img/bp/bp_04-01.png';
                            h22.innerHTML = 'Dreamz';
                            lib0.classList.add("selected");
                            lib1.classList.remove("selected");
                            lib2.classList.remove("selected");
                            lib3.classList.remove("selected");
                            lib4.classList.remove("selected");
                            lib5.classList.remove("selected");
                }
    
            

        // design landing
        design.onclick = function() {
            for (let i = 0; i < design_land.length; i++) {
                console.log(i);
                design_land[i].style.display = 'flex';
                design_off[i].style.display = 'none';
            }
            text.innerHTML = para.design;
            document.getElementById('design_box').style.backgroundColor = 'rgb(53, 53, 53)';
            ab.style.backgroundColor = 'transparent';
            vb.style.backgroundColor = 'transparent';
            wide_video_iframe.innerHTML = "";
            audio.pause();
            
            for (let x = 0; x < design_off.length; x++ ) 
                
            {
                design_off[x].style.display = 'none';
            }   

            for (let y = 0; y <audio_act.length; y++) {
                audio_act[y].pause();
            }


            for (let p = 0; p < audio_act_02.length; p++) {
                audio_act_02[p].pause();
                console.log('gfff');
            }
            }       


            _design.onclick = function() {
                for (let i = 0; i < design_land.length; i++) {
                    console.log(i);
                    design_land[i].style.display = 'flex';
                    design_off[i].style.display = 'none';
                }
                audio.pause();
                document.getElementById('design_box').style.backgroundColor = 'rgb(53, 53, 53)';
                ab.style.backgroundColor = 'transparent';
                vb.style.backgroundColor = 'transparent';
                video_play.pause();
                wide_video_iframe.innerHTML = "";

    
                for (let x = 0; x < design_off.length; x++ ) 
                    
                {
                    design_off[x].style.display = 'none';
                }   

                for (let y = 0; y <audio_act.length; y++) {
                    audio_act[y].pause();
                }


                for (let p = 0; p < audio_act_02.length; p++) {
                    audio_act_02[p].pause();
                    console.log('gfff');
                }
                } 

            // about  
        _about.onclick = function() {
            for (let i = 0; i < about_land.length; i++) {
                console.log(i);
                about_land[i].style.display = 'flex';
            }
            audio.pause();
            third_header.innerHTML = 'about';
            text.innerHTML = para.about;
            wide_video_iframe.innerHTML = "";
            video_play.pause();



            for (let x = 0; x < about_off.length; x++)
                {
                    about_off[x].style.display = 'none';
                }

                for (let y = 0; y <audio_act.length; y++) {
                    audio_act[y].pause();
                }


                for (let p = 0; p < audio_act_02.length; p++) {
                    audio_act_02[p].pause();
                    console.log('gfff');
                }
            }   




            // socials
        _socials.onclick = function() {
            for (let i = 0; i < socials_land.length; i++) {
                console.log(i);
                socials_land[i].style.display = 'flex';
            }
            audio.pause();
            wide_video_iframe.innerHTML = "";
            third_header.innerHTML = 'socials';
            video_play.pause();
            for (let y = 0; y <audio_act.length; y++) {
                audio_act[y].pause();
            }


            for (let p = 0; p < audio_act_02.length; p++) {
                audio_act_02[p].pause();
                console.log('gfff');
            }
  

            for (let x = 0; x < socials_off.length; x++) {
                socials_off[x].style.display = 'none';
            }
            } 

            //contact
        button.onclick = function() {
            for (let i = 0; i < contact_land.length; i++) {
                console.log(contact_land);
                contact_land[i].style.display = 'flex';
            }
                third_header.innerHTML = 'contact';
                video_play.pause();

            for (let x = 0; x < contact_off.length; x++) {
                contact_off[x]. style.display = 'none';
            }

            for (let y = 0; y <audio_act.length; y++) {
                audio_act[y].pause();
            }
            audio.pause();
            wide_video_iframe.innerHTML = "";
            for (let p = 0; p < audio_act_02.length; p++) {
                audio_act_02[p].pause();
                console.log('gfff');
            }
            } 
               
                         
    
