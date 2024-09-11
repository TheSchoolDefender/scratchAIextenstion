window.addEventListener('load', function() {
    function addCircleSprite() {
        // Find the VM (Virtual Machine) of the Scratch editor
        const vm = window.vm;
        if (!vm) return;

        // Define a basic circle costume
        const circleCostume = {
            assetId: 'circle',
            name: 'circle',
            bitmapResolution: 2,
            dataFormat: 'png',
            rotationCenterX: 100,
            rotationCenterY: 100,
            skinId: 1
        };

        // Create a new sprite with the circle costume
        const newSprite = {
            name: "Circle Sprite",
            isStage: false,
            variables: {},
            lists: {},
            broadcasts: {},
            blocks: {},
            costumes: [circleCostume],
            currentCostume: 0,
            sounds: [],
            volume: 100,
        };

        // Add the sprite to the Scratch project
        vm.runtime.targets.push(newSprite);
        vm.emitTargetsUpdate();
    }

    // Check if the Scratch VM is available, then add the circle sprite
    if (window.vm) {
        addCircleSprite();
    } else {
        console.error("Scratch VM not found");
    }
});
