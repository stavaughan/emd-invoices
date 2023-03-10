import React from 'react'

const Emphasize = {
	Italic: ({ children }) => (
		<span className="fst-italic">{children}</span>
	),
	Bold: ({ children }) => (
		<span className="font-bold">{children}</span>
	),
	Underline: ({ children }) => (
		<span className="text-decoration-underline">{children}</span>
	),
	Strike: ({ children }) => (
		<span className="text-decoration-line-through">{children}</span>
	),
	Monospace: ({ children }) => (
		<span className="font-monospace">{children}</span>
	),
	Highlight: ({ children }) => (
		<span className="mark text-slate-700">{children}</span>
	),
	Highlighter: ({ children }) => (
		<span className="highlighted2 text-slate-700 mx-1">{children}</span>
	),
	Abbrev: ({ title, label, className }) => (
		<abbr
			title={title || label}
			{...className && { className }}
		>{label}</abbr>
	),
}

export default Emphasize
