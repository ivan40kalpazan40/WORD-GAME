const qwerty = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const keyboard = new Map();
qwerty.map((x) => keyboard.set(x, 'free'));
export { keyboard as kbd };
