// Immediate Invoked Function Expression


// its is mostly used in database connection k jesay hi hmari  app satrt hu us ka us file k sath connection starrt hu jy 
// Global  scope me variable declare hu rhy huty h or some time function me hm kuch likh rhy huty h 
// toh hm nahi chahty k us function k andar voh dlobal variable problem kry qk child parents sa data get kr skty h os isi liya jo cheez hmm h=function me declare kr rhy huty h 
// voh global scope sa pollute hu jaty h.

// Global scope sa hmain pollution nahi chahiy us ka separately scope bna rhy qk function me scope bn jata h 
// or sath hi sath hm yh chahty h k immediate function  execute hu jy 



(function cold(){
    console.log("Data Base Connected");
}()
);


// ( orCode=()=>{
//     console.log("Data Base 2 Connected");
// })() 

/// without function name ARROW FUNCTION
( ()=>{
        console.log("Data Base 2 Connected");
    })() ;

// Now here consloe.log expect a arrow function

(
    (name)=>{
        console.log(`Data base is Also Connected ${name}`);
    }
)('Batool')