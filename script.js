// ------------ ScrollReveal Setup ------------
ScrollReveal({ reset: false });
ScrollReveal().reveal('.reveal', {
  distance: '30px',
  origin: 'bottom',
  duration: 700,
  delay: 120,
  interval: 100,
  easing: 'cubic-bezier(.2,.9,.2,1)'
});

// ------------ Dark Mode (with persistence) ------------
const body = document.getElementById('body');
const darkToggle = document.getElementById('darkToggle');
const darkIcon = document.getElementById('darkIcon');

function applyDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    body.classList.add('dark');
    body.style.background = ''; // allow CSS .dark backgrounds
    darkIcon.className = 'ri-sun-line';
  } else {
    document.documentElement.classList.remove('dark');
    body.classList.remove('dark');
    darkIcon.className = 'ri-moon-line';
  }
}

const stored = localStorage.getItem('kushwaha_dark');
applyDarkMode(stored === '1');

darkToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  body.classList.toggle('dark');
  localStorage.setItem('kushwaha_dark', isDark ? '1' : '0');
  applyDarkMode(isDark);
});

// ------------ Profile Card Helper (with link) ------------
function profileCard(name, about, img, link) {
  const finalImg = img && img !== '' ? img : 'images/default-profile.jpg';
  const href = link ? link : '#'; // default to "#" if no link provided

  // Using Tailwind classes plus custom ones
  return `
  <a href="${href}" class="profile-card profile-bg rounded-2xl p-5 text-center shadow-md transition hover:scale-105 hover:shadow-lg">
    <img src="${finalImg}" alt="${name}" class="w-32 h-32 mx-auto rounded-full mb-3 border-4 border-amber-300 object-cover">
    <h3 class="text-lg font-semibold text-amber-800 mb-1">${name}</h3>
    <p class="text-sm italic text-gray-600 dark:text-gray-300">${about}</p>
  </a>`;
}


// ------------ Populate Profiles (Hindi text with links) ------------

// Website creator (Goldi)
document.getElementById("my-profile").innerHTML =
  profileCard("गोल्डी कुमारी", "वेबसाइट डिजाइनर और परिवार की यादों को संजोने वाली।", "images/me.png", "profiles/goldi-profile.html");

// दादा-दादी
document.getElementById("grandparents").innerHTML =
  profileCard("श्री शभु प्रसाद", "दादा जी — परिवार का अनमोल मार्गदर्शक।", "images/dadaji.png", "profiles/dadaji-profile.html") +
  profileCard("श्रीमती लालती देवी", "दादी — ममता और संस्कार की पहचान।", "images/dadi.png", "profiles/dadi-profile.html"); 

// पापा-मम्मी
document.getElementById("parents").innerHTML =
  profileCard("श्री मनोज कुमार कुशवाहा", "मेहनती, परिवार के स्तंभ।", "images/papa.png", "profiles/papa-profile.html") +
  profileCard("श्रीमती सुनीता देवी", "माँ — स्नेह और धैर्य की मूरत।", "images/mummy.png", "profiles/mummy-profile.html");

// बहनें और भाई
document.getElementById("siblings").innerHTML =
  profileCard("जिंटा प्रिया", "प्यारी दीदी, हमेशा साथ निभाने वाली।", "images/zinta.png", "profiles/zinta-profile.html") +
  profileCard("तनु प्रिया", "हंसमुख और मददगार।", "images/Tanu.png", "profiles/tanu-profile.html") +
  profileCard("अंतिमा", "नम्र और प्यारी।", "images/antima.png", "profiles/antima-profile.html") +
  profileCard("मानवी", "छोटी और चुलबुली।", "images/Manvi.png", "profiles/manvi-profile.html") +
  profileCard("भवेश", "समझदार और प्यारा भाई।", "images/bhai.png", "profiles/bhavesh-profile.html");

