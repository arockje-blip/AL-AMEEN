// Featured samples displayed on the samples section
const FEATURED_ITEMS = [
  { src: 'images/highspeedrapiddoor.jpg', title: 'High Speed Rapid Door', text: 'Fast cycle industrial door.' },
  { src: 'images/automaticboombarriers.jpg', title: 'Automatic Boom Barrier', text: 'Access control at entry points.' },
  { src: 'images/rollingshuttersidemotar.jpg', title: 'Rolling Shutter Side Motor', text: 'Side-mounted automation setup.' },
  { src: 'images/grillshutter.jpg', title: 'Grill Shutter', text: 'Security with ventilation.' },
];

// Complete gallery for when user clicks "Open Main Gallery"
const GALLERY_ITEMS = [
  { src: 'images/automaticboombarriers.jpg', title: 'Automatic Boom Barrier', text: 'Access control at entry points.' },
  { src: 'images/automaticcentermotar.jpg', title: 'Automatic Center Motor', text: 'Smooth and reliable automation.' },
  { src: 'images/autoflapbarrier.jpg', title: 'Auto Flap Barrier', text: 'Controlled pedestrian access.' },
  { src: 'images/autogaragedoor.jpg', title: 'Automatic Garage Door', text: 'Convenient residential automation.' },
  { src: 'images/aluminiumshutter.jpg', title: 'Aluminium Shutter', text: 'Lightweight and premium finish.' },
  { src: 'images/bottomtrack.jpg', title: 'Bottom Track', text: 'Precision hardware support.' },
  { src: 'images/cantileverslidingtrack.jpg', title: 'Cantilever Sliding Gate Track', text: 'Heavy-duty gate motion system.' },
  { src: 'images/camerashutter.jpg', title: 'Camera Shutter', text: 'Protection for camera units.' },
  { src: 'images/dcshuttermotar.jpg', title: 'DC Shutter Motor', text: 'Efficient motorized shutter control.' },
  { src: 'images/directdriverollingshutter.jpg', title: 'Direct Drive Rolling Shutter', text: 'Powerful direct-drive action.' },
  { src: 'images/doorlock.jpg', title: 'Door Lock', text: 'Secure locking hardware.' },
  { src: 'images/flashlight.jpg', title: 'Flash Light', text: 'Visibility and safety support.' },
  { src: 'images/gearshuttermotar.jpg', title: 'Gear Shutter Motor', text: 'Robust gear-driven operation.' },
  { src: 'images/grillshutter.jpg', title: 'Grill Shutter', text: 'Security with ventilation.' },
  { src: 'images/grill%20Shutter.jpg', title: 'Grill Shutter Variant', text: 'Alternate grill shutter capture.' },
  { src: 'images/gsmgateopener.jpg', title: 'GSM Gate Opener', text: 'Remote gate access control.' },
  { src: 'images/highspeedrapiddoor.jpg', title: 'High Speed Rapid Door', text: 'Fast cycle industrial door.' },
  { src: 'images/italianrollingmotar.jpg', title: 'Italian Rolling Motor', text: 'Imported motorized solution.' },
  { src: 'images/italianslidingmotar.jpg', title: 'Italian Sliding Motor', text: 'Precision sliding gate automation.' },
  { src: 'images/keyautomation.jpg', title: 'Key Automation', text: 'Simple and secure control.' },
  { src: 'images/msrollingshutter.jpg', title: 'MS Rolling Shutter', text: 'Classic heavy-duty shutter body.' },
  { src: 'images/numberlockslidinggate.jpg', title: 'Number Lock Sliding Gate', text: 'Password-based gate access.' },
  { src: 'images/rooftop.jpg', title: 'Rooftop Installation', text: 'On-site installation view.' },
  { src: 'images/rollingshuttergearmotar.jpg', title: 'Rolling Shutter Gear Motor', text: 'Smooth gear motor assembly.' },
  { src: 'images/rollingshuttersidemotar.jpg', title: 'Rolling Shutter Side Motor', text: 'Side-mounted automation setup.' },
  { src: 'images/rollingsidemotar.jpg', title: 'Rolling Side Motor', text: 'Compact side-drive layout.' },
  { src: 'images/safetyphotcells.jpg', title: 'Safety Photo Cells', text: 'Obstacle detection protection.' },
  { src: 'images/sensorglassdooropener.jpg', title: 'Sensor Glass Door Opener', text: 'Automatic glass door opener.' },
  { src: 'images/slidinggatewheel.jpg', title: 'Sliding Gate Wheel', text: 'Stable and durable gate movement.' },
  { src: 'images/swing-gatemotar.jpg', title: 'Swing Gate Motor', text: 'Automation for swing gates.' },
  { src: 'images/swingdooropener.jpg', title: 'Swing Door Opener', text: 'Automated swinging door system.' },
  { src: 'images/swinggatelocks.jpg', title: 'Swing Gate Locks', text: 'Extra locking hardware.' },
  { src: 'images/swinggatemotar.jpg', title: 'Swing Gate Motor', text: 'Heavy-duty swing gate automation.' },
  { src: 'images/transparentshutter.jpg', title: 'Transparent Shutter', text: 'Visibility with security.' },
  { src: 'images/wirelessphotocell.jpg', title: 'Wireless Photo Cell', text: 'Smart wireless safety sensors.' },
];

const grid = document.getElementById('galleryGrid');

// Initially display featured items
grid.innerHTML = FEATURED_ITEMS.map((item) => `
  <article class="card">
    <img src="${item.src}" alt="${item.title}" loading="lazy" />
    <div class="meta">
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </div>
  </article>
`).join('');

// Handle "Open Main Gallery" button click
const mainButton = document.querySelector('.actions .btn-primary');
if (mainButton) {
  mainButton.addEventListener('click', (e) => {
    e.preventDefault();
    grid.innerHTML = GALLERY_ITEMS.map((item) => `
      <article class="card">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="meta">
          <h2>${item.title}</h2>
          <p>${item.text}</p>
        </div>
      </article>
    `).join('');
    mainButton.textContent = 'Showing Full Gallery (' + GALLERY_ITEMS.length + ' items)';
    mainButton.style.pointerEvents = 'none';
    mainButton.style.opacity = '0.6';
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  });
}
