import PreloadState from 'states/PreloadState';
import EntryState from 'states/EntryState';
import WhoState from 'states/WhoState';
import SeeState from 'states/SeeState';
import CircuitState from 'states/CircuitState';
import MenuState from 'states/MenuState';
import DebugState from 'states/DebugState';

class App extends Phaser.Game {

	constructor() {
		super(1600, 800, Phaser.AUTO, '');

		this.state.add('PreloadState', PreloadState, false);
		this.state.add('EntryState', EntryState, false);
		this.state.add('CircuitState', CircuitState, false);
		this.state.add('MenuState', MenuState, false);
		this.state.add('WhoState', WhoState, false);
		this.state.add('SeeState', SeeState, false);
		this.state.add('DebugState', DebugState, false);

		this.state.start('PreloadState');
	}
}

new App();
