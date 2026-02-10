/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.html',
        './content/**/*.{html,md}',
        './static/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                // 2bo Brand Colors
                'primary': {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#1e40af',
                    700: '#1e3a8a',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float-delayed 8s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'typing': 'typing 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'float-delayed': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                'fade-in-up': {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                typing: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: '#374151',
                        a: {
                            color: '#1e40af',
                            '&:hover': {
                                color: '#3b82f6',
                            },
                        },
                        h1: {
                            color: '#111827',
                        },
                        h2: {
                            color: '#111827',
                        },
                        h3: {
                            color: '#111827',
                        },
                        h4: {
                            color: '#111827',
                        },
                        code: {
                            color: '#111827',
                            backgroundColor: '#f3f4f6',
                            padding: '0.25rem 0.375rem',
                            borderRadius: '0.25rem',
                            fontWeight: '600',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
            },
        },
    },
    plugins: [],
}