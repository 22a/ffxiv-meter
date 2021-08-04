module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      colors: {
        // FF Logs job colours
        LimitBreak: '#2599be',
        Scholar: '#8657ff',
        Astrologian: '#ffe74a',
        Monk: '#d69c00',
        Pugilist: '#d69c00',
        Ninja: '#af1964',
        Rogue: '#af1964',
        Conjurer: '#fff0dc',
        WhiteMage: '#fff0dc',
        DarkKnight: '#d126cc',
        Gladiator: '#a8d2e6',
        Paladin: '#a8d2e6',
        Archer: '#91ba5e',
        Bard: '#91ba5e',
        Dragoon: '#4164cd',
        Lancer: '#4164cd',
        Marauder: '#cf2621',
        Warrior: '#cf2621',
        Machinist: '#6ee1d6',
        Arcanist: '#2d9b78',
        Summoner: '#2d9b78',
        BlackMage: '#a579d6',
        Thamauturge: '#a579d6',
        RedMage: '#e87b7b',
        Samurai: '#e46d04',
        Dancer: '#e2b0af',
        Gunbreaker: '#998d50',
        BlueMage: '#2459ff',
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