class lavadoauto {
    constructor ( enjabonar,enjuague,secado ,implementos){
        this.enjabonado = enjabonar;
        this.enjuagado = enjuague;
        this.secado = secado ; 
        this.implementos = implementos;
    }

    lavar (){
        console.log  (`lavar auto ${this.enjabonar}, ${this.enjuague}, 
        usando: ${this.implementos}`);
        return this ;
       

    }
    secar (){
        console.log ('El auto se esta secando');
        return this;
    }
    entregar (){
        console.log ('auto listo para entregar');
        return this;
    
    }
}
const autoRojo=new lavadoauto ('rapido, externo' ,' rapido , externo','natural',
[ 'Jabon', 'Agua' , 'Sol']);

console.log (autoRojo.lavar());
console.log (autoRojo.secar());
console.log (autoRojo.entregar()); 