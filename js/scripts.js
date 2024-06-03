// document.addEventListener('DOMContentLoaded', () => {
//     alert('Welcome to My Website!');
// });


document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const body = document.body;
    const main = document.querySelector('main');
    const headings = document.querySelectorAll('h1, h2');
    const paragraphs = document.querySelectorAll('p');
    const ul = document.querySelector('ul');
    const cards = document.querySelectorAll('.card');

    darkModeSwitch.addEventListener('change', function () {
        body.classList.toggle('dark-mode');
        main.classList.toggle('dark-mode');

        headings.forEach(h => h.classList.toggle('dark-mode'));
        paragraphs.forEach(p => p.classList.toggle('dark-mode'));
        ul.classList.toggle('dark-mode');
        cards.forEach(card => card.classList.toggle('dark-mode'));

        const countiesAndSubcounties = {
            "Baringo": ["Baringo North", "Baringo South", "Eldama Ravine", "Mogotio", "Tiaty"],
            "Bomet": ["Bomet East", "Bomet Central", "Chepalungu", "Konoin", "Sotik"],
            "Bungoma": ["Bumula", "Kabuchai", "Kanduyi", "Kimilili", "Mt. Elgon", "Sirisia", "Tongaren", "Webuye East", "Webuye West"],
            "Busia": ["Budalang'i", "Butula", "Funyula", "Matayos", "Nambale", "Teso North", "Teso South"],
            "Elgeyo-Marakwet": ["Keiyo North", "Keiyo South", "Marakwet East", "Marakwet West"],
            "Embu": ["Manyatta", "Mbeere North", "Mbeere South", "Runyenjes"],
            "Garissa": ["Balambala", "Dadaab", "Fafi", "Garissa Township", "Hulugho", "Ijara", "Lagdera"],
            "Homa Bay": ["Homa Bay Town", "Kabondo Kasipul", "Karachuonyo", "Kasipul", "Mbita", "Ndhiwa", "Rangwe", "Suba"],
            "Isiolo": ["Garbatulla", "Isiolo", "Merti"],
            "Kajiado": ["Kajiado Central", "Kajiado East", "Kajiado North", "Kajiado South", "Kajiado West"],
            "Kakamega": ["Butere", "Ikolomani", "Khwisero", "Lugari", "Lurambi", "Malava", "Mumias East", "Mumias West", "Navakholo", "Shinyalu"],
            "Kericho": ["Ainamoi", "Belgut", "Bureti", "Kipkelion East", "Kipkelion West", "Soin Sigowet"],
            "Kiambu": ["Gatundu North", "Gatundu South", "Githunguri", "Juja", "Kabete", "Kiambaa", "Kiambu Town", "Kikuyu", "Limuru", "Lari", "Ruiru", "Thika Town"],
            "Kilifi": ["Bahari", "Ganze", "Kaloleni", "Magarini", "Malindi", "Rabai"],
            "Kirinyaga": ["Gichugu", "Kirinyaga Central", "Kirinyaga East", "Kirinyaga West", "Mwea East", "Mwea West"],
            "Kisii": ["Bobasi", "Bomachoge Borabu", "Bomachoge Chache", "Bonchari", "Kenyenya", "Kitutu Chache North", "Kitutu Chache South", "Nyaribari Chache", "Nyaribari Masaba", "South Mugirango"],
            "Kisumu": ["Kisumu Central", "Kisumu East", "Kisumu West", "Muhoroni", "Nyakach", "Nyando", "Seme"],
            "Kitui": ["Kitui Central", "Kitui East", "Kitui Rural", "Kitui South", "Kitui West", "Mwingi Central", "Mwingi North", "Mwingi West"],
            "Kwale": ["Kinango", "Lunga Lunga", "Matuga", "Msambweni"],
            "Laikipia": ["Laikipia East", "Laikipia North", "Laikipia West"],
            "Lamu": ["Lamu East", "Lamu West"],
            "Machakos": ["Kathiani", "Machakos Town", "Masinga", "Matungulu", "Mavoko", "Mwala", "Yatta"],
            "Makueni": ["Kaiti", "Kibwezi East", "Kibwezi West", "Kilome", "Makueni"],
            "Mandera": ["Banissa", "Lafey", "Mandera East", "Mandera North", "Mandera South", "Mandera West"],
            "Marsabit": ["Laisamis", "Moyale", "North Horr", "Saku"],
            "Meru": ["Buuri", "Igembe Central", "Igembe North", "Igembe South", "Imenti North", "Imenti South", "Tigania East", "Tigania West"],
            "Migori": ["Awendo", "Kuria East", "Kuria West", "Nyatike", "Rongo", "Suna East", "Suna West", "Uriri"],
            "Mombasa": ["Changamwe", "Jomvu", "Kisauni", "Likoni", "Mvita", "Nyali"],
            "Murang'a": ["Gatanga", "Kahuro", "Kandara", "Kangema", "Kigumo", "Kiharu", "Mathioya", "Maragua"],
            "Nairobi": ["Dagoretti North", "Dagoretti South", "Embakasi Central", "Embakasi East", "Embakasi North", "Embakasi South", "Embakasi West", "Kamukunji", "Kasarani", "Kibra", "Lang'ata", "Makadara", "Mathare", "Roysambu", "Ruaraka", "Starehe", "Westlands"],
            "Nakuru": ["Bahati", "Gilgil", "Kuresoi North", "Kuresoi South", "Molo", "Naivasha", "Nakuru Town East", "Nakuru Town West", "Njoro", "Rongai", "Subukia"],
            "Nandi": ["Aldai", "Chesumei", "Emgwen", "Mosop", "Nandi Hills", "Tinderet"],
            "Narok": ["Emurua Dikirr", "Kilgoris", "Narok East", "Narok North", "Narok South", "Narok West"],
            "Nyamira": ["Borabu", "Kitutu Masaba", "North Mugirango", "West Mugirango"],
            "Nyandarua": ["Kinangop", "Kipipiri", "Ndaragwa", "Ol Kalou", "Ol Jorok"],
            "Nyeri": ["Kieni", "Mathira", "Mukurweini", "Nyeri Town", "Othaya", "Tetu"],
            "Samburu": ["Samburu East", "Samburu North", "Samburu West"],
            "Siaya": ["Alego Usonga", "Bondo", "Gem", "Rarieda", "Ugenya", "Ugunja"],
            "Taita-Taveta": ["Mwatate", "Taveta", "Voi", "Wundanyi"],
            "Tana River": ["Bura", "Galole", "Garsen"],
            "Tharaka-Nithi": ["Chuka Igambang'ombe", "Maara", "Tharaka"],
            "Trans Nzoia": ["Cherangany", "Endebess", "Kwanza", "Kiminini", "Saboti"],
            "Turkana": ["Turkana Central", "Turkana East", "Turkana North", "Turkana South", "Turkana West"],
            "Uasin Gishu": ["Ainabkoi", "Kapseret", "Kesses", "Moiben", "Soy", "Turbo"],
            "Vihiga": ["Emuhaya", "Hamisi", "Luanda", "Sabatia", "Vihiga"],
            "Wajir": ["Wajir East", "Wajir North", "Wajir South", "Wajir West"],
            "West Pokot": ["Kapenguria", "Kacheliba", "Pokot South", "Sigor"]
          };
      
          document.getElementById('county').addEventListener('change', function() {
            const subcountySelect = document.getElementById('subcounty');
            const selectedCounty = this.value;
            
            // Clear previous subcounty options
            subcountySelect.innerHTML = '<option value="" disabled selected>Select your subcounty</option>';
      
            // Populate new subcounty options
            if (selectedCounty && countiesAndSubcounties[selectedCounty]) {
              countiesAndSubcounties[selectedCounty].forEach(subcounty => {
                const option = document.createElement('option');
                option.value = subcounty;
                option.textContent = subcounty;
                subcountySelect.appendChild(option);
              });
            }
          });
      
document.getElementById('rpl-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxSPEsyKMoCtdKEIrlv8rFtoo-lORPvmCFnXHkhtfleBoKCl_8v_5g-t4X6WY-HMnM6/exec'; // Replace YOUR_SCRIPT_ID with your actual script ID
    const form = e.target;

    fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form),
    mode: 'cors'
    })
    .then(response => response.json())
    .then(response => {
    console.log('Success!', response);
    alert('Form submitted successfully!');
    })
    .catch(error => console.error('Error!', error.message));
});
    });
});
