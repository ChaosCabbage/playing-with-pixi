import * as PIXI from "pixi.js";

const room = [
    [ 1,1,1,1,1,1,1,1 ],
    [ 1,0,0,0,1,0,0,1 ],
    [ 1,0,1,0,1,0,0,1 ],
    [ 1,0,1,1,1,0,1,1 ],
    [ 1,0,0,1,0,0,0,1 ],
    [ 1,1,0,1,1,1,0,1 ],
    [ 1,0,0,0,0,0,0,1 ],
    [ 1,1,1,1,1,1,0,1 ]
]










const app = new PIXI.Application({width: 512, height: 512})
app.renderer.backgroundColor = 0x061639;
document.body.appendChild(app.view)

PIXI.loader
    .add([ "images/block.png" ])
    .load(setup);

function addBlock(i,j) {
    let x = j * 64 + 32
    let y = i * 64 + 32

    let blocksprite = new PIXI.Sprite(
        PIXI.loader.resources["images/block.png"].texture
    );
    blocksprite.position.set(x,y)
    blocksprite.anchor.set(0.5, 0.5)
    app.stage.addChild(blocksprite)
}

function setup() {
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            if (room[i][j] === 1) {
                addBlock(i,j)
            }
        }
    }

    let r = 0;

    app.ticker.add(delta => {
        r += (Math.PI / 60) * delta
        app.stage.children.forEach(block => {
            block.rotation = r
        })
    });

}

