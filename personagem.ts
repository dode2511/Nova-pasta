
export class personagem {
    constructor(
   protected nome:string ,
   protected forca:number ,
   protected mental:number ,
   protected ataque:number,
   protected esquiva:number,
   protected resistencia:number,
   protected vidaMaxima:number,
 protected vidaAtual:number
    ){}

    public atacar(personagem:personagem):void{}
    public contraAtacar(personagem:personagem):void{}
    public regeneracao():void{}
    public aprimorarHabilidade():void{}



}