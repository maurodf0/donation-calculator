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
		get doggoSaved() {
			const context = getContext();
			return Math.floor( context.contribution / context.doggoPrice );
		  }
	},
	actions: {
		calculate: ( e ) => {
			const context = getContext();
			console.log('api');
			context.contribution = Number( e.target.value );
		}
	}
} );