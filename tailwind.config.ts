
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				aigree: {
					purple: {
						dark: '#1e0938',
						medium: '#3a0f63',
						light: '#5f2d9a'
					},
					pink: '#eb49ff',
					'pink-light': '#f87dff'
				},
				figma: {
					background: '#0B0121',
					foreground: '#ECECEC',
					'purple-dark': '#1e0938',
					'purple-medium': '#3a0f63',
					'purple-light': '#5f2d9a',
					pink: '#eb49ff',
					'pink-light': '#f87dff',
					'text-primary': '#ECECEC',
					'text-secondary': 'rgba(236, 236, 236, 0.65)',
					'card-bg': 'rgba(255, 255, 255, 0.05)'
				}
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-delay-1': 'fade-in 0.5s ease-out 0.1s forwards',
				'fade-in-delay-2': 'fade-in 0.5s ease-out 0.2s forwards',
				'fade-in-delay-3': 'fade-in 0.5s ease-out 0.3s forwards',
				'fade-in-left': 'fade-in-left 0.5s ease-out forwards'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(to bottom, #1e0938, #3a0f63)',
			},
			boxShadow: {
				DEFAULT: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
				sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
				xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
				'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
				inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
				none: 'none',
				'feature-card': '0 4px 20px rgba(0, 0, 0, 0.25)',
				'glow': '0 0 15px rgba(235, 73, 255, 0.5)',
				'figma-card': '0px -2px 40px 0px rgba(187, 155, 255, 0.15), 0px -2px 10px 0px rgba(233, 223, 255, 0.3), inset 0px 0.5px 0px 0px rgba(255, 255, 255, 0.5)',
				'figma-button': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
				'figma-icon-purple': '0px 0px 36px rgba(89, 29, 221, 0.75)',
				'figma-icon-pink': '0px 0px 36px rgba(149, 37, 201, 0.75)',
				'figma-icon-magenta': '0px 0px 36px rgba(201, 37, 171, 0.75)',
				
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
