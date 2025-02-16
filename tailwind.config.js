import franken from 'franken-ui/shadcn-ui/preset-quick';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [franken()],
    content: [
        "./src/**/*.{html,js,cjs,mjs,ts,scss}",
        "./pkg/**/*.templ",
      // "./pkg/**/*.go",
    ],
	safelist: [
		{
			pattern: /^uk-/
		},
		'ProseMirror',
		'ProseMirror-focused',
		'tiptap',
		'mr-2',
		'mt-2',
		'opacity-50'
	],
	theme: {
		extend: {}
	},
	plugins: []
};
