function minimumLength<Type extends {length : number}>(obj:Type, minimum: number): Type{
    if (obj.length >= minimum){
        return obj;
    }
    else
    {
    //    return {length: minimum};
    }
}
/*
erro on 7th line stating that
Type '{ length: number; }' is not assignable to type 'Type'.
  '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' 
  could be instantiated with a different subtype of constraint '{ length: number; }'.
*/ 