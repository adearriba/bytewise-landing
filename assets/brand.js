// Tokens de marca de Bytewise para Tailwind (CDN). Ver tokens.json del manual.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#0B0F14',
        paper: '#F6F1E7',
        sand: '#E9E1D1',
        cursor: '#FF5A1F',
        muted: '#5A5348',       // texto secundario sobre Paper y Sand (6,7 : 1)
        'muted-dark': '#B3ABA0', // texto secundario sobre Ink
        line: 'rgba(11,15,20,0.12)'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif']
      }
    },
    // radius-cell / radius-md / radius-lg
    borderRadius: { none: '0', sm: '3px', DEFAULT: '3px', md: '8px', lg: '16px', full: '9999px' }
  }
};
