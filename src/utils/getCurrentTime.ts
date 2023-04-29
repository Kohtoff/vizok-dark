const now = new Date();

export default function getCurrentTime() {
  const hours = getCurrentHour();
  const minutes = getCurrentMinute();
  return `${hours}:${minutes}`;
}

const getCurrentHour = () => now.getHours().toString().padStart(2, '0');

const getCurrentMinute = () => now.getMinutes().toString().padStart(2, '0');

export {getCurrentHour, getCurrentMinute};
