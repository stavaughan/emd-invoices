import clsx from "clsx"

const themeClasses = {
	forms: {
		inputGroups: {
			row: 'g-2 mb-4',
			label: {
				group: (xSmall) => clsx(
					!xSmall && 'text-base',
					'font-medium text-secondary pb-2'
				),
				field: 'block text-sm font-normal text-secondary pb-2',
				fieldSmall: 'block text-xs font-normal text-secondary pb-2',
				fieldInline: 'block text-sm font-normal text-secondary ms-2'
			}
		}
	},

	card: {
		header: {
			withActions: {
				wrapper: 'px-3 py-3.5 border-b border-gray-200 flex-wrap sm:flex-nowrap',
				container: 'ms-n3 d-flex justify-content-between align-items-center flex-wrap sm:flex-nowrap',
				actions: 'ms-3 flex-shrink-0',
			},
			title: 'text-base font-medium text-dark mb-0',
			sectionTitle: 'font-medium text-dark',
			description: 'mt-1 text-sm text-secondary',
			count: 'ms-4 text-slate-400 text-xs text-nowrap',
			actions: 'text-xs font-medium text-secondary',
		},
	},

	headers: {
		card: 'text-base font-medium text-dark text-capitalize',
		cardPrimary: 'text-base font-medium text-primary text-capitalize',
		section: 'text-base font-medium text-dark',
		sectionPrimary: 'text-base font-medium text-primary',
		sectionDescription: 'mt-2 max-w-4xl text-sm text-secondary',
	},

	sections: {
		titleDescription: {
			container: 'pb-5 border-b border-gray-200',
			title: 'text-lg leading-6 font-medium text-dark',
			description: 'mt-2 max-w-4xl text-sm text-secondary',
		},
	},

    button: {
        icon: {
            light: 'btn-sm rounded-3 btn-text-primary',
            dark: 'btn-sm rounded-3 btn-light-primary-reverse'
        }
    }
}

export default themeClasses
