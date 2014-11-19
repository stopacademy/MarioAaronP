// TODO
game.PlayerEntity = me.Entity.extend({
   init: function(x, y, setting){
       setting.image = "mario";
       setting.spritewidth = "128";
       setting.spriteheigth = "128";
       setting.width = 128;
       setting.heigth = 128;
       this._super(me.Entity, 'init', [x, y, setting]);
       
   },
    
    update:function(){
        
    }
    
});