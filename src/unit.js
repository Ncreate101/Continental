class Unit {
    constructor(pos, id) {
        this.position = pos;
        this.id = id;
        this.path = [];
        this.distanceField = {};
        this.maxRecursion = 53;
    }
    
    setGoal(goalPos) {
        this.computeDistanceField(goalPos, 1);

        let validNextPositions = [];

        let tracerPos = goalPos;
        let tracerEnergy = this.distanceField[`${tracerPos[0]} ${tracerPos[1]}`];
        while (tracerEnergy > 0) {
            // Add Valid Next Positions To validNextPositions

            validNextPositions.push([tracerPos[0]+1, tracerPos[1]+1]);
            validNextPositions.push([tracerPos[0]+1, tracerPos[1]]);
            validNextPositions.push([tracerPos[0]+1, tracerPos[1]-1]);
            validNextPositions.push([tracerPos[0], tracerPos[1]]-1);
            validNextPositions.push([tracerPos[0]-1, tracerPos[1]]-1);
            validNextPositions.push([tracerPos[0]-1, tracerPos[1]]);
            validNextPositions.push([tracerPos[0]-1, tracerPos[1]+1]);
            validNextPositions.push([tracerPos[0], tracerPos[1]+1]);

            // Remove Higher-Energy Directions
            for (let i = 0; i < validNextPositions.length; i++) {
                if(this.distanceField[`${validNextPositions[0]} ${validNextPositions[1]}`] >= tracerEnergy) {
                    delete validNextPositions[i];
                }
            }

        }
        
    }

    computeDistanceField(fromPos, recusionNum) {
        if (recusionNum > this.maxRecursion) {
            return;
        }

        // E

        if(!Object.keys(worldMap).includes(`${fromPos[0] + 1} ${fromPos[1]}`)) {
             if (!Object.keys(this.distanceField).includes(`${fromPos[0] + 1} ${fromPos[1]}`)) {
                this.computeDistanceField([fromPos[0] + 1, fromPos[1]]);
                this.distanceField[`${fromPos[0] + 1} ${fromPos[1]}`] = recusionNum;
             }
        }

        // SE

        if(!Object.keys(worldMap).includes(`${fromPos[0] + 1} ${fromPos[1] - 1}`)) {
            if (!Object.keys(this.distanceField).includes(`${fromPos[0] + 1} ${fromPos[1] - 1}`)) {
               this.computeDistanceField([fromPos[0] + 1, fromPos[1] - 1]);
               this.distanceField[`${fromPos[0] + 1} ${fromPos[1] - 1}`] = recusionNum;
            }
       }

       // S

       if(!Object.keys(worldMap).includes(`${fromPos[0]} ${fromPos[1] - 1}`)) {
             if (!Object.keys(this.distanceField).includes(`${fromPos[0]} ${fromPos[1] - 1}`)) {
                this.computeDistanceField([fromPos[0], fromPos[1] - 1]);
                this.distanceField[`${fromPos[0]} ${fromPos[1] - 1}`] = recusionNum;
             }
        }

        // SW

        if(!Object.keys(worldMap).includes(`${fromPos[0] - 1} ${fromPos[1] - 1}`)) {
            if (!Object.keys(this.distanceField).includes(`${fromPos[0] - 1} ${fromPos[1] - 1}`)) {
               this.computeDistanceField([fromPos[0] - 1, fromPos[1] - 1]);
               this.distanceField[`${fromPos[0] - 1} ${fromPos[1] - 1}`] = recusionNum;
            }
       }

       // W

        if(!Object.keys(worldMap).includes(`${fromPos[0] - 1} ${fromPos[1]}`)) {
            if (!Object.keys(this.distanceField).includes(`${fromPos[0] - 1} ${fromPos[1]}`)) {
                this.computeDistanceField([fromPos[0] - 1, fromPos[1]]);
                this.distanceField[`${fromPos[0] - 1} ${fromPos[1]}`] = recusionNum;
            }
        }

        // NW

        if(!Object.keys(worldMap).includes(`${fromPos[0] - 1} ${fromPos[1] + 1}`)) {
            if (!Object.keys(this.distanceField).includes(`${fromPos[0] - 1} ${fromPos[1] + 1}`)) {
                this.computeDistanceField([fromPos[0] - 1, fromPos[1] + 1]);
                this.distanceField[`${fromPos[0] - 1} ${fromPos[1] + 1}`] = recusionNum;
            }
        }

        // N

        if(!Object.keys(worldMap).includes(`${fromPos[0]} ${fromPos[1] + 1}`)) {
            if (!Object.keys(this.distanceField).includes(`${fromPos[0]} ${fromPos[1] + 1}`)) {
                this.computeDistanceField([fromPos[0], fromPos[1] + 1]);
                this.distanceField[`${fromPos[0]} ${fromPos[1] + 1}`] = recusionNum;
            }
        }

        // NE

        if(!Object.keys(worldMap).includes(`${fromPos[0] + 1} ${fromPos[1] + 1}`)) {
            if (!Object.keys(this.distanceField).includes(`${fromPos[0] + 1} ${fromPos[1] + 1}`)) {
                this.computeDistanceField([fromPos[0] + 1, fromPos[1] + 1]);
                this.distanceField[`${fromPos[0] + 1} ${fromPos[1] + 1}`] = recusionNum;
            }
        }
    }
}