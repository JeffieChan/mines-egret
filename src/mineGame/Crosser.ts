/**
 * Created by Gruis on 2015-1-26
 */
module mineGame {
  /**
   * 地图
   */
  export class Crosser extends egret.Bitmap {

    // 工兵的坐标
    private posX:number;
    private posY:number;

    public constructor(posX:number , posY:number) {
      var texture: egret.Texture = RES.getRes("crosserImage");

      super(texture);
      this.posX = posX;
      this.posY = posY;

      this.addEventListener(egret.Event.ADDED_TO_STAGE,
          this.onAddToStage, this);
    }
    
    private onAddToStage(event:egret.Event){
      this.removeEventListener(egret.Event.ADDED_TO_STAGE,
          this.init, this);
    }

    /**初始化*/
    public init() {
      
    }

    public walk() {

    }

    public died() {
      
    }

  }
}