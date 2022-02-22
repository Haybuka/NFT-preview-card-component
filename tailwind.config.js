module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    width: {
      smallest:'30px',
      sms:'200px',
      mds : '300px',
      lgs: '380px',
      xls: '500px'
    },
    height: {
      smallest:'30px',
      sms:'200px',
      fullv:'100%',
       mds : '300px',
       lgs: '380px',
       xls: '500px'
    },
    extend: {
      backgroundImage : theme => ({
        'imgEquili' : "url('../public/images/image-equilibrium.jpg')",
        'iconView': "url('../public/images/icon-vew.svg')"
      }),
      colors : {
        secondary : {
          100 : 'hsl(0, 0%, 100%)',
          200 : 'hsl(215, 51%, 70%)',
          300 : 'hsl(178, 100%, 50%)',
          400 : 'hsl(217, 54%, 11%)',
          500 : ' hsl(216, 50%, 16%)',
          600 : 'hhsl(215, 32%, 27%)',
        }
      },
      fontFamily : {
        primary :["'Outfit', sans-serif"]
      }
    },
  },
  variants: {},
  plugins: [],
}
