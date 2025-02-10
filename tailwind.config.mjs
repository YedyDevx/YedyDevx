/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                // Animaciones principales
                'shadow-pulse': 'shadowPulse 6s infinite ease-in-out',
                'rippling': 'rippling var(--duration) ease-out',
                'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
                'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
                'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
                'grid': 'grid 15s linear infinite',
                
                // Animaciones de partículas
                'particle-1': 'particle-1 2s ease-in-out infinite',
                'particle-2': 'particle-2 2s ease-in-out infinite 0.2s',
                'particle-3': 'particle-3 2s ease-in-out infinite 0.4s',
                
                // Nuevas animaciones
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'slide-in': 'slideIn 0.5s ease-out forwards',
                'bounce-soft': 'bounceSoft 2s infinite',
            },
            fontFamily: {
                ubuntu: ['Ubuntu', 'sans-serif'],
                'ubuntu-condensed': ['Roboto Condensed', 'sans-serif']
            },
            keyframes: {
                shadowPulse: {
                    '0%, 100%': {
                        boxShadow: '0 0px 550px 400px rgba(99, 44, 160, 0.7)'
                    },
                    '50%': {
                        boxShadow: '0 0px 550px 400px rgba(99, 44, 160, 0.2)'
                    }
                },
                rippling: {
                    '0%': { opacity: '1' },
                    '100%': {
                        transform: 'scale(2)',
                        opacity: '0'
                    }
                },
                'shimmer-slide': {
                    to: {
                        transform: 'translate(calc(100cqw - 100%), 0)'
                    }
                },
                'spin-around': {
                    '0%': { transform: 'translateZ(0) rotate(0)' },
                    '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
                    '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
                    '100%': { transform: 'translateZ(0) rotate(360deg)' }
                },
                'border-beam': {
                    '100%': { 'offset-distance': '100%' }
                },
                grid: {
                    '0%': { transform: 'translateY(-50%)' },
                    '100%': { transform: 'translateY(0)' }
                },
                'particle-1': {
                    '0%, 100%': { 
                        transform: 'translate(0, 0) scale(1)',
                        opacity: 0 
                    },
                    '50%': { 
                        transform: 'translate(-20px, -20px) scale(2)',
                        opacity: 0.5 
                    }
                },
                'particle-2': {
                    '0%, 100%': { 
                        transform: 'translate(0, 0) scale(1)',
                        opacity: 0 
                    },
                    '50%': { 
                        transform: 'translate(20px, -20px) scale(2)',
                        opacity: 0.5 
                    }
                },
                'particle-3': {
                    '0%, 100%': { 
                        transform: 'translate(0, 0) scale(1)',
                        opacity: 0 
                    },
                    '50%': { 
                        transform: 'translate(20px, 20px) scale(2)',
                        opacity: 0.5 
                    }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                glow: {
                    '0%, 100%': { 
                        filter: 'brightness(1)',
                        opacity: 1 
                    },
                    '50%': { 
                        filter: 'brightness(1.2)',
                        opacity: 0.8 
                    }
                },
                slideIn: {
                    '0%': { 
                        transform: 'translateY(20px)',
                        opacity: 0 
                    },
                    '100%': { 
                        transform: 'translateY(0)',
                        opacity: 1 
                    }
                },
                bounceSoft: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' }
                }
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
};