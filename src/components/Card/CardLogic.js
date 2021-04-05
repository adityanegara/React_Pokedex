
const CardLogic = ()=>{

    const renderPokemonTypes = (types) =>{
 
        const renderTypes = types.map((type, index)=>{
            if(index == 0){
                return <span className = {`badge text-capitalize ${type}`}>{type}</span>
            }else{
               return  <span className = {`badge text-capitalize ml-3 ${type}`}>{type}</span>
            } 
        });
        
        return renderTypes;
    
        
     
    }
    
    return {renderPokemonTypes}
}

export default CardLogic;