// चाचा-चाची — पहला परिवार
document.getElementById("uncle1").innerHTML =
  profileCard("श्री आशुतोष प्रसाद कुशवाहा", "समझदार व परोपकारी चाचा।", "images/Ashutosh Prasad kushwaha.png", "profiles/ashutosh-profile.html") +
  profileCard("श्रीमती प्रियंका देवी", "देखभाल करने वाली चाची।", "images/Priyanka devi.png", "profiles/priyanka-profile.html") +
  profileCard("रियांश राणा", "ऊर्जावान और होशियार।", "images/Riyansh rana.png", "profiles/riyansh-profile.html") +
  profileCard("अयांश राणा", "खुशमिजाज और मिलनसार।", "images/Ayansh rana.png", "profiles/ayansh-profile.html");

// चाचा-चाची — दूसरा परिवार
document.getElementById("uncle2").innerHTML =
  profileCard("श्री राजन कुशवाहा", "समर्पित और स्नेही।", "images/Rajan kushwaha.png", "profiles/rajan-profile.html") +
  profileCard("श्रीमती निक्की देवी", "नम्र और प्यारभरी चाची।", "images/choti anty.png", "profiles/nikki-profile.html") +
  profileCard("छोटी बबनी", "प्यारी नन्ही बेटी।", "images/choti babni.png", "profiles/choti-babni-profile.html");

// मौसा-मौसी और भाई
document.getElementById("mausa").innerHTML =
  profileCard("श्री श्रीवात्सव कुशवाहा", "सबको जोड़े रखने वाले।", "images/Srivatsav kushwaha.png", "profiles/srivatsav-profile.html") +
  profileCard("श्रीमती पुष्पलता देवी", "मधुर और ममता भरी।", "images/Pushplata devi.png", "profiles/pushplata-profile.html") +
  profileCard("दीपक कुशवाहा", "प्रेरणादायी बड़े भैया।", "images/Deepak kushwaha.png", "profiles/deepak-profile.html") +
  profileCard("आरती कुमारी", "घर की रौनक — भाभी जी।", "images/Aarti.png", "profiles/aarti-profile.html") +
  profileCard("प्रकाश कुमार कुशवाहा", "शिक्षक और मुस्कान देने वाले।", "images/Prakash Kumar Kushwaha.png", "profiles/prakash-profile.html") +
  profileCard("अविनाश कुमार", "छोटा पर प्यारा।", "images/Abhinash Kumar Kushwaha.png", "profiles/avinash-profile.html");

// फूफा-फूआ — पहला परिवार
document.getElementById("fufa1").innerHTML =
  profileCard("श्री ओम प्रकाश सिंह", "सहयोगी और आदरणीय फूफा।", "images/Om. Prakash singh.png", "profiles/om-prakash-profile.html") +
  profileCard("श्रीमती गीता देवी", "प्यारी और स्नेहशील फूआ।", "images/Gita Devi.png", "profiles/geeta-profile.html") +
  profileCard("अमन सिंह", "होशियार बेटा।", "images/Aman Singh.png", "profiles/aman-profile.html") +
  profileCard("अर्पीता सिंह", "प्यारी बेटी।", "images/Arpeeta singh.png", "profiles/arpeeta-profile.html");

// फूफा-फूआ — दूसरा परिवार
document.getElementById("fufa2").innerHTML =
  profileCard("श्री अशोक सिंह", "मधुर और गुणी फूफा।", "images/Ashok Singh.png", "profiles/ashok-profile.html") +
  profileCard("श्रीमती रीना देवी", "संस्कारवान फूआ।", "images/Rina devi.png", "profiles/reena-profile.html") +
  profileCard("अनिकेत सिंह", "सबकी चहेती बेटा।", "images/Aniket singh.png", "profiles/aniket-profile.html") +
  profileCard("अनीशा सिंह", "चुलबुली और प्यारी बेटी।", "images/Anisha singh.png", "profiles/anisha-profile.html");
