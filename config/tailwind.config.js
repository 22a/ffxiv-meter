module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['"Roboto Mono"', 'monospace'],
    },
    extend: {
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
      },
      colors: {
        // FF Logs job colours
        'job-LimitBreak': '#2599be',
        'job-Scholar': '#8657ff',
        'job-Astrologian': '#ffe74a',
        'job-Monk': '#d69c00',
        'job-Pugilist': '#d69c00',
        'job-Ninja': '#af1964',
        'job-Rogue': '#af1964',
        'job-Conjurer': '#fff0dc',
        'job-WhiteMage': '#fff0dc',
        'job-DarkKnight': '#d126cc',
        'job-Gladiator': '#a8d2e6',
        'job-Paladin': '#a8d2e6',
        'job-Archer': '#91ba5e',
        'job-Bard': '#91ba5e',
        'job-Dragoon': '#4164cd',
        'job-Lancer': '#4164cd',
        'job-Marauder': '#cf2621',
        'job-Warrior': '#cf2621',
        'job-Machinist': '#6ee1d6',
        'job-Arcanist': '#2d9b78',
        'job-Summoner': '#2d9b78',
        'job-BlackMage': '#a579d6',
        'job-Thamauturge': '#a579d6',
        'job-RedMage': '#e87b7b',
        'job-Samurai': '#e46d04',
        'job-Dancer': '#e2b0af',
        'job-Gunbreaker': '#998d50',
        'job-BlueMage': '#2459ff',
      },
      minWidth: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
