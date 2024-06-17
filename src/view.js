import { store, getContext } from '@wordpress/interactivity';

store( 'donation-calculator', {
	state: {
		get donation() {
			const context = getContext();
			return `$${context.contribution}`;
		},
		get trees() {
			const context = getContext();
			return Math.floor( context.contribution / context.price );
		},
		get show() {
			const context = getContext();
    		return context.contribution > 0;
		},
		get dogSaved() {
			const context = getContext();
			return `$${context.dogSaved}`;
		}
	},
	actions: {
		calculate: ( e ) => {
			const context = getContext();
			context.contribution = Number( e.target.value );
		}
	}
} );