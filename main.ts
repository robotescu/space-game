controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, racheta, 0, -70)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    sprite.startEffect(effects.fire)
    music.play(music.createSoundEffect(WaveShape.Noise, 1738, 1752, 157, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let racheta: Sprite = null
racheta = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 4 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 4 . . . . . . . 
    . . . . . . e e 5 2 . . . . . . 
    . . . . . . e 4 5 2 . . . . . . 
    . . . . . c c c 2 2 2 . . . . . 
    . . . . e e 4 4 4 5 2 2 . . . . 
    . . e f f f c c 2 2 f f 2 2 . . 
    . e e e e 2 2 4 4 4 4 5 4 2 2 . 
    e e e e e e 2 2 4 4 4 5 4 4 2 2 
    e e e e e e 2 2 4 4 4 4 5 4 2 2 
    `, SpriteKind.Player)
controller.moveSprite(racheta)
racheta.setStayInScreen(true)
effects.starField.startScreenEffect()
racheta.setPosition(73, 110)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, 0, 50)
    projectile.setPosition(randint(0, 160), 0)
    projectile.setKind(SpriteKind.Enemy)
})
