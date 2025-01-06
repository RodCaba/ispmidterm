// Class to encapsulate all the Low Pass Filter effects User Interface elements and position them on the canvas

class LowPassFilterControls {
	constructor() {
		this.initialX = 10;
		this.initialY = 80;
		this.lpfCutOff = new Knob(
			this.initialX + 50,
			this.initialY + 40,
			'Cut Off Frequency',
			10,
			22050,
			22050
		);
		this.lpfRes = new Knob(
			this.initialX + 170,
			this.initialY + 40,
			'Resonance',
			0.001,
			1000,
			0.001
		);
		this.lpfDryWet = createSlider(0, 1, 0.5, 0.01);
		this.lpfOutputLevel = createSlider(0, 1, 1, 0.01);
		this.filterSelector = createSelect();
	}

	update() {
		this.setLowPassFilter();
	}

	start() {
		this.startSliders();
	}

	startSliders() {
		this.lpfDryWet.position(this.initialX - 10, this.initialY + 150);
		this.lpfDryWet.style('transform', 'rotate(270deg)');
		this.lpfDryWet.style('height', '100px');

		this.lpfOutputLevel.position(this.initialX + 130, this.initialY + 150);
		this.lpfOutputLevel.style('transform', 'rotate(270deg)');
		this.lpfOutputLevel.style('height', '100px');

		this.filterSelector.position(this.initialX, this.initialY - 10);
		this.filterSelector.option('Low Pass Filter', 'low');
		this.filterSelector.option('High Pass Filter', 'high');
		this.filterSelector.option('Band Pass Filter', 'band');

		this.filterSelector.changed(() => {
			lowPassFilter.disconnect();
			let selectedFilter = this.filterSelector.value();
			if (selectedFilter === 'low') {
				lowPassFilter = new p5.LowPass();
			} else if (selectedFilter === 'high') {
				lowPassFilter = new p5.HighPass();
			} else if (selectedFilter === 'band') {
				lowPassFilter = new p5.BandPass();
			}

			player.connectFilters();
		});
	}

	setLowPassFilter() {
		noFill();
		rect(this.initialX, this.initialY, 220, 300);
		push();
		this.lpfCutOff.draw();
		this.lpfRes.draw();
		fill(0);

		text('Dry/Wet', this.initialX + 30, this.initialY + 280);
		text(this.lpfDryWet.value(), this.initialX, this.initialY + 200);

		text('Output Level', this.initialX + 150, this.initialY + 280);
		text(this.lpfOutputLevel.value(), this.initialX + 130, this.initialY + 200);
		pop();

		this.handleLowPassChange();
	}

	// Function that sets the mousePressed event for the elements, to be called by p5.js
	mousePressed() {
		this.lpfCutOff.mousePressed();
		this.lpfRes.mousePressed();
	}

	mouseReleased() {
		this.lpfCutOff.mouseReleased();
		this.lpfRes.mouseReleased();
	}

	handleLowPassChange() {
		let cutOffValue = this.lpfCutOff.getValue();
		setLowPassFrequency(cutOffValue);

		let resonanceValue = this.lpfRes.getValue();
		setLowPassResonance(resonanceValue);

		let dryWetValue = this.lpfDryWet.value();
		setLowPassDryWet(dryWetValue);

		let outputLevelValue = this.lpfOutputLevel.value();
		setLowPassOutputLevel(outputLevelValue);
	}
}
