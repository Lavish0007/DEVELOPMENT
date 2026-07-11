 const student={
    name:"Lavish",
    age:21,
    phy:89,
    maths:89,
    chem:79,
    getavg(){
        let avg = (this.phy + this.chem + this.maths)/3
        console.log(avg)
    }
 }
 student.getavg();

 