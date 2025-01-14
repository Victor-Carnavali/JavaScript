class npc {
    static alert = false;
    constructor(energy){
        this.energy = energy;
    }
    info = function(){
        console.log(`Energy: ${this.energy}`);
        console.log(`Alert: ${(npc.alert ? "Yes": "No")}`);
        console.log("------------------------");
    };
    static warning = function(){
        npc.alert = true;
    };
};

const npc1 = new npc(100);
const npc2 = new npc(80);
const npc3 = new npc(30);

//npc.warning();

npc1.info();
npc2.info();
npc3.info();


// Static belong only to the class and not to instances of the class;