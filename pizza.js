class pizza {
constructor (masa , tamano,ingredientes){
    this.masa = masa ;
    this.tamano = tamano;
    this.ingredientes =ingredientes;

}

preparar (){
    console.log (`preparando pizza ${this.tamano}, ${this.masa}, 
 ingredientes: ${this.ingrediente}`);
 return this ;


}
hornear (){
    console.log ('La pizza esta en el horno');
    return this;
}
empacar (){
    console.log ('empacando la pizza....');
    console.log ('pizza lista para llevar!');
    return this;

}
}
const pizzaPolloChampiñones=new pizza ('Masa delgada' ,'Grande',
[ 'Queso', 'Pollo' , 'Champiñones']);

console.log (pizzaPolloChampiñones.preparar());
console.log (pizzaPolloChampiñones.hornear());
console.log (pizzaPolloChampiñones.empacar()); 

class combos extends pizza {
    constructor (combo , cantidad ,masa , tamano , ingredientes , bebida , postre )
    {
        super( masa,tamano,ingredientes);
        this.combo=combo;
        this.cantidad=cantidad;
        this.bebida=bebida;
        this.postre=postre;

    }
     elegirCombo(){
         this.preparar();
         this.hornear();
         this.empacar();

         console.log(`Pedido:Combo ${this.combo} - ${this.cantidad} pizza ${this.masa},${this.ingredientes}+
         ${this.bebida}+ ${this.postre}`)
         return this
         
     }
}
const pedido = new combos ('personas',1,'Mediana', 'Masa tradicional',
[ 'Queso', 'Pollo' , 'Champiñones'], 'cocacola  ' ,'rollitos de canela ' , 1 ) ;
console.log (pedido.elegirCombo());