

 // body container
  let body_container = document.getElementById('body_container');



    // 


      function create_header() {

        let _09 = document.createElement('div');
        _09.classList.add('component_09');
        _09.id = 'component_09';
        body_container.appendChild(_09);
        // 
        let _09_01 = document.createElement('div');
        _09_01.classList.add('third_header_container');
        _09.appendChild(_09_01);
        // 
        let _09_01_01 = document.createElement('div');
        _09_01_01.classList.add('third_header');
        _09_01_01.id = 'third_header';
        _09_01_01.innerHTML = data[3].p;
        _09_01.appendChild(_09_01_01);

            }

      function create_video() {

          let video_component = document.createElement('div');
          video_component.classList.add('wide_video');
          body_container.append(video_component);

          let video_component_01 = document.createElement('div');
          video_component_01.classList.add('video_component');
          video_component_01.id = 'video_component';
          video_component.append(video_component_01);

          let video_component_01_01 = document.createElement('video');
          video_component_01_01.controls = 'true';
          video_component_01_01.id = "video_play";
          video_component_01.append(video_component_01_01);

          let video_component_01_01_01 =  document.createElement('source');
          video_component_01_01_01.src = "/src/video/blondinis_01.mp4";
          video_component_01_01_01.type ='video/mp4';
          video_component_01_01.append(video_component_01_01_01);

        }

        function create_iframe() {

          let video_component = document.createElement('div');
          video_component.classList.add('wide_video');
          body_container.append(video_component);

          let video_component_01 = document.createElement('div');
          video_component_01.classList.add('video_component');
          video_component_01.id = 'video_component';
          video_component_01.innerHTML = videos.test_video;
          video_component.append(video_component_01);


        }

      function create_img() {

          let _08 = document.createElement('div');
          _08.classList.add('component_08');
          _08.id = 'component_08';
          body_container.append(_08);

          let _08_01 = document.createElement('div');
          _08_01.classList.add('img_container');
          _08.append(_08_01);

          let _08_01_01 = document.createElement('img');
          _08_01_01.src = photos.blondinis_cover; 
          _08_01_01.classList.add('img');
          _08_01_01.id = 'img_src';
          _08_01.append(_08_01_01);




        }

      function create_p() {
          let _05 = document.createElement('div');
          _05.classList.add('component_05');
          _05.id = 'component_05';
          body_container.append(_05);

          let _05_01 = document.createElement('div');
          _05_01.classList.add('text');
          _05_01.id = 'text';
          _05.append(_05_01);

        }

      function create_audio(){
        let _06 = document.createElement('div');
        _06.classList.add('component_06');
        _06.id = 'component_06';
        body_container.append(_06);

        let _06_01 = document.createElement('div');
        _06_01.classList.add('audio_container');
        _06.append(_06_01);

        let _06_01_01 = document.createElement('img'); 
        _06_01_01.classList.add('audio_img');
        _06_01_01.src = '/src/img/bp_03-01.png';
        _06_01.append(_06_01_01);

        let _06_01_02 = document.createElement('div');
        _06_01_02.classList.add('tune_header');
        _06_01_02.id = 'tune_header';
        _06_01.append(_06_01_02);

        let _06_01_03 = document.createElement('audio');
        _06_01_03.controls = 'controls';
        _06_01_03.classList.add('audio_act');
        _06_01_03.id = 'audio_act';

        _06_01.append(_06_01_03);

        let _06_01_03_01 = document.createElement('source');
        _06_01_03_01.src = "/src/audio/gold_in_the_valley_03.wav";
        _06_01_03_01.type = "audio/wav";
        _06_01_03.append(_06_01_03_01);


      }

      function create_socials(){

              let _10 = document.createElement('div');
              _10.classList.add('component_10');
              _10.id = 'component_10';
              body_container.append(_10); 

              let _10_01 = document.createElement('div'); 
              _10_01.classList.add('socials_container'); 
              _10.append(_10_01); 

              let _10_01_01 = document.createElement('a'); 
              _10_01_01.href = 'https://www.google.com';
              _10_01.append(_10_01_01); 

              let _10_01_01_01 = document.createElement('i'); 
              _10_01_01_01.classList.add('fa-brands');
              _10_01_01_01.classList.add('fa-soundcloud');
              _10_01_01_01.classList.add('fa-3x');
              _10_01_01.append(_10_01_01_01);
              console.log(_10);

      }

// Initialize Firebase (ADD YOUR OWN DATA)

// var config = {
//   apiKey: "AIzaSyALKBqIYExnNQRrZhIw0ni2OBnG8A7PZUM",

//   authDomain: "joedaviesio.firebaseapp.com",

//   projectId: "joedaviesio",

//   storageBucket: "joedaviesio.appspot.com",

//   messagingSenderId: "937870252904",

//   appId: "1:937870252904:web:1ecf0da29d5dfdf811d4dd",

//   measurementId: "G-HYJT6R4L66"

// };
// firebase.initializeApp(config);



// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('component_11').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var phone = getInputVal('phone');
//   var email = getInputVal('email');
//   var service = getInputVal('service');
//   var budget = getInputVal('budget');
//   var concept = getInputVal('concept');

//   // Save message
//   saveMessage(name, phone, email, service, budget, concept);

//   // // Show alert
//   // document.querySelector('.alert').style.display = 'block';

//   // // Hide alert after 3 seconds
//   // setTimeout(function(){
//   //   document.querySelector('.alert').style.display = 'none';
//   // },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, phone, email, service, budget, concept){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     phone: phone,
//     email: email,
//     service: service,
//     budget: budget,
//     concept: concept
//   });
// }

