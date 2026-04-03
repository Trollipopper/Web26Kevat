const target = document.getElementById('target');

const nav = navigator;
const ua = nav.userAgent;

let browser = 'Unknown';
if (ua.includes('Chrome')) browser = 'Google Chrome';
else if (ua.includes('Firefox')) browser = 'Mozilla Firefox';
else if (ua.includes('Safari')) browser = 'Safari';
else if (ua.includes('Edg')) browser = 'Microsoft Edge';

const versionMatch = ua.match(/(Chrome|Firefox|Safari|Edg)\/(\d+)/);
const version = versionMatch ? versionMatch[2] : '';

let os = 'Unknown';
if (ua.includes('Windows')) os = 'Windows';
else if (ua.includes('Mac')) os = 'macOS';
else if (ua.includes('Linux')) os = 'Linux';
else if (ua.includes('Android')) os = 'Android';
else if (ua.includes('iOS') || ua.includes('iPhone')) os = 'iOS';

const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

const now = new Date();
const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browser} ${version}</p>
  <p>Operating system: ${os}</p>
  <p>Screen size: ${screenWidth} x ${screenHeight}</p>
  <p>Available screen: ${availWidth} x ${availHeight}</p>
  <p>Date: ${date}</p>
  <p>Time: ${time}</p>
`;
